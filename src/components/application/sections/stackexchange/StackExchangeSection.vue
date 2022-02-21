
<script setup lang="ts">
import { Ref } from 'vue';
import stackExchangeData from '~/assets/stackexchange.json';

const selectedCommunity = ref(Object.keys(stackExchangeData)[0] as keyof typeof stackExchangeData);

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
    console.log('scrolltoSelected');

    await nextTick();

    const active = container.value?.getElementsByClassName('active')[0];


    scrollContainer.value!.scrollLeft = active!.getBoundingClientRect().left - container.value!.getBoundingClientRect().left;
}

const listeners = [
    watch(() => selectedCommunity.value, calculateIndicatorPosition, { flush: 'post', immediate: true }),
    watch(() => selectedCommunity.value, scrollToSelected, { flush: 'post' }),
    useEventListener('resize', calculateIndicatorPosition),
    useEventListener('resize', useDebounceFn(scrollToSelected, 200))
];

onBeforeUnmount(() => { listeners.forEach(listener => listener()); });
</script>

<template>
    <section>
        <div
            ref="scrollContainer"
            style="scroll-behavior: smooth;"
            class="overflow-x-auto overflow-y-hidden max-w-full scrollbar-thin shadow-sm"
        >
            <div ref="container" class="relative min-w-full w-[fit-content] flex justify-center">
                <JButton
                    v-for="(data, community) in stackExchangeData"
                    @click="selectedCommunity = community"
                    class="menu-btn"
                    :class="{ active: selectedCommunity === community }"
                >{{ community }}</JButton>

                <div class="indicator"></div>
            </div>
        </div>

        <div class="max-h-screen overflow-auto scrollbar-thin scrollbar-thumb-primary">
            <QuestionAnswerCard
                v-for="answer in stackExchangeData[selectedCommunity].answers"
                v-bind="answer"
            />

            <QuestionAnswerCard
                v-for="question in stackExchangeData[selectedCommunity].questions"
                v-bind="question"
            />
        </div>
    </section>
</template>


<style scoped>
.menu-btn {
    min-width: max(33%, 200px);

    @apply min-w-[33%]
        h-16
        bg-transparent
        rounded-none
        justify-center
        uppercase
        text-base
        font-semibold
        text-gray-500 hover:bg-gray-100
        dark:(text-gray-200 hover:bg-gray-800);
}

.indicator {
    transition-property: all;
    transition-duration: 200ms;
    width: calc(v-bind("indicatorPosition.width") * 1px);
    left: calc(v-bind("indicatorPosition.left") * 1px);

    @apply absolute bottom-0
        h-1
        rounded-sm
        bg-primary dark:bg-primary-dark;
}

.active {
    @apply text-primary dark:text-primary-dark;
}
</style>