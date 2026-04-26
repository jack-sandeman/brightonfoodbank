import type { Meta, StoryObj } from '@storybook/vue3';
import type { User } from '@/types';
import UserInfo from './UserInfo.vue';

const user: User = {
    id: 1,
    name: 'Alex Johnson',
    email: 'alex@example.test',
    avatar: '',
    email_verified_at: null,
    created_at: '2026-01-01T00:00:00Z',
    updated_at: '2026-01-01T00:00:00Z',
};

const meta = {
    title: 'Atoms/UserInfo',
    component: UserInfo,
    tags: ['autodocs'],
    args: {
        user,
        showEmail: false,
    },
} satisfies Meta<typeof UserInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithEmail: Story = {
    args: {
        showEmail: true,
    },
};

export const WithAvatar: Story = {
    args: {
        user: {
            ...user,
            avatar: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="%23d4d4d8"/><text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="%23111111">AJ</text></svg>',
        },
        showEmail: true,
    },
};
