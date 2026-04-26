<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { toUrl } from '@/lib/utils';
import type { NavItem } from '@/types';

type Props = {
    mainNavItems: NavItem[];
    activeItemStyles: string;
    whenCurrentUrl: (
        url: string,
        className?: string,
        fallbackClassName?: string,
    ) => string;
    isCurrentUrl: (url: string) => boolean;
};

defineProps<Props>();
</script>

<template>
    <div class="hidden h-full lg:flex lg:flex-1">
        <NavigationMenu class="ml-10 flex h-full items-stretch">
            <NavigationMenuList class="flex h-full items-stretch space-x-2">
                <NavigationMenuItem
                    v-for="(item, index) in mainNavItems"
                    :key="index"
                    class="relative flex h-full items-center"
                >
                    <Link
                        :class="[
                            navigationMenuTriggerStyle(),
                            whenCurrentUrl(toUrl(item.href), activeItemStyles),
                            'h-9 cursor-pointer px-3',
                        ]"
                        :href="item.href"
                    >
                        <component
                            v-if="item.icon"
                            :is="item.icon"
                            class="mr-2 h-4 w-4"
                        />
                        {{ item.title }}
                    </Link>
                    <div
                        v-if="isCurrentUrl(toUrl(item.href))"
                        class="absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white"
                    ></div>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </div>
</template>
