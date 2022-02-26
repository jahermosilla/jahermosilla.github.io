import { MaybeRef } from "@vueuse/core";
import type { Component } from "vue";

const calculateElementHeight = (element: HTMLElement) => {
    const style = window.getComputedStyle(element);
    const reducer = (s: number, prop: string) => s + parseInt(style.getPropertyValue(prop));
    const margins = ['margin-top', 'margin-bottom'].reduce(reducer, 0);

    return element.clientHeight + margins;
}

const computeBestHeight = async (contentElement: HTMLElement | null, desiredHeight: number) => {
    await nextTick();

    const el = unref(contentElement);
    let bestHeight = 0;

    for (const element of Array.from(el!.children ?? [])) {
        bestHeight += calculateElementHeight(element as HTMLElement);

        if (
            bestHeight <= desiredHeight && Math.abs(bestHeight - desiredHeight) < 50 ||
            bestHeight >= desiredHeight && Math.abs(bestHeight - desiredHeight) < 50
        ) return bestHeight;
    }

    return desiredHeight;
}

export default function useResizable(element: MaybeRef<HTMLDivElement | Component | null>, desiredHeight: number) {
    const optimalHeight = ref(desiredHeight);
    const contentHeight = ref(0);
    const opened = ref(false);
    const toggle = () => opened.value = !opened.value;
    const height = computed(() => `${opened.value ? contentHeight.value : optimalHeight.value}px`);
    const showArrow = computed(() => optimalHeight.value < contentHeight.value);

    const setContentHeight = async () => {
        await nextTick();

        const el = ((unref(element) as any)!.$el ?? unref(element)) as HTMLDivElement;

        contentHeight.value = el!.scrollHeight;
    };

    const setProperties = async () => {
        const el = ((unref(element) as any)!.$el ?? unref(element)) as HTMLDivElement;

        setContentHeight();
        optimalHeight.value = await computeBestHeight(el, desiredHeight);
    }

    const listeners = [
        useEventListener('resize', setProperties)
    ];

    onMounted(setProperties);

    onBeforeUnmount(() => listeners.forEach(unlisten => unlisten()));

    return {
        height,
        toggle,
        opened: readonly(opened),
        showArrow
    }
}
