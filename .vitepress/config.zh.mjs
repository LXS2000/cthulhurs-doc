import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/zh/'},
            {text: '文档', link: '/zh/guide/命令行'}
        ],
        lastUpdatedText: "最近更新",
        docFooter: {
            "prev": "前一篇",
            "next": "后一篇"
        },
        outline: {level: [1, 2, 3]},
        sidebar: [
            {
                text: '快速开始',
                items: [
                    {text: '下载', link: '/zh/guide/下载'},
                    {text: '命令行', link: '/zh/guide/命令行'},
                    {text: '运行', link: '/zh/guide/运行'},
                    {
                        text: '开发', link:
                            '/zh/guide/dev/', items:
                            [
                                {text: "服务端环境", link: "/zh/guide/dev/服务端"},
                                {text: "网页端环境", link: "/zh/guide/dev/网页端"},
                                {text: "服务器对外接口", link: "/zh/guide/dev/服务器对外接口",},
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
