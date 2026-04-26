import type { Meta, StoryObj } from '@storybook/vue3';
import type {
    ColumnDef,
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from '@tanstack/vue-table';
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import DataTable from './DataTable.vue';

type ClientStoryRow = {
    id: number;
    name: string;
    nextVisit: string;
    numberOfVisits: number;
};

const rows: ClientStoryRow[] = [
    { id: 1, name: 'Alice Thompson', nextVisit: '2026-05-02', numberOfVisits: 7 },
    { id: 2, name: 'Marcus Green', nextVisit: '2026-05-05', numberOfVisits: 3 },
    { id: 3, name: 'Rina Patel', nextVisit: '2026-05-07', numberOfVisits: 12 },
];

const columns: ColumnDef<ClientStoryRow>[] = [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'nextVisit', header: 'Next visit' },
    { accessorKey: 'numberOfVisits', header: 'Number of visits' },
];

const meta = {
    title: 'Molecules/DataTable',
    component: DataTable,
    tags: ['autodocs'],
    args: {
        data: rows,
        columns,
        mode: 'client',
        loading: false,
        searchPlaceholder: 'Search clients...',
    },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => ({
        components: { DataTable, Button },
        setup() {
            const sorting = ref<SortingState>([]);
            const pagination = ref<PaginationState>({ pageIndex: 0, pageSize: 10 });
            const columnFilters = ref<ColumnFiltersState>([]);
            const globalFilter = ref('');

            return { args, sorting, pagination, columnFilters, globalFilter };
        },
        template: `
            <DataTable
                v-bind="args"
                :sorting="sorting"
                :pagination="pagination"
                :column-filters="columnFilters"
                :global-filter="globalFilter"
                @update:sorting="sorting = $event"
                @update:pagination="pagination = $event"
                @update:column-filters="columnFilters = $event"
                @update:global-filter="globalFilter = $event"
            >
                <template #toolbar-actions>
                    <Button variant="outline">Add new client</Button>
                </template>
            </DataTable>
        `,
    }),
};
