import type { Meta, StoryObj } from '@storybook/vue3';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from '.';

const meta = {
    title: 'UI/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => ({
        components: {
            Sidebar,
            SidebarContent,
            SidebarGroup,
            SidebarGroupContent,
            SidebarGroupLabel,
            SidebarInset,
            SidebarMenu,
            SidebarMenuButton,
            SidebarMenuItem,
            SidebarProvider,
            SidebarTrigger,
        },
        template: `
            <SidebarProvider>
                <Sidebar collapsible="icon">
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Application</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>Dashboard</SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>Orders</SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
                <SidebarInset class="p-4">
                    <SidebarTrigger class="mb-4" />
                    <p class="text-sm text-muted-foreground">Main content area.</p>
                </SidebarInset>
            </SidebarProvider>
        `,
    }),
};
