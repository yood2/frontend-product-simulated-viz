import {
    LineChart as RechartsLineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts';
import { SignalData } from '@/types/schema';
import { useChartContext } from '@/context/ChartContext';

interface LineChartProps {
    renderData: SignalData[];
}

const LineCharts: React.FC<LineChartProps> = ({ renderData = [] }) => {
    const { signalsOn } = useChartContext(); // Access signalsOn from context

    if (renderData.length === 0) {
        return <div>No data available to display the chart</div>;
    }

    return (
        <RechartsLineChart width={600} height={400} data={renderData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />

            {/* Conditionally render lines based on whether each signal is on */}
            {signalsOn[0] && (
                <Line type="monotone" dataKey="signal1" stroke="#8884d8" />
            )}
            {signalsOn[1] && (
                <Line type="monotone" dataKey="signal2" stroke="#82ca9d" />
            )}
            {signalsOn[2] && (
                <Line type="monotone" dataKey="signal3" stroke="#ffc658" />
            )}
            {signalsOn[3] && (
                <Line type="monotone" dataKey="signal4" stroke="#ff7300" />
            )}
            {signalsOn[4] && (
                <Line type="monotone" dataKey="signal5" stroke="#413ea0" />
            )}
        </RechartsLineChart>
    );
};

export default LineCharts;
