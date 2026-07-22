import "./OverviewCharts.css";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis
} from "recharts";

const COLORS = [
    "#2563eb",
    "#16a34a",
    "#f59e0b",
    "#ef4444"
];

function OverviewCharts({

    applicationData = [],

    internshipData = []

}) {

    return (

        <div className="overview-charts">

            <div className="chart-card">

                <h3>

                    Application Status

                </h3>

                <ResponsiveContainer

                    width="100%"

                    height={320}

                >

                    <PieChart>

                        <Pie

                            data={applicationData}

                            dataKey="value"

                            nameKey="name"

                            outerRadius={110}

                        >

                            {

                                applicationData.map((item, index) => (

                                    <Cell

                                        key={index}

                                        fill={COLORS[index % COLORS.length]}

                                    />

                                ))

                            }

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

            <div className="chart-card">

                <h3>

                    Internship Performance

                </h3>

                <ResponsiveContainer

                    width="100%"

                    height={320}

                >

                    <BarChart

                        data={internshipData}

                    >

                        <CartesianGrid

                            strokeDasharray="3 3"

                        />

                        <XAxis

                            dataKey="name"

                        />

                        <YAxis />

                        <Tooltip />

                        <Legend />

                        <Bar

                            dataKey="applications"

                            fill="#2563eb"

                            radius={[8,8,0,0]}

                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default OverviewCharts;