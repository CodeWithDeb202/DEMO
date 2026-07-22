import "./Notifications.css";

import { useState } from "react";

import NotificationStats from "../../../components/Employer/Notifications/NotificationStats";
import NotificationFilters from "../../../components/Employer/Notifications/NotificationFilters";
import NotificationList from "../../../components/Employer/Notifications/NotificationList";
import NotificationHistory from "../../../components/Employer/Notifications/NotificationHistory";
import ScheduledNotifications from "../../../components/Employer/Notifications/ScheduledNotifications";
import NotificationTemplates from "../../../components/Employer/Notifications/NotificationTemplates";
import NotificationSettings from "../../../components/Employer/Notifications/NotificationSettings";

import SendNotificationModal from "../../../components/Employer/Notifications/SendNotificationModal";
import NotificationDetailsModal from "../../../components/Employer/Notifications/NotificationDetailsModal";
import BulkNotificationModal from "../../../components/Employer/Notifications/BulkNotificationModal";

function Notifications() {

    const [filters, setFilters] = useState({

        search: "",

        type: "",

        status: ""

    });

    const [selectedNotification, setSelectedNotification] = useState(null);

    const [showSendModal, setShowSendModal] = useState(false);

    const [showBulkModal, setShowBulkModal] = useState(false);

    const [showDetailsModal, setShowDetailsModal] = useState(false);

    const [settings, setSettings] = useState({

        email: true,

        push: true,

        sms: false,

        weeklyReport: true

    });

    const stats = {

        total: 84,

        sentToday: 12,

        scheduled: 5,

        unread: 18

    };

    const notifications = [];

    const templates = [];

    const history = [];

    const scheduledNotifications = [];

    const handleView = (notification) => {

        setSelectedNotification(notification);

        setShowDetailsModal(true);

    };

    return (

        <div className="notifications-page">

            <NotificationStats

                stats={stats}

            />

            <NotificationFilters

                filters={filters}

                onChange={setFilters}

                onCreate={() =>

                    setShowSendModal(true)

                }

            />

            <NotificationList

                notifications={notifications}

                onView={handleView}

                onEdit={() => { }}

                onDelete={() => { }}

                onSchedule={() => { }}

            />

            <NotificationHistory

                history={history}

            />

            <ScheduledNotifications

                notifications={scheduledNotifications}

                onSendNow={() => { }}

                onEdit={() => { }}

                onDelete={() => { }}

            />

            <NotificationTemplates

                templates={templates}

                onUse={() => { }}

                onEdit={() => { }}

                onDelete={() => { }}

            />

            <NotificationSettings

                settings={settings}

                onChange={setSettings}

                onSave={() => { }}

            />

            <SendNotificationModal

                open={showSendModal}

                onClose={() =>

                    setShowSendModal(false)

                }

                onSend={() =>

                    setShowSendModal(false)

                }

            />

            <BulkNotificationModal

                open={showBulkModal}

                onClose={() =>

                    setShowBulkModal(false)

                }

                onSend={() =>

                    setShowBulkModal(false)

                }

            />

            <NotificationDetailsModal

                open={showDetailsModal}

                notification={selectedNotification}

                onClose={() =>

                    setShowDetailsModal(false)

                }

            />

        </div>

    );

}

export default Notifications;