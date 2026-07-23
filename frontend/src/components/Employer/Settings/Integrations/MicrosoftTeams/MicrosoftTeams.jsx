import "./MicrosoftTeams.css";

import { useState } from "react";

import { FaMicrosoft } from "react-icons/fa";

import useMicrosoftTeams from "../../../../../hooks/useMicrosoftTeams";

import OAuthButton from "../../../../integrations/OAuthButton";
import ConnectionBadge from "../../../../integrations/ConnectionBadge";
import IntegrationStatusCard from "../../../../integrations/IntegrationStatusCard";
import IntegrationSettingsForm from "../../../../integrations/IntegrationSettingsForm";
import IntegrationHistory from "../../../../integrations/IntegrationHistory";

import microsoftTeamsFields from "./constants";

function MicrosoftTeams(){

    const{

        integration,

        history,

        loading,

        connect,

        disconnect,

        refresh,

        saveSettings

    } = useMicrosoftTeams();

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

        <div className="microsoft-teams">

            <div className="microsoft-teams-header">

                <h2>

                    Microsoft Teams

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

                title="Microsoft Teams"

                provider="Microsoft"

                account={integration?.email}

                accountType="Microsoft 365"

                connected={integration?.connected}

                lastSync={integration?.lastSync}

                loading={loading}

                onConnect={connect}

                onDisconnect={disconnect}

                onRefresh={refresh}

            />

            <OAuthButton

                provider="Microsoft Teams"

                icon={<FaMicrosoft/>}

                connected={integration?.connected}

                loading={loading}

                onConnect={connect}

                onDisconnect={disconnect}

            />

            <IntegrationSettingsForm

                fields={microsoftTeamsFields}

                values={settings}

                errors={errors}

                loading={loading}

                onChange={updateField}

                onSubmit={()=>saveSettings(settings)}

            />

            <IntegrationHistory

                title="Teams Activity"

                data={history}

            />

        </div>

    );

}

export default MicrosoftTeams;