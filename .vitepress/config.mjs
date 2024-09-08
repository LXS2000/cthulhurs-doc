import {defineConfig} from 'vitepress'
import zhCfg from './config.zh.mjs'
import enCfg from './config.en.mjs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
    head: [
        [
            'link', {rel: 'icon', href: '/favicon.ico'}
        ]
    ],
    base: "/",
    description: "CthulhuRs-Server a high performance HTTP proxy server",
    locales: {
        root: {
            label: '中文',
            lang: 'zh',
            link: '/zh/',
            ...zhCfg
        },
        en: {
            label: 'English',
            lang: 'en',
            link: '/en/', ...enCfg
        }
    },

})
