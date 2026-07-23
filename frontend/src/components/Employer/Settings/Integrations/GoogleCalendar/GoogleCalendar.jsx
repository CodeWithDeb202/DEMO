import "./GoogleCalendar.css";

import { useState } from "react";

import { FaGoogle } from "react-icons/fa";

import useGoogleCalendar from "../../../../../hooks/useGoogleCalendar";

import OAuthButton from "../../../../integrations/OAuthButton";
import ConnectionBadge from "../../../../integrations/ConnectionBadge";
import IntegrationStatusCard from "../../../../integrations/IntegrationStatusCard";
import IntegrationSettingsForm from "../../../../integrations/IntegrationSettingsForm";
import IntegrationHistory from "../../../../integrations/IntegrationHistory";

import googleCalendarFields from "./constants";

function GoogleCalendar(){

    const{

        integration,

        history,

        loading,

        connect,

        disconnect,

        refresh,

        saveSettings

    }=useGoogleCalendar();

    const[settings,setSettings]=useState(

        integration?.settings||{}

    );

    const[errors]=useState({});

    const updateField=(name,value)=>{

        setSettings(previous=>({

            ...previous,

            [name]:value

        }));

    };

    return(

        <div className="google-calendar">

            <div className="google-calendar-header">

                <h2>

                    Google Calendar

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

                title="Google Calendar"

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

                provider="Google Calendar"

                icon={<FaGoogle/>}

                connected={integration?.connected}

                loading={loading}

                onConnect={connect}

                onDisconnect={disconnect}

            />

            <IntegrationSettingsForm

                fields={googleCalendarFields}

                values={settings}

                errors={errors}

                loading={loading}

                onChange={updateField}

                onSubmit={()=>saveSettings(settings)}

            />

            <IntegrationHistory

                title="Calendar Activity"

                data={history}

            />

        </div>

    );

}

export default GoogleCalendar;