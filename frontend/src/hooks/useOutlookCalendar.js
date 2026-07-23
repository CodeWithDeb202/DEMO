import { useCallback, useEffect, useState } from "react";

import {

    connectOutlookCalendar,
    disconnectOutlookCalendar,
    getOutlookCalendar,
    refreshOutlookCalendar,
    saveOutlookCalendarSettings,
    getOutlookCalendarHistory,
    getOutlookCalendarEvents,
    createOutlookCalendarEvent,
    updateOutlookCalendarEvent,
    deleteOutlookCalendarEvent

} from "../services/outlookCalendarService";

function useOutlookCalendar() {

    const [integration, setIntegration] = useState(null);

    const [history, setHistory] = useState([]);

    const [events, setEvents] = useState([]);

    const [loading, setLoading] = useState(false);

    const loadIntegration = useCallback(async () => {

        try {

            setLoading(true);

            const response = await getOutlookCalendar();

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

            const response = await getOutlookCalendarHistory();

            setHistory(response.data || []);

        }

        catch (error) {

            console.error(error);

        }

    }, []);

    const loadEvents = useCallback(async () => {

        try {

            const response = await getOutlookCalendarEvents();

            setEvents(response.data || []);

        }

        catch (error) {

            console.error(error);

        }

    }, []);

    useEffect(() => {

        loadIntegration();

        loadHistory();

        loadEvents();

    }, [

        loadIntegration,

        loadHistory,

        loadEvents

    ]);

    const connect = async () => {

        try {

            setLoading(true);

            await connectOutlookCalendar();

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

            await disconnectOutlookCalendar();

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

            await refreshOutlookCalendar();

            await loadIntegration();

            await loadHistory();

            await loadEvents();

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

            await saveOutlookCalendarSettings(settings);

            await loadIntegration();

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    const createEvent = async (payload) => {

        try {

            setLoading(true);

            await createOutlookCalendarEvent(payload);

            await loadEvents();

            await loadHistory();

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    const updateEvent = async (

        eventId,

        payload

    ) => {

        try {

            setLoading(true);

            await updateOutlookCalendarEvent(

                eventId,

                payload

            );

            await loadEvents();

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    const deleteEvent = async (

        eventId

    ) => {

        try {

            setLoading(true);

            await deleteOutlookCalendarEvent(

                eventId

            );

            await loadEvents();

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

        events,

        loading,

        connect,

        disconnect,

        refresh,

        saveSettings,

        createEvent,

        updateEvent,

        deleteEvent

    };

}

export default useOutlookCalendar;