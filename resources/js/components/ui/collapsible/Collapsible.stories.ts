import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '../button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '.';

const meta = {
    title: 'UI/Collapsible',
    component: Collapsible,
    tags: ['autodocs'],
    args: {
        defaultOpen: true,
    },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => ({
        components: { Button, Collapsible, CollapsibleContent, CollapsibleTrigger },
        setup() {
            return { args };
        },
        template: `
            <Collapsible v-bind="args" class="w-[320px] space-y-2">
                <div class="flex items-center justify-between rounded-md border px-3 py-2">
                    <h4 class="text-sm font-semibold">@shadcn/vue</h4>
                    <CollapsibleTrigger as-child>
                        <Button variant="outline" size="sm">Toggle</Button>
                    </CollapsibleTrigger>
                </div>
                <CollapsibleContent class="rounded-md border px-3 py-2 text-sm">
                    Accessible component APIs for Vue apps.
                </CollapsibleContent>
            </Collapsible>
        `,
    }),
};
