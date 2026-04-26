import type { Meta, StoryObj } from '@storybook/vue3';
import AppLogo from './AppLogo.vue';

const meta = {
    title: 'Molecules/AppLogo',
    component: AppLogo,
    tags: ['autodocs'],
} satisfies Meta<typeof AppLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
