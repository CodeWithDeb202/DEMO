import "./DashboardChart.css";

import {

    ResponsiveContainer,

    LineChart,

    Line,

    XAxis,

    YAxis,

    Tooltip,

    CartesianGrid,

    PieChart,

    Pie,

    Cell,

    Legend

} from "recharts";

const COLORS = [

    "#2563eb",

    "#16a34a",

    "#dc2626",

    "#f59e0b"

];

const DashboardChart = ({

    monthlyApplications = [],

    applicationStatus = []

}) => {

    return (

        <section className="dashboard-chart">

            <div className="chart-card">

                <h2>

                    Monthly Applications

                </h2>

                <ResponsiveContainer

                    width="100%"

                    height={300}

                >

                    <LineChart

                        data={monthlyApplications}

                    >

                        <CartesianGrid

                            strokeDasharray="3 3"

                        />

                        <XAxis

                            dataKey="month"

                        />

                        <YAxis />

                        <Tooltip />

                        <Line

                            type="monotone"

                            dataKey="applications"

                            stroke="#2563eb"

                            strokeWidth={3}

                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

            <div className="chart-card">

                <h2>

                    Application Status

                </h2>

                <ResponsiveContainer

                    width="100%"

                    height={300}

                >

                    <PieChart>

                        <Pie

                            data={applicationStatus}

                            dataKey="value"

                            nameKey="name"

                            outerRadius={100}

                            label

                        >

                            {

                                applicationStatus.map(

                                    (entry,index)=>(

                                        <Cell

                                            key={index}

                                            fill={

                                                COLORS[index %

                                                COLORS.length]

                                            }

                                        />

                                    )

                                )

                            }

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </section>

    );

};

export default DashboardChart;