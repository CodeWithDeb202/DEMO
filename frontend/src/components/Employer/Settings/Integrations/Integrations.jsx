import "./Integrations.css";

import GoogleCalendar from "../../../components/Employer/Settings/Integrations/GoogleCalendar";
import OutlookCalendar from "../../../components/Employer/Settings/Integrations/OutlookCalendar";
import GoogleMeet from "../../../components/Employer/Settings/Integrations/GoogleMeet";
import ZoomIntegration from "../../../components/Employer/Settings/Integrations/ZoomIntegration";
import MicrosoftTeams from "../../../components/Employer/Settings/Integrations/MicrosoftTeams";
import SlackIntegration from "../../../components/Employer/Settings/Integrations/SlackIntegration";
import DiscordIntegration from "../../../components/Employer/Settings/Integrations/DiscordIntegration";
import SMTPSettings from "../../../components/Employer/Settings/Integrations/SMTPSettings";
import SMSGateway from "../../../components/Employer/Settings/Integrations/SMSGateway";
import PaymentGateway from "../../../components/Employer/Settings/Integrations/PaymentGateway";
import CloudStorage from "../../../components/Employer/Settings/Integrations/CloudStorage";
import Webhooks from "../../../components/Employer/Settings/Integrations/Webhooks";
import IntegrationLogs from "../../../components/Employer/Settings/Integrations/IntegrationLogs";
import ConnectedApps from "../../../components/Employer/Settings/Integrations/ConnectedApps";
import APITokens from "../../../components/Employer/Settings/Integrations/APITokens";

function Integrations() {

    return (

        <div className="integrations-page">

            <GoogleCalendar />

            <OutlookCalendar />

            <GoogleMeet />

            <ZoomIntegration />

            <MicrosoftTeams />

            <SlackIntegration />

            <DiscordIntegration />

            <SMTPSettings />

            <SMSGateway />

            <PaymentGateway />

            <CloudStorage />

            <Webhooks />

            <IntegrationLogs />

            <ConnectedApps />

            <APITokens />

        </div>

    );

}

export default Integrations;