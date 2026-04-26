import type { Meta, StoryObj } from '@storybook/vue3';
import { Alert, AlertDescription, AlertTitle } from '.';

const meta = {
    title: 'UI/Alert',
    component: Alert,
    tags: ['autodocs'],
    args: {
        variant: 'default',
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => ({
        components: { Alert, AlertDescription, AlertTitle },
        setup() {
            return { args };
        },
        template: `
            <Alert v-bind="args">
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the CLI.
                </AlertDescription>
            </Alert>
        `,
    }),
};
