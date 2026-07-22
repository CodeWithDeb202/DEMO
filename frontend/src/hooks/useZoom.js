import { useCallback, useEffect, useState } from "react";

import {

    getZoomIntegration,
    connectZoom,
    disconnectZoom,
    updateZoomSettings,
    testZoomConnection,
    getMeetingHistory

} from "../services/zoomService";

import {

    DEFAULT_SETTINGS,
    ZOOM_STATUS

} from "../constants";

function useZoom() {

    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);

    const [testing, setTesting] = useState(false);

    const [connecting, setConnecting] = useState(false);

    const [error, setError] = useState(null);

    const [integration, setIntegration] = useState(null);

    const [history, setHistory] = useState([]);

    const [settings, setSettings] = useState(
        DEFAULT_SETTINGS
    );

    //--------------------------------------------------
    // Load Integration
    //--------------------------------------------------

    const loadIntegration = useCallback(async () => {

        try {

            setLoading(true);

            setError(null);

            const data = await getZoomIntegration();

            setIntegration(data);

            setSettings(

                data.settings ||

                DEFAULT_SETTINGS

            );

        }

        catch (err) {

            setError(

                err.response?.data?.message ||

                "Unable to load Zoom integration."

            );

        }

        finally {

            setLoading(false);

        }

    }, []);

    //--------------------------------------------------
    // Load History
    //--------------------------------------------------

    const loadHistory = useCallback(async () => {

        try {

            const data = await getMeetingHistory();

            setHistory(

                data.items ||

                []

            );

        }

        catch {

            // Ignore silently

        }

    }, []);

    //--------------------------------------------------
    // Connect Zoom
    //--------------------------------------------------

    const connect = async () => {

        try {

            setConnecting(true);

            setError(null);

            await connectZoom();

            await loadIntegration();

        }

        catch (err) {

            setError(

                err.response?.data?.message ||

                "Unable to connect Zoom."

            );

        }

        finally {

            setConnecting(false);

        }

    };

    //--------------------------------------------------
    // Disconnect
    //--------------------------------------------------

    const disconnect = async () => {

        try {

            setConnecting(true);

            setError(null);

            await disconnectZoom();

            await loadIntegration();

        }

        catch (err) {

            setError(

                err.response?.data?.message ||

                "Unable to disconnect Zoom."

            );

        }

        finally {

            setConnecting(false);

        }

    };

    //--------------------------------------------------
    // Save Settings
    //--------------------------------------------------

    const saveSettings = async () => {

        try {

            setSaving(true);

            setError(null);

            await updateZoomSettings(settings);

            await loadIntegration();

        }

        catch (err) {

            setError(

                err.response?.data?.message ||

                "Unable to save settings."

            );

        }

        finally {

            setSaving(false);

        }

    };

    //--------------------------------------------------
    // Test Connection
    //--------------------------------------------------

    const testConnection = async () => {

        try {

            setTesting(true);

            setError(null);

            return await testZoomConnection();

        }

        catch (err) {

            setError(

                err.response?.data?.message ||

                "Connection test failed."

            );

            return null;

        }

        finally {

            setTesting(false);

        }

    };

    //--------------------------------------------------
    // Update Form
    //--------------------------------------------------

    const updateField = (

        name,

        value

    ) => {

        setSettings(previous => ({

            ...previous,

            [name]: value

        }));

    };

    //--------------------------------------------------
    // First Load
    //--------------------------------------------------

    useEffect(() => {

        loadIntegration();

        loadHistory();

    }, [

        loadIntegration,

        loadHistory

    ]);

    return {

        loading,

        saving,

        testing,

        connecting,

        error,

        history,

        settings,

        integration,

        updateField,

        connect,

        disconnect,

        saveSettings,

        testConnection,

        reload: loadIntegration

    };

}

export default useZoom;