import React from 'react';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts';

interface LineChartComponentProps {
    chartData: any[];
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ chartData }) => {
    return (
        <LineChart width={600} height={400} data={chartData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="signal1" stroke="#8884d8" />
            <Line type="monotone" dataKey="signal2" stroke="#82ca9d" />
            <Line type="monotone" dataKey="signal3" stroke="#ffc658" />
            <Line type="monotone" dataKey="signal4" stroke="#ff7300" />
            <Line type="monotone" dataKey="signal5" stroke="#413ea0" />
        </LineChart>
    );
};

export default LineChartComponent;