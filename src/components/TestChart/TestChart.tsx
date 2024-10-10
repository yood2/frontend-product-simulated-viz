import React from 'react';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts';
import { useWebSocketData } from './useWebSocketData';
import { useFpsMeasurement } from './useFpsMeasurement';

export default function TestChart() {
    const { chartData, signalCountRef } = useWebSocketData();
    const { fps, setSignalsPerSecond } = useFpsMeasurement();

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setSignalsPerSecond(signalCountRef.current);
            signalCountRef.current = 0;
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">
                Neural Signal Visualization
            </h1>

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

            <p>FPS: {fps}</p>
            <p>Signals per second: {signalCountRef.current}</p>

            <table className="min-w-full table-auto mt-6">
                {/* Table header and body remain the same */}
            </table>
        </div>
    );
}
