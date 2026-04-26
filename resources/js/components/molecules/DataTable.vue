<script setup lang="ts" generic="TData, TValue">
import type {
    ColumnDef,
    ColumnFiltersState,
    PaginationState,
    SortingState,
    Updater,
} from '@tanstack/vue-table';
import {
    FlexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useVueTable,
} from '@tanstack/vue-table';
import { computed } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableEmpty,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

type DataTableMode = 'client' | 'server';

type Props = {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    mode?: DataTableMode;
    loading?: boolean;
    sorting?: SortingState;
    pagination?: PaginationState;
    columnFilters?: ColumnFiltersState;
    globalFilter?: string;
    rowCount?: number;
    searchPlaceholder?: string;
};

const props = withDefaults(defineProps<Props>(), {
    mode: 'client',
    loading: false,
    sorting: () => [],
    pagination: () => ({ pageIndex: 0, pageSize: 10 }),
    columnFilters: () => [],
    globalFilter: '',
    rowCount: undefined,
    searchPlaceholder: 'Search...',
});

const emit = defineEmits<{
    (e: 'update:sorting', value: SortingState): void;
    (e: 'update:pagination', value: PaginationState): void;
    (e: 'update:columnFilters', value: ColumnFiltersState): void;
    (e: 'update:globalFilter', value: string): void;
}>();

/**
 * Returns whether the table should use manual server-side state.
 */
function isServerMode(): boolean {
    return props.mode === 'server';
}

/**
 * Applies a TanStack updater and emits the updated sorting state.
 */
function onSortingChange(updaterOrValue: Updater<SortingState>): void {
    const value =
        typeof updaterOrValue === 'function'
            ? updaterOrValue(props.sorting)
            : updaterOrValue;

    emit('update:sorting', value);
}

/**
 * Applies a TanStack updater and emits the updated pagination state.
 */
function onPaginationChange(updaterOrValue: Updater<PaginationState>): void {
    const value =
        typeof updaterOrValue === 'function'
            ? updaterOrValue(props.pagination)
            : updaterOrValue;

    emit('update:pagination', value);
}

/**
 * Applies a TanStack updater and emits the updated column filters state.
 */
function onColumnFiltersChange(
    updaterOrValue: Updater<ColumnFiltersState>,
): void {
    const value =
        typeof updaterOrValue === 'function'
            ? updaterOrValue(props.columnFilters)
            : updaterOrValue;

    emit('update:columnFilters', value);
}

/**
 * Applies a TanStack updater and emits the updated global filter value.
 */
function onGlobalFilterChange(updaterOrValue: Updater<string>): void {
    const value =
        typeof updaterOrValue === 'function'
            ? updaterOrValue(props.globalFilter)
            : updaterOrValue;

    emit('update:globalFilter', value);
}

const rowCount = computed(() => {
    if (isServerMode()) {
        return props.rowCount ?? 0;
    }

    return props.data.length;
});

const table = useVueTable({
    get columns() {
        return props.columns;
    },
    get data() {
        return props.data;
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    get rowCount() {
        return rowCount.value;
    },
    manualSorting: isServerMode(),
    manualFiltering: isServerMode(),
    manualPagination: isServerMode(),
    onSortingChange,
    onPaginationChange,
    onColumnFiltersChange,
    onGlobalFilterChange,
    state: {
        get sorting() {
            return props.sorting;
        },
        get pagination() {
            return props.pagination;
        },
        get columnFilters() {
            return props.columnFilters;
        },
        get globalFilter() {
            return props.globalFilter;
        },
    },
});
</script>

<template>
    <div class="flex h-full min-h-[300px] flex-col gap-4">
        <div class="flex items-center justify-between gap-3">
            <Input
                :model-value="props.globalFilter"
                :placeholder="props.searchPlaceholder"
                class="max-w-sm"
                @update:model-value="table.setGlobalFilter(String($event))"
            />
            <slot name="toolbar-actions" />
        </div>

        <div class="min-h-[300px] flex-1 overflow-auto rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                        <TableHead
                            v-for="header in headerGroup.headers"
                            :key="header.id"
                            :class="header.column.getCanSort() ? 'cursor-pointer select-none' : ''"
                            @click="header.column.getToggleSortingHandler()?.($event)"
                        >
                            <FlexRender
                                v-if="!header.isPlaceholder"
                                :render="header.column.columnDef.header"
                                :props="header.getContext()"
                            />
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <template v-if="props.loading">
                        <TableEmpty :colspan="props.columns.length">
                            Loading clients...
                        </TableEmpty>
                    </template>
                    <template v-else-if="table.getRowModel().rows.length">
                        <TableRow v-for="row in table.getRowModel().rows" :key="row.id">
                            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id" class="py-2">
                                <FlexRender
                                    :render="cell.column.columnDef.cell"
                                    :props="cell.getContext()"
                                />
                            </TableCell>
                        </TableRow>
                    </template>
                    <template v-else>
                        <TableEmpty :colspan="props.columns.length">
                            No results found.
                        </TableEmpty>
                    </template>
                </TableBody>
            </Table>
        </div>

        <div class="flex items-center justify-between gap-3">
            <p class="text-sm text-muted-foreground">
                Showing
                {{ Math.min((props.pagination.pageIndex * props.pagination.pageSize) + 1, rowCount) }}
                to
                {{
                    Math.min(
                        (props.pagination.pageIndex + 1) * props.pagination.pageSize,
                        rowCount,
                    )
                }}
                of {{ rowCount }} entries
            </p>
            <div class="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    :disabled="!table.getCanPreviousPage()"
                    @click="table.previousPage()"
                >
                    Previous
                </Button>
                <span class="text-sm text-muted-foreground">
                    Page {{ table.getState().pagination.pageIndex + 1 }} of
                    {{ Math.max(table.getPageCount(), 1) }}
                </span>
                <Button
                    variant="outline"
                    size="sm"
                    :disabled="!table.getCanNextPage()"
                    @click="table.nextPage()"
                >
                    Next
                </Button>
            </div>
        </div>
    </div>
</template>
