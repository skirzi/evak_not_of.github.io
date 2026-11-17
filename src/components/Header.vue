<template>
  <header class="site-header" v-click-outside="closeMobileMenu">
    <div class="background">
      <div class="container top-container">
        <div class="nav-links">
          <div class="nav-link">
            <a href="https://www.gov.kz/memleket/entities/maidd?lang=ru">{{
              $t('header.miicr')
            }}</a>
          </div>
          <div class="nav-link">
            <a href="https://www.gov.kz/memleket/entities/kazcosmos?lang=ru">{{
              $t('header.aerospace')
            }}</a>
          </div>
          <div class="nav-link nav-link--padded">
            <a href="https://istt.kz/">{{ $t('header.iktt') }}</a>
          </div>
        </div>

        <div class="lang-switcher">
          <div
            class="lang-btn"
            :class="{ 'lang-btn--active': locale === 'kk' }"
            @click="changeLanguage('kk')"
          >
            KZ
          </div>
          <div class="lang-divider">/</div>
          <div
            class="lang-btn"
            :class="{ 'lang-btn--active': locale === 'ru' }"
            @click="changeLanguage('ru')"
          >
            RU
          </div>
          <div class="lang-divider">/</div>
          <div
            class="lang-btn"
            :class="{ 'lang-btn--active': locale === 'en' }"
            @click="changeLanguage('en')"
          >
            EN
          </div>
        </div>
      </div>
    </div>

    <nav class="navbar">
      <div class="navbar-logo">
        <div class="logo-text">
          <router-link to="/">
            <img
              src="../assets/imgs/logo.png"
              alt="Logo"
              class="logo-image"
              style="width: 80px; height: auto"
            />
          </router-link>
        </div>
        <div class="logo-subtitle">{{ $t('header.gais') }}</div>
      </div>

      <button
        class="burger-menu"
        :class="{ active: isMobileMenuOpen }"
        @click.stop="toggleMobileMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="navbar-links2" :class="{ open: isMobileMenuOpen }">
        <router-link to="/owners" class="nav-link2" @click="closeMobileMenu">
          {{ $t('header.menu.owners') }}
        </router-link>
        <router-link to="/auto-manufacturers" class="nav-link2" @click="closeMobileMenu">
          {{ $t('header.menu.auto_manufacturers') }}
        </router-link>
        <router-link to="/installers" class="nav-link2" @click="closeMobileMenu">
          {{ $t('header.menu.installers') }}
        </router-link>
        <router-link to="/importers" class="nav-link2" @click="closeMobileMenu">
          {{ $t('header.menu.importers') }}
        </router-link>
        <router-link to="/manufacturers" class="nav-link2" @click="closeMobileMenu">
          {{ $t('header.menu.manufacturers') }}
        </router-link>
        <router-link to="/news" class="nav-link2" @click="closeMobileMenu">
          {{ $t('header.menu.news') }}
        </router-link>
        <router-link to="/contacts" class="nav-link2" @click="closeMobileMenu">
          {{ $t('header.menu.contacts') }}
        </router-link>

        <router-link to="/profile" class="nav-link2 mobile-cabinet-link" @click="closeMobileMenu">
          {{ $t('header2.menu.cabinet') }}
        </router-link>

        <div class="container mobile-container">
          <div class="nav-links">
            <div class="nav-link">{{ $t('header.miicr') }}</div>
            <div class="nav-link">{{ $t('header.aerospace') }}</div>
            <div class="nav-link nav-link--padded">{{ $t('header.iktt') }}</div>
          </div>
          <div class="lang-switcher">
            <div
              class="lang-btn"
              :class="{ 'lang-btn--active': locale === 'kk' }"
              @click="changeLanguage('kk')"
            >
              KZ
            </div>
            <div class="lang-divider">/</div>
            <div
              class="lang-btn"
              :class="{ 'lang-btn--active': locale === 'ru' }"
              @click="changeLanguage('ru')"
            >
              RU
            </div>
            <div class="lang-divider">/</div>
            <div
              class="lang-btn"
              :class="{ 'lang-btn--active': locale === 'en' }"
              @click="changeLanguage('en')"
            >
              EN
            </div>
          </div>
        </div>
      </div>

      <div class="desktop-cabinet-wrapper">
        <router-link to="/profile" class="cabinet-btn">
          {{ $t('header2.menu.cabinet') }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const isMobileMenuOpen = ref(false)

const { locale } = useI18n()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const changeLanguage = (lang: string) => {
  locale.value = lang
  localStorage.setItem('lang', lang)
}

const vClickOutside = {
  mounted(el: any, binding: any) {
    el.clickOutsideEvent = (event: Event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: any) {
    document.removeEventListener('click', el.clickOutsideEvent)
  },
}
</script>

<style scoped>
.site-header {
  position: sticky;
  z-index: 1000;
  top: 0;
  width: 100%;
}
.background {
  background-color: var(--color-background);
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
}

.container {
  display: flex;
  height: 36px;
  width: 100%;
  padding-left: 3%;
  padding-right: 2%;
  align-items: center;
  justify-content: space-between;
}

.mobile-container {
  display: none;
}

.nav-links {
  display: flex;
  min-width: 240px;
  align-items: stretch;
  gap: 24px;
  justify-content: center;
  color: var(--text-color-white);
}

.nav-links a {
  color: var(--text-color-white);
}

.nav-link {
  display: flex;
  min-height: 44px;
  min-width: 44px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-link--padded {
  padding-right: 14px;
  white-space: nowrap;
}

.lang-switcher {
  display: flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
  justify-content: center;
}

.lang-btn {
  align-self: stretch;
  display: flex;
  min-height: 44px;
  min-width: 44px;
  margin: auto 0;
  padding: 14px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: var(--text-color-second-white);
}

.lang-btn--active {
  color: var(--text-color-white);
}

.lang-divider {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-color-second-white);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--color-background-third);
  padding: 0 40px;
  height: 72px;
  position: relative;
}

.navbar-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-subtitle {
  color: #8fa8d8;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  line-height: 1;
  margin-top: 2px;
}

.navbar-links2 {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link2 {
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
}

.nav-link2:hover {
  padding-bottom: 4px;
  border-bottom: 2px solid #e8392a;
}

.nav-link--active {
  padding-bottom: 4px;
  border-bottom: 2px solid #e8392a;
}

.desktop-cabinet-wrapper {
  display: flex;
  align-items: center;
}

.cabinet-btn {
  background-color: #0b2265;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cabinet-btn:hover {
  background-color: #071643;
}

.mobile-cabinet-link {
  display: none;
}

.burger-menu {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.burger-menu span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--text-color-white);
  transition: 0.3s ease;
  border-radius: 2px;
}

.burger-menu.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.burger-menu.active span:nth-child(2) {
  opacity: 0;
}

.burger-menu.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 992px) {
  .navbar {
    padding: 0 20px;
    justify-content: space-between;
  }
  .navbar-links2 {
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .background {
    display: none;
  }

  .desktop-cabinet-wrapper {
    display: none;
  }

  .mobile-cabinet-link {
    display: block;
    color: #ff9500 !important;
    font-weight: 600;
  }

  .mobile-container {
    display: flex;
    padding: 20px;
    background-color: var(--color-background);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    height: auto;
  }

  .container {
    height: auto;
    flex-wrap: wrap;
  }

  .nav-links {
    min-width: auto;
    gap: 16px;
    font-size: 13px;
  }

  .nav-link {
    min-height: auto;
    min-width: auto;
    padding: 6px 0;
  }

  .nav-link--padded {
    padding-right: 0;
  }

  .lang-switcher {
    gap: 12px;
  }

  .lang-btn {
    min-height: auto;
    min-width: auto;
    padding: 6px;
    font-size: 13px;
  }

  .lang-divider {
    font-size: 13px;
  }

  .navbar {
    padding: 0 20px;
    height: 64px;
    justify-content: space-between;
  }

  .burger-menu {
    display: flex;
    order: 2;
  }

  .navbar-links2 {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--color-background-third);
    flex-direction: column;
    gap: 0;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    align-items: stretch;
    padding: 0;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }

  .navbar-links2.open {
    max-height: 650px;
    overflow-y: auto;
  }

  .nav-link2 {
    padding: 16px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 15px;
  }

  .nav-link2:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(255, 255, 255, 0.05);
  }

  .navbar-logo {
    flex-direction: row;
    align-items: center;
    gap: 12px;
    order: 1;
  }

  .logo-subtitle {
    font-size: 9px;
    margin-top: 0;
  }
}

@media (max-width: 480px) {
  .mobile-container {
    padding: 16px;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .nav-links {
    gap: 12px;
    min-width: auto;
    flex-direction: column;
    align-items: flex-start;
    font-size: 14px;
  }

  .nav-link {
    padding: 4px 0;
  }

  .lang-switcher {
    gap: 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
    padding-top: 12px;
    justify-content: flex-start;
  }

  .lang-btn,
  .lang-divider {
    font-size: 14px;
    padding: 4px 8px;
  }

  .navbar {
    padding: 12px 16px;
  }

  .navbar-logo {
    gap: 8px;
  }

  .burger-menu span {
    width: 20px;
    height: 1.5px;
  }

  .burger-menu.active span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }

  .burger-menu.active span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }

  .nav-link2 {
    padding: 14px 16px;
    font-size: 14px;
  }
}
</style>
