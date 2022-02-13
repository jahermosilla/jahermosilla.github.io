<script setup lang="ts">
const text = "<{ JoseHRDev }>";
const chars = text.split("");

const classes: { [key: string]: string } = {
    '<': 'logo-generic-type-tag',
    '>': 'logo-generic-type-tag',
    '{': 'logo-object-bracket',
    '}': 'logo-object-bracket',
    ' ': 'logo-spacer'
}

const animationClasses: { [key: string]: string } = {
    '<': 'animate-left',
    '>': 'animate-right',
    '{': 'animate-right',
    '}': 'animate-left'
};

const charClass = (char: string) => classes[char] || 'logo-default-char'
const charAnimationClass = (char: string) => animationClasses[char] || '';

const allClasses = (char: string) => [
    'logo-char',
    charClass(char),
    charAnimationClass(char)
].join(' ');
</script>

<template>
    <div w:display="flex">
        <div v-for="char in chars" :class="allClasses(char)">{{ char }}</div>
    </div>
</template>

<style scoped>
.logo-char {
    @apply font-bold text-xl;
}

.logo-generic-type-tag {
    @apply text-gray-700 dark: text-gray-300;
}

.logo-object-bracket {
    @apply text-orange-500 dark:text-blue-500;
}

.logo-spacer {
    @apply px-2;
}

@keyframes animation-left {
    to {
        transform: translateX(-2px);
    }
}

.animate-left {
    animation: animation-left 1s ease-in 0s infinite alternate;
}

@keyframes animation-right {
    to {
        transform: translateX(2px);
    }
}

.animate-right {
    animation: animation-right 1s ease-in 0s infinite alternate;
}
</style>