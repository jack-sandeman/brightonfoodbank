<script setup lang="ts">
import type { ColumnDef, ColumnFiltersState, PaginationState, SortingState } from '@tanstack/vue-table';
import { ArrowUpDown, Pencil, Plus, Trash2 } from 'lucide-vue-next';
import { h, ref } from 'vue';
import DataTable from '@/components/molecules/DataTable.vue';
import { Button } from '@/components/ui/button';

export type ClientTableRow = {
    id: number;
    name: string;
    nextVisit: string;
    numberOfVisits: number;
};

type Props = {
    clients: ClientTableRow[];
    loading?: boolean;
    mode?: 'client' | 'server';
    totalRows?: number;
};

const props = withDefaults(defineProps<Props>(), {
    loading: false,
    mode: 'client',
    totalRows: undefined,
});

const emit = defineEmits<{
    (e: 'add'): void;
    (e: 'edit', client: ClientTableRow): void;
    (e: 'delete', client: ClientTableRow): void;
}>();

const sorting = ref<SortingState>([]);
const pagination = ref<PaginationState>({ pageIndex: 0, pageSize: 10 });
const columnFilters = ref<ColumnFiltersState>([]);
const globalFilter = ref('');

/**
 * Emits an add action for the parent container.
 */
function handleAdd(): void {
    emit('add');
}

/**
 * Emits an edit action for the selected client row.
 */
function handleEdit(client: ClientTableRow): void {
    emit('edit', client);
}

/**
 * Emits a delete action for the selected client row.
 */
function handleDelete(client: ClientTableRow): void {
    emit('delete', client);
}

const columns: ColumnDef<ClientTableRow>[] = [
    {
        accessorKey: 'name',
        header: ({ column }) =>
            h(
                Button,
                {
                    variant: 'ghost',
                    class: 'px-0 hover:bg-transparent',
                    onClick: (event: MouseEvent) => {
                        event.stopPropagation();
                        column.toggleSorting(column.getIsSorted() === 'asc');
                    },
                },
                () => [h('span', 'Name'), h(ArrowUpDown, { class: 'size-4' })],
            ),
        cell: ({ row }) =>
            h(
                'a',
                {
                    href: `/clients/${row.original.id}`,
                    class: 'font-medium text-primary underline-offset-4 hover:underline',
                },
                row.original.name,
            ),
    },
    {
        accessorKey: 'nextVisit',
        header: ({ column }) =>
            h(
                Button,
                {
                    variant: 'ghost',
                    class: 'px-0 hover:bg-transparent',
                    onClick: (event: MouseEvent) => {
                        event.stopPropagation();
                        column.toggleSorting(column.getIsSorted() === 'asc');
                    },
                },
                () => [h('span', 'Next visit'), h(ArrowUpDown, { class: 'size-4' })],
            ),
    },
    {
        accessorKey: 'numberOfVisits',
        header: ({ column }) =>
            h(
                Button,
                {
                    variant: 'ghost',
                    class: 'px-0 hover:bg-transparent',
                    onClick: (event: MouseEvent) => {
                        event.stopPropagation();
                        column.toggleSorting(column.getIsSorted() === 'asc');
                    },
                },
                () => [
                    h('span', 'Number of visits'),
                    h(ArrowUpDown, { class: 'size-4' }),
                ],
            ),
    },
    {
        id: 'actions',
        enableSorting: false,
        header: () => '',
        cell: ({ row }) =>
            h('div', { class: 'flex items-center justify-end gap-2' }, [
                h(
                    Button,
                    {
                        variant: 'ghost',
                        size: 'icon-sm',
                        type: 'button',
                        'aria-label': `Edit ${row.original.name}`,
                        onClick: () => handleEdit(row.original),
                    },
                    () => h(Pencil, { class: 'size-4' }),
                ),
                h(
                    Button,
                    {
                        variant: 'ghost',
                        size: 'icon-sm',
                        type: 'button',
                        'aria-label': `Delete ${row.original.name}`,
                        onClick: () => handleDelete(row.original),
                    },
                    () => h(Trash2, { class: 'size-4' }),
                ),
            ]),
    },
];
</script>

<template>
    <DataTable
        :data="props.clients"
        :columns="columns"
        :loading="props.loading"
        :mode="props.mode"
        :sorting="sorting"
        :pagination="pagination"
        :column-filters="columnFilters"
        :global-filter="globalFilter"
        :row-count="props.totalRows"
        search-placeholder="Search clients..."
        @update:sorting="sorting = $event"
        @update:pagination="pagination = $event"
        @update:column-filters="columnFilters = $event"
        @update:global-filter="globalFilter = $event"
    >
        <template #toolbar-actions>
            <Button type="button" @click="handleAdd">
                <Plus class="size-4" />
                Add new client
            </Button>
        </template>
    </DataTable>
</template>
