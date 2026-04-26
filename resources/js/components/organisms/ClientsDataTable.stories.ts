import type { Meta, StoryObj } from '@storybook/vue3';
import ClientsDataTable from './ClientsDataTable.vue';

const meta = {
    title: 'Organisms/ClientsDataTable',
    component: ClientsDataTable,
    tags: ['autodocs'],
    args: {
        clients: [
            {
                id: 1,
                name: 'Alice Thompson',
                nextVisit: '2026-05-02',
                numberOfVisits: 7,
            },
            {
                id: 2,
                name: 'Marcus Green',
                nextVisit: '2026-05-05',
                numberOfVisits: 3,
            },
            {
                id: 3,
                name: 'Rina Patel',
                nextVisit: '2026-05-07',
                numberOfVisits: 12,
            },
        ],
    },
} satisfies Meta<typeof ClientsDataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
