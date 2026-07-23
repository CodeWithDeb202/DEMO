import"./Cloudinary.css";

import{useState}from"react";
import{FaCloudUploadAlt}from"react-icons/fa";

import useCloudinary from"../../../../../hooks/useCloudinary";

import ConnectionBadge from"../../../../integrations/ConnectionBadge";
import IntegrationStatusCard from"../../../../integrations/IntegrationStatusCard";
import IntegrationSettingsForm from"../../../../integrations/IntegrationSettingsForm";
import IntegrationHistory from"../../../../integrations/IntegrationHistory";

import cloudinaryFields from"./constants";

function Cloudinary(){

const{

integration,

history,

loading,

connect,

disconnect,

refresh,

saveSettings

}=useCloudinary();

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

<div className="cloudinary">

<div className="cloudinary-header">

<h2>

Cloudinary

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

title="Cloudinary"

provider="Cloudinary"

account={integration?.cloudName}

accountType="Media Storage"

connected={integration?.connected}

lastSync={integration?.lastSync}

loading={loading}

onConnect={connect}

onDisconnect={disconnect}

onRefresh={refresh}

/>

<IntegrationSettingsForm

fields={cloudinaryFields}

values={settings}

errors={errors}

loading={loading}

onChange={updateField}

onSubmit={()=>saveSettings(settings)}

/>

<IntegrationHistory

title="Upload Activity"

data={history}

/>

</div>

);

}

export default Cloudinary;