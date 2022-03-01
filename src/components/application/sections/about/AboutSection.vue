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
    </JSection>
</template>