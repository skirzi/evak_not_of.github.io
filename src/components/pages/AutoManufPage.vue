<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import FAQ from '../FAQ.vue'
import SIM from '../SIM.vue'
import Tarifs from '../Tarifs.vue'

const { t } = useI18n()

const isAuthModalOpen = ref(false)
const isSuccessModalOpen = ref(false)
const isRegistrationMode = ref(false)
const email = ref('')
const password = ref('')

const openAuthModal = (registerFirst = false) => {
  isRegistrationMode.value = registerFirst
  isAuthModalOpen.value = true
}

const closeModals = () => {
  isAuthModalOpen.value = false
  isSuccessModalOpen.value = false
}

const toggleMode = () => {
  isRegistrationMode.value = !isRegistrationMode.value
  email.value = ''
  password.value = ''
}

const handleSubmit = () => {
  isAuthModalOpen.value = false
  isSuccessModalOpen.value = true
  email.value = ''
  password.value = ''
}
</script>

<template>
  <div class="page">
    <div class="hero">
      <div class="hero-gradient hero-gradient-1"></div>
      <div class="hero-gradient hero-gradient-2"></div>
      <div class="hero-inner">
        <div class="hero-subtitle">{{ t('manufacturers.hero.subtitle') }}</div>

        <div class="hero-title">
          <span>{{ t('manufacturers.hero.title_part1') }}</span>
          <span class="accent">{{ t('manufacturers.hero.title_accent') }}</span>
          <span>{{ t('manufacturers.hero.title_part2') }}</span>
        </div>

        <div class="hero-text">
          {{ t('manufacturers.hero.text') }}
        </div>
      </div>
    </div>

    <Tarifs />
    <SIM />

    <div class="cta">
      <div class="cta-inner">
        <div class="cta-title">{{ t('manufacturers.cta.title') }}</div>
        <button class="btn" @click="openAuthModal(true)">
          {{ t('manufacturers.cta.button') }}
        </button>
      </div>
    </div>
  </div>
  <FAQ />

  <div v-if="isAuthModalOpen" class="modal-overlay" @click.self="closeModals">
    <div class="modal-content">
      <button type="button" class="modal-close" @click="closeModals">&times;</button>

      <h3 class="modal-title">
        {{ isRegistrationMode ? t('auth.registration.title') : t('auth.login.title') }}
      </h3>

      <form @submit.prevent="handleSubmit" class="auth-form">
        <div class="form-group">
          <label for="auth-email">{{ t('auth.labels.email') }}</label>
          <input
            id="auth-email"
            type="email"
            v-model="email"
            :placeholder="t('auth.placeholders.email')"
            required
            autocomplete="email"
          />
        </div>

        <div class="form-group">
          <label for="auth-password">{{ t('auth.labels.password') }}</label>
          <input
            id="auth-password"
            type="password"
            v-model="password"
            :placeholder="t('auth.placeholders.password')"
            required
            minlength="6"
            autocomplete="current-password"
          />
        </div>

        <button type="submit" class="btn btn-submit">
          {{ isRegistrationMode ? t('auth.registration.submit') : t('auth.login.submit') }}
        </button>
      </form>

      <div class="modal-toggle-mode">
        <span>
          {{ isRegistrationMode ? t('auth.registration.has_account') : t('auth.login.no_account') }}
        </span>
        <button type="button" class="btn-link" @click="toggleMode">
          {{ isRegistrationMode ? t('auth.login.title') : t('auth.registration.title') }}
        </button>
      </div>
    </div>
  </div>

  <div v-if="isSuccessModalOpen" class="modal-overlay" @click.self="closeModals">
    <div class="modal-content text-center">
      <button type="button" class="modal-close" @click="closeModals">&times;</button>

      <div class="success-icon">✓</div>

      <h3 class="modal-title">
        {{
          isRegistrationMode ? t('auth.success.registration_title') : t('auth.success.login_title')
        }}
      </h3>

      <p class="modal-text">{{ t('auth.success.message') }}</p>

      <button type="button" class="btn" @click="closeModals">
        {{ t('auth.success.close') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

.hero {
  background: #020d34;
  padding: 112px 120px;
  position: relative;
  overflow: hidden;
}

.hero-gradient {
  position: absolute;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.6;
  z-index: 0;
}

.hero-gradient-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #ff6728 0%, transparent 70%);
  top: -100px;
  left: -100px;
}

.hero-gradient-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--accent-color) 0%, transparent 70%);
  bottom: -150px;
  right: -150px;
}

.hero-inner {
  position: relative;
  z-index: 1;
}

.hero-subtitle {
  color: #ff6728;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.hero-title {
  font-size: 60px;
  font-weight: 700;
  color: #fff;
  line-height: 63px;
  margin-top: 20px;
}

.hero-title .accent {
  color: #ff6728;
}

.hero-text {
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  line-height: 28px;
}

.cta {
  background: #f8fafd;
  padding: 80px 120px;
  text-align: center;
}

.cta-title {
  font-size: 36px;
  font-weight: 700;
  color: #020d34;
}

.btn {
  margin-top: 20px;
  background: #ee362f;
  color: #fff;
  padding: 16px 32px;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  color: #333333;
}

.text-center {
  text-align: center;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #999;
  line-height: 1;
}

.modal-close:hover {
  color: #333;
}

.modal-title {
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 700;
  text-align: center;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: left;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: #444;
}

.form-group input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 15px;
  width: 100%;
  box-sizing: border-box;
}

.form-group input:focus {
  border-color: #e53935;
  outline: none;
}

.btn-submit {
  margin-top: 10px;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
}

.modal-toggle-mode {
  margin-top: 20px;
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.btn-link {
  background: none;
  border: none;
  color: #e53935;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  font-weight: 600;
  font-size: 14px;
}

.success-icon {
  width: 60px;
  height: 60px;
  background: #e8f5e9;
  color: #4caf50;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  margin: 0 auto 15px;
}

.modal-text {
  color: #555;
  margin-bottom: 25px;
  font-size: 15px;
}

@media (max-width: 1024px) {
  .hero {
    padding: 80px 60px;
  }
  .cta {
    padding: 60px 40px;
  }
  .hero-title {
    font-size: 44px;
    line-height: 48px;
  }
  .cta-title {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .page {
    max-width: 100%;
  }
  .container {
    padding: 0 20px;
  }
  .hero {
    padding: 60px 20px;
  }
  .cta {
    padding: 40px 20px;
  }
  .hero-title {
    font-size: 32px;
    line-height: 36px;
  }
  .hero-text {
    font-size: 16px;
  }
  .cta-title {
    font-size: 24px;
  }
  .btn {
    padding: 14px 24px;
    font-size: 12px;
  }
  .hero-gradient-1 {
    width: 300px;
    height: 300px;
  }
  .hero-gradient-2 {
    width: 350px;
    height: 350px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 40px 16px;
  }
  .cta {
    padding: 30px 16px;
  }
  .hero-subtitle {
    font-size: 11px;
  }
  .hero-title {
    font-size: 24px;
    line-height: 28px;
    margin-top: 16px;
  }
  .hero-text {
    font-size: 14px;
    line-height: 22px;
    margin-top: 12px;
  }
  .cta-title {
    font-size: 20px;
  }
  .btn {
    padding: 12px 20px;
    font-size: 11px;
    margin-top: 16px;
  }
  .hero-gradient-1,
  .hero-gradient-2 {
    display: none;
  }
  .container {
    padding: 0 16px;
  }
}
</style>
