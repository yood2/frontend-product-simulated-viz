import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { EdfHeader } from './util/schema';

interface HeaderTableProps {
    header: EdfHeader;
}

export default function HeaderTable({ header }: HeaderTableProps) {
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-xl font-semibold mb-2">Header Information</h2>
            <Table>
                <TableCaption>EDF Header Data</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Field</TableHead>
                        <TableHead>Value</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Object.entries(header).map(([key, value]) => (
                        <TableRow key={key}>
                            <TableCell className="font-medium">{key}</TableCell>
                            <TableCell>
                                {typeof value === 'object'
                                    ? JSON.stringify(value)
                                    : String(value)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
