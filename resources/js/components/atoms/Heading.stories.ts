import type { Meta, StoryObj } from '@storybook/vue3';
import Heading from './Heading.vue';

const meta = {
    title: 'Atoms/Heading',
    component: Heading,
    tags: ['autodocs'],
    args: {
        title: 'Account settings',
        description: 'Manage profile and security preferences.',
        variant: 'default',
    },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
    args: {
        title: 'Profile',
        description: 'Visible to your team.',
        variant: 'small',
    },
};

export const WithoutDescription: Story = {
    args: {
        description: undefined,
    },
};
