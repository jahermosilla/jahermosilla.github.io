<script setup lang="ts">
const experiences = [
    {
        type: 'education',
        title: 'Degree in Geomatics Engineering and Survey',
        place: 'Universitat Politècnica de València (UPV)',
        duration: []
    },
    {
        type: 'education',
        title: 'Master in Geomatics Engineering and Geoinformation',
        place: 'Universitat Politècnica de València (UPV)',
        duration: []
    },
    {
        type: 'work',
        title: 'Full Stack Developer',
        place: 'Green Urban Data SL',
        duration: []
    },
    {
        type: 'work',
        title: 'Full Stack Developer',
        place: 'Prodevelop SL',
        duration: []
    }
];
</script>

<template>
    <JSection title="Experience">
        <JTimeline>
            <JTimelineItem v-for="experience in experiences">
                <template #icon>
                    <MdiSchoolOutline v-if="experience.type === 'education'" />
                    <MdiHandshakeOutline v-if="experience.type === 'work'" />
                </template>
                <JCard>
                    <h1 class="font-bold">{{ experience.title }}</h1>
                    <h1 class="text-sm text-primary dark:text-primary-dark">{{ experience.place }}</h1>

                    <h4
                        class="text-gray-400"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempore laudantium magnam quae vel ipsam molestiae ex corporis quidem cupiditate?</h4>

                    <p class="text-sm">Lorem ipsum dolor sit.</p>
                </JCard>
            </JTimelineItem>
        </JTimeline>
    </JSection>
</template>