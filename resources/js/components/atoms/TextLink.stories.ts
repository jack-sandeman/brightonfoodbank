import type { Meta, StoryObj } from '@storybook/vue3';
import TextLink from './TextLink.vue';

const meta = {
    title: 'Atoms/TextLink',
    component: TextLink,
    tags: ['autodocs'],
    args: {
        href: '/clients',
        tabindex: 0,
    },
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => ({
        components: { TextLink },
        setup() {
            return { args };
        },
        template: '<TextLink v-bind="args">View clients</TextLink>',
    }),
};

export const AsButton: Story = {
    args: {
        as: 'button',
        method: 'post',
    },
    render: (args) => ({
        components: { TextLink },
        setup() {
            return { args };
        },
        template: '<TextLink v-bind="args">Submit action</TextLink>',
    }),
};
