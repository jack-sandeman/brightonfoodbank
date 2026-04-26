import type { Meta, StoryObj } from '@storybook/vue3';
import AppLogoIcon from './AppLogoIcon.vue';

const meta = {
    title: 'Atoms/AppLogoIcon',
    component: AppLogoIcon,
    tags: ['autodocs'],
    args: {
        className: 'size-10 text-black dark:text-white',
    },
} satisfies Meta<typeof AppLogoIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BrandPrimary: Story = {
    args: {
        className: 'size-10 text-sidebar-primary',
    },
};
