import { defineConfig } from 'vite';
import mkcert from "vite-plugin-mkcert";
import laravel from 'laravel-vite-plugin';
import * as path from "path";
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    server: {
        https: true,
        hmr: {
            overlay: true,
            host: 'localhost'
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
    plugins: [
        mkcert(),
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
