import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import type { User } from '@/types';
import UserMenuContent from './UserMenuContent.vue';

const user: User = {
    id: 1,
    name: 'Alex Johnson',
    email: 'alex@example.test',
    avatar: '',
    email_verified_at: null,
    created_at: '2026-01-01T00:00:00Z',
    updated_at: '2026-01-01T00:00:00Z',
};

const meta = {
    title: 'Molecules/UserMenuContent',
    component: UserMenuContent,
    tags: ['autodocs'],
    args: {
        user,
    },
} satisfies Meta<typeof UserMenuContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => ({
        components: { Button, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, UserMenuContent },
        setup() {
            return { args };
        },
        template: `
            <DropdownMenu :default-open="true">
                <DropdownMenuTrigger as-child>
                    <Button variant="outline">Open user menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-56">
                    <UserMenuContent v-bind="args" />
                </DropdownMenuContent>
            </DropdownMenu>
        `,
    }),
};
