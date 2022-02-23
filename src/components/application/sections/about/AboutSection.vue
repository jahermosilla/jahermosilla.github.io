<script setup lang = "ts" >
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
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <CodeTypeWrite :code-templates="codeTemplates" class="lg:mr-8" />

            <article class="text-dark-700 dark:text-light-100">
                <p style="line-height: 2;">
                    I'm 28 years old and I'm from Valencia, Spain!
                    <br />I like to write
                    <span class="featured-word">clean</span> and
                    <span class="featured-word">testable</span> code for
                    <span class="featured-word">backend</span> and
                    <span class="featured-word">frontend</span>
                    applications.
                    I have 4 years of profesional experience delivering software in 2 companies, and almost 10 years of writing code for myself.
                    In my daily basis, I feel confortable writing code using:
                </p>

                <ul class="list-circle ml-4" style="line-height: 2;">
                    <li>
                        <span class="featured-word">Testing</span> (TDD, ATDD, BDD)
                    </li>
                    <li>
                        <span class="featured-word">Hexagonal Arquitecture</span> and
                        <span class="featured-word">Design patterns</span>
                    </li>
                    <li>
                        <span class="featured-word">Refactoring</span>
                    </li>
                </ul>

                <JButton component="a" primary cta class="featured-word mt-4">
                    <div class="mr-4">See my experience</div>
                    <MdiArrowRight class="ml-auto" />
                </JButton>
            </article>
        </div>
    </JSection>
</template>