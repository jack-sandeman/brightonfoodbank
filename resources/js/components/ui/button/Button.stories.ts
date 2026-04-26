import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '.';

const meta = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        variant: 'default',
        size: 'default',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args">Click me</Button>',
    }),
};
