import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.mts'

// VitePress 只负责展示静态 Markdown；Cloudflare Pages 负责托管构建产物。
const languageMenu = {
  text: 'Language',
  items: [
    { text: 'English', link: '/en/' },
    { text: '简体中文', link: '/cn/' },
    { text: '繁體中文', link: '/zh-TW/' },
    { text: '日本語', link: '/ja-JP/' },
    { text: '한국어', link: '/ko-KR/' },
    { text: 'Español', link: '/es/' },
    { text: 'Português do Brasil', link: '/pt-BR/' },
    { text: 'Français', link: '/fr-FR/' },
    { text: 'Deutsch', link: '/de-DE/' },
    { text: 'Italiano', link: '/it-IT/' },
    { text: 'Nederlands', link: '/nl-NL/' },
    { text: 'Polski', link: '/pl-PL/' },
    { text: 'Čeština', link: '/cs-CZ/' },
    { text: 'Українська', link: '/uk-UA/' },
    { text: 'Русский', link: '/ru-RU/' },
    { text: 'Türkçe', link: '/tr-TR/' },
    { text: 'العربية', link: '/ar-SA/' },
    { text: 'हिन्दी', link: '/hi/' },
    { text: 'বাংলা', link: '/bn-BD/' },
    { text: 'ไทย', link: '/th-TH/' },
    { text: 'Tiếng Việt', link: '/vi-VN/' },
    { text: 'Bahasa Melayu', link: '/ms-MY/' },
    { text: 'Bahasa Indonesia', link: '/id-ID/' },
    { text: 'اردو', link: '/ur/' },
    { text: 'தமிழ்', link: '/ta/' },
    { text: 'فارسی', link: '/fa/' },
    { text: 'မြန်မာ', link: '/my/' },
    { text: 'پښتو', link: '/ps/' }
  ]
}

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
    root: {
      label: 'English',
      lang: 'en-US'
    },
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
    nav: [
      { text: 'Docs', link: '/en/' },
      languageMenu
    ],
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
