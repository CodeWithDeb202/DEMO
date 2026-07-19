import "./EmployerDashboard.css";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import WelcomeCard from "../../components/Common/CommonProfilePage/WelcomeCard";
import NotificationsWidget from "../../components/Common/CommonProfilePage/NotificationsWidget";

import CompanyProfileCard from "../../components/EmployerDashboard/CompanyProfileCard";
import StatsCards from "../../components/EmployerDashboard/StatsCards";
import QuickActions from "../../components/EmployerDashboard/QuickActions";
import RecentInternships from "../../components/EmployerDashboard/RecentInternships";
import RecentApplications from "../../components/EmployerDashboard/RecentApplications";
import UpcomingInterviews from "../../components/EmployerDashboard/UpcomingInterviews";
import DashboardCalendar from "../../components/EmployerDashboard/DashboardCalendar";
import DashboardChart from "../../components/EmployerDashboard/DashboardChart";
import RecentActivities from "../../components/EmployerDashboard/RecentActivities";

import {

    getEmployerDashboard

} from "../../services/api/dashboardService";

const EmployerDashboard = () => {

    const [loading, setLoading] = useState(true);

    const [dashboard, setDashboard] = useState({

        employer: {},

        company: {},

        stats: {},

        internships: [],

        applications: [],

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

            const res = await getEmployerDashboard();

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

                Loading Employer Dashboard...

            </div>

        );

    }

    return (

        <div className="employer-dashboard">

            <WelcomeCard

                user={dashboard.employer}

            />

            <CompanyProfileCard

                company={dashboard.company}

            />

            <StatsCards

                stats={dashboard.stats}

            />

            <QuickActions />

            <div className="dashboard-grid">

                <div className="dashboard-left">

                    <RecentInternships

                        internships={dashboard.internships}

                    />

                    <RecentApplications

                        applications={dashboard.applications}

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

export default EmployerDashboard;