<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { BookOpen, Folder, LayoutGrid } from 'lucide-vue-next';
import { computed } from 'vue';
import AppLogo from '@/components/molecules/AppLogo.vue';
import Breadcrumbs from '@/components/molecules/Breadcrumbs.vue';
import AppHeaderActions from '@/components/organisms/app-header/AppHeaderActions.vue';
import AppHeaderDesktopNav from '@/components/organisms/app-header/AppHeaderDesktopNav.vue';
import AppHeaderMobileMenu from '@/components/organisms/app-header/AppHeaderMobileMenu.vue';
import { useCurrentUrl } from '@/composables/useCurrentUrl';
import { dashboard } from '@/routes';
import type { BreadcrumbItem, NavItem } from '@/types';

type Props = {
    breadcrumbs?: BreadcrumbItem[];
};

const props = withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});

const auth = computed(() => usePage().props.auth);
const { isCurrentUrl, whenCurrentUrl } = useCurrentUrl();
const whenCurrentUrlClass = (
    url: string,
    className?: string,
    fallbackClassName?: string,
) => String(whenCurrentUrl(url, className, fallbackClassName) ?? '');
const isCurrentUrlMatch = (url: string) => isCurrentUrl(url);

const activeItemStyles =
    'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
];

const rightNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/vue-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#vue',
        icon: BookOpen,
    },
];
</script>

<template>
    <div>
        <div class="border-b border-sidebar-border/80">
            <div class="mx-auto flex h-16 items-center px-4 md:max-w-7xl">
                <AppHeaderMobileMenu
                    :main-nav-items="mainNavItems"
                    :right-nav-items="rightNavItems"
                    :active-item-styles="activeItemStyles"
                    :when-current-url="whenCurrentUrlClass"
                />

                <Link :href="dashboard()" class="flex items-center gap-x-2">
                    <AppLogo />
                </Link>

                <AppHeaderDesktopNav
                    :main-nav-items="mainNavItems"
                    :active-item-styles="activeItemStyles"
                    :when-current-url="whenCurrentUrlClass"
                    :is-current-url="isCurrentUrlMatch"
                />

                <AppHeaderActions :right-nav-items="rightNavItems" :auth-user="auth.user" />
            </div>
        </div>

        <div
            v-if="props.breadcrumbs.length > 1"
            class="flex w-full border-b border-sidebar-border/70"
        >
            <div
                class="mx-auto flex h-12 w-full items-center justify-start px-4 text-neutral-500 md:max-w-7xl"
            >
                <Breadcrumbs :breadcrumbs="breadcrumbs" />
            </div>
        </div>
    </div>
</template>
