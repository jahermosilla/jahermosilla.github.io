<script setup lang="ts">
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

const props = withDefaults(defineProps<{ codeTemplates: Array<string> }>(), {
    codeTemplates: () => []
});

const { codeTemplates } = toRefs(props);

const codeElement = ref(null);
const code = ref('');

const updateCode = () => {
    const timerId = setInterval(setCode, 50);

    let actualTemplate = 0;
    let actualIndex = 0;

    async function setCode() {
        actualIndex++;

        const template = codeTemplates.value[actualTemplate];

        code.value = code.value + template.charAt(actualIndex);

        await nextTick();

        Prism.highlightElement(codeElement.value!);

        if (actualIndex > template.length - 1) {
            actualTemplate++;
            actualIndex = 0;
            code.value = '';
        }

        if (actualTemplate > codeTemplates.value.length - 1) {
            actualTemplate = 0;
        }
    }

    return () => clearInterval(timerId);
}

const cancel = updateCode();


onBeforeUnmount(cancel);

</script>

<template>
    <div class="rounded-md bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <div class="flex space-x-1 p-2 bg-gray-300 dark:bg-gray-500">
            <div class="bg-gray-600 dark:bg-gray-200 w-3 h-3 rounded-full"></div>
            <div class="bg-gray-600 dark:bg-gray-200 w-3 h-3 rounded-full"></div>
            <div class="bg-gray-600 dark:bg-gray-200 w-3 h-3 rounded-full"></div>
        </div>

        <div class="h-64 overflow-hidden">
            <pre class="!bg-transparent">
                <code ref="codeElement" class="language-javascript">{{ code }}</code>
            </pre>
        </div>
    </div>
</template>