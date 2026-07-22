import "./EmailTemplates.css";

import EmailTemplateStats from "../../../components/Employer/Settings/EmailTemplates/EmailTemplateStats";
import TemplateList from "../../../components/Employer/Settings/EmailTemplates/TemplateList";
import TemplateEditor from "../../../components/Employer/Settings/EmailTemplates/TemplateEditor";
import TemplatePreview from "../../../components/Employer/Settings/EmailTemplates/TemplatePreview";
import TemplateVariables from "../../../components/Employer/Settings/EmailTemplates/TemplateVariables";
import SendTestEmail from "../../../components/Employer/Settings/EmailTemplates/SendTestEmail";
import VersionHistory from "../../../components/Employer/Settings/EmailTemplates/VersionHistory";

function EmailTemplates() {

    return (

        <div className="email-templates-page">

            <EmailTemplateStats />

            <TemplateList />

            <TemplateEditor />

            <TemplatePreview />

            <TemplateVariables />

            <SendTestEmail />

            <VersionHistory />

        </div>

    );

}

export default EmailTemplates;