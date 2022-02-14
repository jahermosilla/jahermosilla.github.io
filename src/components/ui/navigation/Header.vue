<script setup lang="ts">
import { Ref } from 'vue';
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
    isTopReached,
    showBackdrop
} = toRefs(useNavigationMenu(header));

const computedHeight = computed(() => isTopReached.value ? '8rem' : height.value);
const shadowClass = computed(() => isTopReached.value ? 'shadow-none' : 'shadow-md');
</script>

<template>
    <header
        ref="header"
        :class="shadowClass"
        :style="{ transform: navOpened ? 'translateY(0%)' : translate ? 'translateY(-100%)' : 'translateY(0%)' }"
    >
        <Backdrop @click="toggle" :visible="showBackdrop" />

        <!-- Prepend items-->
        <slot name="prepend" />

        <div class="spacer-left" />

        <Navigation :class="{ mobile: isMobile, opened: navOpened }">
            <!-- Prepend inner items -->
            <slot name="prepend-inner" />

            <NavItem v-for="(item, i) in items" :key="item.name" :to="item.href" :text="item.name" />

            <!-- Append inner items -->
            <slot name="append-inner" />
        </Navigation>

        <div class="ml-8"></div>

        <!-- Append items after navigation -->
        <slot name="append" />

        <div class="ml-8"></div>

        <Transition name="translate-left" mode="out-in">
            <Hamburguer
                v-if="isMobile"
                @click="toggle"
                :opened="navOpened"
                class="transition z-10"
            />
        </Transition>
    </header>
</template>

<style scoped>
header {
    position: fixed;
    top: 0px;
    height: v-bind(computedHeight);
    transition: transform 0.2s ease-in, height 0.2s ease-in;

    @apply page-padding
        fixed
        top-0
        z-10
        bg-gray-100/80 dark:bg-gray-800/80
        backdrop-filter backdrop-blur-md
        flex items-center
        w-full
        font-medium
        text-md;
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