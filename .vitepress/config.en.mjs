import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'en-US',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/zh/'},
            {text: 'Document', link: '/zh/guide/cmd'}
        ],
        outline: {level: [1, 2, 3]},
        sidebar: [
            {
                text: 'Quick start',
                items: [
                    {text: 'download', link: '/en/guide/download'},
                    {text: 'cmd', link: '/en/guide/cmd'},
                    {text: 'run', link: '/en/guide/run'},
                    {
                        text: 'develop', link:
                            '/en/guide/dev/', items:
                            [
                                {text: "server environment", link: "/en/guide/dev/server"},
                                {text: "webpage environment", link: "/en/guide/dev/web"},
                                {text: "server apis", link: "/en/guide/dev/api",},
                            ]
                    },
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/LXS2000/CthulhuRs'}
        ],
        footer:
            {
                message: 'Released under the MIT License.',
                copyright: 'Copyright © 2023-present 多维协议 | 滇ICP备2024019825号'
            }
    }
})
