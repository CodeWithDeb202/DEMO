import "./NotificationPreferences.css";

import { useState } from "react";

import NotificationStats from "../../../components/Employer/Settings/NotificationPreferences/NotificationStats";
import EmailNotifications from "../../../components/Employer/Settings/NotificationPreferences/EmailNotifications";
import PushNotifications from "../../../components/Employer/Settings/NotificationPreferences/PushNotifications";
import SMSNotifications from "../../../components/Employer/Settings/NotificationPreferences/SMSNotifications";
import InAppNotifications from "../../../components/Employer/Settings/NotificationPreferences/InAppNotifications";
import NotificationCategories from "../../../components/Employer/Settings/NotificationPreferences/NotificationCategories";
import QuietHours from "../../../components/Employer/Settings/NotificationPreferences/QuietHours";
import NotificationHistory from "../../../components/Employer/Settings/NotificationPreferences/NotificationHistory";

function NotificationPreferences() {

    const [settings, setSettings] = useState({

        email: true,

        push: true,

        sms: false,

        inApp: true,

        quietHours: false

    });

    return (

        <div className="notification-preferences-page">

            <NotificationStats />

            <EmailNotifications

                settings={settings}

                setSettings={setSettings}

            />

            <PushNotifications

                settings={settings}

                setSettings={setSettings}

            />

            <SMSNotifications

                settings={settings}

                setSettings={setSettings}

            />

            <InAppNotifications

                settings={settings}

                setSettings={setSettings}

            />

            <NotificationCategories

                settings={settings}

                setSettings={setSettings}

            />

            <QuietHours

                settings={settings}

                setSettings={setSettings}

            />

            <NotificationHistory />

        </div>

    );

}

export default NotificationPreferences;