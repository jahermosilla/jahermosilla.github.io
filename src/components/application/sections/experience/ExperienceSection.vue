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

                <ExperienceCard v-bind="experience" />
            </JTimelineItem>
        </JTimeline>

        <p class="mt-6 mb-2 text-xl">I have also made a lot of courses</p>

        <FeaturedCourses />
        <!-- 
        <JButton component="a" primary cta>
            See the full list
            <MdiArrowRight class="ml-auto" />
        </JButton>-->
    </JSection>
</template>