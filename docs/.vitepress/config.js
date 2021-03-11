const base = process.env.NODE_ENV === 'production' ? '/day-ui-docs' : ''
const { resolve } = require('path')

module.exports = {
  title: 'day-ui',
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
          { text: 'Button', link: '/components/button/' },
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
          { text: '常见问题', link: '/en/components/issues/' }
        ]
      }
    },
    search: {
      searchMaxSuggestions: 10
    },
    repo: 'daywang/day-ui',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true
  }
}
