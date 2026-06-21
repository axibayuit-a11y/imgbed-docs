import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.mts'

// VitePress 只负责展示静态 Markdown；Cloudflare Pages 负责托管构建产物。
export default defineConfig({
  title: 'ImgBed Docs',
  description: 'User documentation for CloudFlare ImgBed',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  head: [
    ['meta', { name: 'theme-color', content: '#2563eb' }]
  ],
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  locales: {
    en: {
      label: 'English',
      lang: 'en-US'
    },
    cn: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-Hant-TW'
    },
    'ja-JP': {
      label: '日本語',
      lang: 'ja-JP'
    },
    'ko-KR': {
      label: '한국어',
      lang: 'ko-KR'
    },
    es: {
      label: 'Español',
      lang: 'es'
    },
    'pt-BR': {
      label: 'Português do Brasil',
      lang: 'pt-BR'
    },
    'fr-FR': {
      label: 'Français',
      lang: 'fr-FR'
    },
    'de-DE': {
      label: 'Deutsch',
      lang: 'de-DE'
    },
    'it-IT': {
      label: 'Italiano',
      lang: 'it-IT'
    },
    'nl-NL': {
      label: 'Nederlands',
      lang: 'nl-NL'
    },
    'pl-PL': {
      label: 'Polski',
      lang: 'pl-PL'
    },
    'cs-CZ': {
      label: 'Čeština',
      lang: 'cs-CZ'
    },
    'uk-UA': {
      label: 'Українська',
      lang: 'uk-UA'
    },
    'ru-RU': {
      label: 'Русский',
      lang: 'ru-RU'
    },
    'tr-TR': {
      label: 'Türkçe',
      lang: 'tr-TR'
    },
    'ar-SA': {
      label: 'العربية',
      lang: 'ar-SA'
    },
    hi: {
      label: 'हिन्दी',
      lang: 'hi'
    },
    'bn-BD': {
      label: 'বাংলা',
      lang: 'bn-BD'
    },
    'th-TH': {
      label: 'ไทย',
      lang: 'th-TH'
    },
    'vi-VN': {
      label: 'Tiếng Việt',
      lang: 'vi-VN'
    },
    'ms-MY': {
      label: 'Bahasa Melayu',
      lang: 'ms-MY'
    },
    'id-ID': {
      label: 'Bahasa Indonesia',
      lang: 'id-ID'
    },
    ur: {
      label: 'اردو',
      lang: 'ur'
    },
    ta: {
      label: 'தமிழ்',
      lang: 'ta'
    },
    fa: {
      label: 'فارسی',
      lang: 'fa'
    },
    my: {
      label: 'မြန်မာ',
      lang: 'my'
    },
    ps: {
      label: 'پښتو',
      lang: 'ps'
    }
  },
  themeConfig: {
    nav: [],
    sidebar,
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/axibayuit-a11y/imgbed-docs' }
    ],
    footer: {
      message: 'Released as user documentation for CloudFlare ImgBed.'
    }
  }
})
