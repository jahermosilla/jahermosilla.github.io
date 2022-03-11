
<script setup lang="ts">
import stackExchangeData from '~/assets/stackexchange.json';
import profilesData from '~/assets/stackexchange-profiles.json';

const keys = Object.keys(stackExchangeData) as (keyof typeof stackExchangeData)[];
const items = keys.map(title => ({ title }));
const selected = ref(keys[0]);

const profile = computed(() => profilesData[selected.value]);

watchEffect(() => console.log(selected.value));
</script>

<template>
    <JSection title="I help people" class="relative">
        <p class="text-xl">
            As a Software developer I will always be in debt with the community. I've been an active user on some
            <FeaturedText text="Stackexchange" />
            <!-- -->
            communities, such as
            <FeaturedText text="Stackoverflow" />,
            since several years ago, mostly replying questions but also creating interesting ones.
            <FeaturedText text="Check out" />
            <!---->
            some of my contributions:
        </p>

        <Tabs :items="items" v-model:selected="selected" class="mt-4" />

        <TabsContent class="py-4">
            <JCard class="mb-2 w-full rounded-sm border-3 border-primary dark:border-primary-dark">
                <h1 class="text-primary dark:text-primary-dark font-bold uppercase">Profile stats</h1>

                <h2 class="text-primary dark:text-primary-dark font-bold text-xl flex items-center">
                    <MdiCardAccountDetailsStarOutline class="inline mr-4" />
                    {{ profile.reputation }}
                </h2>
            </JCard>

            <ResizableContainer baseline :height="250" header-class="!px-5" class="relative">
                <template #title>
                    <h1 class="text-primary dark:text-primary-dark font-bold uppercase">Answers</h1>
                </template>

                <QuestionAnswerCard
                    v-for="answer in stackExchangeData[selected].answers"
                    :key="answer.answer_id"
                    v-bind="answer"
                    class="rounded-sm mt-2 p-3"
                />
            </ResizableContainer>

            <ResizableContainer baseline :height="250" header-class="!px-5" class="relative">
                <template #title>
                    <h1
                        class="mt-8 text-primary dark:text-primary-dark font-bold uppercase"
                    >Questions</h1>
                </template>

                <QuestionAnswerCard
                    v-for="question in stackExchangeData[selected].questions"
                    :key="question.question_id"
                    v-bind="question"
                    class="rounded-sm mt-2 p-3"
                />
            </ResizableContainer>
        </TabsContent>
    </JSection>
</template>
