import type { DefaultTheme } from 'vitepress'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

// 文档结构已经固定，这里只维护静态路径；显示文字从各语言 Markdown 的 H1 读取。
const docsRoot = dirname(dirname(fileURLToPath(import.meta.url)))

const uploadItems = [
  'upload/',
  'upload/telegram',
  'upload/cloudflare-r2',
  'upload/s3',
  'upload/webdav',
  'upload/discord',
  'upload/huggingface',
  'upload/github-releases',
  'upload/gitlab-packages',
  'upload/onedrive',
  'upload/google-drive',
  'upload/dropbox',
  'upload/yandex',
  'upload/pcloud'
] as const

const uploadChannelLabels: Record<string, string> = {
  'upload/telegram': 'Telegram',
  'upload/cloudflare-r2': 'Cloudflare R2',
  'upload/s3': 'S3',
  'upload/webdav': 'WebDAV',
  'upload/discord': 'Discord',
  'upload/huggingface': 'Hugging Face',
  'upload/github-releases': 'GitHub Releases',
  'upload/gitlab-packages': 'GitLab Packages',
  'upload/onedrive': 'OneDrive',
  'upload/google-drive': 'Google Drive',
  'upload/dropbox': 'Dropbox',
  'upload/yandex': 'Yandex',
  'upload/pcloud': 'pCloud'
}

const safetyItems = [
  'Safety/authentication-and-login-devices',
  'Safety/cloudflare-api-token',
  'Safety/image-moderation-and-access-mode',
  'Safety/user-rate-limits',
  'Safety/webdav-site-access',
  'Safety/api-token-upload',
  'Safety/api-token-delete',
  'Safety/api-token-list',
  'Safety/api-token-file-management',
  'Safety/api-token-management'
] as const

const otherItems = [
  'Other/auto-tagging',
  'Other/blog',
  'Other/federated-distributed-index',
  'Other/ip-geolocation-and-user-management',
  'Other/magnet-transfer',
  'Other/ocr',
  'Other/random-image-api-and-public-gallery',
  'Other/redundant-backup-and-read-source'
] as const

const pageItems = [
  'Page/page-settings',
  'Page/sponsor-coffee'
] as const

const sectionLabels: Record<string, Record<string, string>> = {
  en: { upload: 'Upload', safety: 'Safety', other: 'Other', page: 'Page' },
  cn: { upload: '上传', safety: '安全', other: '其他', page: '页面' },
  'zh-TW': { upload: '上傳', safety: '安全', other: '其他', page: '頁面' },
  'ja-JP': { upload: 'アップロード', safety: 'セキュリティ', other: 'その他', page: 'ページ' },
  'ko-KR': { upload: '업로드', safety: '보안', other: '기타', page: '페이지' },
  es: { upload: 'Subidas', safety: 'Seguridad', other: 'Otros', page: 'Página' },
  'pt-BR': { upload: 'Uploads', safety: 'Segurança', other: 'Outros', page: 'Página' },
  'fr-FR': { upload: 'Envoi', safety: 'Sécurité', other: 'Autres', page: 'Page' },
  'de-DE': { upload: 'Upload', safety: 'Sicherheit', other: 'Weitere', page: 'Seite' },
  'it-IT': { upload: 'Caricamento', safety: 'Sicurezza', other: 'Altro', page: 'Pagina' },
  'nl-NL': { upload: 'Uploaden', safety: 'Beveiliging', other: 'Overig', page: 'Pagina' },
  'pl-PL': { upload: 'Przesyłanie', safety: 'Bezpieczeństwo', other: 'Inne', page: 'Strona' },
  'cs-CZ': { upload: 'Nahrávání', safety: 'Zabezpečení', other: 'Další', page: 'Stránka' },
  'uk-UA': { upload: 'Завантаження', safety: 'Безпека', other: 'Інше', page: 'Сторінка' },
  'ru-RU': { upload: 'Загрузка', safety: 'Безопасность', other: 'Другое', page: 'Страница' },
  'tr-TR': { upload: 'Yükleme', safety: 'Güvenlik', other: 'Diğer', page: 'Sayfa' },
  'ar-SA': { upload: 'الرفع', safety: 'الأمان', other: 'أخرى', page: 'الصفحة' },
  hi: { upload: 'अपलोड', safety: 'सुरक्षा', other: 'अन्य', page: 'पेज' },
  'bn-BD': { upload: 'আপলোড', safety: 'নিরাপত্তা', other: 'অন্যান্য', page: 'পৃষ্ঠা' },
  'th-TH': { upload: 'อัปโหลด', safety: 'ความปลอดภัย', other: 'อื่นๆ', page: 'หน้าเว็บ' },
  'vi-VN': { upload: 'Tải lên', safety: 'Bảo mật', other: 'Khác', page: 'Trang' },
  'ms-MY': { upload: 'Muat naik', safety: 'Keselamatan', other: 'Lain-lain', page: 'Halaman' },
  'id-ID': { upload: 'Unggahan', safety: 'Keamanan', other: 'Lainnya', page: 'Halaman' },
  ur: { upload: 'اپ لوڈ', safety: 'سیکیورٹی', other: 'دیگر', page: 'صفحہ' },
  ta: { upload: 'பதிவேற்றம்', safety: 'பாதுகாப்பு', other: 'மற்றவை', page: 'பக்கம்' },
  fa: { upload: 'آپلود', safety: 'امنیت', other: 'سایر', page: 'صفحه' },
  my: { upload: 'Upload', safety: 'Security', other: 'Other', page: 'Page' },
  ps: { upload: 'Upload', safety: 'Security', other: 'Other', page: 'Page' }
}

function getLocaleFromPrefix(prefix: string) {
  return prefix.replace(/^\/|\/$/g, '')
}

function getMarkdownPath(locale: string, link: string) {
  const normalizedLink = link.endsWith('/') ? `${link}index` : link
  return join(docsRoot, locale, `${normalizedLink}.md`)
}

function getTitleFromMarkdown(locale: string, link: string) {
  const content = readFileSync(getMarkdownPath(locale, link), 'utf-8')
  const title = content.match(/^#\s+(.+)$/m)?.[1]?.trim()
  return title || link
}

function toSidebarItems(prefix: string, items: readonly string[], labels?: Record<string, string>): DefaultTheme.SidebarItem[] {
  const locale = getLocaleFromPrefix(prefix)

  return items
    .filter((link) => existsSync(getMarkdownPath(locale, link)))
    .map((link) => ({
      text: labels?.[link] || getTitleFromMarkdown(locale, link),
      link: `${prefix}${link}`
    }))
}

function buildSidebar(prefix: string): DefaultTheme.SidebarItem[] {
  const locale = getLocaleFromPrefix(prefix)
  const labels = sectionLabels[locale] || sectionLabels.en

  return [
    {
      text: labels.upload,
      collapsed: false,
      items: toSidebarItems(prefix, uploadItems, uploadChannelLabels)
    },
    {
      text: labels.safety,
      collapsed: false,
      items: toSidebarItems(prefix, safetyItems)
    },
    {
      text: labels.other,
      collapsed: false,
      items: toSidebarItems(prefix, otherItems)
    },
    {
      text: labels.page,
      collapsed: false,
      items: toSidebarItems(prefix, pageItems)
    }
  ]
}

export const sidebar: DefaultTheme.Sidebar = {
  '/ar-SA/': buildSidebar('/ar-SA/'),
  '/bn-BD/': buildSidebar('/bn-BD/'),
  '/cn/': buildSidebar('/cn/'),
  '/cs-CZ/': buildSidebar('/cs-CZ/'),
  '/de-DE/': buildSidebar('/de-DE/'),
  '/en/': buildSidebar('/en/'),
  '/es/': buildSidebar('/es/'),
  '/fa/': buildSidebar('/fa/'),
  '/fr-FR/': buildSidebar('/fr-FR/'),
  '/hi/': buildSidebar('/hi/'),
  '/id-ID/': buildSidebar('/id-ID/'),
  '/it-IT/': buildSidebar('/it-IT/'),
  '/ja-JP/': buildSidebar('/ja-JP/'),
  '/ko-KR/': buildSidebar('/ko-KR/'),
  '/ms-MY/': buildSidebar('/ms-MY/'),
  '/my/': buildSidebar('/my/'),
  '/nl-NL/': buildSidebar('/nl-NL/'),
  '/pl-PL/': buildSidebar('/pl-PL/'),
  '/ps/': buildSidebar('/ps/'),
  '/pt-BR/': buildSidebar('/pt-BR/'),
  '/ru-RU/': buildSidebar('/ru-RU/'),
  '/ta/': buildSidebar('/ta/'),
  '/th-TH/': buildSidebar('/th-TH/'),
  '/tr-TR/': buildSidebar('/tr-TR/'),
  '/uk-UA/': buildSidebar('/uk-UA/'),
  '/ur/': buildSidebar('/ur/'),
  '/vi-VN/': buildSidebar('/vi-VN/'),
  '/zh-TW/': buildSidebar('/zh-TW/')
}
