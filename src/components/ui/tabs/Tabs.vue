<script setup lang="ts">
import type { Ref } from 'vue';

const props = defineProps<{
    items: { title: string }[],
    selected: string
}>();

const emit = defineEmits<{
    (event: 'update:selected', selected: string): void
}>();

const _selected = useVModel(props, 'selected', emit);

const container: Ref<HTMLDivElement | null> = ref(null);
const scrollContainer: Ref<HTMLDivElement | null> = ref(null);
const indicatorPosition = ref({ left: 0, width: 0 });

const calculateIndicatorPosition = async () => {
    await nextTick();

    const active = container.value?.getElementsByClassName('active')[0];
    const { left = 0, width = 0 } = active?.getBoundingClientRect() || {};
    const { left: containerLeft = 0 } = container.value?.getBoundingClientRect() || {};

    indicatorPosition.value = { left: left - containerLeft, width };
}

const scrollToSelected = async () => {
    await nextTick();

    const active = container.value?.getElementsByClassName('active')[0];

    scrollContainer.value!.scrollLeft = active!.getBoundingClientRect().left - container.value!.getBoundingClientRect().left;
}

const listeners = [
    watch(() => [_selected.value, container.value], calculateIndicatorPosition),
    watch(() => _selected.value, scrollToSelected, { flush: 'post' }),
    useEventListener('resize', calculateIndicatorPosition),
    useEventListener('resize', useDebounceFn(scrollToSelected, 200))
];

onBeforeUnmount(() => { listeners.forEach(listener => listener()); });

</script>

<template>
    <div
        ref="scrollContainer"
        style="scroll-behavior: smooth;"
        class="overflow-x-auto overflow-y-hidden max-w-full overflow scrollbar-thin mb-1"
    >
        <div
            ref="container"
            class="relative min-w-full w-[fit-content] flex justify-center border-b-[rgba(0,0,0,0.1)] border-b-1"
        >
            <JButton
                v-for="item in props.items"
                @click="_selected = item.title"
                class="menu-btn"
                :class="{ active: _selected === item.title }"
            >{{ item.title }}</JButton>

            <div class="indicator"></div>
        </div>
    </div>
</template>


<style scoped>
.menu-btn {
    min-width: max(33%, 200px);

    @apply min-w-[33%]
        h-12
        bg-transparent
        rounded-none
        justify-center
        uppercase
        text-base
        font-normal
        text-gray-600
        rounded-t-sm
        dark:(text-gray-300);
}

.menu-btn:hover {
    @apply bg-primary/10 dark:bg-primary-dark/10;
}

.indicator {
    transition-property: all;
    transition-duration: 350ms;
    width: calc(v-bind("indicatorPosition.width") * 1px);
    left: calc(v-bind("indicatorPosition.left") * 1px);

    @apply absolute bottom-0
        h-1
        rounded-sm
        bg-primary dark:bg-primary-dark;
}

.active {
    @apply font-semibold text-primary dark:text-primary-dark;
}
</style>