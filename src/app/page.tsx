'use client';

import Settings from '../components/Settings/Settings';
import DataTable from '../components/Chart/DataTable';
import LineChart from '../components/Chart/LineChart';
import { ChartProvider, useChartContext } from '@/context/ChartContext';
import useWebsocket from '@/hooks/useWebsocket'; // Keeping WebSocket here
import { rechartsProcessing } from '@/lib/chart-utils';
import { SignalData } from '@/types/schema';

// This component will use the context before calling the WebSocket hook
function HomeContent() {
    const { batchesPerSecond, chartSize } = useChartContext();
    const { renderData } = useWebsocket(chartSize, batchesPerSecond);

    // Map Props[] to SignalData[]
    const processedData: SignalData[] = rechartsProcessing(renderData).map(
        (item) => ({
            time: item.time,
            signal1: item.signal1,
            signal2: item.signal2,
            signal3: item.signal3,
            signal4: item.signal4,
            signal5: item.signal5,
        })
    );

    return (
        <div className="container mx-auto py-8">
            <Settings />
            <LineChart renderData={processedData} />
        </div>
    );
}

export default function Home() {
    return (
        <ChartProvider>
            <HomeContent />
        </ChartProvider>
    );
}
