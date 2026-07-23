import"./SMTP.css";

import{useState}from"react";
import{FaEnvelope}from"react-icons/fa";

import useSMTP from"../../../../../hooks/useSMTP";

import ConnectionBadge from"../../../../integrations/ConnectionBadge";
import IntegrationStatusCard from"../../../../integrations/IntegrationStatusCard";
import IntegrationSettingsForm from"../../../../integrations/IntegrationSettingsForm";
import IntegrationHistory from"../../../../integrations/IntegrationHistory";

import smtpFields from"./constants";

function SMTP(){

const{

integration,

history,

loading,

connect,

disconnect,

refresh,

saveSettings

}=useSMTP();

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

<div className="smtp">

<div className="smtp-header">

<h2>

SMTP

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

title="SMTP"

provider="SMTP"

account={integration?.email}

accountType="Email Service"

connected={integration?.connected}

lastSync={integration?.lastSync}

loading={loading}

onConnect={connect}

onDisconnect={disconnect}

onRefresh={refresh}

/>

<IntegrationSettingsForm

fields={smtpFields}

values={settings}

errors={errors}

loading={loading}

onChange={updateField}

onSubmit={()=>saveSettings(settings)}

/>

<IntegrationHistory

title="Email Activity"

data={history}

/>

</div>

);

}

export default SMTP;