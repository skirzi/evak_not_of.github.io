<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="container">
    <div class="hero">
      <div class="hero-content">
        <div class="hero-subtitle">{{ t('importer.hero.subtitle') }}</div>
        <div class="hero-title">
          <span>{{ t('importer.hero.title_part1') }}</span>
          <span class="highlight">{{ t('importer.hero.title_highlight1') }}</span>
          <br />
          <span class="highlight">{{ t('importer.hero.title_highlight2') }}</span>
        </div>
        <div class="hero-description">
          {{ t('importer.hero.description') }}
        </div>
      </div>
      <div class="hero-bg red-gradient1"></div>
      <div class="hero-bg red-gradient2"></div>
    </div>

    <div class="steps">
      <div class="steps-content">
        <div class="steps-title">{{ t('importer.steps_equipped.title') }}</div>
        <div class="steps-heading">
          {{ t('importer.steps_equipped.heading') }}
        </div>
        <div class="steps-list">
          <div v-for="i in 6" :key="i" class="step">
            <div class="step-number">0{{ i }}</div>
            <div class="step-text">
              {{ t(`importer.steps_equipped.step${i}`) }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="registration-section">
      <div class="registration-container">
        <div class="section-label">{{ t('importer.registration.label') }}</div>
        <h2 class="section-title">
          {{ t('importer.registration.title') }}
        </h2>
        <p class="registration-text">{{ t('importer.registration.text1') }}</p>
        <p class="registration-text">{{ t('importer.registration.text2') }}</p>
        <ol class="registration-list">
          <li v-for="i in 5" :key="i">{{ t(`importer.registration.list_item${i}`) }}</li>
          <li>
            {{ t('importer.registration.list_item6') }}
            <ul>
              <li>{{ t('importer.registration.sub_item1') }}</li>
              <li>{{ t('importer.registration.sub_item2') }}</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>

    <div class="steps">
      <div class="steps-content">
        <div class="steps-title">{{ t('importer.steps_not_equipped.title') }}</div>
        <div class="steps-heading">
          {{ t('importer.steps_not_equipped.heading') }}
        </div>
        <div class="steps-list">
          <div v-for="i in 5" :key="i" class="step">
            <div class="step-number">0{{ i }}</div>
            <div class="step-text">
              {{ t(`importer.steps_not_equipped.step${i}`) }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="stats">
      <div class="stats-container">
        <div class="stat">
          <div class="stat-number">{{ t('importer.stats.cost_title') }}</div>
          <div class="stat-label">{{ t('importer.stats.cost_text') }}</div>
        </div>
        <div class="stat">
          <div class="stat-number">{{ t('importer.stats.conditions_title') }}</div>
          <div class="stat-label">{{ t('importer.stats.conditions_text') }}</div>
        </div>
        <div class="stat">
          <div class="stat-number">{{ t('importer.stats.terms_title') }}</div>
          <div class="stat-label">{{ t('importer.stats.terms_text') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.hero {
  width: 100%;
  background: #020d34;
  padding: 112px 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-content {
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 2;
}

.hero-subtitle {
  color: #ff6728;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 16px;
  letter-spacing: 2.64px;
}

.hero-title {
  font-size: 60px;
  font-weight: 700;
  line-height: 1.1;
  color: white;
}

.hero-title .highlight {
  color: #ff6728;
}

.hero-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
}

.hero-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.red-gradient1 {
  opacity: 0.3;
  background: radial-gradient(
    ellipse 74.17% 242.05% at 30% 20%,
    #ee362f 0%,
    rgba(237, 54, 47, 0) 50%
  );
}

.red-gradient2 {
  opacity: 0.2;
  background: radial-gradient(
    ellipse 83.67% 273.07% at 80% 80%,
    #ff6728 0%,
    rgba(255, 103, 40, 0) 50%
  );
}

.steps {
  background: #f8fafd;
  padding: 112px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.steps-content {
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.steps-title {
  color: #ee362f;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 16px;
  letter-spacing: 2.64px;
}

.steps-heading {
  font-size: 44px;
  font-weight: 700;
  line-height: 1.2;
  color: #020d34;
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
  background: #e6effc;
  border-radius: 12px;
  border: 1px solid #d8dfe8;
}

.step-number {
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: #ee362f;
  min-width: 32px;
}

.step-text {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #020d34;
}

.registration-section {
  background: #020d34;
  padding: 112px 24px;
  display: flex;
  justify-content: center;
}

.registration-container {
  width: 100%;
  max-width: 1280px;
}

.registration-section .section-label {
  color: #ff6728;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.64px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.registration-section .section-title {
  font-size: 44px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 32px;
  line-height: 1.2;
}

.registration-section .registration-text {
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  line-height: 26px;
  margin-bottom: 16px;
}

.registration-section .registration-list {
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  line-height: 26px;
  padding-left: 20px;
}

.registration-section .registration-list li {
  margin-bottom: 12px;
}

.registration-section .registration-list ul {
  margin-top: 8px;
  padding-left: 20px;
  list-style-type: disc;
}

.registration-section .registration-list ul li {
  color: rgba(255, 255, 255, 0.7);
}

.stats {
  background: #020d34;
  padding: 112px 24px;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stats-container {
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.stat {
  padding: 32px 24px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.stat-number {
  font-size: 20px;
  font-weight: 700;
  color: #ff6728;
  line-height: 1.3;
}

.stat-label {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  line-height: 22px;
}

@media (max-width: 1200px) {
  .hero-title {
    font-size: 48px;
  }
  .steps-heading,
  .registration-section .section-title {
    font-size: 36px;
  }
}

@media (max-width: 992px) {
  .hero,
  .steps,
  .registration-section,
  .stats {
    padding: 80px 24px;
  }
  .stats-container {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .stat {
    padding: 24px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 16px;
  }
  .hero-title {
    font-size: 36px;
  }
  .hero-description {
    font-size: 16px;
    line-height: 24px;
  }
  .hero-description br {
    display: none;
  }
  .steps,
  .registration-section,
  .stats {
    padding: 60px 16px;
  }
  .steps-heading,
  .registration-section .section-title {
    font-size: 28px;
  }
  .step {
    padding: 16px;
    gap: 12px;
  }
  .step-number {
    font-size: 20px;
  }
  .step-text {
    font-size: 14px;
    line-height: 22px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 28px;
  }
  .steps-heading,
  .registration-section .section-title {
    font-size: 22px;
  }
  .step {
    flex-direction: column;
    gap: 8px;
  }
  .stat {
    padding: 20px 16px;
  }
  .stat-number {
    font-size: 18px;
  }
}
</style>
