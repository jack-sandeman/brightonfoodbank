import type { Meta, StoryObj } from '@storybook/vue3';
import { Input } from '../input';
import { Label } from '.';

const meta = {
    title: 'UI/Label',
    component: Label,
    tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => ({
        components: { Input, Label },
        template: `
            <div class="grid w-[320px] items-center gap-2">
                <Label for="storybook-email">Email</Label>
                <Input id="storybook-email" type="email" default-value="hello@example.com" />
            </div>
        `,
    }),
};
