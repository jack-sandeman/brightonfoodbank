import type { Meta, StoryObj } from '@storybook/vue3';
import { Badge } from '.';

const meta = {
    title: 'UI/Badge',
    component: Badge,
    tags: ['autodocs'],
    args: {
        variant: 'default',
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args };
        },
        template: '<Badge v-bind="args">Badge</Badge>',
    }),
};
