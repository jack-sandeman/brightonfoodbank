import type { Meta, StoryObj } from '@storybook/vue3';
import { Checkbox } from '.';

const meta = {
    title: 'UI/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    args: {
        defaultChecked: true,
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => ({
        components: { Checkbox },
        setup() {
            return { args };
        },
        template: `
            <div class="flex items-center gap-2">
                <Checkbox v-bind="args" id="storybook-checkbox" />
                <label for="storybook-checkbox" class="text-sm font-medium">
                    Accept terms and conditions
                </label>
            </div>
        `,
    }),
};
