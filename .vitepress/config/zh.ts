import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: 'BotSharp is an open source application framework',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/zh/guide/': { base: '/zh/guide/', items: sidebarGuide() },
      '/zh/reference/': { base: '/zh/reference/', items: sidebarReference() }
    },

    editLink: {
      pattern: 'https://github.com/GreenShadeZhang/botsharp-doc/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `Copyright Since 2018, SciSharp STACK.`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '指南',
      link: '/guide/quick-start/get-started',
      activeMatch: '/zh/guide/'
    },
    {
      text: '参考',
      link: '/zh/reference/cli',
      activeMatch: '/zh/reference/'
    },
    {
      text: '4.0',
      items: [
        {
          text: '更新日志',
          link: 'https://github.com/SciSharp/BotSharp/releases/'
        },
        {
          text: '参与贡献',
          link: 'https://github.com/SciSharp/BotSharp/graphs/contributors'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'BotSharp 入门',
      collapsed: false,
      items: [
        { text: '概述', link: 'quick-start/overview' },
        { text: '快速开始', link: 'quick-start/get-started' },
        { text: '安装', link: 'quick-start/installation' },
      ]
    },
    {
      text: '智能体',
      collapsed: false,
      items: [
        { text: '智能体 介绍', link: 'agent/intro' },
        { text: '路由', link: 'agent/router' },
        { text: '智能体 钩子', link: 'agent/hook' }
      ]
    },
    {
      text: '会话',
      collapsed: false,
      items: [
        { text: '会话', link: 'conversation/intro' },
        {
          text: '会话状态',
          link: 'conversation/state'
        },
        { text: '会话 Hook', link: 'conversation/hook' }
      ]
    },
    {
      text: '交互渠道',
      collapsed: false,
      items: [
        { text: '渠道介绍', link: 'channels/intro' },
        { text: '消息组件', link: 'channels/components' },
        { text: 'Messenger', link: 'channels/messenger' },
        { text: '微信', link: 'channels/wechat' }
      ]
    },
    {
      text: '知识库',
      collapsed: false,
      items: [
        { text: '文本嵌入', link: 'knowledge-base/text-embedding' },
        { text: '向量数据库', link: 'knowledge-base/vector-database' },
        { text: '相似性搜索', link: 'knowledge-base/similarity-search' },
        { text: '构建问答机器人', link: 'knowledge-base/build-qa-bot' }
      ]
    },
    {
      text: '提示工程',
      collapsed: false,
      items: [
        { text: '提示工程', link: 'llm/prompt' },
        { text: '模板', link: 'llm/template' },
        { text: '函数', link: 'llm/function' },
        { text: '少样本学习', link: 'llm/few-shot-learning' }
      ]
    },
    {
      text: '使用本地 LLM 模型',
      collapsed: false,
      items: [
        { text: '配置 LLamaSharp', link: 'llama-sharp/config-llamasharp' },
        { text: '在 BotSharp 中使用 LLamaSharp', link: 'llama-sharp/use-llamasharp-in-ui' }
      ]
    },
    {
      text: '架构',
      collapsed: false,
      items: [
        { text: '认证', link: 'architecture/authentication' },
        { text: '插件', link: 'architecture/plugin' },
        { text: 'Hooks', link: 'architecture/hooks' },
        { text: '路由', link: 'architecture/routing' },
        { text: '智能体 工具', link: 'architecture/agent-utility' },
        { text: '日志', link: 'architecture/logging' },
        { text: '数据存储', link: 'architecture/data-persistence' }
      ]
    },
    {
      text: '工具',
      collapsed: false,
      items: [
        { text: '本地 Whisper', link: 'utilities/local-whisper' }
      ]
    },
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '参考',
      items: [
        { text: 'CLI', link: 'cli' },
      ]
    }
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}
