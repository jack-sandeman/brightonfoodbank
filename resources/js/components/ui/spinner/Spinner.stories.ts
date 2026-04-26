import type { Meta, StoryObj } from '@storybook/vue3';
import { Spinner } from '.';

const meta = {
    title: 'UI/Spinner',
    component: Spinner,
    tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => ({
        components: { Spinner },
        template: '<Spinner class="size-6" />',
    }),
};
