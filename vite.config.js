import { defineConfig } from 'vite';
import { ViteHtmlPluginOptions } from 'vite-plugin-html';
const { ViteHtmlPluginOptions } = require('vite-plugin-html');
const htmlPluginOptions = {
  entries: {
    index: './index.html',       // Entry point for index.html
    about: './about.html',       // Entry point for about.html
    projects: './projects.html'  // Entry point for projects.html
  },
};

export default defineConfig({
  plugins: [htmlPluginOptions],
});