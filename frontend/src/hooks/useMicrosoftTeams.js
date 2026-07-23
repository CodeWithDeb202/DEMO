import { useCallback, useEffect, useState } from "react";

import {

    connectMicrosoftTeams,
    disconnectMicrosoftTeams,
    getMicrosoftTeams,
    refreshMicrosoftTeams,
    saveMicrosoftTeamsSettings,
    getMicrosoftTeamsHistory,
    getMicrosoftTeamsMeetings,
    createMicrosoftTeamsMeeting,
    updateMicrosoftTeamsMeeting,
    deleteMicrosoftTeamsMeeting

} from "../services/microsoftTeamsService";

function useMicrosoftTeams() {

    const [integration, setIntegration] = useState(null);

    const [history, setHistory] = useState([]);

    const [meetings, setMeetings] = useState([]);

    const [loading, setLoading] = useState(false);

    const loadIntegration = useCallback(async () => {

        try {

            setLoading(true);

            const response = await getMicrosoftTeams();

            setIntegration(response.data);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    }, []);

    const loadHistory = useCallback(async () => {

        try {

            const response = await getMicrosoftTeamsHistory();

            setHistory(response.data || []);

        }

        catch (error) {

            console.error(error);

        }

    }, []);

    const loadMeetings = useCallback(async () => {

        try {

            const response = await getMicrosoftTeamsMeetings();

            setMeetings(response.data || []);

        }

        catch (error) {

            console.error(error);

        }

    }, []);

    useEffect(() => {

        loadIntegration();

        loadHistory();

        loadMeetings();

    }, [

        loadIntegration,

        loadHistory,

        loadMeetings

    ]);

    const connect = async () => {

        try {

            setLoading(true);

            await connectMicrosoftTeams();

            await loadIntegration();

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    const disconnect = async () => {

        try {

            setLoading(true);

            await disconnectMicrosoftTeams();

            await loadIntegration();

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    const refresh = async () => {

        try {

            setLoading(true);

            await refreshMicrosoftTeams();

            await loadIntegration();

            await loadHistory();

            await loadMeetings();

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    const saveSettings = async (settings) => {

        try {

            setLoading(true);

            await saveMicrosoftTeamsSettings(settings);

            await loadIntegration();

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    const createMeeting = async (payload) => {

        try {

            setLoading(true);

            await createMicrosoftTeamsMeeting(payload);

            await loadMeetings();

            await loadHistory();

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    const updateMeeting = async (

        meetingId,

        payload

    ) => {

        try {

            setLoading(true);

            await updateMicrosoftTeamsMeeting(

                meetingId,

                payload

            );

            await loadMeetings();

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    const deleteMeeting = async (

        meetingId

    ) => {

        try {

            setLoading(true);

            await deleteMicrosoftTeamsMeeting(

                meetingId

            );

            await loadMeetings();

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    return {

        integration,

        history,

        meetings,

        loading,

        connect,

        disconnect,

        refresh,

        saveSettings,

        createMeeting,

        updateMeeting,

        deleteMeeting

    };

}

export default useMicrosoftTeams;