const { default: vuePlugin } = require('@vitejs/plugin-vue');
const { defineConfig } = require('vite');
const path = require('node:path');

module.exports = defineConfig({
  plugins: [vuePlugin()],
  build: {
    lib: {
      name: 'MonacoEditor',
      entry: path.resolve(__dirname, 'MonacoEditor.vue'),
      fileName: (format) => `MonacoEditor.${format}.js`,
      formats: ['umd', 'es'],
    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue',
          'monaco-editor/esm/vs/editor/editor.api': 'monaco',
        },
      },
      external: ['vue', 'monaco-editor/esm/vs/editor/editor.api'],
    },
    assetsDir: '.',
  },
});
