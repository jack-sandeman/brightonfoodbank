import type { Meta, StoryObj } from '@storybook/vue3';
import PasswordInput from './PasswordInput.vue';

const meta = {
    title: 'Molecules/PasswordInput',
    component: PasswordInput,
    tags: ['autodocs'],
    args: {
        class: 'max-w-sm',
    },
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => ({
        components: { PasswordInput },
        setup() {
            return { args };
        },
        template: '<PasswordInput v-bind="args" placeholder="Enter your password" />',
    }),
};

export const Disabled: Story = {
    render: (args) => ({
        components: { PasswordInput },
        setup() {
            return { args };
        },
        template: '<PasswordInput v-bind="args" placeholder="Password disabled" disabled />',
    }),
};
