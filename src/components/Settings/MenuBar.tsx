import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from '@/components/ui/menubar';

export default function MenuBar() {
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
                    <MenubarItem>Signal 1</MenubarItem>
                    <MenubarItem>Signal 2</MenubarItem>
                    <MenubarItem>Signal 3</MenubarItem>
                    <MenubarItem>Signal 4</MenubarItem>
                    <MenubarItem>Signal 5</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Settings</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Batch Size</MenubarItem>
                    <MenubarItem>Num on Chart</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
