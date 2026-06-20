<script setup lang="ts">
import { onMounted } from 'vue'

const LOCALE_SOURCE_MANUAL = '1'

const supportedLocales = [
  'zh-CN', 'zh-TW', 'en', 'ja', 'ko-KR',
  'es', 'pt-BR', 'fr-FR', 'de-DE', 'it-IT', 'nl-NL', 'pl-PL', 'cs-CZ', 'uk-UA',
  'ru-RU', 'tr-TR', 'ar-SA', 'hi', 'bn-BD', 'th-TH', 'vi-VN', 'ms-MY', 'id-ID',
  'ur', 'ta', 'fa', 'my', 'ps'
]

const docsLocalePath: Record<string, string> = {
  'zh-CN': 'cn',
  'zh-TW': 'zh-TW',
  en: 'en',
  ja: 'ja-JP',
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

function normalizeLocaleCandidate(rawLocale?: string | null) {
  if (!rawLocale) return null

  const locale = rawLocale.trim()
  if (supportedLocales.includes(locale)) return locale

  const normalized = locale.toLowerCase()

  if (
    normalized.startsWith('zh-tw') ||
    normalized.startsWith('zh-hk') ||
    normalized.startsWith('zh-hant')
  ) return 'zh-TW'
  if (normalized.startsWith('zh')) return 'zh-CN'
  if (normalized.startsWith('ja')) return 'ja'
  if (normalized.startsWith('ko')) return 'ko-KR'
  if (normalized.startsWith('es')) return 'es'
  if (normalized.startsWith('pt')) return 'pt-BR'
  if (normalized.startsWith('fr')) return 'fr-FR'
  if (normalized.startsWith('de')) return 'de-DE'
  if (normalized.startsWith('it')) return 'it-IT'
  if (normalized.startsWith('nl')) return 'nl-NL'
  if (normalized.startsWith('pl')) return 'pl-PL'
  if (normalized.startsWith('cs')) return 'cs-CZ'
  if (normalized.startsWith('uk')) return 'uk-UA'
  if (normalized.startsWith('ru')) return 'ru-RU'
  if (normalized.startsWith('tr')) return 'tr-TR'
  if (normalized.startsWith('ar')) return 'ar-SA'
  if (normalized.startsWith('hi')) return 'hi'
  if (normalized.startsWith('bn')) return 'bn-BD'
  if (normalized.startsWith('th')) return 'th-TH'
  if (normalized.startsWith('vi')) return 'vi-VN'
  if (normalized.startsWith('ms')) return 'ms-MY'
  if (normalized.startsWith('id')) return 'id-ID'
  if (normalized.startsWith('ur')) return 'ur'
  if (normalized.startsWith('ta')) return 'ta'
  if (normalized.startsWith('fa')) return 'fa'
  if (normalized.startsWith('my')) return 'my'
  if (normalized.startsWith('ps')) return 'ps'
  if (normalized.startsWith('en')) return 'en'

  return null
}

function getSavedManualLocale() {
  try {
    const saved = localStorage.getItem('locale')
    const savedSource = localStorage.getItem('localeSource')
    if (
      savedSource === LOCALE_SOURCE_MANUAL &&
      saved &&
      supportedLocales.includes(saved)
    ) {
      return saved
    }
  } catch (error) {
    return null
  }

  return null
}

function getDefaultLocale() {
  const saved = getSavedManualLocale()
  if (saved) return saved

  const browserLocales = Array.isArray(navigator.languages) ? navigator.languages : []
  for (const candidate of browserLocales) {
    const preferredLocale = normalizeLocaleCandidate(candidate)
    if (preferredLocale) return preferredLocale
  }

  return normalizeLocaleCandidate(navigator.language || navigator.userLanguage) || 'en'
}

onMounted(() => {
  const targetPath = docsLocalePath[getDefaultLocale()] || 'en'
  window.location.replace(`/${targetPath}/`)
})
</script>
