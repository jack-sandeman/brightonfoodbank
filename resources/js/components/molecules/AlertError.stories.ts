import type { Meta, StoryObj } from '@storybook/vue3';
import AlertError from './AlertError.vue';

const meta = {
    title: 'Molecules/AlertError',
    component: AlertError,
    tags: ['autodocs'],
    args: {
        title: 'Something went wrong.',
        errors: ['Email address is required.', 'Password must be at least 12 characters.'],
    },
} satisfies Meta<typeof AlertError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DeduplicatedErrors: Story = {
    args: {
        errors: ['Email address is required.', 'Email address is required.', 'Role is invalid.'],
    },
};
