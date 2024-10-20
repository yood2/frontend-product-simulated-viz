import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from '@/components/ui/menubar';
import { useChartContext } from '@/context/ChartContext';
import { Slider } from '@/components/ui/slider';

export default function MenuBar() {
    const {
        batchesPerSecond,
        setBatchesPerSecond,
        chartSize,
        setChartSize,
        signalsOn,
        toggleSignal,
    } = useChartContext();

    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>System Control Panel</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Signal Chart <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Aggregated Chart <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Filters</MenubarTrigger>
                <MenubarContent>
                    <MenubarSeparator />
                    {signalsOn.map((isOn, index) => (
                        <MenubarItem
                            key={index}
                            onSelect={() => toggleSignal(index)}
                        >
                            Signal {index + 1} {isOn ? 'On' : 'Off'}
                        </MenubarItem>
                    ))}
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Settings</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Frequency: {batchesPerSecond}
                        <Slider
                            defaultValue={[batchesPerSecond]}
                            min={1}
                            max={60}
                            step={1}
                            onValueCommit={(value) =>
                                setBatchesPerSecond(value[0])
                            }
                        />
                    </MenubarItem>

                    {/* Control for Chart Size */}
                    <MenubarItem>
                        Chart Size: {chartSize}
                        <Slider
                            defaultValue={[chartSize]}
                            min={10}
                            max={60}
                            step={1}
                            onValueCommit={(value) => setChartSize(value[0])}
                        />
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
