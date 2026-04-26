import type { Meta, StoryObj } from '@storybook/vue3';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '.';

const meta = {
    title: 'UI/Select',
    component: Select,
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => ({
        components: { Select, SelectContent, SelectItem, SelectTrigger, SelectValue },
        template: `
            <Select default-value="apple">
                <SelectTrigger class="w-[220px]">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                </SelectContent>
            </Select>
        `,
    }),
};
