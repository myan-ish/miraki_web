"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdateclient"]("chunk-vendors",{

/***/ "../node_modules/vue-responsive-video-background-player/dist/vue-responsive-video-background-player.mjs":
/*!**************************************************************************************************************!*\
  !*** ../node_modules/vue-responsive-video-background-player/dist/vue-responsive-video-background-player.mjs ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Plugin\": function() { return /* binding */ Z; },\n/* harmony export */   \"default\": function() { return /* binding */ X; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n(function(){\"use strict\";try{if(typeof document!=\"undefined\"){var e=document.createElement(\"style\");e.appendChild(document.createTextNode(\".video-wrapper[data-v-f8afdaf5]{display:flex;justify-content:center;align-items:center;width:100%;height:100%;position:absolute;overflow:hidden;z-index:0}.fade[data-v-f8afdaf5]{backface-visibility:hidden}.fade-enter-active[data-v-f8afdaf5],.fade-leave-active[data-v-f8afdaf5]{transition:opacity 1s}.fade-enter[data-v-f8afdaf5],.fade-leave-to[data-v-f8afdaf5]{opacity:0}video[data-v-f8afdaf5]{visibility:visible;pointer-events:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}.video-buffering[data-v-21ec9d8c]{width:100%;overflow:hidden;background-size:cover;background-position:center;height:100%;top:0;left:0;position:absolute}.video-overlay[data-v-95abe06c]{height:100%;width:100%;top:0;left:0;position:absolute}.vue-responsive-videobg[data-v-7649c24c]{background:none;position:relative;width:100%;overflow:hidden}.vue-responsive-videobg .videobg-content[data-v-7649c24c]{position:absolute;top:0;left:0;width:100%;height:100%}\")),document.head.appendChild(e)}}catch(t){console.error(\"vite-plugin-css-injected-by-js\",t)}})();\n\nconst _ = {\n  src: {\n    type: String,\n    required: !0\n  },\n  muted: {\n    type: Boolean,\n    default: !0\n  },\n  loop: {\n    type: Boolean,\n    default: !0\n  },\n  preload: {\n    type: String,\n    default: \"auto\"\n  },\n  objectFit: {\n    type: String,\n    default: \"cover\"\n  },\n  playsWhen: {\n    type: String,\n    default: \"canplay\",\n    note: \"Google HTML Video Events\"\n  },\n  playbackRate: {\n    type: Number,\n    default: 1\n  },\n  transition: {\n    type: String,\n    default: \"fade\"\n  }\n}, R = [\"src\", \"res\", \"autoplay\"], S = (e) => Array.isArray(e) ? e.length === 0 ? !0 : m(e, R) : !1, m = (e, t) => t.length === 1 ? f(e, t[0]) : f(e, t[0]) * m(e, t.slice(1)), f = (e, t) => {\n  for (let o = e.length - 1; o > -1; o -= 1) {\n    const r = e[o];\n    if (!W(r))\n      return !1;\n    if (O(r, t))\n      return !0;\n  }\n  return !1;\n}, W = (e) => e != null && e.constructor.name === \"Object\", O = (e, t) => Object.prototype.hasOwnProperty.call(e, t), B = {\n  sources: {\n    type: Array,\n    default() {\n      return [];\n    },\n    validator: S\n  },\n  autoplay: {\n    type: Boolean,\n    default: !0\n  },\n  poster: {\n    type: String,\n    default: \"\"\n  },\n  overlay: {\n    type: String,\n    default: \"\"\n  },\n  ..._\n};\nconst a = (e, t) => {\n  const o = e.__vccOpts || e;\n  for (const [r, i] of t)\n    o[r] = i;\n  return o;\n}, T = {\n  props: _,\n  emits: [\"playing\", \"error\", \"loading\", \"ended\", \"ready\"],\n  data() {\n    return {\n      showVideo: !1\n    };\n  },\n  computed: {\n    styleObject() {\n      return this.objectFit ? {\n        objectFit: this.objectFit\n      } : {};\n    }\n  },\n  watch: {\n    src() {\n      this.load();\n    }\n  },\n  methods: {\n    pause() {\n      this.$refs.video && this.$refs.video.pause();\n    },\n    load() {\n      this.hide(), setTimeout(() => {\n        this.$refs.video.load(), this.$emit(\"loading\");\n      }, 1e3);\n    },\n    play() {\n      this.setPlaybackRate(), this.$refs.video.play(), this.show(), this.$emit(\"playing\");\n    },\n    show() {\n      this.showVideo = !0;\n    },\n    hide() {\n      this.showVideo = !1;\n    },\n    getMediaType(e) {\n      return `video/${e.split(\".\").pop().split(/[?#]/)[0]}`;\n    },\n    videoCanPlay() {\n      return !!this.$refs.video.canPlayType;\n    },\n    videoReady() {\n      this.pause(), this.$emit(\"ready\");\n    },\n    videoError() {\n      this.$emit(\"error\");\n    },\n    videoEnded() {\n      this.$emit(\"ended\");\n    },\n    setPlaybackRate() {\n      this.$refs.video.playbackRate = this.playbackRate, this.$refs.video.defaultPlaybackRate = this.playbackRate;\n    }\n  },\n  mounted() {\n    this.videoCanPlay() && (this.$refs.video[`on${this.playsWhen}`] = this.videoReady, this.$refs.video.onerror = this.videoError, this.$refs.video.onended = this.videoEnded);\n  }\n}, C = { class: \"video-wrapper\" }, F = [\"muted\", \"loop\", \"preload\"], I = [\"src\", \"type\"];\nfunction M(e, t, o, r, i, n) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, { name: e.transition }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", C, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"video\", {\n          ref: \"video\",\n          autoplay: \"\",\n          playsinline: \"\",\n          muted: e.muted,\n          loop: e.loop,\n          preload: e.preload,\n          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(n.styleObject)\n        }, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"source\", {\n            src: e.src,\n            type: n.getMediaType(e.src)\n          }, null, 8, I)\n        ], 12, F)\n      ], 512), [\n        [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, i.showVideo]\n      ])\n    ]),\n    _: 1\n  }, 8, [\"name\"]);\n}\nconst z = /* @__PURE__ */ a(T, [[\"render\", M], [\"__scopeId\", \"data-v-f8afdaf5\"]]);\nconst L = {\n  props: {\n    poster: {\n      type: String,\n      required: !0\n    }\n  },\n  computed: {\n    image() {\n      return {\n        backgroundImage: `url(${this.poster})`\n      };\n    }\n  }\n};\nfunction q(e, t, o, r, i, n) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    class: \"video-buffering\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(n.image)\n  }, null, 4);\n}\nconst A = /* @__PURE__ */ a(L, [[\"render\", q], [\"__scopeId\", \"data-v-21ec9d8c\"]]);\nconst H = {\n  props: {\n    overlay: {\n      type: String,\n      required: !0\n    }\n  }\n};\nfunction N(e, t, o, r, i, n) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    class: \"video-overlay\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ background: o.overlay })\n  }, null, 4);\n}\nconst D = /* @__PURE__ */ a(H, [[\"render\", N], [\"__scopeId\", \"data-v-95abe06c\"]]), v = (e, t) => {\n  let o = \"null\";\n  return (...r) => {\n    o === \"null\" && (o = setTimeout(() => {\n      e(...r), o = \"null\";\n    }, t));\n  };\n}, G = {\n  data() {\n    return {\n      width: 0\n    };\n  },\n  computed: {\n    current() {\n      if (this.sources.length === 0)\n        return this.default;\n      const e = this.sources.sort((t, o) => t.res - o.res).filter((t) => t.res >= this.width);\n      return e.length === 0 ? this.default : e[0];\n    },\n    default() {\n      return {\n        src: this.src,\n        poster: this.poster,\n        autoplay: this.autoplay\n      };\n    }\n  },\n  methods: {\n    $_change_video_resolution() {\n      this.width = this.$_innerWidth();\n    },\n    $_innerWidth() {\n      return window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName(\"body\")[0].clientWidth;\n    }\n  },\n  beforeMount() {\n    this.$_change_video_resolution();\n  },\n  mounted() {\n    window.addEventListener(\"resize\", v(this.$_change_video_resolution, 250));\n  },\n  beforeUnmount() {\n    window.removeEventListener(\"resize\", v(this.$_change_video_resolution, 250));\n  }\n};\nconst U = {\n  props: B,\n  mixins: [G],\n  emits: [\"playing\", \"error\", \"loading\", \"ended\", \"ready\"],\n  components: {\n    VideoPlayer: z,\n    VideoPoster: A,\n    VideoOverlay: D\n  },\n  computed: {\n    player() {\n      return this.$refs.player;\n    }\n  },\n  methods: {\n    playVideo() {\n      this.$emit(\"ready\"), this.current.autoplay && this.player.play();\n    }\n  }\n}, J = {\n  class: \"vue-responsive-videobg\",\n  ref: \"vidbg\"\n}, K = { class: \"videobg-content\" };\nfunction Q(e, t, o, r, i, n) {\n  const $ = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"video-poster\"), g = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"video-player\"), b = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"video-overlay\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"section\", J, [\n    e.current.poster || e.poster ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($, {\n      key: 0,\n      poster: e.current.poster || e.poster\n    }, null, 8, [\"poster\"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"\", !0),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(g, {\n      ref: \"player\",\n      src: e.current.src,\n      muted: e.muted,\n      loop: e.loop,\n      preload: e.preload,\n      \"plays-when\": e.playsWhen,\n      \"playback-rate\": e.playbackRate,\n      transition: e.transition,\n      \"object-fit\": e.objectFit,\n      onReady: n.playVideo,\n      onPlaying: t[0] || (t[0] = (l) => e.$emit(\"playing\")),\n      onError: t[1] || (t[1] = (l) => e.$emit(\"error\")),\n      onLoading: t[2] || (t[2] = (l) => e.$emit(\"loading\")),\n      onEnded: t[3] || (t[3] = (l) => e.$emit(\"ended\"))\n    }, null, 8, [\"src\", \"muted\", \"loop\", \"preload\", \"plays-when\", \"playback-rate\", \"transition\", \"object-fit\", \"onReady\"]),\n    e.overlay ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(b, {\n      key: 1,\n      overlay: e.overlay\n    }, null, 8, [\"overlay\"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"\", !0),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", K, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(e.$slots, \"default\", {}, void 0, !0)\n    ])\n  ], 512);\n}\nconst X = /* @__PURE__ */ a(U, [[\"render\", Q], [\"__scopeId\", \"data-v-7649c24c\"]]), Z = {\n  install(e) {\n    e.component(\"VideoBackground\", X);\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1yZXNwb25zaXZlLXZpZGVvLWJhY2tncm91bmQtcGxheWVyL2Rpc3QvdnVlLXJlc3BvbnNpdmUtdmlkZW8tYmFja2dyb3VuZC1wbGF5ZXIubWpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi4vbm9kZV9tb2R1bGVzL3Z1ZS1yZXNwb25zaXZlLXZpZGVvLWJhY2tncm91bmQtcGxheWVyL2Rpc3QvdnVlLXJlc3BvbnNpdmUtdmlkZW8tYmFja2dyb3VuZC1wbGF5ZXIubWpzP2ZhZDYiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dHJ5e2lmKHR5cGVvZiBkb2N1bWVudCE9XCJ1bmRlZmluZWRcIil7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2UuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIudmlkZW8td3JhcHBlcltkYXRhLXYtZjhhZmRhZjVde2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjB9LmZhZGVbZGF0YS12LWY4YWZkYWY1XXtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbn0uZmFkZS1lbnRlci1hY3RpdmVbZGF0YS12LWY4YWZkYWY1XSwuZmFkZS1sZWF2ZS1hY3RpdmVbZGF0YS12LWY4YWZkYWY1XXt0cmFuc2l0aW9uOm9wYWNpdHkgMXN9LmZhZGUtZW50ZXJbZGF0YS12LWY4YWZkYWY1XSwuZmFkZS1sZWF2ZS10b1tkYXRhLXYtZjhhZmRhZjVde29wYWNpdHk6MH12aWRlb1tkYXRhLXYtZjhhZmRhZjVde3Zpc2liaWxpdHk6dmlzaWJsZTtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LnZpZGVvLWJ1ZmZlcmluZ1tkYXRhLXYtMjFlYzlkOGNde3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtoZWlnaHQ6MTAwJTt0b3A6MDtsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGV9LnZpZGVvLW92ZXJsYXlbZGF0YS12LTk1YWJlMDZjXXtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3RvcDowO2xlZnQ6MDtwb3NpdGlvbjphYnNvbHV0ZX0udnVlLXJlc3BvbnNpdmUtdmlkZW9iZ1tkYXRhLXYtNzY0OWMyNGNde2JhY2tncm91bmQ6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbn0udnVlLXJlc3BvbnNpdmUtdmlkZW9iZyAudmlkZW9iZy1jb250ZW50W2RhdGEtdi03NjQ5YzI0Y117cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9XCIpKSxkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGUpfX1jYXRjaCh0KXtjb25zb2xlLmVycm9yKFwidml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzXCIsdCl9fSkoKTtcbmltcG9ydCB7IG9wZW5CbG9jayBhcyBzLCBjcmVhdGVCbG9jayBhcyBwLCBUcmFuc2l0aW9uIGFzIHcsIHdpdGhDdHggYXMgaywgd2l0aERpcmVjdGl2ZXMgYXMgViwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIGQsIG5vcm1hbGl6ZVN0eWxlIGFzIGMsIHZTaG93IGFzIEUsIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyB5LCByZXNvbHZlQ29tcG9uZW50IGFzIHUsIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBoLCBjcmVhdGVWTm9kZSBhcyBQLCByZW5kZXJTbG90IGFzIGogfSBmcm9tIFwidnVlXCI7XG5jb25zdCBfID0ge1xuICBzcmM6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6ICEwXG4gIH0sXG4gIG11dGVkOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiAhMFxuICB9LFxuICBsb29wOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiAhMFxuICB9LFxuICBwcmVsb2FkOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6IFwiYXV0b1wiXG4gIH0sXG4gIG9iamVjdEZpdDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcImNvdmVyXCJcbiAgfSxcbiAgcGxheXNXaGVuOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6IFwiY2FucGxheVwiLFxuICAgIG5vdGU6IFwiR29vZ2xlIEhUTUwgVmlkZW8gRXZlbnRzXCJcbiAgfSxcbiAgcGxheWJhY2tSYXRlOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDFcbiAgfSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcImZhZGVcIlxuICB9XG59LCBSID0gW1wic3JjXCIsIFwicmVzXCIsIFwiYXV0b3BsYXlcIl0sIFMgPSAoZSkgPT4gQXJyYXkuaXNBcnJheShlKSA/IGUubGVuZ3RoID09PSAwID8gITAgOiBtKGUsIFIpIDogITEsIG0gPSAoZSwgdCkgPT4gdC5sZW5ndGggPT09IDEgPyBmKGUsIHRbMF0pIDogZihlLCB0WzBdKSAqIG0oZSwgdC5zbGljZSgxKSksIGYgPSAoZSwgdCkgPT4ge1xuICBmb3IgKGxldCBvID0gZS5sZW5ndGggLSAxOyBvID4gLTE7IG8gLT0gMSkge1xuICAgIGNvbnN0IHIgPSBlW29dO1xuICAgIGlmICghVyhyKSlcbiAgICAgIHJldHVybiAhMTtcbiAgICBpZiAoTyhyLCB0KSlcbiAgICAgIHJldHVybiAhMDtcbiAgfVxuICByZXR1cm4gITE7XG59LCBXID0gKGUpID0+IGUgIT0gbnVsbCAmJiBlLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiT2JqZWN0XCIsIE8gPSAoZSwgdCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIHQpLCBCID0ge1xuICBzb3VyY2VzOiB7XG4gICAgdHlwZTogQXJyYXksXG4gICAgZGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuICAgIHZhbGlkYXRvcjogU1xuICB9LFxuICBhdXRvcGxheToge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogITBcbiAgfSxcbiAgcG9zdGVyOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6IFwiXCJcbiAgfSxcbiAgb3ZlcmxheToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcIlwiXG4gIH0sXG4gIC4uLl9cbn07XG5jb25zdCBhID0gKGUsIHQpID0+IHtcbiAgY29uc3QgbyA9IGUuX192Y2NPcHRzIHx8IGU7XG4gIGZvciAoY29uc3QgW3IsIGldIG9mIHQpXG4gICAgb1tyXSA9IGk7XG4gIHJldHVybiBvO1xufSwgVCA9IHtcbiAgcHJvcHM6IF8sXG4gIGVtaXRzOiBbXCJwbGF5aW5nXCIsIFwiZXJyb3JcIiwgXCJsb2FkaW5nXCIsIFwiZW5kZWRcIiwgXCJyZWFkeVwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd1ZpZGVvOiAhMVxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgc3R5bGVPYmplY3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vYmplY3RGaXQgPyB7XG4gICAgICAgIG9iamVjdEZpdDogdGhpcy5vYmplY3RGaXRcbiAgICAgIH0gOiB7fTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgc3JjKCkge1xuICAgICAgdGhpcy5sb2FkKCk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcGF1c2UoKSB7XG4gICAgICB0aGlzLiRyZWZzLnZpZGVvICYmIHRoaXMuJHJlZnMudmlkZW8ucGF1c2UoKTtcbiAgICB9LFxuICAgIGxvYWQoKSB7XG4gICAgICB0aGlzLmhpZGUoKSwgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuJHJlZnMudmlkZW8ubG9hZCgpLCB0aGlzLiRlbWl0KFwibG9hZGluZ1wiKTtcbiAgICAgIH0sIDFlMyk7XG4gICAgfSxcbiAgICBwbGF5KCkge1xuICAgICAgdGhpcy5zZXRQbGF5YmFja1JhdGUoKSwgdGhpcy4kcmVmcy52aWRlby5wbGF5KCksIHRoaXMuc2hvdygpLCB0aGlzLiRlbWl0KFwicGxheWluZ1wiKTtcbiAgICB9LFxuICAgIHNob3coKSB7XG4gICAgICB0aGlzLnNob3dWaWRlbyA9ICEwO1xuICAgIH0sXG4gICAgaGlkZSgpIHtcbiAgICAgIHRoaXMuc2hvd1ZpZGVvID0gITE7XG4gICAgfSxcbiAgICBnZXRNZWRpYVR5cGUoZSkge1xuICAgICAgcmV0dXJuIGB2aWRlby8ke2Uuc3BsaXQoXCIuXCIpLnBvcCgpLnNwbGl0KC9bPyNdLylbMF19YDtcbiAgICB9LFxuICAgIHZpZGVvQ2FuUGxheSgpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuJHJlZnMudmlkZW8uY2FuUGxheVR5cGU7XG4gICAgfSxcbiAgICB2aWRlb1JlYWR5KCkge1xuICAgICAgdGhpcy5wYXVzZSgpLCB0aGlzLiRlbWl0KFwicmVhZHlcIik7XG4gICAgfSxcbiAgICB2aWRlb0Vycm9yKCkge1xuICAgICAgdGhpcy4kZW1pdChcImVycm9yXCIpO1xuICAgIH0sXG4gICAgdmlkZW9FbmRlZCgpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJlbmRlZFwiKTtcbiAgICB9LFxuICAgIHNldFBsYXliYWNrUmF0ZSgpIHtcbiAgICAgIHRoaXMuJHJlZnMudmlkZW8ucGxheWJhY2tSYXRlID0gdGhpcy5wbGF5YmFja1JhdGUsIHRoaXMuJHJlZnMudmlkZW8uZGVmYXVsdFBsYXliYWNrUmF0ZSA9IHRoaXMucGxheWJhY2tSYXRlO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnZpZGVvQ2FuUGxheSgpICYmICh0aGlzLiRyZWZzLnZpZGVvW2BvbiR7dGhpcy5wbGF5c1doZW59YF0gPSB0aGlzLnZpZGVvUmVhZHksIHRoaXMuJHJlZnMudmlkZW8ub25lcnJvciA9IHRoaXMudmlkZW9FcnJvciwgdGhpcy4kcmVmcy52aWRlby5vbmVuZGVkID0gdGhpcy52aWRlb0VuZGVkKTtcbiAgfVxufSwgQyA9IHsgY2xhc3M6IFwidmlkZW8td3JhcHBlclwiIH0sIEYgPSBbXCJtdXRlZFwiLCBcImxvb3BcIiwgXCJwcmVsb2FkXCJdLCBJID0gW1wic3JjXCIsIFwidHlwZVwiXTtcbmZ1bmN0aW9uIE0oZSwgdCwgbywgciwgaSwgbikge1xuICByZXR1cm4gcygpLCBwKHcsIHsgbmFtZTogZS50cmFuc2l0aW9uIH0sIHtcbiAgICBkZWZhdWx0OiBrKCgpID0+IFtcbiAgICAgIFYoZChcImRpdlwiLCBDLCBbXG4gICAgICAgIGQoXCJ2aWRlb1wiLCB7XG4gICAgICAgICAgcmVmOiBcInZpZGVvXCIsXG4gICAgICAgICAgYXV0b3BsYXk6IFwiXCIsXG4gICAgICAgICAgcGxheXNpbmxpbmU6IFwiXCIsXG4gICAgICAgICAgbXV0ZWQ6IGUubXV0ZWQsXG4gICAgICAgICAgbG9vcDogZS5sb29wLFxuICAgICAgICAgIHByZWxvYWQ6IGUucHJlbG9hZCxcbiAgICAgICAgICBzdHlsZTogYyhuLnN0eWxlT2JqZWN0KVxuICAgICAgICB9LCBbXG4gICAgICAgICAgZChcInNvdXJjZVwiLCB7XG4gICAgICAgICAgICBzcmM6IGUuc3JjLFxuICAgICAgICAgICAgdHlwZTogbi5nZXRNZWRpYVR5cGUoZS5zcmMpXG4gICAgICAgICAgfSwgbnVsbCwgOCwgSSlcbiAgICAgICAgXSwgMTIsIEYpXG4gICAgICBdLCA1MTIpLCBbXG4gICAgICAgIFtFLCBpLnNob3dWaWRlb11cbiAgICAgIF0pXG4gICAgXSksXG4gICAgXzogMVxuICB9LCA4LCBbXCJuYW1lXCJdKTtcbn1cbmNvbnN0IHogPSAvKiBAX19QVVJFX18gKi8gYShULCBbW1wicmVuZGVyXCIsIE1dLCBbXCJfX3Njb3BlSWRcIiwgXCJkYXRhLXYtZjhhZmRhZjVcIl1dKTtcbmNvbnN0IEwgPSB7XG4gIHByb3BzOiB7XG4gICAgcG9zdGVyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogITBcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaW1hZ2UoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt0aGlzLnBvc3Rlcn0pYFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn07XG5mdW5jdGlvbiBxKGUsIHQsIG8sIHIsIGksIG4pIHtcbiAgcmV0dXJuIHMoKSwgeShcImRpdlwiLCB7XG4gICAgY2xhc3M6IFwidmlkZW8tYnVmZmVyaW5nXCIsXG4gICAgc3R5bGU6IGMobi5pbWFnZSlcbiAgfSwgbnVsbCwgNCk7XG59XG5jb25zdCBBID0gLyogQF9fUFVSRV9fICovIGEoTCwgW1tcInJlbmRlclwiLCBxXSwgW1wiX19zY29wZUlkXCIsIFwiZGF0YS12LTIxZWM5ZDhjXCJdXSk7XG5jb25zdCBIID0ge1xuICBwcm9wczoge1xuICAgIG92ZXJsYXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiAhMFxuICAgIH1cbiAgfVxufTtcbmZ1bmN0aW9uIE4oZSwgdCwgbywgciwgaSwgbikge1xuICByZXR1cm4gcygpLCB5KFwiZGl2XCIsIHtcbiAgICBjbGFzczogXCJ2aWRlby1vdmVybGF5XCIsXG4gICAgc3R5bGU6IGMoeyBiYWNrZ3JvdW5kOiBvLm92ZXJsYXkgfSlcbiAgfSwgbnVsbCwgNCk7XG59XG5jb25zdCBEID0gLyogQF9fUFVSRV9fICovIGEoSCwgW1tcInJlbmRlclwiLCBOXSwgW1wiX19zY29wZUlkXCIsIFwiZGF0YS12LTk1YWJlMDZjXCJdXSksIHYgPSAoZSwgdCkgPT4ge1xuICBsZXQgbyA9IFwibnVsbFwiO1xuICByZXR1cm4gKC4uLnIpID0+IHtcbiAgICBvID09PSBcIm51bGxcIiAmJiAobyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZSguLi5yKSwgbyA9IFwibnVsbFwiO1xuICAgIH0sIHQpKTtcbiAgfTtcbn0sIEcgPSB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiAwXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjdXJyZW50KCkge1xuICAgICAgaWYgKHRoaXMuc291cmNlcy5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHQ7XG4gICAgICBjb25zdCBlID0gdGhpcy5zb3VyY2VzLnNvcnQoKHQsIG8pID0+IHQucmVzIC0gby5yZXMpLmZpbHRlcigodCkgPT4gdC5yZXMgPj0gdGhpcy53aWR0aCk7XG4gICAgICByZXR1cm4gZS5sZW5ndGggPT09IDAgPyB0aGlzLmRlZmF1bHQgOiBlWzBdO1xuICAgIH0sXG4gICAgZGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNyYzogdGhpcy5zcmMsXG4gICAgICAgIHBvc3RlcjogdGhpcy5wb3N0ZXIsXG4gICAgICAgIGF1dG9wbGF5OiB0aGlzLmF1dG9wbGF5XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgICRfY2hhbmdlX3ZpZGVvX3Jlc29sdXRpb24oKSB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy4kX2lubmVyV2lkdGgoKTtcbiAgICB9LFxuICAgICRfaW5uZXJXaWR0aCgpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPyBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSA6IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uY2xpZW50V2lkdGg7XG4gICAgfVxuICB9LFxuICBiZWZvcmVNb3VudCgpIHtcbiAgICB0aGlzLiRfY2hhbmdlX3ZpZGVvX3Jlc29sdXRpb24oKTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB2KHRoaXMuJF9jaGFuZ2VfdmlkZW9fcmVzb2x1dGlvbiwgMjUwKSk7XG4gIH0sXG4gIGJlZm9yZVVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdih0aGlzLiRfY2hhbmdlX3ZpZGVvX3Jlc29sdXRpb24sIDI1MCkpO1xuICB9XG59O1xuY29uc3QgVSA9IHtcbiAgcHJvcHM6IEIsXG4gIG1peGluczogW0ddLFxuICBlbWl0czogW1wicGxheWluZ1wiLCBcImVycm9yXCIsIFwibG9hZGluZ1wiLCBcImVuZGVkXCIsIFwicmVhZHlcIl0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBWaWRlb1BsYXllcjogeixcbiAgICBWaWRlb1Bvc3RlcjogQSxcbiAgICBWaWRlb092ZXJsYXk6IERcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBwbGF5ZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kcmVmcy5wbGF5ZXI7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcGxheVZpZGVvKCkge1xuICAgICAgdGhpcy4kZW1pdChcInJlYWR5XCIpLCB0aGlzLmN1cnJlbnQuYXV0b3BsYXkgJiYgdGhpcy5wbGF5ZXIucGxheSgpO1xuICAgIH1cbiAgfVxufSwgSiA9IHtcbiAgY2xhc3M6IFwidnVlLXJlc3BvbnNpdmUtdmlkZW9iZ1wiLFxuICByZWY6IFwidmlkYmdcIlxufSwgSyA9IHsgY2xhc3M6IFwidmlkZW9iZy1jb250ZW50XCIgfTtcbmZ1bmN0aW9uIFEoZSwgdCwgbywgciwgaSwgbikge1xuICBjb25zdCAkID0gdShcInZpZGVvLXBvc3RlclwiKSwgZyA9IHUoXCJ2aWRlby1wbGF5ZXJcIiksIGIgPSB1KFwidmlkZW8tb3ZlcmxheVwiKTtcbiAgcmV0dXJuIHMoKSwgeShcInNlY3Rpb25cIiwgSiwgW1xuICAgIGUuY3VycmVudC5wb3N0ZXIgfHwgZS5wb3N0ZXIgPyAocygpLCBwKCQsIHtcbiAgICAgIGtleTogMCxcbiAgICAgIHBvc3RlcjogZS5jdXJyZW50LnBvc3RlciB8fCBlLnBvc3RlclxuICAgIH0sIG51bGwsIDgsIFtcInBvc3RlclwiXSkpIDogaChcIlwiLCAhMCksXG4gICAgUChnLCB7XG4gICAgICByZWY6IFwicGxheWVyXCIsXG4gICAgICBzcmM6IGUuY3VycmVudC5zcmMsXG4gICAgICBtdXRlZDogZS5tdXRlZCxcbiAgICAgIGxvb3A6IGUubG9vcCxcbiAgICAgIHByZWxvYWQ6IGUucHJlbG9hZCxcbiAgICAgIFwicGxheXMtd2hlblwiOiBlLnBsYXlzV2hlbixcbiAgICAgIFwicGxheWJhY2stcmF0ZVwiOiBlLnBsYXliYWNrUmF0ZSxcbiAgICAgIHRyYW5zaXRpb246IGUudHJhbnNpdGlvbixcbiAgICAgIFwib2JqZWN0LWZpdFwiOiBlLm9iamVjdEZpdCxcbiAgICAgIG9uUmVhZHk6IG4ucGxheVZpZGVvLFxuICAgICAgb25QbGF5aW5nOiB0WzBdIHx8ICh0WzBdID0gKGwpID0+IGUuJGVtaXQoXCJwbGF5aW5nXCIpKSxcbiAgICAgIG9uRXJyb3I6IHRbMV0gfHwgKHRbMV0gPSAobCkgPT4gZS4kZW1pdChcImVycm9yXCIpKSxcbiAgICAgIG9uTG9hZGluZzogdFsyXSB8fCAodFsyXSA9IChsKSA9PiBlLiRlbWl0KFwibG9hZGluZ1wiKSksXG4gICAgICBvbkVuZGVkOiB0WzNdIHx8ICh0WzNdID0gKGwpID0+IGUuJGVtaXQoXCJlbmRlZFwiKSlcbiAgICB9LCBudWxsLCA4LCBbXCJzcmNcIiwgXCJtdXRlZFwiLCBcImxvb3BcIiwgXCJwcmVsb2FkXCIsIFwicGxheXMtd2hlblwiLCBcInBsYXliYWNrLXJhdGVcIiwgXCJ0cmFuc2l0aW9uXCIsIFwib2JqZWN0LWZpdFwiLCBcIm9uUmVhZHlcIl0pLFxuICAgIGUub3ZlcmxheSA/IChzKCksIHAoYiwge1xuICAgICAga2V5OiAxLFxuICAgICAgb3ZlcmxheTogZS5vdmVybGF5XG4gICAgfSwgbnVsbCwgOCwgW1wib3ZlcmxheVwiXSkpIDogaChcIlwiLCAhMCksXG4gICAgZChcImRpdlwiLCBLLCBbXG4gICAgICBqKGUuJHNsb3RzLCBcImRlZmF1bHRcIiwge30sIHZvaWQgMCwgITApXG4gICAgXSlcbiAgXSwgNTEyKTtcbn1cbmNvbnN0IFggPSAvKiBAX19QVVJFX18gKi8gYShVLCBbW1wicmVuZGVyXCIsIFFdLCBbXCJfX3Njb3BlSWRcIiwgXCJkYXRhLXYtNzY0OWMyNGNcIl1dKSwgWiA9IHtcbiAgaW5zdGFsbChlKSB7XG4gICAgZS5jb21wb25lbnQoXCJWaWRlb0JhY2tncm91bmRcIiwgWCk7XG4gIH1cbn07XG5leHBvcnQge1xuICBaIGFzIFBsdWdpbixcbiAgWCBhcyBkZWZhdWx0XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/vue-responsive-video-background-player/dist/vue-responsive-video-background-player.mjs\n");

/***/ })

});