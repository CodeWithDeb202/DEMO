import "./AdminDashboard.css";

import { useEffect, useState } from "react";

import WelcomeCard from "../../../components/AdminDashboard/WelcomeCard";
import StatsCards from "../../../components/AdminDashboard/StatsCards";
import QuickActions from "../../../components/AdminDashboard/QuickActions";
import RecentUsers from "../../../components/AdminDashboard/RecentUsers";
import RecentCompanies from "../../../components/AdminDashboard/RecentCompanies";
import PendingVerifications from "../../../components/AdminDashboard/PendingVerifications";
import RecentInternships from "../../../components/AdminDashboard/RecentInternships";
import ReportsWidget from "../../../components/AdminDashboard/ReportsWidget";
import DashboardChart from "../../../components/AdminDashboard/DashboardChart";
import DashboardCalendar from "../../../components/AdminDashboard/DashboardCalendar";
import NotificationsWidget from "../../../components/AdminDashboard/NotificationsWidget";
import RecentActivities from "../../../components/AdminDashboard/RecentActivities";
import SystemHealth from "../../../components/AdminDashboard/SystemHealth";

import {getAdminDashboard} from "../../../services/api/dashboardService";

const AdminDashboard = () => {

    const [

        dashboard,

        setDashboard

    ] = useState(null);

    const [

        loading,

        setLoading

    ] = useState(true);

    useEffect(() => {

        // eslint-disable-next-line react-hooks/immutability
        fetchDashboard();

    }, []);

    const fetchDashboard = async () => {

        try{

            const res = await getAdminDashboard();

            setDashboard(res.data);

        }

        catch(error){

            console.log(error);

        }

        finally{

            setLoading(false);

        }

    };

    if(loading){

        return(

            <div className="dashboard-loading">

                Loading Dashboard...

            </div>

        );

    }

    return(

        <div className="admin-dashboard">

            <WelcomeCard

                admin={dashboard.admin}

            />

            <StatsCards

                stats={dashboard.stats}

            />

            <QuickActions/>

            <DashboardChart

                userGrowth={dashboard.userGrowth}

                registrations={dashboard.registrations}

                userDistribution={dashboard.userDistribution}

                internshipGrowth={dashboard.internshipGrowth}

            />

            <ReportsWidget

                reports={dashboard.reports}

            />

            <div className="dashboard-grid">

                <RecentUsers

                    users={dashboard.users}

                />

                <RecentCompanies

                    companies={dashboard.companies}

                />

            </div>

            <PendingVerifications

                companies={dashboard.pendingCompanies}

            />

            <RecentInternships

                internships={dashboard.internships}

            />

            <div className="dashboard-grid">

                <DashboardCalendar

                    events={dashboard.events}

                />

                <NotificationsWidget

                    notifications={dashboard.notifications}

                />

            </div>

            <RecentActivities

                activities={dashboard.activities}

            />

            <SystemHealth

                health={dashboard.systemHealth}

            />

        </div>

    );

};

export default AdminDashboard;