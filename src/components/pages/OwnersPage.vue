<template>
  <div class="page">
    <section class="hero">
      <div class="hero-bg hero-bg-left"></div>
      <div class="hero-bg hero-bg-right"></div>
      <div class="container">
        <div class="hero-label">{{ t('car_owners.hero.label') }}</div>
        <h1 class="hero-title">
          {{ t('car_owners.hero.title').split('ГАИС ЭВАК')[0] }}<span>ГАИС ЭВАК</span>
        </h1>
        <p class="hero-text">{{ t('car_owners.hero.text') }}</p>
      </div>
    </section>

    <section class="vin-section">
      <div class="container">
        <div class="vin-content">
          <div class="section-label">{{ t('car_owners.vin_check.label') }}</div>
          <h2 class="section-title">{{ t('car_owners.vin_check.title') }}</h2>
          <p class="section-text">{{ t('car_owners.vin_check.text') }}</p>
          <div class="vin-form">
            <input type="text" :placeholder="t('car_owners.vin_check.placeholder')" />
            <button>{{ t('car_owners.vin_check.button') }}</button>
          </div>
        </div>
      </div>
    </section>

    <section class="steps-section">
      <div class="container">
        <div class="section-label">{{ t('car_owners.steps_equipped.label') }}</div>
        <h2 class="steps-title">{{ t('car_owners.steps_equipped.title') }}</h2>
        <div class="steps-grid">
          <div class="step-card" v-for="i in 5" :key="i">
            <div class="step-number">{{ t(`car_owners.steps_equipped.items.step${i}.num`) }}</div>
            <h3>{{ t(`car_owners.steps_equipped.items.step${i}.title`) }}</h3>
            <p>{{ t(`car_owners.steps_equipped.items.step${i}.text`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="steps-section" style="background: #fff">
      <div class="container">
        <div class="section-label">{{ t('car_owners.steps_not_equipped.label') }}</div>
        <h2 class="steps-title">{{ t('car_owners.steps_not_equipped.title') }}</h2>
        <div class="steps-grid">
          <div class="step-card" v-for="i in 5" :key="i">
            <div class="step-number">
              {{ t(`car_owners.steps_not_equipped.items.step${i}.num`) }}
            </div>
            <h3>{{ t(`car_owners.steps_not_equipped.items.step${i}.title`) }}</h3>
            <p>{{ t(`car_owners.steps_not_equipped.items.step${i}.text`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="registration-section">
      <div class="container">
        <div class="section-label">{{ t('car_owners.registration.label') }}</div>
        <h2 class="section-title">{{ t('car_owners.registration.title') }}</h2>
        <p class="registration-text">{{ t('car_owners.registration.text1') }}</p>
        <p class="registration-text">{{ t('car_owners.registration.text2') }}</p>
        <ol class="registration-list">
          <li v-for="i in 5" :key="i">{{ t(`car_owners.registration.l${i}`) }}</li>
          <li>
            {{ t('car_owners.registration.l6') }}
            <ul>
              <li>{{ t('car_owners.registration.l7') }}</li>
              <li>{{ t('car_owners.registration.l8') }}</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>

    <section class="uveos-section">
      <div class="container">
        <div class="section-label">{{ t('car_owners.uveos_info.label') }}</div>
        <h2 class="section-title">{{ t('car_owners.uveos_info.title') }}</h2>
        <p class="uveos-text">{{ t('car_owners.uveos_info.text1') }}</p>
        <p class="uveos-text">{{ t('car_owners.uveos_info.text2') }}</p>
        <p class="uveos-text">{{ t('car_owners.uveos_info.text3') }}</p>
        <ul class="uveos-list">
          <li v-for="i in 3" :key="i">{{ t(`car_owners.uveos_info.dates_list.date${i}`) }}</li>
        </ul>
        <p class="uveos-text">{{ t('car_owners.uveos_info.text4') }}</p>
        <h3 class="uveos-subtitle">{{ t('car_owners.uveos_info.subtitle') }}</h3>
        <ol class="uveos-steps">
          <li v-for="i in 3" :key="i">{{ t(`car_owners.uveos_info.steps_used_cars.step${i}`) }}</li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<style scoped>
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

.hero {
  position: relative;
  overflow: hidden;
  background: #020d34;
  padding: 112px 0;
}

.hero-bg {
  position: absolute;
  inset: 0;
}

.hero-bg-left {
  opacity: 0.3;
  background: radial-gradient(
    ellipse 74.17% 242.05% at 30% 20%,
    #ee362f 0%,
    rgba(237, 54, 47, 0) 50%
  );
}

.hero-bg-right {
  opacity: 0.2;
  background: radial-gradient(
    ellipse 83.67% 273.07% at 80% 80%,
    #ff6728 0%,
    rgba(255, 103, 40, 0) 50%
  );
}

.hero .container {
  position: relative;
  z-index: 2;
}

.hero-label,
.section-label {
  color: #ff6728;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 2.64px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.hero-title {
  max-width: 896px;
  color: #fff;
  font-size: 60px;
  font-weight: 700;
  line-height: 63px;
  margin-bottom: 24px;
}

.hero-title span {
  color: #ff6728;
}

.hero-text {
  max-width: 672px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
}

.vin-section {
  padding: 96px 0;
  background: #f8fafd;
}

.vin-content {
  max-width: 672px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 20px;
}

.section-text {
  color: #47566c;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 24px;
}

.vin-form {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: #fff;
  border: 1px solid #d8dfe8;
  border-radius: 12px;
  box-shadow: 0 30px 60px -20px rgba(2, 13, 52, 0.15);
}

.vin-form input {
  flex: 1;
  height: 60px;
  border: none;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: #020d34;
}

.vin-form input::placeholder {
  color: rgba(2, 13, 52, 0.5);
}

.vin-form button {
  border: none;
  background: #071d58;
  color: #fff;
  padding: 18px 28px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  cursor: pointer;
}

.steps-section {
  padding: 96px 0;
  background: #e6effc;
}

.steps-title {
  max-width: 672px;
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 48px;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.step-card {
  padding: 24px;
  background: #fff;
  border: 1px solid #d8dfe8;
  border-radius: 12px;
}

.step-number {
  color: #ee362f;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  margin-bottom: 16px;
}

.step-card h3 {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 12px;
}

.step-card p {
  color: #47566c;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.faq-section {
  padding: 96px 0;
  background: #f8fafd;
}

.faq-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 40px;
}

.faq-list {
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #e6effc;
  border: 1px solid #d8dfe8;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}

.faq-item span:last-child {
  color: #ee362f;
  font-size: 20px;
}
.registration-section {
  padding: 80px 0;
  background: #f8fafd;
}

.registration-section .section-label {
  color: #ff6728;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.registration-section .section-title {
  font-size: 32px;
  font-weight: 700;
  color: #020d34;
  margin-bottom: 24px;
  line-height: 40px;
}

.registration-section .registration-text {
  font-size: 16px;
  font-weight: 500;
  color: #47566c;
  line-height: 26px;
  margin-bottom: 16px;
}

.registration-section .registration-list {
  font-size: 16px;
  font-weight: 500;
  color: #47566c;
  line-height: 26px;
  margin-left: 20px;
}

.registration-section .registration-list li {
  margin-bottom: 12px;
}

.registration-section .registration-list ul {
  margin-top: 8px;
  margin-left: 20px;
  list-style-type: disc;
}
.uveos-section {
  padding: 80px 0;
  background: #e6effc;
}

.uveos-section .section-label {
  color: #ff6728;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.uveos-section .section-title {
  font-size: 32px;
  font-weight: 700;
  color: #020d34;
  line-height: 40px;
  margin-bottom: 24px;
  max-width: 900px;
}

.uveos-text {
  font-size: 16px;
  font-weight: 500;
  color: #47566c;
  line-height: 26px;
  margin-bottom: 16px;
  max-width: 900px;
}

.uveos-list {
  margin: 16px 0 24px 20px;
  color: #47566c;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
}

.uveos-list li {
  margin-bottom: 10px;
}

.uveos-subtitle {
  font-size: 22px;
  font-weight: 700;
  color: #020d34;
  margin: 28px 0 16px;
}

.uveos-steps {
  margin-left: 20px;
  color: #47566c;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
}

.uveos-steps li {
  margin-bottom: 10px;
}

@media (max-width: 1024px) {
  .container {
    padding: 0 24px;
  }

  .hero {
    padding: 80px 0;
  }

  .hero-title {
    font-size: 44px;
    line-height: 48px;
  }

  .hero-text {
    font-size: 16px;
  }

  .section-title {
    font-size: 28px;
    line-height: 32px;
  }

  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .steps-title {
    font-size: 36px;
    line-height: 40px;
  }

  .vin-section,
  .steps-section,
  .registration-section,
  .uveos-section {
    padding: 60px 0;
  }

  .faq-title {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .hero {
    padding: 60px 0;
  }

  .hero-label {
    font-size: 11px;
  }

  .hero-title {
    font-size: 32px;
    line-height: 36px;
  }

  .hero-text {
    font-size: 14px;
    line-height: 22px;
  }

  .vin-section,
  .steps-section,
  .registration-section,
  .uveos-section {
    padding: 40px 0;
  }

  .vin-content {
    max-width: 100%;
  }

  .section-title {
    font-size: 24px;
  }

  .steps-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .step-card {
    padding: 20px;
  }

  .step-number {
    font-size: 24px;
  }

  .step-card h3 {
    font-size: 18px;
  }

  .steps-title {
    font-size: 28px;
  }

  .section-text {
    font-size: 14px;
  }

  .vin-form {
    flex-direction: column;
    gap: 6px;
  }

  .vin-form input {
    height: 50px;
    font-size: 14px;
  }

  .vin-form button {
    width: 100%;
    padding: 14px 20px;
    font-size: 12px;
  }

  .faq-title {
    font-size: 24px;
  }

  .faq-item {
    padding: 16px;
    font-size: 14px;
  }

  .registration-section .section-title,
  .uveos-section .section-title {
    font-size: 24px;
  }

  .registration-text,
  .uveos-text {
    font-size: 14px;
  }

  .uveos-subtitle {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }

  .hero {
    padding: 40px 0;
  }

  .hero-title {
    font-size: 24px;
    line-height: 28px;
  }

  .hero-text {
    font-size: 13px;
    line-height: 20px;
  }

  .vin-section,
  .steps-section,
  .registration-section,
  .uveos-section {
    padding: 30px 0;
  }

  .section-title {
    font-size: 20px;
  }

  .steps-title {
    font-size: 22px;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .step-card {
    padding: 16px;
  }

  .step-number {
    font-size: 20px;
  }

  .step-card h3 {
    font-size: 16px;
  }

  .step-card p {
    font-size: 13px;
  }

  .vin-form input {
    height: 45px;
    padding: 0 12px;
    font-size: 13px;
  }

  .vin-form button {
    padding: 12px 16px;
    font-size: 11px;
  }

  .faq-title {
    font-size: 20px;
  }

  .faq-item {
    padding: 14px;
    font-size: 13px;
  }

  .faq-item span:last-child {
    font-size: 18px;
  }

  .registration-text,
  .uveos-text {
    font-size: 13px;
    line-height: 22px;
  }

  .registration-section .section-title,
  .uveos-section .section-title {
    font-size: 20px;
  }

  .uveos-subtitle {
    font-size: 16px;
    margin: 20px 0 12px;
  }

  .registration-section .registration-list,
  .uveos-list,
  .uveos-steps {
    margin-left: 16px;
    font-size: 13px;
  }
}
</style>
