import type { Meta, StoryObj } from '@storybook/vue3';
import { Separator } from '.';

const meta = {
    title: 'UI/Separator',
    component: Separator,
    tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => ({
        components: { Separator },
        template: `
            <div class="w-[320px] space-y-3">
                <p class="text-sm font-medium leading-none">Account</p>
                <Separator />
                <p class="text-sm text-muted-foreground">Manage your profile and settings.</p>
            </div>
        `,
    }),
};
