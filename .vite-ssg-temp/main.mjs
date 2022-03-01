var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { ViteSSG } from "vite-ssg";
import { useSSRContext, defineComponent, mergeProps, openBlock, createElementBlock, createElementVNode, toRefs, createVNode, resolveDynamicComponent, unref, withCtx, renderSlot, Transition, createBlock, useCssVars, createTextVNode, toDisplayString, ref, computed, watchPostEffect, watchEffect, onBeforeUnmount, reactive, readonly, Fragment, renderList, resolveComponent, defineAsyncComponent, onMounted, nextTick, createStaticVNode, watch } from "vue";
import { ssrRenderAttrs, ssrRenderVNode, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderSuspense, ssrRenderAttr } from "vue/server-renderer";
import { useDark, useToggle, useScroll, useIntersectionObserver, useEventListener, useParallax, useVModel, useDebounceFn } from "@vueuse/core";
import { RouterLink, useRouter } from "vue-router";
import { MotionPlugin, useMotion } from "@vueuse/motion";
import "isomorphic-fetch";
import { View, Map } from "ol";
import OSMXML from "ol/format/OSMXML.js";
import VectorSource from "ol/source/Vector.js";
import { Style, Stroke, Fill, Circle } from "ol/style";
import { Vector } from "ol/layer";
import { bbox } from "ol/loadingstrategy";
import { transformExtent } from "ol/proj";
var Backdrop_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const __default__$3 = {
  inheritAttrs: false
};
const _sfc_main$J = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$3), {
  __ssrInlineRender: true,
  props: {
    visible: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      if (props.visible) {
        _push(`<div${ssrRenderAttrs(mergeProps(_ctx.$attrs, { class: "fixed top-0 z-10 bg-gray-600/60 inset-0 h-screen backdrop-filter backdrop-blur-md" }, _attrs))} data-v-29c2d7e2></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
}));
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ui/navigation/Backdrop.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
var __unplugin_components_3$3 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-29c2d7e2"]]);
const _hoisted_1$S = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$S = /* @__PURE__ */ createElementVNode("path", {
  d: "M3.55 18.54l1.41 1.41l1.8-1.79l-1.42-1.42M11 22.45h2V19.5h-2m1-14a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.66l1.8 1.79l1.41-1.41l-1.79-1.8m1.79-12.28l-1.41-1.41l-1.8 1.79l1.42 1.42M13 .55h-2V3.5h2m-9 7H1v2h3m2.76-7.66l-1.8-1.79l-1.41 1.41l1.79 1.8l1.42-1.42z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$I = [
  _hoisted_2$S
];
function render$S(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$S, _hoisted_3$I);
}
var __unplugin_components_2$7 = { name: "mdi-white-balance-sunny", render: render$S };
const _hoisted_1$R = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$R = /* @__PURE__ */ createElementVNode("path", {
  d: "M17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$H = [
  _hoisted_2$R
];
function render$R(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$R, _hoisted_3$H);
}
var __unplugin_components_1$a = { name: "mdi-weather-night", render: render$R };
var JButton_vue_vue_type_style_index_0_lang = "";
const __default__$2 = {
  inheritAttrs: false
};
const _sfc_main$I = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$2), {
  __ssrInlineRender: true,
  props: {
    icon: { type: Boolean, default: false },
    primary: { type: Boolean, default: false },
    outline: { type: Boolean },
    cta: { type: Boolean, default: false },
    component: { default: "button" }
  },
  setup(__props) {
    const props = __props;
    const { icon, primary, cta, outline } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.component), mergeProps(_ctx.$attrs, {
        class: ["j-button", { icon: unref(icon), primary: unref(primary), cta: unref(cta), outline: unref(outline) }]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
}));
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ui/button/JButton.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
var ToggleDarkButton_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = useDark();
    useToggle(isDark);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JButton = _sfc_main$I;
      const _component_MdiWeatherNight = __unplugin_components_1$a;
      const _component_MdiWhiteBalanceSunny = __unplugin_components_2$7;
      _push(ssrRenderComponent(_component_JButton, mergeProps({
        icon: "",
        "aria-label": "Toggle Dark Button"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(isDark)) {
              _push2(ssrRenderComponent(_component_MdiWeatherNight, { class: "icon text-primary-dark" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_MdiWhiteBalanceSunny, { class: "icon text-primary" }, null, _parent2, _scopeId));
            }
          } else {
            return [
              createVNode(Transition, {
                name: "scale",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  unref(isDark) ? (openBlock(), createBlock(_component_MdiWeatherNight, {
                    key: 0,
                    class: "icon text-primary-dark"
                  })) : (openBlock(), createBlock(_component_MdiWhiteBalanceSunny, {
                    key: 1,
                    class: "icon text-primary"
                  }))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/buttons/ToggleDarkButton.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
var __unplugin_components_2$6 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-074b8843"]]);
var Hamburguer_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    opened: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JButton = _sfc_main$I;
      _push(ssrRenderComponent(_component_JButton, mergeProps({
        icon: "",
        style: { "aspect-ratio": "1" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ close: props.opened }, "relative inline-block w-[24px] h-[24px]"])}" data-v-579c50af${_scopeId}><div class="hamburguer" data-v-579c50af${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: [{ close: props.opened }, "relative inline-block w-[24px] h-[24px]"]
              }, [
                createVNode("div", { class: "hamburguer" })
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ui/button/Hamburguer.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
var __unplugin_components_2$5 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-579c50af"]]);
var FeaturedText_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    is: { default: "span" },
    text: null,
    height: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "13c78e4a": unref(height)
    }));
    const { height } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "13c78e4a": unref(height)
      } };
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.is), mergeProps({ class: "featured" }, _attrs, _cssVars), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(props.text)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(props.text), 1)
              ], true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ui/text/FeaturedText.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
var __unplugin_components_1$9 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-7b07f23b"]]);
var NavItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    to: null,
    text: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FeaturedText = __unplugin_components_1$9;
      _push(`<li${ssrRenderAttrs(_attrs)} data-v-09d93d60>`);
      _push(ssrRenderComponent(_component_FeaturedText, { height: 4 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(RouterLink), {
              to: props.to
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.text)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.text), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(RouterLink), {
                to: props.to
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.text), 1)
                ]),
                _: 1
              }, 8, ["to"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
    };
  }
});
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ui/navigation/NavItem.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var __unplugin_components_1$8 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-09d93d60"]]);
var Navigation_vue_vue_type_style_index_0_lang = "";
const _sfc_main$D = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navigation ml-10" }, _attrs))}><ul class="flex items-center space-x-8">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</ul></nav>`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ui/navigation/Navigation.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var __unplugin_components_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$i]]);
const translate = ref(false);
const navOpened = ref(false);
const scroll = useScroll(null);
const isMobile = ref(false);
const showBackdrop = computed(() => isMobile.value && navOpened.value);
const toggle = () => navOpened.value = !navOpened.value;
function useNavigationMenuActions() {
  return {
    toggle,
    showBackdrop
  };
}
function useNavigationMenu(headerRef) {
  const unwatchScrollTop = watchPostEffect(() => {
    if (scroll.directions.top)
      translate.value = false;
  });
  const unwatchScrollBottom = watchPostEffect(() => {
    if (scroll.directions.bottom)
      translate.value = true;
  });
  const unwatchMediaQuery = watchPostEffect(() => {
    if (!isMobile.value)
      navOpened.value = false;
  });
  const unwatchNavOpened = watchEffect(() => {
  });
  function focusActiveLink() {
    headerRef.value.querySelector("ul .router-link-active").focus();
  }
  const unwatchFocusActiveLink = watchPostEffect(() => navOpened.value && focusActiveLink());
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
    isTopReached: computed(() => scroll.arrivedState.top)
  });
}
var Header_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    height: null,
    items: null
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "5cb900a4": unref(height)
    }));
    const { items, height } = toRefs(props);
    const header = ref(null);
    const {
      toggle: toggle2,
      navOpened: navOpened2,
      translate: translate2,
      isMobile: isMobile2,
      isTopReached
    } = toRefs(useNavigationMenu(header));
    const shadowClass = computed(() => isTopReached.value ? "shadow-none" : "shadow-md");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navigation = __unplugin_components_0$4;
      const _component_NavItem = __unplugin_components_1$8;
      const _component_Hamburguer = __unplugin_components_2$5;
      const _cssVars = { style: {
        "5cb900a4": unref(height)
      } };
      _push(`<header${ssrRenderAttrs(mergeProps({
        ref_key: "header",
        ref: header,
        class: [unref(shadowClass), { opened: unref(navOpened2) }],
        style: { transform: unref(navOpened2) ? "translateY(0%)" : unref(translate2) ? "translateY(-100%)" : "translateY(0%)" }
      }, _attrs, _cssVars))} data-v-2cda3eb3><div class="z-30" data-v-2cda3eb3>`);
      ssrRenderSlot(_ctx.$slots, "prepend", {}, null, _push, _parent);
      _push(`</div><div class="spacer-left" data-v-2cda3eb3></div>`);
      _push(ssrRenderComponent(_component_Navigation, {
        class: ["z-20", { mobile: unref(isMobile2), opened: unref(navOpened2) }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "prepend-inner", {}, null, _push2, _parent2, _scopeId);
            _push2(`<!--[-->`);
            ssrRenderList(unref(items), (item, i) => {
              _push2(ssrRenderComponent(_component_NavItem, {
                key: item.name,
                to: item.href,
                text: item.name
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            ssrRenderSlot(_ctx.$slots, "append-inner", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "prepend-inner", {}, void 0, true),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, i) => {
                return openBlock(), createBlock(_component_NavItem, {
                  key: item.name,
                  to: item.href,
                  text: item.name
                }, null, 8, ["to", "text"]);
              }), 128)),
              renderSlot(_ctx.$slots, "append-inner", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div class="ml-8" data-v-2cda3eb3></div><div class="z-20" data-v-2cda3eb3>`);
      ssrRenderSlot(_ctx.$slots, "append", {}, null, _push, _parent);
      _push(`</div>`);
      if (unref(isMobile2)) {
        _push(ssrRenderComponent(_component_Hamburguer, mergeProps({
          "aria-label": "Toggle Navigation visibility",
          opened: unref(navOpened2),
          class: "ml-8 transition z-20"
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ui/navigation/Header.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var __unplugin_components_1$7 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-2cda3eb3"]]);
const _sfc_main$B = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/layout/Container.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var __unplugin_components_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$h]]);
var default_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    useCssVars((_ctx) => ({
      "6fcaa36b": unref(height)
    }));
    const items = [{
      name: "Home",
      href: "/"
    }, {
      name: "About",
      href: "/about"
    }, {
      name: "Blog",
      href: "/blog"
    }];
    const scroll2 = useScroll(null);
    const height = computed(() => `var(${scroll2.arrivedState.top ? "--header-expanded-height" : "--header-default-height"})`);
    const { toggle: toggle2, showBackdrop: showBackdrop2 } = useNavigationMenuActions();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Container = __unplugin_components_0$3;
      const _component_Header = __unplugin_components_1$7;
      const _component_ToggleDarkButton = __unplugin_components_2$6;
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_Backdrop = __unplugin_components_3$3;
      const _component_RouterView = resolveComponent("RouterView");
      const _cssVars = { style: {
        "6fcaa36b": unref(height)
      } };
      _push(ssrRenderComponent(_component_Container, mergeProps({ class: "j-container" }, _attrs, _cssVars), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Header, {
              height: "var(--header-height)",
              items
            }, {
              prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="font-bold text-2xl text-primary dark:text-primary-dark" data-v-089aea35${_scopeId2}>JHR</p>`);
                } else {
                  return [
                    createVNode("p", { class: "font-bold text-2xl text-primary dark:text-primary-dark" }, "JHR")
                  ];
                }
              }),
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ToggleDarkButton, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ToggleDarkButton)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Backdrop, { visible: unref(showBackdrop2) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Backdrop, {
                      onClick: unref(toggle2),
                      visible: unref(showBackdrop2)
                    }, null, 8, ["onClick", "visible"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouterView, null, {
              default: withCtx(({ Component: component, route }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(component), {
                    key: route.path
                  }, null), _parent3, _scopeId2);
                } else {
                  return [
                    (openBlock(), createBlock(resolveDynamicComponent(component), {
                      key: route.path
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Header, {
                height: "var(--header-height)",
                items
              }, {
                prepend: withCtx(() => [
                  createVNode("p", { class: "font-bold text-2xl text-primary dark:text-primary-dark" }, "JHR")
                ]),
                append: withCtx(() => [
                  createVNode(_component_ToggleDarkButton)
                ]),
                _: 1
              }),
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  createVNode(_component_Backdrop, {
                    onClick: unref(toggle2),
                    visible: unref(showBackdrop2)
                  }, null, 8, ["onClick", "visible"])
                ]),
                _: 1
              }),
              createVNode(_component_RouterView, null, {
                default: withCtx(({ Component: component, route }) => [
                  (openBlock(), createBlock(resolveDynamicComponent(component), {
                    key: route.path
                  }))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/default.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var __layout_0 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-089aea35"]]);
const layouts = {
  "default": __layout_0
};
function setupLayouts(routes2) {
  return routes2.map((route) => {
    var _a;
    return {
      path: route.path,
      component: layouts[((_a = route.meta) == null ? void 0 : _a.layout) || "default"],
      children: [__spreadProps(__spreadValues({}, route), { path: "" })]
    };
  });
}
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$z = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(ssrRenderComponent(_component_router_view, _attrs, null, _parent));
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/App.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$g]]);
var Content_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    clipped: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { clipped } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["j-content", { clipped: unref(clipped) }]
      }, _attrs))} data-v-c95158a2>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/layout/Content.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var __unplugin_components_2$4 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-c95158a2"]]);
const _hoisted_1$Q = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$Q = /* @__PURE__ */ createElementVNode("path", {
  d: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$G = [
  _hoisted_2$Q
];
function render$Q(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$Q, _hoisted_3$G);
}
var MdiGithub = { name: "mdi-github", render: render$Q };
const _hoisted_1$P = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$P = /* @__PURE__ */ createElementVNode("path", {
  d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$F = [
  _hoisted_2$P
];
function render$P(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$P, _hoisted_3$F);
}
var __unplugin_components_3$2 = { name: "mdi-linkedin", render: render$P };
const _hoisted_1$O = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$O = /* @__PURE__ */ createElementVNode("path", {
  d: "M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16V4z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$E = [
  _hoisted_2$O
];
function render$O(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$O, _hoisted_3$E);
}
var __unplugin_components_1$6 = { name: "mdi-arrow-down", render: render$O };
const _sfc_main$x = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  const _component_FeaturedText = __unplugin_components_1$9;
  const _component_JButton = _sfc_main$I;
  const _component_MdiArrowDown = __unplugin_components_1$6;
  const _component_MdiLinkedin = __unplugin_components_3$2;
  const _component_MdiGithub = MdiGithub;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-auto max-w-[50ch] lg:max-w-[auto] lg:ml-16 my-10 xl:my-0 xl:min-h-[var(--content-height)] box-border flex flex-col justify-end md:justify-center gap-1" }, _attrs))}><h1 class="text-6xl font-bold uppercase text-primary dark:text-primary-dark">Jose Hermosilla Rodrigo</h1><ol class="mt-4 text-xl font-bold"><li>Software crafter</li><li>Geomatics Engineer (GIS &amp; Cartography)</li><li>Just another human being</li></ol><div class="flex space-x-4 mt-12">`);
  _push(ssrRenderComponent(_component_FeaturedText, {
    is: "div",
    height: 4
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_JButton, {
          component: "a",
          href: "#about-section",
          primary: "",
          cta: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="mr-2"${_scopeId2}>Want to know more?</div>`);
              _push3(ssrRenderComponent(_component_MdiArrowDown, { class: "ml-auto" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode("div", { class: "mr-2" }, "Want to know more?"),
                createVNode(_component_MdiArrowDown, { class: "ml-auto" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_JButton, {
            component: "a",
            href: "#about-section",
            primary: "",
            cta: ""
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "mr-2" }, "Want to know more?"),
              createVNode(_component_MdiArrowDown, { class: "ml-auto" })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_JButton, {
    icon: "",
    is: "a",
    class: "text-2xl"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MdiLinkedin, { class: "text-blue-600 dark:text-primary-dark" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MdiLinkedin, { class: "text-blue-600 dark:text-primary-dark" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_JButton, {
    icon: "",
    is: "a",
    class: "text-2xl"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MdiGithub, { class: "text-gray-800 dark:text-gray-100" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MdiGithub, { class: "text-gray-800 dark:text-gray-100" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/hero/HeroDescription.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var __unplugin_components_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$f]]);
var FaceImage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$w = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "50 0 450.000000 600.000000",
    preserveAspectRatio: "xMidYMid meet"
  }, _attrs))} data-v-393bf3c3><g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)" data-v-393bf3c3><path d="M2825 5874 c-27 -8 -93 -19 -145 -25 -52 -6 -113 -15 -135 -21 -22
-5 -65 -14 -95 -20 -30 -6 -59 -14 -64 -19 -6 -5 -18 -9 -28 -9 -16 0 -143
-54 -191 -81 -10 -5 -37 -19 -60 -30 -23 -11 -51 -26 -62 -32 -11 -6 -33 -18
-50 -27 -59 -31 -81 -50 -109 -95 -19 -29 -38 -47 -55 -51 -14 -3 -35 -7 -47
-9 -11 -3 -26 -15 -33 -29 -8 -13 -35 -36 -62 -51 -27 -14 -60 -41 -74 -59
-13 -17 -51 -60 -84 -94 -34 -35 -73 -90 -91 -127 -17 -36 -36 -67 -41 -71 -5
-3 -20 -27 -33 -53 -14 -26 -32 -53 -40 -60 -9 -8 -16 -21 -16 -31 0 -10 -13
-43 -29 -74 -38 -71 -71 -188 -71 -248 0 -40 -20 -149 -51 -283 -5 -22 -15
-74 -23 -115 -7 -41 -16 -82 -20 -90 -3 -8 -10 -67 -16 -130 -5 -63 -16 -162
-25 -220 -12 -83 -13 -114 -4 -147 15 -55 7 -73 -31 -73 -22 0 -38 9 -57 30
-21 26 -32 30 -72 30 -53 0 -64 -7 -109 -66 -22 -29 -32 -53 -32 -78 0 -20 -9
-59 -21 -88 -30 -79 -34 -188 -8 -295 11 -48 22 -115 25 -147 5 -80 43 -232
69 -281 12 -22 25 -53 29 -70 4 -16 20 -47 37 -67 16 -20 29 -41 29 -45 0 -5
17 -29 38 -54 42 -51 64 -94 83 -158 17 -56 54 -91 95 -91 17 0 36 -6 42 -13
5 -6 13 -75 16 -151 7 -150 22 -273 37 -313 5 -13 9 -43 9 -67 0 -23 5 -47 12
-54 6 -6 15 -30 19 -54 13 -73 73 -255 90 -273 5 -5 9 -22 9 -38 0 -21 5 -28
18 -27 32 4 62 -12 68 -36 7 -27 -1 -44 -22 -44 -17 0 -19 -31 -2 -48 18 -18
25 -15 37 19 16 46 38 36 146 -69 32 -30 55 -35 55 -11 0 12 -76 88 -116 117
-19 13 -34 34 -37 52 -4 16 -25 50 -48 75 -37 40 -41 49 -36 81 5 29 3 35 -9
30 -10 -4 -18 4 -26 22 -6 15 -19 43 -29 63 -12 23 -18 53 -17 84 2 37 -2 50
-17 61 -17 13 -20 27 -21 97 0 51 -7 95 -17 117 -9 21 -20 94 -27 180 -7 80
-18 168 -26 196 -8 28 -17 90 -19 138 -4 71 -2 86 10 86 17 0 17 -6 16 135 -1
61 0 146 0 190 1 44 2 91 1 105 -1 51 20 236 30 268 5 18 12 59 14 90 2 31 8
93 14 137 27 202 30 356 7 318 -8 -13 -37 -159 -37 -186 0 -13 -11 -52 -25
-86 -23 -55 -25 -72 -20 -145 3 -48 0 -96 -6 -116 -10 -32 -14 -98 -22 -375
-9 -294 -20 -430 -39 -468 -10 -20 -24 -37 -31 -37 -20 1 -44 23 -52 50 -4 14
-16 37 -26 52 -11 14 -19 32 -19 38 0 19 -69 130 -107 173 -24 27 -33 47 -33
71 0 19 -5 38 -11 42 -6 3 -8 17 -4 31 4 16 1 31 -9 42 -18 20 -37 88 -43 158
-4 38 -8 50 -18 46 -9 -3 -16 4 -19 19 -30 143 -41 301 -26 361 18 73 25 79
84 75 l51 -3 3 34 c2 23 -3 40 -17 55 -26 28 -44 77 -33 88 13 13 120 -1 137
-18 7 -8 22 -14 33 -14 10 0 33 -7 51 -16 19 -9 36 -13 41 -8 5 5 6 43 2 84
-6 58 -4 85 8 118 9 24 21 44 26 45 10 2 9 39 -1 98 -4 23 -3 39 4 43 6 4 11
27 11 52 0 25 7 58 15 73 9 18 12 42 8 65 -3 20 -1 41 4 48 6 7 16 45 23 83 6
39 16 78 21 88 16 30 39 169 39 235 0 63 5 72 29 50 11 -11 12 -8 7 14 -6 27
5 94 26 153 6 17 10 42 10 57 -1 18 5 29 18 33 12 4 20 15 20 29 0 12 3 26 8
30 4 4 7 20 7 34 0 17 5 27 15 27 8 0 28 27 45 59 19 37 37 61 48 62 28 4 32
12 20 44 -10 27 -9 31 15 42 15 8 28 23 30 36 2 13 19 33 40 46 20 13 62 49
92 80 30 31 61 56 68 56 7 0 17 10 23 23 6 13 33 34 61 47 27 13 57 34 65 46
8 13 28 26 44 29 16 4 32 12 36 18 5 7 26 22 48 34 23 12 39 28 39 38 -1 11 4
14 17 10 14 -5 22 0 29 19 5 15 17 26 28 26 10 0 23 5 29 11 16 16 113 48 146
49 15 0 35 4 45 10 57 32 164 53 321 65 47 3 81 11 92 21 14 12 54 16 214 19
121 2 207 0 223 -6 15 -6 48 -12 74 -13 30 -2 56 -10 68 -21 13 -12 46 -22 87
-27 37 -4 71 -12 76 -17 6 -6 23 -7 38 -4 18 3 29 1 29 -6 0 -6 -4 -11 -10
-11 -5 0 -10 -7 -10 -15 0 -11 11 -15 40 -15 36 0 40 -2 40 -25 0 -20 5 -25
25 -25 14 0 25 5 25 10 0 17 29 11 50 -10 11 -11 34 -23 49 -26 17 -4 31 -14
34 -25 3 -12 14 -19 29 -19 14 0 35 -11 48 -25 13 -14 28 -25 33 -25 19 0 78
-52 104 -91 14 -21 32 -39 39 -39 7 0 20 -13 29 -29 10 -20 24 -31 42 -33 27
-3 39 -18 87 -113 14 -27 30 -57 35 -65 29 -45 41 -84 29 -91 -10 -6 -2 -30
31 -95 31 -62 40 -89 32 -97 -6 -6 -11 -25 -11 -43 0 -37 51 -155 79 -181 36
-34 94 -162 129 -283 19 -67 24 -105 22 -178 -2 -83 1 -96 19 -113 17 -16 19
-27 15 -86 -3 -42 0 -88 8 -118 11 -40 12 -121 6 -400 -4 -192 -11 -366 -16
-385 -4 -19 -4 -71 0 -115 4 -44 10 -105 12 -135 6 -99 5 -97 16 -79 5 9 9 56
9 105 0 203 8 349 22 391 6 21 21 56 31 77 19 38 20 41 3 69 -16 26 -17 46
-10 186 5 86 8 202 7 259 -1 141 -21 397 -32 428 -6 14 -10 40 -10 58 0 19 -6
51 -14 73 -8 22 -16 69 -19 104 -10 108 -70 255 -161 393 -39 58 -66 109 -66
125 0 14 -9 46 -20 70 -11 24 -20 57 -20 75 0 17 -7 44 -15 60 -8 15 -15 33
-15 40 0 6 -21 34 -46 61 -25 28 -54 63 -64 79 -10 15 -38 45 -63 65 -109 88
-313 221 -338 221 -9 0 -31 10 -50 23 -154 103 -190 120 -283 134 -50 7 -109
20 -131 29 -22 9 -74 23 -115 30 -99 18 -387 16 -455 -2z" data-v-393bf3c3></path><path d="M1893 5113 c-20 -7 -15 -23 6 -23 26 0 51 10 51 21 0 9 -36 11 -57 2z" data-v-393bf3c3></path><path d="M2775 5111 c-5 -9 31 -41 47 -41 16 0 7 30 -11 40 -24 12 -28 12 -36
1z" data-v-393bf3c3></path><path d="M1820 5069 c0 -24 -20 -43 -67 -65 -34 -15 -44 -41 -18 -50 16 -7 85
42 85 61 0 6 9 20 20 30 11 10 20 24 20 32 0 7 -9 13 -20 13 -14 0 -20 -7 -20
-21z" data-v-393bf3c3></path><path d="M2970 5021 c0 -12 41 -24 65 -19 33 6 19 23 -22 26 -25 2 -43 -1 -43
-7z" data-v-393bf3c3></path><path d="M2780 5005 c-30 -36 19 -66 139 -84 50 -8 78 -8 85 -1 5 5 7 12 4 15
-7 7 -106 45 -135 52 -12 3 -28 11 -34 19 -15 18 -43 18 -59 -1z" data-v-393bf3c3></path><path d="M3075 4990 c3 -5 15 -10 26 -10 10 0 19 5 19 10 0 6 -12 10 -26 10
-14 0 -23 -4 -19 -10z" data-v-393bf3c3></path><path d="M3350 4980 c0 -5 9 -10 20 -10 11 0 20 5 20 10 0 6 -9 10 -20 10 -11
0 -20 -4 -20 -10z" data-v-393bf3c3></path><path d="M3485 4941 c-51 -5 -60 -9 -60 -26 0 -25 20 -29 102 -20 42 4 66 12
70 21 3 8 4 16 2 18 -10 9 -60 12 -114 7z" data-v-393bf3c3></path><path d="M1652 4898 c-12 -12 -17 -68 -6 -68 12 0 43 45 44 63 0 20 -20 23
-38 5z" data-v-393bf3c3></path><path d="M3634 4896 c-3 -8 7 -36 22 -61 27 -46 28 -47 68 -42 29 4 54 0 85
-13 23 -11 47 -17 52 -14 14 8 11 35 -6 53 -8 9 -27 31 -43 50 -28 33 -31 34
-60 22 -26 -11 -34 -11 -54 3 -28 20 -57 21 -64 2z" data-v-393bf3c3></path><path d="M4230 4881 c0 -19 23 -35 34 -24 14 15 5 43 -14 43 -13 0 -20 -7 -20
-19z" data-v-393bf3c3></path><path d="M4340 4868 c0 -30 15 -52 29 -44 17 11 13 53 -5 60 -23 9 -24 8 -24
-16z" data-v-393bf3c3></path><path d="M1572 4788 c-14 -14 -16 -38 -3 -38 5 0 14 7 21 15 17 20 0 41 -18
23z" data-v-393bf3c3></path><path d="M1777 3430 c-15 -12 -43 -24 -62 -27 -51 -8 -43 -20 20 -28 30 -3 78
-15 107 -24 29 -10 91 -24 138 -31 90 -13 138 -22 210 -40 25 -6 79 -16 120
-21 147 -18 206 -28 249 -43 52 -19 102 -21 119 -4 16 16 15 63 0 76 -7 6 -30
13 -50 17 -21 4 -38 11 -38 15 0 16 -91 60 -154 75 -45 11 -87 13 -129 9 -49
-5 -71 -3 -95 10 -43 22 -61 20 -72 -9 -12 -31 -49 -33 -94 -6 -22 14 -36 17
-46 11 -20 -13 -100 -13 -100 0 0 12 -26 26 -66 34 -23 5 -37 2 -57 -14z" data-v-393bf3c3></path><path d="M1162 3413 c5 -25 28 -28 28 -4 0 12 -6 21 -16 21 -9 0 -14 -7 -12
-17z" data-v-393bf3c3></path><path d="M4794 3365 c-3 -8 1 -24 10 -37 20 -29 20 -71 0 -125 -17 -43 -16
-44 6 -68 22 -23 23 -32 21 -127 -2 -98 -20 -197 -40 -222 -4 -6 -11 -45 -14
-86 -10 -114 -24 -177 -48 -211 -18 -25 -27 -30 -49 -25 -32 6 -40 -6 -40 -62
0 -20 -7 -50 -15 -65 -8 -15 -17 -45 -21 -65 -3 -20 -15 -52 -25 -71 -14 -23
-17 -37 -10 -45 10 -12 6 -118 -5 -175 -4 -19 -7 -22 -14 -11 -11 18 -24 6
-16 -15 3 -9 11 -13 18 -9 8 5 9 0 3 -17 -4 -13 -10 -44 -12 -69 -3 -25 -14
-54 -24 -66 -12 -13 -19 -34 -18 -60 2 -126 -7 -154 -45 -154 -13 0 -26 -6
-29 -14 -7 -18 1 -26 25 -26 22 0 23 -25 3 -60 l-14 -25 -7 33 c-10 51 -29 32
-27 -27 2 -38 -1 -51 -12 -51 -9 0 -16 -16 -21 -45 -6 -43 -27 -61 -37 -32 -2
6 -8 9 -12 4 -5 -4 0 -13 10 -21 26 -19 14 -65 -29 -112 -20 -22 -36 -47 -36
-56 0 -14 -9 -18 -41 -18 -39 0 -41 -2 -35 -24 5 -19 1 -26 -14 -31 -21 -7
-50 -63 -50 -97 0 -26 -26 -33 -54 -14 -27 17 -38 10 -50 -31 -6 -18 -15 -23
-44 -24 -32 0 -34 -1 -14 -9 24 -10 27 -22 12 -51 -14 -25 -37 -24 -45 1 -7
23 -28 26 -44 6 -8 -10 -7 -19 8 -38 12 -15 16 -29 11 -38 -10 -16 -72 -18
-78 -2 -5 15 -32 16 -32 2 0 -5 4 -10 10 -10 15 0 50 -33 50 -47 0 -15 -26
-18 -34 -4 -3 5 -22 11 -41 13 -42 5 -63 -13 -40 -32 12 -10 18 -10 31 1 14
11 15 10 12 -11 -2 -18 -11 -26 -35 -31 -36 -7 -63 -25 -63 -43 0 -19 -87 -96
-109 -96 -11 0 -22 -8 -26 -19 -3 -10 -25 -31 -48 -47 -23 -16 -55 -39 -70
-51 -16 -13 -41 -23 -56 -23 -15 0 -32 -5 -39 -12 -16 -16 -15 -48 1 -48 21 0
101 31 117 45 8 7 26 16 40 20 14 4 34 15 45 26 51 46 63 56 100 79 22 13 63
48 91 77 28 29 57 53 64 53 7 0 22 7 32 16 14 14 20 14 33 4 13 -11 14 -8 10
21 -3 19 -3 28 1 22 6 -15 54 -18 54 -4 0 16 147 156 190 181 61 35 180 159
244 255 80 120 169 320 200 450 10 39 21 84 27 101 5 17 9 47 9 67 0 19 5 48
11 64 12 30 14 50 25 277 6 136 10 155 36 210 15 34 46 86 68 117 23 32 45 78
51 105 5 27 14 67 19 89 5 22 9 66 10 98 0 32 5 68 12 80 22 41 38 181 44 371
l5 189 -28 23 c-33 27 -51 30 -59 9z" data-v-393bf3c3></path><path d="M4159 3324 c-9 -11 -22 -14 -47 -9 -21 4 -38 2 -42 -4 -4 -8 -28 -8
-82 -1 -54 8 -83 8 -104 -1 -16 -6 -59 -15 -95 -20 -85 -11 -114 -24 -139 -66
-10 -18 -26 -33 -34 -33 -9 0 -21 -10 -27 -22 -20 -37 -47 -61 -63 -55 -9 4
-32 0 -53 -8 -26 -9 -31 -14 -17 -14 12 -1 31 -10 44 -21 34 -29 45 -25 76 28
17 30 22 33 51 27 24 -4 40 0 60 14 22 15 53 21 136 26 60 3 132 12 160 20 29
7 95 16 147 19 163 11 284 28 303 44 17 15 21 11 17 -22 -2 -23 48 -76 72 -76
19 0 24 15 8 25 -6 3 -7 17 -4 29 8 32 -13 103 -32 110 -43 16 -174 -2 -174
-24 0 -5 -14 -11 -31 -15 -39 -9 -114 22 -99 40 10 12 4 25 -10 25 -4 0 -13
-7 -21 -16z" data-v-393bf3c3></path><path d="M1005 3260 c20 -22 31 -20 22 5 -4 8 -14 15 -23 15 -16 0 -16 -2 1
-20z" data-v-393bf3c3></path><path d="M2757 3174 c-13 -13 -7 -24 14 -24 11 0 19 5 17 12 -5 14 -22 21 -31
12z" data-v-393bf3c3></path><path d="M1975 3142 c-11 -2 -33 -10 -50 -17 -16 -8 -41 -15 -55 -17 -45 -5
-26 -23 29 -26 34 -2 74 4 114 17 34 12 89 21 126 22 56 1 61 2 31 9 -46 10
-170 18 -195 12z" data-v-393bf3c3></path><path d="M2760 3089 c0 -22 81 -100 99 -97 9 2 17 15 19 31 3 23 0 27 -23 27
-14 0 -42 12 -61 26 -23 18 -34 22 -34 13z" data-v-393bf3c3></path><path d="M2155 3065 c-33 -8 -78 -14 -100 -15 -79 -1 -125 -49 -68 -71 22 -8
36 -6 74 11 72 34 95 25 115 -44 10 -31 60 -57 119 -61 17 -1 45 -5 62 -9 32
-7 33 -6 58 47 34 75 49 89 82 76 15 -5 33 -19 40 -30 8 -10 27 -26 43 -34 15
-8 34 -27 41 -43 7 -17 26 -34 43 -40 51 -20 53 2 5 50 -25 24 -52 55 -62 71
-10 15 -27 27 -38 27 -11 0 -28 9 -38 21 -13 16 -35 23 -101 31 -47 5 -93 14
-102 19 -23 13 -102 10 -173 -6z m61 -70 c-23 -18 -36 -11 -36 19 0 34 11 39
34 16 21 -21 21 -21 2 -35z m138 30 c30 -30 -15 -66 -56 -44 -24 13 -23 24 4
43 28 20 33 20 52 1z" data-v-393bf3c3></path><path d="M1753 3054 c-7 -19 14 -35 41 -32 29 4 30 23 1 36 -33 15 -34 15 -42
-4z" data-v-393bf3c3></path><path d="M1090 3040 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z" data-v-393bf3c3></path><path d="M2640 3015 c0 -8 7 -15 16 -15 14 0 14 3 4 15 -7 8 -14 15 -16 15 -2
0 -4 -7 -4 -15z" data-v-393bf3c3></path><path d="M3405 3006 c-9 -13 -25 -26 -35 -29 -13 -3 -20 -14 -20 -28 0 -12 -6
-30 -13 -38 -24 -30 -38 -91 -40 -177 -2 -71 1 -88 16 -98 9 -7 17 -18 17 -24
0 -24 21 -21 30 4 8 20 7 31 -3 43 -35 42 -49 194 -19 205 6 3 12 12 12 21 0
9 27 42 60 74 33 31 57 60 54 64 -15 15 -44 6 -59 -17z" data-v-393bf3c3></path><path d="M4063 3004 c-4 -11 -9 -12 -19 -3 -9 8 -55 9 -154 4 -131 -7 -144
-10 -171 -33 -27 -22 -28 -26 -15 -41 8 -9 18 -40 22 -69 5 -44 10 -53 30 -58
29 -7 197 4 205 14 3 4 12 27 19 52 7 25 19 50 27 56 14 12 63 7 63 -6 0 -4
23 -19 51 -34 56 -29 105 -33 134 -12 18 13 17 14 -8 30 -15 9 -39 24 -53 34
-15 9 -36 22 -47 29 -19 11 -20 13 -4 19 11 4 25 0 36 -10 10 -9 28 -16 42
-16 13 0 36 -6 51 -14 29 -15 38 -12 38 15 0 31 -53 50 -151 53 -71 3 -92 1
-96 -10z m-177 -70 c15 -22 15 -27 3 -35 -23 -14 -66 -10 -73 7 -9 22 11 54
34 54 11 0 27 -12 36 -26z" data-v-393bf3c3></path><path d="M3638 2984 c-5 -4 -8 -16 -8 -28 0 -14 3 -17 11 -9 6 6 9 19 7 28 -1
9 -6 13 -10 9z" data-v-393bf3c3></path><path d="M3568 2911 c-23 -23 -23 -31 0 -31 10 0 29 11 42 25 l23 25 -24 -1
c-13 0 -32 -8 -41 -18z" data-v-393bf3c3></path><path d="M2461 2851 c-10 -7 -8 -12 10 -25 13 -9 30 -16 37 -16 21 0 82 31 82
41 0 11 -111 11 -129 0z" data-v-393bf3c3></path><path d="M3590 2790 c0 -5 16 -10 36 -10 21 0 33 4 29 10 -3 6 -19 10 -36 10
-16 0 -29 -4 -29 -10z" data-v-393bf3c3></path><path d="M2230 2711 c23 -14 140 -18 127 -5 -3 3 -36 8 -74 10 -42 2 -62 0
-53 -5z" data-v-393bf3c3></path><path d="M3727 2669 c12 -12 62 -26 144 -40 40 -7 63 -7 85 2 27 12 24 13 -50
20 -44 5 -93 13 -109 19 -41 14 -84 13 -70 -1z" data-v-393bf3c3></path><path d="M3360 2528 c0 -36 4 -48 15 -48 19 0 19 18 0 61 l-14 34 -1 -47z" data-v-393bf3c3></path><path d="M4535 2300 c-4 -6 -3 -14 0 -20 9 -15 35 -12 35 4 0 17 -27 29 -35
16z" data-v-393bf3c3></path><path d="M3414 2156 c-7 -28 2 -49 17 -41 12 8 12 52 -1 60 -5 3 -12 -5 -16
-19z" data-v-393bf3c3></path><path d="M2750 2130 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z" data-v-393bf3c3></path><path d="M2546 1945 c-7 -20 4 -75 21 -101 11 -17 129 -84 147 -84 3 0 21 -11
40 -24 20 -13 59 -30 88 -36 64 -15 106 -36 128 -62 12 -15 30 -20 85 -22 99
-3 211 12 254 35 20 10 42 19 50 19 23 0 132 71 178 116 24 24 43 52 43 63 0
29 -11 26 -50 -14 -19 -19 -58 -44 -87 -55 -29 -11 -80 -33 -112 -49 -59 -30
-151 -51 -228 -51 -45 0 -120 28 -160 60 -14 11 -34 20 -43 20 -10 0 -23 6
-29 14 -6 8 -24 16 -39 19 -28 5 -56 15 -150 51 -54 20 -112 73 -112 101 0 20
-16 19 -24 0z" data-v-393bf3c3></path><path d="M4303 1764 c-22 -24 -30 -63 -17 -77 3 -3 21 8 39 26 28 27 31 34 22
54 -13 29 -17 29 -44 -3z" data-v-393bf3c3></path><path d="M1965 1696 c-21 -15 -12 -36 16 -36 12 0 19 7 19 19 0 27 -13 33 -35
17z" data-v-393bf3c3></path><path d="M2307 1593 c-14 -13 -6 -33 13 -33 11 0 20 4 20 9 0 13 -26 32 -33
24z" data-v-393bf3c3></path><path d="M2470 1585 c-21 -25 3 -39 58 -36 22 1 22 2 6 26 -18 28 -45 32 -64
10z" data-v-393bf3c3></path><path d="M3432 1578 c-19 -19 -14 -34 24 -68 38 -33 67 -36 72 -7 2 11 -6 20
-22 27 -14 5 -28 20 -32 35 -7 27 -23 32 -42 13z" data-v-393bf3c3></path><path d="M2191 1544 c-24 -20 -35 -24 -45 -15 -10 9 -17 7 -27 -5 -11 -14 -11
-18 4 -29 9 -7 17 -17 17 -24 0 -7 19 -11 49 -11 28 0 52 -4 56 -10 3 -5 20
-14 38 -19 61 -19 102 -36 142 -60 22 -13 58 -28 80 -32 22 -4 76 -14 120 -22
158 -30 294 -39 575 -39 l286 0 51 26 c28 14 54 30 58 36 3 5 16 10 27 10 11
0 35 9 53 20 17 11 49 22 70 25 35 4 54 12 44 18 -2 1 -18 12 -36 25 -42 29
-74 28 -104 -4 -60 -64 -162 -95 -329 -99 -58 -2 -148 -7 -201 -10 -70 -5
-123 -3 -190 8 -52 9 -152 21 -223 27 -70 7 -143 18 -162 26 -18 8 -45 14 -59
14 -30 0 -105 36 -105 50 0 6 -4 10 -9 10 -4 0 -36 16 -70 37 -40 23 -61 42
-61 55 0 25 -13 23 -49 -8z" data-v-393bf3c3></path><path d="M2814 1559 c-13 -22 12 -30 31 -9 18 19 18 20 -3 20 -11 0 -24 -5
-28 -11z" data-v-393bf3c3></path><path d="M2560 1546 c0 -7 7 -19 15 -26 19 -16 41 1 32 24 -8 20 -47 21 -47 2z" data-v-393bf3c3></path><path d="M3799 1533 c-7 -16 -15 -31 -17 -35 -8 -18 35 -6 63 16 l30 24 -28
11 c-16 6 -30 11 -31 11 -2 0 -9 -12 -17 -27z" data-v-393bf3c3></path><path d="M3142 1527 c-13 -15 -6 -73 9 -83 5 -3 12 3 16 13 4 10 13 23 21 29
20 15 11 48 -14 52 -11 2 -26 -3 -32 -11z" data-v-393bf3c3></path><path d="M2681 1516 c-9 -11 -8 -15 5 -20 19 -7 47 11 38 25 -8 13 -30 11 -43
-5z" data-v-393bf3c3></path><path d="M2800 1480 c0 -5 15 -10 33 -10 24 0 28 3 17 10 -20 13 -50 13 -50 0z" data-v-393bf3c3></path><path d="M2984 1469 c-18 -20 -18 -21 1 -35 28 -21 35 -17 35 15 0 39 -13 46
-36 20z" data-v-393bf3c3></path><path d="M2042 1423 c4 -21 33 -25 33 -3 0 8 -8 16 -18 18 -14 3 -18 -1 -15
-15z" data-v-393bf3c3></path><path d="M1763 1423 c-7 -3 -13 -11 -13 -19 0 -18 34 -18 49 0 9 11 8 15 -6
18 -10 3 -24 3 -30 1z" data-v-393bf3c3></path><path d="M1950 1247 c0 -8 7 -20 15 -27 12 -10 15 -10 15 3 0 8 -7 20 -15 27
-12 10 -15 10 -15 -3z" data-v-393bf3c3></path><path d="M1001 1185 c-24 -14 -74 -57 -110 -94 -94 -98 -116 -109 -266 -141
-55 -12 -99 -29 -191 -72 -33 -15 -64 -28 -68 -28 -8 0 -96 -40 -177 -81 -31
-16 -62 -29 -67 -29 -6 0 -31 -14 -56 -31 -81 -54 -49 -81 40 -34 26 14 53 25
59 25 7 0 18 7 25 15 7 8 19 15 27 15 13 0 45 13 140 56 17 8 41 14 52 14 12
0 41 10 64 21 23 12 98 36 167 54 143 37 195 58 203 80 4 8 13 15 20 15 8 0
20 7 27 15 7 8 18 15 25 15 19 0 40 -59 41 -120 1 -30 5 -78 9 -107 7 -46 5
-52 -14 -62 -27 -15 -26 -20 4 -55 17 -20 25 -41 25 -66 0 -21 7 -43 15 -50 9
-7 13 -21 10 -31 -9 -27 15 -87 37 -92 11 -3 18 -14 18 -31 0 -14 12 -37 26
-51 22 -22 25 -33 21 -61 -4 -25 -2 -34 8 -34 7 0 16 6 18 13 8 18 26 -11 20
-32 -3 -11 8 -27 30 -44 21 -16 38 -39 42 -57 5 -25 11 -30 26 -25 15 5 22 0
30 -25 9 -24 14 -28 25 -19 19 15 31 -16 14 -36 -11 -13 -3 -15 64 -15 51 0
76 4 76 12 0 9 -80 91 -138 140 -36 31 -85 94 -108 141 -14 27 -39 67 -55 90
-16 22 -29 46 -29 54 0 8 -15 58 -34 111 -34 99 -56 236 -56 352 0 78 27 207
50 240 9 14 21 35 24 48 7 20 4 22 -31 22 -22 0 -56 -11 -82 -25z" data-v-393bf3c3></path><path d="M2627 1134 c-14 -15 -6 -25 30 -41 21 -8 48 -24 62 -34 17 -13 40
-19 78 -19 30 0 63 -5 74 -10 10 -6 58 -13 106 -15 96 -5 203 13 279 45 25 11
55 20 67 21 15 1 11 4 -13 11 -24 7 -45 6 -71 -2 -21 -7 -54 -10 -75 -6 -22 4
-106 11 -189 16 -141 9 -270 23 -319 36 -12 3 -25 2 -29 -2z" data-v-393bf3c3></path><path d="M4128 1133 c-11 -3 -18 -14 -18 -29 0 -33 16 -30 35 6 16 30 15 31
-17 23z" data-v-393bf3c3></path><path d="M2120 992 c0 -12 23 -32 37 -32 9 0 8 6 -4 20 -18 21 -33 26 -33 12z" data-v-393bf3c3></path><path d="M1475 979 c-13 -19 54 -132 134 -227 44 -51 86 -99 94 -105 8 -7 18
-20 23 -29 5 -9 43 -52 84 -96 100 -106 203 -220 232 -257 13 -16 33 -39 45
-50 12 -11 47 -49 78 -84 54 -62 110 -111 127 -111 15 0 8 39 -10 57 -31 31
-77 107 -77 128 0 15 -7 20 -28 20 -20 1 -38 13 -62 40 -36 42 -95 109 -131
150 -12 13 -24 27 -25 32 -2 4 -17 16 -34 25 -16 9 -29 24 -27 32 1 8 -13 26
-32 39 -40 27 -96 93 -96 114 0 7 12 18 28 24 25 10 26 11 8 21 -14 8 -26 7
-46 -5 -26 -16 -29 -15 -50 3 -13 11 -27 20 -32 20 -6 0 -8 19 -6 43 3 38 1
42 -19 42 -33 1 -97 79 -89 109 5 19 1 25 -19 30 -14 4 -25 11 -25 16 0 16
-38 32 -45 19z" data-v-393bf3c3></path><path d="M1970 924 c0 -17 22 -14 28 4 2 7 -3 12 -12 12 -9 0 -16 -7 -16 -16z" data-v-393bf3c3></path><path d="M3830 901 c0 -5 -10 -11 -22 -13 -30 -4 -36 -28 -6 -28 13 0 29 -5
36 -12 9 -9 12 -7 12 9 0 12 3 28 6 37 4 11 1 16 -10 16 -9 0 -16 -4 -16 -9z" data-v-393bf3c3></path><path d="M2100 760 c0 -5 9 -10 20 -10 11 0 20 5 20 10 0 6 -9 10 -20 10 -11
0 -20 -4 -20 -10z" data-v-393bf3c3></path><path d="M2236 724 c-10 -26 7 -37 38 -23 32 15 29 33 -6 37 -17 2 -28 -3 -32
-14z" data-v-393bf3c3></path><path d="M3880 586 c-5 -13 -14 -27 -20 -31 -6 -4 -9 -14 -6 -22 8 -19 -77
-181 -120 -232 -19 -21 -34 -43 -34 -47 0 -5 -20 -49 -44 -99 -24 -49 -47
-101 -51 -114 -7 -23 -7 -23 17 -6 22 17 88 114 88 130 0 4 13 24 28 44 65 84
156 245 163 290 4 25 11 61 15 79 5 26 3 32 -10 32 -9 0 -21 -11 -26 -24z" data-v-393bf3c3></path><path d="M2152 568 c3 -7 13 -15 22 -16 12 -3 17 1 14 10 -3 7 -13 15 -22 16
-12 3 -17 -1 -14 -10z" data-v-393bf3c3></path><path d="M2217 513 c-14 -13 -7 -33 11 -33 19 0 42 18 42 32 0 10 -44 11 -53
1z" data-v-393bf3c3></path><path d="M4003 504 c-3 -8 -3 -37 1 -64 8 -60 -22 -224 -66 -355 -5 -16 -13
-42 -18 -57 l-9 -28 55 0 54 0 0 61 c0 52 3 62 20 66 17 4 20 14 20 57 1 65
15 82 74 91 46 7 49 6 44 -12 -4 -16 -1 -19 18 -15 19 3 34 -7 70 -47 36 -40
52 -51 73 -49 18 2 25 -1 23 -11 -3 -16 26 -51 43 -51 7 0 18 -7 25 -15 6 -8
21 -13 33 -12 14 1 22 -5 27 -22 8 -33 47 -43 158 -39 l87 3 -59 28 c-32 16
-86 50 -120 76 -34 26 -119 87 -191 135 -250 168 -276 188 -301 226 -29 44
-52 57 -61 34z" data-v-393bf3c3></path><path d="M2308 448 c9 -9 15 -9 24 0 9 9 7 12 -12 12 -19 0 -21 -3 -12 -12z" data-v-393bf3c3></path><path d="M3090 325 c0 -13 4 -14 23 -4 33 17 33 19 4 19 -18 0 -27 -5 -27 -15z" data-v-393bf3c3></path><path d="M3253 313 c-14 -5 -18 -33 -5 -33 4 0 14 5 22 10 17 11 2 30 -17 23z" data-v-393bf3c3></path></g></svg>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/hero/FaceImage.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var __unplugin_components_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$e], ["__scopeId", "data-v-393bf3c3"]]);
var HeroFace_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$v = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  const _component_FaceImage = __unplugin_components_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "outside clippy group" }, _attrs))} data-v-12794550><div class="clippy inside" data-v-12794550><div class="j-background" data-v-12794550><div class="slide-right !bg-transparent" style="${ssrRenderStyle({ "--grid-row": "2 / span 2", "--grid-col": "2 / span 2" })}" data-v-12794550>`);
  _push(ssrRenderComponent(_component_FaceImage, { class: "image-face group-hover:stroke-transparent group-hover:fill-current" }, null, _parent));
  _push(`</div><div class="j-square j-square--right" style="${ssrRenderStyle({ "--grid-row": "1 / span 3", "--grid-col": "4" })}" data-v-12794550></div><div class="j-square j-square--left" style="${ssrRenderStyle({ "--grid-row": "2 / span 3", "--grid-col": "1" })}" data-v-12794550></div></div></div></div>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/hero/HeroFace.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var __unplugin_components_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$d], ["__scopeId", "data-v-12794550"]]);
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    title: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      if (!!props.title) {
        _push(`<h1 class="text-2xl font-bold uppercase mb-6 text-primary dark:text-primary-dark">${ssrInterpolate(props.title)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</section>`);
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/layout/JSection.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var HeroSection_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$t = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  const _component_JSection = _sfc_main$u;
  const _component_HeroFace = __unplugin_components_1$5;
  const _component_HeroDescription = __unplugin_components_2$3;
  _push(ssrRenderComponent(_component_JSection, mergeProps({ class: "relative grid grid-cols-1 md:grid-cols-2 gap-4" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center justify-center w-auto" data-v-5ccbd6d1${_scopeId}>`);
        _push2(ssrRenderComponent(_component_HeroFace, { class: "nonagon" }, null, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_HeroDescription, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "flex items-center justify-center w-auto" }, [
            createVNode(_component_HeroFace, { class: "nonagon" })
          ]),
          createVNode(_component_HeroDescription)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/hero/HeroSection.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var __unplugin_components_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$c], ["__scopeId", "data-v-5ccbd6d1"]]);
var Page_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$s = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "j-page" }, _attrs))} data-v-82e612b6>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/layout/Page.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-82e612b6"]]);
const __default__$1 = {
  inheritAttrs: false
};
const _sfc_main$r = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  __ssrInlineRender: true,
  props: {
    component: null
  },
  setup(__props) {
    let resolve = null;
    const target = ref(null);
    const rootMargin = "50px";
    const callback = ([{ isIntersecting }]) => isIntersecting && resolve();
    const { stop } = useIntersectionObserver(target, callback, { rootMargin });
    const loaded = ref(false);
    onBeforeUnmount(stop);
    const AsyncComponent = defineAsyncComponent(() => Promise.resolve({ render: () => null }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="${ssrRenderClass({ "min-h-screen": !loaded.value })}"></div>`);
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(AsyncComponent), _ctx.$attrs, null, _parent));
        },
        _: 1
      });
      _push(`<!--]-->`);
    };
  }
}));
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ui/misc/UseIntersectionObserver.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const AboutSection$1 = () => Promise.resolve().then(function() {
      return AboutSection;
    });
    const ExperienceSection$1 = () => Promise.resolve().then(function() {
      return ExperienceSection;
    });
    const SkillsSection$1 = () => Promise.resolve().then(function() {
      return SkillsSection;
    });
    const FooterSection2 = () => Promise.resolve().then(function() {
      return FooterSection$1;
    });
    const StackExchangeSection$1 = () => Promise.resolve().then(function() {
      return StackExchangeSection;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Page = __unplugin_components_0$1;
      const _component_HeroSection = __unplugin_components_1$4;
      const _component_Content = __unplugin_components_2$4;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Page, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HeroSection, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_HeroSection)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Content, {
        id: "about-section",
        clipped: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$r, { component: AboutSection$1 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$r, { component: AboutSection$1 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Content, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$r, { component: ExperienceSection$1 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$r, { component: ExperienceSection$1 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Content, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$r, { component: SkillsSection$1 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$r, { component: SkillsSection$1 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Content, { clipped: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$r, { component: StackExchangeSection$1 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$r, { component: StackExchangeSection$1 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$r, { component: FooterSection2 }, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/index.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const routes$1 = [{ "name": "about", "path": "/about", "component": () => Promise.resolve().then(function() {
  return about$1;
}), "props": true }, { "path": "/blog", "component": () => Promise.resolve().then(function() {
  return blog$1;
}), "children": [{ "name": "blog", "path": "", "component": () => Promise.resolve().then(function() {
  return index$1;
}), "props": true }, { "name": "blog-articles-hello-world", "path": "articles/hello-world", "component": () => Promise.resolve().then(function() {
  return helloWorld;
}), "props": true }], "props": true }, { "name": "index", "path": "/", "component": _sfc_main$q, "props": true }];
var windi = "";
const routes = setupLayouts(routes$1);
const scrollBehavior = (to) => {
  return to.hash ? { el: to.hash } : { top: 0 };
};
const createApp = ViteSSG(App, { routes, scrollBehavior }, async ({ app, router }) => {
  app.use(MotionPlugin);
});
const _sfc_main$p = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  const _component_FeaturedText = __unplugin_components_1$9;
  _push(`<article${ssrRenderAttrs(mergeProps({ class: "text-dark-700 dark:text-light-100 text-xl space-y-4" }, _attrs))}><div><p> I&#39;m 28 years old and I&#39;m from `);
  _push(ssrRenderComponent(_component_FeaturedText, { text: "\u{1F31E} Valencia \u{1F31E}" }, null, _parent));
  _push(`, <span class="font-bold">Spain</span>. </p></div><div><p> I like to write `);
  _push(ssrRenderComponent(_component_FeaturedText, { text: "clean \u{1F6C1}" }, null, _parent));
  _push(` and `);
  _push(ssrRenderComponent(_component_FeaturedText, { text: "testable \u{1F9EA}" }, null, _parent));
  _push(` code for `);
  _push(ssrRenderComponent(_component_FeaturedText, { text: "backend" }, null, _parent));
  _push(` and `);
  _push(ssrRenderComponent(_component_FeaturedText, { text: "frontend" }, null, _parent));
  _push(` applications. <br>I&#39;m a huge fan of `);
  _push(ssrRenderComponent(_component_FeaturedText, { text: "Linux" }, null, _parent));
  _push(` and the `);
  _push(ssrRenderComponent(_component_FeaturedText, { text: "Open source ecosystem" }, null, _parent));
  _push(`. I like to stay tuned with everything related to web development. </p></div><div><p> Apart from all related with software, I&#39;m `);
  _push(ssrRenderComponent(_component_FeaturedText, { text: "just another human being" }, null, _parent));
  _push(` who loves and respect our `);
  _push(ssrRenderComponent(_component_FeaturedText, { text: "planet \u{1F30D}" }, null, _parent));
  _push(` and `);
  _push(ssrRenderComponent(_component_FeaturedText, { text: "nature \u{1F343}" }, null, _parent));
  _push(` and enjoys to take time with family &amp; friends. </p></div></article>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/about/AboutDescription.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var __unplugin_components_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JSection = _sfc_main$u;
      const _component_AboutDescription = __unplugin_components_1$3;
      _push(ssrRenderComponent(_component_JSection, mergeProps({ title: "About me" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AboutDescription, { class: "xl:max-w-[72ch]" }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 xl:grid-cols-2 gap-6"${_scopeId}></div>`);
          } else {
            return [
              createVNode(_component_AboutDescription, { class: "xl:max-w-[72ch]" }),
              createVNode("div", { class: "grid grid-cols-1 xl:grid-cols-2 gap-6" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/about/AboutSection.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var AboutSection = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$o
});
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    title: null
  },
  setup(__props) {
    const props = __props;
    const { title } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "flex flex-col p-4" }, _attrs))}>`);
      if (unref(title)) {
        _push(`<h1>${ssrInterpolate(unref(title))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
      _push(`</article>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ui/card/JCard.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var courses = [
  {
    name: "DDD en TypeScript: Modelado y arquitectura",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FhVKb8kDjSHBqF5NUe3NA?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=be2fa328e8f126fefee76add45fd643b",
    tags: [
      "Arquitectura de software",
      "Domain Driven Design",
      "TypeScript",
      "Backend"
    ]
  },
  {
    name: "Symfony mantenible y escalable",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FkzdYkv2aR5eIrpjKoU1t?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=5cdbefb6a87451d7263ff746b6306cbc",
    tags: [
      "PHP",
      "Symfony",
      "Backend"
    ]
  },
  {
    name: "AWS: Autoescalado de aplicaciones con ALB y ASG",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2Fu6cg28XT2KHSum0tBqUw?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=09dd5c30521f28d7f73239a05933a754",
    tags: [
      "AWS",
      "DevOps"
    ]
  },
  {
    name: "Gesti\xF3n Estado en React",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2F4f6xwJznSBGTw8sJPMhp?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=c88a22693a17c2aad5a8f7f56fcaec87",
    tags: [
      "React",
      "Frontend"
    ]
  },
  {
    name: "Crea una app con VueJS y Jest aplicando TDD",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FCcT5LXgOSPuz9OM1JabA?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=be106eb68c01eb32862c912749a90f9d",
    tags: [
      "VueJS",
      "Jest",
      "Testing",
      "Frontend"
    ]
  },
  {
    name: "Buenas pr\xE1cticas de BDD con Gherkin (Cucumber, Behat\u2026)",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FeVgFgZ6dRnmVSYmmmpHo?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=f416638b007812ba70d04d3349a3d208",
    tags: [
      "Testing"
    ]
  },
  {
    name: "Makefile: El punto de entrada a tus proyectos",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FNXZQ7gKES1u3l8RhLiom?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=2cf84da9d059864a94f7909e3acbc97b",
    tags: [
      "Tooling"
    ]
  },
  {
    name: "Todo sobre los dotfiles",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FD9xbuZ1zThqeGQJ4YjDi?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=59bf4217b0651a831a3d12de4ed94eca",
    tags: [
      "Tooling"
    ]
  },
  {
    name: "Web Performance",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2Fp789fNTURcmS2z3KzwqI?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=ecfde275cc3e5d185c0487b166d292e4",
    tags: [
      "Frontend"
    ]
  },
  {
    name: "Patrones de Dise\xF1o: Creacionales",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FieJbrXdYStGaTmkGb303?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=816dd2e02fa625cc0a218ad4f405e338",
    tags: [
      "Arquitectura de software"
    ]
  },
  {
    name: "De JavaScript a TypeScript",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FcN43RkhRm6cRNVYpeOyw?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=188afe9ec645e55720bfe2d406310f23",
    tags: [
      "JavaScript",
      "TypeScript"
    ]
  },
  {
    name: "Refactoring de Code Smells a Clean Code: Bloaters",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FmXqyXbceTZOlwqwhvOtA?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=28ff2033a1667480db3edf08c9271163",
    tags: [
      "Refactoring",
      "Arquitectura de software"
    ]
  },
  {
    name: "Arquitectura CSS",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FnikpOEMeRdKyE5JNnAMA?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=55235d41e2891ecf33f4d56e1d30f839",
    tags: [
      "Arquitectura de software",
      "Frontend"
    ]
  },
  {
    name: "Refactoring de Code Smells a Clean Code: Change Preventers",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2Fw5RX8gRvQ8SBhSynWnWM?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=7d9fcb6673ab47759702437a2e2d85a1",
    tags: [
      "Refactoring",
      "Arquitectura de software"
    ]
  },
  {
    name: "Vue 3: Novedades aplicadas al mundo real",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FPGJknksQumbDKRXfmYZA?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=4792d4a2854fe80adcb811de780a6f6a",
    tags: [
      "VueJS",
      "Frontend"
    ]
  },
  {
    name: "CSS Grid a fondo",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FmgD8wkTmT4GcjpGW8AQV?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=5bf50ff80902e65aa6dfa0eb897b9f14",
    tags: [
      "Frontend"
    ]
  },
  {
    name: "Comunicaci\xF3n entre microservicios: Event-Driven Architecture",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FQdn7wFncTisi0kSSqVN0?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=7eb03cde0c29dd088e7a2dc3b2976055",
    tags: [
      "Arquitectura de software"
    ]
  },
  {
    name: "JavaScript moderno: Buenas pr\xE1cticas para empezar y refactorizar aplicaciones",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FWYRz335mQsSBkrbQvf0V?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=9264bb47c040d5f4776d521839e4b7b7",
    tags: [
      "JavaScript",
      "Refactoring"
    ]
  },
  {
    name: "Setup Linux para Programar",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FtZflFzQNulXFIsNWudpA?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=9d2e0f7d29554c2206414a29d7d0cb43",
    tags: [
      "Tooling",
      "Linux"
    ]
  },
  {
    name: "ELK+Beats: Centraliza logs con Elastic Stack",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FlKGICZwrTO6ZeHwrkgbb?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=8f8b76525d3400c4147f81ae874d6021",
    tags: [
      "ElasticSearch",
      "Backend"
    ]
  },
  {
    name: "Domain-Driven Design - DDD Aplicado",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FlXCeyUnJTt67QtPWSaoE?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=656bf6b0b6af5acfb71b7fd00e3fe658",
    tags: [
      "Arquitectura de software",
      "Domain Driven Design"
    ]
  },
  {
    name: "DDD en Java",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2F5IBCIg3ZQ9anyFVKpnzV?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=28f8629d490905501bb17a8dae15f55c",
    tags: [
      "Domain Driven Design",
      "Backend",
      "Java"
    ]
  },
  {
    name: "Git: Introducci\xF3n y trabajo en equipo",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FXbb0kCjMSo2sg8EOzJUd?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=c81af60b508203b04efbe5cab80bce09",
    tags: [
      "Git"
    ]
  },
  {
    name: "Testing en frontend",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2Fz8dODWCvSue6pMtK9Kdx?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=2a30536622003c06bfd16f3984d29f3e",
    tags: [
      "Frontend",
      "Testing"
    ]
  },
  {
    name: "Testing: Introducci\xF3n y buenas pr\xE1cticas",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FcZ2BYaGqSPSzNpaDwneU?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=0cfa833a5fa4e69e279e977da317f9e0",
    tags: [
      "Testing",
      "Backend"
    ]
  },
  {
    name: "Principios SOLID aplicados",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FIciUCbZkTC2WlSc5zyya?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=60f2a6d5ee06a80de14ffd3209a469cf",
    tags: [
      "Arquitectura de software"
    ]
  },
  {
    name: "Arquitectura Hexagonal",
    image: "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2FDYWJYE5RMC0bkd8nCp0u?w=500&h=375&fit=crop&width=500&height=375&ixlib=js-1.4.1&s=51961e794e92894f75a09634bfde02c0",
    tags: [
      "Arquitectura de software"
    ]
  }
];
var FeaturedCourses_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JCard = _sfc_main$n;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "courses-list" }, _attrs))} data-v-76bfbcb8><!--[-->`);
      ssrRenderList(unref(courses), (course) => {
        _push(`<li data-v-76bfbcb8>`);
        _push(ssrRenderComponent(_component_JCard, { class: "course-card" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(course.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(course.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/experience/FeaturedCourses.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var __unplugin_components_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-76bfbcb8"]]);
const calculateElementHeight = (element) => {
  const style = window.getComputedStyle(element);
  const reducer = (s, prop) => s + parseInt(style.getPropertyValue(prop));
  const margins = ["margin-top", "margin-bottom"].reduce(reducer, 0);
  return element.clientHeight + margins;
};
const computeBestHeight = async (contentElement, desiredHeight) => {
  var _a;
  await nextTick();
  const el = unref(contentElement);
  let bestHeight = 0;
  for (const element of Array.from((_a = el.children) != null ? _a : [])) {
    bestHeight += calculateElementHeight(element);
    if (bestHeight <= desiredHeight && Math.abs(bestHeight - desiredHeight) < 50 || bestHeight >= desiredHeight && Math.abs(bestHeight - desiredHeight) < 50)
      return bestHeight;
  }
  return desiredHeight;
};
function useResizable(element, desiredHeight) {
  const optimalHeight = ref(desiredHeight);
  const contentHeight = ref(0);
  const opened = ref(false);
  const toggle2 = () => opened.value = !opened.value;
  const height = computed(() => `${opened.value ? contentHeight.value : optimalHeight.value}px`);
  const showArrow = computed(() => optimalHeight.value < contentHeight.value);
  const setContentHeight = async () => {
    var _a;
    await nextTick();
    const el = (_a = unref(element).$el) != null ? _a : unref(element);
    contentHeight.value = el.scrollHeight;
  };
  const setProperties = async () => {
    var _a;
    const el = (_a = unref(element).$el) != null ? _a : unref(element);
    setContentHeight();
    optimalHeight.value = await computeBestHeight(el, desiredHeight);
  };
  const listeners = [
    useEventListener("resize", setProperties)
  ];
  onMounted(setProperties);
  onBeforeUnmount(() => listeners.forEach((unlisten) => unlisten()));
  return {
    height,
    toggle: toggle2,
    opened: readonly(opened),
    showArrow
  };
}
var ExperienceCard_vue_vue_type_style_index_0_scoped_true_lang = "";
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$l = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __ssrInlineRender: true,
  props: {
    title: null,
    place: null,
    description: null,
    duration: null
  },
  setup(__props) {
    const props = __props;
    const container = ref(null);
    const { height, opened, toggle: toggle2, showArrow } = useResizable(container, 150);
    const showMoreText = computed(() => opened.value ? "Show less" : "Show more");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JCard = _sfc_main$n;
      const _component_JButton = _sfc_main$I;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_JCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-sm uppercase" data-v-283610e4${_scopeId}>${ssrInterpolate(props.duration[0])} - ${ssrInterpolate(props.duration[1])}</p><h1 class="font-bold text-xl" data-v-283610e4${_scopeId}>${ssrInterpolate(props.title)}</h1><h2 class="text-lg font-bold text-primary dark:text-primary-dark" data-v-283610e4${_scopeId}>${ssrInterpolate(props.place)}</h2>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(props.description), {
              ref_key: "container",
              ref: container,
              class: "resizable mt-4",
              style: { maxHeight: unref(height) }
            }, null), _parent2, _scopeId);
          } else {
            return [
              createVNode("p", { class: "text-sm uppercase" }, toDisplayString(props.duration[0]) + " - " + toDisplayString(props.duration[1]), 1),
              createVNode("h1", { class: "font-bold text-xl" }, toDisplayString(props.title), 1),
              createVNode("h2", { class: "text-lg font-bold text-primary dark:text-primary-dark" }, toDisplayString(props.place), 1),
              (openBlock(), createBlock(resolveDynamicComponent(props.description), {
                ref_key: "container",
                ref: container,
                class: "resizable mt-4",
                style: { maxHeight: unref(height) }
              }, null, 8, ["style"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(showArrow)) {
        _push(ssrRenderComponent(_component_JButton, mergeProps({
          outline: "",
          class: "ml-4 min-w-30 min-h-10 justify-center"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(showMoreText))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(showMoreText)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
}));
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/experience/ExperienceCard.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var __unplugin_components_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-283610e4"]]);
var JTimelineItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$k = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "timeline-item" }, _attrs))} data-v-33d6fbf5><div class="timeline-icon shadow-sm" data-v-33d6fbf5>`);
  ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ui/timeline/JTimelineItem.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var __unplugin_components_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-33d6fbf5"]]);
const _sfc_main$j = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ui/timeline/JTimeline.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var __unplugin_components_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$i = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_FeaturedText = __unplugin_components_1$9;
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Spatial Data Infrastructures, Cartography, Photogrametry, Image manipulation, Geodesy are some of the subjects of this degree. Despite it&#39;s a earth science degree, I learned a lot of programming:</p><ul class="list-circle list-inside ml-4"><li>Programming languages for mathematics (Wolfram Mathematica, Matlab)</li><li>Scripting for GIS software (Python, PyQGIS, ArcPy)</li><li>Client-Server GIS applications (Openlayers, Leaflet, Java, Geoserver, Tomcat)</li></ul> During this period, I self-taught more about programming. I started learning Android programming by developing a side project that consisted in a `);
  _push(ssrRenderComponent(_component_FeaturedText, {
    text: "cards game",
    is: "a",
    href: "https://github.com/joseahr/la_sardi_android",
    target: "__blank"
  }, null, _parent));
  _push(`. In the last year, I did profesional practices as GIS Software developer in the B\xE9tera council, developing the `);
  _push(ssrRenderComponent(_component_FeaturedText, {
    text: "IDE and Geoportal",
    is: "a",
    href: "https://github.com/joseahr/sig_betera_server",
    target: "__blank"
  }, null, _parent));
  _push(` for this city. <p> My `);
  _push(ssrRenderComponent(_component_FeaturedText, {
    text: "final project",
    is: "a",
    href: "https://github.com/joseahr/informaTorrent-Node.JS",
    target: "__blank"
  }, null, _parent));
  _push(` consisted in a real time web map application using websockets built on top of Nodejs/Express </p></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/experience/descriptions/Degree.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var Degree = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$h = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_FeaturedText = __unplugin_components_1$9;
  _push(`<div${ssrRenderAttrs(_attrs)}> This was a small startup where I was the only one developing the products. I worked in two different products. <ul class="list-circle list-inside ml-4"><li>`);
  _push(ssrRenderComponent(_component_FeaturedText, {
    text: "Healthy Routes",
    is: "a",
    href: "https://greenurbandata.com/en/healthy-routes/",
    target: "__blank"
  }, null, _parent));
  _push(` A Progresive Web Application that shows alternative routes based on environmental indicators such as: `);
  _push(ssrRenderComponent(_component_FeaturedText, { text: "Polution" }, null, _parent));
  _push(`, `);
  _push(ssrRenderComponent(_component_FeaturedText, { text: "Shadows" }, null, _parent));
  _push(`, `);
  _push(ssrRenderComponent(_component_FeaturedText, { text: "Noise" }, null, _parent));
  _push(`, `);
  _push(ssrRenderComponent(_component_FeaturedText, { text: "Green infrastructure" }, null, _parent));
  _push(`, ... <br> Some of the technologies used in this application where PostgreSQL, PgRouting, NodeJS, Express, Sequelize, Open Street Maps, Satelital Imagery, Image processing (Calculate environmental indexes) ... </li><li>`);
  _push(ssrRenderComponent(_component_FeaturedText, {
    text: "Temperature regulator",
    is: "a",
    href: "https://greenurbandata.com/en/saas-temperature-regulator/",
    target: "__blank"
  }, null, _parent));
  _push(` A Progresive Web Application that shows environmental indexes represented in a map with temporal controls. </li></ul></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/experience/descriptions/GreenUrbanData.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var GreenUrbanData = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$g = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_FeaturedText = __unplugin_components_1$9;
  _push(`<div${ssrRenderAttrs(_attrs)}><p>I specialized in GIS Software development. I also learned: 3D visualization and modeling, GNSS positioning and navigation, sensors, ...</p><p>In this master, I did some interesting projects for some subjects:</p><ul class="list-circle list-inside ml-4"><li>`);
  _push(ssrRenderComponent(_component_FeaturedText, {
    text: "ArcPy Awesome Hillshade",
    is: "a",
    href: "https://github.com/joseahr/arcpy-awesome-hillshade",
    target: "__blank"
  }, null, _parent));
  _push(` An ArcPy tool to apply light focus to raster images with the purpose of highlighting hidden zones by shadows. </li><li>`);
  _push(ssrRenderComponent(_component_FeaturedText, {
    text: "Arcpy Awesome Symbolizer",
    is: "a",
    href: "https://github.com/joseahr/arcpy-awesome-symbolizer",
    target: "__blank"
  }, null, _parent));
  _push(` An ArcPy tool to create thematic maps and visualizations. </li><li>`);
  _push(ssrRenderComponent(_component_FeaturedText, {
    text: "Arcpy Awesome Generalizer",
    is: "a",
    href: "https://github.com/joseahr/pyqgis-awesome-linestring-generalizer",
    target: "__blank"
  }, null, _parent));
  _push(` An ArcPy tool to generalize linestring using McMaster and Douglas-Peucker&#39;s algorithms. </li><li>`);
  _push(ssrRenderComponent(_component_FeaturedText, {
    text: "EGM/ETOPO Parser and simplifier",
    is: "a",
    href: "https://github.com/joseahr/py-egm-etopo-parser",
    target: "__blank"
  }, null, _parent));
  _push(` A python script for generating simplified topographic surface and geoid model given data from a global geoid model such as EGM08 and data for orthometric heights such as ETOPO2 model. </li><li>`);
  _push(ssrRenderComponent(_component_FeaturedText, {
    text: "Image Rectification App",
    is: "a",
    href: "https://github.com/joseahr/image-rectification-app",
    target: "__blank"
  }, null, _parent));
  _push(` An electron based desktop application for rectifying images and generate mosaics. </li><li>`);
  _push(ssrRenderComponent(_component_FeaturedText, {
    text: "Updated version of B\xE9tera Geoportal",
    is: "a",
    href: "https://github.com/joseahr/sig-betera",
    target: "__blank"
  }, null, _parent));
  _push(` An updated version of the Geoportal developed previously during the period of practices of the Geomatics degree. This project uses NodeJS, Express, PostgreSQL, Geoserver and Angular 2 as the client framework. </li><li>`);
  _push(ssrRenderComponent(_component_FeaturedText, {
    text: "GNSS and Inertial Systems Project",
    is: "a",
    href: "https://github.com/joseahr/gnss-ins-data",
    target: "__blank"
  }, null, _parent));
  _push(` A command line interface (CLI) tool for merging data from GNSS and inertial sensors. </li></ul></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/experience/descriptions/Master.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var Master = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$f = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}> Prodevelop is a medium size company whose main focus is the portuary sector. I have worked in several internal products, such as: Posidonia Space, Local Space,... My main project in the company, Mia Tracking, was an ad-hoc project for an insurancy comany, that consisted in a web application that tracked realtime fleet positions and status to target incidents. I did a lot of things and used a lot of technologies such as message brokers (Kafka), Dockerization of projects. I also helped the I+D team dockerizing and deploying a machine learning model! </div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/experience/descriptions/Prodevelop.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var Prodevelop = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$4]]);
var experiences = [
  {
    type: "education",
    title: "Degree in Geomatics Engineering and Survey",
    place: "Universitat Polit\xE8cnica de Val\xE8ncia (UPV)",
    description: Degree,
    duration: ["Sep 2011", "Jun 2015"]
  },
  {
    type: "education",
    title: "Master in Geomatics Engineering and Geoinformation",
    place: "Universitat Polit\xE8cnica de Val\xE8ncia (UPV)",
    description: Master,
    duration: ["Sep 2015", "Jun 2019"]
  },
  {
    type: "work",
    title: "Full Stack Developer",
    place: "Green Urban Data SL",
    description: GreenUrbanData,
    duration: ["Jan 2017", "Dec 2018"]
  },
  {
    type: "work",
    title: "Full Stack Developer",
    place: "Prodevelop SL",
    description: Prodevelop,
    duration: ["Dec 2018", "Sep 2021"]
  }
];
const _hoisted_1$N = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$N = /* @__PURE__ */ createElementVNode("path", {
  d: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82 6L12 12.72L5.18 9L12 5.28L18.82 9M17 16l-5 2.72L7 16v-3.73L12 15l5-2.73V16z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$D = [
  _hoisted_2$N
];
function render$N(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$N, _hoisted_3$D);
}
var MdiSchoolOutline = { name: "mdi-school-outline", render: render$N };
const _hoisted_1$M = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$M = /* @__PURE__ */ createElementVNode("path", {
  d: "M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59l.3-.29M20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7v1m.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$C = [
  _hoisted_2$M
];
function render$M(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$M, _hoisted_3$C);
}
var MdiHandshakeOutline = { name: "mdi-handshake-outline", render: render$M };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const computeIcon = (experienceType) => experienceType === "education" ? MdiSchoolOutline : MdiHandshakeOutline;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JSection = _sfc_main$u;
      const _component_JTimeline = __unplugin_components_1$2;
      const _component_JTimelineItem = __unplugin_components_2$2;
      const _component_ExperienceCard = __unplugin_components_3$1;
      const _component_FeaturedCourses = __unplugin_components_4$1;
      _push(ssrRenderComponent(_component_JSection, mergeProps({ title: "Studies & Experience" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_JTimeline, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(experiences), (experience) => {
                    _push3(ssrRenderComponent(_component_JTimelineItem, null, {
                      icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(computeIcon(experience.type)), null, null), _parent4, _scopeId3);
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(computeIcon(experience.type))))
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ExperienceCard, experience, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ExperienceCard, experience, null, 16)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(experiences), (experience) => {
                      return openBlock(), createBlock(_component_JTimelineItem, null, {
                        icon: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(computeIcon(experience.type))))
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_ExperienceCard, experience, null, 16)
                        ]),
                        _: 2
                      }, 1024);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="mt-6 mb-2 text-xl"${_scopeId}>I have also made a lot of courses</p>`);
            _push2(ssrRenderComponent(_component_FeaturedCourses, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_JTimeline, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(experiences), (experience) => {
                    return openBlock(), createBlock(_component_JTimelineItem, null, {
                      icon: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(computeIcon(experience.type))))
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_ExperienceCard, experience, null, 16)
                      ]),
                      _: 2
                    }, 1024);
                  }), 256))
                ]),
                _: 1
              }),
              createVNode("p", { class: "mt-6 mb-2 text-xl" }, "I have also made a lot of courses"),
              createVNode(_component_FeaturedCourses)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/experience/ExperienceSection.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var ExperienceSection = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$e
});
var RotatorRing_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    items: null,
    small: { type: Boolean, default: false },
    delay: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => props.small ? "w-[75%] lg:h-[75%] lg:w-auto" : "w-full lg:h-full lg:w-auto");
    const length = computed(() => props.items.length);
    const elements = ref([]);
    const setElement = (el) => {
      if (el)
        elements.value.push(el);
    };
    const setMotion = (el, index2) => {
      const { variant } = useMotion(el, {
        initial: {
          opacity: 0
        },
        enter: {
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: "100",
            delay: index2 * 200 + props.delay,
            duration: 200,
            onComplete() {
              variant.value = "levitate";
            }
          }
        },
        levitate: {
          opacity: 0,
          transition: {
            type: "spring",
            duration: 2e3,
            async onComplete() {
              variant.value = "enter";
            }
          }
        }
      });
    };
    onMounted(() => {
      elements.value.forEach(setMotion);
    });
    const calculatePosition = (index2) => {
      const degrees = (index2 * (360 / length.value) - 90) * Math.PI / 180;
      return {
        left: `calc(50% + 50% * ${Math.cos(degrees)})`,
        top: `calc(50% + 50% * ${Math.sin(degrees)})`
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]", unref(classes)],
        style: { "aspect-ratio": "1" }
      }, _attrs))} data-v-68a0a000><div class="rotate relative w-full h-full" data-v-68a0a000><!--[-->`);
      ssrRenderList(props.items, (component, index2) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component), {
          class: "element",
          style: __spreadValues({}, calculatePosition(index2)),
          ref_for: true,
          ref: setElement
        }, null), _parent);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/skills/RotatorRing.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var __unplugin_components_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-68a0a000"]]);
const _hoisted_1$L = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$L = /* @__PURE__ */ createElementVNode("path", {
  fill: "#e44f26",
  d: "M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30L5.902 27.201z"
}, null, -1);
const _hoisted_3$B = /* @__PURE__ */ createElementVNode("path", {
  fill: "#f1662a",
  d: "m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"
}, null, -1);
const _hoisted_4$t = /* @__PURE__ */ createElementVNode("path", {
  fill: "#ebebeb",
  d: "M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16v-3.091zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004v-3.216z"
}, null, -1);
const _hoisted_5$h = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  d: "M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83h-7.185zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83h-7.743z"
}, null, -1);
const _hoisted_6$b = [
  _hoisted_2$L,
  _hoisted_3$B,
  _hoisted_4$t,
  _hoisted_5$h
];
function render$L(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$L, _hoisted_6$b);
}
var VscodeIconsFileTypeHtml = { name: "vscode-icons-file-type-html", render: render$L };
const _hoisted_1$K = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$K = /* @__PURE__ */ createStaticVNode('<path fill="#1572b6" d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30L5.902 27.201z"></path><path fill="#33a9dc" d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"></path><path fill="#fff" d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16v-3.091z"></path><path fill="#ebebeb" d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004v-3.216z"></path><path fill="#fff" d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007h-3.101z"></path><path fill="#ebebeb" d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829h7.743zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829H16z"></path>', 6);
const _hoisted_8$7 = [
  _hoisted_2$K
];
function render$K(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$K, _hoisted_8$7);
}
var VscodeIconsFileTypeCss = { name: "vscode-icons-file-type-css", render: render$K };
const _hoisted_1$J = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$J = /* @__PURE__ */ createElementVNode("rect", {
  width: "28",
  height: "28",
  x: "2",
  y: "2",
  fill: "#3178c6",
  rx: "1.312"
}, null, -1);
const _hoisted_3$A = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  "fill-rule": "evenodd",
  d: "M18.245 23.759v3.068a6.492 6.492 0 0 0 1.764.575a11.56 11.56 0 0 0 2.146.192a9.968 9.968 0 0 0 2.088-.211a5.11 5.11 0 0 0 1.735-.7a3.542 3.542 0 0 0 1.181-1.266a4.469 4.469 0 0 0 .186-3.394a3.409 3.409 0 0 0-.717-1.117a5.236 5.236 0 0 0-1.123-.877a12.027 12.027 0 0 0-1.477-.734q-.6-.249-1.08-.484a5.5 5.5 0 0 1-.813-.479a2.089 2.089 0 0 1-.516-.518a1.091 1.091 0 0 1-.181-.618a1.039 1.039 0 0 1 .162-.571a1.4 1.4 0 0 1 .459-.436a2.439 2.439 0 0 1 .726-.283a4.211 4.211 0 0 1 .956-.1a5.942 5.942 0 0 1 .808.058a6.292 6.292 0 0 1 .856.177a5.994 5.994 0 0 1 .836.3a4.657 4.657 0 0 1 .751.422V13.9a7.509 7.509 0 0 0-1.525-.4a12.426 12.426 0 0 0-1.9-.129a8.767 8.767 0 0 0-2.064.235a5.239 5.239 0 0 0-1.716.733a3.655 3.655 0 0 0-1.171 1.271a3.731 3.731 0 0 0-.431 1.845a3.588 3.588 0 0 0 .789 2.34a6 6 0 0 0 2.395 1.639q.63.26 1.175.509a6.458 6.458 0 0 1 .942.517a2.463 2.463 0 0 1 .626.585a1.2 1.2 0 0 1 .23.719a1.1 1.1 0 0 1-.144.552a1.269 1.269 0 0 1-.435.441a2.381 2.381 0 0 1-.726.292a4.377 4.377 0 0 1-1.018.105a5.773 5.773 0 0 1-1.969-.35a5.874 5.874 0 0 1-1.805-1.045Zm-5.154-7.638h4v-2.527H5.938v2.527H9.92v11.254h3.171Z"
}, null, -1);
const _hoisted_4$s = [
  _hoisted_2$J,
  _hoisted_3$A
];
function render$J(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$J, _hoisted_4$s);
}
var VscodeIconsFileTypeTypescriptOfficial = { name: "vscode-icons-file-type-typescript-official", render: render$J };
const _hoisted_1$I = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$I = /* @__PURE__ */ createElementVNode("path", {
  fill: "#f5de19",
  d: "M2 2h28v28H2z"
}, null, -1);
const _hoisted_3$z = /* @__PURE__ */ createElementVNode("path", { d: "M20.809 23.875a2.866 2.866 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 0 1 3.742 2.107L25 18.128A1.789 1.789 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.055 5.055 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z" }, null, -1);
const _hoisted_4$r = [
  _hoisted_2$I,
  _hoisted_3$z
];
function render$I(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$I, _hoisted_4$r);
}
var VscodeIconsFileTypeJsOfficial = { name: "vscode-icons-file-type-js-official", render: render$I };
const _hoisted_1$H = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$H = /* @__PURE__ */ createElementVNode("path", {
  fill: "#41b883",
  d: "M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6l3.22-5.6Z"
}, null, -1);
const _hoisted_3$y = /* @__PURE__ */ createElementVNode("path", {
  fill: "#41b883",
  d: "m2 3.925l14 24.15l14-24.15h-5.6L16 18.415L7.53 3.925Z"
}, null, -1);
const _hoisted_4$q = /* @__PURE__ */ createElementVNode("path", {
  fill: "#35495e",
  d: "M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z"
}, null, -1);
const _hoisted_5$g = [
  _hoisted_2$H,
  _hoisted_3$y,
  _hoisted_4$q
];
function render$H(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$H, _hoisted_5$g);
}
var VscodeIconsFileTypeVue = { name: "vscode-icons-file-type-vue", render: render$H };
const _hoisted_1$G = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$G = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fcc72b",
  d: "m22.86 11.09l-6.55 9.46a.58.58 0 0 1-.28.21a.55.55 0 0 1-.36 0a.56.56 0 0 1-.29-.21a.59.59 0 0 1-.09-.35l.26-5.2l-4.23-.9a.55.55 0 0 1-.24-.12a.5.5 0 0 1-.16-.22a.5.5 0 0 1 0-.27a.46.46 0 0 1 .1-.25l6.54-9.46a.58.58 0 0 1 .29-.22a.53.53 0 0 1 .35 0a.58.58 0 0 1 .29.22a.52.52 0 0 1 .09.34l-.26 5.22l4.23.9a.58.58 0 0 1 .25.12a.69.69 0 0 1 .16.22a.62.62 0 0 1-.06.53Z"
}, null, -1);
const _hoisted_3$x = /* @__PURE__ */ createElementVNode("path", {
  fill: "#729b1b",
  d: "M16 28.49a1.44 1.44 0 0 1-.5-.1a1.3 1.3 0 0 1-.43-.29l-6.19-6.19A1.28 1.28 0 0 1 8.5 21a1.3 1.3 0 0 1 1.32-1.32a1.32 1.32 0 0 1 .94.38L16 25.29l11.43-11.43a1.32 1.32 0 0 1 .94-.38a1.31 1.31 0 0 1 .93.39a1.29 1.29 0 0 1 .39.93a1.34 1.34 0 0 1-.38.93L16.94 28.1a1.42 1.42 0 0 1-.43.29a1.45 1.45 0 0 1-.51.1Z"
}, null, -1);
const _hoisted_4$p = /* @__PURE__ */ createElementVNode("path", {
  fill: "#729b1b",
  "fill-opacity": ".5",
  d: "M16 28.49a1.44 1.44 0 0 0 .5-.1a1.3 1.3 0 0 0 .43-.29l6.19-6.19a1.28 1.28 0 0 0 .38-.91a1.3 1.3 0 0 0-1.32-1.32a1.32 1.32 0 0 0-.94.38L16 25.29L4.57 13.86a1.32 1.32 0 0 0-.94-.38a1.31 1.31 0 0 0-.93.39a1.29 1.29 0 0 0-.39.93a1.34 1.34 0 0 0 .38.93L15.06 28.1a1.42 1.42 0 0 0 .43.29a1.45 1.45 0 0 0 .51.1Z"
}, null, -1);
const _hoisted_5$f = [
  _hoisted_2$G,
  _hoisted_3$x,
  _hoisted_4$p
];
function render$G(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$G, _hoisted_5$f);
}
var VscodeIconsFileTypeVitest = { name: "vscode-icons-file-type-vitest", render: render$G };
const _hoisted_1$F = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$F = /* @__PURE__ */ createElementVNode("path", {
  fill: "#00c58e",
  d: "M10.648 25.734a1.465 1.465 0 0 1-.157-.942H3.847l9.869-17.375l4.159 7.41l1.308-.976l-4.107-7.384A1.752 1.752 0 0 0 13.7 5.56a1.531 1.531 0 0 0-1.343.924l-10 17.593a1.729 1.729 0 0 0-.087 1.656a1.526 1.526 0 0 0 1.456.706H12.1a1.523 1.523 0 0 1-1.456-.7Z"
}, null, -1);
const _hoisted_3$w = /* @__PURE__ */ createElementVNode("path", {
  fill: "#108775",
  d: "M29.636 24.112L21.589 9.823a1.692 1.692 0 0 0-1.351-.907a1.489 1.489 0 0 0-1.308.907l-1.064 1.7v3.3l2.371-4.071l7.951 14.071h-3.025a1.377 1.377 0 0 1-.122.837l-.026.052a1.729 1.729 0 0 1-1.456.732h4.734a1.72 1.72 0 0 0 1.456-.732a1.548 1.548 0 0 0-.122-1.6Z"
}, null, -1);
const _hoisted_4$o = /* @__PURE__ */ createElementVNode("path", {
  fill: "#2f495e",
  d: "m25.233 25.7l.026-.052l.07-.139a1.278 1.278 0 0 0 .061-.7a2.11 2.11 0 0 0-.27-.724l-6.286-10.9l-.95-1.656h-.017l-.959 1.648l-6.277 10.9a2.18 2.18 0 0 0-.244.715a1.438 1.438 0 0 0 .148.942a1.563 1.563 0 0 0 1.482.7h11.708a1.79 1.79 0 0 0 1.508-.741Zm-7.367-10.864L23.62 24.8H12.112Z"
}, null, -1);
const _hoisted_5$e = [
  _hoisted_2$F,
  _hoisted_3$w,
  _hoisted_4$o
];
function render$F(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$F, _hoisted_5$e);
}
var VscodeIconsFileTypeNuxt = { name: "vscode-icons-file-type-nuxt", render: render$F };
const _hoisted_1$E = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$E = ["id"];
const _hoisted_3$v = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0",
  "stop-color": "#93b4e7"
}, null, -1);
const _hoisted_4$n = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".593",
  "stop-color": "#b9d1f8"
}, null, -1);
const _hoisted_5$d = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#9cb6e0"
}, null, -1);
const _hoisted_6$a = [
  _hoisted_3$v,
  _hoisted_4$n,
  _hoisted_5$d
];
const _hoisted_7$6 = ["fill"];
const _hoisted_8$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#6f95db",
  d: "M16 9.133L10 12.6v6.932L16 23l6-3.466V12.6Z"
}, null, -1);
const _hoisted_9$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  "fill-opacity": ".1",
  d: "M16 2L3.869 9.037L16 15.642L28.131 9.08Zm0 14.548L3.869 22.981L16 29.974l12.088-7.037L16 16.548Z"
}, null, -1);
function render$E(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$E, [
    createElementVNode("defs", null, [
      createElementVNode("radialGradient", {
        id: _ctx.idMap["svgIDa"],
        cx: "-236.884",
        cy: "-171.086",
        r: ".006",
        gradientTransform: "matrix(2157.515 0 0 -2491.283 511096.688 -426208.482)",
        gradientUnits: "userSpaceOnUse"
      }, _hoisted_6$a, 8, _hoisted_2$E)
    ]),
    createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["svgIDa"] + ")",
      d: "M16 2.043L3.9 9.032v13.979L16 30l12.106-6.989V9.032Z"
    }, null, 8, _hoisted_7$6),
    _hoisted_8$6,
    _hoisted_9$4
  ]);
}
var VscodeIconsFileTypeWebpack = { name: "vscode-icons-file-type-webpack", render: render$E, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "svgIDa": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$D = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$D = { fill: "none" };
const _hoisted_3$u = ["fill"];
const _hoisted_4$m = ["fill"];
const _hoisted_5$c = ["id"];
const _hoisted_6$9 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#41D1FF" }, null, -1);
const _hoisted_7$5 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#BD34FE"
}, null, -1);
const _hoisted_8$5 = [
  _hoisted_6$9,
  _hoisted_7$5
];
const _hoisted_9$3 = ["id"];
const _hoisted_10$4 = /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#FFEA83" }, null, -1);
const _hoisted_11$4 = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".083",
  "stop-color": "#FFDD35"
}, null, -1);
const _hoisted_12$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#FFA800"
}, null, -1);
const _hoisted_13$2 = [
  _hoisted_10$4,
  _hoisted_11$4,
  _hoisted_12$2
];
function render$D(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$D, [
    createElementVNode("g", _hoisted_2$D, [
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDa"] + ")",
        d: "m29.884 6.146l-13.142 23.5a.714.714 0 0 1-1.244.005L2.096 6.148a.714.714 0 0 1 .746-1.057l13.156 2.352a.714.714 0 0 0 .253 0l12.881-2.348a.714.714 0 0 1 .752 1.05z"
      }, null, 8, _hoisted_3$u),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDb"] + ")",
        d: "M22.264 2.007L12.54 3.912a.357.357 0 0 0-.288.33l-.598 10.104a.357.357 0 0 0 .437.369l2.707-.625a.357.357 0 0 1 .43.42l-.804 3.939a.357.357 0 0 0 .454.413l1.672-.508a.357.357 0 0 1 .454.414l-1.279 6.187c-.08.387.435.598.65.267l.143-.222l7.925-15.815a.357.357 0 0 0-.387-.51l-2.787.537a.357.357 0 0 1-.41-.45l1.818-6.306a.357.357 0 0 0-.412-.45z"
      }, null, 8, _hoisted_4$m),
      createElementVNode("defs", null, [
        createElementVNode("linearGradient", {
          id: _ctx.idMap["svgIDa"],
          x1: "6",
          x2: "235",
          y1: "33",
          y2: "344",
          gradientTransform: "translate(1.34 1.894) scale(.07142)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_8$5, 8, _hoisted_5$c),
        createElementVNode("linearGradient", {
          id: _ctx.idMap["svgIDb"],
          x1: "194.651",
          x2: "236.076",
          y1: "8.818",
          y2: "292.989",
          gradientTransform: "translate(1.34 1.894) scale(.07142)",
          gradientUnits: "userSpaceOnUse"
        }, _hoisted_13$2, 8, _hoisted_9$3)
      ])
    ])
  ]);
}
var VscodeIconsFileTypeVite = { name: "vscode-icons-file-type-vite", render: render$D, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "svgIDa": "uicons-" + __randId(), "svgIDb": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$C = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$C = /* @__PURE__ */ createStaticVNode('<path fill="#4a4a4d" d="M16.075 3.588A12.48 12.48 0 1 1 3.6 16.068a12.473 12.473 0 0 1 12.48-12.48Z"></path><path fill="#fff" d="M16.075 28.775a12.707 12.707 0 1 1 12.707-12.707a12.721 12.721 0 0 1-12.707 12.707Zm0-24.959a12.253 12.253 0 1 0 12.253 12.252A12.267 12.267 0 0 0 16.075 3.815Z"></path><g fill="#fff" opacity=".1"><path d="M29.871 16.613a1.63 1.63 0 0 0 .091-.817a1.139 1.139 0 0 1-.091-.454v-.363c0-.318-.091-.5-.091-.771a9.462 9.462 0 0 0-.318-1.634a13.736 13.736 0 0 0-3.63-6.444a12.823 12.823 0 0 0-3.222-2.36a28.61 28.61 0 0 0-3.267-1.27h-.454v-.092h-.635v-.09h-.862v-.091h-2.633v.091H13.9v.091h-.545V2.5h-.545A19.7 19.7 0 0 0 9.178 4a15.908 15.908 0 0 0-1.816 1.222a21.546 21.546 0 0 0-1.815 1.725a8.31 8.31 0 0 0-1.18 1.633c-.318.545-.635 1.044-.908 1.588c-.091.136-.091.318-.182.5l-.182.363c-.091.272-.136.5-.227.771a9.64 9.64 0 0 0-.454 1.634a14.78 14.78 0 0 0 .363 6.489a14.306 14.306 0 0 0 1.363 3.222a12.059 12.059 0 0 0 2.541 3.177A17.679 17.679 0 0 0 9.9 28.548c1.044.5 2.133.771 3.222 1.18h.545v.091h.862v.091h1.18V30h.635v-.091h1.18v-.091h.862v-.091h.545a35.28 35.28 0 0 0 3.63-1.407a11.514 11.514 0 0 0 3.63-2.814a13.642 13.642 0 0 0 3.267-6.444a1.892 1.892 0 0 0 .091-.272v-.182a1.612 1.612 0 0 0 .091-.454v-.363c0-.136.091-.227.091-.363a1.359 1.359 0 0 0 .14-.815Z"></path><path d="M16.075 3.588A12.48 12.48 0 1 1 3.6 16.068a12.473 12.473 0 0 1 12.48-12.48Z"></path><path d="M16.075 28.775a12.707 12.707 0 1 1 12.707-12.707a12.721 12.721 0 0 1-12.707 12.707Zm0-24.959a12.253 12.253 0 1 0 12.253 12.252A12.267 12.267 0 0 0 16.075 3.815Z"></path></g><path fill="#fff" d="M22.7 21.559a6.555 6.555 0 0 1-2.088 3.222A6.827 6.827 0 0 1 16.8 26.1l-.318-2.088a5.141 5.141 0 0 0 2.314-.726a5.873 5.873 0 0 0 .545-.545l-3.765-12.073h3.131l2.179 9.032l2.314-9.032h3.041L22.7 21.559Zm-10.936-11.3a5.18 5.18 0 0 1 1.951.318a5.865 5.865 0 0 1 1.679 1l-1.27 1.723a4.977 4.977 0 0 0-1.044-.59a2.893 2.893 0 0 0-1.089-.182c-1.543 0-2.314 1.18-2.314 3.585a4.176 4.176 0 0 0 .59 2.587a1.961 1.961 0 0 0 1.724.771a2.662 2.662 0 0 0 1.044-.182a9.3 9.3 0 0 0 1.135-.59l1.271 1.815a5.421 5.421 0 0 1-3.585 1.271a5.616 5.616 0 0 1-2.814-.681a4.568 4.568 0 0 1-1.815-2a6.987 6.987 0 0 1-.635-3.041a7.133 7.133 0 0 1 .635-3.041a4.807 4.807 0 0 1 1.814-2.082a5.756 5.756 0 0 1 2.723-.681Z"></path>', 4);
const _hoisted_6$8 = [
  _hoisted_2$C
];
function render$C(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$C, _hoisted_6$8);
}
var VscodeIconsFileTypeCypress = { name: "vscode-icons-file-type-cypress", render: render$C };
const _hoisted_1$B = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$B = /* @__PURE__ */ createElementVNode("path", {
  fill: "#c63d14",
  d: "M27.089 15.786a2.606 2.606 0 0 0-2.606-2.606a2.633 2.633 0 0 0-.274.014l3.58-10.558H12.576l3.575 10.549c-.052 0-.105-.005-.158-.005a2.606 2.606 0 0 0-.791 5.09a11.383 11.383 0 0 1-2.049 2.579A10.436 10.436 0 0 1 9.5 23.116a3.323 3.323 0 0 1-1.665-4.23c.077-.18.155-.362.229-.544a2.607 2.607 0 1 0-2.09-.4a20.134 20.134 0 0 0-1.889 4.787c-.354 2.135 0 4.4 1.845 5.681c4.3 2.981 8.969-1.848 13.891-3.061c1.784-.44 3.742-.369 5.313-1.279a4.45 4.45 0 0 0 2.179-3.088a4.639 4.639 0 0 0-.831-3.522a2.6 2.6 0 0 0 .606-1.671ZM18.6 15.8v-.009a2.6 2.6 0 0 0-1.256-2.23L20.188 7.8l2.85 5.814a2.6 2.6 0 0 0-1.161 2.169v.057L18.6 15.8Z"
}, null, -1);
const _hoisted_3$t = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  d: "M27.726 15.786a3.247 3.247 0 0 0-2.643-3.186L28.677 2H11.689l3.6 10.621a3.241 3.241 0 0 0-1 5.918a10.865 10.865 0 0 1-1.568 1.846a9.827 9.827 0 0 1-3.16 2.03a2.656 2.656 0 0 1-1.134-3.28l.04-.093l.074-.175a3.245 3.245 0 1 0-3.34-.754c-.108.231-.222.465-.339.706a14 14 0 0 0-1.4 3.8c-.465 2.8.285 5.043 2.111 6.308A5.751 5.751 0 0 0 8.934 30c2.132 0 4.289-1.071 6.4-2.119a23.672 23.672 0 0 1 4.642-1.918c.577-.142 1.171-.228 1.8-.319a9.977 9.977 0 0 0 3.68-1.028a5.09 5.09 0 0 0 2.487-3.53a5.255 5.255 0 0 0-.691-3.613a3.223 3.223 0 0 0 .475-1.688Zm-1.273 0a1.97 1.97 0 1 1-1.97-1.97a1.972 1.972 0 0 1 1.97 1.97ZM26.9 3.273l-3.174 9.36a3.2 3.2 0 0 0-.4.125l-3.135-6.4l-3.145 6.362a3.2 3.2 0 0 0-.419-.114l-3.163-9.333ZM15.993 13.816a1.97 1.97 0 1 1-1.97 1.97a1.972 1.972 0 0 1 1.97-1.97Zm-8.522.019A1.97 1.97 0 1 1 5.5 15.8a1.972 1.972 0 0 1 1.97-1.97Zm19.217 7.034a3.82 3.82 0 0 1-1.871 2.646a8.9 8.9 0 0 1-3.223.869c-.632.091-1.285.185-1.924.343a24.587 24.587 0 0 0-4.9 2.013c-3.164 1.571-5.9 2.928-8.472 1.143c-1.887-1.308-1.8-3.728-1.58-5.054A12.82 12.82 0 0 1 6 19.376l.27-.559a3.215 3.215 0 0 0 .838.21a3.965 3.965 0 0 0 2.1 4.655l.245.126l.259-.092a11.029 11.029 0 0 0 3.875-2.4a12.078 12.078 0 0 0 1.918-2.319a3.241 3.241 0 0 0 2.64-5.627l2.038-4.121l2.059 4.2a3.24 3.24 0 0 0 4.088 5a3.957 3.957 0 0 1 .355 2.422Z"
}, null, -1);
const _hoisted_4$l = [
  _hoisted_2$B,
  _hoisted_3$t
];
function render$B(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$B, _hoisted_4$l);
}
var VscodeIconsFileTypeJest = { name: "vscode-icons-file-type-jest", render: render$B };
const _hoisted_1$A = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$A = /* @__PURE__ */ createStaticVNode('<path fill="#304ffe" d="M3 24.967c2.25 0 2.25-1.485 4.5-1.485s2.25 1.485 4.5 1.485s2.25-1.485 4.5-1.485s2.251 1.485 4.5 1.485s2.25-1.485 4.5-1.485c2.132 0 2.239 1.332 4.147 1.474A14.264 14.264 0 0 0 19.094 7.885A14 14 0 0 0 2.347 18.632a14.606 14.606 0 0 0-.011 6.281a4.8 4.8 0 0 0 .675.054Z"></path><path fill="#ffd54f" d="M14.626 9.316h3.643v3.44h-3.643Z"></path><path fill="#fff176" d="M14.626 9.316h1.286v3.44h-1.286Z"></path><ellipse cx="15.88" cy="10.167" fill="#fff176" rx=".857" ry="1.092"></ellipse><path fill="#f4511e" d="M14.541 8.922a1.886 1.886 0 1 1 3.771 0"></path><path fill="#f4511e" d="M14.412 8.857h4.007a.251.251 0 0 1 0 .5h-4.007a.244.244 0 0 1-.246-.251a.251.251 0 0 1 .246-.249Z"></path><path fill="#c5cae9" d="m14.1 23.351l.525-10.628h3.643l.472 10.1Z"></path><path fill="none" d="m18.323 13.542l.139 2.818"></path><path fill="#ff7043" d="m14.487 15.367l-.139 2.949l4.114-1.956l-.139-2.818Z"></path><path fill="none" d="m18.6 19.124l.139 2.818"></path><path fill="#ff7043" d="m14.2 21.221l-.15 2.949l4.693-2.228l-.143-2.818Z"></path><path fill="#e64a19" d="M14.069 11.161h4.7v1.573h-4.7Z"></path><path fill="#f4511e" d="M14.069 11.161h3.086v1.573h-3.086Z"></path><path fill="#2979ff" d="M22.352 10.725a.925.925 0 0 1 .353.076a1.484 1.484 0 0 1 2.872-.393a1.016 1.016 0 0 1 0 2.031h-3.225a.85.85 0 0 1-.847-.863a.84.84 0 0 1 .847-.851Z"></path><path fill="#448aff" d="M12.762 18.938a.706.706 0 0 1 .3.066a1.253 1.253 0 0 1 2.432-.339a.864.864 0 0 1 .086 1.726h-2.807a.717.717 0 0 1-.686-.754a.7.7 0 0 1 .675-.7Z"></path><circle cx="19.769" cy="9.042" r=".15" fill="#fdd835"></circle><circle cx="4.576" cy="21.363" r=".15" fill="#fdd835"></circle><circle cx="5.979" cy="18.239" r=".15" fill="#fdd835"></circle><circle cx="6.922" cy="17.431" r=".15" fill="#fdd835"></circle><circle cx="10.897" cy="13.816" r=".15" fill="#fdd835"></circle><circle cx="23.466" cy="14.252" r=".15" fill="#fdd835"></circle><circle cx="29.434" cy="20.718" r=".15" fill="#fdd835"></circle><circle cx="8.379" cy="13.346" r=".15" fill="#fdd835"></circle><circle cx="21.795" cy="20.784" r=".15" fill="#fdd835"></circle><circle cx="26.391" cy="16.907" r=".15" fill="#fdd835"></circle><path fill="#ffe082" d="M14.691 9.261S7.565 8.245 7.544 8.245a15.735 15.735 0 0 0-4.715 4.806l11.851-1.769Z" opacity=".5"></path><path fill="#00c853" d="M12.033 25c2.25 0 2.25-1.485 4.5-1.485S18.784 25 21.034 25c1.907 0 2.2-1.07 3.621-1.4a17.155 17.155 0 0 0-8.068-1.769a17.2 17.2 0 0 0-8.111 1.791c1.371.34 1.671 1.378 3.557 1.378Z"></path><path fill="#64dd17" d="M12.044 24.978c2.25 0 2.25-1.485 4.5-1.485h.043l-.021-1.639A17.2 17.2 0 0 0 8.529 23.6c1.34.351 1.651 1.378 3.515 1.378Z"></path>', 28);
const _hoisted_30$1 = [
  _hoisted_2$A
];
function render$A(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$A, _hoisted_30$1);
}
var VscodeIconsFileTypeLighthouse = { name: "vscode-icons-file-type-lighthouse", render: render$A };
const _hoisted_1$z = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$z = /* @__PURE__ */ createElementVNode("path", {
  fill: "#d2d2d2",
  d: "m20.3 16.5l-3.9 3.9l-4-3.9l1.1-1.1l2.1 2.1v-5.7h1.5v5.8l2.1-2.1Zm-16.8-.8l2.7 2.7L9 15.7v4.4h1.5V12l-4.3 4.3L2 12v8.1h1.5Z"
}, null, -1);
const _hoisted_3$s = /* @__PURE__ */ createElementVNode("path", {
  fill: "#f9ac00",
  d: "m28.8 20l-3.1-3.1l-3.1 3.1l-1-1.1l3.1-3.1l-3.2-3.2l1.1-1l3.1 3.2l3.2-3.2l1.1 1l-3.2 3.2l3.1 3.1Z"
}, null, -1);
const _hoisted_4$k = [
  _hoisted_2$z,
  _hoisted_3$s
];
function render$z(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$z, _hoisted_4$k);
}
var VscodeIconsFileTypeMdx = { name: "vscode-icons-file-type-mdx", render: render$z };
const _hoisted_1$y = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$y = ["id"];
const _hoisted_3$r = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".08",
  "stop-color": "#54c8f1"
}, null, -1);
const _hoisted_4$j = /* @__PURE__ */ createElementVNode("stop", {
  offset: ".57",
  "stop-color": "#41a2ef"
}, null, -1);
const _hoisted_5$b = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#3386ee"
}, null, -1);
const _hoisted_6$7 = [
  _hoisted_3$r,
  _hoisted_4$j,
  _hoisted_5$b
];
const _hoisted_7$4 = ["id"];
const _hoisted_8$4 = ["id"];
const _hoisted_9$2 = ["id"];
const _hoisted_10$3 = ["fill"];
const _hoisted_11$3 = ["fill"];
const _hoisted_12$1 = ["fill"];
const _hoisted_13$1 = ["fill"];
function render$y(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$y, [
    createElementVNode("defs", null, [
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDa"],
        x1: "6.61",
        x2: "22.87",
        y1: "28.32",
        y2: "2.68",
        gradientTransform: "matrix(1 0 0 -1 0 31.89)",
        gradientUnits: "userSpaceOnUse"
      }, _hoisted_6$7, 8, _hoisted_2$y),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDb"],
        x1: "4.13",
        x2: "20.39",
        y1: "26.75",
        y2: "1.11",
        href: "#svgIDa"
      }, null, 8, _hoisted_7$4),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDc"],
        x1: "8.72",
        x2: "24.97",
        y1: "29.65",
        y2: "4.01",
        href: "#svgIDa"
      }, null, 8, _hoisted_8$4),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDd"],
        x1: "-2.71",
        x2: "13.54",
        y1: "22.41",
        y2: "-3.23",
        href: "#svgIDa"
      }, null, 8, _hoisted_9$2)
    ]),
    createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["svgIDa"] + ")",
      d: "M16.58 6.91A4.93 4.93 0 0 0 11.66 2a4.35 4.35 0 0 0-4.58 4.21H9.9a1.58 1.58 0 0 1 1.76-1.41a2.12 2.12 0 0 1 2.11 2.11c0 1.17-.85 2.12-3 2.12H3.11v2.81h7.66c3.62 0 5.81-2.21 5.81-4.93Zm0 0A4.93 4.93 0 0 0 11.66 2a4.35 4.35 0 0 0-4.58 4.21H9.9a1.58 1.58 0 0 1 1.76-1.41a2.12 2.12 0 0 1 2.11 2.11c0 1.17-.85 2.12-3 2.12H3.11v2.81h7.66c3.62 0 5.81-2.21 5.81-4.93Z"
    }, null, 8, _hoisted_10$3),
    createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["svgIDb"] + ")",
      d: "M22.83 25.09A4.93 4.93 0 0 1 17.9 30a4.35 4.35 0 0 1-4.57-4.22h2.81a1.59 1.59 0 0 0 1.76 1.42a2.11 2.11 0 0 0 2.1-2.11c0-1.17-1.06-2.09-3-2.09H8.51v-2.84H17c3.64 0 5.83 2.21 5.83 4.93Zm0 0A4.93 4.93 0 0 1 17.9 30a4.35 4.35 0 0 1-4.57-4.22h2.81a1.59 1.59 0 0 0 1.76 1.42a2.11 2.11 0 0 0 2.1-2.11c0-1.17-1.06-2.09-3-2.09H8.51v-2.84H17c3.64 0 5.83 2.21 5.83 4.93Z"
    }, null, 8, _hoisted_11$3),
    createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["svgIDc"] + ")",
      d: "M23.57 6.33a5.22 5.22 0 0 0-5.3 5.47h2.49a2.62 2.62 0 0 1 2.81-2.67a2.39 2.39 0 0 1 2.52 2.67c0 1.54-1.09 2.81-4.06 2.81H3.11v2.82h19.34c4.4 0 6.44-2.83 6.44-5.63a5.17 5.17 0 0 0-5.32-5.47Z"
    }, null, 8, _hoisted_12$1),
    createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["svgIDd"] + ")",
      d: "M6.8 20.16H3.11V23H6.8Z"
    }, null, 8, _hoisted_13$1)
  ]);
}
var VscodeIconsFileTypeWindi = { name: "vscode-icons-file-type-windi", render: render$y, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "svgIDa": "uicons-" + __randId(), "svgIDb": "uicons-" + __randId(), "svgIDc": "uicons-" + __randId(), "svgIDd": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$x = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$x = /* @__PURE__ */ createElementVNode("path", {
  fill: "#44a8b3",
  d: "M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"
}, null, -1);
const _hoisted_3$q = [
  _hoisted_2$x
];
function render$x(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$x, _hoisted_3$q);
}
var VscodeIconsFileTypeTailwind = { name: "vscode-icons-file-type-tailwind", render: render$x };
const _hoisted_1$w = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$w = /* @__PURE__ */ createElementVNode("path", {
  fill: "#4b32c3",
  d: "m29.832 16.7l-6.354 10.717A1.256 1.256 0 0 1 22.36 28H9.647a1.262 1.262 0 0 1-1.118-.59l-6.356-10.7a1.256 1.256 0 0 1 0-1.272L8.527 4.676A1.344 1.344 0 0 1 9.647 4h12.709a1.344 1.344 0 0 1 1.118.678l6.354 10.786a1.2 1.2 0 0 1 0 1.238Zm-5.262 4.2v-9.614L16 6.466l-8.56 4.82V20.9L16 25.719Z"
}, null, -1);
const _hoisted_3$p = /* @__PURE__ */ createElementVNode("path", {
  fill: "#8080f2",
  d: "m21.802 19.188l-5.747 3.235l-5.742-3.235v-6.47l5.742-3.236l5.747 3.236v6.47z"
}, null, -1);
const _hoisted_4$i = [
  _hoisted_2$w,
  _hoisted_3$p
];
function render$w(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$w, _hoisted_4$i);
}
var VscodeIconsFileTypeEslint = { name: "vscode-icons-file-type-eslint", render: render$w };
const _hoisted_1$v = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$v = /* @__PURE__ */ createStaticVNode('<path fill="#56b3b4" d="M21.714 8.571h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-1.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z"></path><path fill="#ea5e5e" d="M4.571 26.857h5.714a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571a.571.571 0 0 1-.571-.57a.571.571 0 0 1 .571-.572Z"></path><path fill="#bf85bf" d="M18.286 17.714h3.429a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-3.429a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z"></path><path fill="#ea5e5e" d="M11.429 17.714H16a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-4.571a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z"></path><path fill="#56b3b4" d="M4.571 17.714h4.572a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571a.571.571 0 0 1-.571-.57a.571.571 0 0 1 .571-.572Z"></path><path fill="#bf85bf" d="M4.571 22.286h5.714a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 22.857a.571.571 0 0 1 .571-.571Zm0-9.143h5.714a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 13.714a.571.571 0 0 1 .571-.571Z"></path><path fill="#f7ba3e" d="M10.286 6.286h11.428a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H10.286a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z"></path><path fill="#ea5e5e" d="M4.571 6.286H8a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.572H4.571A.571.571 0 0 1 4 6.857a.571.571 0 0 1 .571-.571Z"></path><path fill="#f7ba3e" d="M9.143 24.571h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H9.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z"></path><path fill="#56b3b4" d="M9.143 10.857h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H9.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571ZM4.571 24.571h2.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571a.571.571 0 0 1-.571-.57a.571.571 0 0 1 .571-.572Z"></path><path fill="#f7ba3e" d="M4.571 10.857h2.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.572H4.571A.571.571 0 0 1 4 11.429a.571.571 0 0 1 .571-.572Z"></path><path fill="#4d616e" d="M19.429 24.571h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-1.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm-6.858 0h4.571a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-4.571a.571.571 0 0 1-.571-.57a.571.571 0 0 1 .571-.572Zm10.286 0h4.571a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-4.571a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z" opacity=".5"></path><path fill="#56b3b4" d="M13.714 15.429h9.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-9.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z"></path><path fill="#f7ba3e" d="M8 15.429h3.429A.571.571 0 0 1 12 16a.571.571 0 0 1-.571.571H8A.571.571 0 0 1 7.429 16A.571.571 0 0 1 8 15.429Z"></path><path fill="#ea5e5e" d="M4.571 15.429h1.143a.571.571 0 0 1 .572.571a.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 16a.571.571 0 0 1 .571-.571Z"></path><path fill="#bf85bf" d="M14.857 8.571h4.571a.571.571 0 0 1 .572.572a.571.571 0 0 1-.571.571h-4.572a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.572Z"></path><path fill="#56b3b4" d="M4.571 8.571h8a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-8A.571.571 0 0 1 4 9.143a.571.571 0 0 1 .571-.572Z"></path><path fill="#f7ba3e" d="M8 20h10.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H8a.571.571 0 0 1-.571-.571A.571.571 0 0 1 8 20Z"></path><path fill="#bf85bf" d="M4.571 20h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 20.571A.571.571 0 0 1 4.571 20Z"></path><path fill="#ea5e5e" d="M18.286 10.857H24a.571.571 0 0 1 .571.571A.571.571 0 0 1 24 12h-5.714a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.572Z"></path><path fill="#f7ba3e" d="M18.286 13.143H24a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-5.714a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z"></path><path fill="#56b3b4" d="M4.571 4h13.715a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 4.571A.571.571 0 0 1 4.571 4Z"></path><path fill="#4d616e" d="M20.571 4h6.857a.571.571 0 0 1 .572.571a.571.571 0 0 1-.571.571h-6.858A.571.571 0 0 1 20 4.571A.571.571 0 0 1 20.571 4Zm0 16h2.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm4.572 0h2.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571ZM24 17.714h3.429a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H24a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm0-11.428h3.429a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H24a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm1.143 9.143h2.286A.571.571 0 0 1 28 16a.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.572-.571a.571.571 0 0 1 .572-.571Zm0-6.858h2.286a.571.571 0 0 1 .571.572a.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.572Zm1.143 2.286h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-1.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm0 2.286h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-1.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm-9.143 9.143h10.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H17.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm-4.572 0h2.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm9.143 4.571h5.714a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-5.714a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm-9.143 0h6.857a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-6.857a.571.571 0 0 1-.571-.57a.571.571 0 0 1 .571-.572Zm0-16H16a.571.571 0 0 1 .571.571A.571.571 0 0 1 16 12h-3.429a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.572Zm0 2.286H16a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-3.429a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z" opacity=".5"></path>', 23);
const _hoisted_25$1 = [
  _hoisted_2$v
];
function render$v(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$v, _hoisted_25$1);
}
var VscodeIconsFileTypePrettier = { name: "vscode-icons-file-type-prettier", render: render$v };
const _hoisted_1$u = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$u = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  d: "m20.735 5.442l.133-3.173l2.72-.168l.122 3.23a.216.216 0 0 1-.047.143a.21.21 0 0 1-.3.029l-1.05-.82l-1.243.934a.212.212 0 0 1-.3-.04a.206.206 0 0 1-.035-.135Z"
}, null, -1);
const _hoisted_3$o = /* @__PURE__ */ createElementVNode("path", {
  fill: "#ff4785",
  d: "m20.868 2.268l-.133 3.174a.206.206 0 0 0 .043.135a.212.212 0 0 0 .3.04l1.243-.934l1.05.82a.21.21 0 0 0 .3-.029a.216.216 0 0 0 .047-.143l-.13-3.231l1.566-.1a1.415 1.415 0 0 1 1.506 1.321v25.271A1.414 1.414 0 0 1 25.245 30h-.066l-18.948-.844A1.414 1.414 0 0 1 4.876 27.8L4 4.69a1.412 1.412 0 0 1 1.33-1.458l15.537-.963Z"
}, null, -1);
const _hoisted_4$h = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  d: "M17.253 12.554c0 .547 3.72.285 4.22-.1c0-3.73-2.018-5.69-5.714-5.69s-5.766 1.99-5.766 4.976c0 5.2 7.077 5.3 7.077 8.136a1.127 1.127 0 0 1-1.258 1.27c-1.127 0-1.573-.572-1.52-2.512c0-.421-4.3-.553-4.43 0c-.334 4.7 2.621 6.06 6 6.06c3.276 0 5.845-1.733 5.845-4.868c0-5.573-7.182-5.423-7.182-8.185a1.18 1.18 0 0 1 1.337-1.269c.526 0 1.47.092 1.391 2.182Z"
}, null, -1);
const _hoisted_5$a = [
  _hoisted_2$u,
  _hoisted_3$o,
  _hoisted_4$h
];
function render$u(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$u, _hoisted_5$a);
}
var VscodeIconsFileTypeStorybook = { name: "vscode-icons-file-type-storybook", render: render$u };
const _hoisted_1$t = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$t = /* @__PURE__ */ createElementVNode("path", {
  fill: "#ff3e00",
  d: "M26.47 5.7a8.973 8.973 0 0 0-11.793-2.454L7.96 7.4a7.461 7.461 0 0 0-3.481 5.009a7.686 7.686 0 0 0 .8 5.058a7.358 7.358 0 0 0-1.151 2.8a7.789 7.789 0 0 0 1.4 6.028a8.977 8.977 0 0 0 11.794 2.458L24.04 24.6a7.468 7.468 0 0 0 3.481-5.009a7.673 7.673 0 0 0-.8-5.062a7.348 7.348 0 0 0 1.152-2.8A7.785 7.785 0 0 0 26.47 5.7"
}, null, -1);
const _hoisted_3$n = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  d: "M14.022 26.64A5.413 5.413 0 0 1 8.3 24.581a4.678 4.678 0 0 1-.848-3.625a4.307 4.307 0 0 1 .159-.61l.127-.375l.344.238a8.76 8.76 0 0 0 2.628 1.274l.245.073l-.025.237a1.441 1.441 0 0 0 .271.968a1.63 1.63 0 0 0 1.743.636a1.512 1.512 0 0 0 .411-.175l6.7-4.154a1.366 1.366 0 0 0 .633-.909a1.407 1.407 0 0 0-.244-1.091a1.634 1.634 0 0 0-1.726-.622a1.509 1.509 0 0 0-.413.176l-2.572 1.584a4.934 4.934 0 0 1-1.364.582a5.415 5.415 0 0 1-5.727-2.06a4.678 4.678 0 0 1-.831-3.628A4.507 4.507 0 0 1 9.9 10.09l6.708-4.154a4.932 4.932 0 0 1 1.364-.581A5.413 5.413 0 0 1 23.7 7.414a4.679 4.679 0 0 1 .848 3.625a4.272 4.272 0 0 1-.159.61l-.127.375l-.344-.237a8.713 8.713 0 0 0-2.628-1.274l-.245-.074l.025-.237a1.438 1.438 0 0 0-.272-.968a1.629 1.629 0 0 0-1.725-.622a1.484 1.484 0 0 0-.411.176l-6.722 4.14a1.353 1.353 0 0 0-.631.908a1.394 1.394 0 0 0 .244 1.092a1.634 1.634 0 0 0 1.726.621a1.538 1.538 0 0 0 .413-.175l2.562-1.585a4.9 4.9 0 0 1 1.364-.581a5.417 5.417 0 0 1 5.728 2.059a4.681 4.681 0 0 1 .843 3.625a4.5 4.5 0 0 1-2.089 3.013l-6.707 4.154a4.9 4.9 0 0 1-1.364.581"
}, null, -1);
const _hoisted_4$g = [
  _hoisted_2$t,
  _hoisted_3$n
];
function render$t(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$t, _hoisted_4$g);
}
var VscodeIconsFileTypeSvelte = { name: "vscode-icons-file-type-svelte", render: render$t };
const _hoisted_1$s = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$s = /* @__PURE__ */ createElementVNode("circle", {
  cx: "16",
  cy: "15.974",
  r: "2.5",
  fill: "#00d8ff"
}, null, -1);
const _hoisted_3$m = /* @__PURE__ */ createElementVNode("path", {
  fill: "#00d8ff",
  d: "M16 21.706a28.385 28.385 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.543 3.543 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0 1 16 10.293a28.674 28.674 0 0 1 9.022 1.324a11.376 11.376 0 0 1 3.538 1.866A3.391 3.391 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191Zm0-10.217a27.948 27.948 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 0 0-1.01-1.573a10.194 10.194 0 0 0-3.161-1.654A27.462 27.462 0 0 0 16 11.489Z"
}, null, -1);
const _hoisted_4$f = /* @__PURE__ */ createElementVNode("path", {
  fill: "#00d8ff",
  d: "M10.32 28.443a2.639 2.639 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 0 1 3.4-8.593a28.676 28.676 0 0 1 5.653-7.154a11.376 11.376 0 0 1 3.384-2.133a3.391 3.391 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 0 1-3.316 8.133a28.385 28.385 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.926 4.926 0 0 1-1.624.307Zm1.773-14.7a27.948 27.948 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.209 27.209 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 0 0-1.868.089A10.194 10.194 0 0 0 17.5 6.9a27.464 27.464 0 0 0-5.4 6.849Z"
}, null, -1);
const _hoisted_5$9 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#00d8ff",
  d: "M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 0 1-5.747-7.237a28.676 28.676 0 0 1-3.374-8.471a11.376 11.376 0 0 1-.158-4A3.391 3.391 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.384 28.384 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.543 3.543 0 0 1-1.494 2.555a2.59 2.59 0 0 1-1.315.324Zm-9.58-10.2a27.949 27.949 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 0 0-.855 1.662a10.194 10.194 0 0 0 .153 3.565a27.465 27.465 0 0 0 3.236 8.1Z"
}, null, -1);
const _hoisted_6$6 = [
  _hoisted_2$s,
  _hoisted_3$m,
  _hoisted_4$f,
  _hoisted_5$9
];
function render$s(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$s, _hoisted_6$6);
}
var VscodeIconsFileTypeReactjs = { name: "vscode-icons-file-type-reactjs", render: render$s };
const _hoisted_1$r = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$r = /* @__PURE__ */ createElementVNode("circle", {
  cx: "16.024",
  cy: "15.923",
  r: "5.716",
  fill: "#4e8ef7"
}, null, -1);
const _hoisted_3$l = /* @__PURE__ */ createElementVNode("path", {
  fill: "#4e8ef7",
  d: "M27.688 6.224a1.964 1.964 0 0 0-3.252-1.484a14.013 14.013 0 1 0 2.77 2.77a1.955 1.955 0 0 0 .482-1.286ZM16.023 29.452a13.529 13.529 0 1 1 8.1-24.362a1.964 1.964 0 0 0 2.738 2.738a13.523 13.523 0 0 1-10.838 21.624Z"
}, null, -1);
const _hoisted_4$e = [
  _hoisted_2$r,
  _hoisted_3$l
];
function render$r(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$r, _hoisted_4$e);
}
var VscodeIconsFileTypeIonic = { name: "vscode-icons-file-type-ionic", render: render$r };
const _hoisted_1$q = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 259"
};
const _hoisted_2$q = /* @__PURE__ */ createElementVNode("path", {
  fill: "#015965",
  d: "M94.029 57.213c18.682-15.559 49.26-15.562 67.945 0l80.016 66.632c18.68 15.561 18.683 41.015-.003 56.577l-80.013 66.63c-18.69 15.564-49.266 15.56-67.945 0l-80.016-66.63c-18.683-15.56-18.683-41.016-.003-56.577l80.019-66.632Z"
}, null, -1);
const _hoisted_3$k = /* @__PURE__ */ createElementVNode("path", {
  fill: "#E5E5E5",
  d: "M94.029 35.561c18.682-15.559 49.26-15.562 67.945 0l80.016 66.633c18.68 15.562 18.683 41.017-.003 56.578l-80.013 66.63c-18.69 15.564-49.266 15.56-67.945 0l-80.016-66.63c-18.683-15.56-18.683-41.016-.003-56.578L94.029 35.56Z"
}, null, -1);
const _hoisted_4$d = /* @__PURE__ */ createElementVNode("path", {
  fill: "#35BBCE",
  d: "M161.974 12.319L241.99 78.95c18.68 15.562 18.683 41.017-.003 56.578l-80.013 66.63c-18.69 15.565-49.266 15.56-67.945 0l-80.016-66.63C-4.67 119.97-4.67 94.513 14.01 78.951l80.019-66.632c18.682-15.56 49.26-15.563 67.945 0Z"
}, null, -1);
const _hoisted_5$8 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#FFF",
  d: "M244.31 81.1a42.693 42.693 0 0 0-2.3-2.077L161.99 12.33c-18.688-15.577-49.267-15.574-67.952 0L14.011 79.023c-18.681 15.58-18.681 41.058.003 56.634l8.612 7.176C45.142 115.79 121.074 40.853 244.31 81.1Z",
  opacity: ".15"
}, null, -1);
const _hoisted_6$5 = [
  _hoisted_2$q,
  _hoisted_3$k,
  _hoisted_4$d,
  _hoisted_5$8
];
function render$q(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$q, _hoisted_6$5);
}
var LogosOpenlayers = { name: "logos-openlayers", render: render$q };
const _hoisted_1$p = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 254"
};
const _hoisted_2$p = /* @__PURE__ */ createElementVNode("path", {
  fill: "#485160",
  d: "M128 0c70.695 0 128 56.688 128 126.623s-57.305 126.623-128 126.623S0 196.558 0 126.623S57.305 0 128 0Zm58.745 68.51c-25.485-25.068-65.8-26.065-90.133-1.994c-43.036 42.574-30.346 117.567-29.82 120.55l.016.091s78.182 13.816 121.952-29.484c24.333-24.07 23.47-64.094-2.015-89.163Zm-44.059 5.698l12.527 25.495l25.772 12.392l-25.772 12.392l-12.527 25.495l-12.526-25.495l-25.773-12.392l25.773-12.392l12.526-25.495Z"
}, null, -1);
const _hoisted_3$j = [
  _hoisted_2$p
];
function render$p(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, _hoisted_3$j);
}
var LogosMapboxIcon = { name: "logos-mapbox-icon", render: render$p };
const _hoisted_1$o = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 293"
};
const _hoisted_2$o = /* @__PURE__ */ createElementVNode("path", {
  fill: "#1697F6",
  d: "M128 0H68l60 141.816"
}, null, -1);
const _hoisted_3$i = /* @__PURE__ */ createElementVNode("path", {
  fill: "#1867C0",
  d: "M128 0h60l-60 141.816"
}, null, -1);
const _hoisted_4$c = /* @__PURE__ */ createElementVNode("path", {
  fill: "#7BC6FF",
  d: "M128 182.744v109.715L0 42.558h67.049"
}, null, -1);
const _hoisted_5$7 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#AEDDFF",
  d: "M128 182.746v109.716L256 42.56h-67.049"
}, null, -1);
const _hoisted_6$4 = [
  _hoisted_2$o,
  _hoisted_3$i,
  _hoisted_4$c,
  _hoisted_5$7
];
function render$o(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, _hoisted_6$4);
}
var LogosVuetifyjs = { name: "logos-vuetifyjs", render: render$o };
const _hoisted_1$n = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$n = /* @__PURE__ */ createStaticVNode('<path fill="#5382a1" d="M12.7 23.56s-1.07.622.761.833a16.023 16.023 0 0 0 5.8-.246a10.088 10.088 0 0 0 1.539.753c-5.481 2.349-12.405-.136-8.1-1.339m-.674-3.067s-1.2.888.633 1.078a22.618 22.618 0 0 0 7.481-.359a3.32 3.32 0 0 0 1.152.7c-6.627 1.938-14.009.153-9.266-1.421"></path><path fill="#e76f00" d="M17.673 15.294a2.051 2.051 0 0 1-.355 2.954s3.429-1.77 1.854-3.987c-1.471-2.067-2.6-3.095 3.508-6.636c0 0-9.586 2.394-5.007 7.669"></path><path fill="#5382a1" d="M24.922 25.827s.792.652-.872 1.157c-3.164.958-13.168 1.248-15.948.038c-1-.435.874-1.038 1.464-1.164a3.8 3.8 0 0 1 .966-.108c-1.111-.783-7.181 1.537-3.083 2.2c11.176 1.812 20.372-.816 17.473-2.124m-11.711-8.508s-5.089 1.209-1.8 1.648a38.225 38.225 0 0 0 6.731-.072a53.11 53.11 0 0 0 4.221-.555a8.934 8.934 0 0 0-1.28.685c-5.17 1.358-15.153.726-12.283-.665a9.629 9.629 0 0 1 4.407-1.042m9.133 5.104c5.253-2.73 2.824-5.353 1.129-5a3.932 3.932 0 0 0-.6.161a.957.957 0 0 1 .449-.346c3.354-1.179 5.933 3.478-1.083 5.322a.458.458 0 0 0 .106-.138"></path><path fill="#e76f00" d="M19.172 1.906s2.909 2.91-2.759 7.386c-4.546 3.59-1.037 5.637 0 7.975c-2.653-2.394-4.6-4.5-3.294-6.463c1.917-2.879 7.229-4.275 6.056-8.9"></path><path fill="#5382a1" d="M13.727 29.818c5.042.323 12.786-.179 12.969-2.565c0 0-.353.9-4.167 1.623a41.458 41.458 0 0 1-12.76.2s.645.533 3.959.746"></path>', 5);
const _hoisted_7$3 = [
  _hoisted_2$n
];
function render$n(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, _hoisted_7$3);
}
var VscodeIconsFileTypeJar = { name: "vscode-icons-file-type-jar", render: render$n };
const _hoisted_1$m = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$m = /* @__PURE__ */ createElementVNode("path", {
  fill: "#83cd29",
  d: "M16 30a2.151 2.151 0 0 1-1.076-.288L11.5 27.685c-.511-.286-.262-.387-.093-.446a6.828 6.828 0 0 0 1.549-.7a.263.263 0 0 1 .255.019l2.631 1.563a.34.34 0 0 0 .318 0l10.26-5.922a.323.323 0 0 0 .157-.278V10.075a.331.331 0 0 0-.159-.283l-10.26-5.917a.323.323 0 0 0-.317 0L5.587 9.794a.33.33 0 0 0-.162.281v11.841a.315.315 0 0 0 .161.274L8.4 23.814c1.525.762 2.459-.136 2.459-1.038V11.085a.3.3 0 0 1 .3-.3h1.3a.3.3 0 0 1 .3.3v11.692c0 2.035-1.108 3.2-3.038 3.2a4.389 4.389 0 0 1-2.363-.642l-2.697-1.547a2.166 2.166 0 0 1-1.076-1.872V10.075A2.162 2.162 0 0 1 4.661 8.2l10.261-5.924a2.246 2.246 0 0 1 2.156 0L27.338 8.2a2.165 2.165 0 0 1 1.077 1.87v11.846a2.171 2.171 0 0 1-1.077 1.872l-10.26 5.924A2.152 2.152 0 0 1 16 30Z"
}, null, -1);
const _hoisted_3$h = /* @__PURE__ */ createElementVNode("path", {
  fill: "#83cd29",
  d: "M14.054 17.953a.3.3 0 0 1 .3-.3h1.327a.3.3 0 0 1 .295.251c.2 1.351.8 2.032 3.513 2.032c2.161 0 3.082-.489 3.082-1.636c0-.661-.261-1.152-3.62-1.481c-2.808-.278-4.544-.9-4.544-3.144c0-2.07 1.745-3.305 4.67-3.305c3.287 0 4.914 1.141 5.12 3.589a.3.3 0 0 1-.295.323h-1.336a.3.3 0 0 1-.288-.232c-.319-1.421-1.1-1.875-3.2-1.875c-2.36 0-2.634.822-2.634 1.438c0 .746.324.964 3.51 1.385c3.153.417 4.651 1.007 4.651 3.223c0 2.236-1.864 3.516-5.115 3.516c-4.495.006-5.436-2.055-5.436-3.784Z"
}, null, -1);
const _hoisted_4$b = [
  _hoisted_2$m,
  _hoisted_3$h
];
function render$m(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_4$b);
}
var VscodeIconsFileTypeNode = { name: "vscode-icons-file-type-node", render: render$m };
const _hoisted_1$l = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$l = ["id"];
const _hoisted_3$g = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0",
  "stop-color": "#387eb8"
}, null, -1);
const _hoisted_4$a = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#366994"
}, null, -1);
const _hoisted_5$6 = [
  _hoisted_3$g,
  _hoisted_4$a
];
const _hoisted_6$3 = ["id"];
const _hoisted_7$2 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0",
  "stop-color": "#ffe052"
}, null, -1);
const _hoisted_8$3 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "1",
  "stop-color": "#ffc331"
}, null, -1);
const _hoisted_9$1 = [
  _hoisted_7$2,
  _hoisted_8$3
];
const _hoisted_10$2 = ["fill"];
const _hoisted_11$2 = ["fill"];
function render$l(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, [
    createElementVNode("defs", null, [
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDa"],
        x1: "-133.268",
        x2: "-133.198",
        y1: "-202.91",
        y2: "-202.84",
        gradientTransform: "matrix(189.38 0 0 189.81 25243.061 38519.17)",
        gradientUnits: "userSpaceOnUse"
      }, _hoisted_5$6, 8, _hoisted_2$l),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDb"],
        x1: "-133.575",
        x2: "-133.495",
        y1: "-203.203",
        y2: "-203.133",
        gradientTransform: "matrix(189.38 0 0 189.81 25309.061 38583.42)",
        gradientUnits: "userSpaceOnUse"
      }, _hoisted_9$1, 8, _hoisted_6$3)
    ]),
    createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["svgIDa"] + ")",
      d: "M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1H6.545S2 8.8 2 16.005s4.013 6.912 4.013 6.912H8.33v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652V5.8s.572-3.712-6.842-3.712Zm-3.732 2.137a1.214 1.214 0 1 1-1.183 1.244v-.02a1.214 1.214 0 0 1 1.214-1.214Z"
    }, null, 8, _hoisted_10$2),
    createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["svgIDb"] + ")",
      d: "M16.085 29.91c7.1 0 6.651-3.08 6.651-3.08v-3.18h-6.751v-1h9.47S30 23.158 30 15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13 4.013-3.9 4.013h-6.765S9.2 16.356 9.2 20.068V26.2s-.572 3.712 6.842 3.712h.04Zm3.732-2.147A1.214 1.214 0 1 1 21 26.519v.03a1.214 1.214 0 0 1-1.214 1.214h.03Z"
    }, null, 8, _hoisted_11$2)
  ]);
}
var VscodeIconsFileTypePython = { name: "vscode-icons-file-type-python", render: render$l, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "svgIDa": "uicons-" + __randId(), "svgIDb": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$k = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$k = /* @__PURE__ */ createElementVNode("path", { d: "M29.507 18.773a1.378 1.378 0 0 0-1.144-.921a2.619 2.619 0 0 0-.913.051a8.2 8.2 0 0 1-1.406.185a27.125 27.125 0 0 0 2.872-6.83c.953-3.689.444-5.369-.151-6.13A8.239 8.239 0 0 0 22.121 2a11.773 11.773 0 0 0-3.453.484a12.858 12.858 0 0 0-2.02-.184a6.565 6.565 0 0 0-3.518.867a16.039 16.039 0 0 0-2.484-.624a7.694 7.694 0 0 0-5.819.924C3.093 4.691 2.289 6.819 2.438 9.792a36.351 36.351 0 0 0 1.406 6.538a22.579 22.579 0 0 0 1.514 3.863A4.786 4.786 0 0 0 7.8 22.742a2.4 2.4 0 0 0 2.379-.516a2.08 2.08 0 0 0 .5.43a3.328 3.328 0 0 0 .944.4a5.069 5.069 0 0 0 3.3-.2c.006.171.011.335.014.477c.006.229.013.454.021.665a11.641 11.641 0 0 0 .441 3.3c.016.043.037.107.059.176a3.975 3.975 0 0 0 .991 1.745a2.955 2.955 0 0 0 2.09.777a4.7 4.7 0 0 0 .977-.109a4.592 4.592 0 0 0 3.091-1.787c.811-1.155 1.206-2.894 1.277-5.635l.026-.222l.017-.145l.191.017h.049a7.562 7.562 0 0 0 3.163-.548c.631-.293 2.654-1.361 2.177-2.8" }, null, -1);
const _hoisted_3$f = /* @__PURE__ */ createElementVNode("path", {
  fill: "#336791",
  d: "M27.689 19.053c-3.163.652-3.38-.418-3.38-.418c3.339-4.955 4.735-11.245 3.53-12.784c-3.286-4.2-8.975-2.213-9.07-2.162l-.031.006a11.28 11.28 0 0 0-2.11-.22a5.212 5.212 0 0 0-3.34 1S3.14.294 3.612 9.733c.1 2.008 2.878 15.194 6.191 11.211c1.211-1.456 2.381-2.688 2.381-2.688a3.071 3.071 0 0 0 2.006.512l.057-.048a2.21 2.21 0 0 0 .023.567c-.854.954-.6 1.121-2.309 1.472c-1.726.356-.712.989-.05 1.155a3.508 3.508 0 0 0 3.915-1.272l-.05.2c.334.268.569 1.742.53 3.079a8.481 8.481 0 0 0 .2 2.971c.264.717.526 2.329 2.769 1.849a3.307 3.307 0 0 0 2.98-3.179c.1-1.234.313-1.052.326-2.155l.174-.522c.2-1.673.032-2.213 1.186-1.962l.281.025a6.4 6.4 0 0 0 2.615-.44c1.406-.652 2.239-1.742.853-1.455"
}, null, -1);
const _hoisted_4$9 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  d: "M13.882 10.631a.981.981 0 0 0-.674.1a.247.247 0 0 0-.1.164a.48.48 0 0 0 .117.314a.881.881 0 0 0 .559.349a.637.637 0 0 0 .09.006a.725.725 0 0 0 .687-.467c.035-.248-.326-.414-.676-.463m9.442.008c-.027-.195-.374-.25-.7-.2s-.647.194-.62.389a.667.667 0 0 0 .62.411a.592.592 0 0 0 .083-.006a.8.8 0 0 0 .451-.247a.5.5 0 0 0 .169-.343"
}, null, -1);
const _hoisted_5$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  d: "M28.741 18.979c-.121-.365-.509-.482-1.154-.349c-1.915.4-2.6.121-2.826-.044a26.327 26.327 0 0 0 3.373-7.565a14.374 14.374 0 0 0 .5-3.253a3.513 3.513 0 0 0-.509-2.2a7.482 7.482 0 0 0-6.049-2.825a10.363 10.363 0 0 0-3.5.551a8.717 8.717 0 0 0-1.968-.253a5.684 5.684 0 0 0-3.372.929a15.051 15.051 0 0 0-2.74-.718a6.978 6.978 0 0 0-5.242.805c-1.5 1.064-2.2 2.966-2.061 5.653a35.489 35.489 0 0 0 1.373 6.348c1.07 3.505 2.233 5.49 3.457 5.9a1.548 1.548 0 0 0 .491.081a2.049 2.049 0 0 0 1.563-.886q1.042-1.25 2.155-2.438a3.472 3.472 0 0 0 1.55.417v.042q-.14.166-.273.338c-.375.475-.452.574-1.658.823c-.343.071-1.254.259-1.267.9c-.014.7 1.077.991 1.2 1.022a5.144 5.144 0 0 0 1.249.162a3.634 3.634 0 0 0 2.5-.934a23.674 23.674 0 0 0 .381 5.684a2.854 2.854 0 0 0 2.729 2.1a4.378 4.378 0 0 0 .917-.1a3.462 3.462 0 0 0 3.156-3.212c.177-1.026.481-3.475.624-4.789a3.859 3.859 0 0 0 1.11.137a6.6 6.6 0 0 0 2.519-.48c.712-.331 2-1.141 1.763-1.846Zm-4.69-8.879a7.968 7.968 0 0 1-.116 1.107a10.229 10.229 0 0 0-.14 1.3a9.859 9.859 0 0 0 .1 1.47a5.236 5.236 0 0 1-.229 2.986a3.882 3.882 0 0 1-.207-.426c-.058-.141-.185-.368-.359-.681c-.68-1.22-2.274-4.078-1.458-5.244c.243-.347.86-.7 2.408-.512Zm-1.877-6.569a6.617 6.617 0 0 1 5.334 2.522c.975 1.245-.1 6.912-3.205 11.8l-.094-.119l-.039-.049a5.524 5.524 0 0 0 .506-3.8a9.114 9.114 0 0 1-.1-1.352a9.572 9.572 0 0 1 .131-1.206a7.614 7.614 0 0 0 .123-1.493a.619.619 0 0 0 .013-.21a8.381 8.381 0 0 0-1.912-3.6a8.61 8.61 0 0 0-3.039-2.284a10.246 10.246 0 0 1 2.28-.214ZM9.479 20.654c-.627.754-1.061.61-1.2.562c-.928-.31-2.006-2.272-2.955-5.384a35.167 35.167 0 0 1-1.34-6.159c-.12-2.4.462-4.074 1.73-4.974c2.063-1.463 5.456-.587 6.819-.143c-.02.019-.04.037-.059.057c-2.237 2.259-2.184 6.119-2.178 6.355c0 .091.007.22.018.4a15.969 15.969 0 0 1-.081 3.226a4.08 4.08 0 0 0 1.067 3.413q.133.138.278.262a55.7 55.7 0 0 0-2.1 2.385Zm2.39-3.19a3.3 3.3 0 0 1-.865-2.764a16.7 16.7 0 0 0 .087-3.381a15.422 15.422 0 0 1-.014-.243A4.3 4.3 0 0 1 14 10.223a1.188 1.188 0 0 1 .918 1.026c.646 2.989.085 4.234-.365 5.235c-.093.206-.181.4-.255.6l-.058.156a10.218 10.218 0 0 0-.368 1.109a2.788 2.788 0 0 1-2-.887Zm.113 4.03a1.733 1.733 0 0 1-.523-.225a2.553 2.553 0 0 1 .557-.166c1.418-.292 1.637-.5 2.116-1.105c.11-.139.234-.3.406-.489c.256-.287.374-.238.586-.15a.829.829 0 0 1 .408.525a.585.585 0 0 1-.05.491a3.1 3.1 0 0 1-3.499 1.12Zm7.424 6.906a2.113 2.113 0 0 1-2.754-1.526a31.129 31.129 0 0 1-.3-6.853a.392.392 0 0 0-.017-.124a1.643 1.643 0 0 0-.048-.23a1.589 1.589 0 0 0-.862-1.034a1.216 1.216 0 0 0-.793-.1a9.586 9.586 0 0 1 .342-1.022l.058-.157c.066-.177.148-.36.235-.554c.471-1.047 1.117-2.482.416-5.722a2.044 2.044 0 0 0-2.468-1.669a5.694 5.694 0 0 0-1.887.591c-.078.04-.15.078-.216.115a8.244 8.244 0 0 1 1.918-4.952a4.711 4.711 0 0 1 3.57-1.336a7.567 7.567 0 0 1 5.781 2.763a8.774 8.774 0 0 1 1.582 2.71c-1.463-.149-2.458.14-2.962.861c-1.1 1.568.6 4.612 1.416 6.075c.15.268.279.5.319.6a5.432 5.432 0 0 0 .861 1.387c.077.1.152.189.208.271c-.443.128-1.239.423-1.166 1.9c-.058.74-.474 4.205-.686 5.43c-.279 1.617-.874 2.22-2.548 2.579Zm7.242-8.288a5.714 5.714 0 0 1-1.931.4a2.422 2.422 0 0 1-1.3-.167c-.045-.919.3-1.015.66-1.117c.057-.016.112-.032.166-.05a1.353 1.353 0 0 0 .11.08c.639.422 1.78.467 3.39.135h.018a4.334 4.334 0 0 1-1.116.72Z"
}, null, -1);
const _hoisted_6$2 = [
  _hoisted_2$k,
  _hoisted_3$f,
  _hoisted_4$9,
  _hoisted_5$5
];
function render$k(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, _hoisted_6$2);
}
var VscodeIconsFileTypePgsql = { name: "vscode-icons-file-type-pgsql", render: render$k };
const _hoisted_1$j = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 220"
};
const _hoisted_2$j = /* @__PURE__ */ createStaticVNode('<path fill="#912626" d="M245.97 168.943c-13.662 7.121-84.434 36.22-99.501 44.075c-15.067 7.856-23.437 7.78-35.34 2.09c-11.902-5.69-87.216-36.112-100.783-42.597C3.566 169.271 0 166.535 0 163.951v-25.876s98.05-21.345 113.879-27.024c15.828-5.679 21.32-5.884 34.79-.95c13.472 4.936 94.018 19.468 107.331 24.344l-.006 25.51c.002 2.558-3.07 5.364-10.024 8.988"></path><path fill="#C6302B" d="M245.965 143.22c-13.661 7.118-84.431 36.218-99.498 44.072c-15.066 7.857-23.436 7.78-35.338 2.09c-11.903-5.686-87.214-36.113-100.78-42.594c-13.566-6.485-13.85-10.948-.524-16.166c13.326-5.22 88.224-34.605 104.055-40.284c15.828-5.677 21.319-5.884 34.789-.948c13.471 4.934 83.819 32.935 97.13 37.81c13.316 4.881 13.827 8.9.166 16.02"></path><path fill="#912626" d="M245.97 127.074c-13.662 7.122-84.434 36.22-99.501 44.078c-15.067 7.853-23.437 7.777-35.34 2.087c-11.903-5.687-87.216-36.112-100.783-42.597C3.566 127.402 0 124.67 0 122.085V96.206s98.05-21.344 113.879-27.023c15.828-5.679 21.32-5.885 34.79-.95C162.142 73.168 242.688 87.697 256 92.574l-.006 25.513c.002 2.557-3.07 5.363-10.024 8.987"></path><path fill="#C6302B" d="M245.965 101.351c-13.661 7.12-84.431 36.218-99.498 44.075c-15.066 7.854-23.436 7.777-35.338 2.087c-11.903-5.686-87.214-36.112-100.78-42.594c-13.566-6.483-13.85-10.947-.524-16.167C23.151 83.535 98.05 54.148 113.88 48.47c15.828-5.678 21.319-5.884 34.789-.949c13.471 4.934 83.819 32.933 97.13 37.81c13.316 4.88 13.827 8.9.166 16.02"></path><path fill="#912626" d="M245.97 83.653c-13.662 7.12-84.434 36.22-99.501 44.078c-15.067 7.854-23.437 7.777-35.34 2.087c-11.903-5.687-87.216-36.113-100.783-42.595C3.566 83.98 0 81.247 0 78.665v-25.88s98.05-21.343 113.879-27.021c15.828-5.68 21.32-5.884 34.79-.95C162.142 29.749 242.688 44.278 256 49.155l-.006 25.512c.002 2.555-3.07 5.361-10.024 8.986"></path><path fill="#C6302B" d="M245.965 57.93c-13.661 7.12-84.431 36.22-99.498 44.074c-15.066 7.854-23.436 7.777-35.338 2.09C99.227 98.404 23.915 67.98 10.35 61.497C-3.217 55.015-3.5 50.55 9.825 45.331C23.151 40.113 98.05 10.73 113.88 5.05c15.828-5.679 21.319-5.883 34.789-.948c13.471 4.935 83.819 32.934 97.13 37.811c13.316 4.876 13.827 8.897.166 16.017"></path><path fill="#FFF" d="m159.283 32.757l-22.01 2.285l-4.927 11.856l-7.958-13.23l-25.415-2.284l18.964-6.839l-5.69-10.498l17.755 6.944l16.738-5.48l-4.524 10.855l17.067 6.391m-28.251 57.518L89.955 73.238l58.86-9.035l-17.783 26.072m-56.95-50.928c17.375 0 31.46 5.46 31.46 12.194c0 6.736-14.085 12.195-31.46 12.195s-31.46-5.46-31.46-12.195c0-6.734 14.085-12.194 31.46-12.194"></path><path fill="#621B1C" d="m185.295 35.998l34.836 13.766l-34.806 13.753l-.03-27.52"></path><path fill="#9A2928" d="m146.755 51.243l38.54-15.245l.03 27.519l-3.779 1.478l-34.791-13.752"></path>', 9);
const _hoisted_11$1 = [
  _hoisted_2$j
];
function render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_11$1);
}
var LogosRedis = { name: "logos-redis", render: render$j };
const _hoisted_1$i = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$i = /* @__PURE__ */ createStaticVNode('<path fill="#ffc24a" d="m5.8 24.6l.17-.237l8.02-15.214l.017-.161l-3.535-6.64a.656.656 0 0 0-1.227.207Z"></path><path fill="#ffa712" d="m5.9 24.42l.128-.25l7.937-15.056l-3.526-6.666a.6.6 0 0 0-1.133.206Z"></path><path fill="#f4bd62" d="m16.584 14.01l2.632-2.7l-2.633-5.021a.678.678 0 0 0-1.195 0l-1.407 2.682V9.2Z"></path><path fill="#ffa50e" d="m16.537 13.9l2.559-2.62l-2.559-4.88a.589.589 0 0 0-1.074-.047l-1.414 2.729l-.042.139Z"></path><path fill="#f6820c" d="m5.802 24.601l.077-.078l.279-.113l10.26-10.222l.13-.354l-2.559-4.878l-8.187 15.645z"></path><path fill="#fde068" d="m16.912 29.756l9.288-5.179l-2.654-16.331a.635.635 0 0 0-1.075-.346L5.8 24.6l9.233 5.155a1.927 1.927 0 0 0 1.878 0"></path><path fill="#fcca3f" d="M26.115 24.534L23.483 8.326a.557.557 0 0 0-.967-.353L5.9 24.569l9.131 5.1a1.912 1.912 0 0 0 1.863 0Z"></path><path fill="#eeab37" d="M16.912 29.6a1.927 1.927 0 0 1-1.878 0l-9.158-5.078l-.076.078l9.233 5.155a1.927 1.927 0 0 0 1.878 0l9.289-5.178l-.023-.14Z"></path>', 8);
const _hoisted_10$1 = [
  _hoisted_2$i
];
function render$i(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_10$1);
}
var VscodeIconsFileTypeFirebase = { name: "vscode-icons-file-type-firebase", render: render$i };
const _hoisted_1$h = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$h = /* @__PURE__ */ createStaticVNode('<path fill="#fed10a" d="m12.761 13.89l6.644 3.027l6.7-5.874a7.017 7.017 0 0 0 .141-1.475a7.484 7.484 0 0 0-13.66-4.233l-1.12 5.785Z"></path><path fill="#24bbb1" d="M5.886 20.919a7.262 7.262 0 0 0-.141 1.5a7.514 7.514 0 0 0 13.724 4.22l1.1-5.759l-1.469-2.821l-6.67-3.04Z"></path><path fill="#ef5098" d="M5.848 9.426L10.4 10.5l1-5.169a3.594 3.594 0 0 0-5.552 4.095"></path><path fill="#17a8e0" d="M5.45 10.517a5.016 5.016 0 0 0-.218 9.453l6.388-5.77l-1.167-2.5Z"></path><path fill="#93c83e" d="M20.624 26.639a3.589 3.589 0 0 0 5.541-4.092l-4.541-1.065Z"></path><path fill="#0779a1" d="m21.547 20.29l5 1.167A5.016 5.016 0 0 0 26.768 12l-6.541 5.733Z"></path>', 6);
const _hoisted_8$2 = [
  _hoisted_2$h
];
function render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_8$2);
}
var VscodeIconsFileTypeElastic = { name: "vscode-icons-file-type-elastic", render: render$h };
const _hoisted_1$g = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 256"
};
const _hoisted_2$g = /* @__PURE__ */ createElementVNode("path", {
  fill: "#6DB33F",
  d: "M38.944 35.879c50.58-48.999 131.454-47.682 180.453 3.161c5.532-7.376 10.274-15.542 13.699-23.972c16.07 48.999 25.817 90.095 22.128 121.97c-1.844 26.87-12.381 52.687-29.768 73.235c-45.31 53.741-125.922 60.59-179.663 15.28l-1.028-.915l-.055-.036a12.24 12.24 0 0 1-.498-.367c-.49-.381-.935-.796-1.336-1.24l-.144-.164l-1.68-1.493c-1.64-1.405-3.279-2.81-4.733-4.4l-.536-.606c-49-50.58-47.419-131.454 3.16-180.453ZM57.91 207.376c-4.742-3.688-11.591-3.162-15.28 1.58c-3.242 4.17-3.226 9.969.049 13.815l.052.06l2.033 1.807l.2.136c4.604 3.028 10.8 2.402 14.333-1.878l.194-.241c3.688-4.742 2.898-11.591-1.58-15.28ZM231.78 28.239c-13.173 27.661-45.84 48.736-74.027 55.322c-26.607 6.322-49.79 1.054-74.289 10.537c-55.848 21.339-54.794 87.724-24.236 102.74l1.844 1.054s22.074-4.389 43.902-10.185l1.87-.5c8.718-2.35 17.295-4.91 24.302-7.492c36.354-13.435 76.397-46.628 89.568-85.09c-6.849 40.042-41.359 78.767-75.87 96.418c-18.44 9.483-32.665 11.59-62.96 22.128c-3.688 1.317-6.586 2.635-6.586 2.635l1.108-.15l.736-.095l.733-.092c6.69-.83 12.702-1.244 12.702-1.244c42.94-2.108 110.38 12.118 141.729-29.768c32.139-42.677 14.225-111.697-.527-156.218Z"
}, null, -1);
const _hoisted_3$e = /* @__PURE__ */ createElementVNode("path", {
  fill: "#FFF",
  d: "M57.911 207.376c4.479 3.688 5.269 10.537 1.58 15.279c-3.687 4.742-10.537 5.269-15.279 1.58c-4.741-3.688-5.268-10.537-1.58-15.279c3.688-4.742 10.537-5.268 15.28-1.58ZM231.78 28.239c14.752 44.521 32.666 113.541.527 156.218c-31.35 41.886-98.789 27.66-141.729 29.768c0 0-6.012.415-12.702 1.244l-.733.092c-.612.078-1.228.16-1.844.245c0 0 2.898-1.318 6.586-2.635c30.295-10.537 44.52-12.645 62.96-22.128c34.511-17.65 69.021-56.376 75.87-96.418c-13.171 38.462-53.214 71.655-89.568 85.09c-25.026 9.22-70.074 18.177-70.074 18.177l-1.844-1.054c-30.558-15.016-31.612-81.401 24.236-102.74c24.5-9.483 47.682-4.215 74.29-10.537c28.187-6.586 60.853-27.66 74.025-55.322Z"
}, null, -1);
const _hoisted_4$8 = [
  _hoisted_2$g,
  _hoisted_3$e
];
function render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_4$8);
}
var LogosSpringIcon = { name: "logos-spring-icon", render: render$g };
const _hoisted_1$f = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$f = /* @__PURE__ */ createElementVNode("path", {
  fill: "#ea2845",
  "fill-rule": "evenodd",
  d: "M18.487 2a1.781 1.781 0 0 0-.564.1c1.615 1.062-.29 2.6.6 3.9A2.235 2.235 0 0 1 19.6 3.765c.285-.237.468-.322.407-.714C19.908 2.409 19.052 2 18.487 2Zm2.3.414c-.223 1.123-.5 1.164-1.323 1.887a1.821 1.821 0 0 0-.527 2.191c-3.4-1.32-7.758-2.118-10.953.166c-1.149.821-1.85 2-3.267 2.481c-.916.314-1.816.221-2.39 1.129a1.413 1.413 0 0 0 .056 1.832c.171.175.5.287.636.465c.079.1.077.2.152.333a2.6 2.6 0 0 0 .564.828c.147.121.652.239.738.368c.108.161-.172.8.063.9c.158.073.621-.744.666-.816c-.092.643-.213 1.784.51.834c.343-.451.364-.6.941-.7a8.2 8.2 0 0 1 1.117-.116a8.362 8.362 0 0 1 8.622 7.622c-.108-.5-.761-1.3-1.369-1.11c-.259.08-.355.527-.525.786a3.773 3.773 0 0 1-.785.868a4.687 4.687 0 0 0-.072-1.452c-.182.748-.547 1.989-1.466 1.788a1.652 1.652 0 0 1-1.328-1.142c-.119-.76.684-1.651-.607-1.714c-2.59-.127-1.991 3.682-.462 4.675a3.272 3.272 0 0 0-1.015.283a6.893 6.893 0 0 0 10.276-4.922a7.058 7.058 0 0 1-.015 3.085a7.213 7.213 0 0 1-.554 1.559a6.781 6.781 0 0 1-1.3 1.81c-.314.311-.89.624-1.088.941a13.409 13.409 0 0 0 3.52-.968A11.638 11.638 0 0 1 15.1 30a11.589 11.589 0 0 0 9.3-5.909a11.657 11.657 0 0 1-1.945 4.668a11.531 11.531 0 0 0 4.975-7.783a11.622 11.622 0 0 1 .209 3.5a12.418 12.418 0 0 0 1.889-10.566a15.755 15.755 0 0 0-1.689-3.962a14.838 14.838 0 0 0-.939-1.394c-.133-.173-.844-.806-.844-1q-.009.029-.015 0c0 3.248-3.5 5.333-6.431 4.463a5 5 0 0 0 4.546-4.167a5 5 0 0 0-3.369-5.436Z"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$f
];
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_3$d);
}
var VscodeIconsFileTypeNestjs = { name: "vscode-icons-file-type-nestjs", render: render$f };
const _hoisted_1$e = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 413"
};
const _hoisted_2$e = /* @__PURE__ */ createElementVNode("path", {
  fill: "#1A1919",
  d: "M87.932 36.714c-4.55-4.571-10.896-7.394-17.951-7.394c-7.029 0-13.326 2.823-17.822 7.394h-.13c-4.535 4.55-7.358 10.9-7.358 17.93c0 7.055 2.823 13.352 7.359 17.875l.129.102c4.496 4.55 10.793 7.346 17.822 7.346c7.055 0 13.402-2.797 17.951-7.346L88 72.52c4.558-4.523 7.354-10.82 7.354-17.876c0-7.029-2.796-13.38-7.354-17.929h-.067Zm-17.951 346.64a25.504 25.504 0 0 0 17.951-7.368l.067-.134c4.558-4.487 7.354-10.838 7.354-17.817c0-7.056-2.796-13.38-7.354-17.952h-.067c-4.55-4.625-10.896-7.42-17.951-7.42c-7.029 0-13.326 2.795-17.822 7.42h-.13c-4.535 4.572-7.358 10.896-7.358 17.952c0 6.98 2.823 13.33 7.359 17.817l.129.134a25.148 25.148 0 0 0 17.822 7.368Zm137.972-76.72c6.275-1.646 11.957-5.673 15.423-11.761l.468-.887c3.082-5.776 3.644-12.44 1.998-18.344c-1.659-6.324-5.735-11.917-11.81-15.418l-.352-.237c-5.918-3.242-12.662-3.947-18.857-2.274c-6.297 1.57-11.952 5.775-15.4 11.814c-3.492 5.981-4.223 12.88-2.55 19.231c1.725 6.244 5.761 11.89 11.796 15.418h.04c6.047 3.475 12.898 4.104 19.244 2.458ZM95.97 180.387c-6.654-6.637-15.824-10.794-25.988-10.794c-10.124 0-19.272 4.157-25.912 10.794c-6.61 6.614-10.686 15.76-10.686 25.898c0 10.165 4.076 19.339 10.686 26.029c6.64 6.582 15.788 10.712 25.912 10.712c10.164 0 19.334-4.13 25.988-10.712c6.623-6.69 10.7-15.864 10.7-26.029c0-10.137-4.077-19.284-10.7-25.898Zm-14.61-43.164c14.726 2.426 27.976 9.482 38.087 19.673h.08a72.44 72.44 0 0 1 4.625 5.147l25.284-14.629c-3.399-10.271-3.555-21.01-.826-31.072c3.609-13.487 12.35-25.56 25.453-33.137l.433-.26c12.96-7.345 27.696-8.861 41-5.253a54.523 54.523 0 0 1 33.186 25.48v.026c7.529 13.015 9.059 27.96 5.464 41.393c-3.581 13.478-12.363 25.631-25.453 33.155l-3.452 2.043h-.352c-12.109 5.771-25.426 6.663-37.655 3.447c-10.044-2.667-19.258-8.26-26.47-16.23l-25.243 14.585a69.649 69.649 0 0 1 4.509 24.694a70.67 70.67 0 0 1-4.51 24.824l25.244 14.53c7.212-8.072 16.426-13.562 26.47-16.229c13.469-3.684 28.405-2.114 41.46 5.49l.833.393v.053c12.613 7.627 21.078 19.441 24.619 32.767a54.432 54.432 0 0 1-5.464 41.344l-.454.914l-.054-.08c-7.564 12.573-19.48 21.091-32.638 24.695c-13.5 3.554-28.432 2.038-41.473-5.46v-.106c-13.103-7.578-21.844-19.678-25.453-33.133c-2.729-10.035-2.573-20.779.826-31.046l-25.284-14.584c-1.45 1.78-3.02 3.452-4.625 5.071l-.08.076c-10.11 10.142-23.361 17.198-38.088 19.548v29.217c10.494 2.194 19.9 7.448 27.273 14.816l.035.08c9.88 9.825 15.994 23.517 15.994 38.57c0 15.003-6.115 28.61-15.994 38.489l-.035.156c-9.946 9.879-23.598 15.993-38.65 15.993c-14.972 0-28.642-6.114-38.56-15.993h-.036v-.156c-9.893-9.879-16.02-23.486-16.02-38.49a54.262 54.262 0 0 1 16.02-38.569v-.08h.035c7.36-7.368 16.779-12.622 27.246-14.816v-29.217c-14.74-2.35-27.95-9.406-38.048-19.548l-.107-.076C7.89 243.053 0 225.624 0 206.285c0-19.284 7.89-36.714 20.511-49.389h.107c10.098-10.19 23.308-17.247 38.048-19.673v-29.087A55.34 55.34 0 0 1 31.42 93.293h-.035v-.08c-9.893-9.928-16.02-23.518-16.02-38.57c0-14.976 6.127-28.695 16.02-38.574l.035-.049C41.34 6.115 55.01 0 69.98 0c15.053 0 28.705 6.115 38.65 16.02v.05h.036c9.88 9.878 15.994 23.597 15.994 38.573c0 15.052-6.115 28.642-15.994 38.57l-.035.08c-7.373 7.319-16.779 12.568-27.273 14.843v29.087Zm142.017-19.392l-.21-.312c-3.492-5.882-9.058-9.803-15.213-11.502c-6.346-1.672-13.197-.963-19.284 2.511h.04c-6.075 3.448-10.138 9.094-11.837 15.418a25.314 25.314 0 0 0 2.551 19.231l.116.16a24.985 24.985 0 0 0 15.284 11.57a24.829 24.829 0 0 0 19.21-2.48l.325-.156c5.905-3.528 9.838-9.094 11.484-15.208c1.673-6.298 1.008-13.197-2.466-19.232Z"
}, null, -1);
const _hoisted_3$c = [
  _hoisted_2$e
];
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_3$c);
}
var LogosKafkaIcon = { name: "logos-kafka-icon", render: render$e };
const _hoisted_1$d = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 257"
};
const _hoisted_2$d = /* @__PURE__ */ createElementVNode("path", {
  fill: "#F60",
  d: "M245.734 102.437h-81.911a10.199 10.199 0 0 1-10.263-10.263v-81.91a10.199 10.199 0 0 0-10.263-10.2h-30.66a10.199 10.199 0 0 0-10.264 10.2v81.91a10.199 10.199 0 0 1-10.263 10.263H61.45a10.199 10.199 0 0 1-10.263-10.263v-81.91A10.199 10.199 0 0 0 40.924 0H10.199A10.2 10.2 0 0 0 0 10.263v235.535a10.2 10.2 0 0 0 10.263 10.263h235.47a10.2 10.2 0 0 0 10.264-10.263V112.893a10.199 10.199 0 0 0-10.263-10.456Zm-41.18 86.979a15.331 15.331 0 0 1-15.33 15.394h-20.526a15.33 15.33 0 0 1-15.33-15.394v-20.462a15.331 15.331 0 0 1 15.33-15.394h20.525a15.33 15.33 0 0 1 15.33 15.394v20.462Z"
}, null, -1);
const _hoisted_3$b = [
  _hoisted_2$d
];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$b);
}
var LogosRabbitmqIcon = { name: "logos-rabbitmq-icon", render: render$d };
const _hoisted_1$c = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$c = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  d: "M7.313 18.654a.548.548 0 0 1-.6.233a.917.917 0 0 0-.869.08c-.306.218-.637.053-.579-.345a1.229 1.229 0 0 1 .583-.971c.833-.479.254-.812.711-1.293s.357-.629.341-1.283a4.648 4.648 0 0 1-3.4-1.9a6.012 6.012 0 0 1-1.46-3.764a6.365 6.365 0 0 1 .649-3.8a5.315 5.315 0 0 1 2.565-2.522a7.022 7.022 0 0 1 3.489-.77a4.96 4.96 0 0 1 2.443.452a5.148 5.148 0 0 0 1.546.8a1.217 1.217 0 0 0 .782-.226c.047 1.189-1.023 1.292-1.98 1.317s-1.546-.371-2.427-.224a4.193 4.193 0 0 0-3.03 1.774A3.783 3.783 0 0 0 5.408 8.9a1.952 1.952 0 0 0 1.441 1.8c.5.008.61-.136 1.047-.421s2.665-3.043 3.426-3.663a3.522 3.522 0 0 1 2.322-.821a3.24 3.24 0 0 1 1.671.286A12.275 12.275 0 0 1 16.9 7.139a8.833 8.833 0 0 0 .684-.576a2.865 2.865 0 0 1 2.393-.718a3.644 3.644 0 0 1 1.819.8a14.312 14.312 0 0 1 2.013 2.425a3.59 3.59 0 0 0 1.621 1.489c.771.237 1.352-.762 1.437-1.316a5.814 5.814 0 0 0 .112-.935a4.413 4.413 0 0 0-.135-1.125a4 4 0 0 0-.455-1.016a3.606 3.606 0 0 0-1.3-1.25A4.129 4.129 0 0 0 23.7 4.5a13.676 13.676 0 0 0-1.4.2c-.584.04-1.628.171-2.086-.28a1.18 1.18 0 0 1-.378-.853a.892.892 0 0 0 .469.19c.366.031.708-.268 1-.441a7.34 7.34 0 0 1 .908-.526a5.856 5.856 0 0 1 2.7-.232a6.308 6.308 0 0 1 2.2.725a6 6 0 0 1 1.634 1.48A4.983 4.983 0 0 1 29.781 6.9a8.981 8.981 0 0 1 .017 3.847a7.577 7.577 0 0 1-1.714 2.819a4.388 4.388 0 0 1-2.317 1.112a4.911 4.911 0 0 0 .086.488c.064.206.188.436.441.363a.236.236 0 0 1 .289.063c.133.116.064.567-.311.769a1.449 1.449 0 0 1-.695.131a6.612 6.612 0 0 1-1.11-.051c-.33-.058-.528-.32-.894-.361a3.572 3.572 0 0 1-1.452-.764a3.048 3.048 0 0 0-.362-.185c.059.18.138.368.177.541s.023.334.043.472s.059.247.082.359c.09.081.119.2.272.243a1.706 1.706 0 0 0 .546-.043c.156-.021.26-.106.383-.083a.85.85 0 0 1 .34.193c.1.082.191.094.274.3a3.333 3.333 0 0 1 .171.9a1.93 1.93 0 0 1-.1.755a1.261 1.261 0 0 1-.381.541a5.937 5.937 0 0 1-.956.769a1.652 1.652 0 0 0 .2.3c.1.109.324.229.421.344a.473.473 0 0 1 .148.324a.686.686 0 0 1-.109.433a1.9 1.9 0 0 1-.937.573a2.477 2.477 0 0 1 .023 1.06c-.037.159-.119.519-.315.612a3.823 3.823 0 0 1-.814.086c-.239.038-.373.074-.56.111a3.3 3.3 0 0 0-.34.492a.4.4 0 0 0 .008.35c.049.15.214.368.261.544a1.091 1.091 0 0 1 .012.541a.943.943 0 0 1-.269.46c-.15.157-.446.28-.593.406s-.294.142-.254.352a1.551 1.551 0 0 0 .781.867a.925.925 0 0 0 .65-.048c-.015.246-.228.412-.367.576a2.2 2.2 0 0 0 1-.588a2.488 2.488 0 0 1-.752.955a2.872 2.872 0 0 1-.6.4a2.652 2.652 0 0 0 .99 0a1.97 1.97 0 0 1-.748.242a2.2 2.2 0 0 1-.85-.064a5.7 5.7 0 0 1-.951-.541a.78.78 0 0 0 .217.442a2.859 2.859 0 0 0 .639.334a9.407 9.407 0 0 1-.963-.116a2.233 2.233 0 0 1-.555-.189a3.647 3.647 0 0 1-.449-.309a1.291 1.291 0 0 0 .215.411a1.963 1.963 0 0 0 .48.232a2.1 2.1 0 0 1-.5-.011a1.408 1.408 0 0 1-.517-.245a3.7 3.7 0 0 1-.52-.463a2.155 2.155 0 0 1-.4-.538c-.058-.154.035-.262.052-.393a1.233 1.233 0 0 0-.318.21a.4.4 0 0 0-.118.37a2.46 2.46 0 0 0 .315.589c-.344-.281-.536-.389-.618-.729a1.143 1.143 0 0 1 .272-.846c.075-.119.187-.23.257-.345a4.668 4.668 0 0 1-.466-.456c-.133-.173-.189-.408-.325-.573a3.412 3.412 0 0 0-.478-.407a6.246 6.246 0 0 1 .42.9a.6.6 0 0 1-.139.5c-.083.126-.216.154-.343.231s-.323.017-.4.131a.392.392 0 0 0-.023.4l.3.466a1.421 1.421 0 0 1-.381-.328c-.084-.114-.214-.218-.232-.371a.541.541 0 0 1 .073-.422c.1-.137.371-.182.493-.287s.19-.173.183-.309s-.14-.232-.253-.318a8.278 8.278 0 0 1-1.088-.815a1.08 1.08 0 0 1-.28-.443a.459.459 0 0 1 .085-.368c.083-.151.367-.352.4-.515s-.109-.2-.238-.256s-.376.029-.5-.071s.035-.311-.1-.427s-.445-.051-.6-.176a.837.837 0 0 1-.281-.459a.974.974 0 0 1-.024-.509c.038-.131.15-.154.217-.222s.127-.124.036-.225s-.385.006-.555-.124s-.066-.44-.186-.572s-.336-.079-.449-.121s-.159.106-.228-.128s-.072-.93-.166-1.189s-.278-.018-.363-.276a7.085 7.085 0 0 1-.043-1.06l-.175-1.061c-.609.409-2.53.935-2.7 1.233"
}, null, -1);
const _hoisted_3$a = /* @__PURE__ */ createElementVNode("path", {
  fill: "#030303",
  d: "M16.623 8.258a3.733 3.733 0 0 0 .077.942a.909.909 0 0 0 .382.66c.462.343.758.286 1.114.485a1.017 1.017 0 0 1 .446.421a.363.363 0 0 1-.17.422a.361.361 0 0 0 .371-.48c-.052-.128-.3-.185-.373-.314a.488.488 0 0 1-.04-.393c.064-.236.531-.451.7-.637a.772.772 0 0 0 .208-.9a2.831 2.831 0 0 0-1.45-1.141a3.209 3.209 0 0 0-.5-.15a1.65 1.65 0 0 1 .875.807c.144.374.019.515.024.84c0 .151.2.226.289.322s.07.145.009.259a.3.3 0 0 0-.13-.236c-.13-.093-.271-.073-.341-.263c-.106-.289.1-.563-.132-.888a1.029 1.029 0 0 0-.727-.522a1.267 1.267 0 0 0-.423.066l-.219-.258a4.594 4.594 0 0 0-1.34-.995a3.033 3.033 0 0 0-1.607-.3a3.068 3.068 0 0 0-2.2.771c-.808.7-2.892 3.367-3.4 3.7a1.7 1.7 0 0 1-1.248.453a2.124 2.124 0 0 1-1.657-2.002a4.041 4.041 0 0 1 .722-2.857a4.173 4.173 0 0 1 3.224-1.9a12.022 12.022 0 0 1 2.441.23c.771 0 1.534-.132 1.759-.745a1.044 1.044 0 0 1-.672.118A6.739 6.739 0 0 1 11 2.952a5.237 5.237 0 0 0-2.29-.377a6.319 6.319 0 0 0-3.215.669a5.769 5.769 0 0 0-2.582 2.475a5.866 5.866 0 0 0-.654 3.649a6.068 6.068 0 0 0 1.423 3.613a4.457 4.457 0 0 0 3.295 1.785l.329-1.45l-.587.842l.015-.937l-.531.659l-.233-.894l-.43.716l-.214-1l-.623.5l.2-.823l-.825.092l.379-.572l-.752.009l.438-.764l-.667-.106L4 10.35l-.817-.242l.676-.648l-.659-.544l.522-.406l-.492-.65l.521-.607l-.194-.8L4 6.067l.132-.916l.5-.249l.427-.715l.785-.087l.39-.643l.793.04l.749-.407l.778.181l.883-.266l.654.153l.853.125l.824.659L10.5 3.5l-.636.305l-.526-.321l-.362.246l-.64.064l-.574-.037l-.419.511l-.843.013l-.3.688l-.759.266l-.071.791l-.544.426L5 7.2l-.47.773l.361.676l-.355.619l.472.308l-.107.995l.656.166l.148.738l.715-.075l.444.506l.549-.536a6.151 6.151 0 0 0 2.193-1.625a10.282 10.282 0 0 1 2.58-2.506a3.451 3.451 0 0 1 2.493-.477c.895.154 1.194.691 1.853 1.257a.626.626 0 0 1 .2-.253a4.416 4.416 0 0 0-.108.492Zm4.665 5.934a.71.71 0 0 1-.2.143a2.376 2.376 0 0 1-.344.083c.173.27.355.543.521.826s.31.594.469.892a4.909 4.909 0 0 0-.022-.511a5.014 5.014 0 0 0-.168-.537c-.071-.239-.159-.564-.26-.9Zm-.06-1.551a.508.508 0 0 1 .168.092a.646.646 0 0 1 .255.269a1.025 1.025 0 0 1 .048.466c-.056-.016-.132-.005-.191-.055s-.092-.162-.167-.21a.439.439 0 0 0-.219-.048a.694.694 0 0 1 .043.35a.431.431 0 0 1-.409.387a1.336 1.336 0 0 1-.342-.036c.04.089.108.167.147.256a1.842 1.842 0 0 0 .439-.073a3.264 3.264 0 0 1 .345-.2a2.175 2.175 0 0 1 .395-.067c-.113.1-.188.2-.3.295l.25.728c.177.111.344.169.566.306a7.337 7.337 0 0 0 .781.515a2.887 2.887 0 0 0 .767.263c.3.057.545.3.844.343a6.43 6.43 0 0 0 1.087.025c.261-.025.6-.16.631-.447a.6.6 0 0 1-.723-.407c-.075-.183-.038-.52-.153-.737s-.274-.286-.466-.552a8.352 8.352 0 0 1-.679-1.045c-.175-.357-.217-.762-.365-1.082a5.285 5.285 0 0 0-.546-.826a2.918 2.918 0 0 0-1.308-1.18a6.4 6.4 0 0 0-.963-.249c-.131.059-.31.124-.342.276a.622.622 0 0 0 .14.493a2.1 2.1 0 0 1 .568.7a2.753 2.753 0 0 1 .03 1.029a1.146 1.146 0 0 1-.328.42Zm-1.451.173a2.483 2.483 0 0 1 .854-.242c.126-.008.321.012.448.017a1.7 1.7 0 0 0 .3-.466a2.519 2.519 0 0 0-.043-.826c-.172-.423-.34-.441-.577-.683a1.347 1.347 0 0 1-.231-.743c-.019-.11-.073-.249-.1-.363a4.64 4.64 0 0 0-1-.052a1.088 1.088 0 0 0 .39-.567a1.116 1.116 0 0 0-.132-.78a3.032 3.032 0 0 0-.576-.6c-.208-.182-.506-.332-.7-.482a5.781 5.781 0 0 1 .768-.275a2.5 2.5 0 0 1 1.842.448a4.6 4.6 0 0 1 1.053.833c.384.4.859 1.137 1.23 1.574a7.877 7.877 0 0 0 .997 1.043a4.973 4.973 0 0 0 .925.5l.481.51l.389-.481l.625.071l.129-.7l.574-.157l-.093-.947l.413-.293l-.31-.589l.315-.644l-.411-.736l.159-.708l-.476-.405l-.062-.753l-.664-.253l-.266-.655l-.75-.01l-.366-.486l-.5.035l-.56-.061l-.316-.234l-.46.3l-.557-.29l-1.106.42l.721-.627l.747-.119l.569-.138l.773.254l.68-.172l.656.388l.694-.038l.341.612l.691.079l.374.68l.435.237l.115.871l.387.367l-.17.762l.456.577l-.428.619l.457.387l-.585.518l.592.616l-.715.23l.466.661l-.584.1l.383.727l-.658-.009l.331.545l-.722-.087l.173.783l-.546-.48l-.187.949l-.377-.682l-.2.85l-.465-.627l.012.891l-.514-.8a3.638 3.638 0 0 0 .385 1.382a3.518 3.518 0 0 0 2.24-1.041a7.168 7.168 0 0 0 1.627-2.739a9.306 9.306 0 0 0 .011-3.618a5.45 5.45 0 0 0-1.045-2.109A7.963 7.963 0 0 0 26.9 3.405a6.2 6.2 0 0 0-3.2-.694a3.79 3.79 0 0 0-1.338.25c-.617.224-1.11.714-1.737.955a.6.6 0 0 1-.53 0a.989.989 0 0 0 .723.572a5.464 5.464 0 0 0 1.431-.013a9.013 9.013 0 0 1 1.451-.19a3.1 3.1 0 0 1 1.484.428a3.658 3.658 0 0 1 1.4 1.318a4 4 0 0 1 .448 1.079a5.063 5.063 0 0 1 .151 1.174a3.6 3.6 0 0 1-.112 1.035c-.212.781-.68 1.576-1.641 1.454c-.588-.075-1.475-1.18-1.772-1.585a15.7 15.7 0 0 0-1.969-2.4a3.034 3.034 0 0 0-1.705-.757a2.579 2.579 0 0 0-2.384.829a4.609 4.609 0 0 1 .532.17a3.981 3.981 0 0 1 1.094.718a1.19 1.19 0 0 1 .5.968c.008.3-.239.541-.465.758c-.139.133-.322.254-.434.357c-.149.137-.333.286-.147.5a1.883 1.883 0 0 0 .3.22c.163.121.089.572-.127.691a.712.712 0 0 1-.832-.069c.287-.043.469-.081.461-.315c0-.136-.177-.249-.347-.326a4.931 4.931 0 0 1-1.125-.452c-.411-.3-.42-.458-.531-.922a2.623 2.623 0 0 0-.646.113c-.265.087-.558.3-.8.348a1.718 1.718 0 0 1-1.058.006a4.244 4.244 0 0 0-2.1.349a5.917 5.917 0 0 0-.975.121a6.413 6.413 0 0 0-1.7.995a9.083 9.083 0 0 0-1.98 4.059c-.051.57.112.955-.248 1.233s-.349.992-.471 1.193s-.263.111-.525.392s-.4.234-.389.766a1.839 1.839 0 0 1 .845-.332c.256-.009.259.328.916-.322c.352-.348 1.027-.358 1.5-.512A4.732 4.732 0 0 0 11 16.152a5.613 5.613 0 0 0 1.415-3.381a3.984 3.984 0 0 1-.038 1.247a3.473 3.473 0 0 0 .151 2.442l.309.59a5.184 5.184 0 0 1-.652-.953l-.25-.674a5.057 5.057 0 0 1-1.463 1.662a2.916 2.916 0 0 0 .089 1.169c.128.373-.076.8.021 1.049s.321.106.394.355s-.038.741.075.983s.392.1.527.174a.774.774 0 0 1 .251.289c.073.1-.028.346.119.425s.376.012.529.088a.357.357 0 0 1 .139.422c-.036.163-.2.238-.272.4a.427.427 0 0 0 .023.434a.891.891 0 0 0 .466.314c.19.077.457.034.653.14a1.537 1.537 0 0 1 .476.473a.636.636 0 0 1 .127.425a1.19 1.19 0 0 1-.157.505c-.087.157-.278.347.021.647s.287.17.458.364c-.019-.336-.157-.609-.056-.862s.406-.3.566-.411a2.625 2.625 0 0 0 .379-.4a4.487 4.487 0 0 1 0 .491c-.041.266-.119.5.277.544a1.293 1.293 0 0 0 .535-.166c-.1.176-.269.318-.3.528a.918.918 0 0 0 .151.651a2.127 2.127 0 0 0 .582.487a2.227 2.227 0 0 0 .425.2c.007.207-.034.427-.01.621a1.134 1.134 0 0 0 .2.529a1.73 1.73 0 0 0 .465.373c-.094-.218-.283-.424-.281-.653a.734.734 0 0 1 .294-.594c.223-.2.746-.38.992-.577a1.214 1.214 0 0 0 .414-.51a2.23 2.23 0 0 0 .08-.673a2.032 2.032 0 0 1 .119.569a2.006 2.006 0 0 1-.221.794a1.217 1.217 0 0 0 .6-.612c.065.039.032.145.056.349c.109-.108.232-.191.341-.293a.949.949 0 0 0 .284-.334a.765.765 0 0 0-.008-.459a3.091 3.091 0 0 0-.324-.538c-.1-.181.017-.358.01-.576a1.727 1.727 0 0 0-.6-.1c-.229.033-.491.29-.725.293s-.365-.216-.557-.277a3.409 3.409 0 0 0-.579-.08a5.348 5.348 0 0 1 1.84-.451a11.629 11.629 0 0 1 1.715-.155a4.393 4.393 0 0 0 .769.03c.179-.051.141-.174.194-.307a1.73 1.73 0 0 0-.006-1.079A8.378 8.378 0 0 0 20.46 22c-.511.039-1.117.282-1.644.3a3.165 3.165 0 0 1-1.53-.328a3.63 3.63 0 0 1-.986-1.125c-.215-.329-.486-.975-.651-1.27a1.614 1.614 0 0 0-.339-.5a1.512 1.512 0 0 0-.488-.2c.188.019.392-.04.563.058c.256.147.543.756.7 1.021c.169-.566.129-.788.618-1.107a2.153 2.153 0 0 0-.5 1.295c.327.537.782 1.393 1.378 1.63a3.907 3.907 0 0 0 .817.168a5.91 5.91 0 0 0 2.132-.315a5.587 5.587 0 0 1 1.678-.04c.215.012.72-.117.825-.333a.382.382 0 0 0-.033-.386c-.081-.126-.3-.186-.414-.3a2.667 2.667 0 0 1-.274-.368a7.515 7.515 0 0 1-1.238.138c.257-.106.5-.167.771-.271a4.6 4.6 0 0 0 .787-.419a2.522 2.522 0 0 0 .51-.391a3.13 3.13 0 0 0 .471-.539a1.406 1.406 0 0 0 .139-.681a2.03 2.03 0 0 0-.1-.805a.634.634 0 0 0-.433-.311c-.15-.048-.252.073-.408.09s-.3.115-.527.008a1.967 1.967 0 0 1-.72-.642c-.228-.32-.39-.844-.623-1.247a21.2 21.2 0 0 0-1.376-1.986a4.043 4.043 0 0 1-.118-.593a2.861 2.861 0 0 1 .076-1.13a.987.987 0 0 1 .512-.69a.563.563 0 0 1 .371-.026a.25.25 0 0 1 .167.294c-.045.15-.15.155-.221.231a.808.808 0 0 0-.213.384a1.825 1.825 0 0 1 .412.016a.481.481 0 0 1 .339.326a.611.611 0 0 0-.456-.22a2.057 2.057 0 0 0-.316.048a2.271 2.271 0 0 1-.118.383c-.056.1-.163.075-.2.191a1.12 1.12 0 0 0-.022.455Zm.546.2c-.208.013-.258-.014-.424.1l.271.422a.65.65 0 0 1 .153-.525Zm-7.072-1.86a.812.812 0 0 1 .036-.194c-.3-.081-.423.115-.6.479c-.066.136 0 .217-.072.306s-.185.077-.3.163s-.23.251-.338.34a3.758 3.758 0 0 1-.777.418a2.536 2.536 0 0 0 .625-.513c.058-.1.05-.287.14-.377s.123-.152.24-.174s.07-.159.108-.266a1.151 1.151 0 0 1 .193-.293a.848.848 0 0 1 .339-.329c.158-.059.405 0 .525-.029s.051-.121.138-.173s.257-.029.373-.085a1.139 1.139 0 0 0 .429-.442A2.256 2.256 0 0 1 14.187 11a1.478 1.478 0 0 1-.749.89a2.38 2.38 0 0 1-.426.16c.073-.1.177-.143.219-.3a3.762 3.762 0 0 0 .02-.6Zm1.931 1.493c.157-.014.351.028.5.02a2.652 2.652 0 0 0 .377-.07c-.023-.221 0-.627-.205-.774a1.783 1.783 0 0 0-.817.008a7.63 7.63 0 0 0-1.017.385a3.168 3.168 0 0 1 .923-.514a2.428 2.428 0 0 1 .948-.09c.1.028.123.07.185.156a1.811 1.811 0 0 1 .268.9a2.524 2.524 0 0 1 .157.229a1.1 1.1 0 0 1 .081.338c-.056-.081-.022-.183-.177-.243a1.507 1.507 0 0 0-.6.018a.508.508 0 0 1-.231.934a.541.541 0 0 1-.641-.333a.988.988 0 0 1-.021-.4a.794.794 0 0 0-.688.259a1.3 1.3 0 0 0 .523.508a1.681 1.681 0 0 0 .5.186a2.516 2.516 0 0 0 .676.032a.734.734 0 0 0 .444-.216a1.04 1.04 0 0 0 .212-.47a1.369 1.369 0 0 1-.083.431a.786.786 0 0 1-.778.412a2.853 2.853 0 0 1-1.019-.2a1.542 1.542 0 0 1-.73-.624a1.8 1.8 0 0 1-.02-.557c.332-.22.413-.166.806-.231c.164-.027.277-.088.433-.1Zm.9-2.187a1.48 1.48 0 0 0 .524.212c.147 0 .185-.1.272-.154a6.578 6.578 0 0 0 .523 1.333c.1.169.159.09.232.26s.107.514.176.73a5.907 5.907 0 0 0 .242.564a7.727 7.727 0 0 1-.583-.9c-.114-.241-.041-.262-.133-.492s-.279-.588-.418-.882a.829.829 0 0 1-.3.008c-.076-.023-.061-.1-.129-.156s-.184-.032-.28-.115a.592.592 0 0 1-.127-.405Zm-1.964 7.762c.138-.112.511-.023.789 0l-.6.154c-.019.068-.01.147-.056.2s-.132.079-.2.119c.007-.179-.072-.363.066-.475Zm2.574-3.737a2.621 2.621 0 0 0 .205-.6c-.027.252.024.529-.1.712s-.339.151-.518.2c.139-.106.3-.153.411-.312Zm-.252 2.8a1 1 0 0 1 .5-.9a2.14 2.14 0 0 1 .706-.253a2.751 2.751 0 0 1 1.186.155a7.055 7.055 0 0 1 .7.459c.239.141.409.236.637.395c.35.243.554.512.8.673a1.763 1.763 0 0 0 .435.113a.73.73 0 0 1-.407.033a1.823 1.823 0 0 1-.513-.306a3.515 3.515 0 0 0-.579-.42c-.145-.084-.383-.183-.542-.287s-.435-.331-.587-.407a1.892 1.892 0 0 0-.759-.146a1.606 1.606 0 0 0-.959.267a.645.645 0 0 0-.264.66a2.992 2.992 0 0 1 .23-.3a.721.721 0 0 1 .607-.131a.531.531 0 0 1 .459.415a1.1 1.1 0 0 0-.238-.159a.573.573 0 0 0-.51.05c-.21.112-.153.278-.183.463a1.765 1.765 0 0 1-.069.231a.453.453 0 0 1-.211-.113a1.493 1.493 0 0 0 .008.259a3.194 3.194 0 0 0 .1.319a1.872 1.872 0 0 1-.39-.47a1.237 1.237 0 0 1-.148-.6Zm1.889.318a.98.98 0 0 1 .439.114a1.712 1.712 0 0 1 .314.223a1.858 1.858 0 0 1 .5.877a5.274 5.274 0 0 1 .077.745a4.767 4.767 0 0 0-.225-.687a1.682 1.682 0 0 0-.783-.8a.42.42 0 0 0-.252-.032c.028.047.075.086.077.155a.27.27 0 0 1-.13.259a.493.493 0 0 1-.541-.1a.48.48 0 0 1-.12-.535c.091-.224.439-.224.644-.216Zm-10.406.644a.726.726 0 0 0-.6.4a.548.548 0 0 1-.6.233a.917.917 0 0 0-.869.08c-.306.218-.637.053-.579-.344a1.226 1.226 0 0 1 .583-.971c.832-.479.254-.812.71-1.293s.356-.629.342-1.283a4.65 4.65 0 0 1-3.4-1.9A6.013 6.013 0 0 1 2.036 9.4a6.362 6.362 0 0 1 .649-3.8a5.314 5.314 0 0 1 2.569-2.522a7.026 7.026 0 0 1 3.489-.769a4.958 4.958 0 0 1 2.443.452a5.153 5.153 0 0 0 1.545.8a1.218 1.218 0 0 0 .782-.226c.047 1.189-1.023 1.292-1.981 1.317s-1.546-.371-2.427-.223A4.192 4.192 0 0 0 6.078 6.2a3.78 3.78 0 0 0-.669 2.683a1.951 1.951 0 0 0 1.44 1.8c.5.008.61-.136 1.047-.421s2.665-3.041 3.426-3.662a3.518 3.518 0 0 1 2.321-.821a3.236 3.236 0 0 1 1.671.285A12.282 12.282 0 0 1 16.9 7.128a8.515 8.515 0 0 0 .684-.576a2.865 2.865 0 0 1 2.393-.718a3.644 3.644 0 0 1 1.819.8a14.284 14.284 0 0 1 2.014 2.425a3.594 3.594 0 0 0 1.621 1.489c.771.237 1.351-.762 1.437-1.316a5.786 5.786 0 0 0 .112-.932a4.39 4.39 0 0 0-.134-1.125a4.012 4.012 0 0 0-.455-1.016a3.6 3.6 0 0 0-1.3-1.25a4.131 4.131 0 0 0-1.391-.424a13.632 13.632 0 0 0-1.4.2c-.584.04-1.627.171-2.085-.28a1.18 1.18 0 0 1-.378-.854a.891.891 0 0 0 .469.189c.366.031.708-.268 1-.441a7.2 7.2 0 0 1 .907-.526a5.861 5.861 0 0 1 2.7-.233a6.315 6.315 0 0 1 2.2.725a6.005 6.005 0 0 1 1.634 1.48a4.992 4.992 0 0 1 1.037 2.15a8.988 8.988 0 0 1 .017 3.847a7.581 7.581 0 0 1-1.713 2.819a4.391 4.391 0 0 1-2.317 1.112c.034.177.04.342.085.487c.065.206.188.436.442.364a.236.236 0 0 1 .289.062c.133.117.063.567-.312.769a1.444 1.444 0 0 1-.695.131a6.517 6.517 0 0 1-1.11-.051c-.33-.058-.528-.319-.894-.361a3.576 3.576 0 0 1-1.452-.764a3.069 3.069 0 0 0-.362-.185c.059.18.137.368.177.541s.022.334.043.473s.059.246.081.359c.091.081.12.2.272.243a1.688 1.688 0 0 0 .546-.043c.156-.021.261-.105.383-.083a.853.853 0 0 1 .341.193c.1.082.19.094.274.3a3.364 3.364 0 0 1 .17.9a1.922 1.922 0 0 1-.1.755a1.254 1.254 0 0 1-.381.541a5.924 5.924 0 0 1-.957.769a1.691 1.691 0 0 0 .2.3c.1.108.324.229.421.343a.474.474 0 0 1 .148.324a.689.689 0 0 1-.109.434a1.9 1.9 0 0 1-.937.573a2.484 2.484 0 0 1 .023 1.06c-.037.159-.119.519-.315.612a3.808 3.808 0 0 1-.814.086c-.239.038-.373.074-.56.111a3.312 3.312 0 0 0-.34.491a.4.4 0 0 0 .008.35c.049.15.215.369.261.544a1.091 1.091 0 0 1 .012.541a.952.952 0 0 1-.269.461c-.15.157-.446.279-.593.406s-.294.142-.254.352a1.548 1.548 0 0 0 .781.867a.93.93 0 0 0 .65-.047c-.015.246-.228.412-.367.575a2.2 2.2 0 0 0 1-.587a2.486 2.486 0 0 1-.752.954a2.86 2.86 0 0 1-.6.4a2.634 2.634 0 0 0 .991 0a1.964 1.964 0 0 1-.748.242a2.189 2.189 0 0 1-.85-.063a5.72 5.72 0 0 1-.951-.541a.782.782 0 0 0 .216.442a2.849 2.849 0 0 0 .639.334a9.6 9.6 0 0 1-.963-.116a2.274 2.274 0 0 1-.555-.189a3.8 3.8 0 0 1-.449-.309a1.3 1.3 0 0 0 .215.411a1.95 1.95 0 0 0 .481.233a2.1 2.1 0 0 1-.5-.011a1.409 1.409 0 0 1-.517-.245a3.708 3.708 0 0 1-.521-.464a2.146 2.146 0 0 1-.4-.538c-.058-.154.035-.262.052-.393a1.218 1.218 0 0 0-.319.209a.4.4 0 0 0-.118.371a2.45 2.45 0 0 0 .315.589c-.344-.281-.536-.39-.618-.729a1.142 1.142 0 0 1 .272-.846c.075-.119.187-.23.256-.345a4.636 4.636 0 0 1-.466-.456c-.133-.174-.189-.408-.325-.574a3.436 3.436 0 0 0-.478-.406a6.173 6.173 0 0 1 .42.9a.6.6 0 0 1-.139.5c-.083.126-.216.154-.342.231s-.324.016-.4.131a.393.393 0 0 0-.023.4l.3.466a1.418 1.418 0 0 1-.381-.328c-.085-.113-.214-.218-.232-.371a.541.541 0 0 1 .073-.423c.1-.136.371-.182.493-.287s.19-.173.183-.309s-.139-.233-.253-.318a8.319 8.319 0 0 1-1.088-.815a1.091 1.091 0 0 1-.28-.443a.461.461 0 0 1 .085-.368c.083-.151.367-.352.4-.515s-.109-.2-.238-.257s-.375.029-.5-.071s.035-.311-.1-.427s-.445-.051-.6-.176a.84.84 0 0 1-.281-.46a.968.968 0 0 1-.024-.509c.037-.131.149-.153.217-.221s.127-.124.036-.226s-.386.006-.556-.124s-.066-.44-.186-.571s-.336-.08-.449-.122s-.158.106-.228-.127s-.072-.929-.165-1.189s-.278-.017-.364-.276a7.171 7.171 0 0 1-.043-1.061l-.175-1.061a3.741 3.741 0 0 1-1.666.654a10.832 10.832 0 0 0 .338 4.321c.543 1.777 1.643 2.824 3.128 4.328a9.109 9.109 0 0 1-3.478-4.188a9.791 9.791 0 0 1-.414-4.277"
}, null, -1);
const _hoisted_4$7 = [
  _hoisted_2$c,
  _hoisted_3$a
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_4$7);
}
var VscodeIconsFileTypeMakefile = { name: "vscode-icons-file-type-makefile", render: render$c };
const _hoisted_1$b = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("path", {
  fill: "#019639",
  d: "M15.948 2h.065a10.418 10.418 0 0 1 .972.528l10.858 6.246a.792.792 0 0 1 .414.788c-.008 4.389 0 8.777-.005 13.164a.813.813 0 0 1-.356.507q-5.773 3.324-11.547 6.644a.587.587 0 0 1-.657.037q-5.78-3.314-11.549-6.64a.7.7 0 0 1-.4-.666V9.445a.693.693 0 0 1 .387-.67q5.422-3.118 10.844-6.24c.322-.184.638-.379.974-.535"
}, null, -1);
const _hoisted_3$9 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  d: "M8.767 10.538v10.859a1.509 1.509 0 0 0 .427 1.087a1.647 1.647 0 0 0 2.06.206a1.564 1.564 0 0 0 .685-1.293c0-2.62-.005-5.24 0-7.86q3.583 4.29 7.181 8.568a2.833 2.833 0 0 0 2.6.782a1.561 1.561 0 0 0 1.251-1.371q.008-5.541 0-11.081a1.582 1.582 0 0 0-3.152 0c0 2.662-.016 5.321 0 7.982c-2.346-2.766-4.663-5.556-7-8.332a2.817 2.817 0 0 0-2.649-1.052a1.579 1.579 0 0 0-1.403 1.505Z"
}, null, -1);
const _hoisted_4$6 = [
  _hoisted_2$b,
  _hoisted_3$9
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_4$6);
}
var VscodeIconsFileTypeNginx = { name: "vscode-icons-file-type-nginx", render: render$b };
const _hoisted_1$a = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("path", {
  fill: "#dd4c35",
  d: "M29.472 14.753L17.247 2.528a1.8 1.8 0 0 0-2.55 0l-2.539 2.539l3.22 3.22a2.141 2.141 0 0 1 2.712 2.73l3.1 3.1a2.143 2.143 0 1 1-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 1 1-1.764-.062V12.3a2.146 2.146 0 0 1-1.165-2.814l-3.17-3.172L2.528 14.7a1.8 1.8 0 0 0 0 2.551l12.225 12.221a1.8 1.8 0 0 0 2.55 0L29.472 17.3a1.8 1.8 0 0 0 0-2.551"
}, null, -1);
const _hoisted_3$8 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  d: "m12.158 5.067l3.22 3.22a2.141 2.141 0 0 1 2.712 2.73l3.1 3.1a2.143 2.143 0 1 1-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 1 1-1.764-.062V12.3a2.146 2.146 0 0 1-1.165-2.814l-3.17-3.172"
}, null, -1);
const _hoisted_4$5 = [
  _hoisted_2$a,
  _hoisted_3$8
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_4$5);
}
var VscodeIconsFileTypeGit = { name: "vscode-icons-file-type-git", render: render$a };
const _hoisted_1$9 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 259.3"
};
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#9EDCF2",
  d: "M200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1zm0 0"
}, null, -1);
const _hoisted_3$7 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("path", {
    id: "svgIDa",
    d: "M98.1 244.8c1.6 7.5 5.5 11.9 9.4 14.5h41.1c5-3.4 10.1-9.8 10.1-21.8v-31s.6-7.7 7.7-10.2c0 0 4.1-2.9-.3-4.5c0 0-19.5-1.6-19.5 14.4v23.6s.8 8.7-3.8 12.3v-29.2s.3-9.3 5.1-12.8c0 0 3.2-5.7-3.8-4.2c0 0-13.4 1.9-14 17.6l-.3 30h-3.2l-.3-30c-.6-15.6-14-17.6-14-17.6c-7-1.6-3.8 4.2-3.8 4.2c4.8 3.5 5.1 12.8 5.1 12.8v29.5c-4.6-3.3-3.8-12.6-3.8-12.6v-23.6c0-16-19.5-14.4-19.5-14.4c-4.5 1.6-.3 4.5-.3 4.5c7 2.6 7.7 10.2 7.7 10.2v21.7l.4 16.6z"
  })
], -1);
const _hoisted_4$4 = ["id"];
const _hoisted_5$4 = /* @__PURE__ */ createElementVNode("use", { href: "#svgIDa" }, null, -1);
const _hoisted_6$1 = [
  _hoisted_5$4
];
const _hoisted_7$1 = ["clip-path"];
const _hoisted_8$1 = /* @__PURE__ */ createStaticVNode('<path fill="#9EDCF2" d="m46.9 125.9l-2.1 7.2s-.5 2.6 1.9 3.1c2.6-.1 2.4-2.5 2.2-3.2l-2-7.1zm0 0"></path><path fill="#010101" d="m255.8 95.6l.2-.9c-21.1-4.2-42.7-4.3-55.8-3.7c2.1-7.7 2.8-16.7 2.8-26.6c0-14.3-5.4-25.7-14-34.3c1.5-4.9 3.5-15.8-2-29.7c0 0-9.8-3.1-32.1 11.8c-8.7-2.2-18-3.3-27.3-3.3c-10.2 0-20.5 1.3-30.2 3.9C74.4-2.9 64.3.3 64.3.3c-6.6 16.5-2.5 28.8-1.3 31.8c-7.8 8.4-12.5 19.1-12.5 32.2c0 9.9 1.1 18.8 3.9 26.5c-13.2-.5-34-.3-54.4 3.8l.2.9c20.4-4.1 41.4-4.2 54.5-3.7c.6 1.6 1.3 3.2 2 4.7c-13 .4-35.1 2.1-56.3 8.1l.3.9c21.4-6 43.7-7.6 56.6-8c7.8 14.4 23 23.8 50.2 26.7c-3.9 2.6-7.8 7-9.4 14.5c-5.3 2.5-21.9 8.7-31.9-8.5c0 0-5.6-10.2-16.3-11c0 0-10.4-.2-.7 6.5c0 0 6.9 3.3 11.7 15.6c0 0 6.3 21 36.4 14.2V177s-.6 7.7-7.7 10.2c0 0-4.2 2.9.3 4.5c0 0 19.5 1.6 19.5-14.4v-23.6s-.8-9.4 3.8-12.6v38.8s-.3 9.3-5.1 12.8c0 0-3.2 5.7 3.8 4.2c0 0 13.4-1.9 14-17.6l.3-39.3h3.2l.3 39.3c.6 15.6 14 17.6 14 17.6c7 1.6 3.8-4.2 3.8-4.2c-4.8-3.5-5.1-12.8-5.1-12.8v-38.5c4.6 3.6 3.8 12.3 3.8 12.3v23.6c0 16 19.5 14.4 19.5 14.4c4.5-1.6.3-4.5.3-4.5c-7-2.6-7.7-10.2-7.7-10.2v-31c0-12.1-5.1-18.5-10.1-21.8c29-2.9 42.9-12.2 49.3-26.8c12.7.3 35.6 1.9 57.4 8.1l.3-.9c-21.7-6.1-44.4-7.7-57.3-8.1c.6-1.5 1.1-3 1.6-4.6c13.4-.5 35.1-.5 56.3 3.7zm0 0"></path><path fill="#F5CCB3" d="M174.6 63.7c6.2 5.7 9.9 12.5 9.9 19.8c0 34.4-25.6 35.3-57.2 35.3S70.1 114 70.1 83.5c0-7.3 3.6-14.1 9.8-19.7c10.3-9.4 27.7-4.4 47.4-4.4s37-5.1 47.3 4.3zm0 0"></path><path fill="#FFF" d="M108.3 85.3c0 9.5-5.3 17.1-11.9 17.1c-6.6 0-11.9-7.7-11.9-17.1c0-9.5 5.3-17.1 11.9-17.1c6.6-.1 11.9 7.6 11.9 17.1zm0 0"></path><path fill="#AF5C51" d="M104.5 85.5c0 6.3-3.6 11.4-7.9 11.4c-4.4 0-7.9-5.1-7.9-11.4c0-6.3 3.6-11.4 7.9-11.4c4.3 0 7.9 5.1 7.9 11.4zm0 0"></path><path fill="#FFF" d="M172.2 85.3c0 9.5-5.3 17.1-11.9 17.1c-6.6 0-11.9-7.7-11.9-17.1c0-9.5 5.3-17.1 11.9-17.1c6.5-.1 11.9 7.6 11.9 17.1zm0 0"></path><path fill="#AF5C51" d="M168.3 85.5c0 6.3-3.6 11.4-7.9 11.4c-4.4 0-7.9-5.1-7.9-11.4c0-6.3 3.6-11.4 7.9-11.4c4.4 0 7.9 5.1 7.9 11.4zm-37.8 15c0 1.6-1.3 3-3 3c-1.6 0-3-1.3-3-3s1.3-3 3-3c1.6 0 3 1.3 3 3zm-9.9 7.5c-.2-.5.1-1 .6-1.2c.5-.2 1 .1 1.2.6c.8 2.2 2.8 3.6 5.1 3.6s4.3-1.5 5.1-3.6c.2-.5.7-.8 1.2-.6c.5.2.8.7.6 1.2c-1 2.9-3.8 4.9-6.9 4.9c-3.1 0-5.9-2-6.9-4.9zm0 0"></path><path fill="#C4E5D9" d="M54.5 121.6c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm5.8 3.2c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm3.5 4.2c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm3.2 4.8c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm3.5 4.4c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm4.8 3.9c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm6.7 2.5c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm6.7 0c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm6.8-1.1c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.1 0 2.1.6 2.1 1.4zm0 0"></path>', 8);
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, [
    _hoisted_2$9,
    _hoisted_3$7,
    createElementVNode("clipPath", {
      id: _ctx.idMap["svgIDb"]
    }, _hoisted_6$1, 8, _hoisted_4$4),
    createElementVNode("path", {
      fill: "#7DBCE7",
      d: "M200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1zm0 0",
      "clip-path": "url(#" + _ctx.idMap["svgIDb"] + ")"
    }, null, 8, _hoisted_7$1),
    _hoisted_8$1
  ]);
}
var LogosGithubOctocat = { name: "logos-GithubOctocat", render: render$9, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "svgIDb": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$8 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$8 = /* @__PURE__ */ createStaticVNode('<path fill="#3a4e55" d="M18.191 13.071H20.7v2.566h1.27a5.5 5.5 0 0 0 1.744-.292a4.462 4.462 0 0 0 .848-.383a3.149 3.149 0 0 1-.589-1.623a3.427 3.427 0 0 1 .616-2.416l.264-.305l.314.253a4 4 0 0 1 1.575 2.538a3.837 3.837 0 0 1 2.913.271l.345.2l-.181.354a3.629 3.629 0 0 1-3.648 1.74c-2.173 5.413-6.9 7.976-12.642 7.976A7.958 7.958 0 0 1 6.3 20.211l-.025-.043l-.226-.459a7.28 7.28 0 0 1-.579-3.693l.035-.38h2.143v-2.565h2.51v-2.51h5.02v-2.51h3.012v5.02Z"></path><path fill="#00aada" d="M26.324 14.021a3.311 3.311 0 0 0-1.418-2.821a3.072 3.072 0 0 0 .289 3.821a5.279 5.279 0 0 1-3.225 1.037H5.883a6.779 6.779 0 0 0 .667 3.737l.183.335a6.2 6.2 0 0 0 .379.569q.992.064 1.829.045a8.972 8.972 0 0 0 2.669-.389a.193.193 0 1 1 .126.365c-.09.031-.184.061-.281.088a8.4 8.4 0 0 1-1.845.3c.044 0-.046.007-.046.007l-.082.007a21.455 21.455 0 0 1-2.008-.006l-.01.007a7.882 7.882 0 0 0 6.063 2.41c5.56 0 10.276-2.465 12.365-8c1.482.152 2.906-.226 3.553-1.49a3.5 3.5 0 0 0-3.122-.022"></path><path fill="#27b9ec" d="M26.324 14.021a3.311 3.311 0 0 0-1.418-2.821a3.072 3.072 0 0 0 .289 3.821a5.279 5.279 0 0 1-3.225 1.037H6.836a5.223 5.223 0 0 0 2.106 4.686a8.972 8.972 0 0 0 2.669-.389a.193.193 0 1 1 .126.365c-.09.031-.184.061-.281.088a8.83 8.83 0 0 1-1.894.314l-.019-.022c1.892.971 4.636.967 7.782-.241a21.868 21.868 0 0 0 9.1-6.889l-.1.048"></path><path fill="#088cb9" d="M5.913 17.732a6.431 6.431 0 0 0 .637 2.061l.183.335a6.2 6.2 0 0 0 .379.569q.992.064 1.829.045a8.972 8.972 0 0 0 2.669-.389a.193.193 0 1 1 .126.365c-.09.031-.184.061-.281.088a8.826 8.826 0 0 1-1.891.307h-.1c-.291.016-.6.026-.922.026c-.351 0-.709-.007-1.1-.026a7.913 7.913 0 0 0 6.076 2.413c4.76 0 8.9-1.807 11.3-5.8Z"></path><path fill="#039cc7" d="M6.98 17.732a4.832 4.832 0 0 0 1.961 3.01a8.972 8.972 0 0 0 2.669-.389a.193.193 0 1 1 .126.365c-.09.031-.184.061-.281.088a8.959 8.959 0 0 1-1.9.307c1.892.971 4.628.957 7.773-.252a20.545 20.545 0 0 0 5.377-3.13Z"></path><path fill="#00acd3" d="M9.889 13.671h.172v1.813h-.172v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.33 0h.179v1.813H9.23v-1.813Zm-.33 0h.179v1.813H8.9v-1.813Zm-.33 0h.179v1.813H8.57v-1.813Zm-.323 0h.172v1.813h-.17v-1.813Zm-.181-.181h2.175v2.176H8.066V13.49Zm4.335-2.329h.172v1.813H12.4v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.33 0h.178v1.813h-.178v-1.813Zm-.323 0h.172v1.813h-.172v-1.813Zm-.181-.181h2.176v2.176h-2.175v-2.177Z"></path><path fill="#26c2ee" d="M12.4 13.671h.172v1.813H12.4v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.33 0h.178v1.813h-.178v-1.813Zm-.323 0h.172v1.813h-.172v-1.813Zm-.181-.181h2.176v2.176h-2.175V13.49Z"></path><path fill="#00acd3" d="M14.909 13.671h.172v1.813h-.172v-1.813Zm-.33 0h.179v1.813h-.178v-1.813Zm-.33 0h.179v1.813h-.178v-1.813Zm-.33 0h.181v1.813h-.179v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.323 0h.172v1.813h-.172v-1.813Zm-.181-.181h2.176v2.176h-2.174V13.49Z"></path><path fill="#26c2ee" d="M14.909 11.161h.172v1.813h-.172v-1.813Zm-.33 0h.179v1.813h-.178v-1.813Zm-.33 0h.179v1.813h-.178v-1.813Zm-.33 0h.181v1.813h-.179v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.323 0h.172v1.813h-.172v-1.813Zm-.181-.181h2.176v2.176h-2.174v-2.177Zm4.335 2.691h.172v1.813h-.172v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.33 0h.179v1.813H16.1v-1.813Zm-.323 0h.172v1.813h-.172v-1.813Zm-.177-.181h2.176v2.176H15.6V13.49Z"></path><path fill="#00acd3" d="M17.42 11.161h.172v1.813h-.172v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.33 0h.179v1.813H16.1v-1.813Zm-.323 0h.172v1.813h-.172v-1.813Zm-.181-.181h2.176v2.176H15.6v-2.177Z"></path><path fill="#26c2ee" d="M17.42 8.65h.172v1.813h-.172V8.65Zm-.33 0h.179v1.813h-.179V8.65Zm-.33 0h.179v1.813h-.179V8.65Zm-.33 0h.179v1.813h-.179V8.65Zm-.33 0h.179v1.813H16.1V8.65Zm-.323 0h.172v1.813h-.172V8.65Zm-.177-.181h2.176v2.176H15.6V8.469Z"></path><path fill="#00acd3" d="M19.93 13.671h.17v1.813h-.17v-1.813Zm-.33 0h.178v1.813H19.6v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.33 0h.179v1.813h-.179v-1.813Zm-.323 0h.172v1.813h-.172v-1.813Zm-.181-.181h2.176v2.176h-2.175V13.49Z"></path><path fill="#d5eef2" d="M12.616 19.193a.6.6 0 1 1-.6.6a.6.6 0 0 1 .6-.6"></path><path fill="#3a4e55" d="M12.616 19.363a.431.431 0 0 1 .156.029a.175.175 0 1 0 .241.236a.43.43 0 1 1-.4-.265M2 17.949h27.92c-.608-.154-1.923-.362-1.707-1.159c-1.105 1.279-3.771.9-4.444.267c-.749 1.087-5.111.674-5.415-.173c-.939 1.1-3.85 1.1-4.789 0c-.3.847-4.666 1.26-5.415.173c-.673.631-3.338 1.012-4.444-.267c.217.8-1.1 1.005-1.707 1.159"></path><path fill="#c0dbe1" d="M14.211 23.518a5.287 5.287 0 0 1-2.756-2.711a9.2 9.2 0 0 1-1.987.3q-.436.024-.917.025q-.554 0-1.168-.033a7.942 7.942 0 0 0 6.145 2.43q.344 0 .683-.013"></path><path fill="#d5eef2" d="M12.007 21.773a5.206 5.206 0 0 1-.552-.966a9.2 9.2 0 0 1-1.987.3a6.325 6.325 0 0 0 2.539.664"></path>', 16);
const _hoisted_18$1 = [
  _hoisted_2$8
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_18$1);
}
var VscodeIconsFileTypeDocker = { name: "vscode-icons-file-type-docker", render: render$8 };
const _hoisted_1$7 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 249"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#326DE6",
  d: "M82.085 244.934c-5.946 0-11.561-2.642-15.36-7.432L8.92 165.657c-3.799-4.79-5.285-10.9-3.799-16.847l20.645-89.682c1.321-5.946 5.285-10.736 10.736-13.378l83.571-39.97c2.643-1.32 5.616-1.981 8.589-1.981c2.973 0 5.945.66 8.588 1.982l83.572 39.804c5.45 2.642 9.414 7.432 10.735 13.378l20.645 89.682c1.322 5.946 0 12.057-3.798 16.847l-57.807 71.845c-3.799 4.624-9.414 7.432-15.36 7.432l-93.15.165Z"
}, null, -1);
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#FFF",
  d: "M128.495 7.928c2.313 0 4.625.495 6.772 1.486l83.572 39.804c4.294 2.147 7.597 6.111 8.588 10.736l20.645 89.682c1.156 4.79 0 9.745-3.138 13.543l-57.806 71.846c-2.973 3.798-7.598 5.945-12.387 5.945H82.085c-4.79 0-9.414-2.147-12.387-5.945l-57.806-71.846c-2.973-3.798-4.13-8.753-3.138-13.543l20.645-89.682c1.156-4.79 4.294-8.754 8.588-10.736L121.56 9.25c2.147-.826 4.624-1.321 6.936-1.321Zm0-7.763c-3.468 0-6.936.826-10.24 2.312l-83.571 39.97c-6.607 3.138-11.231 8.918-12.883 16.02L1.156 148.15c-1.651 7.102 0 14.369 4.625 20.15l57.806 71.845c4.46 5.615 11.231 8.753 18.333 8.753h92.655c7.102 0 13.874-3.138 18.333-8.753l57.807-71.846c4.624-5.615 6.276-13.047 4.624-20.15l-20.645-89.682c-1.651-7.102-6.276-12.882-12.882-16.02L138.57 2.476C135.432.991 131.964.165 128.495.165Z"
}, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#FFF",
  d: "M212.232 142.534c-.165 0-.165 0 0 0h-.165c-.165 0-.33 0-.33-.165c-.33 0-.66-.165-.991-.165c-1.156-.165-2.147-.33-3.138-.33c-.496 0-.991 0-1.652-.166h-.165c-3.468-.33-6.276-.66-8.919-1.486c-1.156-.496-1.486-1.156-1.817-1.817c0-.165-.165-.165-.165-.33l-2.147-.66a65.33 65.33 0 0 0-1.156-23.289a68.054 68.054 0 0 0-9.249-21.636l1.652-1.486v-.33c0-.826.165-1.652.825-2.478c1.982-1.817 4.46-3.303 7.433-5.12c.495-.33.99-.495 1.486-.826c.991-.495 1.817-.99 2.808-1.651c.165-.165.495-.33.826-.66c.165-.166.33-.166.33-.331c2.312-1.982 2.808-5.285 1.156-7.433c-.826-1.156-2.312-1.816-3.799-1.816c-1.32 0-2.477.495-3.633 1.321l-.33.33c-.33.165-.496.496-.826.661c-.826.826-1.487 1.486-2.147 2.312c-.33.33-.66.826-1.156 1.156c-2.313 2.478-4.46 4.46-6.607 5.946c-.495.33-.99.496-1.486.496c-.33 0-.661 0-.991-.166h-.33l-1.983 1.322c-2.147-2.312-4.459-4.294-6.771-6.276a65.958 65.958 0 0 0-34.519-13.709l-.165-2.147l-.33-.33c-.496-.496-1.156-.991-1.322-2.147c-.165-2.643.166-5.616.496-8.919v-.165c0-.496.165-1.156.33-1.652c.165-.99.33-1.982.496-3.138v-1.486c0-2.973-2.313-5.45-5.12-5.45c-1.322 0-2.643.66-3.634 1.651c-.99.991-1.486 2.312-1.486 3.799v1.321c0 1.156.165 2.147.495 3.138c.165.496.165.991.33 1.652v.165c.33 3.303.826 6.276.496 8.919c-.165 1.156-.826 1.651-1.321 2.147l-.33.33l-.166 2.147c-2.973.33-5.946.66-8.919 1.321c-12.717 2.808-23.948 9.25-32.701 18.498l-1.652-1.156h-.33c-.33 0-.661.165-.991.165c-.496 0-.991-.165-1.487-.495c-2.147-1.486-4.294-3.634-6.606-6.111c-.33-.33-.66-.826-1.156-1.156c-.661-.826-1.322-1.487-2.148-2.312c-.165-.166-.495-.33-.825-.661c-.165-.165-.33-.165-.33-.33a5.772 5.772 0 0 0-3.634-1.322c-1.487 0-2.973.661-3.799 1.817c-1.652 2.147-1.156 5.45 1.156 7.432c.165 0 .165.166.33.166c.33.165.496.495.826.66c.991.66 1.817 1.156 2.808 1.652c.496.165.991.495 1.487.826c2.972 1.816 5.45 3.303 7.432 5.12c.826.825.826 1.651.826 2.477v.33l1.651 1.487c-.33.495-.66.826-.826 1.321c-8.258 13.048-11.396 28.408-9.249 43.603l-2.147.66c0 .166-.165.166-.165.33c-.33.661-.826 1.322-1.817 1.817c-2.477.826-5.45 1.157-8.918 1.487h-.166c-.495 0-1.156 0-1.651.165c-.991 0-1.982.165-3.138.33c-.33 0-.66.166-.991.166c-.165 0-.33 0-.496.165c-2.973.66-4.79 3.468-4.294 6.11c.496 2.313 2.643 3.8 5.285 3.8c.496 0 .826 0 1.322-.166c.165 0 .33 0 .33-.165c.33 0 .66-.165.99-.165c1.157-.33 1.983-.66 2.974-1.156c.495-.165.99-.496 1.486-.66h.165c3.138-1.157 5.946-2.148 8.589-2.478h.33c.991 0 1.652.495 2.147.826c.165 0 .165.165.33.165l2.313-.33c3.964 12.221 11.561 23.122 21.636 31.05c2.312 1.816 4.624 3.303 7.102 4.79l-.991 2.146c0 .166.165.166.165.33c.33.661.66 1.487.33 2.643c-.99 2.478-2.477 4.955-4.294 7.763v.165c-.33.496-.66.826-.99 1.321c-.661.826-1.157 1.652-1.818 2.643c-.165.165-.33.495-.495.826c0 .165-.165.33-.165.33c-1.321 2.808-.33 5.946 2.147 7.102c.66.33 1.321.496 1.982.496c1.982 0 3.964-1.322 4.955-3.139c0-.165.165-.33.165-.33c.165-.33.33-.66.495-.826c.496-1.156.661-1.982.991-2.973l.496-1.486c1.156-3.303 1.982-5.946 3.468-8.258c.66-.991 1.487-1.156 2.147-1.487c.165 0 .165 0 .33-.165l1.157-2.147c7.267 2.808 15.195 4.294 23.122 4.294c4.79 0 9.745-.495 14.37-1.651a73.402 73.402 0 0 0 8.588-2.478l.99 1.817c.166 0 .166 0 .331.165c.826.165 1.486.496 2.147 1.487c1.321 2.312 2.312 5.12 3.468 8.258v.165l.496 1.486c.33.991.495 1.982.99 2.973c.166.33.331.496.496.826c0 .165.166.33.166.33c.99 1.982 2.972 3.139 4.954 3.139c.661 0 1.322-.166 1.982-.496c1.156-.66 2.147-1.652 2.478-2.973c.33-1.321.33-2.808-.33-4.129c0-.165-.166-.165-.166-.33c-.165-.33-.33-.66-.495-.826c-.496-.991-1.156-1.817-1.817-2.643c-.33-.495-.66-.825-.99-1.32v-.166c-1.818-2.808-3.47-5.285-4.295-7.763c-.33-1.156 0-1.816.165-2.642c0-.165.165-.165.165-.33l-.826-1.982c8.754-5.12 16.186-12.388 21.802-21.306c2.973-4.625 5.285-9.745 6.936-14.865l1.982.33c.166 0 .166-.165.33-.165c.661-.33 1.157-.825 2.148-.825h.33c2.643.33 5.45 1.32 8.589 2.477h.165c.495.165.99.495 1.486.66c.991.496 1.817.826 2.973 1.157c.33 0 .66.165.991.165c.165 0 .33 0 .495.165c.496.165.826.165 1.322.165c2.477 0 4.624-1.651 5.285-3.798c0-1.982-1.817-4.625-4.79-5.45Zm-76.47-8.093l-7.267 3.469l-7.267-3.469l-1.816-7.762l4.954-6.276h8.093l4.955 6.276l-1.651 7.762Zm43.108-17.176a52.078 52.078 0 0 1 1.156 16.68l-25.27-7.266c-2.312-.66-3.633-2.973-3.138-5.285c.165-.661.496-1.322.991-1.817l19.985-18.003c2.807 4.625 4.954 9.91 6.276 15.69Zm-14.204-25.6l-21.636 15.36c-1.817 1.156-4.295.825-5.781-.991c-.495-.496-.66-1.157-.826-1.817l-1.486-26.922a50.13 50.13 0 0 1 29.729 14.37ZM116.769 78.12c1.817-.33 3.468-.66 5.285-.99l-1.486 26.425c-.165 2.312-1.982 4.294-4.46 4.294c-.66 0-1.486-.165-1.982-.495L92.16 91.665c6.772-6.772 15.195-11.397 24.609-13.544Zm-32.537 23.453l19.654 17.507c1.817 1.487 1.982 4.294.496 6.111c-.496.66-1.156 1.156-1.982 1.322l-25.6 7.432c-.991-11.231 1.486-22.627 7.432-32.372Zm-4.46 44.759l26.262-4.46c2.147-.165 4.129 1.322 4.624 3.469c.165.99.165 1.817-.165 2.643l-10.075 24.278c-9.249-5.946-16.681-15.03-20.645-25.93Zm60.285 32.867c-3.799.826-7.598 1.321-11.562 1.321c-5.78 0-11.396-.99-16.68-2.642l13.047-23.618c1.321-1.487 3.468-2.147 5.285-1.156a7.04 7.04 0 0 1 1.982 1.816l12.717 22.958c-1.486.495-3.138.826-4.79 1.321Zm32.206-22.957c-4.129 6.606-9.58 11.891-15.855 16.02l-10.405-24.94c-.496-1.981.33-4.128 2.312-5.12c.66-.33 1.486-.495 2.312-.495l26.426 4.46c-.991 3.633-2.643 6.937-4.79 10.075Z"
}, null, -1);
const _hoisted_5$3 = [
  _hoisted_2$7,
  _hoisted_3$6,
  _hoisted_4$3
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_5$3);
}
var LogosKubernetes = { name: "logos-kubernetes", render: render$7 };
const _hoisted_1$6 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$6 = /* @__PURE__ */ createStaticVNode('<path fill="none" d="M19.513 25.173c-.068 0-.136 0-.2-.01c.065.006.132.01.2.01Zm-.594-.086a1.93 1.93 0 0 0 .392.076a1.93 1.93 0 0 1-.392-.076Zm1.172 2.424Z"></path><path fill="#f0d6b7" d="M7.436 14.214A.832.832 0 0 1 7.6 14.1a.581.581 0 0 0-.164.114Zm2.976 4.039c.06.421.24 4.164 2.766 6.25a15.465 15.465 0 0 0 1.549.162c.28-.6 1.312-.554 1.985-.4a6.648 6.648 0 0 1-2.176-1.778a4.466 4.466 0 0 1-1.472-2.656c1.348 1.87 2.462 3.5 4.913 4.326c1.855.622 4.021-.285 5.446-1.286a6.258 6.258 0 0 0 1.365-1.68a14.242 14.242 0 0 0 2.145-8.621a9.567 9.567 0 0 0-.5-3.446c-.453-.908-1.984-1.72-2.88-.9a1.07 1.07 0 0 1-.016-.246c-.143.134-.23.232-.23.232a1.209 1.209 0 0 1-.122-.487a1.551 1.551 0 0 1 1.5-1.5a8.674 8.674 0 0 0-1.479-1.563a10.49 10.49 0 0 0-6.047-.222a8.06 8.06 0 0 0-5.975 5.4a14.085 14.085 0 0 0-.388 2.263c-.031.884.416 1.655.45 2.617c-.239.394-.969.443-1.474.416a6.836 6.836 0 0 0-.136-.566a5.158 5.158 0 0 0-1.265-.5a1.719 1.719 0 0 1 1.009 2.038c-.373-.213-.462-1.15-.9-1.177c-.626-.038-.512 1.216-.509 1.95a2.291 2.291 0 0 1-.19-2.213c-.284-.139-.444.061-.6.217c-.222 1.036-.547 1.873.062 2.92a1.734 1.734 0 0 0 1.414.6c.567-.056.706-.624 1.324-.618a.513.513 0 0 1 .431.468Zm6.449 1.947l-.3-.061s-.314-1.1-.163-1.306c.08-.107.52-.268 1.136.028c-.004.001-.734.123-.673 1.339Zm5.706 1.341a5.27 5.27 0 0 1-3.426-.014a4.687 4.687 0 0 1-1.283-1.427c-.155-.2-.927-.708-.012-.709c.717 1.8 3.18 1.592 5.257 1.543a1.111 1.111 0 0 1-.536.608Zm.3-1.6a4.016 4.016 0 0 1 0-1.063a8.538 8.538 0 0 0 2.96-1.185a3.425 3.425 0 0 1-2.961 2.246Zm2.756-8.073c-.183.061-1.37.762-1.278-.122a1.348 1.348 0 0 1 1.026-1.077a3.037 3.037 0 0 1 0-.4h.079a17.146 17.146 0 0 0 1.172 2.29c-.317.738-2.4 1.39-2.366.066c.45-.2 1.227-.04 1.626-.291c-.094-.257-.2-.5-.3-.756Zm-5.187 4.75a.719.719 0 0 1 .046.1c.091-.507.259-1.1.548-1.013a.684.684 0 0 1 .5.638a6.908 6.908 0 0 0-.948.738c.065.3.144.6.523.668c1.106.189 2.393-.677 3.189-.979c.493-.832-.043-1.138-.487-1.673c-.91-1.1-2.13-2.456-2.086-4.1c.368-.267.4.407.452.53a15.006 15.006 0 0 0 2.543 3.486c.214.234.567.459.606.614c.113.451-.294.991-.247 1.29a6.587 6.587 0 0 1-4.466 1.4a1.322 1.322 0 0 1-.175-1.702Zm1.958 2.321A4.933 4.933 0 0 1 22.47 20c-1.811.09-3.952-.358-4.427-1.629a10.285 10.285 0 0 0 4.35.565Zm-4.256-8.648a6.954 6.954 0 0 0 .977 1.829c.228.222.67.492.451 1.109a1.406 1.406 0 0 1-.642.534c-.79.233-2.631.048-2.008-.937c.653.03 1.532.424 2.02-.05a9.848 9.848 0 0 1-.322-.551c-.5.316-1.874.33-1.874-.479c0-.852 1.339-1.034 1.339-1.034l.01.024a1.11 1.11 0 0 1 .048-.448Zm-3.224-2.928c1.195-.815 1.8-.35 2.1.188a.568.568 0 0 1 .274.828c-1.658-.386-2.482.694-2.985 1.814c-.129.234-.136.068-.21-.136a.392.392 0 0 1-.061-.136a.551.551 0 0 0-.092-.121c-.24-.247-.365-1.524.974-2.437Z"></path><path fill="#335061" d="M6.283 29.28h8.753c-.04-.135-.079-.268-.118-.394a12.164 12.164 0 0 1-.476-1.948a21.079 21.079 0 0 1-3.087-1.655a2.353 2.353 0 0 1-.24-.257l-5.266 2.353s.189.754.434 1.901Z"></path><path fill="#6d6b6d" d="M9.433 7a2.125 2.125 0 0 1 .467-.088a3.817 3.817 0 0 0 .747.029c.494-.123.912-1.231 1.285-1.644a11.333 11.333 0 0 1 .941-.776A7.346 7.346 0 0 0 9.433 7Zm-2.256 5.586a2.147 2.147 0 0 1 3.145 1.747c.694-.018.259-.866.134-1.413c-.369-1.608.487-3.34.192-4.861c-3.866.578-3.648 3.547-3.471 4.527Z"></path><path fill="#dcd9d8" d="M13.249 3.851c-1.82.516-4.152 1.838-4.9 3.473A7.389 7.389 0 0 0 9.433 7a7.346 7.346 0 0 1 3.44-2.479a1.647 1.647 0 0 0 .159-.166c.192-.093.476-.086.487-.375c-.083-.089-.171-.157-.27-.129ZM7.5 8.985c-.8.885-.636 2.542-.538 3.721a2.321 2.321 0 0 1 .218-.12c-.18-.979-.394-3.949 3.471-4.527a2.81 2.81 0 0 0-.142-.493A4.409 4.409 0 0 0 7.5 8.985Z"></path><path fill="#f7e4cd" d="M10.412 18.253a.513.513 0 0 0-.42-.468c.335.668-.516.878-.6 1.355a3.837 3.837 0 0 0 .125.832a11.351 11.351 0 0 0 1.445 3.365a3.181 3.181 0 0 0 2.22 1.166c-2.53-2.085-2.71-5.829-2.77-6.25Zm11.113-1.915a.684.684 0 0 0-.5-.638c-.289-.082-.457.506-.548 1.013a2.376 2.376 0 0 1 .1.363a6.908 6.908 0 0 1 .948-.738Zm2.819-4.594c-.092.884 1.1.183 1.278.122l-.043-.286a3.235 3.235 0 0 1-.209-.913a1.348 1.348 0 0 0-1.026 1.077Zm-7.605 0c0 .809 1.371.795 1.874.479a4.053 4.053 0 0 1-.525-1.489l-.01-.024s-1.339.182-1.339 1.034Zm-9.547 3.141a.8.8 0 0 1-.125.109a1.221 1.221 0 0 1 .37-.781a.581.581 0 0 1 .163-.113a.979.979 0 0 1 .782-.032a5.158 5.158 0 0 1 1.265.5c-.193-.664-.524-1.263-1.208-1.338a2.034 2.034 0 0 0-2.2 1.963A3.858 3.858 0 0 0 7.254 17.8c-.61-1.042-.284-1.879-.062-2.915Zm9.973-10.442a10.49 10.49 0 0 1 6.047.222a4.127 4.127 0 0 0-.49-.329c-1.889-1.066-5.086-1.867-7.1-.866c-1.621.808-3.813 2.146-4.56 3.841a4.109 4.109 0 0 1 .123 2.532a8.06 8.06 0 0 1 5.98-5.4Zm6.023 3.285a1.209 1.209 0 0 0 .122.487s.087-.1.23-.232c.031-.734.865-1.152 1.832-.866c-.222-.286-.447-.589-.681-.889a1.551 1.551 0 0 0-1.503 1.5Zm-9.096 2.33c.074.2.082.37.21.136a.348.348 0 0 1-.21-.136Z"></path><path fill="#f7e4cd" d="M14.032 9.922a1.486 1.486 0 0 1 .114-.758a2.816 2.816 0 0 1 2.47-1.755a1.149 1.149 0 0 1 .4.143c-.3-.538-.9-1-2.1-.188c-1.338.913-1.217 2.19-.973 2.434a.551.551 0 0 1 .089.124Z"></path><path fill="#49728b" d="m5.849 27.379l5.266-2.353c-.386-.448-1.079-1.3-1.2-1.257a24.079 24.079 0 0 0-5.61 3.485a20.236 20.236 0 0 1 .81 2.026h1.168a61.417 61.417 0 0 0-.434-1.901Z"></path><path fill="#335061" d="M27 29.307a20.836 20.836 0 0 0 .548-2.058c.036-.181.106-.475.156-.756l-2.886-2.144a5.123 5.123 0 0 1 .13 3.9c.1.372.454.515.6.85c-.034.06-.068.119-.1.179h1.476a.149.149 0 0 1 .076.029Zm-2.559-1.233a1.081 1.081 0 0 0 .172-.381a1.081 1.081 0 0 1-.172.381Zm-.824-4.128a.948.948 0 0 1 .514-.106l-.238-.177a1.457 1.457 0 0 0-.276.283Z"></path><path fill="#49728b" d="M27.756 25.879c-.074-.537-.8-.935-1.172-1.266c-.684-.613-1.112-1.153-1.823-1.726a4.391 4.391 0 0 1-.869.776l.238.177a.932.932 0 0 1 .686.51l2.884 2.143a2.339 2.339 0 0 0 .056-.614Z"></path><path fill="#fff" d="M20.572 29.2a.438.438 0 0 0 .009.076h.479a.333.333 0 0 1 .666 0h.774v-.03a20.686 20.686 0 0 0-1.2-.593c-.424-.178-.728.547-.728.547Z"></path><path fill="#dcd9d8" d="M20.572 29.2s.3-.73.73-.548c.322.138.921.449 1.2.593c.01-.22.02-.44.034-.66c-.618.039-.961-.559-1.394-.605c-.378-.041-.7.435-1.19.229c-.113.124-.215.259-.33.381a6.313 6.313 0 0 1 .489.685h.476a.438.438 0 0 1-.015-.075Z"></path><path fill="#fff" d="M14.511 25.169a6.738 6.738 0 0 1-2.269-.4a.282.282 0 0 0 .017.421a7.657 7.657 0 0 0 2.14.578a1.748 1.748 0 0 0 .112-.599Z"></path><path fill="#dcd9d8" d="M14.357 26.069a1.233 1.233 0 0 1 .041-.3a7.657 7.657 0 0 1-2.14-.578a4.237 4.237 0 0 0 2.099.878Z"></path><path fill="#d33833" d="M24.613 27.693a2.963 2.963 0 0 0 .073-.87a7.057 7.057 0 0 0-.2-1.378a3 3 0 0 0-1.009.049c-.3.061-.609.122-.669.487s.122.548-.061.852s-.487.122-.791.3c-.207.124-.076.445.029.638a12.138 12.138 0 0 0 2.459.3a1.081 1.081 0 0 0 .169-.378Zm-9.051 1.526l.047.128c.014.04.029.093.042.139l-.009-.117Z"></path><path fill="#d33833" d="m19.563 27.925l.021-.527a1.309 1.309 0 0 1-.96-.074c-.937-.511-.05-.36-.382-1.038a3.236 3.236 0 0 0-1.224-.365c-1.228 0-1.7-.247-1.568 1.169c.069.76.131 1.519.191 2.28c.1.188.19.357.262.5a4.834 4.834 0 0 0 1.833-.559a21.007 21.007 0 0 0 1.827-1.386Zm.464-.725c.021.089.043.189.064.31a.7.7 0 1 0 .428-1.31a.953.953 0 0 1-.492 1Z"></path><path fill="#ef3d3a" d="M21.953 27.137c.3-.183.609 0 .791-.3s0-.487.061-.852s.365-.426.669-.487a3 3 0 0 1 1.009-.049a1.125 1.125 0 0 0-.348-.652c-.747-.436-2.056.825-2.665 1.093l-.057.023a1.694 1.694 0 0 1 .175.558a1.475 1.475 0 0 1 .412-.042a1.761 1.761 0 0 1 .276.033c.045.009.089.02.133.032a1.463 1.463 0 0 1 .243.092a4.209 4.209 0 0 0-.757.1a.7.7 0 0 0-.2.095a8.618 8.618 0 0 0-.035.9q.158.045.322.084c-.105-.183-.236-.504-.029-.628Zm-6.302 2.348c.051.183.095.348.253.385c-.072-.144-.163-.313-.262-.5Zm-.201-2.396c-.129-1.416.34-1.169 1.568-1.169a3.236 3.236 0 0 1 1.224.365c.332.678-.555.527.382 1.038a1.309 1.309 0 0 0 .96.074v-.063a3.039 3.039 0 0 0-.916-.29a3.5 3.5 0 0 0-.371-.036a1.555 1.555 0 0 1 .291-.106a3.285 3.285 0 0 0 .906-.281c0-.079.006-.158.009-.236a1.883 1.883 0 0 1-.2-.027a1.565 1.565 0 0 1-.177-.044a1.585 1.585 0 0 1-.294-.127c-.178-.1-.331-.216-.525-.322a9.077 9.077 0 0 0-2.408-.881c-.921-.176-.929 1.105-.89 2.049c0 .1.008.192.013.28a6.585 6.585 0 0 0 .544 1.9l.079.15c-.063-.754-.126-1.514-.195-2.274Zm5.07-.889a1.009 1.009 0 0 0-.582.2a1.7 1.7 0 0 0 .007.412c.011.079.028.155.048.238l.031.131v.017a.953.953 0 0 0 .496-.998Z"></path><path fill="#231f20" d="M14.146 9.164a1.486 1.486 0 0 0-.114.758a.392.392 0 0 0 .061.136a.348.348 0 0 0 .21.136c.5-1.12 1.327-2.2 2.985-1.814a.568.568 0 0 0-.274-.828a1.149 1.149 0 0 0-.4-.143a2.816 2.816 0 0 0-2.468 1.755Zm10.106 3.463c-.032 1.324 2.049.672 2.366-.066a17.146 17.146 0 0 1-1.172-2.29h-.079a3.037 3.037 0 0 0 0 .4a3.235 3.235 0 0 0 .209.913c.095.256.205.5.3.756c-.397.247-1.176.09-1.624.287Zm-5.318.146c-.488.474-1.367.08-2.02.05c-.623.985 1.218 1.17 2.008.937a1.406 1.406 0 0 0 .642-.534c.219-.617-.223-.887-.451-1.109a6.954 6.954 0 0 1-.977-1.829a1.11 1.11 0 0 0-.049.445a4.053 4.053 0 0 0 .525 1.489c.114.21.227.399.322.551Zm1.671 5.542a6.587 6.587 0 0 0 4.466-1.4c-.047-.3.36-.84.247-1.29c-.039-.155-.392-.38-.606-.614a15.006 15.006 0 0 1-2.543-3.486c-.053-.123-.085-.8-.452-.53c-.044 1.642 1.176 3 2.086 4.1c.444.535.98.841.487 1.673c-.8.3-2.083 1.169-3.189.979c-.379-.065-.458-.365-.523-.668a2.376 2.376 0 0 0-.1-.363a.719.719 0 0 0-.046-.1a1.322 1.322 0 0 0 .173 1.699ZM7.6 14.1a.832.832 0 0 0-.159.111a1.221 1.221 0 0 0-.37.781a.8.8 0 0 0 .125-.109c.153-.156.313-.357.6-.217a2.291 2.291 0 0 0 .19 2.213c0-.733-.117-1.987.509-1.95c.438.027.527.964.9 1.177a1.719 1.719 0 0 0-1.017-2.036a.979.979 0 0 0-.778.03Zm15.268 4.775a4.016 4.016 0 0 0 0 1.063a3.425 3.425 0 0 0 2.962-2.249a8.538 8.538 0 0 1-2.962 1.186ZM22.47 20a4.933 4.933 0 0 0-.077-1.066a10.285 10.285 0 0 1-4.35-.562c.475 1.272 2.616 1.72 4.427 1.628Zm-4.624-.61c-.915 0-.143.51.012.709a4.687 4.687 0 0 0 1.284 1.428a5.27 5.27 0 0 0 3.426.014a1.111 1.111 0 0 0 .536-.609c-2.078.05-4.541.257-5.258-1.542Z"></path><path fill="#81b0c4" d="M24.96 29.28a1.709 1.709 0 0 0-1.042-.753a1.433 1.433 0 0 0-.918.12c-.008.2-.018.415-.031.632Z"></path><path fill="#f0d6b7" d="M21.971 24.749c-.686.061-1.493.373-2.252.419c-.069 0-.138.006-.206.006s-.136 0-.2-.01a1.93 1.93 0 0 1-.392-.076a1.666 1.666 0 0 1-.188-.07c0 .052-.071.033-.082.076a3.19 3.19 0 0 0 .485.322a2.218 2.218 0 0 0 .475.19a3.052 3.052 0 0 0 .816.09c.1 0 .212 0 .327-.009c.415-.303.783-.656 1.217-.938Z"></path><path fill="#81b0c4" d="m19.086 29.048l-.351.233h.527q-.086-.119-.176-.233Z"></path><path fill="#231f20" d="M4.681 29.769v-.335a.153.153 0 0 1 .153-.153h.283a20.236 20.236 0 0 0-.81-2.026a24.079 24.079 0 0 1 5.61-3.485c.118-.047.811.809 1.2 1.257a2.353 2.353 0 0 0 .24.257a21.079 21.079 0 0 0 3.087 1.655a12.164 12.164 0 0 0 .476 1.948c.039.126.078.26.118.394h.162a.153.153 0 0 1 .153.153v.158h.139a.153.153 0 0 1 .153.153V30h1.691v-.255a.153.153 0 0 1 .153-.153h.78v-.158a.153.153 0 0 1 .153-.153h.317l.351-.233q.09.114.176.233h.843a6.313 6.313 0 0 0-.489-.685c.115-.122.217-.256.33-.381c.492.206.812-.27 1.19-.229c.433.046.776.644 1.394.605c-.014.22-.024.44-.034.66v.03h.474c.012-.217.023-.429.031-.632a1.433 1.433 0 0 1 .918-.12a1.709 1.709 0 0 1 1.042.753h.481c.034-.06.069-.119.1-.179c-.143-.335-.495-.477-.6-.85a5.123 5.123 0 0 0-.13-3.9a.932.932 0 0 0-.686-.51a.948.948 0 0 0-.514.106a1.457 1.457 0 0 1 .275-.283a4.391 4.391 0 0 0 .869-.776c.712.573 1.141 1.112 1.824 1.725c.37.332 1.1.73 1.172 1.266a2.339 2.339 0 0 1-.054.614c-.051.281-.12.575-.156.756A20.836 20.836 0 0 1 27 29.307a.15.15 0 0 1 .072.127V30h.368c.258-.808.511-1.635.766-2.489a6.207 6.207 0 0 0 .478-2.187c-.078-.617-1.04-1.265-1.547-1.754c-.281-.271-1.593-1.267-1.669-1.64s.535-1.178.731-1.586a11.669 11.669 0 0 0 .621-1.788c1.032-3.627 1.137-8.611-.339-11.592a12.54 12.54 0 0 0-3.1-3.428c-2.3-1.742-6.563-1.935-9.339-.913a13.481 13.481 0 0 0-2.2.939c-1.818 1.066-3.748 1.78-4.287 3.928c-1.328.6-1.729 2.3-1.662 4.268a6.221 6.221 0 0 1 .149 1.227c-.037.184-.286.419-.336.538a5.3 5.3 0 0 0 .609 4.592A3.225 3.225 0 0 0 8.468 19.5a4.568 4.568 0 0 0 .447 1.672c.17.373.805 1.043.571 1.519a6.987 6.987 0 0 1-1.495.966c-1.158.695-2 1.12-3.066 1.89c-.692.5-1.773.562-1.6 1.71a17.869 17.869 0 0 0 .808 2.513c.025.078.053.155.08.232h.47Zm8.351-25.414a1.647 1.647 0 0 1-.159.166a11.333 11.333 0 0 0-.941.776c-.373.413-.79 1.521-1.285 1.644a3.817 3.817 0 0 1-.747-.029A2.125 2.125 0 0 0 9.433 7a7.389 7.389 0 0 1-1.084.325c.748-1.635 3.08-2.957 4.9-3.473c.1-.028.188.04.271.129c-.011.287-.296.281-.488.374Zm-2.385 3.7c.3 1.521-.561 3.254-.192 4.861c.125.546.56 1.394-.134 1.413a2.147 2.147 0 0 0-3.145-1.747a2.321 2.321 0 0 0-.218.12c-.1-1.179-.266-2.836.538-3.721a4.409 4.409 0 0 1 3.009-1.419a2.81 2.81 0 0 1 .142.497ZM7.254 17.8a3.858 3.858 0 0 1-1.022-2.6a2.034 2.034 0 0 1 2.2-1.963c.684.075 1.014.674 1.208 1.338c.054.187.1.379.136.566c.505.027 1.235-.022 1.474-.416c-.034-.962-.481-1.733-.45-2.617a14.085 14.085 0 0 1 .388-2.263a4.109 4.109 0 0 0-.123-2.532c.747-1.695 2.939-3.032 4.56-3.841c2.009-1 5.207-.2 7.1.866a4.127 4.127 0 0 1 .49.329a8.674 8.674 0 0 1 1.479 1.563c.234.3.459.6.681.889c-.967-.287-1.8.132-1.832.866a1.07 1.07 0 0 0 .016.246c.9-.821 2.427-.009 2.88.9a9.567 9.567 0 0 1 .5 3.446a14.242 14.242 0 0 1-2.145 8.621a6.258 6.258 0 0 1-1.365 1.68c-1.425 1-3.591 1.908-5.446 1.286c-2.451-.823-3.565-2.456-4.913-4.326a4.466 4.466 0 0 0 1.472 2.656a6.648 6.648 0 0 0 2.176 1.778c-.673-.158-1.7-.208-1.985.4a15.465 15.465 0 0 1-1.549-.162a3.181 3.181 0 0 1-2.22-1.166a11.351 11.351 0 0 1-1.445-3.365a3.837 3.837 0 0 1-.125-.832c.088-.478.939-.687.6-1.355c-.618-.006-.757.562-1.324.618a1.734 1.734 0 0 1-1.416-.61Zm12.77 9.38l-.031-.131a2.787 2.787 0 0 1-.048-.238a1.7 1.7 0 0 1-.007-.412a1.009 1.009 0 0 1 .582-.2a.7.7 0 1 1-.428 1.31a5.135 5.135 0 0 0-.064-.31Zm-7.782-2.419a6.738 6.738 0 0 0 2.269.4a1.748 1.748 0 0 1-.112.6a1.233 1.233 0 0 0-.041.3a4.237 4.237 0 0 1-2.1-.882a.282.282 0 0 1-.016-.413Zm7.367.839a2.218 2.218 0 0 1-.475-.19a3.26 3.26 0 0 1-.485-.322c.011-.043.079-.024.082-.076a1.666 1.666 0 0 0 .188.07a1.93 1.93 0 0 0 .392.076a2.705 2.705 0 0 0 .406.004c.759-.046 1.566-.358 2.252-.419c-.433.283-.8.636-1.218.938a6.29 6.29 0 0 1-.327.009a3.052 3.052 0 0 1-.815-.085Zm-1.872 3.706a4.834 4.834 0 0 1-1.833.559c-.158-.037-.2-.2-.253-.385a2.722 2.722 0 0 0-.089-.267a6.585 6.585 0 0 1-.544-1.9c0-.088-.009-.182-.013-.28c-.039-.944-.031-2.225.89-2.049a9.077 9.077 0 0 1 2.408.881c.194.106.347.225.525.322a1.585 1.585 0 0 0 .294.127a1.565 1.565 0 0 0 .177.044a1.883 1.883 0 0 0 .2.027c0 .078-.006.157-.009.236a3.285 3.285 0 0 1-.906.281a1.555 1.555 0 0 0-.291.106a3.5 3.5 0 0 1 .371.036a3.039 3.039 0 0 1 .916.29v.063l-.021.527a21.007 21.007 0 0 1-1.822 1.387Zm4.245-1.536q-.164-.039-.322-.084a8.618 8.618 0 0 1 .035-.9a.7.7 0 0 1 .2-.095a4.209 4.209 0 0 1 .757-.1a1.463 1.463 0 0 0-.243-.092a1.843 1.843 0 0 0-.133-.032a1.761 1.761 0 0 0-.276-.038a1.475 1.475 0 0 0-.407.038a1.694 1.694 0 0 0-.175-.558l.057-.023c.609-.268 1.918-1.529 2.665-1.093a1.125 1.125 0 0 1 .348.652a7.057 7.057 0 0 1 .2 1.378a2.963 2.963 0 0 1-.073.87a1.081 1.081 0 0 1-.172.381a12.138 12.138 0 0 1-2.461-.3Z"></path><path fill="#f7e4cd" d="M17.53 18.862c-.616-.3-1.056-.135-1.136-.028c-.152.2.163 1.306.163 1.306l.3.061c-.057-1.217.673-1.339.673-1.339Z"></path><path fill="#1d1919" d="M21.393 28.961a.334.334 0 0 0-.333.319h.666a.334.334 0 0 0-.333-.319Z"></path><path fill="#231f20" d="M15.642 29.745a.153.153 0 0 0-.153-.153h-.139v.177a.153.153 0 0 1-.153.153H4.834a.153.153 0 0 1-.153-.153V30h10.961Zm11.276.177h-8.5a.153.153 0 0 1-.153-.153v-.177h-.78a.153.153 0 0 0-.153.153V30h9.737v-.231a.153.153 0 0 1-.151.153Z"></path><path fill="#231f20" d="M4.834 29.922H15.2a.153.153 0 0 0 .153-.153v-.335a.153.153 0 0 0-.153-.153H4.834a.153.153 0 0 0-.153.153v.335a.153.153 0 0 0 .153.153Zm13.432-.153a.153.153 0 0 0 .153.153h8.5a.153.153 0 0 0 .153-.153v-.335a.15.15 0 0 0-.072-.127a.149.149 0 0 0-.081-.026h-8.5a.153.153 0 0 0-.153.153v.335Z"></path>', 26);
const _hoisted_28$1 = [
  _hoisted_2$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_28$1);
}
var VscodeIconsFileTypeJenkins = { name: "vscode-icons-file-type-jenkins", render: render$6 };
const _hoisted_1$5 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#9d5125",
  d: "M30 19.152v1.273c0 2.307-2.545 4.693-5.648 4.693H7.648C4.506 25.118 2 22.771 2 20.424v-1.272Z"
}, null, -1);
const _hoisted_3$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#f58535",
  d: "M12.778 6.782A7.112 7.112 0 0 1 19.3 11a3.638 3.638 0 0 1 2.068-.636a3.583 3.583 0 0 1 3.619 3.5A5.69 5.69 0 0 1 30 18.993v.477c0 2.347-2.545 4.693-5.688 4.693H7.648C4.506 24.163 2 21.816 2 19.47v-.477a5.527 5.527 0 0 1 3.619-4.853v-.2a7.129 7.129 0 0 1 7.159-7.158Z"
}, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#fff",
  d: "m9 15.095l-1.869 6.523h1.113l.438-1.591h1.909l.4 1.591H12.1l-1.75-6.523Zm-.159 4.1l.8-3.222l.756 3.222Zm7.954 1.031h-.039l-.875-5.131h-1.114l-.835 5.091h-.04l-.875-5.091h-1.034l1.273 6.562h1.193l.835-4.931h.04l.835 4.931h1.233l1.313-6.562h-1.074l-.836 5.131zm5.29-2.148l-.716-.239c-.716-.278-.994-.6-.994-1.153a.9.9 0 1 1 1.79 0v.119H23.2v-.159c0-.676-.159-1.71-1.869-1.71a1.8 1.8 0 0 0-2.031 1.869a1.729 1.729 0 0 0 1.392 1.79l.716.239a1.1 1.1 0 0 1 .955 1.153a.928.928 0 0 1-.994.955q-1.074 0-1.074-1.193v-.159h-1.034v.159a1.786 1.786 0 0 0 1.989 1.989c1.312 0 2.187-.557 2.187-1.949a1.728 1.728 0 0 0-1.352-1.711Z"
}, null, -1);
const _hoisted_5$2 = [
  _hoisted_2$5,
  _hoisted_3$5,
  _hoisted_4$2
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_5$2);
}
var VscodeIconsFileTypeAws = { name: "vscode-icons-file-type-aws", render: render$5 };
const _hoisted_1$4 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 295"
};
const _hoisted_2$4 = ["id"];
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFEED7"
}, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#BDBFC2"
}, null, -1);
const _hoisted_5$1 = [
  _hoisted_3$4,
  _hoisted_4$1
];
const _hoisted_6 = ["id"];
const _hoisted_7 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFF",
  "stop-opacity": ".8"
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FFF",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_9 = [
  _hoisted_7,
  _hoisted_8
];
const _hoisted_10 = ["id"];
const _hoisted_11 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFEED7"
}, null, -1);
const _hoisted_12 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#BDBFC2"
}, null, -1);
const _hoisted_13 = [
  _hoisted_11,
  _hoisted_12
];
const _hoisted_14 = ["id"];
const _hoisted_15 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFEED7"
}, null, -1);
const _hoisted_16 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#BDBFC2"
}, null, -1);
const _hoisted_17 = [
  _hoisted_15,
  _hoisted_16
];
const _hoisted_18 = ["id"];
const _hoisted_19 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFF",
  "stop-opacity": ".65"
}, null, -1);
const _hoisted_20 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FFF",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_21 = [
  _hoisted_19,
  _hoisted_20
];
const _hoisted_22 = ["id"];
const _hoisted_23 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFF",
  "stop-opacity": ".65"
}, null, -1);
const _hoisted_24 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FFF",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_25 = [
  _hoisted_23,
  _hoisted_24
];
const _hoisted_26 = ["id"];
const _hoisted_27 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFEED7"
}, null, -1);
const _hoisted_28 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#BDBFC2"
}, null, -1);
const _hoisted_29 = [
  _hoisted_27,
  _hoisted_28
];
const _hoisted_30 = ["id"];
const _hoisted_31 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFEED7"
}, null, -1);
const _hoisted_32 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#BDBFC2"
}, null, -1);
const _hoisted_33 = [
  _hoisted_31,
  _hoisted_32
];
const _hoisted_34 = ["id"];
const _hoisted_35 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFF",
  "stop-opacity": ".8"
}, null, -1);
const _hoisted_36 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FFF",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_37 = [
  _hoisted_35,
  _hoisted_36
];
const _hoisted_38 = ["id"];
const _hoisted_39 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFF",
  "stop-opacity": ".65"
}, null, -1);
const _hoisted_40 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FFF",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_41 = [
  _hoisted_39,
  _hoisted_40
];
const _hoisted_42 = ["id"];
const _hoisted_43 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFF",
  "stop-opacity": ".65"
}, null, -1);
const _hoisted_44 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FFF",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_45 = [
  _hoisted_43,
  _hoisted_44
];
const _hoisted_46 = ["id"];
const _hoisted_47 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFF",
  "stop-opacity": ".65"
}, null, -1);
const _hoisted_48 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FFF",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_49 = [
  _hoisted_47,
  _hoisted_48
];
const _hoisted_50 = ["id"];
const _hoisted_51 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFA63F"
}, null, -1);
const _hoisted_52 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FF0"
}, null, -1);
const _hoisted_53 = [
  _hoisted_51,
  _hoisted_52
];
const _hoisted_54 = ["id"];
const _hoisted_55 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFEED7"
}, null, -1);
const _hoisted_56 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#BDBFC2"
}, null, -1);
const _hoisted_57 = [
  _hoisted_55,
  _hoisted_56
];
const _hoisted_58 = ["id"];
const _hoisted_59 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFA63F"
}, null, -1);
const _hoisted_60 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FF0"
}, null, -1);
const _hoisted_61 = [
  _hoisted_59,
  _hoisted_60
];
const _hoisted_62 = ["id"];
const _hoisted_63 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFF",
  "stop-opacity": ".65"
}, null, -1);
const _hoisted_64 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FFF",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_65 = [
  _hoisted_63,
  _hoisted_64
];
const _hoisted_66 = ["id"];
const _hoisted_67 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFF",
  "stop-opacity": ".65"
}, null, -1);
const _hoisted_68 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FFF",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_69 = [
  _hoisted_67,
  _hoisted_68
];
const _hoisted_70 = ["id"];
const _hoisted_71 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFF",
  "stop-opacity": ".65"
}, null, -1);
const _hoisted_72 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FFF",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_73 = [
  _hoisted_71,
  _hoisted_72
];
const _hoisted_74 = ["id"];
const _hoisted_75 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFA63F"
}, null, -1);
const _hoisted_76 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FF0"
}, null, -1);
const _hoisted_77 = [
  _hoisted_75,
  _hoisted_76
];
const _hoisted_78 = ["id"];
const _hoisted_79 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#FFF",
  "stop-opacity": ".65"
}, null, -1);
const _hoisted_80 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#FFF",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_81 = [
  _hoisted_79,
  _hoisted_80
];
const _hoisted_82 = ["id"];
const _hoisted_83 = /* @__PURE__ */ createElementVNode("feOffset", {
  in: "SourceAlpha",
  result: "shadowOffsetOuter1"
}, null, -1);
const _hoisted_84 = /* @__PURE__ */ createElementVNode("feGaussianBlur", {
  in: "shadowOffsetOuter1",
  result: "shadowBlurOuter1",
  stdDeviation: "6.5"
}, null, -1);
const _hoisted_85 = [
  _hoisted_83,
  _hoisted_84
];
const _hoisted_86 = { fill: "none" };
const _hoisted_87 = ["filter"];
const _hoisted_88 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#000",
  d: "M63.213 215.474c-11.387-16.346-13.591-69.606 12.947-102.39C89.292 97.383 92.69 86.455 93.7 71.67c.734-16.805-11.846-66.851 35.537-70.616c48.027-3.857 45.364 43.526 45.088 68.596c-.183 21.12 15.52 33.15 26.355 49.68c19.927 30.303 18.274 82.461-3.765 110.745c-27.916 35.354-51.791 20.018-67.678 21.304c-29.752 1.745-30.762 17.54-66.024-35.905Z"
}, null, -1);
const _hoisted_89 = ["fill"];
const _hoisted_90 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#000",
  stroke: "#000",
  "stroke-width": ".977",
  d: "M176.805 117.86c13.59 11.02 38.292 49.587 2.204 74.748c-11.846 7.806 10.468 32.508 23.049 19.927c43.618-43.894-1.102-94.308-16.53-111.664c-13.774-15.151-25.987 3.49-8.723 16.989Z"
}, null, -1);
const _hoisted_91 = ["fill"];
const _hoisted_92 = ["fill"];
const _hoisted_93 = ["fill"];
const _hoisted_94 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#000",
  d: "M133.186 57.712c-.092 5.234 2.48 9.458 5.877 9.458c3.306 0 6.153-4.224 6.245-9.366c.091-5.234-2.48-9.459-5.878-9.459c-3.397 0-6.152 4.225-6.244 9.367Zm-21.212.092c.459 4.316-1.194 7.989-3.582 8.356c-2.387.276-4.683-2.938-5.142-7.254c-.46-4.316 1.194-7.99 3.581-8.357c2.388-.275 4.684 2.939 5.143 7.255Z"
}, null, -1);
const _hoisted_95 = ["fill"];
const _hoisted_96 = ["fill"];
const _hoisted_97 = ["fill"];
const _hoisted_98 = ["fill"];
const _hoisted_99 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#000",
  stroke: "#000",
  "stroke-width": "1.25",
  d: "M79.925 122.727c-8.907 14.509-30.211 48.669-1.652 66.484c38.384 23.6 27.548 47.108-7.53 25.895c-49.404-29.568-5.97-89.257 13.774-112.03c22.59-25.529 4.316 4.683-4.592 19.65Z"
}, null, -1);
const _hoisted_100 = ["fill"];
const _hoisted_101 = ["fill"];
const _hoisted_102 = ["fill"];
const _hoisted_103 = ["fill"];
const _hoisted_104 = ["fill"];
const _hoisted_105 = ["fill"];
const _hoisted_106 = ["fill"];
const _hoisted_107 = ["fill"];
const _hoisted_108 = ["fill"];
const _hoisted_109 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#000",
  d: "M209.588 188.843c-2.755 4.776-13.958 12.306-21.396 10.285c-7.622-1.928-11.112-12.672-9.55-20.753c1.377-9.183 9.55-9.642 19.834-5.05c10.928 4.958 14.326 9.182 11.112 15.518Z"
}, null, -1);
const _hoisted_110 = ["fill"];
const _hoisted_111 = ["fill"];
const _hoisted_112 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "#E68C3F",
  "stroke-width": "2.5",
  d: "M148.43 75.986c-5.05.275-15.979 11.203-27.457 11.203c-11.479 0-18.366-10.652-20.11-10.652"
}, null, -1);
const _hoisted_113 = ["fill"];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, [
    createElementVNode("defs", null, [
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDb"],
        x1: "48.548%",
        x2: "51.047%",
        y1: "115.276%",
        y2: "41.364%"
      }, _hoisted_5$1, 8, _hoisted_2$4),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDc"],
        x1: "54.407%",
        x2: "46.175%",
        y1: "2.404%",
        y2: "90.542%"
      }, _hoisted_9, 8, _hoisted_6),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDd"],
        x1: "51.86%",
        x2: "47.947%",
        y1: "88.248%",
        y2: "9.748%"
      }, _hoisted_13, 8, _hoisted_10),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDe"],
        x1: "49.925%",
        x2: "49.924%",
        y1: "85.49%",
        y2: "13.811%"
      }, _hoisted_17, 8, _hoisted_14),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDf"],
        x1: "53.901%",
        x2: "45.956%",
        y1: "3.102%",
        y2: "93.895%"
      }, _hoisted_21, 8, _hoisted_18),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDg"],
        x1: "45.593%",
        x2: "54.811%",
        y1: "5.475%",
        y2: "93.524%"
      }, _hoisted_25, 8, _hoisted_22),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDh"],
        x1: "49.984%",
        x2: "49.984%",
        y1: "89.845%",
        y2: "40.632%"
      }, _hoisted_29, 8, _hoisted_26),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDi"],
        x1: "53.505%",
        x2: "42.746%",
        y1: "99.975%",
        y2: "23.545%"
      }, _hoisted_33, 8, _hoisted_30),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDj"],
        x1: "49.841%",
        x2: "50.241%",
        y1: "13.229%",
        y2: "94.673%"
      }, _hoisted_37, 8, _hoisted_34),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDk"],
        x1: "49.927%",
        x2: "50.727%",
        y1: "37.327%",
        y2: "92.782%"
      }, _hoisted_41, 8, _hoisted_38),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDl"],
        x1: "49.876%",
        x2: "49.876%",
        y1: "2.299%",
        y2: "81.204%"
      }, _hoisted_45, 8, _hoisted_42),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDm"],
        x1: "49.833%",
        x2: "49.824%",
        y1: "2.272%",
        y2: "71.799%"
      }, _hoisted_49, 8, _hoisted_46),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDn"],
        x1: "53.467%",
        x2: "38.949%",
        y1: "48.921%",
        y2: "98.1%"
      }, _hoisted_53, 8, _hoisted_50),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDo"],
        x1: "52.373%",
        x2: "47.579%",
        y1: "143.009%",
        y2: "-64.622%"
      }, _hoisted_57, 8, _hoisted_54),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDp"],
        x1: "30.581%",
        x2: "65.887%",
        y1: "34.024%",
        y2: "89.175%"
      }, _hoisted_61, 8, _hoisted_58),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDq"],
        x1: "59.572%",
        x2: "48.361%",
        y1: "-17.216%",
        y2: "66.118%"
      }, _hoisted_65, 8, _hoisted_62),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDr"],
        x1: "47.769%",
        x2: "51.373%",
        y1: "1.565%",
        y2: "104.313%"
      }, _hoisted_69, 8, _hoisted_66),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDs"],
        x1: "43.55%",
        x2: "57.114%",
        y1: "4.533%",
        y2: "92.827%"
      }, _hoisted_73, 8, _hoisted_70),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDt"],
        x1: "49.733%",
        x2: "50.558%",
        y1: "17.609%",
        y2: "99.385%"
      }, _hoisted_77, 8, _hoisted_74),
      createElementVNode("linearGradient", {
        id: _ctx.idMap["svgIDu"],
        x1: "50.17%",
        x2: "49.68%",
        y1: "2.89%",
        y2: "94.17%"
      }, _hoisted_81, 8, _hoisted_78),
      createElementVNode("filter", {
        id: _ctx.idMap["svgIDa"],
        width: "200%",
        height: "200%",
        x: "-50%",
        y: "-50%",
        filterUnits: "objectBoundingBox"
      }, _hoisted_85, 8, _hoisted_82)
    ]),
    createElementVNode("g", _hoisted_86, [
      createElementVNode("path", {
        fill: "#000",
        "fill-opacity": ".2",
        d: "M235.125 249.359c0 17.355-52.617 31.497-117.54 31.497S.044 266.806.044 249.359c0-17.356 52.618-31.498 117.54-31.498c64.924 0 117.45 14.142 117.541 31.498Z",
        filter: "url(#" + _ctx.idMap["svgIDa"] + ")",
        transform: "translate(10)"
      }, null, 8, _hoisted_87),
      _hoisted_88,
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDb"] + ")",
        d: "M169.1 122.451c8.265 7.622 29.661 41.69-4.224 62.995c-11.937 7.438 10.653 35.721 21.488 22.039c19.193-24.61 6.98-63.913-4.591-77.963c-7.714-9.917-19.651-13.774-12.672-7.07Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_89),
      _hoisted_90,
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDc"] + ")",
        d: "M147.245 25.02c-.459 12.581-14.325 23.51-30.946 24.52c-16.621 1.01-29.66-8.54-29.202-21.121c.46-12.581 14.326-23.509 30.947-24.519c16.62-.918 29.66 8.54 29.201 21.12Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_91),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDd"] + ")",
        d: "M107.483 54.957c.46 8.173-3.397 15.06-8.723 15.335c-5.326.276-10.01-6.06-10.469-14.233c-.459-8.173 3.398-15.06 8.724-15.335c5.326-.276 10.01 6.06 10.468 14.233Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_92),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDe"] + ")",
        d: "M117.125 55.6c.184 9.458 6.337 16.988 13.683 16.805c7.346-.184 13.131-7.99 12.948-17.54c-.184-9.458-6.336-16.988-13.683-16.804c-7.346.183-13.223 8.08-12.948 17.539Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_93),
      _hoisted_94,
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDf"] + ")",
        d: "M124.564 54.773c-.276 2.939 1.102 5.326 3.03 5.51c1.928.184 3.765-2.112 4.04-4.959c.276-2.938-1.102-5.326-3.03-5.51c-1.928-.183-3.765 2.113-4.04 4.96Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_95),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDg"] + ")",
        d: "M99.953 55.508c.276 2.388-.734 4.5-2.203 4.683c-1.47.184-2.847-1.653-3.123-4.132c-.275-2.388.735-4.5 2.204-4.683c1.47-.184 2.847 1.744 3.122 4.132Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_96),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDh"] + ")",
        d: "M71.027 145.684c6.52-14.785 20.386-40.772 20.662-60.883c0-15.978 47.843-19.835 51.7-3.856c3.856 15.978 13.59 39.853 19.834 51.424c6.245 11.478 24.335 48.118 5.051 80.074c-17.356 28.284-69.973 50.69-98.073-3.856c-9.55-18.917-7.806-42.333.826-62.903Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_97),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDi"] + ")",
        d: "M65.15 134.664c-5.601 10.56-17.172 38.293 11.112 53.445c30.395 16.162 30.303 49.312-6.245 33.517c-33.425-14.233-18.641-71.902-9.274-85.676c6.06-9.642 15.243-21.488 4.407-1.286Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_98),
      _hoisted_99,
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDj"] + ")",
        d: "M156.428 151.285c0 16.162-15.519 37.1-42.15 36.916c-27.456.183-39.118-20.754-39.118-36.916c0-16.161 18.182-29.293 40.588-29.293c22.498.092 40.68 13.132 40.68 29.293Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_100),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDk"] + ")",
        d: "M141.92 100.504c-.276 16.713-11.204 20.662-24.978 20.662c-13.775 0-23.784-2.48-24.978-20.662c0-11.387 11.203-17.998 24.978-17.998c13.774-.092 24.977 6.52 24.977 17.998Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_101),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDl"] + ")",
        d: "M58.63 126.216c9-13.682 28.008-34.711 3.582 2.939c-19.835 31.038-7.346 50.965-.918 56.474c18.549 16.53 17.814 27.64 3.214 18.917c-31.314-18.641-24.794-50.047-5.878-78.33Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_102),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDm"] + ")",
        d: "M188.936 131.818c-7.806-16.07-32.6-56.842 1.193-9.459c30.763 42.884 9.183 72.729 5.326 75.667c-3.856 2.939-16.804 8.908-13.04-1.469c3.858-10.377 22.958-30.028 6.52-64.74Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_103),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDn"] + ")",
        stroke: "#E68C3F",
        "stroke-width": "6.25",
        d: "M51.835 258.542c-20.57-10.928-50.414 2.112-39.578-27.457c2.204-6.704-3.214-16.805.275-23.325c4.133-7.989 13.04-6.244 18.366-11.57c5.234-5.51 8.54-15.06 18.366-13.59c9.734 1.468 16.254 13.406 23.049 28.099c5.05 10.468 22.865 25.253 21.672 37.007c-1.47 17.998-21.948 21.396-42.15 10.836Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_104),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDo"] + ")",
        d: "M201.608 189.119c-3.122 5.877-16.162 15.335-24.886 12.856c-8.815-2.388-12.856-15.795-11.111-25.988c1.653-11.386 11.111-12.03 23.05-6.336c12.855 6.336 16.712 11.662 12.947 19.468Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_105),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDp"] + ")",
        stroke: "#E68C3F",
        "stroke-width": "6.251",
        d: "M194.445 253.49c15.06-18.273 48.578-14.508 25.988-39.577c-4.775-5.418-3.306-16.989-9.183-21.947c-6.887-6.061-14.509-1.102-21.488-4.224c-6.979-3.398-14.325-9.918-22.865-5.327c-8.54 4.684-9.459 16.805-10.285 32.783c-.735 11.479-11.203 30.671-5.602 41.231c8.081 16.346 29.11 14.142 43.435-2.938Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_106),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDq"] + ")",
        d: "M187.925 229.064c23.325-34.435 5.97-34.16.092-36.823c-5.877-2.755-12.03-8.173-18.916-4.408c-6.888 3.857-7.255 13.775-7.439 26.814c-.275 9.367-8.08 25.07-3.397 33.793c5.693 10.193 19.467-4.591 29.66-19.376Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_107),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDr"] + ")",
        d: "M47.06 234.023c-34.895-22.59-18.55-30.303-13.315-33.885c6.336-4.591 6.428-13.407 14.233-12.58c7.806.826 12.397 10.468 17.631 22.406c3.857 8.54 17.264 19.927 16.254 29.753c-1.285 11.57-19.743 3.948-34.803-5.694Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_108),
      _hoisted_109,
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDs"] + ")",
        d: "M192.058 186.18c-1.745 3.306-9.091 8.54-14.234 7.163c-5.142-1.377-7.713-8.815-6.887-14.417c.735-6.336 6.244-6.704 13.223-3.581c7.53 3.49 9.918 6.428 7.898 10.835Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_110),
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDt"] + ")",
        stroke: "#E68C3F",
        "stroke-width": "3.75",
        d: "M97.107 66.344c3.673-3.398 12.58-13.774 29.477-2.939c3.122 2.02 5.693 2.204 11.662 4.775c12.03 4.96 6.336 16.897-6.52 20.937c-5.51 1.745-10.468 8.449-20.386 7.806c-8.54-.46-10.744-6.06-15.978-9.091c-9.275-5.234-10.652-12.305-5.602-16.07c5.051-3.765 6.98-5.143 7.347-5.418Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_111),
      _hoisted_112,
      createElementVNode("path", {
        fill: "url(#" + _ctx.idMap["svgIDu"] + ")",
        d: "M102.8 65.426c1.837-1.653 7.622-6.153 15.244-1.562c1.653.919 3.306 1.929 5.693 3.306c4.867 2.847 2.48 6.98-3.398 9.55c-2.663 1.102-7.07 3.49-10.376 3.306c-3.673-.367-6.153-2.755-8.54-4.316c-4.5-2.938-4.224-5.418-2.112-7.346c1.56-1.47 3.305-2.847 3.49-2.938Z",
        transform: "translate(10)"
      }, null, 8, _hoisted_113)
    ])
  ]);
}
var LogosLinuxTux = { name: "logos-linux-tux", render: render$4, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "svgIDa": "uicons-" + __randId(), "svgIDb": "uicons-" + __randId(), "svgIDc": "uicons-" + __randId(), "svgIDd": "uicons-" + __randId(), "svgIDe": "uicons-" + __randId(), "svgIDf": "uicons-" + __randId(), "svgIDg": "uicons-" + __randId(), "svgIDh": "uicons-" + __randId(), "svgIDi": "uicons-" + __randId(), "svgIDj": "uicons-" + __randId(), "svgIDk": "uicons-" + __randId(), "svgIDl": "uicons-" + __randId(), "svgIDm": "uicons-" + __randId(), "svgIDn": "uicons-" + __randId(), "svgIDo": "uicons-" + __randId(), "svgIDp": "uicons-" + __randId(), "svgIDq": "uicons-" + __randId(), "svgIDr": "uicons-" + __randId(), "svgIDs": "uicons-" + __randId(), "svgIDt": "uicons-" + __randId(), "svgIDu": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$3 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 257"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#00ADEF",
  d: "M0 36.357L104.62 22.11l.045 100.914l-104.57.595L0 36.358Zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302l104.494.677Zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246ZM256 135.6l-.033 121.191l-138.716-19.578l-.194-101.84L256 135.6Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
var LogosMicrosoftWindows = { name: "logos-microsoft-windows", render: render$3 };
const _hoisted_1$2 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#0065a9",
  d: "m29.01 5.03l-5.766-2.776a1.742 1.742 0 0 0-1.989.338L2.38 19.8a1.166 1.166 0 0 0-.08 1.647c.025.027.05.053.077.077l1.541 1.4a1.165 1.165 0 0 0 1.489.066L28.142 5.75A1.158 1.158 0 0 1 30 6.672v-.067a1.748 1.748 0 0 0-.99-1.575Z"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#007acc",
  d: "m29.01 26.97l-5.766 2.777a1.745 1.745 0 0 1-1.989-.338L2.38 12.2a1.166 1.166 0 0 1-.08-1.647c.025-.027.05-.053.077-.077l1.541-1.4A1.165 1.165 0 0 1 5.41 9.01l22.732 17.24A1.158 1.158 0 0 0 30 25.328v.072a1.749 1.749 0 0 1-.99 1.57Z"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "#1f9cf0",
  d: "M23.244 29.747a1.745 1.745 0 0 1-1.989-.338A1.025 1.025 0 0 0 23 28.684V3.316a1.024 1.024 0 0 0-1.749-.724a1.744 1.744 0 0 1 1.989-.339l5.765 2.772A1.748 1.748 0 0 1 30 6.6v18.8a1.748 1.748 0 0 1-.991 1.576Z"
}, null, -1);
const _hoisted_5 = [
  _hoisted_2$2,
  _hoisted_3$2,
  _hoisted_4
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_5);
}
var VscodeIconsFileTypeVscode = { name: "vscode-icons-file-type-vscode", render: render$2 };
var DeveloperCodingIlustration_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const target = ref(null);
    const { roll, tilt } = useParallax(target);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        ref_key: "target",
        ref: target,
        xmlns: "http://www.w3.org/2000/svg",
        "data-name": "Layer 1",
        width: "878.63037",
        height: "483",
        viewBox: "0 0 878.63037 483",
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
      }, _attrs))} data-v-81fb00fc><path d="M294.7164,621.20348c-19.51084,14.54436-25.04043,40.13465-25.04043,40.13465s26.10369,2.00928,45.61453-12.53511,25.04043-40.13465,25.04043-40.13465S314.22725,606.65916,294.7164,621.20348Z" transform="translate(-160.68481 -208.5)" class="fill-primary dark:fill-primary-dark" data-v-81fb00fc></path><path d="M302.84375,628.03207c-9.37708,22.45621-32.86178,34.02822-32.86178,34.02822s-8.28141-24.83665,1.09568-47.29286,32.86172-34.02822,32.86172-34.02822S312.22084,605.57587,302.84375,628.03207Z" transform="translate(-160.68481 -208.5)" class="fill-primary dark:fill-primary-dark" data-v-81fb00fc></path><path d="M864.18723,563.11405h0a194.65688,194.65688,0,0,1-1.63336-42.19544l1.63336-23.307h0c-9.00016,17.90831-6.96615,41.47881,0,65.50242Z" transform="translate(-160.68481 -208.5)" fill="#cacaca" style="${ssrRenderStyle({ "--index": "0" })}" class="smoke" data-v-81fb00fc></path><path d="M871.20535,567.013h0a143.0906,143.0906,0,0,1-.78588-25.11633l.78588-13.87323h0C866.87509,538.68318,867.85373,552.71319,871.20535,567.013Z" transform="translate(-160.68481 -208.5)" fill="#cacaca" style="${ssrRenderStyle({ "--index": "1" })}" class="smoke" data-v-81fb00fc></path><path d="M902.40062,584.17028v7.79791a2.3515,2.3515,0,0,1-2.33937,2.33937h-3.899a.777.777,0,0,0-.77979.77979v63.94288a2.35149,2.35149,0,0,1-2.33937,2.33937H845.47587a2.34116,2.34116,0,0,1-2.33938-2.33937V595.08735a.78216.78216,0,0,0-.77979-.77979H837.678a2.34117,2.34117,0,0,1-2.33937-2.33937v-7.79791a2.33615,2.33615,0,0,1,2.33937-2.33938h62.3833A2.3464,2.3464,0,0,1,902.40062,584.17028Z" transform="translate(-160.68481 -208.5)" class="fill-primary dark:fill-primary-dark" data-v-81fb00fc></path><rect x="682.52174" y="387.4451" width="52.24601" height="2.33937" fill="#e6e6e6" data-v-81fb00fc></rect><path d="M895.3825,630.36884c-17.48271,7.23486-35.15611,7.31459-53.0258,0v-16.481a83.27378,83.27378,0,0,1,53.0258,0Z" transform="translate(-160.68481 -208.5)" fill="#e6e6e6" data-v-81fb00fc></path><circle id="fff0188c-9915-4c0d-8339-9317a77083e8" data-name="Ellipse 276"${ssrRenderAttr("cx", 441.8526 + unref(tilt) * 20)}${ssrRenderAttr("cy", 99.21067 + unref(roll) * 20)} r="70.6659" fill="#feb8b8" data-v-81fb00fc></circle><path id="ac220ed6-7c3f-4d1e-8d82-3295770c496a-10" data-name="Path 1461" d="M668.54008,246.746a81.61376,81.61376,0,0,0-46.43-35.49166l-8.6754,6.33079v-8.22035a75.12281,75.12281,0,0,0-14.03207-.81741l-7.48468,6.7722V209.11a80.83444,80.83444,0,0,0-55.76328,33.16889c-16.25407,23.43225-18.99783,56.03165-3.01076,79.65191,4.38811-13.48715,9.71486-26.14193,14.1043-39.62775a39.91571,39.91571,0,0,0,10.39873.05039l5.339-12.45857,1.49177,11.93136c16.54971-1.44138,41.0963-4.60742,56.785-7.50784l-1.52581-9.15355,9.12769,7.606c4.80635-1.10624,7.66041-2.11028,7.42476-2.87726,11.66844,18.81119,25.94847,30.82566,37.61558,49.63682C678.33663,293.0056,683.43725,270.95065,668.54008,246.746Z"${ssrRenderAttr("transform", `translate(${-160.68481 + unref(tilt) * 20} ${-208.5 + unref(roll) * 20})`)} fill="#2f2e41" data-v-81fb00fc></path><path d="M754.51974,489.43043c-2.43-14.61929-4.93649-29.51921-11.73089-42.68893-4.46552-8.62629-11.55394-16.84664-21.1096-18.55231a20.4215,20.4215,0,0,1-5.49659-1.27245c-2.79985-1.34871-40.42516-22.82733-46.40535-26.56828-5.13471-3.21152-13.24023-9.158-17.32725-9.158-4.11163-.09038-19.87765,3.579-81.41374-1.23129,0,0-16.90485,6.66319-29.98543,14.74285-.19823-.13063-63.869,34.06031-66.261,33.97034-4.53005-.19075-8.74079,2.70971-11.33775,6.36219-2.5963,3.65239-3.81429,8.174-5.08948,12.54576,13.90677,30.97,26.6308,61.97961,40.5389,92.94963a7.93068,7.93068,0,0,1,1.00579,3.81454,9.30964,9.30964,0,0,1-1.7302,3.81453c-6.82034,10.95592-6.60348,24.736-5.85845,37.61284.74569,12.87686,1.66766,26.47839-4.087,38.02019-1.56523,3.16878-3.60075,6.06924-5.08948,9.238-3.48634,7.17681-4.74624,30.13086-2.71,37.84166l255.12065,7.30869C730.06748,673.1021,754.51974,489.43043,754.51974,489.43043Z"${ssrRenderAttr("transform", `translate(${-160.68481 + unref(tilt) * 10} ${-208.5 + unref(roll) * 5})`)} class="fill-primary dark:fill-primary-dark" data-v-81fb00fc></path><path id="bb46eb08-8e3e-4ac5-913b-26d221d967b9-11" data-name="Path 1421" d="M436.31023,551.90313a45.04293,45.04293,0,0,0-.15258,11.10851l3.65653,52.51275c.34331,4.94938.68117,9.88653,1.14573,14.82359.87734,9.58136,2.18792,19.08639,3.81455,28.57778a5.08966,5.08966,0,0,0,5.21639,4.94937c16.096,3.40585,32.72612,3.26965,49.15321,2.34185,25.067-1.39909,89.1978-4.0461,93.11589-9.13583s1.63483-13.32231-3.474-17.43793-89.73865-14.14932-89.73865-14.14932c.82693-6.55285,3.32139-12.72429,5.68777-18.946,4.25049-11.03491,8.22035-22.43228,8.29664-34.2533s-4.37719-24.24962-14.0607-31.02182c-7.9656-5.5597-18.22129-6.591-27.928-6.3621-7.06238.203-19.26485-1.48907-25.71553,1.27245C440.22288,538.431,437.26387,546.90479,436.31023,551.90313Z" transform="translate(-160.68481 -208.5)" fill="#fbbebe" data-v-81fb00fc></path><path id="efe93a1e-ccdd-49fd-af5f-e26394aa0937-12" data-name="Path 1430" d="M457.62676,458.523a13.16962,13.16962,0,0,0-2.82413,4.51753A213.58786,213.58786,0,0,0,436.862,536.35613a7.32926,7.32926,0,0,1-.82693,3.55028,15.53466,15.53466,0,0,1-1.87049,2.023,7.02422,7.02422,0,0,0,.84,9.89817q.17346.1463.35609.28121c2.09937-3.95082,7.125-5.24231,11.59215-5.58556,21.38872-1.692,42.28155,8.25852,63.73432,7.50784-1.51355-5.23-3.69057-10.25571-4.92486-15.54841-5.4589-23.50169,8.15632-49.08916-.19073-71.72579-1.6675-4.52979-4.45348-8.98325-8.84294-10.96818a23.55527,23.55527,0,0,0-5.66189-1.49858c-5.42075-.97952-16.21183-5.166-21.45275-3.48622-1.93452.624-2.69742,2.44268-4.3009,3.54209C462.87722,455.90186,459.64576,456.474,457.62676,458.523Z" transform="translate(-160.68481 -208.5)" class="fill-primary dark:fill-primary-dark" data-v-81fb00fc></path><path id="a38c3c09-000b-42b7-8619-0229d8aff5e9-13" data-name="Path 1421" d="M754.67242,536.1831c-6.45068-2.76152-18.65315-1.06948-25.71553-1.27245-9.70666-.22892-19.96235.8024-27.928,6.3621-9.68351,6.7722-14.137,19.2008-14.0607,31.02182s4.04615,23.21839,8.29664,34.2533c2.36638,6.22174,4.86084,12.39318,5.68777,18.946,0,0-84.62988,10.0337-89.73865,14.14932s-7.39205,12.34819-3.474,17.43793,126.17305,10.19983,142.2691,6.794a5.08966,5.08966,0,0,0,5.21639-4.94937c1.62663-9.49139,2.93721-18.99642,3.81455-28.57778.46456-4.93706.80242-9.87421,1.14573-14.82359l3.65653-52.51275a45.04293,45.04293,0,0,0-.15258-11.10851C762.73613,546.90479,759.77712,538.431,754.67242,536.1831Z" transform="translate(-160.68481 -208.5)" fill="#fbbebe" data-v-81fb00fc></path><path id="bd3879bf-5d05-49be-b690-c4d97e29a2ab-14" data-name="Path 1430" d="M734.68691,454.346c-1.60348-1.09941-2.36638-2.91813-4.3009-3.54209-5.24092-1.67976-16.032,2.5067-21.45275,3.48622a23.55527,23.55527,0,0,0-5.66189,1.49858c-4.38946,1.98493-7.17544,6.43839-8.84294,10.96818-8.34705,22.63663,5.26817,48.2241-.19073,71.72579-1.23429,5.2927-3.41131,10.3184-4.92486,15.54841,21.45277.75068,42.3456-9.19987,63.73432-7.50784,4.46712.34325,9.49278,1.63474,11.59215,5.58556q.18253-.13482.35609-.28121a7.02422,7.02422,0,0,0,.84005-9.89817,15.53466,15.53466,0,0,1-1.87049-2.023,7.32926,7.32926,0,0,1-.82693-3.55028,213.58786,213.58786,0,0,0-17.94066-73.31562,13.16962,13.16962,0,0,0-2.82413-4.51753C740.35424,456.474,737.12278,455.90186,734.68691,454.346Z" transform="translate(-160.68481 -208.5)" class="fill-primary dark:fill-primary-dark" data-v-81fb00fc></path><circle cx="420.92361" cy="438.81028" r="19.07275" fill="#fbbebe" data-v-81fb00fc></circle><circle cx="463.15612" cy="438.81028" r="19.07275" fill="#fbbebe" data-v-81fb00fc></circle><path d="M741.57233,690.28819H479.54154a11.55237,11.55237,0,0,1-11.53931-11.53864V519.78292a11.55237,11.55237,0,0,1,11.53931-11.53864H741.57233a11.55237,11.55237,0,0,1,11.5393,11.53864V678.74955A11.55237,11.55237,0,0,1,741.57233,690.28819Z" transform="translate(-160.68481 -208.5)" fill="#3f3d56" data-v-81fb00fc></path><circle id="bf1cdf42-3b4f-4239-91c9-f6802a29e918" data-name="Ellipse 263" cx="449.2365" cy="390.76627" r="7.63455" fill="#fff" data-v-81fb00fc></circle><polygon points="878.63 449.724 0 449.724 0 476.724 51.97 476.724 51.97 483 826.68 483 826.68 476.724 878.63 476.724 878.63 449.724" class="fill-primary dark:fill-primary-light" data-v-81fb00fc></polygon><path d="M537.55552,334.04923h0c-11.3546,0-20.55934-9.95244-20.55934-22.22945h0V300.705c0-12.277,9.20473-22.22945,20.55933-22.22945h0v55.57369Z"${ssrRenderAttr("transform", `translate(${-160.68481 + unref(tilt) * 20} ${-208.5 + unref(roll) * 20})`)} class="fill-primary dark:fill-primary-dark" data-v-81fb00fc></path><path d="M668.77923,278.47558h0c11.35461,0,20.55935,9.95245,20.55935,22.22943v11.11477c0,12.277-9.20472,22.22945-20.55935,22.22945h0V278.47558Z"${ssrRenderAttr("transform", `translate(${-160.68481 + unref(tilt) * 20} ${-208.5 + unref(roll) * 20})`)} class="fill-primary dark:fill-primary-dark" data-v-81fb00fc></path><path d="M679.55259,302.45164h-3.262c0-44.73-33.65638-81.12069-75.026-81.12069-41.36939,0-75.02605,36.3907-75.02605,81.12069h-3.262c0-46.6749,35.11988-84.64766,78.288-84.64766C644.433,217.804,679.55259,255.77677,679.55259,302.45164Z"${ssrRenderAttr("transform", `translate(${-160.68481 + unref(tilt) * 20} ${-208.5 + unref(roll) * 20})`)} class="fill-primary dark:fill-primary-dark" data-v-81fb00fc></path></svg>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/skills/DeveloperCodingIlustration.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var DeveloperCodingIlustration = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-81fb00fc"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const firstRingIcons = [
      VscodeIconsFileTypeHtml,
      VscodeIconsFileTypeCss,
      VscodeIconsFileTypeTypescriptOfficial,
      VscodeIconsFileTypeJsOfficial,
      VscodeIconsFileTypeVue,
      VscodeIconsFileTypeVitest,
      VscodeIconsFileTypeNuxt,
      VscodeIconsFileTypeWebpack,
      VscodeIconsFileTypeVite,
      VscodeIconsFileTypeCypress,
      VscodeIconsFileTypeJest,
      VscodeIconsFileTypeLighthouse,
      VscodeIconsFileTypeMdx,
      VscodeIconsFileTypeWindi,
      VscodeIconsFileTypeTailwind,
      VscodeIconsFileTypeEslint,
      VscodeIconsFileTypePrettier,
      VscodeIconsFileTypeStorybook,
      VscodeIconsFileTypeSvelte,
      VscodeIconsFileTypeReactjs,
      VscodeIconsFileTypeIonic,
      LogosOpenlayers,
      LogosMapboxIcon,
      LogosVuetifyjs
    ];
    const secondRingIcons = [
      VscodeIconsFileTypeJar,
      VscodeIconsFileTypeNode,
      VscodeIconsFileTypePython,
      VscodeIconsFileTypePgsql,
      LogosRedis,
      VscodeIconsFileTypeElastic,
      VscodeIconsFileTypeFirebase,
      LogosSpringIcon,
      VscodeIconsFileTypeNestjs,
      LogosKafkaIcon,
      LogosRabbitmqIcon,
      VscodeIconsFileTypeMakefile,
      VscodeIconsFileTypeNginx,
      VscodeIconsFileTypeGit,
      LogosGithubOctocat,
      MdiGithub,
      VscodeIconsFileTypeDocker,
      LogosKubernetes,
      VscodeIconsFileTypeJenkins,
      VscodeIconsFileTypeAws,
      LogosLinuxTux,
      LogosMicrosoftWindows,
      VscodeIconsFileTypeVscode
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JSection = _sfc_main$u;
      const _component_RotatorRing = __unplugin_components_1$1;
      _push(ssrRenderComponent(_component_JSection, mergeProps({
        title: "Skills",
        class: "relative min-w-full",
        style: { "aspect-ratio": "1" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_RotatorRing, { items: firstRingIcons }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RotatorRing, {
              items: secondRingIcons,
              small: "",
              delay: 500
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(DeveloperCodingIlustration, { class: "absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] h-auto max-w-full" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_RotatorRing, { items: firstRingIcons }),
              createVNode(_component_RotatorRing, {
                items: secondRingIcons,
                small: "",
                delay: 500
              }),
              createVNode(DeveloperCodingIlustration, { class: "absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] h-auto max-w-full" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/skills/SkillsSection.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var SkillsSection = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$b
});
function useOsmLayer(map) {
  const styles = {
    "amenity": {
      "parking": new Style({
        stroke: new Stroke({
          color: "rgba(170, 170, 170, 1.0)",
          width: 1
        }),
        fill: new Fill({
          color: "rgba(170, 170, 170, 0.3)"
        })
      })
    },
    "building": {
      ".*": new Style({
        zIndex: 100,
        stroke: new Stroke({
          color: "#3949ab",
          width: 1
        }),
        fill: new Fill({
          color: "#8e99f3"
        })
      })
    },
    "highway": {
      "service": new Style({
        stroke: new Stroke({
          color: "#171417",
          width: 1
        })
      }),
      ".*": new Style({
        stroke: new Stroke({
          color: "#171417",
          width: 2
        })
      })
    },
    "landuse": {
      "forest|grass|allotments": new Style({
        stroke: new Stroke({
          color: "#171417",
          width: 1
        }),
        fill: new Fill({
          color: "rgba(140, 208, 95, 0.3)"
        })
      })
    },
    "natural": {
      "tree": new Style({
        image: new Circle({
          radius: 2,
          fill: new Fill({
            color: "rgba(140, 208, 95, 1.0)"
          })
        })
      })
    }
  };
  const vectorSource = new VectorSource({
    format: new OSMXML(),
    loader: function(extent, resolution, projection, success, failure) {
      const epsg4326Extent = transformExtent(extent, projection, "EPSG:4326");
      const client = new XMLHttpRequest();
      client.open("POST", "https://overpass-api.de/api/interpreter");
      client.addEventListener("load", function() {
        const features = new OSMXML().readFeatures(client.responseText, {
          featureProjection: map.getView().getProjection()
        });
        vectorSource.addFeatures(features);
      });
      client.addEventListener("error", console.error);
      const query = "(node(" + epsg4326Extent[1] + "," + Math.max(epsg4326Extent[0], -180) + "," + epsg4326Extent[3] + "," + Math.min(epsg4326Extent[2], 180) + ");rel(bn)->.foo;way(bn);node(w)->.foo;rel(bw););out meta;";
      client.send(query);
    },
    strategy: bbox
  });
  const vector = new Vector({
    source: vectorSource,
    style: function(feature) {
      for (const key in styles) {
        const value = feature.get(key);
        if (value !== void 0) {
          for (const regexp in styles[key]) {
            if (new RegExp(regexp).test(value)) {
              return styles[key][regexp];
            }
          }
        }
      }
      return null;
    }
  });
  return vector;
}
var MapBackground_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const target = ref(null);
    onMounted(() => {
      console.log(target.value);
      const layers = [];
      const viewOptions = {
        center: [-52100, 4783075],
        maxZoom: 19,
        zoom: 17
      };
      const mapOptions = {
        layers,
        view: new View(viewOptions),
        controls: [],
        target: target.value
      };
      const map = new Map(mapOptions);
      map.addLayer(useOsmLayer(map));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "j-bg-map",
        ref_key: "target",
        ref: target
      }, _attrs))} data-v-7fab4140></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/MapBackground.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-7fab4140"]]);
const _hoisted_1$1 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var __unplugin_components_0 = { name: "mdi-heart", render: render$1 };
const _sfc_main$9 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_MdiHeart = __unplugin_components_0;
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_MapBackground = __unplugin_components_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center h-screen relative" }, _attrs))}><h1 class="text-4xl text-center tracking-wider leading-loose"> Crafted with <br>`);
  _push(ssrRenderComponent(_component_MdiHeart, { class: "text-red-400 inline mx-5" }, null, _parent));
  _push(`<br>by <span class="text-primary dark:text-primary-dark">JaHermosilla</span></h1>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MapBackground, { class: "absolute top-0 left-0 -z-1 p-4 opacity-10" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MapBackground, { class: "absolute top-0 left-0 -z-1 p-4 opacity-10" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/footer/FooterSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var FooterSection = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$3]]);
var FooterSection$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": FooterSection
});
const _hoisted_1 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
var __unplugin_components_2$1 = { name: "mdi-arrow-right", render };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    title: null,
    link: null,
    score: null
  },
  setup(__props) {
    const props = __props;
    const { title, link, score } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JCard = _sfc_main$n;
      const _component_JButton = _sfc_main$I;
      const _component_MdiArrowRight = __unplugin_components_2$1;
      _push(ssrRenderComponent(_component_JCard, mergeProps({ class: "bg-primary dark:bg-primary-dark" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><span style="${ssrRenderStyle({ "aspect-ratio": "1" })}" class="mr-2 h-12 rounded-sm font-bold text-xl app-background text-primary dark:text-primary-dark flex justify-center items-center"${_scopeId}>${ssrInterpolate(unref(score))}</span>`);
            _push2(ssrRenderComponent(_component_JButton, {
              component: "a",
              href: unref(link),
              target: "__blank",
              class: "flex text-light-50 dark:text-dark-900 !bg-transparent w-full h-full pr-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="flex-grow font-bold text-left font-semibold text-base"${_scopeId2}>${unref(title)}</h1>`);
                  _push3(ssrRenderComponent(_component_MdiArrowRight, { class: "ml-auto text-xl min-w-[32px]" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h1", {
                      innerHTML: unref(title),
                      class: "flex-grow font-bold text-left font-semibold text-base"
                    }, null, 8, ["innerHTML"]),
                    createVNode(_component_MdiArrowRight, { class: "ml-auto text-xl min-w-[32px]" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("span", {
                  style: { "aspect-ratio": "1" },
                  class: "mr-2 h-12 rounded-sm font-bold text-xl app-background text-primary dark:text-primary-dark flex justify-center items-center"
                }, toDisplayString(unref(score)), 1),
                createVNode(_component_JButton, {
                  component: "a",
                  href: unref(link),
                  target: "__blank",
                  class: "flex text-light-50 dark:text-dark-900 !bg-transparent w-full h-full pr-0"
                }, {
                  default: withCtx(() => [
                    createVNode("h1", {
                      innerHTML: unref(title),
                      class: "flex-grow font-bold text-left font-semibold text-base"
                    }, null, 8, ["innerHTML"]),
                    createVNode(_component_MdiArrowRight, { class: "ml-auto text-xl min-w-[32px]" })
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/stackexchange/QuestionAnswerCard.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var ResizableContainer_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    height: null,
    baseline: { type: Boolean, default: false },
    headerClass: { default: "" }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "114694fa": unref(height)
    }));
    const containerElement = ref(null);
    const alignmentClass = computed(() => props.baseline ? "items-baseline" : "items-center");
    const { height, showArrow, toggle: toggle2, opened } = useResizable(containerElement, props.height);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JButton = _sfc_main$I;
      const _component_MdiArrowDown = __unplugin_components_1$6;
      const _cssVars = { style: {
        "114694fa": unref(height)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps(_attrs, _cssVars))} data-v-7038fd78><header class="${ssrRenderClass([[unref(alignmentClass), props.headerClass], "flex px-1"])}" data-v-7038fd78><div data-v-7038fd78>`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "action", { toggle: unref(toggle2), showArrow: unref(showArrow) }, () => {
        if (unref(showArrow)) {
          _push(ssrRenderComponent(_component_JButton, {
            icon: "",
            "aria-label": "Toggle expanded content",
            class: "ml-auto w-[fit-content]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_MdiArrowDown, {
                  class: ["text-base transition-all transform duration-200 ease-in-out text-dark-50 dark:text-light-800 text-xl", { "rotate-180": unref(opened) }]
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_MdiArrowDown, {
                    class: ["text-base transition-all transform duration-200 ease-in-out text-dark-50 dark:text-light-800 text-xl", { "rotate-180": unref(opened) }]
                  }, null, 8, ["class"])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</header><div class="j-resizable-container" data-v-7038fd78><div class="relative" data-v-7038fd78>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ui/misc/ResizableContainer.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-7038fd78"]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-auto scrollbar-thin scrollbar-thumb-primary dark:scrollbar-thumb-primary-dark scrollbar-thumb-rounded-full" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ui/tabs/TabsContent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
var Tabs_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    items: null,
    selected: null
  },
  emits: ["update:selected"],
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "7e0e03d3": indicatorPosition.value.width,
      "8c8d574c": indicatorPosition.value.left
    }));
    const _selected = useVModel(props, "selected", emit);
    const container = ref(null);
    const scrollContainer = ref(null);
    const indicatorPosition = ref({ left: 0, width: 0 });
    const calculateIndicatorPosition = async () => {
      var _a, _b;
      await nextTick();
      const active = (_a = container.value) == null ? void 0 : _a.getElementsByClassName("active")[0];
      const { left = 0, width = 0 } = (active == null ? void 0 : active.getBoundingClientRect()) || {};
      const { left: containerLeft = 0 } = ((_b = container.value) == null ? void 0 : _b.getBoundingClientRect()) || {};
      indicatorPosition.value = { left: left - containerLeft, width };
    };
    const scrollToSelected = async () => {
      var _a;
      await nextTick();
      const active = (_a = container.value) == null ? void 0 : _a.getElementsByClassName("active")[0];
      scrollContainer.value.scrollLeft = active.getBoundingClientRect().left - container.value.getBoundingClientRect().left;
    };
    const listeners = [
      watch(() => [_selected.value, container.value], calculateIndicatorPosition),
      watch(() => _selected.value, scrollToSelected, { flush: "post" }),
      useEventListener("resize", calculateIndicatorPosition),
      useEventListener("resize", useDebounceFn(scrollToSelected, 200))
    ];
    onBeforeUnmount(() => {
      listeners.forEach((listener) => listener());
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JButton = _sfc_main$I;
      const _cssVars = { style: {
        "7e0e03d3": indicatorPosition.value.width,
        "8c8d574c": indicatorPosition.value.left
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "scrollContainer",
        ref: scrollContainer,
        style: { "scroll-behavior": "smooth" },
        class: "overflow-x-auto overflow-y-hidden max-w-full overflow scrollbar-thin mb-1"
      }, _attrs, _cssVars))} data-v-88b15074><div class="relative min-w-full w-[fit-content] flex justify-center border-b-[rgba(0,0,0,0.1)] border-b-1" data-v-88b15074><!--[-->`);
      ssrRenderList(props.items, (item) => {
        _push(ssrRenderComponent(_component_JButton, {
          class: ["menu-btn", { active: unref(_selected) === item.title }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><div class="indicator" data-v-88b15074></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ui/tabs/Tabs.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-88b15074"]]);
const stackoverflow = {
  questions: [
    {
      tags: [
        "python",
        "node.js",
        "electron",
        "electron-builder"
      ],
      view_count: 20167,
      score: 24,
      creation_date: 1481987402,
      question_id: 41199981,
      link: "https://stackoverflow.com/questions/41199981/run-python-script-in-electron-app",
      title: "Run python script in Electron app"
    },
    {
      tags: [
        "fullscreen",
        "progressive-web-apps",
        "manifest.json"
      ],
      view_count: 15925,
      score: 22,
      creation_date: 1533911107,
      question_id: 51788623,
      link: "https://stackoverflow.com/questions/51788623/hide-address-bar-in-progressive-web-applications",
      title: "Hide address bar in Progressive Web Applications"
    },
    {
      tags: [
        "javascript",
        "ecmascript-6",
        "declaration",
        "destructuring"
      ],
      view_count: 8293,
      score: 15,
      creation_date: 1471653474,
      question_id: 39049399,
      link: "https://stackoverflow.com/questions/39049399/destructuring-with-nested-objects-and-default-values",
      title: "Destructuring with nested objects and default values"
    },
    {
      tags: [
        "arrays",
        "postgresql",
        "sql-like",
        "any",
        "unnest"
      ],
      view_count: 14258,
      score: 11,
      creation_date: 1452177023,
      question_id: 34657669,
      link: "https://stackoverflow.com/questions/34657669/find-rows-where-text-array-contains-value-similar-to-input",
      title: "Find rows where text array contains value similar to input"
    },
    {
      tags: [
        "javascript",
        "arrays",
        "map-function"
      ],
      view_count: 3004,
      score: 9,
      creation_date: 1464363962,
      question_id: 37487602,
      link: "https://stackoverflow.com/questions/37487602/using-array-map-with-new-array-constructor",
      title: "Using Array.map with new Array constructor"
    },
    {
      tags: [
        "database",
        "postgresql",
        "event-triggers"
      ],
      view_count: 629,
      score: 5,
      creation_date: 1475957716,
      question_id: 39936923,
      link: "https://stackoverflow.com/questions/39936923/get-created-table-name",
      title: "Get created table name"
    },
    {
      tags: [
        "angular",
        "angular-pipe"
      ],
      view_count: 2463,
      score: 3,
      creation_date: 1489956890,
      question_id: 42892143,
      link: "https://stackoverflow.com/questions/42892143/using-custom-pipe-and-async-pipe-together",
      title: "Using custom pipe and async pipe together"
    },
    {
      tags: [
        "javascript",
        "node.js",
        "postgresql"
      ],
      view_count: 13468,
      score: 2,
      creation_date: 1452826777,
      question_id: 34803691,
      link: "https://stackoverflow.com/questions/34803691/node-js-and-pg-module-how-can-i-really-close-connection",
      title: "Node JS and pg module &#39;How can I really close connection?&#39;"
    },
    {
      tags: [
        "sql",
        "postgresql",
        "constraints",
        "postgis",
        "data-modeling"
      ],
      view_count: 64,
      score: 2,
      creation_date: 1459346618,
      question_id: 36311201,
      link: "https://stackoverflow.com/questions/36311201/postgresql-how-can-i-ensure-that-an-id-is-not-present-in-other-tables",
      title: "PostgreSQL - How can I ensure that an ID is not present in other tables?"
    },
    {
      tags: [
        "angular"
      ],
      view_count: 646,
      score: 2,
      creation_date: 1497717192,
      question_id: 44606895,
      link: "https://stackoverflow.com/questions/44606895/getdom-is-null-migrating-from-angular-2-to-angular-4",
      title: "getDOM() is null - Migrating from Angular 2 to Angular 4"
    },
    {
      tags: [
        "sql",
        "postgresql",
        "jooq"
      ],
      view_count: 78,
      score: 2,
      creation_date: 1606128199,
      question_id: 64966855,
      link: "https://stackoverflow.com/questions/64966855/cast-table-name-to-oid-using-jooq",
      title: "Cast table name to OID using jooq"
    },
    {
      tags: [
        "sql",
        "json",
        "postgresql",
        "aggregate-functions"
      ],
      view_count: 832,
      score: 1,
      creation_date: 1446577262,
      question_id: 33507030,
      link: "https://stackoverflow.com/questions/33507030/select-table-as-json-array",
      title: "Select table as json array"
    },
    {
      tags: [
        "javascript",
        "openlayers-3"
      ],
      view_count: 501,
      score: 1,
      creation_date: 1447213901,
      question_id: 33643989,
      link: "https://stackoverflow.com/questions/33643989/why-openlayers-is-returning-projected-coordinates-on-map-click",
      title: "Why openlayers is returning projected coordinates on map click?"
    },
    {
      tags: [
        "javascript",
        "function",
        "loops",
        "scope"
      ],
      view_count: 34,
      score: 1,
      creation_date: 1467219362,
      question_id: 38105809,
      link: "https://stackoverflow.com/questions/38105809/different-variable-scoping-using-let-keyword-between-browsers",
      title: "Different variable scoping using &quot;let&quot; keyword between browsers"
    },
    {
      tags: [
        "javascript",
        "firefox",
        "strict"
      ],
      view_count: 392,
      score: 1,
      creation_date: 1467685235,
      question_id: 38194322,
      link: "https://stackoverflow.com/questions/38194322/why-firefox-is-injecting-use-strict-in-class-methods",
      title: "Why Firefox is injecting &quot;use strict&quot;; in class methods?"
    },
    {
      tags: [
        "sql",
        "postgresql"
      ],
      view_count: 241,
      score: 1,
      creation_date: 1486400198,
      question_id: 42073185,
      link: "https://stackoverflow.com/questions/42073185/how-can-alter-the-values-of-a-composite-type-column-inside-trigger-function-befo",
      title: "How can alter the values of a composite type column inside trigger function before insert?"
    },
    {
      tags: [
        "wait"
      ],
      view_count: 70,
      score: 0,
      creation_date: 1406059380,
      question_id: 24896801,
      link: "https://stackoverflow.com/questions/24896801/how-to-stop-an-app-until-a-button-is-pressed",
      title: "How to stop an app until a button is pressed?"
    },
    {
      tags: [
        "android",
        "nullpointerexception"
      ],
      view_count: 39,
      score: 0,
      creation_date: 1407508409,
      question_id: 25205914,
      link: "https://stackoverflow.com/questions/25205914/nullpointerexception-trying-to-do-a-preferences-activity",
      title: "NullPointerException Trying to do a Preferences Activity"
    },
    {
      tags: [
        "xml",
        "if-statement",
        "schema"
      ],
      view_count: 1171,
      score: 0,
      creation_date: 1412517593,
      question_id: 26203243,
      link: "https://stackoverflow.com/questions/26203243/xml-schema-how-to-put-conditions-into-restrictions",
      title: "XML Schema, how to put &quot;conditions&quot; into restrictions?"
    },
    {
      tags: [
        "android",
        "onactivityresult"
      ],
      view_count: 49,
      score: 0,
      creation_date: 1424311519,
      question_id: 28597511,
      link: "https://stackoverflow.com/questions/28597511/triying-to-play-an-audio-from-the-sdcard",
      title: "Triying to play an Audio from the sdcard"
    },
    {
      tags: [
        "java",
        "android",
        "toast"
      ],
      view_count: 347,
      score: 0,
      creation_date: 1434903632,
      question_id: 30966681,
      link: "https://stackoverflow.com/questions/30966681/toast-message-from-java-class",
      title: "Toast message from Java class"
    },
    {
      tags: [
        "android",
        "surfaceview"
      ],
      view_count: 51,
      score: 0,
      creation_date: 1437929636,
      question_id: 31639541,
      link: "https://stackoverflow.com/questions/31639541/what-im-doing-wrong-with-surfaceview",
      title: "What I&#39;m doing wrong with SurfaceView?"
    },
    {
      tags: [
        "javascript",
        "if-statement"
      ],
      view_count: 62,
      score: 0,
      creation_date: 1461772795,
      question_id: 36895029,
      link: "https://stackoverflow.com/questions/36895029/ifa-1-is-true",
      title: "if(a = 1) is true"
    },
    {
      tags: [
        "javascript",
        "class",
        "constructor",
        "openlayers-3"
      ],
      view_count: 561,
      score: 0,
      creation_date: 1463851578,
      question_id: 37366036,
      link: "https://stackoverflow.com/questions/37366036/javascript-get-class-name",
      title: "JavaScript - Get class name"
    },
    {
      tags: [
        "javascript",
        "console",
        "tostring"
      ],
      view_count: 199,
      score: 0,
      creation_date: 1464718982,
      question_id: 37553010,
      link: "https://stackoverflow.com/questions/37553010/accesing-tostring-object-method-inside-console-log",
      title: "Accesing toString() Object method inside console.log"
    },
    {
      tags: [
        "html",
        "css",
        "openlayers-3"
      ],
      view_count: 597,
      score: 0,
      creation_date: 1474387755,
      question_id: 39598984,
      link: "https://stackoverflow.com/questions/39598984/openlayers-3-mouseposition-hover-issue",
      title: "OpenLayers 3 - MousePosition hover issue"
    },
    {
      tags: [
        "sql",
        "postgresql",
        "types",
        "postgis"
      ],
      view_count: 73,
      score: 0,
      creation_date: 1474474745,
      question_id: 39621724,
      link: "https://stackoverflow.com/questions/39621724/how-to-get-the-right-colum-type-name",
      title: "How to get the right colum type name?"
    },
    {
      tags: [
        "postgresql",
        "ddl",
        "postgresql-9.5",
        "event-triggers"
      ],
      view_count: 123,
      score: 0,
      creation_date: 1476029590,
      question_id: 39945717,
      link: "https://stackoverflow.com/questions/39945717/how-to-handle-an-alter-table-rename",
      title: "How to handle an ALTER TABLE RENAME?"
    },
    {
      tags: [
        "postgresql",
        "triggers",
        "plpgsql"
      ],
      view_count: 52,
      score: 0,
      creation_date: 1476651251,
      question_id: 40075358,
      link: "https://stackoverflow.com/questions/40075358/run-delete-query-in-trigger-function",
      title: "Run DELETE query in trigger function"
    },
    {
      tags: [
        "angular",
        "firebase",
        "angularfire2"
      ],
      view_count: 361,
      score: 0,
      creation_date: 1501797320,
      question_id: 45495151,
      link: "https://stackoverflow.com/questions/45495151/ngondestroy-is-not-called-ngfor-and-async-pipe",
      title: "ngOnDestroy is not called (ngFor and Async Pipe)"
    }
  ],
  answers: [
    {
      score: 21,
      creation_date: 1482073267,
      answer_id: 41209644,
      link: "https://stackoverflow.com/questions/41199981/run-python-script-in-electron-app/41209644#41209644",
      title: "Run python script in Electron app"
    },
    {
      score: 14,
      creation_date: 1467069866,
      answer_id: 38064744,
      link: "https://stackoverflow.com/questions/38064644/es6-destructuring-object-assignment-function-parameter-default-value/38064744#38064744",
      title: "ES6 destructuring object assignment function parameter default value"
    },
    {
      score: 6,
      creation_date: 1461213215,
      answer_id: 36759736,
      link: "https://stackoverflow.com/questions/36759581/static-variable-through-multiple-api-calls-with-express/36759736#36759736",
      title: "Static variable through multiple API calls with Express"
    },
    {
      score: 5,
      creation_date: 1463618256,
      answer_id: 37312148,
      link: "https://stackoverflow.com/questions/37312070/node-js-consecutive-method-calls-with-nested-callback-formatting/37312148#37312148",
      title: "Node.js consecutive method calls with nested callback formatting"
    },
    {
      score: 5,
      creation_date: 1484176486,
      answer_id: 41602502,
      link: "https://stackoverflow.com/questions/41592816/how-to-calculate-a-distance-between-two-points-along-a-path/41602502#41602502",
      title: "How to calculate a distance between two points along a path?"
    },
    {
      score: 5,
      creation_date: 1504920842,
      answer_id: 46126377,
      link: "https://stackoverflow.com/questions/46126086/recursive-asynchronous-javascript-for-nested-data-structure-processing/46126377#46126377",
      title: "recursive asynchronous JavaScript for nested data structure processing"
    },
    {
      score: 4,
      creation_date: 1465215682,
      answer_id: 37657345,
      link: "https://stackoverflow.com/questions/37653446/express-4-after-redirect-i-cant-get-my-static-file/37657345#37657345",
      title: "Express 4: After redirect i can&#39;t get my static file"
    },
    {
      score: 4,
      creation_date: 1467678229,
      answer_id: 38193657,
      link: "https://stackoverflow.com/questions/38114655/openlayers-3-show-vector-labels-on-hover/38193657#38193657",
      title: "OpenLayers 3: Show vector labels on hover"
    },
    {
      score: 3,
      creation_date: 1437671890,
      answer_id: 31594075,
      link: "https://stackoverflow.com/questions/31593965/what-is-wrong-with-this-android-code-that-uses-the-parse-com-database-to-store-d/31594075#31594075",
      title: "What is wrong with this Android code that uses the parse.com database to store data"
    },
    {
      score: 3,
      creation_date: 1464016967,
      answer_id: 37394821,
      link: "https://stackoverflow.com/questions/37394691/modifying-html-element-created-in-jquery-inside-jquery/37394821#37394821",
      title: "Modifying html element created in jQuery, inside jQuery"
    },
    {
      score: 3,
      creation_date: 1464649124,
      answer_id: 37534577,
      link: "https://stackoverflow.com/questions/37534517/sorting-array-of-objects-based-on-index-in-other-array/37534577#37534577",
      title: "Sorting Array of Objects based on Index in other array"
    },
    {
      score: 3,
      creation_date: 1465395674,
      answer_id: 37705177,
      link: "https://stackoverflow.com/questions/37705108/javascript-e-preventdefault-not-working-on-submit/37705177#37705177",
      title: "Javascript e.preventDefault(); not working on submit()"
    },
    {
      score: 3,
      creation_date: 1465945686,
      answer_id: 37823560,
      link: "https://stackoverflow.com/questions/37823530/how-do-i-create-sub-arrays-from-a-json-object/37823560#37823560",
      title: "How do I create sub arrays from a JSON object"
    },
    {
      score: 3,
      creation_date: 1467731779,
      answer_id: 38207092,
      link: "https://stackoverflow.com/questions/38206915/filter-array-to-have-unique-values/38207092#38207092",
      title: "Filter array to have unique values"
    },
    {
      score: 3,
      creation_date: 1489958753,
      answer_id: 42892481,
      link: "https://stackoverflow.com/questions/42892143/using-custom-pipe-and-async-pipe-together/42892481#42892481",
      title: "Using custom pipe and async pipe together"
    },
    {
      score: 3,
      creation_date: 1509660271,
      answer_id: 47085341,
      link: "https://stackoverflow.com/questions/47085140/how-to-set-multiple-selectedindexes-without-jquery/47085341#47085341",
      title: "How to set multiple selectedIndexes without jQuery?"
    },
    {
      score: 2,
      creation_date: 1460451096,
      answer_id: 36568142,
      link: "https://stackoverflow.com/questions/36311201/postgresql-how-can-i-ensure-that-an-id-is-not-present-in-other-tables/36568142#36568142",
      title: "PostgreSQL - How can I ensure that an ID is not present in other tables?"
    },
    {
      score: 2,
      creation_date: 1460815870,
      answer_id: 36665229,
      link: "https://stackoverflow.com/questions/36665090/node-js-sql-function-doesnt-return-value/36665229#36665229",
      title: "Node.js - SQL function doesn&#39;t return value"
    },
    {
      score: 2,
      creation_date: 1463387930,
      answer_id: 37249809,
      link: "https://stackoverflow.com/questions/37249531/adding-keypress-events-that-use-an-existing-function/37249809#37249809",
      title: "Adding keypress Events that use an existing function"
    },
    {
      score: 2,
      creation_date: 1463669462,
      answer_id: 37326865,
      link: "https://stackoverflow.com/questions/37326654/cant-change-span-text-in-ajaxstart/37326865#37326865",
      title: "Cant change span text in ajaxStart"
    },
    {
      score: 2,
      creation_date: 1464884136,
      answer_id: 37597115,
      link: "https://stackoverflow.com/questions/37596913/prior-statements-not-getting-executed-on-sync-ajax-call/37597115#37597115",
      title: "Prior statements not getting executed on sync ajax call"
    },
    {
      score: 2,
      creation_date: 1465058727,
      answer_id: 37632695,
      link: "https://stackoverflow.com/questions/37632665/cant-set-headers-after-they-are-sent-posting-new-users-through-nodejs/37632695#37632695",
      title: "Can&#39;t set headers after they are sent - Posting new Users through NodeJs"
    },
    {
      score: 2,
      creation_date: 1465788186,
      answer_id: 37781383,
      link: "https://stackoverflow.com/questions/37781292/restore-pre-selected-values-in-chosen-select/37781383#37781383",
      title: "Restore pre-selected values in Chosen Select"
    },
    {
      score: 2,
      creation_date: 1467146683,
      answer_id: 38085973,
      link: "https://stackoverflow.com/questions/38085911/reuse-javascript-script-for-multiple-html-forms-on-same-page/38085973#38085973",
      title: "Reuse JavaScript script for multiple html forms on same page"
    },
    {
      score: 2,
      creation_date: 1467152755,
      answer_id: 38087288,
      link: "https://stackoverflow.com/questions/38086320/how-can-i-manage-node-js-async-variable-scope/38087288#38087288",
      title: "How can I manage Node.js async variable scope?"
    },
    {
      score: 2,
      creation_date: 1467821354,
      answer_id: 38228680,
      link: "https://stackoverflow.com/questions/38228510/remove-object-property-based-on-array-values/38228680#38228680",
      title: "Remove object property based on array values"
    },
    {
      score: 2,
      creation_date: 1470669383,
      answer_id: 38832901,
      link: "https://stackoverflow.com/questions/38832540/how-do-i-insert-more-that-one-triple-in-a-marklogic-json-document/38832901#38832901",
      title: "How do I insert more that one triple in a Marklogic JSON document?"
    },
    {
      score: 2,
      creation_date: 1472506431,
      answer_id: 39215570,
      link: "https://stackoverflow.com/questions/39179103/saving-multiple-files-using-promise/39215570#39215570",
      title: "Saving multiple files using Promise"
    },
    {
      score: 2,
      creation_date: 1500818859,
      answer_id: 45265992,
      link: "https://stackoverflow.com/questions/45265708/how-express-routes-similar-url-links/45265992#45265992",
      title: "How Express routes similar url links?"
    },
    {
      score: 2,
      creation_date: 1527348029,
      answer_id: 50544232,
      link: "https://stackoverflow.com/questions/39089619/openlayers-3-drawing-grid-lines-graticule-with-predefined-units-on-the-custom/50544232#50544232",
      title: "Openlayers 3: Drawing grid lines (graticule) with predefined units on the custom static image"
    }
  ]
};
var stackExchangeData = {
  stackoverflow,
  "es.stackoverflow": {
    questions: [
      {
        tags: [
          "javascript",
          "operador"
        ],
        view_count: 227,
        score: 5,
        creation_date: 1472313370,
        question_id: 21843,
        link: "https://es.stackoverflow.com/questions/21843/cu%c3%a1l-es-la-magia-de-este-algoritmo",
        title: "&#191;Cu&#225;l es la magia de este algoritmo?"
      },
      {
        tags: [
          "javascript",
          "nodejs",
          "express",
          "autenticaci&#243;n"
        ],
        view_count: 1687,
        score: 5,
        creation_date: 1473782789,
        question_id: 23643,
        link: "https://es.stackoverflow.com/questions/23643/node-express-c%c3%b3mo-restringir-el-acceso-a-usuarios-que-no-est%c3%a9n-conectados-a-l",
        title: "Node/Express - &#191;C&#243;mo restringir el acceso a usuarios que no est&#233;n conectados a la misma red?"
      },
      {
        tags: [
          "funciones",
          "typescript"
        ],
        view_count: 505,
        score: 4,
        creation_date: 1470236547,
        question_id: 18508,
        link: "https://es.stackoverflow.com/questions/18508/typescript-llamadas-a-funciones-sin-par%c3%a9ntesis",
        title: "TypeScript - &#191;Llamadas a funciones sin par&#233;ntesis?"
      },
      {
        tags: [
          "python",
          "python-3.x",
          "algoritmos"
        ],
        view_count: 64,
        score: 3,
        creation_date: 1507299725,
        question_id: 107764,
        link: "https://es.stackoverflow.com/questions/107764/simplificar-un-documento-pesado-1-gb",
        title: "Simplificar un documento pesado (1 GB)"
      },
      {
        tags: [
          "javascript",
          "angularjs-2.0",
          "typescript",
          "system.js"
        ],
        view_count: 8935,
        score: 2,
        creation_date: 1469802487,
        question_id: 18118,
        link: "https://es.stackoverflow.com/questions/18118/angular-2-variable-din%c3%a1mica-en-un-componente",
        title: "Angular 2 - Variable din&#225;mica en un Componente"
      },
      {
        tags: [
          "javascript",
          "html5",
          "css3"
        ],
        view_count: 323,
        score: 2,
        creation_date: 1474465965,
        question_id: 24542,
        link: "https://es.stackoverflow.com/questions/24542/c%c3%b3mo-hacer-un-div-transparente-a-los-eventos-del-rat%c3%b3n",
        title: "&#191;C&#243;mo hacer un &lt;div&gt; transparente a los eventos del rat&#243;n?"
      },
      {
        tags: [
          "javascript",
          "excepciones"
        ],
        view_count: 94,
        score: 2,
        creation_date: 1483373135,
        question_id: 41978,
        link: "https://es.stackoverflow.com/questions/41978/distinta-sintaxis-para-throw",
        title: "Distinta sintaxis para throw"
      },
      {
        tags: [
          "sql",
          "postgresql",
          "postgis"
        ],
        view_count: 257,
        score: 2,
        creation_date: 1486230305,
        question_id: 47768,
        link: "https://es.stackoverflow.com/questions/47768/por-qu%c3%a9-tengo-que-comprobar-si-un-valor-es-null",
        title: "&#191;Por qu&#233; tengo que comprobar si un valor es NULL?"
      },
      {
        tags: [
          "python",
          "python-2.7",
          "pyqt4"
        ],
        view_count: 299,
        score: 2,
        creation_date: 1494692864,
        question_id: 69706,
        link: "https://es.stackoverflow.com/questions/69706/establecer-la-ventana-activa-en-un-qmdiarea",
        title: "Establecer la ventana activa en un QmdiArea"
      },
      {
        tags: [
          "javascript",
          "regex"
        ],
        view_count: 373,
        score: 2,
        creation_date: 1520093980,
        question_id: 143095,
        link: "https://es.stackoverflow.com/questions/143095/c%c3%b3mo-puedo-repetir-un-grupo-de-captura",
        title: "C&#243;mo puedo repetir un grupo de captura"
      },
      {
        tags: [
          "aws",
          "amazon-s3"
        ],
        view_count: 32,
        score: 2,
        creation_date: 1524483759,
        question_id: 158339,
        link: "https://es.stackoverflow.com/questions/158339/path-based-routing-de-pa%c7%b5inas-web-est%c3%a1ticas-en-s3",
        title: "Path-based Routing de pa\u01F5inas web est&#225;ticas en s3"
      },
      {
        tags: [
          "java",
          "json",
          "spring"
        ],
        view_count: 587,
        score: 2,
        creation_date: 1554477573,
        question_id: 251951,
        link: "https://es.stackoverflow.com/questions/251951/deserializar-json-que-contiene-una-lista-de-objetos-de-diferente-tipo",
        title: "Deserializar json que contiene una lista de objetos de diferente tipo"
      },
      {
        tags: [
          "javascript",
          "funciones",
          "loops"
        ],
        view_count: 115,
        score: 1,
        creation_date: 1467213915,
        question_id: 15406,
        link: "https://es.stackoverflow.com/questions/15406/bucles-y-operaciones-as%c3%adncronas",
        title: "Bucles y operaciones as&#237;ncronas"
      },
      {
        tags: [
          "typescript",
          "sobrecarga",
          "constructor"
        ],
        view_count: 4310,
        score: 1,
        creation_date: 1472664922,
        question_id: 22186,
        link: "https://es.stackoverflow.com/questions/22186/sobrecarga-de-constructores-en-typescript",
        title: "Sobrecarga de constructores en TypeScript"
      },
      {
        tags: [
          "javascript",
          "html5"
        ],
        view_count: 1092,
        score: 1,
        creation_date: 1478122498,
        question_id: 31411,
        link: "https://es.stackoverflow.com/questions/31411/input-de-tipo-file-que-seleccione-automaticamente-archivos",
        title: "&#191;Input de tipo file que seleccione automaticamente archivos?"
      },
      {
        tags: [
          "python",
          "regex"
        ],
        view_count: 546,
        score: 1,
        creation_date: 1478741621,
        question_id: 32878,
        link: "https://es.stackoverflow.com/questions/32878/regex-para-extraer-ciertos-valores-n%c3%bamericos",
        title: "Regex para extraer ciertos valores n&#250;mericos"
      },
      {
        tags: [
          "c++",
          "loops"
        ],
        view_count: 106,
        score: 1,
        creation_date: 1481301712,
        question_id: 38364,
        link: "https://es.stackoverflow.com/questions/38364/contador-aumenta-inesperadamente-dentro-de-un-bucle",
        title: "Contador aumenta inesperadamente dentro de un bucle"
      },
      {
        tags: [
          "python",
          "python-3.x",
          "matrices",
          "numpy"
        ],
        view_count: 8700,
        score: 1,
        creation_date: 1481673383,
        question_id: 39070,
        link: "https://es.stackoverflow.com/questions/39070/c%c3%b3mo-insertar-filas-a-una-matriz-de-numpy",
        title: "&#191;C&#243;mo insertar filas a una matriz de numpy?"
      },
      {
        tags: [
          "css",
          "css3"
        ],
        view_count: 235,
        score: 1,
        creation_date: 1488837660,
        question_id: 53527,
        link: "https://es.stackoverflow.com/questions/53527/cambiar-progresivamente-la-opacidad-de-divs-mediante-css",
        title: "Cambiar progresivamente la opacidad de divs mediante CSS"
      },
      {
        tags: [
          "python",
          "python-3.x",
          "excepciones"
        ],
        view_count: 161,
        score: 1,
        creation_date: 1508518133,
        question_id: 111029,
        link: "https://es.stackoverflow.com/questions/111029/capturar-keyboardinterrupt",
        title: "Capturar KeyboardInterrupt"
      },
      {
        tags: [
          "javascript",
          "css",
          "electron"
        ],
        view_count: 482,
        score: 0,
        creation_date: 1473089005,
        question_id: 22650,
        link: "https://es.stackoverflow.com/questions/22650/problema-al-utilizar-height-100-en-una-aplicaci%c3%b3n-usando-electron",
        title: "problema al utilizar height 100% en una aplicaci&#243;n usando electron"
      },
      {
        tags: [
          "angularjs-2.0",
          "system.js",
          "angular-material"
        ],
        view_count: 178,
        score: 0,
        creation_date: 1487695740,
        question_id: 50788,
        link: "https://es.stackoverflow.com/questions/50788/comportamiento-inesperado-usando-angular-material",
        title: "Comportamiento inesperado usando Angular Material"
      },
      {
        tags: [
          "postgresql"
        ],
        view_count: 81,
        score: 0,
        creation_date: 1492887137,
        question_id: 64798,
        link: "https://es.stackoverflow.com/questions/64798/backup-no-almacena-event-triggers-ni-extensiones",
        title: "Backup no almacena event triggers ni extensiones"
      },
      {
        tags: [
          "typescript"
        ],
        view_count: 357,
        score: 0,
        creation_date: 1494192444,
        question_id: 68099,
        link: "https://es.stackoverflow.com/questions/68099/compilar-archivos-typescript-desde-un-script-en-package-json",
        title: "Compilar archivos typescript desde un script en package.json"
      }
    ],
    answers: [
      {
        score: 28,
        creation_date: 1472570626,
        answer_id: 22079,
        link: "https://es.stackoverflow.com/questions/22073/c%c3%b3mo-obtener-la-diferencia-de-d%c3%adas-entre-dos-fechas-en-javascript/22079#22079",
        title: "&#191;C&#243;mo obtener la diferencia de d&#237;as entre dos fechas en JavaScript?"
      },
      {
        score: 8,
        creation_date: 1489776810,
        answer_id: 56120,
        link: "https://es.stackoverflow.com/questions/56116/cuando-conviene-utilizar-var-let-y-const-en-ecma-script-6/56120#56120",
        title: "&#191;Cuando conviene utilizar var, let y const en ECMA Script 6?"
      },
      {
        score: 8,
        creation_date: 1511625228,
        answer_id: 120155,
        link: "https://es.stackoverflow.com/questions/119216/por-qu%c3%a9-no-genera-todos-los-colores-hexadecimales/120155#120155",
        title: "Por qu&#233; NO genera todos los colores hexadecimales?"
      },
      {
        score: 8,
        creation_date: 1522423308,
        answer_id: 151723,
        link: "https://es.stackoverflow.com/questions/151705/buscar-palabras-con-al-menos-una-letra-may%c3%bascula/151723#151723",
        title: "Buscar palabras con al menos una letra may&#250;scula"
      },
      {
        score: 7,
        creation_date: 1485823401,
        answer_id: 46883,
        link: "https://es.stackoverflow.com/questions/46823/hacer-el-efecto-de-un-texto-que-se-est%c3%a1-escribiendo-por-si-solo/46883#46883",
        title: "Hacer el efecto de un texto que se est&#225; escribiendo por si solo"
      },
      {
        score: 7,
        creation_date: 1510638564,
        answer_id: 117203,
        link: "https://es.stackoverflow.com/questions/117195/animaci%c3%b3n-css-con-cambios-no-progresivos/117203#117203",
        title: "Animaci&#243;n CSS con cambios no progresivos"
      },
      {
        score: 6,
        creation_date: 1510873040,
        answer_id: 118084,
        link: "https://es.stackoverflow.com/questions/117398/c%c3%b3mo-crear-par%c3%a1metros-opcionales/118084#118084",
        title: "C&#243;mo crear par&#225;metros opcionales?"
      },
      {
        score: 5,
        creation_date: 1507560995,
        answer_id: 108278,
        link: "https://es.stackoverflow.com/questions/108268/c%c3%b3mo-truncar-un-numero-a-2-decimales-en-javascript/108278#108278",
        title: "C&#243;mo truncar un numero a 2 decimales en Javascript"
      },
      {
        score: 5,
        creation_date: 1511190136,
        answer_id: 118795,
        link: "https://es.stackoverflow.com/questions/118785/c%c3%b3mo-obtener-el-c%c3%b3digo-escrito-en-javascript/118795#118795",
        title: "C&#243;mo obtener el c&#243;digo escrito en Javascript?"
      },
      {
        score: 4,
        creation_date: 1462889682,
        answer_id: 9523,
        link: "https://es.stackoverflow.com/questions/9471/jquery-datatables-no-permite-abrir-modal-dialog-despues-de-10-filas/9523#9523",
        title: "jquery DataTables no permite abrir modal dialog despues de 10 filas"
      },
      {
        score: 4,
        creation_date: 1465949806,
        answer_id: 13979,
        link: "https://es.stackoverflow.com/questions/13976/unir-arrays-sin-utilizar-el-m%c3%a9todo-concat-y-devolverlo-en-un-nuevo-array/13979#13979",
        title: "Unir Arrays sin utilizar el m&#233;todo concat y devolverlo en un nuevo Array"
      },
      {
        score: 4,
        creation_date: 1471868352,
        answer_id: 21268,
        link: "https://es.stackoverflow.com/questions/3582/diferencias-entre-ajax-anidadas-y-promises/21268#21268",
        title: "Diferencias entre AJAX anidadas y promises"
      },
      {
        score: 4,
        creation_date: 1489945365,
        answer_id: 56418,
        link: "https://es.stackoverflow.com/questions/56409/escribir-solamente-una-vez-cada-tecla-ignorando-las-repeticiones/56418#56418",
        title: "Escribir solamente una vez cada tecla, ignorando las repeticiones"
      },
      {
        score: 4,
        creation_date: 1511968970,
        answer_id: 121186,
        link: "https://es.stackoverflow.com/questions/118053/realizar-una-funci%c3%b3n-sincrona/121186#121186",
        title: "realizar una funci&#243;n sincrona"
      },
      {
        score: 4,
        creation_date: 1514842556,
        answer_id: 128185,
        link: "https://es.stackoverflow.com/questions/128181/html-css-alinear-input-radio/128185#128185",
        title: "HTML/CSS alinear input radio"
      },
      {
        score: 4,
        creation_date: 1523289074,
        answer_id: 154279,
        link: "https://es.stackoverflow.com/questions/154267/loop-infinito-con-promesa/154279#154279",
        title: "Loop infinito con promesa"
      },
      {
        score: 4,
        creation_date: 1525277684,
        answer_id: 160952,
        link: "https://es.stackoverflow.com/questions/160933/ignorar-errores-de-sintaxis-en-javascript/160952#160952",
        title: "ignorar errores de sintaxis en javascript"
      },
      {
        score: 3,
        creation_date: 1467480995,
        answer_id: 15707,
        link: "https://es.stackoverflow.com/questions/15689/c%c3%b3mo-hacer-un-men%c3%ba-desplegable-que-se-actualice-desde-un-%c3%banico-archivo/15707#15707",
        title: "&#191;C&#243;mo hacer un men&#250; desplegable que se actualice desde un &#250;nico archivo?"
      },
      {
        score: 3,
        creation_date: 1472565975,
        answer_id: 22066,
        link: "https://es.stackoverflow.com/questions/21987/como-unir-los-valores-de-un-objeto-de-un-json-a-un-array/22066#22066",
        title: "Como unir los valores de un objeto de un json a un array"
      },
      {
        score: 3,
        creation_date: 1473172314,
        answer_id: 22756,
        link: "https://es.stackoverflow.com/questions/22754/como-eliminar-la-posici%c3%b3n-de-un-vector-bidimensional-con-datos-vac%c3%ados-y-re-acom/22756#22756",
        title: "&#191;Como eliminar la posici&#243;n de un vector bidimensional con datos vac&#237;os y re acomodar su tama&#241;o?"
      },
      {
        score: 3,
        creation_date: 1481471253,
        answer_id: 38627,
        link: "https://es.stackoverflow.com/questions/38593/c%c3%b3mo-puedo-evitar-crear-un-indice-para-cada-objeto-en-mi-array/38627#38627",
        title: "&#191;C&#243;mo puedo evitar crear un indice para cada objeto en mi array?"
      },
      {
        score: 3,
        creation_date: 1485524886,
        answer_id: 46320,
        link: "https://es.stackoverflow.com/questions/46315/a%c3%b1adir-un-elemento-html-con-append-y-obtener-ese-elemento-sin-tener-que-buscarlo/46320#46320",
        title: "A&#241;adir un elemento html con append y obtener ese elemento sin tener que buscarlo"
      },
      {
        score: 3,
        creation_date: 1493388325,
        answer_id: 66172,
        link: "https://es.stackoverflow.com/questions/66164/json-obtener-dos-propiedades-distintas-de-dos-objetos-en-una-conversi%c3%b3n-con-str/66172#66172",
        title: "JSON: obtener dos propiedades distintas de dos objetos en una conversi&#243;n con stringify"
      },
      {
        score: 3,
        creation_date: 1498573364,
        answer_id: 81860,
        link: "https://es.stackoverflow.com/questions/44879/nombre-de-funci%c3%b3n-javascript-dentro-de-la-propia-funci%c3%b3n/81860#81860",
        title: "Nombre de funci&#243;n javascript dentro de la propia funci&#243;n"
      },
      {
        score: 3,
        creation_date: 1508771734,
        answer_id: 111588,
        link: "https://es.stackoverflow.com/questions/111584/permitir-que-el-archivo-gitignore-deje-subir-una-carpeta-con-los-archivos-que-t/111588#111588",
        title: "Permitir que el archivo .gitignore deje subir una carpeta con los archivos que tiene dentro"
      },
      {
        score: 3,
        creation_date: 1509706931,
        answer_id: 114432,
        link: "https://es.stackoverflow.com/questions/114414/transformar-puntos-cardinales-en-latitud-y-longitud-en-java/114432#114432",
        title: "Transformar puntos cardinales en latitud y longitud en java"
      },
      {
        score: 3,
        creation_date: 1512058840,
        answer_id: 121536,
        link: "https://es.stackoverflow.com/questions/121510/porcentaje-de-riego-en-mapa-google-maps-api-js/121536#121536",
        title: "Porcentaje de Riego en Mapa, Google Maps API Js"
      },
      {
        score: 3,
        creation_date: 1516202702,
        answer_id: 131698,
        link: "https://es.stackoverflow.com/questions/131684/herencia-en-javascript/131698#131698",
        title: "Herencia en JavaScript"
      },
      {
        score: 2,
        creation_date: 1463752872,
        answer_id: 10549,
        link: "https://es.stackoverflow.com/questions/10532/es-posible-hacer-que-una-funci%c3%b3n-ajax-devuelva-un-valor-de-retorno/10549#10549",
        title: "&#191;Es posible hacer que una funci&#243;n Ajax devuelva un valor de retorno?"
      },
      {
        score: 2,
        creation_date: 1464132872,
        answer_id: 10902,
        link: "https://es.stackoverflow.com/questions/10892/c%c3%b3mo-cambiar-color-de-background-simult%c3%a1neo-para-todos-los-usuarios-en-intervalo/10902#10902",
        title: "C&#243;mo cambiar color de background simult&#225;neo para todos los usuarios en intervalos de tiempo"
      }
    ]
  },
  "gis.stackexchange": {
    questions: [
      {
        tags: [
          "postgis",
          "polygon",
          "linestring",
          "centroids"
        ],
        view_count: 5421,
        score: 10,
        creation_date: 1462899591,
        question_id: 193027,
        link: "https://gis.stackexchange.com/questions/193027/postgis-get-a-point-inside-a-line-or-polygon",
        title: "PostGIS - Get a point inside a line or polygon"
      },
      {
        tags: [
          "geoserver",
          "sld",
          "getlegendgraphic"
        ],
        view_count: 1057,
        score: 6,
        creation_date: 1515669455,
        question_id: 267630,
        link: "https://gis.stackexchange.com/questions/267630/dynamic-label-in-sld-style",
        title: "Dynamic label in SLD Style"
      },
      {
        tags: [
          "raster",
          "gdal",
          "gdal-calc"
        ],
        view_count: 800,
        score: 4,
        creation_date: 1470661081,
        question_id: 206188,
        link: "https://gis.stackexchange.com/questions/206188/wrong-values-using-gdal-calc-py",
        title: "Wrong values using gdal_calc.py"
      },
      {
        tags: [
          "geoserver"
        ],
        view_count: 3437,
        score: 4,
        creation_date: 1526040252,
        question_id: 282560,
        link: "https://gis.stackexchange.com/questions/282560/layer-preview-not-working-over-https",
        title: "Layer Preview not working over HTTPS"
      },
      {
        tags: [
          "javascript",
          "openlayers"
        ],
        view_count: 620,
        score: 3,
        creation_date: 1455980297,
        question_id: 181580,
        link: "https://gis.stackexchange.com/questions/181580/knowing-if-map-has-specific-custom-control-in-openlayers-3",
        title: "Knowing if map has specific custom control in OpenLayers 3?"
      },
      {
        tags: [
          "geoserver",
          "style"
        ],
        view_count: 825,
        score: 3,
        creation_date: 1459527103,
        question_id: 187668,
        link: "https://gis.stackexchange.com/questions/187668/geoserver-cant-get-legendgraphic-of-wms-in-cascade",
        title: "Geoserver - Can&#39;t get LegendGraphic of WMS in Cascade"
      },
      {
        tags: [
          "geoserver",
          "labeling",
          "getlegendgraphic"
        ],
        view_count: 236,
        score: 3,
        creation_date: 1515068979,
        question_id: 266927,
        link: "https://gis.stackexchange.com/questions/266927/legendgraphic-and-label-placement",
        title: "LegendGraphic and Label placement"
      },
      {
        tags: [
          "geoserver",
          "geowebcache",
          "wmts"
        ],
        view_count: 149,
        score: 2,
        creation_date: 1462846495,
        question_id: 192925,
        link: "https://gis.stackexchange.com/questions/192925/simple-way-to-modify-geowebcache-capabilities",
        title: "Simple way to modify GeoWebCache Capabilities?"
      },
      {
        tags: [
          "javascript",
          "openlayers",
          "geolocation"
        ],
        view_count: 8238,
        score: 1,
        creation_date: 1456274461,
        question_id: 181977,
        link: "https://gis.stackexchange.com/questions/181977/geolocation-is-not-working-on-my-mobile-device-user-denied-geolocation-openl",
        title: "Geolocation is not working on my mobile device (USER DENIED GEOLOCATION) - Openlayers 3"
      },
      {
        tags: [
          "openlayers",
          "cesium"
        ],
        view_count: 370,
        score: 1,
        creation_date: 1458580573,
        question_id: 185944,
        link: "https://gis.stackexchange.com/questions/185944/openlayers-3-cesium-nan-coordinates",
        title: "OpenLayers 3 Cesium - NaN coordinates"
      },
      {
        tags: [
          "openlayers",
          "google-maps"
        ],
        view_count: 197,
        score: 1,
        creation_date: 1461927582,
        question_id: 191693,
        link: "https://gis.stackexchange.com/questions/191693/make-openlayers-embed-map",
        title: "Make openlayers embed map"
      },
      {
        tags: [
          "geoserver",
          "wfs",
          "wfs-t"
        ],
        view_count: 117,
        score: 1,
        creation_date: 1466054775,
        question_id: 198652,
        link: "https://gis.stackexchange.com/questions/198652/prevent-some-layers-being-modified-via-wfs-geoserver",
        title: "Prevent some layers being modified via WFS? - Geoserver"
      },
      {
        tags: [
          "coordinate-system",
          "openlayers",
          "wms"
        ],
        view_count: 624,
        score: 1,
        creation_date: 1474044781,
        question_id: 210928,
        link: "https://gis.stackexchange.com/questions/210928/openlayers-3-cant-load-wms-layer-tiles",
        title: "Openlayers 3 can&#39;t load WMS Layer Tiles"
      },
      {
        tags: [
          "geoserver",
          "security",
          "geoserver-geofence"
        ],
        view_count: 303,
        score: 1,
        creation_date: 1495908307,
        question_id: 241913,
        link: "https://gis.stackexchange.com/questions/241913/geoserver-geofence-trigger-authentication",
        title: "Geoserver/Geofence - Trigger Authentication"
      },
      {
        tags: [
          "geoserver",
          "geoserver-rest-api"
        ],
        view_count: 110,
        score: 1,
        creation_date: 1517353002,
        question_id: 269791,
        link: "https://gis.stackexchange.com/questions/269791/geoserver-rest-not-showing-coverages",
        title: "Geoserver REST not showing coverages"
      },
      {
        tags: [
          "leaflet",
          "geojson",
          "tile-layer"
        ],
        view_count: 191,
        score: 1,
        creation_date: 1606934957,
        question_id: 380874,
        link: "https://gis.stackexchange.com/questions/380874/leaflet-draw-vector-layer-behind-tile-layer",
        title: "Leaflet - Draw vector layer behind tile layer"
      },
      {
        tags: [
          "openlayers"
        ],
        view_count: 478,
        score: 0,
        creation_date: 1458668194,
        question_id: 186166,
        link: "https://gis.stackexchange.com/questions/186166/listen-to-file-dropped-in-openlayers-3-drag-and-drop-interaction",
        title: "Listen to file dropped in openlayers 3 Drag and Drop interaction"
      },
      {
        tags: [
          "geoserver",
          "geoserver-geofence"
        ],
        view_count: 262,
        score: 0,
        creation_date: 1494417418,
        question_id: 239879,
        link: "https://gis.stackexchange.com/questions/239879/geoserver-geofence-how-to-change-catalog-mode",
        title: "Geoserver - Geofence How to change catalog mode?"
      },
      {
        tags: [
          "openlayers",
          "draw-interaction"
        ],
        view_count: 820,
        score: 0,
        creation_date: 1516708171,
        question_id: 268910,
        link: "https://gis.stackexchange.com/questions/268910/finishcondition-based-on-feature-being-drawn",
        title: "finishCondition based on feature being drawn"
      }
    ],
    answers: [
      {
        score: 8,
        creation_date: 1462911664,
        answer_id: 193057,
        link: "https://gis.stackexchange.com/questions/193027/postgis-get-a-point-inside-a-line-or-polygon/193057#193057",
        title: "PostGIS - Get a point inside a line or polygon"
      },
      {
        score: 4,
        creation_date: 1461767079,
        answer_id: 191388,
        link: "https://gis.stackexchange.com/questions/191366/transform-geojson-geometry-to-wkb/191388#191388",
        title: "Transform GeoJSON geometry to WKB"
      },
      {
        score: 3,
        creation_date: 1448550997,
        answer_id: 171695,
        link: "https://gis.stackexchange.com/questions/171692/creating-color-ramp-for-polygon-outlines-in-arcgis-desktop/171695#171695",
        title: "Creating Color Ramp for Polygon Outlines in ArcGIS Desktop?"
      },
      {
        score: 3,
        creation_date: 1460492221,
        answer_id: 189145,
        link: "https://gis.stackexchange.com/questions/189131/cql-filter-not-displaying-in-leaflet-js/189145#189145",
        title: "CQL filter not displaying in leaflet.js"
      },
      {
        score: 3,
        creation_date: 1463019044,
        answer_id: 193270,
        link: "https://gis.stackexchange.com/questions/193264/how-to-loop-in-postgis-to-add-the-next-lat-long-to-a-route/193270#193270",
        title: "How to loop in PostGIS to add the next lat long to a route"
      },
      {
        score: 3,
        creation_date: 1463700812,
        answer_id: 194249,
        link: "https://gis.stackexchange.com/questions/113975/how-do-i-get-layer-feature-type-in-openlayers/194249#194249",
        title: "How do I get layer feature type in OpenLayers?"
      },
      {
        score: 2,
        creation_date: 1455984923,
        answer_id: 181587,
        link: "https://gis.stackexchange.com/questions/181580/knowing-if-map-has-specific-custom-control-in-openlayers-3/181587#181587",
        title: "Knowing if map has specific custom control in OpenLayers 3?"
      },
      {
        score: 2,
        creation_date: 1461937946,
        answer_id: 191715,
        link: "https://gis.stackexchange.com/questions/191705/xml-data-to-arcgis/191715#191715",
        title: "XML data to ArcGIS"
      },
      {
        score: 2,
        creation_date: 1462746759,
        answer_id: 192769,
        link: "https://gis.stackexchange.com/questions/191419/openlayers-3-connecting-to-a-wms-feed-with-a-different-projection/192769#192769",
        title: "Openlayers 3 connecting to a wms feed with a different projection"
      },
      {
        score: 1,
        creation_date: 1456276080,
        answer_id: 181982,
        link: "https://gis.stackexchange.com/questions/181974/projnet-nad-27-to-wgs-1984-results-incorrect/181982#181982",
        title: "ProjNet Nad 27 to WGS 1984 Results Incorrect"
      },
      {
        score: 1,
        creation_date: 1459527798,
        answer_id: 187670,
        link: "https://gis.stackexchange.com/questions/187646/issue-comparing-two-separate-shapefiles/187670#187670",
        title: "Issue comparing two separate shapefiles"
      },
      {
        score: 1,
        creation_date: 1461211740,
        answer_id: 190437,
        link: "https://gis.stackexchange.com/questions/190410/how-to-pass-unencoded-properly-encoded-url-query-string-to-arcgis-online-web-app/190437#190437",
        title: "How to pass unencoded/properly encoded url query string to ArcGIS Online Web App Builder"
      },
      {
        score: 1,
        creation_date: 1461960792,
        answer_id: 191776,
        link: "https://gis.stackexchange.com/questions/191752/updating-table-setting-a-case-with-st-intersection/191776#191776",
        title: "Updating table setting a CASE with ST_Intersection"
      },
      {
        score: 1,
        creation_date: 1462239506,
        answer_id: 192040,
        link: "https://gis.stackexchange.com/questions/192032/ol3-check-constrain-point-drag-to-linestring/192040#192040",
        title: "OL3 check constrain point drag to lineString?"
      },
      {
        score: 1,
        creation_date: 1463148895,
        answer_id: 193495,
        link: "https://gis.stackexchange.com/questions/193494/postgres-postgis-st-makepoint/193495#193495",
        title: "Postgres/postgis st_makepoint"
      },
      {
        score: 1,
        creation_date: 1463348356,
        answer_id: 193679,
        link: "https://gis.stackexchange.com/questions/193620/exclude-empty-variables-from-openlayers-3-popup-window/193679#193679",
        title: "Exclude empty variables from OpenLayers 3 popup window"
      },
      {
        score: 1,
        creation_date: 1463446538,
        answer_id: 193820,
        link: "https://gis.stackexchange.com/questions/193818/using-arcgis-javascript-api-and-need-help-understanding-asynchronous-programming/193820#193820",
        title: "Using ArcGIS Javascript API and need help understanding asynchronous programming in accessing the fields property of a FeatureLayer Object"
      },
      {
        score: 1,
        creation_date: 1463516067,
        answer_id: 193929,
        link: "https://gis.stackexchange.com/questions/127729/select-multiple-feature-using-select-interaction/193929#193929",
        title: "Select Multiple feature using select interaction"
      },
      {
        score: 1,
        creation_date: 1516709276,
        answer_id: 268914,
        link: "https://gis.stackexchange.com/questions/268910/finishcondition-based-on-feature-being-drawn/268914#268914",
        title: "finishCondition based on feature being drawn"
      },
      {
        score: 0,
        creation_date: 1455983107,
        answer_id: 181585,
        link: "https://gis.stackexchange.com/questions/181533/specify-default-width-and-height-used-by-geoservers-layer-preview-page/181585#181585",
        title: "Specify default width and height used by Geoserver&#39;s layer preview page"
      },
      {
        score: 0,
        creation_date: 1461769467,
        answer_id: 191395,
        link: "https://gis.stackexchange.com/questions/191393/finding-locations-within-a-radius-of-a-given-path/191395#191395",
        title: "Finding locations within a radius of a given path"
      }
    ]
  }
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const keys = Object.keys(stackExchangeData);
    const items = keys.map((title) => ({ title }));
    const selected = ref(keys[0]);
    watchEffect(() => console.log(selected.value));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JSection = _sfc_main$u;
      const _component_FeaturedText = __unplugin_components_1$9;
      const _component_Tabs = __unplugin_components_2;
      const _component_TabsContent = __unplugin_components_3;
      const _component_ResizableContainer = __unplugin_components_4;
      const _component_QuestionAnswerCard = _sfc_main$8;
      _push(ssrRenderComponent(_component_JSection, mergeProps({
        title: "I help people",
        class: "relative"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-xl"${_scopeId}> As a Software developer I will always be in debt with the community. I&#39;ve been an active user on some `);
            _push2(ssrRenderComponent(_component_FeaturedText, { text: "Stackexchange" }, null, _parent2, _scopeId));
            _push2(` communities, such as `);
            _push2(ssrRenderComponent(_component_FeaturedText, { text: "Stackoverflow" }, null, _parent2, _scopeId));
            _push2(`, since several years ago, mostly replying questions but also creating interesting ones. `);
            _push2(ssrRenderComponent(_component_FeaturedText, { text: "Check out" }, null, _parent2, _scopeId));
            _push2(` some of my contributions: </p>`);
            _push2(ssrRenderComponent(_component_Tabs, {
              items: unref(items),
              selected: selected.value,
              "onUpdate:selected": ($event) => selected.value = $event,
              class: "mt-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TabsContent, { class: "py-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ResizableContainer, {
                    baseline: "",
                    height: 250,
                    "header-class": "!px-5",
                    class: "relative"
                  }, {
                    title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-primary dark:text-primary-dark font-semibold uppercase"${_scopeId3}>Answers</h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "text-primary dark:text-primary-dark font-semibold uppercase" }, "Answers")
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(stackExchangeData)[selected.value].answers, (answer) => {
                          _push4(ssrRenderComponent(_component_QuestionAnswerCard, mergeProps({
                            key: answer.answer_id
                          }, answer, { class: "rounded-sm mt-2 p-3" }), null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(stackExchangeData)[selected.value].answers, (answer) => {
                            return openBlock(), createBlock(_component_QuestionAnswerCard, mergeProps({
                              key: answer.answer_id
                            }, answer, { class: "rounded-sm mt-2 p-3" }), null, 16);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ResizableContainer, {
                    baseline: "",
                    height: 250,
                    "header-class": "!px-5",
                    class: "relative"
                  }, {
                    title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="mt-8 text-primary dark:text-primary-dark font-semibold uppercase"${_scopeId3}>Questions</h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "mt-8 text-primary dark:text-primary-dark font-semibold uppercase" }, "Questions")
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(stackExchangeData)[selected.value].questions, (question) => {
                          _push4(ssrRenderComponent(_component_QuestionAnswerCard, mergeProps({
                            key: question.question_id
                          }, question, { class: "rounded-sm mt-2 p-3" }), null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(stackExchangeData)[selected.value].questions, (question) => {
                            return openBlock(), createBlock(_component_QuestionAnswerCard, mergeProps({
                              key: question.question_id
                            }, question, { class: "rounded-sm mt-2 p-3" }), null, 16);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ResizableContainer, {
                      baseline: "",
                      height: 250,
                      "header-class": "!px-5",
                      class: "relative"
                    }, {
                      title: withCtx(() => [
                        createVNode("h1", { class: "text-primary dark:text-primary-dark font-semibold uppercase" }, "Answers")
                      ]),
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(stackExchangeData)[selected.value].answers, (answer) => {
                          return openBlock(), createBlock(_component_QuestionAnswerCard, mergeProps({
                            key: answer.answer_id
                          }, answer, { class: "rounded-sm mt-2 p-3" }), null, 16);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ResizableContainer, {
                      baseline: "",
                      height: 250,
                      "header-class": "!px-5",
                      class: "relative"
                    }, {
                      title: withCtx(() => [
                        createVNode("h1", { class: "mt-8 text-primary dark:text-primary-dark font-semibold uppercase" }, "Questions")
                      ]),
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(stackExchangeData)[selected.value].questions, (question) => {
                          return openBlock(), createBlock(_component_QuestionAnswerCard, mergeProps({
                            key: question.question_id
                          }, question, { class: "rounded-sm mt-2 p-3" }), null, 16);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "text-xl" }, [
                createTextVNode(" As a Software developer I will always be in debt with the community. I've been an active user on some "),
                createVNode(_component_FeaturedText, { text: "Stackexchange" }),
                createTextVNode(" communities, such as "),
                createVNode(_component_FeaturedText, { text: "Stackoverflow" }),
                createTextVNode(", since several years ago, mostly replying questions but also creating interesting ones. "),
                createVNode(_component_FeaturedText, { text: "Check out" }),
                createTextVNode(" some of my contributions: ")
              ]),
              createVNode(_component_Tabs, {
                items: unref(items),
                selected: selected.value,
                "onUpdate:selected": ($event) => selected.value = $event,
                class: "mt-4"
              }, null, 8, ["items", "selected", "onUpdate:selected"]),
              createVNode(_component_TabsContent, { class: "py-4" }, {
                default: withCtx(() => [
                  createVNode(_component_ResizableContainer, {
                    baseline: "",
                    height: 250,
                    "header-class": "!px-5",
                    class: "relative"
                  }, {
                    title: withCtx(() => [
                      createVNode("h1", { class: "text-primary dark:text-primary-dark font-semibold uppercase" }, "Answers")
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(stackExchangeData)[selected.value].answers, (answer) => {
                        return openBlock(), createBlock(_component_QuestionAnswerCard, mergeProps({
                          key: answer.answer_id
                        }, answer, { class: "rounded-sm mt-2 p-3" }), null, 16);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ResizableContainer, {
                    baseline: "",
                    height: 250,
                    "header-class": "!px-5",
                    class: "relative"
                  }, {
                    title: withCtx(() => [
                      createVNode("h1", { class: "mt-8 text-primary dark:text-primary-dark font-semibold uppercase" }, "Questions")
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(stackExchangeData)[selected.value].questions, (question) => {
                        return openBlock(), createBlock(_component_QuestionAnswerCard, mergeProps({
                          key: question.question_id
                        }, question, { class: "rounded-sm mt-2 p-3" }), null, 16);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/application/sections/stackexchange/StackExchangeSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var StackExchangeSection = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$4
});
var about_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-cb74326e><section aria-label="About section" data-v-cb74326e><h1 data-v-cb74326e>I&#39;m a passionate and self-taught web developer</h1><h4 data-v-cb74326e>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet commodi laborum suscipit animi corporis pariatur temporibus, dolores similique beatae sequi? Quas odio tempore, expedita laudantium odit quibusdam in ipsa. Asperiores.</h4><h1 data-v-cb74326e>Completed courses from CodelyTV</h1><div class="course-list" data-v-cb74326e><!--[-->`);
      ssrRenderList(unref(courses), (course) => {
        _push(`<article class="course-card" data-v-cb74326e><div class="flex gap-4" data-v-cb74326e><picture class="course-card__media" data-v-cb74326e><img${ssrRenderAttr("src", course.image)}${ssrRenderAttr("alt", course.name)} data-v-cb74326e></picture><h1 class="course-card__title" data-v-cb74326e>${ssrInterpolate(course.name)}</h1></div></article>`);
      });
      _push(`<!--]--></div></section></main>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/about.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var about = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-cb74326e"]]);
var about$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": about
});
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_RouterView = resolveComponent("RouterView");
  _push(ssrRenderComponent(_component_RouterView, _attrs, null, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/blog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var blog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
var blog$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": blog
});
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h4${ssrRenderAttrs(_attrs)}>Blog</h4>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/blog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var index = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index
});
const _sfc_main = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = {};
    expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-body" }, _attrs))}><h1>Hello world</h1><hr><p>This is some text:</p><ul><li>Blablaba</li><li>bljaljalja</li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/blog/articles/hello-world.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var helloWorld = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
export { createApp };
