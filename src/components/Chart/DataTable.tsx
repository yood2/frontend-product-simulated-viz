import { Props } from '@/types/schema';

const DataTable: React.FC<{ renderData: Props[] }> = ({ renderData }) => {
    return (
        <table className="min-w-full table-auto mt-6">
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Signal 1</th>
                    <th>Signal 2</th>
                    <th>Signal 3</th>
                    <th>Signal 4</th>
                    <th>Signal 5</th>
                </tr>
            </thead>
            <tbody>
                {renderData.map((row, index) => (
                    <tr key={index}>
                        <td>{row.time}</td>
                        <td>{row.signal1}</td>
                        <td>{row.signal2}</td>
                        <td>{row.signal3}</td>
                        <td>{row.signal4}</td>
                        <td>{row.signal5}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
