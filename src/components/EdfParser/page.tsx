import { useEffect, useState } from 'react';
import { EdfFile, EdfHeader, EdfSignal, EdfDataRecord } from './util/schema';
import HeaderTable from './HeaderTable';

export default function EdfParser() {
    const [edfData, setEdfData] = useState<EdfFile | null>(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080');

        ws.onmessage = (event) => {
            const parsedData = JSON.parse(event.data);
            setEdfData(parsedData);
        };

        return () => {
            ws.close();
        };
    }, []);

    if (!edfData) {
        return <p>Loading EDF data...</p>;
    }

    return (
        <div>
            <HeaderTable header={edfData.header} />
        </div>
    );
}
