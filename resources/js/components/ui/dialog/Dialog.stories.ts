import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '../button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '.';

const meta = {
    title: 'UI/Dialog',
    component: Dialog,
    tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => ({
        components: { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger },
        template: `
            <Dialog>
                <DialogTrigger as-child>
                    <Button variant="outline">Open dialog</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>Make changes to your profile here and save when done.</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button>Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        `,
    }),
};
