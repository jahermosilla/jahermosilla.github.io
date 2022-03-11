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
    <ul>
        <li v-for="item in visibleItems">
            <slot name="item" v-bind="{  item  }"></slot>
        </li>

        <li>
            <JButton
                v-if="showMore"
                v-bind="$attrs"
                @click="page = page + 1"
                outline
                class="mt-4 w-full min-h-10 justify-center uppercase"
            >Show more</JButton>
        </li>
    </ul>
</template>