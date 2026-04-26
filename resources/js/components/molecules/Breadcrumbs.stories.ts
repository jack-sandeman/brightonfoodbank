import type { Meta, StoryObj } from '@storybook/vue3';
import type { BreadcrumbItem } from '@/types';
import Breadcrumbs from './Breadcrumbs.vue';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Clients', href: '/clients' },
    { title: 'Client Details', href: '/clients/1' },
];

const meta = {
    title: 'Molecules/Breadcrumbs',
    component: Breadcrumbs,
    tags: ['autodocs'],
    args: {
        breadcrumbs,
    },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleItem: Story = {
    args: {
        breadcrumbs: [{ title: 'Dashboard', href: '/dashboard' }],
    },
};
