# ImgBed Documentation

Documentation for ImgBed, an open-source self-hosted image and file hosting project built around the Cloudflare ecosystem.

ImgBed is designed for people who want to run their own lightweight image/file hosting service, manage files from a web dashboard, and connect the deployment to different storage backends instead of relying on a hosted SaaS platform.

## Links

- Documentation: <https://md.ccwu.cc/>
- Deployment page: <https://glow.ccwu.cc/reg/IMG-FREELY>
- Documentation repository: <https://github.com/axibayuit-a11y/imgbed-docs>

The deployment page is an optional helper for the Cloudflare setup flow. The project can also be studied and deployed manually from the documentation.

## What ImgBed Provides

- Image and file upload
- Web-based file management
- API Token upload, listing, deletion, file management, and configuration management
- Multiple upload/storage channels
- Public and private access control
- Upload source switching and file metadata editing
- Admin dashboard for site, security, upload, and storage settings
- Cloudflare Pages and Worker deployment modes
- Multilingual documentation for deployment, usage, and API workflows

## Technical Scope

The project documentation covers:

- Cloudflare deployment and configuration
- Upload channel setup
- API Token usage
- File management workflows
- Security and access-control settings
- Page and site configuration
- Troubleshooting and common operational tasks

## Documentation Structure

The documentation is organized by language and topic. Each language directory generally follows the same high-level sections:

- `upload/`: upload channel setup and storage provider configuration
- `Safety/`: security, access control, API Token, and authentication documentation
- `Other/`: additional tools, deployment notes, FAQ, and operational guidance
- `Page/`: page, site, and display configuration
- `image/`: shared screenshots and documentation assets

## Languages

This repository maintains user documentation in the following languages:

- `cn/`: Simplified Chinese
- `en/`: English
- `zh-TW/`: Traditional Chinese
- `ja-JP/`: Japanese
- `ko-KR/`: Korean
- `es/`: Spanish
- `pt-BR/`: Brazilian Portuguese
- `fr-FR/`: French
- `de-DE/`: German
- `it-IT/`: Italian
- `nl-NL/`: Dutch
- `pl-PL/`: Polish
- `cs-CZ/`: Czech
- `uk-UA/`: Ukrainian
- `ru-RU/`: Russian
- `tr-TR/`: Turkish
- `ar-SA/`: Arabic
- `hi/`: Hindi
- `bn-BD/`: Bengali
- `th-TH/`: Thai
- `vi-VN/`: Vietnamese
- `ms-MY/`: Malay
- `id-ID/`: Indonesian
- `ur/`: Urdu
- `ta/`: Tamil
- `fa/`: Persian
- `my/`: Burmese
- `ps/`: Pashto

## Local Development

This documentation site is built with VitePress.

```bash
npm install
npm run docs:dev
```

Build the static documentation site:

```bash
npm run docs:build
```

Preview the production build:

```bash
npm run docs:preview
```

## Translation Notes

The Chinese and English documentation are used as the primary references for localization. Translations should preserve technical identifiers exactly, including API parameters, command-line flags, environment variables, code blocks, URLs, file paths, HTTP headers, and storage channel keys.

## Feedback

Feedback is welcome, especially on:

- Deployment flow clarity
- API Token documentation
- Security and permission descriptions
- Missing self-hosting use cases
- Translation quality and technical terminology
