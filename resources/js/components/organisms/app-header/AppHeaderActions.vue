<script setup lang="ts">
import { Search } from 'lucide-vue-next';
import UserMenuContent from '@/components/molecules/UserMenuContent.vue';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { getInitials } from '@/composables/useInitials';
import { toUrl } from '@/lib/utils';
import type { NavItem, User } from '@/types';

type Props = {
    rightNavItems: NavItem[];
    authUser: User;
};

defineProps<Props>();
</script>

<template>
    <div class="ml-auto flex items-center space-x-2">
        <div class="relative flex items-center space-x-1">
            <Button variant="ghost" size="icon" class="group h-9 w-9 cursor-pointer">
                <Search class="size-5 opacity-80 group-hover:opacity-100" />
            </Button>

            <div class="hidden space-x-1 lg:flex">
                <template v-for="item in rightNavItems" :key="item.title">
                    <TooltipProvider :delay-duration="0">
                        <Tooltip>
                            <TooltipTrigger>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    as-child
                                    class="group h-9 w-9 cursor-pointer"
                                >
                                    <a
                                        :href="toUrl(item.href)"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span class="sr-only">{{ item.title }}</span>
                                        <component
                                            :is="item.icon"
                                            class="size-5 opacity-80 group-hover:opacity-100"
                                        />
                                    </a>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{{ item.title }}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </template>
            </div>
        </div>

        <DropdownMenu>
            <DropdownMenuTrigger :as-child="true">
                <Button
                    variant="ghost"
                    size="icon"
                    class="relative size-10 w-auto rounded-full p-1 focus-within:ring-2 focus-within:ring-primary"
                >
                    <Avatar class="size-8 overflow-hidden rounded-full">
                        <AvatarImage
                            v-if="authUser.avatar"
                            :src="authUser.avatar"
                            :alt="authUser.name"
                        />
                        <AvatarFallback
                            class="rounded-lg bg-neutral-200 font-semibold text-black dark:bg-neutral-700 dark:text-white"
                        >
                            {{ getInitials(authUser.name ?? authUser.email) }}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" class="w-56">
                <UserMenuContent :user="authUser" />
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
</template>
