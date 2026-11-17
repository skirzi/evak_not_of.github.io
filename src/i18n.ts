import { createI18n } from 'vue-i18n'

function loadLocaleMessages(): Record<string, any> {
  const modules = import.meta.glob('./locales/*.json', { eager: true })
  const messages: Record<string, any> = {}

  for (const path in modules) {
    const matched = path.match(/([A-Za-z0-9-_]+)\.json$/i)
    if (matched && matched.length > 1 && matched[1]) {
      const locale: string = matched[1]
      const module = modules[path] as any
      messages[locale] = module.default || module
    }
  }
  return messages
}

function detectLanguage(): string {
  const nav = window.navigator as any
  const browserLang: string = (nav.userLanguage || nav.language || 'ru').toLowerCase()

  if (browserLang.startsWith('kk') || browserLang.startsWith('kz')) {
    return 'kk'
  }
  if (browserLang.startsWith('en')) {
    return 'en'
  }

  return 'ru'
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || detectLanguage() || 'ru',
  fallbackLocale: 'ru',
  messages: loadLocaleMessages(),
})

export { i18n }
