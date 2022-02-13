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
const { shadowClass, showBackdrop, translate, navOpened, isMobile } = toRefs(useNavigationMenu(header));
</script>

<template>
    <header
        ref="header"
        class="transition-transform duration-150 z-10"
        :class="shadowClass"
        :style="{ transform: navOpened ? 'translateY(0%)' : translate ? 'translateY(-100%)' : 'translateY(0%)' }"
    >
        <Backdrop :visible="showBackdrop" @click="navOpened = !navOpened" />

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

        <!-- Append items after navigation -->
        <slot name="append" />

        <Transition name="translate-left" mode="out-in">
            <Hamburguer
                v-if="isMobile"
                @click="navOpened = !navOpened"
                :opened="navOpened"
                class="transition z-10"
            />
        </Transition>
    </header>
</template>

<style scoped>
header {
    min-height: v-bind(height);
    position: fixed;
    top: 0px;

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
    @apply translate-x-[200px];
}

.translate-left-leave-from,
.translate-left-enter-to {
    @apply translate-x-0;
}
</style>