import { Ref, watchPostEffect } from "vue";

const translate = ref(false);
const navOpened = ref(false);
const scroll = import.meta.env.SSR ? useScroll(null) : useScroll(window);
const isMobile = import.meta.env.SSR ? ref(false) : useMediaQuery('(max-width: 768px)');
const showBackdrop = computed(() => isMobile.value && navOpened.value);

const toggle = () => navOpened.value = !navOpened.value;

export function useNavigationMenuActions() {
    return {
        toggle,
        showBackdrop
    }
}

export default function useNavigationMenu(headerRef: Ref<HTMLElement | null>) {
    // Show header when scrolling up
    const unwatchScrollTop = watchPostEffect(() => {
        if (scroll.directions.top) translate.value = false;
    });

    // Hide header when scrolling down
    const unwatchScrollBottom = watchPostEffect(() => {
        if (scroll.directions.bottom) translate.value = true;
    });

    // Hide navigation on large screens
    // and close by default when mobile breakpoint is reached
    const unwatchMediaQuery = watchPostEffect(() => {
        if (!isMobile.value) navOpened.value = false;
    });

    // Hides the scrollbar when the nav is opened in mobile
    const unwatchNavOpened = watchEffect(() => {

        console.log('Set nav opened', navOpened.value ? 'hidden !important' : 'auto', document.querySelector(':root'))
        if (!import.meta.env.SSR) document.querySelector('html')!.style.overflowY = navOpened.value ? 'hidden' : 'auto';
    });

    // Focus on active link when nav is opened (mobile)
    function focusActiveLink() {
        // (header.value.querySelector('ul a:first-child')! as HTMLAnchorElement).focus();
        (headerRef.value!.querySelector('ul .router-link-active') as HTMLAnchorElement)!.focus();
    }

    const unwatchFocusActiveLink = watchPostEffect(() => navOpened.value && focusActiveLink());

    // Close navigation when route changes
    useRouter().beforeEach((to, from, next) => {
        navOpened.value = false;
        next();
    });

    onBeforeUnmount(() => {
        unwatchScrollTop();
        unwatchScrollBottom();
        unwatchMediaQuery();
        unwatchNavOpened();
        unwatchFocusActiveLink();
    });

    return reactive({
        toggle,
        navOpened: readonly(navOpened),
        translate: readonly(translate),
        isMobile,
        showBackdrop,
        isTopReached: computed(() => scroll.arrivedState.top),
    })
}