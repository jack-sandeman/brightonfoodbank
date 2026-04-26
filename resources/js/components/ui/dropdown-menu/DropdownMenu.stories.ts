import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '../button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '.';

const meta = {
    title: 'UI/DropdownMenu',
    component: DropdownMenu,
    tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => ({
        components: {
            Button,
            DropdownMenu,
            DropdownMenuContent,
            DropdownMenuItem,
            DropdownMenuLabel,
            DropdownMenuSeparator,
            DropdownMenuTrigger,
        },
        template: `
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button variant="outline">Open menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        `,
    }),
};
