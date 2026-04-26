import type { Meta, StoryObj } from '@storybook/vue3';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '.';

const meta = {
    title: 'UI/NavigationMenu',
    component: NavigationMenu,
    tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => ({
        components: {
            NavigationMenu,
            NavigationMenuContent,
            NavigationMenuItem,
            NavigationMenuLink,
            NavigationMenuList,
            NavigationMenuTrigger,
        },
        template: `
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul class="grid w-[280px] gap-2 p-3 md:w-[320px]">
                                <li>
                                    <NavigationMenuLink href="#" class="block rounded-md p-2 hover:bg-accent">
                                        Introduction
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink href="#" class="block rounded-md p-2 hover:bg-accent">
                                        Installation
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        `,
    }),
};
