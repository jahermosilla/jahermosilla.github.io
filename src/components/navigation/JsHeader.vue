<script setup lang="ts">
interface Props {
    items: Array<{ name: string, href: string }>
}

const props = defineProps<Props>();

const { items } = toRefs(props);
</script>

<template>
    <header>
        <ul>
            <li v-for="item in items">
                <RouterLink :to="item.href">{{ item.name }}</RouterLink>
            </li>
        </ul>
    </header>
</template>