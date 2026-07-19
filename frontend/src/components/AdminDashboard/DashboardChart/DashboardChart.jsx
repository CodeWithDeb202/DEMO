import "./DashboardChart.css";

import {

    ResponsiveContainer,

    LineChart,

    Line,

    BarChart,

    Bar,

    PieChart,

    Pie,

    AreaChart,

    Area,

    CartesianGrid,

    Tooltip,

    Legend,

    XAxis,

    YAxis,

    Cell

} from "recharts";

const COLORS = [

    "#2563eb",

    "#16a34a",

    "#f59e0b",

    "#dc2626",

    "#7c3aed"

];

const DashboardChart = ({

    userGrowth = [],

    registrations = [],

    userDistribution = [],

    internshipGrowth = []

}) => {

    return (

        <section className="admin-dashboard-chart">

            {/* User Growth */}

            <div className="chart-card">

                <h2>

                    User Growth

                </h2>

                <ResponsiveContainer

                    width="100%"

                    height={320}

                >

                    <LineChart

                        data={userGrowth}

                    >

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Legend />

                        <Line

                            type="monotone"

                            dataKey="users"

                            stroke="#2563eb"

                            strokeWidth={3}

                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

            {/* Monthly Registrations */}

            <div className="chart-card">

                <h2>

                    Monthly Registrations

                </h2>

                <ResponsiveContainer

                    width="100%"

                    height={320}

                >

                    <BarChart

                        data={registrations}

                    >

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Legend />

                        <Bar

                            dataKey="count"

                            fill="#16a34a"

                            radius={[8,8,0,0]}

                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

            {/* User Distribution */}

            <div className="chart-card">

                <h2>

                    User Distribution

                </h2>

                <ResponsiveContainer

                    width="100%"

                    height={320}

                >

                    <PieChart>

                        <Pie

                            data={userDistribution}

                            dataKey="value"

                            nameKey="name"

                            outerRadius={110}

                            label

                        >

                            {

                                userDistribution.map(

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

            {/* Internship Growth */}

            <div className="chart-card">

                <h2>

                    Internship Growth

                </h2>

                <ResponsiveContainer

                    width="100%"

                    height={320}

                >

                    <AreaChart

                        data={internshipGrowth}

                    >

                        <defs>

                            <linearGradient

                                id="internships"

                                x1="0"

                                y1="0"

                                x2="0"

                                y2="1"

                            >

                                <stop

                                    offset="5%"

                                    stopColor="#7c3aed"

                                    stopOpacity={0.8}

                                />

                                <stop

                                    offset="95%"

                                    stopColor="#7c3aed"

                                    stopOpacity={0}

                                />

                            </linearGradient>

                        </defs>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Legend />

                        <Area

                            type="monotone"

                            dataKey="internships"

                            stroke="#7c3aed"

                            fill="url(#internships)"

                        />

                    </AreaChart>

                </ResponsiveContainer>

            </div>

        </section>

    );

};

export default DashboardChart;