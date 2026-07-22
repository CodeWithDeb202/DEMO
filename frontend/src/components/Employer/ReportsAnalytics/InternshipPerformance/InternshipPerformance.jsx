import "./InternshipPerformance.css";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from "recharts";

function InternshipPerformance({

    data = []

}) {

    return (

        <div className="internship-performance">

            <div className="internship-performance-header">

                <h2>

                    Internship Performance

                </h2>

                <p>

                    Applications vs Selected Candidates

                </p>

            </div>

            <ResponsiveContainer

                width="100%"

                height={380}

            >

                <BarChart

                    data={data}

                >

                    <CartesianGrid

                        strokeDasharray="3 3"

                    />

                    <XAxis

                        dataKey="internship"

                    />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Bar

                        dataKey="applications"

                        fill="#2563eb"

                        radius={[8,8,0,0]}

                    />

                    <Bar

                        dataKey="selected"

                        fill="#16a34a"

                        radius={[8,8,0,0]}

                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default InternshipPerformance;