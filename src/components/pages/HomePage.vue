<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()
const vin = ref('')

const registeredVins = ['1HGCM82633A004352', 'WAUZZZ8K9DA123456', 'JTDBR32E720123456']

const modalVisible = ref(false)
const modalMessage = ref('')

const isValidVinFormat = (value: string) => /^[A-HJ-NPR-Z0-9]{17}$/i.test(value)

const checkVin = () => {
  const value = vin.value.trim().toUpperCase()

  if (!value) {
    modalMessage.value = 'Введите VIN-код'
    modalVisible.value = true
    return
  }

  if (!isValidVinFormat(value)) {
    modalMessage.value = 'Ошибка: неверный формат VIN-кода'
    modalVisible.value = true
    return
  }

  if (registeredVins.includes(value)) {
    modalMessage.value = 'Автомобиль зарегистрирован'
  } else {
    modalMessage.value = 'Автомобиль не зарегистрирован'
  }
  modalVisible.value = true
}

const closeModal = () => {
  modalVisible.value = false
}
</script>

<template>
  <body>
    <div class="hero-section">
      <div class="hero-bg">
        <div class="hero-overlay-right"></div>
        <div class="hero-overlay-radial"></div>
        <div class="hero-overlay-image"></div>
      </div>
      <div class="hero-container">
        <div class="hero-inner">
          <div class="hero-content">
            <div class="hero-badge">
              <div class="badge-dot"></div>
              <span class="badge-text">{{ t('hero.badge') }}</span>
            </div>
            <div class="hero-title">
              <div>
                <span>{{ t('hero.title_part1') }} </span>
                <span class="text-accent">{{ t('hero.title_accent1') }}</span>
              </div>
              <div>
                <span class="text-accent">{{ t('hero.title_accent2') }} </span>
                <span>{{ t('hero.title_part2') }}</span>
              </div>
            </div>
            <div class="hero-description">{{ t('hero.description') }}</div>
            <div class="hero-actions">
              <router-link to="/check-vehicle" class="btn btn-primary">{{
                t('hero.btn_check')
              }}</router-link>
              <router-link to="/about" class="btn btn-outline">{{
                t('hero.btn_about')
              }}</router-link>
            </div>
          </div>
          <div class="stats-grid">
            <div class="stat-card stat-card--accent">
              <div class="stat-number">2774922</div>
              <div class="stat-label">{{ t('hero.stats.calls') }}</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">7 829</div>
              <div class="stat-label">{{ t('hero.stats.sent_112') }}</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">746910</div>
              <div class="stat-label">{{ t('hero.stats.cars') }}</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">17</div>
              <div class="stat-label">{{ t('hero.stats.regions') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-wrapper" id="about">
      <div class="content-layout">
        <div class="visual-block">
          <img src="../../assets/imgs/planeta_sputnik.png" alt="" />
        </div>
        <div class="text-block">
          <div class="section-label">{{ t('about.label') }}</div>
          <div class="section-title">{{ t('about.title') }}</div>
          <div class="section-description">{{ t('about.description') }}</div>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-title">{{ t('about.features.auto_call') }}</div>
              <div class="feature-desc">{{ t('about.features.auto_call_desc') }}</div>
            </div>
            <div class="feature-card">
              <div class="feature-title">{{ t('about.features.coords') }}</div>
              <div class="feature-desc">{{ t('about.features.coords_desc') }}</div>
            </div>
            <div class="feature-card">
              <div class="feature-title">{{ t('about.features.channel_112') }}</div>
              <div class="feature-desc">{{ t('about.features.channel_112_desc') }}</div>
            </div>
            <div class="feature-card">
              <div class="feature-title">{{ t('about.features.monitoring') }}</div>
              <div class="feature-desc">{{ t('about.features.monitoring_desc') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="wrapper">
        <div class="container">
          <div class="label-wrap">
            <span class="label">{{ t('roles.label') }}</span>
          </div>
          <div class="header">
            <div class="heading">{{ t('roles.heading') }}</div>
            <div class="subheading">{{ t('roles.subheading') }}</div>
          </div>
          <div class="cards-grid">
            <router-link v-for="i in 5" :key="i" to="#" class="card">
              <div class="card-body">
                <div class="card-number">0 {{ i }}</div>
                <div class="card-title">{{ t(`roles.item${i}.title`) }}</div>
                <div class="card-description">{{ t(`roles.item${i}.desc`) }}</div>
              </div>
              <div class="card-footer">
                <span class="card-link"
                  ><span>{{ t(`roles.item${i}.link`) }}</span
                  ><span class="card-arrow">→</span></span
                >
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="page-wrapper" id="check-vehicle">
      <div class="content-row">
        <div class="image-card">
          <img src="../../assets/imgs/sos.png" alt="Авто" class="card-image" />
        </div>
        <div class="info-section">
          <div class="section-label">{{ t('check.label') }}</div>
          <div class="section-title">{{ t('check.title') }}</div>
          <div class="section-desc">{{ t('check.description') }}</div>
          <div class="search-box">
            <input
              type="text"
              v-model="vin"
              :placeholder="t('check.placeholder')"
              class="vin-input"
            />
            <button class="check-btn" @click="checkVin">{{ t('check.button') }}</button>
          </div>
          <div class="stats-row">
            <span>{{ t('check.stats_label') }}</span>
            <span class="stats-number">746910</span>
            <span>{{ t('check.stats_after') }}</span>
          </div>
        </div>
      </div>
    </div>

    <section class="news-section">
      <div class="news-container">
        <div class="news-header">
          <div class="news-header-left">
            <div class="news-label">{{ t('news.label') }}</div>
            <div class="news-title">
              <span>{{ t('news.title_part1') }}</span>
              <br />
              <span>{{ t('news.title_part2') }}</span>
            </div>
          </div>
          <router-link to="/news" class="news-header-right">
            <span class="news-all-link">{{ t('news.all') }}</span>
          </router-link>
        </div>
        <div class="news-grid">
          <div v-for="i in 3" :key="i" class="news-card">
            <img class="news-card-image" src="https://placehold.co/480x260" alt="news" />
            <div class="news-card-body">
              <div class="news-card-date">{{ t(`news.item${i}.date`) }}</div>
              <div class="news-card-title">{{ t(`news.item${i}.title`) }}</div>
              <div class="news-card-excerpt">{{ t(`news.item${i}.excerpt`) }}</div>
              <div class="news-card-footer">
                <span class="news-card-link">{{ t('news.read') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="modalVisible" class="modal-backdrop" @click="closeModal">
      <div class="modal-window" @click.stop>
        <div class="modal-content">{{ modalMessage }}</div>
        <button class="modal-close" @click="closeModal">Закрыть</button>
      </div>
    </div>
  </body>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #0d1117 0%, #1a1f2e 40%, #2d1f3d 70%, #1a1520 100%);
  min-height: 80vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.hero-overlay-right {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    var(--color-background) 0%,
    var(--color-background) 40%,
    var(--color-background-third) 70%,
    var(--color-background-third) 100%
  );
}

.hero-overlay-radial {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 70% 50%, rgba(80, 20, 60, 0.4) 0%, transparent 60%);
}

.hero-overlay-image {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background: url('https://placehold.co/900x600/1a0d2e/1a0d2e') center/cover no-repeat;
  opacity: 0.5;
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
}

.hero-container {
  position: relative;
  z-index: 10;
  width: 100%;
  padding: 80px;
}

.hero-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
}

.hero-content {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 9999px;
  padding: 8px 16px;
  margin-bottom: 32px;
  width: fit-content;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background-color: #e8472a;
  flex-shrink: 0;
}

.badge-text {
  color: #ffffff;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.hero-title {
  color: #ffffff;
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
}

.text-accent {
  color: #e8472a;
}

.hero-description {
  color: rgba(255, 255, 255, 0.65);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 480px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 16px 28px;
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary {
  background-color: #e8472a;
  color: #ffffff;
}

.btn-outline {
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #ffffff;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  flex-shrink: 0;
}

.stat-card {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px 28px;
  min-width: 200px;
}

.stat-card--accent {
  background-color: rgba(180, 30, 30, 0.35);
  border-color: rgba(220, 60, 60, 0.4);
}

.stat-number {
  color: #ffffff;
  font-size: 36px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 8px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.55);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-wrapper {
  font-family: Inter, sans-serif;
}

.content-layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 60px;
  background-color: #f5f6f8;
  padding: 80px;
}

.visual-block {
  flex-shrink: 0;
  width: 580px;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 580/ 440;
}

.visual-block img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-block {
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 560px;
}

.section-label {
  color: #e8820c;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-title {
  color: #0d1b3e;
  font-size: 42px;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 24px;
}

.section-description {
  color: #374151;
  font-size: 16px;
  line-height: 1.65;
  margin-bottom: 40px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.feature-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  padding: 12px 24px 12px 16px;
  border-left: 3px solid #e8820c;
}

.feature-title {
  color: #0d1b3e;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 6px;
}

.feature-desc {
  color: #6b7280;
  font-size: 14px;
  line-height: 1.5;
}

.section {
  background-color: #0a1628;
  padding: 80px 60px;
  height: 105vh;
  display: flex;
  align-items: center;
}

.wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.label-wrap {
  margin-bottom: 16px;
}

.label {
  color: #ff4d00;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 48px;
}

.heading {
  color: #ffffff;
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  max-width: 400px;
}

.subheading {
  color: #8a9bb8;
  font-size: 16px;
  line-height: 1.6;
  max-width: 380px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
  height: 40vh;
}

.card {
  background-color: #0d1e35;
  border: 1px solid #1a2e4a;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;
  cursor: pointer;
}

.card:hover {
  border-color: var(--second-accent-color);
}

.card:hover .card-link {
  color: var(--second-accent-color);
}

.card-number {
  color: var(--second-accent-color);
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 18px;
}

.card-title {
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 16px;
}

.card-description {
  color: #8a9bb8;
  font-size: 13px;
  line-height: 1.5;
}

.card-footer {
  margin-top: 24px;
}

.card-link {
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.card-arrow {
  font-size: 16px;
}

.page-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background-color: #f0f2f5;
  padding: 40px 16px;
}

.content-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 48px;
  max-width: 1200px;
  width: 100%;
}

.image-card {
  flex-shrink: 0;
  width: 500px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.12);
}

.card-image {
  display: block;
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.info-section {
  display: flex;
  flex-direction: column;
  max-width: 480px;
}

.section-label {
  color: #e53e3e;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-title {
  color: #0f1f3d;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
}

.section-desc {
  color: #4a5568;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 32px;
}

.search-box {
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
}

.vin-input {
  flex: 1;
  padding: 20px 24px;
  color: #a0aec0;
  font-size: 16px;
  background-color: #ffffff;
  border: none;
}

.check-btn {
  background-color: var(--color-background-third);
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 20px 32px;
  cursor: pointer;
}

.stats-row {
  margin-top: 16px;
  color: #718096;
  font-size: 14px;
  display: flex;
  gap: 4px;
  align-items: center;
}

.stats-number {
  font-weight: 700;
  color: #0f1f3d;
}

.news-section {
  background-color: #e8eef4;
  padding: 60px 80px;
}

.news-container {
  max-width: 1361px;
  margin: 0 auto;
}

.news-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 40px;
}

.news-label {
  color: #e8192c;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.news-title {
  color: #0d1f3c;
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
}

.news-header-right {
  display: flex;
  align-items: center;
}

.news-all-link {
  color: #0d1f3c;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.news-card {
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.news-card-image {
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
}

.news-card-body {
  padding: 28px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.news-card-date {
  color: #e8192c;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 14px;
}

.news-card-title {
  color: #0d1f3c;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 14px;
}

.news-card-excerpt {
  color: #4b5563;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 24px;
}

.news-card-footer {
  margin-top: auto;
}

.news-card-link {
  color: #0d1f3c;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-window {
  background-color: var(--surface);
  padding: 32px 24px;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.modal-content {
  color: var(--text-strong);
  font-size: 16px;
  margin-bottom: 24px;
}

.modal-close {
  background-color: var(--accent-color);
  color: var(--text-color-white);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.modal-close:hover {
  background-color: var(--second-accent-color);
}

@media (max-width: 1024px) {
  .hero-container {
    padding: 60px 40px;
  }

  .hero-inner {
    flex-direction: column;
    gap: 40px;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-title {
    font-size: 42px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .content-layout {
    flex-direction: column;
    padding: 60px 40px;
    gap: 40px;
  }

  .visual-block {
    width: 100%;
  }

  .section {
    padding: 60px 40px;
    height: auto;
  }

  .cards-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    height: auto;
  }

  .section-title {
    font-size: 32px;
  }

  .content-row {
    flex-direction: column;
    gap: 32px;
  }

  .image-card {
    width: 100%;
  }

  .news-section {
    padding: 40px;
  }

  .news-container {
    max-width: 100%;
  }

  .news-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  .news-title {
    font-size: 36px;
  }

  .heading {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 60vh;
  }

  .hero-container {
    padding: 40px 20px;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-description {
    font-size: 14px;
  }

  .hero-actions {
    flex-direction: column;
    gap: 12px;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .content-layout {
    padding: 40px 20px;
  }

  .section {
    padding: 40px 20px;
  }

  .label-wrap {
    margin-bottom: 12px;
  }

  .header {
    flex-direction: column;
    gap: 24px;
  }

  .heading {
    font-size: 28px;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    height: auto;
  }

  .card-title {
    font-size: 18px;
  }

  .section-title {
    font-size: 24px;
  }

  .section-description {
    font-size: 14px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .page-wrapper {
    padding: 30px 20px;
    min-height: auto;
  }

  .content-row {
    gap: 20px;
  }

  .card-image {
    height: 300px;
  }

  .info-section {
    max-width: 100%;
  }

  .section-title {
    font-size: 28px;
  }

  .news-section {
    padding: 30px 20px;
  }

  .news-title {
    font-size: 28px;
  }

  .news-grid {
    grid-template-columns: 1fr;
  }

  .search-box {
    flex-direction: column;
  }

  .vin-input {
    padding: 16px 20px;
  }

  .check-btn {
    padding: 16px 20px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    min-height: 50vh;
  }

  .hero-container {
    padding: 30px 16px;
  }

  .hero-title {
    font-size: 24px;
    line-height: 1.2;
  }

  .hero-description {
    font-size: 12px;
    margin-bottom: 24px;
  }

  .badge-text {
    font-size: 10px;
  }

  .stat-number {
    font-size: 24px;
  }

  .content-layout {
    padding: 30px 16px;
  }

  .section {
    padding: 30px 16px;
  }

  .heading {
    font-size: 20px;
  }

  .cards-grid {
    grid-template-columns: 1fr;
  }

  .card-number {
    font-size: 11px;
  }

  .card-title {
    font-size: 16px;
  }

  .card-description {
    font-size: 12px;
  }

  .section-title {
    font-size: 20px;
  }

  .page-wrapper {
    padding: 20px 16px;
  }

  .card-image {
    height: 250px;
  }

  .info-section {
    gap: 16px;
  }

  .vin-input {
    padding: 12px 16px;
    font-size: 14px;
  }

  .check-btn {
    padding: 12px 16px;
    font-size: 12px;
  }

  .news-section {
    padding: 20px 16px;
  }

  .news-title {
    font-size: 20px;
  }

  .news-header {
    flex-direction: column;
    gap: 16px;
  }

  .news-card-image {
    height: 200px;
  }

  .news-card-body {
    padding: 20px;
  }

  .news-card-title {
    font-size: 16px;
  }

  .news-card-excerpt {
    font-size: 13px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .stat-card {
    padding: 16px 20px;
  }
}
</style>
