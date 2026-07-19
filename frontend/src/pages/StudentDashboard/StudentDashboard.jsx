import "./StudentDashboard.css";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import WelcomeCard from "../../components/Common/Profile/WelcomeCard";
import ProfileProgress from "../../components/Common/CommonProfilePage/ProfileProgress";

import StatsCards from "../../components/Dashboard/StatsCards";
import QuickActions from "../../components/Dashboard/QuickActions";
import RecentApplications from "../../components/Dashboard/RecentApplications";
import RecommendedInternships from "../../components/Dashboard/RecommendedInternships";
import UpcomingInterviews from "../../components/Dashboard/UpcomingInterviews";
import RecentActivities from "../../components/Dashboard/RecentActivities";
import NotificationsWidget from "../../components/Dashboard/NotificationsWidget";
import DashboardCalendar from "../../components/Dashboard/DashboardCalendar";
import DashboardChart from "../../components/Dashboard/DashboardChart";

import {
    getStudentDashboard
} from "../../services/api/dashboardService";

const StudentDashboard = () => {

    const [loading, setLoading] = useState(true);

    const [dashboard, setDashboard] = useState({

        user: {},

        stats: {},

        applications: [],

        recommendedInternships: [],

        interviews: [],

        notifications: [],

        activities: [],

        calendarEvents: [],

        monthlyApplications: [],

        applicationStatus: []

    });

    useEffect(() => {

        // eslint-disable-next-line react-hooks/immutability
        fetchDashboard();

    }, []);

    const fetchDashboard = async () => {

        try {

            setLoading(true);

            const res = await getStudentDashboard();

            setDashboard(res.dashboard);

        }

        catch (error) {

            console.log(error);

            toast.error("Failed to load dashboard");

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div className="dashboard-loading">

                Loading Dashboard...

            </div>

        );

    }

    return (

        <div className="student-dashboard">

            <WelcomeCard

                user={dashboard.user}

            />

            <StatsCards

                stats={dashboard.stats}

            />

            <ProfileProgress

                user={dashboard.user}

            />

            <QuickActions />

            <div className="dashboard-grid">

                <div className="dashboard-left">

                    <RecentApplications

                        applications={dashboard.applications}

                    />

                    <RecommendedInternships

                        internships={dashboard.recommendedInternships}

                    />

                    <UpcomingInterviews

                        interviews={dashboard.interviews}

                    />

                    <RecentActivities

                        activities={dashboard.activities}

                    />

                </div>

                <div className="dashboard-right">

                    <NotificationsWidget

                        notifications={dashboard.notifications}

                    />

                    <DashboardCalendar

                        events={dashboard.calendarEvents}

                    />

                </div>

            </div>

            <DashboardChart

                monthlyApplications={dashboard.monthlyApplications}

                applicationStatus={dashboard.applicationStatus}

            />

        </div>

    );

};

export default StudentDashboard;