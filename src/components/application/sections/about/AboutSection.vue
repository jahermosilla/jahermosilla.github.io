<script setup lang = "ts" >
import FeaturedText from "../../../ui/text/FeaturedText.vue";
const codeTemplates = [`

function greet() {
    console.log('Hello world!');
}

`, `

const hireMe() = () =>  ({
    journey: 'flexible',
})

`
]
</script>

<template>
    <JSection title="About me">
        <AboutDescription class="xl:max-w-[72ch]" />
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <!-- <CodeTypeWrite :code-templates="codeTemplates" class="xl:(max-w-[64ch])" /> -->
        </div>

        <!-- <JButton component="a" primary cta class="featured-word mx-auto mt-8">
            <div class="mr-4">See my experience</div>
            <MdiArrowRight class="ml-auto" />
        </JButton>-->
    </JSection>
</template>