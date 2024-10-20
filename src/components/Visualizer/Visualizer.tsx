import Settings from '../Settings/Settings';
import DataTable from '../Visualizer/DataTable';
import LineChart from '../Visualizer/LineChart';
import SyncChart from '../Visualizer/SyncChart';
import useWebsocket from '@/hooks/useWebsocket'; // Keeping WebSocket here
import { rechartsProcessing } from '@/lib/chart-utils';
import { SignalData } from '@/types/schema';
import { useChartContext } from '@/context/ChartContext';

export default function Visualizer() {
    const { batchesPerSecond, chartSize, selectedChart } = useChartContext();
    const { renderData } = useWebsocket(chartSize, batchesPerSecond);

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
            {selectedChart === 'line' && (
                <LineChart renderData={processedData} />
            )}
            {selectedChart === 'sync' && (
                <SyncChart renderData={processedData} />
            )}
        </div>
    );
}
