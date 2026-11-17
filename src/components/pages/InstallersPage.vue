<script setup lang="ts">
import Certified from '../Certified.vue'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isModalOpen = ref(false)

const form = reactive({
  companyName: '',
  legalAddress: '',
  bin: '',
  employeeName: '',
  employeePhone: '',
  employeeEmail: '',
  centerAddress: '',
  certificateService: null as File | null,
  certificateTraining: null as File | null,
})

function submitForm() {
  console.log('Form sent:', form)
  isModalOpen.value = false
}
</script>
<template>
  <section class="partners-hero">
    <div class="partners-hero__glow partners-hero__glow--left"></div>
    <div class="partners-hero__glow partners-hero__glow--right"></div>

    <div class="container">
      <div class="partners-hero__subtitle">{{ t('partners.hero.subtitle') }}</div>

      <h1 class="partners-hero__title">
        {{ t('partners.hero.title_part1') }}<span>{{ t('partners.hero.title_highlight') }}</span
        >{{ t('partners.hero.title_part2') }}
      </h1>

      <p class="partners-hero__text">
        {{ t('partners.hero.text') }}
      </p>
    </div>
  </section>

  <section class="tariffs-section">
    <div class="tariff-card">
      <h2>{{ t('partners.tariffs.title1') }}</h2>

      <p>
        {{ t('partners.tariffs.desc1_1') }}<strong>{{ t('partners.tariffs.price1') }}</strong
        >{{ t('partners.tariffs.desc1_2') }}<strong>{{ t('partners.tariffs.price2') }}</strong
        >{{ t('partners.tariffs.desc1_3') }}
      </p>

      <p>{{ t('partners.tariffs.desc1_4') }}</p>

      <p>
        {{ t('partners.tariffs.desc1_5') }}
      </p>

      <div class="timeline">
        <div v-for="i in 6" :key="i" class="timeline-item">
          <span>0{{ i }}</span>
          {{ t(`partners.tariffs.timeline.step${i}`) }}
        </div>
      </div>
    </div>
    <div class="tariff-card">
      <h2>{{ t('partners.tariffs.title2') }}</h2>
      <p v-for="i in 6" :key="i">{{ t(`partners.tariffs.timeline.step${i}`) }}</p>
    </div>
  </section>

  <section class="requirements-section">
    <div class="container">
      <div class="requirements-subtitle">{{ t('partners.requirements.subtitle') }}</div>
      <h2 class="requirements-title">{{ t('partners.requirements.title') }}</h2>
      <div class="requirements-list">
        <div v-for="i in 7" :key="i" class="requirement-item">
          <span>→</span>
          <p>{{ t(`partners.requirements.items.req${i}`) }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container cta-container">
      <h2>{{ t('partners.cta.title') }}</h2>
      <p>{{ t('partners.cta.text') }}</p>
      <button class="cta-button" @click="isModalOpen = true">{{ t('partners.cta.button') }}</button>
    </div>
  </section>

  <div v-if="isModalOpen" class="modal-overlay" @click.self="isModalOpen = false">
    <div class="modal">
      <div class="modal-header">
        <h3>{{ t('partners.modal.title') }}</h3>
        <button class="close-btn" @click="isModalOpen = false">✕</button>
      </div>

      <form class="application-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label>{{ t('partners.modal.company') }}</label>
          <input type="text" v-model="form.companyName" required />
        </div>
        <div class="form-group">
          <label>{{ t('partners.modal.address') }}</label>
          <input type="text" v-model="form.legalAddress" required />
        </div>
        <div class="form-group">
          <label>{{ t('partners.modal.bin') }}</label>
          <input type="text" v-model="form.bin" required />
        </div>

        <h4>{{ t('partners.modal.contacts') }}</h4>
        <div class="form-group">
          <label>{{ t('partners.modal.fio') }}</label>
          <input type="text" v-model="form.employeeName" required />
        </div>
        <div class="form-group">
          <label>{{ t('partners.modal.phone') }}</label>
          <input type="tel" v-model="form.employeePhone" required />
        </div>
        <div class="form-group">
          <label>{{ t('partners.modal.email') }}</label>
          <input type="email" v-model="form.employeeEmail" required />
        </div>
        <div class="form-group">
          <label>{{ t('partners.modal.center_address') }}</label>
          <input type="text" v-model="form.centerAddress" required />
        </div>

        <h4>{{ t('partners.modal.files') }}</h4>
        <div class="form-group">
          <label>{{ t('partners.modal.service_cert') }}</label>
          <input
            type="file"
            @change="
              (e: Event) => {
                const target = e.target as HTMLInputElement
                form.certificateService = target.files?.[0] ?? null
              }
            "
          />
        </div>
        <div class="form-group">
          <label>{{ t('partners.modal.training_cert') }}</label>
          <input
            type="file"
            required
            @change="
              (e: Event) => {
                const target = e.target as HTMLInputElement
                form.certificateTraining = target.files?.[0] ?? null
              }
            "
          />
        </div>

        <button class="submit-btn" type="submit">{{ t('partners.modal.submit') }}</button>
      </form>
    </div>
  </div>

  <Certified />
</template>

<style scoped>
.tariffs-section {
  width: 100%;
  display: flex;
  gap: 24px;
  align-items: stretch;
  padding: 40px;
  background: #f4f6f8;
  box-sizing: border-box;
}

.tariff-card {
  flex: 1;
  background: #e6effc;
  padding: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.tariff-card h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: black;
}

.tariff-card p,
.tariff-card li {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 14px;
  color: black;
}

.tariff-card ul {
  padding-left: 20px;
  margin-bottom: 16px;
}

.tariff-card strong {
  color: var(--second-accent-color);
}
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  box-sizing: border-box;
}

.partners-hero {
  position: relative;
  overflow: hidden;
  background: #020d34;
  padding: 112px 0;
}

.partners-hero__glow {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.35;
}

.partners-hero__glow--left {
  top: -200px;
  left: -100px;
  background: radial-gradient(circle, #ee362f 0%, transparent 70%);
}

.partners-hero__glow--right {
  right: -200px;
  bottom: -300px;
  background: radial-gradient(circle, #ff6728 0%, transparent 70%);
}

.partners-hero .container {
  position: relative;
  z-index: 2;
}

.partners-hero__subtitle {
  color: #ff6728;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.64px;
  text-transform: uppercase;
}

.partners-hero__title {
  margin-top: 20px;
  font-size: 60px;
  line-height: 63px;
  color: #fff;
  font-weight: 700;
}

.partners-hero__title span {
  color: #ff6728;
}

.partners-hero__text {
  margin-top: 20px;
  max-width: 672px;
  font-size: 18px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.7);
}

.requirements-section {
  background: #020d34;
  padding: 112px 0;
}

.requirements-subtitle {
  color: #ff6728;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.64px;
  text-transform: uppercase;
}

.requirements-title {
  margin-top: 16px;
  margin-bottom: 40px;
  color: white;
  font-size: 48px;
  line-height: 52px;
  font-weight: 700;
}

.requirements-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.requirement-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.requirement-item span {
  color: #ff6728;
  font-size: 18px;
  font-weight: 700;
}

.requirement-item p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 16px;
  line-height: 24px;
}

.cta-section {
  background: #f8fafd;
  padding: 80px 0;
}

.cta-container {
  text-align: center;
}

.cta-container h2 {
  color: #020d34;
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;
}

.cta-container p {
  margin: 20px auto 32px;
  max-width: 620px;
  color: #47566c;
  font-size: 16px;
  line-height: 24px;
}

.cta-button {
  padding: 16px 32px;
  border: none;
  border-radius: 6px;
  background: #ee362f;
  color: white;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.7px;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 20px 50px -15px rgba(237, 54, 47, 0.5);
}

.cta-button:hover {
  background: #ff4d44;
  transform: translateY(-2px);
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
  backdrop-filter: blur(4px);
}

.modal {
  background: var(--surface);
  color: var(--main-text-color);
  width: 90%;
  max-width: 500px;
  max-height: 80%;
  overflow-y: auto;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: modalFadeIn 0.3s ease-out;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.modal-header h3 {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-background);
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--muted-text-2);
  transition: color 0.2s;
}

.close-btn:hover {
  color: var(--accent-color);
}

.application-form .form-group {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}

.application-form label {
  margin-bottom: 6px;
  font-weight: 600;
  color: var(--text-strong);
}

.application-form input,
.application-form textarea {
  padding: 10px 14px;
  border: 1px solid var(--neutral-300);
  border-radius: 6px;
  font-size: 14px;
  color: var(--main-text-color);
  background: var(--surface);
}

.application-form input:focus,
.application-form textarea:focus {
  border-color: var(--accent-color);
  outline: none;
}

.submit-btn {
  margin-top: 12px;
  padding: 14px 20px;
  border: none;
  border-radius: 6px;
  background: var(--accent-color);
  color: var(--text-color-white);
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
}

.submit-btn:hover {
  background: var(--second-accent-color);
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .container {
    padding: 0 24px;
  }

  .tariffs-section {
    flex-direction: column;
    padding: 30px;
  }

  .partners-hero {
    padding: 80px 0;
  }

  .partners-hero__title {
    font-size: 44px;
    line-height: 48px;
  }

  .requirements-section {
    padding: 80px 0;
  }

  .requirements-title {
    font-size: 36px;
    line-height: 40px;
  }

  .cta-section {
    padding: 60px 0;
  }

  .cta-container h2 {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .tariffs-section {
    flex-direction: column;
    padding: 20px;
    gap: 16px;
  }

  .tariff-card {
    padding: 24px;
  }

  .tariff-card h2 {
    font-size: 22px;
  }

  .tariff-card p,
  .tariff-card li {
    font-size: 14px;
  }

  .partners-hero {
    padding: 60px 0;
  }

  .partners-hero__subtitle {
    font-size: 11px;
  }

  .partners-hero__title {
    font-size: 32px;
    line-height: 36px;
    margin-top: 16px;
  }

  .partners-hero__text {
    font-size: 16px;
    line-height: 24px;
  }

  .requirements-section {
    padding: 60px 0;
  }

  .requirements-subtitle {
    font-size: 11px;
  }

  .requirements-title {
    font-size: 28px;
    line-height: 32px;
  }

  .requirement-item {
    padding: 16px;
    gap: 10px;
  }

  .requirement-item p {
    font-size: 14px;
  }

  .cta-section {
    padding: 40px 0;
  }

  .cta-container h2 {
    font-size: 24px;
  }

  .cta-container p {
    font-size: 14px;
  }

  .modal {
    width: 95%;
  }

  .modal-header h3 {
    font-size: 20px;
  }

  .partners-hero__glow {
    width: 500px;
    height: 500px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }

  .tariffs-section {
    padding: 16px;
  }

  .tariff-card {
    padding: 20px;
  }

  .tariff-card h2 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  .tariff-card p,
  .tariff-card li {
    font-size: 13px;
    margin-bottom: 10px;
  }

  .partners-hero {
    padding: 40px 0;
  }

  .partners-hero__subtitle {
    font-size: 10px;
    letter-spacing: 1.5px;
  }

  .partners-hero__title {
    font-size: 24px;
    line-height: 28px;
  }

  .partners-hero__text {
    font-size: 14px;
    line-height: 20px;
  }

  .requirements-section {
    padding: 40px 0;
  }

  .requirements-subtitle {
    font-size: 10px;
  }

  .requirements-title {
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 24px;
  }

  .requirement-item {
    padding: 14px;
    gap: 8px;
    flex-direction: column;
    align-items: flex-start;
  }

  .requirement-item span {
    font-size: 16px;
  }

  .requirement-item p {
    font-size: 13px;
    line-height: 20px;
  }

  .cta-section {
    padding: 30px 0;
  }

  .cta-container h2 {
    font-size: 20px;
  }

  .cta-container p {
    font-size: 13px;
    margin-top: 16px;
    margin-bottom: 20px;
  }

  .cta-button {
    padding: 14px 24px;
    font-size: 12px;
  }

  .modal {
    width: 100%;
    margin: 10px;
    max-height: 90%;
    padding: 20px;
  }

  .modal-header h3 {
    font-size: 18px;
  }

  .application-form input,
  .application-form textarea {
    padding: 8px 12px;
    font-size: 13px;
  }

  .submit-btn {
    padding: 12px 16px;
    font-size: 12px;
  }

  .partners-hero__glow {
    width: 300px;
    height: 300px;
  }
}
</style>
