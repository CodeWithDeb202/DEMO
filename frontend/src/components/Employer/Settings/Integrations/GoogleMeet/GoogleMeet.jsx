import "./GoogleMeet.css";

import { useState } from "react";

import { FaGoogle } from "react-icons/fa";

import useGoogleMeet from "../../../../../hooks/useGoogleMeet";

import OAuthButton from "../../../../integrations/OAuthButton";
import ConnectionBadge from "../../../../integrations/ConnectionBadge";
import IntegrationStatusCard from "../../../../integrations/IntegrationStatusCard";
import IntegrationSettingsForm from "../../../../integrations/IntegrationSettingsForm";
import IntegrationHistory from "../../../../integrations/IntegrationHistory";

import googleMeetFields from "./constants";

function GoogleMeet(){

    const{

        integration,

        history,

        loading,

        connect,

        disconnect,

        refresh,

        saveSettings

    } = useGoogleMeet();

    const[settings,setSettings] = useState(

        integration?.settings || {}

    );

    const[errors] = useState({});

    const updateField = (name,value)=>{

        setSettings(previous=>({

            ...previous,

            [name]:value

        }));

    };

    return(

        <div className="google-meet">

            <div className="google-meet-header">

                <h2>

                    Google Meet

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

                title="Google Meet"

                provider="Google"

                account={integration?.email}

                accountType="Google Workspace"

                connected={integration?.connected}

                lastSync={integration?.lastSync}

                loading={loading}

                onConnect={connect}

                onDisconnect={disconnect}

                onRefresh={refresh}

            />

            <OAuthButton

                provider="Google Meet"

                icon={<FaGoogle />}

                connected={integration?.connected}

                loading={loading}

                onConnect={connect}

                onDisconnect={disconnect}

            />

            <IntegrationSettingsForm

                fields={googleMeetFields}

                values={settings}

                errors={errors}

                loading={loading}

                onChange={updateField}

                onSubmit={()=>saveSettings(settings)}

            />

            <IntegrationHistory

                title="Meeting Activity"

                data={history}

            />

        </div>

    );

}

export default GoogleMeet;