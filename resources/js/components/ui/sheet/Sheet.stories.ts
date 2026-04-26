import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '../button';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '.';

const meta = {
    title: 'UI/Sheet',
    component: Sheet,
    tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => ({
        components: { Button, Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger },
        template: `
            <Sheet>
                <SheetTrigger as-child>
                    <Button variant="outline">Open sheet</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>Make changes to your profile here.</SheetDescription>
                    </SheetHeader>
                    <SheetFooter class="mt-4">
                        <Button>Save changes</Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        `,
    }),
};
