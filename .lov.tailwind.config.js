import { createRequire } from "module"; const require = createRequire(import.meta.url);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/tailwindcss/lib/util/createPlugin.js
var require_createPlugin = __commonJS({
  "node_modules/tailwindcss/lib/util/createPlugin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    function createPlugin(plugin, config) {
      return {
        handler: plugin,
        config
      };
    }
    createPlugin.withOptions = function(pluginFunction, configFunction = () => ({})) {
      const optionsFunction = function(options) {
        return {
          __options: options,
          handler: pluginFunction(options),
          config: configFunction(options)
        };
      };
      optionsFunction.__isOptionsFunction = true;
      optionsFunction.__pluginFunction = pluginFunction;
      optionsFunction.__configFunction = configFunction;
      return optionsFunction;
    };
    var _default = createPlugin;
  }
});

// node_modules/tailwindcss/lib/public/create-plugin.js
var require_create_plugin = __commonJS({
  "node_modules/tailwindcss/lib/public/create-plugin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _createPlugin = /* @__PURE__ */ _interop_require_default(require_createPlugin());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _default = _createPlugin.default;
  }
});

// node_modules/tailwindcss/plugin.js
var require_plugin = __commonJS({
  "node_modules/tailwindcss/plugin.js"(exports, module) {
    var createPlugin = require_create_plugin();
    module.exports = (createPlugin.__esModule ? createPlugin : { default: createPlugin }).default;
  }
});

// node_modules/tailwindcss-animate/index.js
var require_tailwindcss_animate = __commonJS({
  "node_modules/tailwindcss-animate/index.js"(exports, module) {
    var plugin = require_plugin();
    function filterDefault(values) {
      return Object.fromEntries(
        Object.entries(values).filter(([key]) => key !== "DEFAULT")
      );
    }
    module.exports = plugin(
      ({ addUtilities, matchUtilities, theme }) => {
        addUtilities({
          "@keyframes enter": theme("keyframes.enter"),
          "@keyframes exit": theme("keyframes.exit"),
          ".animate-in": {
            animationName: "enter",
            animationDuration: theme("animationDuration.DEFAULT"),
            "--tw-enter-opacity": "initial",
            "--tw-enter-scale": "initial",
            "--tw-enter-rotate": "initial",
            "--tw-enter-translate-x": "initial",
            "--tw-enter-translate-y": "initial"
          },
          ".animate-out": {
            animationName: "exit",
            animationDuration: theme("animationDuration.DEFAULT"),
            "--tw-exit-opacity": "initial",
            "--tw-exit-scale": "initial",
            "--tw-exit-rotate": "initial",
            "--tw-exit-translate-x": "initial",
            "--tw-exit-translate-y": "initial"
          }
        });
        matchUtilities(
          {
            "fade-in": (value) => ({ "--tw-enter-opacity": value }),
            "fade-out": (value) => ({ "--tw-exit-opacity": value })
          },
          { values: theme("animationOpacity") }
        );
        matchUtilities(
          {
            "zoom-in": (value) => ({ "--tw-enter-scale": value }),
            "zoom-out": (value) => ({ "--tw-exit-scale": value })
          },
          { values: theme("animationScale") }
        );
        matchUtilities(
          {
            "spin-in": (value) => ({ "--tw-enter-rotate": value }),
            "spin-out": (value) => ({ "--tw-exit-rotate": value })
          },
          { values: theme("animationRotate") }
        );
        matchUtilities(
          {
            "slide-in-from-top": (value) => ({
              "--tw-enter-translate-y": `-${value}`
            }),
            "slide-in-from-bottom": (value) => ({
              "--tw-enter-translate-y": value
            }),
            "slide-in-from-left": (value) => ({
              "--tw-enter-translate-x": `-${value}`
            }),
            "slide-in-from-right": (value) => ({
              "--tw-enter-translate-x": value
            }),
            "slide-out-to-top": (value) => ({
              "--tw-exit-translate-y": `-${value}`
            }),
            "slide-out-to-bottom": (value) => ({
              "--tw-exit-translate-y": value
            }),
            "slide-out-to-left": (value) => ({
              "--tw-exit-translate-x": `-${value}`
            }),
            "slide-out-to-right": (value) => ({
              "--tw-exit-translate-x": value
            })
          },
          { values: theme("animationTranslate") }
        );
        matchUtilities(
          { duration: (value) => ({ animationDuration: value }) },
          { values: filterDefault(theme("animationDuration")) }
        );
        matchUtilities(
          { delay: (value) => ({ animationDelay: value }) },
          { values: theme("animationDelay") }
        );
        matchUtilities(
          { ease: (value) => ({ animationTimingFunction: value }) },
          { values: filterDefault(theme("animationTimingFunction")) }
        );
        addUtilities({
          ".running": { animationPlayState: "running" },
          ".paused": { animationPlayState: "paused" }
        });
        matchUtilities(
          { "fill-mode": (value) => ({ animationFillMode: value }) },
          { values: theme("animationFillMode") }
        );
        matchUtilities(
          { direction: (value) => ({ animationDirection: value }) },
          { values: theme("animationDirection") }
        );
        matchUtilities(
          { repeat: (value) => ({ animationIterationCount: value }) },
          { values: theme("animationRepeat") }
        );
      },
      {
        theme: {
          extend: {
            animationDelay: ({ theme }) => ({
              ...theme("transitionDelay")
            }),
            animationDuration: ({ theme }) => ({
              0: "0ms",
              ...theme("transitionDuration")
            }),
            animationTimingFunction: ({ theme }) => ({
              ...theme("transitionTimingFunction")
            }),
            animationFillMode: {
              none: "none",
              forwards: "forwards",
              backwards: "backwards",
              both: "both"
            },
            animationDirection: {
              normal: "normal",
              reverse: "reverse",
              alternate: "alternate",
              "alternate-reverse": "alternate-reverse"
            },
            animationOpacity: ({ theme }) => ({
              DEFAULT: 0,
              ...theme("opacity")
            }),
            animationTranslate: ({ theme }) => ({
              DEFAULT: "100%",
              ...theme("translate")
            }),
            animationScale: ({ theme }) => ({
              DEFAULT: 0,
              ...theme("scale")
            }),
            animationRotate: ({ theme }) => ({
              DEFAULT: "30deg",
              ...theme("rotate")
            }),
            animationRepeat: {
              0: "0",
              1: "1",
              infinite: "infinite"
            },
            keyframes: {
              enter: {
                from: {
                  opacity: "var(--tw-enter-opacity, 1)",
                  transform: "translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))"
                }
              },
              exit: {
                to: {
                  opacity: "var(--tw-exit-opacity, 1)",
                  transform: "translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))"
                }
              }
            }
          }
        }
      }
    );
  }
});

// tailwind.config.ts
var tailwind_config_default = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0B1F3F",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "#F5F5F5",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "#E53935",
          foreground: "hsl(var(--accent-foreground))"
        },
        success: {
          DEFAULT: "#3BB273",
          foreground: "#FFFFFF"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))"
        },
        snfactor: {
          teal: "#9F9EA1",
          dark: "#3F3F3F",
          light: "#F6F6F7",
          accent: "#C8C8C9",
          muted: "#F1F1F1"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      fontFamily: {
        "space": ["Space Grotesk", "sans-serif"]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        "slide-in": {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" }
        },
        "scale-in-out": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" }
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" }
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in": "slide-in 0.4s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "scale-in-out": "scale-in-out 3s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite"
      }
    }
  },
  plugins: [require_tailwindcss_animate()]
};
export {
  tailwind_config_default as default
};
