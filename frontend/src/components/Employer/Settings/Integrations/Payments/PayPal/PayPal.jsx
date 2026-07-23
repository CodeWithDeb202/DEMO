import"./PayPal.css";

import{useState}from"react";
import{FaPaypal}from"react-icons/fa";

import usePayPal from"../../../../../hooks/usePayPal";

import OAuthButton from"../../../../integrations/OAuthButton";
import ConnectionBadge from"../../../../integrations/ConnectionBadge";
import IntegrationStatusCard from"../../../../integrations/IntegrationStatusCard";
import IntegrationSettingsForm from"../../../../integrations/IntegrationSettingsForm";
import IntegrationHistory from"../../../../integrations/IntegrationHistory";

import paypalFields from"./constants";

function PayPal(){

const{

integration,

history,

loading,

connect,

disconnect,

refresh,

saveSettings

}=usePayPal();

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

<div className="paypal">

<div className="paypal-header">

<h2>

PayPal

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

title="PayPal"

provider="PayPal"

account={integration?.merchantEmail}

accountType={integration?.mode}

connected={integration?.connected}

lastSync={integration?.lastSync}

loading={loading}

onConnect={connect}

onDisconnect={disconnect}

onRefresh={refresh}

/>

<OAuthButton

provider="PayPal"

icon={<FaPaypal/>}

connected={integration?.connected}

loading={loading}

onConnect={connect}

onDisconnect={disconnect}

/>

<IntegrationSettingsForm

fields={paypalFields}

values={settings}

errors={errors}

loading={loading}

onChange={updateField}

onSubmit={()=>saveSettings(settings)}

/>

<IntegrationHistory

title="Payment Activity"

data={history}

/>

</div>

);

}

export default PayPal;