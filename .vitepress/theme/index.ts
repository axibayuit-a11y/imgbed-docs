import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import RedirectHome from './RedirectHome.vue'

const docsPathToLocale: Record<string, string> = {
  cn: 'zh-CN',
  'zh-TW': 'zh-TW',
  en: 'en',
  'ja-JP': 'ja',
  'ko-KR': 'ko-KR',
  es: 'es',
  'pt-BR': 'pt-BR',
  'fr-FR': 'fr-FR',
  'de-DE': 'de-DE',
  'it-IT': 'it-IT',
  'nl-NL': 'nl-NL',
  'pl-PL': 'pl-PL',
  'cs-CZ': 'cs-CZ',
  'uk-UA': 'uk-UA',
  'ru-RU': 'ru-RU',
  'tr-TR': 'tr-TR',
  'ar-SA': 'ar-SA',
  hi: 'hi',
  'bn-BD': 'bn-BD',
  'th-TH': 'th-TH',
  'vi-VN': 'vi-VN',
  'ms-MY': 'ms-MY',
  'id-ID': 'id-ID',
  ur: 'ur',
  ta: 'ta',
  fa: 'fa',
  my: 'my',
  ps: 'ps'
}

function getDocsPathLocale(pathname: string) {
  const firstSegment = pathname.split('/').filter(Boolean)[0]
  return firstSegment ? docsPathToLocale[firstSegment] || null : null
}

function rememberManualLocale(locale: string) {
  try {
    localStorage.setItem('locale', locale)
    localStorage.setItem('localeSource', '1')
  } catch (error) {
    // 浏览器禁用 localStorage 时不影响文档正常跳转。
  }
}

function installLocaleClickSync() {
  document.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof Element)) return

    const link = target.closest('a')
    if (!link) return

    const href = link.getAttribute('href')
    if (!href || href.startsWith('http') || href.startsWith('#')) return

    const url = new URL(href, window.location.href)
    if (url.origin !== window.location.origin) return

    const targetLocale = getDocsPathLocale(url.pathname)
    if (!targetLocale) return

    const currentLocale = getDocsPathLocale(window.location.pathname)
    if (targetLocale !== currentLocale) {
      rememberManualLocale(targetLocale)
    }
  })
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RedirectHome', RedirectHome)

    if (typeof window === 'undefined') return

    installLocaleClickSync()
  }
} satisfies Theme
