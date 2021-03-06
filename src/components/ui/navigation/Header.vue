<script setup lang="ts">
import type { Ref } from 'vue';
import useNavigationMenu from './use-menu';

interface Props {
    height: string,
    items: Array<{ name: string, href: string }>
}

const props = defineProps<Props>();

const { items, height } = toRefs(props);

// Navigation scroll and size utilities
const header: Ref<HTMLElement | null> = ref(null);
const {
    toggle,
    navOpened,
    translate,
    isMobile,
    isTopReached
} = toRefs(useNavigationMenu(header));

const shadowClass = computed(() => isTopReached.value ? 'shadow-none' : 'shadow-md');
</script>

<template>
    <header
        ref="header"
        :class="[shadowClass, { opened: navOpened }]"
        :style="{ transform: navOpened ? 'translateY(0%)' : translate ? 'translateY(-100%)' : 'translateY(0%)' }"
    >
        <!-- Prepend items-->
        <div class="z-30">
            <slot name="prepend" />
        </div>

        <div class="spacer-left" />

        <Navigation class="z-20" :class="{ mobile: isMobile, opened: navOpened }">
            <!-- Prepend inner items -->
            <slot name="prepend-inner" />

            <NavItem v-for="(item, i) in items" :key="item.name" :to="item.href" :text="item.name" />

            <!-- Append inner items -->
            <slot name="append-inner" />
        </Navigation>

        <div class="ml-8"></div>

        <!-- Append items after navigation -->
        <div class="z-20">
            <slot name="append" />
        </div>

        <Transition name="translate-left" mode="out-in">
            <Hamburguer
                aria-label="Toggle Navigation visibility"
                v-if="isMobile"
                @click="toggle"
                :opened="navOpened"
                class="ml-8 transition z-20"
            />
        </Transition>
    </header>
</template>

<style scoped>
header {
    height: v-bind(height);
    transition: transform 0.1s ease-in, height 0.2s ease-in;

    @apply page-padding
        fixed
        top-0
        z-20
        app-header-background
        backdrop-filter backdrop-blur-md
        flex items-center
        w-full
        font-medium
        text-md;
}

header.opened {
    @apply bg-transparent pointer-events-none shadow-none;
}

header.opened * {
    @apply pointer-events-auto;
}

.spacer-left {
    @apply ml-auto;
}

.translate-left-enter-active,
.translate-left-leave-active {
    @apply transform;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
}

.translate-left-enter-from,
.translate-left-leave-to {
    transform: translateX(200px);
}

.translate-left-leave-from,
.translate-left-enter-to {
    transform: translateX(0px);
}
</style>