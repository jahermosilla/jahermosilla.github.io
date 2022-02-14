import { Ref, watchPostEffect } from "vue";

const translate = ref(false);
const navOpened = ref(false);
const toggle = () => navOpened.value = !navOpened.value;

export default function useNavigationMenu(headerRef: Ref<HTMLElement | null>) {
    const scroll = useScroll(window);
    const isMobile = useMediaQuery('(max-width: 768px)');

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

    // Prevent glitches when hidding the overflow scroll content
    const unwatchNavOpened = watchEffect(() => {
        document.body.style.overflowY = navOpened.value ? 'hidden' : 'auto';
        document.getElementById('app')!.style.paddingRight = navOpened.value ? '21px !imortant' : '0px';
        document.getElementById('app')!.style.marginRight = navOpened.value ? '-21px !important' : '0px';
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
        isTopReached: computed(() => scroll.arrivedState.top),
        showBackdrop: computed(() => isMobile.value && navOpened.value)
    })
}