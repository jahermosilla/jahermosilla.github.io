<script setup lang="ts">
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const codeElement = ref(null);

const fullCode = `
function greet() {
    console.log('Hello world')
}
`;


const code = ref('');

let actualIndex = 0;
const intervalId = setInterval(updateCode, 50);

async function updateCode() {
    if (actualIndex > fullCode.length - 1) return clearInterval(intervalId);

    code.value = code.value + fullCode.charAt(actualIndex);

    await nextTick();

    Prism.highlightElement(codeElement.value!);

    actualIndex++;
}


onMounted(() => {
    Prism.highlightElement(codeElement.value!);
});

</script>

<template>
    <h1 class="text-4xl">Hello world</h1>
    <h4>Blablalababl</h4>

    <div class="rounded-md bg-gray-200 overflow-hidden">
        <div class="flex space-x-1 p-2 bg-gray-300">
            <div class="bg-gray-600 w-3 h-3 rounded-full"></div>
            <div class="bg-gray-600 w-3 h-3 rounded-full"></div>
            <div class="bg-gray-600 w-3 h-3 rounded-full"></div>
        </div>

        <pre class="!bg-transparent h-auto">
            <code ref="codeElement" class="language-javascript">{{ code }}</code>
        </pre>
    </div>
</template>