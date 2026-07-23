import"./Settings.css";

import{useState}from"react";

import{settingTabs}from"./constants";

import General from"./General";
import Account from"./Account";
import Security from"./Security";
import Notifications from"./Notifications";

import GoogleMeet from"./GoogleMeet";
import Zoom from"./Zoom";
import MicrosoftTeams from"./MicrosoftTeams";

import GoogleCalendar from"./GoogleCalendar";
import OutlookCalendar from"./OutlookCalendar";

import Razorpay from"./Razorpay";
import Stripe from"./Stripe";
import PayPal from"./PayPal";

import SMTP from"./SMTP";
import Cloudinary from"./Cloudinary";

function Settings(){

const[activeTab,setActiveTab]=useState("general");

const renderContent=()=>{

switch(activeTab){

case"general":
return<General/>;

case"account":
return<Account/>;

case"security":
return<Security/>;

case"notifications":
return<Notifications/>;

case"googleMeet":
return<GoogleMeet/>;

case"zoom":
return<Zoom/>;

case"microsoftTeams":
return<MicrosoftTeams/>;

case"googleCalendar":
return<GoogleCalendar/>;

case"outlookCalendar":
return<OutlookCalendar/>;

case"razorpay":
return<Razorpay/>;

case"stripe":
return<Stripe/>;

case"paypal":
return<PayPal/>;

case"smtp":
return<SMTP/>;

case"cloudinary":
return<Cloudinary/>;

default:
return<General/>;

}

};

return(

<div className="settings">

<div className="settings-sidebar">

{

settingTabs.map(tab=>(

<button

key={tab.id}

className={

activeTab===tab.id

?

"active"

:

""

}

onClick={()=>setActiveTab(tab.id)}

>

{tab.label}

</button>

))

}

</div>

<div className="settings-content">

{renderContent()}

</div>

</div>

);

}

export default Settings;