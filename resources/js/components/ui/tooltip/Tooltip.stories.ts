import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '../button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '.';

const meta = {
    title: 'UI/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => ({
        components: { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
        template: `
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger as-child>
                        <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Add to library</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        `,
    }),
};
