import "./Interviews.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import InterviewStats from "../../components/Employer/Interviews/InterviewStats";
import InterviewFilters from "../../components/Employer/Interviews/InterviewFilters";
import UpcomingInterviews from "../../components/Employer/Interviews/UpcomingInterviews";
import CompletedInterviews from "../../components/Employer/Interviews/CompletedInterviews";
import InterviewCalendar from "../../components/Employer/Interviews/InterviewCalendar";

import { getEmployerInterviews } from "../../services/api/interviewService";

const Interviews = () => {

    const [loading, setLoading] = useState(true);

    const [data, setData] = useState({

        upcoming: [],

        completed: [],

        calendar: [],

        stats: {}

    });

    const [filters, setFilters] = useState({

        search: "",

        status: "",

        mode: ""

    });

    useEffect(() => {

        fetchInterviews();

    }, [filters]);

    const fetchInterviews = async () => {

        try {

            setLoading(true);

            const response = await getEmployerInterviews(filters);

            setData(response);

        } catch (error) {

            toast.error("Failed to load interviews");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="interviews-page">

            <div className="page-header">

                <h1>Interview Management</h1>

                <p>

                    Manage scheduled interviews and hiring process.

                </p>

            </div>

            <InterviewStats

                stats={data.stats}

            />

            <InterviewFilters

                filters={filters}

                setFilters={setFilters}

            />

            <div className="interview-grid">

                <div>

                    <UpcomingInterviews

                        loading={loading}

                        interviews={data.upcoming}

                        refresh={fetchInterviews}

                    />

                    <CompletedInterviews

                        loading={loading}

                        interviews={data.completed}

                    />

                </div>

                <div>

                    <InterviewCalendar

                        events={data.calendar}

                    />

                </div>

            </div>

        </div>

    );

};

export default Interviews;