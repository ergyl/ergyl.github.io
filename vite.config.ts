import {fileURLToPath, URL} from 'node:url'
import {defineConfig, PluginOption} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(async ({mode}) => {
    const plugins: PluginOption[] = [vue(), tailwindcss()];

    if (mode === 'development') {
        const vueDevTools = (await import('vite-plugin-vue-devtools')).default;
        plugins.push(vueDevTools() as PluginOption);  // Type it as PluginOption
    }

    return {
        plugins,
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            },
        },
        base: '/',
    };
});
