
<script setup lang="ts">
import stackExchangeData from '~/assets/stackexchange.json';
const keys = Object.keys(stackExchangeData) as (keyof typeof stackExchangeData)[];
const items = keys.map(title => ({ title }));
const selected = ref(keys[0]);

watchEffect(() => console.log(selected.value));
</script>

<template>
    <JSection title="I help people" class="relative">
        <Tabs :items="items" v-model:selected="selected" />

        <TabsContent class="py-4">
            <h1 class="text-primary dark:text-primary-dark font-semibold uppercase">Answers</h1>
            <ResizableContainer :height="250" class="relative" :key="`a-${selected}`">
                <QuestionAnswerCard
                    v-for="answer in stackExchangeData[selected].answers"
                    :key="answer.answer_id"
                    v-bind="answer"
                    class="rounded-sm mt-2 mx-1 p-3"
                />
            </ResizableContainer>

            <h1 class="mt-8 text-primary dark:text-primary-dark font-semibold uppercase">Questions</h1>
            <ResizableContainer :height="250" class="relative" :key="`b-${selected}`">
                <QuestionAnswerCard
                    v-for="question in stackExchangeData[selected].questions"
                    :key="question.question_id"
                    v-bind="question"
                    class="rounded-sm mt-2 mx-1 p-3"
                />
            </ResizableContainer>
        </TabsContent>
    </JSection>
</template>
