<script setup lang="ts">
import experiences from './experience'

import MdiSchoolOutline from '~icons/mdi/school-outline';
import MdiHandshakeOutline from '~icons/mdi/handshake-outline';

const computeIcon = (experienceType: string) => experienceType === 'education'
    ? MdiSchoolOutline
    : MdiHandshakeOutline;
</script>

<template>
    <JSection title="Experience">
        <p
            class="mb-2"
        >I have kinda scientific background and profesional experience developing web applications:</p>

        <JTimeline>
            <JTimelineItem v-for="experience in experiences">
                <template #icon>
                    <Component :is="computeIcon(experience.type)" />
                </template>

                <JCard>
                    <h1 class="font-bold">{{ experience.title }}</h1>
                    <h1 class="text-sm text-primary dark:text-primary-dark">{{ experience.place }}</h1>

                    <ResizableContainer :height="76" class="my-1">
                        <Component :is="experience.description" class="text-gray-500" />
                    </ResizableContainer>

                    <p class="text-sm">{{ experience.duration[0] }} - {{ experience.duration[1] }}</p>
                </JCard>
            </JTimelineItem>
        </JTimeline>

        <p class="mt-6 mb-2">I have also made a lot of courses</p>

        <!-- <FeaturedCourses /> -->

        <JButton component="a" primary cta>
            See the full list
            <MdiArrowRight class="ml-auto" />
        </JButton>
    </JSection>
</template>