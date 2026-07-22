import "./HiringFunnel.css";

import {
    ResponsiveContainer,
    FunnelChart,
    Funnel,
    Tooltip,
    LabelList
} from "recharts";

function HiringFunnel({

    data = []

}) {

    return (

        <div className="hiring-funnel">

            <div className="hiring-funnel-header">

                <div>

                    <h2>

                        Hiring Funnel

                    </h2>

                    <p>

                        Candidate conversion across recruitment stages

                    </p>

                </div>

            </div>

            <ResponsiveContainer

                width="100%"

                height={420}

            >

                <FunnelChart>

                    <Tooltip />

                    <Funnel

                        dataKey="value"

                        data={data}

                        isAnimationActive

                    >

                        <LabelList

                            position="right"

                            fill="#111827"

                            stroke="none"

                            dataKey="name"

                        />

                    </Funnel>

                </FunnelChart>

            </ResponsiveContainer>

        </div>

    );

}

export default HiringFunnel;