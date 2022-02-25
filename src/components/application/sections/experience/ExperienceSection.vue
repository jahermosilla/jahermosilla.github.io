<script setup lang="ts">
import experiences from './experience'

import MdiSchoolOutline from '~icons/mdi/school-outline';
import MdiHandshakeOutline from '~icons/mdi/handshake-outline';

const computeIcon = (experienceType: string) => experienceType === 'education'
    ? MdiSchoolOutline
    : MdiHandshakeOutline;
</script>

<template>
    <JSection title="Studies & Experience">
        <JTimeline>
            <JTimelineItem v-for="experience in experiences">
                <template #icon>
                    <Component :is="computeIcon(experience.type)" />
                </template>

                <JCard>
                    <ResizableContainer :height="98" class="my-1">
                        <template #title>
                            <p
                                class="text-sm uppercase"
                            >{{ experience.duration[0] }} - {{ experience.duration[1] }}</p>

                            <h1 class="font-bold text-xl">{{ experience.title }}</h1>
                            <h2
                                class="text-lg font-bold text-primary dark:text-primary-dark"
                            >{{ experience.place }}</h2>
                        </template>

                        <Component
                            :is="experience.description"
                            class="text-gray-500 dark:text-light-900 mt-2"
                        />
                    </ResizableContainer>
                </JCard>
            </JTimelineItem>
        </JTimeline>

        <p class="mt-6 mb-2 text-xl">I have also made a lot of courses</p>

        <!-- <FeaturedCourses /> -->
        <!-- 
        <JButton component="a" primary cta>
            See the full list
            <MdiArrowRight class="ml-auto" />
        </JButton>-->
    </JSection>
</template>