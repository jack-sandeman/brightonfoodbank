import type { Meta, StoryObj } from '@storybook/vue3';
import InputError from './InputError.vue';

const meta = {
    title: 'Atoms/InputError',
    component: InputError,
    tags: ['autodocs'],
    args: {
        message: 'The password field is required.',
    },
} satisfies Meta<typeof InputError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hidden: Story = {
    args: {
        message: '',
    },
};
