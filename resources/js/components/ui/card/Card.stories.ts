import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '../button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '.';

const meta = {
    title: 'UI/Card',
    component: Card,
    tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => ({
        components: { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle },
        template: `
            <Card class="w-[350px]">
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p class="text-sm text-muted-foreground">Generate and publish your Storybook preview quickly.</p>
                </CardContent>
                <CardFooter class="flex justify-end">
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>
        `,
    }),
};
