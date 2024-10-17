'use client';

import { useState } from 'react';
import Chart from '@/components/chart/Chart';
import Settings from '@/components/settings/RadioButtons';

export default function Home() {
    const [charts, setCharts] = useState<number[]>([1]);

    const addChart = () => {
        setCharts((prevCharts) => [...prevCharts, prevCharts.length + 1]);
    };

    return (
        <div className="container mx-auto py-8">
            {/* <Chart /> */}
            {/* <Settings /> */}
            {charts.map((chartId) => (
                <Chart key={chartId} />
            ))}
            <button onClick={addChart}>Add Chart</button>
        </div>
    );
}
