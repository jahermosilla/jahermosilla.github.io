<script lang="ts">
export default {
    inheritAttrs: false
}
</script>

<script setup lang="ts">
const props = defineProps<{
    list: unknown[],
    initialCount: number
    stepSize: number
}>();

const page = ref(0);
const itemsCount = computed(() => props.initialCount + props.stepSize * page.value);
const visibleItems = computed(() => props.list.slice(0, itemsCount.value));
const showMore = computed(() => itemsCount.value <= props.list.length);
</script>

<template>
    
    <slot name="item" v-for="item in visibleItems" v-bind="{  item  }"></slot>

    <JButton
        v-if="showMore"
        v-bind="$attrs"
        @click="page = page + 1"
        outline
        class="mt-4 min-w-30 min-h-10 justify-center"
    >Show more</JButton>
</template>