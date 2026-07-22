import "./MonthlyHiringChart.css";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from "recharts";

function MonthlyHiringChart({

    data = []

}) {

    return (

        <div className="monthly-hiring-chart">

            <div className="monthly-hiring-chart-header">

                <div>

                    <h2>

                        Monthly Hiring Trend

                    </h2>

                    <p>

                        Applications & Hiring Overview

                    </p>

                </div>

            </div>

            <ResponsiveContainer

                width="100%"

                height={380}

            >

                <LineChart

                    data={data}

                >

                    <CartesianGrid

                        strokeDasharray="3 3"

                    />

                    <XAxis

                        dataKey="month"

                    />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Line

                        type="monotone"

                        dataKey="applications"

                        stroke="#2563eb"

                        strokeWidth={3}

                        dot={{ r: 5 }}

                    />

                    <Line

                        type="monotone"

                        dataKey="interviews"

                        stroke="#f59e0b"

                        strokeWidth={3}

                        dot={{ r: 5 }}

                    />

                    <Line

                        type="monotone"

                        dataKey="hired"

                        stroke="#16a34a"

                        strokeWidth={3}

                        dot={{ r: 5 }}

                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default MonthlyHiringChart;