import { useState } from 'react';

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Checked = DropdownMenuCheckboxItemProps['checked'];

export default function RadioButtons() {
    const [visibleSignals, setVisibleSignals] = useState([1, 1, 1, 1, 1]);

    // Toggles a specific signal on or off
    const handleSignalChange = (index: number, isChecked: boolean) => {
        setVisibleSignals((prevSignals) =>
            prevSignals.map((signal, i) =>
                i === index ? (isChecked ? 1 : 0) : signal
            )
        );
    };

    return (
        <>
            <p>{`Visible Signals: ${visibleSignals.join(', ')}`}</p>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Settings</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Signals Shown</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {visibleSignals.map((signal, index) => (
                        <DropdownMenuCheckboxItem
                            key={index}
                            checked={signal === 1}
                            onCheckedChange={(checked) =>
                                handleSignalChange(index, checked)
                            }
                        >
                            {`Signal ${index + 1}`}
                        </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
