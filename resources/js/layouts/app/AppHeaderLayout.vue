<script setup lang="ts">
import AppContent from '@/components/layouts/AppContent.vue';
import AppShell from '@/components/layouts/AppShell.vue';
import AppHeader from '@/components/organisms/AppHeader.vue';
import type { BreadcrumbItem } from '@/types';

type Props = {
    breadcrumbs?: BreadcrumbItem[];
};

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});
</script>

<template>
    <AppShell variant="header">
        <AppHeader :breadcrumbs="breadcrumbs" />
        <AppContent variant="header">
            <slot />
        </AppContent>
    </AppShell>
</template>
