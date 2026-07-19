import "./DashboardChart.css";

import {

    ResponsiveContainer,

    AreaChart,

    Area,

    PieChart,

    Pie,

    Cell,

    Tooltip,

    Legend,

    XAxis,

    YAxis,

    CartesianGrid

} from "recharts";

const COLORS = [

    "#2563eb",

    "#16a34a",

    "#f59e0b",

    "#dc2626"

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

                    height={320}

                >

                    <AreaChart

                        data={monthlyApplications}

                    >

                        <defs>

                            <linearGradient

                                id="applications"

                                x1="0"

                                y1="0"

                                x2="0"

                                y2="1"

                            >

                                <stop

                                    offset="5%"

                                    stopColor="#2563eb"

                                    stopOpacity={0.8}

                                />

                                <stop

                                    offset="95%"

                                    stopColor="#2563eb"

                                    stopOpacity={0}

                                />

                            </linearGradient>

                        </defs>

                        <CartesianGrid

                            strokeDasharray="3 3"

                        />

                        <XAxis

                            dataKey="month"

                        />

                        <YAxis />

                        <Tooltip />

                        <Area

                            type="monotone"

                            dataKey="applications"

                            stroke="#2563eb"

                            fill="url(#applications)"

                        />

                    </AreaChart>

                </ResponsiveContainer>

            </div>

            <div className="chart-card">

                <h2>

                    Application Status

                </h2>

                <ResponsiveContainer

                    width="100%"

                    height={320}

                >

                    <PieChart>

                        <Pie

                            data={applicationStatus}

                            dataKey="value"

                            nameKey="name"

                            outerRadius={110}

                            label

                        >

                            {

                                applicationStatus.map(

                                    (

                                        item,

                                        index

                                    ) => (

                                        <Cell

                                            key={index}

                                            fill={

                                                COLORS[

                                                    index %

                                                    COLORS.length

                                                ]

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