// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import node from '@astrojs/node';
import { loadEnv } from "vite";

// https://astro.build/config
export default defineConfig({
    security: {
        checkOrigin: false
    },
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [alpinejs()],
    output: 'server',
    adapter: node({
        mode: 'standalone'
    }),
    server: {
        allowedHosts: ['falabaratas.cuentamemilongas.com']
    },
    env: {
        schema: {
            SMTP_HOST: envField.string({ context: "server", access: "public", default: 'localhost' }),
            SMTP_PORT: envField.number({ context: "server", access: "public", default: 25 }),
            SMTP_USERNAME: envField.string({ context: "server", access: "public", default: '' }),
            SMTP_PASSWORD: envField.string({ context: "server", access: "public", default: '' }),
            SMTP_SECURE: envField.boolean({ context: "server", access: "public", default: false }),
            SMTP_DESTINATION: envField.string({ context: "server", access: "public", default: '' }),
        }
    }
});
