const base = process.env.NODE_ENV === 'production' ? '/day-ui-docs' : ''
const { resolve } = require('path')

module.exports = {
  title: 'day-ui',
  head: [
    // 全局样式
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://static-6e274940-2377-4243-9afa-b5a56b9ff767.bspapp.com/css/day-ui-style.css'
      }
    ]
  ],
  description: 'A Component For Vue3',
  // 扫描srcIncludes里面的 *.md文件
  srcIncludes: ['src'],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'day-ui'
    [`day-ui`]: resolve('./src')
  },
  base,
  themeConfig: {
    // logo: '../logo.svg',
    nav: [{ text: 'demo', link: '/math' }],
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'day-ui',
        description: 'A Component For Vue3',
        label: '中文',
        selectText: '语言',
        nav: [{ text: '指南', link: '/' }],
        sidebar: [
          { text: '介绍', link: '/' },
          { text: 'Button 按钮', link: '/components/button/' },
          { text: '按钮组', link: '/components/buttonGroup/' },
          { text: 'Icon 图标', link: '/components/icon/' },
          { text: '常见问题', link: '/components/issues/' }
        ]
      },
      '/en/': {
        lang: 'en-US',
        title: 'day-ui',
        description: 'A Component For Vue3',
        label: 'English',
        selectText: 'Languages',
        nav: [{ text: 'Guide', link: '/' }],
        sidebar: [
          { text: 'Getting Started', link: '/en/' },
          { text: 'Button', link: '/en/components/button/' },
          { text: 'ButtonGroup', link: '/components/buttonGroup/' },
          { text: 'Icon', link: '/en/components/icon/' },
          { text: 'Issues', link: '/en/components/issues/' }
        ]
      }
    },
    search: {
      searchMaxSuggestions: 10
    },
    repo: 'Bluestar123/day-ui-docs',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true
  }
}
