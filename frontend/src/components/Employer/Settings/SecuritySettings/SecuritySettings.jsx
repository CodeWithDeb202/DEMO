import "./SecuritySettings.css";

import { useState } from "react";

import SecurityStats from "../../../components/Employer/Settings/SecuritySettings/SecurityStats";
import PasswordPolicy from "../../../components/Employer/Settings/SecuritySettings/PasswordPolicy";
import TwoFactorAuth from "../../../components/Employer/Settings/SecuritySettings/TwoFactorAuth";
import LoginSessions from "../../../components/Employer/Settings/SecuritySettings/LoginSessions";
import TrustedDevices from "../../../components/Employer/Settings/SecuritySettings/TrustedDevices";
import LoginHistory from "../../../components/Employer/Settings/SecuritySettings/LoginHistory";
import SecurityLogs from "../../../components/Employer/Settings/SecuritySettings/SecurityLogs";
import DangerZone from "../../../components/Employer/Settings/SecuritySettings/DangerZone";

function SecuritySettings() {

    const [settings, setSettings] = useState({

        twoFactor: false,

        passwordExpiry: 90,

        loginAlerts: true

    });

    return (

        <div className="security-settings-page">

            <SecurityStats />

            <PasswordPolicy

                settings={settings}

                setSettings={setSettings}

            />

            <TwoFactorAuth

                settings={settings}

                setSettings={setSettings}

            />

            <LoginSessions />

            <TrustedDevices />

            <LoginHistory />

            <SecurityLogs />

            <DangerZone />

        </div>

    );

}

export default SecuritySettings;