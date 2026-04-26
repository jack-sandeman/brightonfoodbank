<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import ClientsDataTable from '@/components/organisms/ClientsDataTable.vue';
import type { ClientTableRow } from '@/components/organisms/ClientsDataTable.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { clients } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Clients',
        href: clients(),
    },
];

const clientRows: ClientTableRow[] = [
    { id: 1, name: 'Alice Thompson', nextVisit: '2026-05-02', numberOfVisits: 7 },
    { id: 2, name: 'Marcus Green', nextVisit: '2026-05-05', numberOfVisits: 3 },
    { id: 3, name: 'Rina Patel', nextVisit: '2026-05-07', numberOfVisits: 12 },
    { id: 4, name: 'Darren Cole', nextVisit: '2026-05-11', numberOfVisits: 2 },
    { id: 5, name: 'Fatima Noor', nextVisit: '2026-05-14', numberOfVisits: 9 },
    { id: 6, name: 'Liam Carter', nextVisit: '2026-05-20', numberOfVisits: 5 },
];

/**
 * Displays a placeholder message for adding clients.
 */
function handleAddClient(): void {
    window.alert('Placeholder: Add new client action');
}

/**
 * Displays a placeholder message for editing a client.
 */
function handleEditClient(client: ClientTableRow): void {
    window.alert(`Placeholder: Edit ${client.name}`);
}

/**
 * Displays a placeholder message for deleting a client.
 */
function handleDeleteClient(client: ClientTableRow): void {
    window.alert(`Placeholder: Delete ${client.name}`);
}
</script>

<template>
    <Head title="Clients" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <ClientsDataTable
                :clients="clientRows"
                @add="handleAddClient"
                @edit="handleEditClient"
                @delete="handleDeleteClient"
            />
        </div>
    </AppLayout>
</template>
