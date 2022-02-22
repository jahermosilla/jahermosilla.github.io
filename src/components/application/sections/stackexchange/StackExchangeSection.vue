
<script setup lang="ts">
import { Ref } from 'vue';
import stackExchangeData from '~/assets/stackexchange.json';
const keys = Object.keys(stackExchangeData) as (keyof typeof stackExchangeData)[];
const items = keys.map(title => ({ title }));
const selected = ref(keys[0]);

watchEffect(() => console.log(selected.value));
</script>

<template>
    <JSection title="I help people" class="relative">
        <Tabs :items="items" v-model:selected="selected" />

        <TabsContent>
            <QuestionAnswerCard
                v-for="answer in stackExchangeData[selected].answers"
                :key="answer.answer_id"
                v-bind="answer"
            />

            <QuestionAnswerCard
                v-for="question in stackExchangeData[selected].questions"
                :key="question.question_id"
                v-bind="question"
            />
        </TabsContent>
    </JSection>
</template>
