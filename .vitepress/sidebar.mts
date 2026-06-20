import type { DefaultTheme } from 'vitepress'

// 文档结构已经固定，这里只维护静态索引，不扫描目录，避免构建时出现隐式变化。
const uploadItems = [
  ['Upload overview', 'upload/'],
  ['Telegram', 'upload/telegram'],
  ['Cloudflare R2', 'upload/cloudflare-r2'],
  ['S3', 'upload/s3'],
  ['WebDAV', 'upload/webdav'],
  ['Discord', 'upload/discord'],
  ['Hugging Face', 'upload/huggingface'],
  ['GitHub Releases', 'upload/github-releases'],
  ['GitLab Packages', 'upload/gitlab-packages'],
  ['OneDrive', 'upload/onedrive'],
  ['Google Drive', 'upload/google-drive'],
  ['Dropbox', 'upload/dropbox'],
  ['Yandex', 'upload/yandex'],
  ['pCloud', 'upload/pcloud']
] as const

const safetyItems = [
  ['Authentication and Login Devices', 'Safety/authentication-and-login-devices'],
  ['Cloudflare API Token', 'Safety/cloudflare-api-token'],
  ['Image Moderation and Access Mode', 'Safety/image-moderation-and-access-mode'],
  ['User Rate Limits', 'Safety/user-rate-limits'],
  ['WebDAV Site Access', 'Safety/webdav-site-access']
] as const

const otherItems = [
  ['Auto Tagging', 'Other/auto-tagging'],
  ['Blog', 'Other/blog'],
  ['Federated Distributed Index', 'Other/federated-distributed-index'],
  ['IP Geolocation and User Management', 'Other/ip-geolocation-and-user-management'],
  ['Magnet Transfer', 'Other/magnet-transfer'],
  ['OCR', 'Other/ocr'],
  ['Random Image API and Public Gallery', 'Other/random-image-api-and-public-gallery'],
  ['Redundant Backup and Read Source Switching', 'Other/redundant-backup-and-read-source']
] as const

const pageItems = [
  ['Page Settings', 'Page/page-settings']
] as const

function toSidebarItems(prefix: string, items: readonly (readonly [string, string])[]): DefaultTheme.SidebarItem[] {
  return items.map(([text, link]) => ({
    text,
    link: `${prefix}${link}`
  }))
}

function buildSidebar(prefix: string): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Upload',
      collapsed: false,
      items: toSidebarItems(prefix, uploadItems)
    },
    {
      text: 'Safety',
      collapsed: false,
      items: toSidebarItems(prefix, safetyItems)
    },
    {
      text: 'Other',
      collapsed: false,
      items: toSidebarItems(prefix, otherItems)
    },
    {
      text: 'Page',
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
