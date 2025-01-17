import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',
  description: 'BotSharp is an open source application framework',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() }
    },

    editLink: {
      pattern: 'https://github.com/GreenShadeZhang/botsharp-doc/blob/main/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright Since 2018, SciSharp STACK.'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/quick-start/get-started',
      activeMatch: '/guide/'
    },
    {
      text: 'Reference',
      link: '/reference/cli',
      activeMatch: '/reference/'
    },
    {
      text: '4.0',
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/SciSharp/BotSharp/releases/'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/SciSharp/BotSharp/graphs/contributors'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Get Started with BotSharp',
      collapsed: false,
      items: [
        { text: 'Overview', link: 'quick-start/overview' },
        { text: 'Get Started', link: 'quick-start/get-started' },
        { text: 'Installation', link: 'quick-start/installation' },
      ]
    },
    {
      text: 'Agent',
      collapsed: false,
      items: [
        { text: 'Agent Introduction', link: 'agent/intro' },
        { text: 'Router', link: 'agent/router' },
        { text: 'Agent Hook', link: 'agent/hook' }
      ]
    },
    {
      text: 'Conversation',
      collapsed: false,
      items: [
        { text: 'Conversation', link: 'conversation/intro' },
        {
          text: 'Conversation State',
          link: 'conversation/state'
        },
        { text: 'Conversation Hook', link: 'conversation/hook' }
      ]
    },
    {
      text: 'Interactive Channels',
      collapsed: false,
      items: [
        { text: 'Channel Introduction', link: 'channels/intro' },
        { text: 'Messaging Components', link: 'channels/components' },
        { text: 'Messenger', link: 'channels/messenger' },
        { text: 'WeChat', link: 'channels/wechat' }
      ]
    },
    {
      text: 'Knowledge Base',
      collapsed: false,
      items: [
        { text: 'Text Embedding', link: 'knowledge-base/text-embedding' },
        { text: 'Vector Database', link: 'knowledge-base/vector-database' },
        { text: 'Similarity Search', link: 'knowledge-base/similarity-search' },
        { text: 'Build Q&A Bot', link: 'knowledge-base/build-qa-bot' }
      ]
    },
    {
      text: 'Prompt Engineering',
      collapsed: false,
      items: [
        { text: 'Prompt Engineering', link: 'llm/prompt' },
        { text: 'Template', link: 'llm/template' },
        { text: 'Function', link: 'llm/function' },
        { text: 'Few-Shot Learning', link: 'llm/few-shot-learning' }
      ]
    },
    {
      text: 'Use Local LLM Models',
      collapsed: false,
      items: [
        { text: 'Config LLamaSharp', link: 'llama-sharp/config-llamasharp' },
        { text: 'Use LLamaSharp in BotSharp', link: 'llama-sharp/use-llamasharp-in-ui' }
      ]
    },
    {
      text: 'Architecture',
      collapsed: false,
      items: [
        { text: 'Authentication', link: 'architecture/authentication' },
        { text: 'Plug-in', link: 'architecture/plugin' },
        { text: 'Hooks', link: 'architecture/hooks' },
        { text: 'Routing', link: 'architecture/routing' },
        { text: 'Agent Utility', link: 'architecture/agent-utility' },
        { text: 'Logging', link: 'architecture/logging' },
        { text: 'Data Storage', link: 'architecture/data-persistence' }
      ]
    },
    {
      text: 'Utilities',
      collapsed: false,
      items: [
        { text: 'Local Whisper', link: 'utilities/local-whisper' }
      ]
    },
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'CLI', link: 'cli' }
      ]
    }
  ]
}
