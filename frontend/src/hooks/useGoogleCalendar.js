import { useCallback, useEffect, useState } from "react";

import {

    connectGoogleCalendar,
    disconnectGoogleCalendar,
    getGoogleCalendar,
    refreshGoogleCalendar,
    saveGoogleCalendarSettings,
    getGoogleCalendarHistory

} from "../services/googleCalendarService";

function useGoogleCalendar() {

    const [integration, setIntegration] = useState(null);

    const [history, setHistory] = useState([]);

    const [loading, setLoading] = useState(false);

    const loadIntegration = useCallback(async () => {

        try {

            setLoading(true);

            const response = await getGoogleCalendar();

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

            const response = await getGoogleCalendarHistory();

            setHistory(response.data || []);

        }

        catch (error) {

            console.error(error);

        }

    }, []);

    useEffect(() => {

        loadIntegration();

        loadHistory();

    }, [

        loadIntegration,

        loadHistory

    ]);

    const connect = async () => {

        try {

            setLoading(true);

            await connectGoogleCalendar();

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

            await disconnectGoogleCalendar();

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

            await refreshGoogleCalendar();

            await loadIntegration();

            await loadHistory();

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

            await saveGoogleCalendarSettings(settings);

            await loadIntegration();

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

        loading,

        connect,

        disconnect,

        refresh,

        saveSettings

    };

}

export default useGoogleCalendar;