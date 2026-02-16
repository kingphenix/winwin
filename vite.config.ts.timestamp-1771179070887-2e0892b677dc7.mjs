// vite.config.ts
import { defineConfig } from "file:///C:/Users/USER/Desktop/WinWin/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/USER/Desktop/WinWin/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [vue()],
  build: {
    target: "esnext",
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor": ["vue", "vue-i18n", "gsap"]
        }
      }
    }
  },
  assetsInclude: ["**/*.svg", "**/*.csv"]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVU0VSXFxcXERlc2t0b3BcXFxcV2luV2luXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVU0VSXFxcXERlc2t0b3BcXFxcV2luV2luXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9VU0VSL0Rlc2t0b3AvV2luV2luL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbdnVlKCldLFxuICBidWlsZDoge1xuICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gICAgbWluaWZ5OiAnZXNidWlsZCcsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgICd2ZW5kb3InOiBbJ3Z1ZScsICd2dWUtaTE4bicsICdnc2FwJ11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgYXNzZXRzSW5jbHVkZTogWycqKi8qLnN2ZycsICcqKi8qLmNzdiddLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1IsU0FBUyxvQkFBb0I7QUFDN1MsT0FBTyxTQUFTO0FBRWhCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFBQSxFQUNmLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxVQUNaLFVBQVUsQ0FBQyxPQUFPLFlBQVksTUFBTTtBQUFBLFFBQ3RDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxlQUFlLENBQUMsWUFBWSxVQUFVO0FBQ3hDLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
