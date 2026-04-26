import type { Meta, StoryObj } from '@storybook/vue3';
import { Avatar, AvatarFallback, AvatarImage } from '.';

const meta = {
    title: 'UI/Avatar',
    component: Avatar,
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => ({
        components: { Avatar, AvatarFallback, AvatarImage },
        template: `
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
        `,
    }),
};
