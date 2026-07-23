import "./ZoomIntegration.css";

import { useState } from "react";
import { FaVideo } from "react-icons/fa";

import useZoom from "../../../../../hooks/useZoom";

import OAuthButton from "../../../../integrations/OAuthButton";
import ConnectionBadge from "../../../../integrations/ConnectionBadge";
import IntegrationStatusCard from "../../../../integrations/IntegrationStatusCard";
import IntegrationSettingsForm from "../../../../integrations/IntegrationSettingsForm";
import IntegrationHistory from "../../../../integrations/IntegrationHistory";

import zoomFields from "./constants";

function ZoomIntegration() {

    const {

        integration,

        history,

        loading,

        connect,

        disconnect,

        refresh,

        saveSettings

    } = useZoom();

    const [settings, setSettings] = useState(

        integration?.settings || {}

    );

    const [errors] = useState({});

    const updateField = (name, value) => {

        setSettings(previous => ({

            ...previous,

            [name]: value

        }));

    };

    return (

        <div className="zoom-integration">

            <div className="zoom-header">

                <h2>

                    Zoom Integration

                </h2>

                <ConnectionBadge

                    status={

                        integration?.connected

                        ?

                        "CONNECTED"

                        :

                        "DISCONNECTED"

                    }

                />

            </div>

            <IntegrationStatusCard

                title="Zoom"

                provider="Zoom Video Communications"

                account={integration?.email}

                accountType={integration?.plan}

                connected={integration?.connected}

                lastSync={integration?.lastSync}

                loading={loading}

                onConnect={connect}

                onDisconnect={disconnect}

                onRefresh={refresh}

            />

            <OAuthButton

                provider="Zoom"

                icon={<FaVideo />}

                connected={integration?.connected}

                loading={loading}

                onConnect={connect}

                onDisconnect={disconnect}

            />

            <IntegrationSettingsForm

                fields={zoomFields}

                values={settings}

                errors={errors}

                loading={loading}

                onChange={updateField}

                onSubmit={() =>

                    saveSettings(settings)

                }

            />

            <IntegrationHistory

                title="Zoom Activity"

                data={history}

            />

        </div>

    );

}

export default ZoomIntegration;