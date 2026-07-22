import "./ReportsAnalytics.css";

import { useState } from "react";

import ReportsStats from "../../../components/Employer/ReportsAnalytics/ReportsStats";
import AnalyticsFilters from "../../../components/Employer/ReportsAnalytics/AnalyticsFilters";
import OverviewCharts from "../../../components/Employer/ReportsAnalytics/OverviewCharts";
import InternshipPerformance from "../../../components/Employer/ReportsAnalytics/InternshipPerformance";
import HiringFunnel from "../../../components/Employer/ReportsAnalytics/HiringFunnel";
import MonthlyHiringChart from "../../../components/Employer/ReportsAnalytics/MonthlyHiringChart";
import TopColleges from "../../../components/Employer/ReportsAnalytics/TopColleges";
import TopSkills from "../../../components/Employer/ReportsAnalytics/TopSkills";
import RecentActivities from "../../../components/Employer/ReportsAnalytics/RecentActivities";
import ReportInsights from "../../../components/Employer/ReportsAnalytics/ReportInsights";
import ExportReportModal from "../../../components/Employer/ReportsAnalytics/ExportReportModal";


function ReportsAnalytics() {

    const [openExportModal, setOpenExportModal] = useState(false);

    const stats = [

        {
            title: "Total Applications",
            value: 8421,
            change: "+12%",
            type: "primary"
        },
        {
            title: "Total Interviews",
            value: 1284,
            change: "+8%",
            type: "success"
        },
        {
            title: "Offers Issued",
            value: 486,
            change: "+5%",
            type: "warning"
        },
        {
            title: "Successful Hires",
            value: 372,
            change: "+15%",
            type: "danger"
        }

    ];

    const applicationData = [

        { name: "Pending", value: 320 },
        { name: "Shortlisted", value: 210 },
        { name: "Rejected", value: 180 },
        { name: "Selected", value: 90 }

    ];

    const internshipPerformance = [

        {
            internship: "Frontend",
            applications: 220,
            selected: 34
        },
        {
            internship: "Backend",
            applications: 180,
            selected: 26
        },
        {
            internship: "Full Stack",
            applications: 160,
            selected: 20
        },
        {
            internship: "UI/UX",
            applications: 140,
            selected: 18
        }

    ];

    const monthlyHiring = [

        {
            month: "Jan",
            applications: 180,
            interviews: 80,
            hired: 22
        },
        {
            month: "Feb",
            applications: 220,
            interviews: 100,
            hired: 30
        },
        {
            month: "Mar",
            applications: 260,
            interviews: 130,
            hired: 36
        },
        {
            month: "Apr",
            applications: 300,
            interviews: 160,
            hired: 42
        },
        {
            month: "May",
            applications: 350,
            interviews: 180,
            hired: 54
        }

    ];

    const funnelData = [

        { name: "Applied", value: 850 },
        { name: "Shortlisted", value: 420 },
        { name: "Interview", value: 180 },
        { name: "Offer", value: 92 },
        { name: "Joined", value: 61 }

    ];

    const colleges = [

        {
            name: "MITM",
            students: 180,
            selected: 42,
            rate: 23
        },
        {
            name: "CET",
            students: 165,
            selected: 37,
            rate: 22
        },
        {
            name: "KIIT",
            students: 210,
            selected: 52,
            rate: 25
        }

    ];

    const skills = [

        { name: "React", count: 360 },
        { name: "Node.js", count: 310 },
        { name: "MongoDB", count: 260 },
        { name: "Java", count: 230 },
        { name: "Python", count: 190 }

    ];

    const activities = [

        {
            type: "application",
            title: "120 New Applications",
            description: "Frontend Internship",
            time: "10 mins ago"
        },
        {
            type: "offer",
            title: "15 Offers Issued",
            description: "Backend Internship",
            time: "40 mins ago"
        },
        {
            type: "hire",
            title: "8 Candidates Joined",
            description: "Successfully onboarded",
            time: "2 hours ago"
        }

    ];

    const insights = [

        {
            type: "positive",
            title: "Frontend hiring increased",
            description: "Applications increased by 22% compared to last month."
        },
        {
            type: "warning",
            title: "Backend shortage",
            description: "Selected candidates are below target."
        },
        {
            type: "success",
            title: "Placement success",
            description: "Overall hiring success rate reached 91%."
        }

    ];

    return (

        <div className="reports-analytics-page">

            <ReportsStats

                stats={stats}

            />

            <AnalyticsFilters

                onExport={() =>

                    setOpenExportModal(true)

                }

            />

            <OverviewCharts

                applicationData={applicationData}

                internshipData={internshipPerformance}

            />

            <InternshipPerformance

                data={internshipPerformance}

            />

            <HiringFunnel

                data={funnelData}

            />

            <MonthlyHiringChart

                data={monthlyHiring}

            />

            <TopColleges

                colleges={colleges}

            />

            <TopSkills

                skills={skills}

            />

            <RecentActivities

                activities={activities}

            />

            <ReportInsights

                insights={insights}

            />

            <ExportReportModal

                open={openExportModal}

                onClose={() =>

                    setOpenExportModal(false)

                }

                onExport={(type) => {

                    console.log(type);

                    setOpenExportModal(false);

                }}

            />

        </div>

    );

}

export default ReportsAnalytics;
