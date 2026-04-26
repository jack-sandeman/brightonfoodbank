import type { Meta, StoryObj } from '@storybook/vue3';
import { Skeleton } from '.';

const meta = {
    title: 'UI/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => ({
        components: { Skeleton },
        template: `
            <div class="flex items-center space-x-4">
                <Skeleton class="size-12 rounded-full" />
                <div class="space-y-2">
                    <Skeleton class="h-4 w-[240px]" />
                    <Skeleton class="h-4 w-[180px]" />
                </div>
            </div>
        `,
    }),
};
