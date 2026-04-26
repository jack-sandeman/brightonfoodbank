import type { Meta, StoryObj } from '@storybook/vue3';
import { Input } from '.';

const meta = {
    title: 'UI/Input',
    component: Input,
    tags: ['autodocs'],
    args: {
        defaultValue: 'hello@example.com',
        type: 'email',
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => ({
        components: { Input },
        setup() {
            return { args };
        },
        template: '<Input v-bind="args" class="w-[320px]" />',
    }),
};
