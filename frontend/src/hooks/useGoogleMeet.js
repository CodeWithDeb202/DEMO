import { useCallback, useEffect, useState } from "react";

import {

    connectGoogleMeet,
    disconnectGoogleMeet,
    getGoogleMeet,
    refreshGoogleMeet,
    saveGoogleMeetSettings,
    getGoogleMeetHistory,
    getGoogleMeetMeetings,
    createGoogleMeetMeeting,
    updateGoogleMeetMeeting,
    deleteGoogleMeetMeeting

} from "../services/googleMeetService";

function useGoogleMeet() {

    const [integration, setIntegration] = useState(null);

    const [history, setHistory] = useState([]);

    const [meetings, setMeetings] = useState([]);

    const [loading, setLoading] = useState(false);

    const loadIntegration = useCallback(async () => {

        try {

            setLoading(true);

            const response = await getGoogleMeet();

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

            const response = await getGoogleMeetHistory();

            setHistory(response.data || []);

        }

        catch (error) {

            console.error(error);

        }

    }, []);

    const loadMeetings = useCallback(async () => {

        try {

            const response = await getGoogleMeetMeetings();

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

            await connectGoogleMeet();

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

            await disconnectGoogleMeet();

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

            await refreshGoogleMeet();

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

            await saveGoogleMeetSettings(settings);

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

            await createGoogleMeetMeeting(payload);

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

            await updateGoogleMeetMeeting(

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

            await deleteGoogleMeetMeeting(

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

export default useGoogleMeet;