import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "./bigChartBox.scss";

type Props = {
    title: string;
    dataChart: {
        name: string;
        books: number;
        clothes: number;
        electronic: number;
    }[]
}

const BigChartBox = (props: Props) => {
    return (
        <div className="big-chart-box">
            <div className="title">{props.title}</div>
            <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    <AreaChart                         
                        data={props.dataChart}
                        margin={{
                            top: 10, right: 30, left:0, bottom: 0
                        }}
                    >
                    
                        <XAxis dataKey="name" />
                        <YAxis style={{border: "none"}}/>
                        <Tooltip />
                        
                        <Area 
                            type="monotone" 
                            dataKey="books" 
                            stackId="1"
                            stroke="#8884d8"
                            fill="#8884d8"
                            />
                           
                           <Area 
                            type="monotone" 
                            dataKey="electronic" 
                            stackId="1"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                            />

                        <Area 
                            type="monotone" 
                            dataKey="clothes" 
                            stackId="1"
                            stroke="#ffc658"
                            fill="#ffc658"
                            />
                        
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BigChartBox;