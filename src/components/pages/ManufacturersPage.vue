<template>
  <div class="page-container">
    <header class="hero-section">
      <div class="container">
        <span class="badge">{{ $t('manufacturers2.hero.badge') }}</span>
        <h1>{{ $t('manufacturers2.hero.title') }}</h1>
        <p>{{ $t('manufacturers2.hero.description') }}</p>
      </div>
    </header>

    <section class="info-grid-section">
      <div class="container masonry-grid">
        <div class="info-card">
          <div class="card-num">01</div>
          <h3>{{ $t('manufacturers2.cards.title1') }}</h3>
          <p>{{ $t('manufacturers2.cards.text1') }}</p>
          <a
            href="/docs/trebovaniya_k_usveos.pdf"
            class="card-link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('manufacturers2.cards.btn1') }}
          </a>
        </div>

        <div class="info-card">
          <div class="card-num">03</div>
          <h3>{{ $t('manufacturers2.cards.title3') }}</h3>
          <p>{{ $t('manufacturers2.cards.text3') }}</p>
        </div>

        <div class="info-card">
          <div class="card-num">04</div>
          <h3>{{ $t('manufacturers2.cards.title4') }}</h3>
          <p>{{ $t('manufacturers2.cards.text4') }}</p>
          <div class="contacts-block">
            <p>
              <strong>{{ $t('manufacturers2.cards.email_label') }}</strong>
              <a href="mailto:info@evak.online">info@evak.online</a>
            </p>
            <p>
              <strong>{{ $t('manufacturers2.cards.phone_label') }}</strong>
              <a href="tel:+77273903488">+7 (727) 390-34-88 (705)</a>
            </p>
            <p class="phone-second"><a href="tel:+77771163655">+7 (777) 116-36-55</a></p>
          </div>
        </div>

        <div class="info-card wide-card">
          <div class="card-num">02</div>
          <h3>{{ $t('manufacturers2.cards.title2') }}</h3>
          <div class="card-steps">
            <p>{{ $t('manufacturers2.cards.text2_1') }}</p>
            <p>{{ $t('manufacturers2.cards.text2_2') }}</p>
            <p>{{ $t('manufacturers2.cards.text2_3') }}</p>
            <p>{{ $t('manufacturers2.cards.text2_4') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="form-section">
      <div class="container form-layout">
        <div class="form-info">
          <span class="form-badge">{{ $t('manufacturers2.form.badge') }}</span>
          <h2>{{ $t('manufacturers2.form.title') }}</h2>
          <p class="form-desc">{{ $t('manufacturers2.form.description') }}</p>
          <ul class="features-list">
            <li>{{ $t('manufacturers2.form.feat1') }}</li>
            <li>{{ $t('manufacturers2.form.feat2') }}</li>
            <li>{{ $t('manufacturers2.form.feat3') }}</li>
          </ul>
        </div>
        <div class="action-container">
          <button @click="isModalOpen = true" class="open-modal-btn">
            {{ $t('manufacturers2.form.btn') }}
          </button>
        </div>
      </div>
    </section>

    <div v-if="isModalOpen" class="modal-overlay" @click.self="isModalOpen = false">
      <div class="modal-window">
        <button class="close-btn" @click="isModalOpen = false">&times;</button>
        <div class="modal-header">
          <h3>{{ $t('manufacturers2.modal.title') }}</h3>
        </div>
        <div class="modal-body">
          <form @submit.prevent>
            <div class="input-group">
              <input type="text" :placeholder="$t('manufacturers2.modal.org')" required />
            </div>
            <div class="input-group">
              <input type="text" :placeholder="$t('manufacturers2.modal.bin')" required />
            </div>
            <div class="input-group">
              <input type="text" :placeholder="$t('manufacturers2.modal.address')" required />
            </div>

            <div class="form-section-title">{{ $t('manufacturers2.modal.bank_details') }}</div>
            <div class="input-group">
              <input type="text" :placeholder="$t('manufacturers2.modal.iik')" required />
            </div>
            <div class="input-group">
              <input type="text" :placeholder="$t('manufacturers2.modal.bank')" required />
            </div>
            <div class="input-group">
              <input type="text" :placeholder="$t('manufacturers2.modal.bik')" />
            </div>

            <div class="form-section-title">{{ $t('manufacturers2.modal.contact_details') }}</div>
            <div class="input-group">
              <input type="text" :placeholder="$t('manufacturers2.modal.name')" required />
            </div>
            <div class="input-group">
              <input type="tel" :placeholder="$t('manufacturers2.modal.phone')" required />
            </div>
            <div class="input-group">
              <input type="email" :placeholder="$t('manufacturers2.modal.email')" required />
            </div>
            <div class="input-group">
              <input type="number" :placeholder="$t('manufacturers2.modal.count')" required />
            </div>

            <button type="submit" class="submit-btn">
              {{ $t('manufacturers2.modal.submit') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isModalOpen = ref(false)
</script>

<style scoped>
.page-container {
  width: 100%;
}

.container {
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
}

.hero-section {
  background: radial-gradient(circle at 40% 70%, #2e0f35 0%, #170d22 55%, #0a0813 100%);
  padding: 60px 0 80px 0;
  height: 460px;
  display: flex;
  align-items: center;
}

.badge {
  color: var(--accent-color);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 20px;
}

.hero-section h1 {
  color: var(--text-color-white);
  font-size: 48px;
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 24px 0;
}

.hero-section p {
  color: var(--text-color-second-white);
  font-size: 15px;
  max-width: 600px;
  line-height: 1.5;
  margin: 0;
}

.info-grid-section {
  padding: 60px 0;
  background-color: #f8fafc;
}

.masonry-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}

.info-card {
  background-color: var(--surface);
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 30px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.wide-card {
  grid-row: span 3;
}

.card-num {
  color: var(--accent-color);
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 20px;
}

.info-card h3 {
  color: var(--text-strong);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 14px 0;
}

.info-card p {
  color: var(--muted-text-2);
  font-size: 13px;
  line-height: 1.6;
  margin: 0;
}

.card-steps p {
  margin-bottom: 14px;
}

.card-steps p:last-child {
  margin-bottom: 0;
}

.card-link-btn {
  display: inline-block;
  align-self: flex-start;
  margin-top: 20px;
  padding: 10px 16px;
  background-color: #0d2566;
  color: var(--text-color-white);
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  border-radius: 4px;
  transition: opacity 0.2s;
}

.card-link-btn:hover {
  opacity: 0.9;
}

.contacts-block {
  margin-top: 14px;
  font-size: 13px;
}

.contacts-block p {
  margin-bottom: 6px;
}

.contacts-block a {
  color: #0d2566;
  text-decoration: none;
  font-weight: 600;
}

.contacts-block .phone-second {
  padding-left: 36px;
}

.form-section {
  background-color: var(--color-background);
  padding: 80px 0;
}

.form-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.form-badge {
  color: var(--second-accent-color);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 16px;
}

.form-info h2 {
  color: var(--text-color-white);
  font-size: 38px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 24px 0;
}

.form-desc {
  color: var(--text-color-second-white);
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 30px 0;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  color: var(--text-color-white);
  font-size: 13px;
  margin-bottom: 12px;
  position: relative;
  padding-left: 20px;
}

.features-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--second-accent-color);
}

.action-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.open-modal-btn {
  background-color: var(--accent-color);
  color: var(--text-color-white);
  border: none;
  border-radius: 6px;
  padding: 20px 40px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.open-modal-btn:hover {
  background-color: #d62c26;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(2, 13, 52, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-window {
  background-color: var(--color-background-third);
  border: 1px solid #11296b;
  border-radius: 8px;
  width: 550px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 40px;
  box-sizing: border-box;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: var(--neutral-300);
  font-size: 32px;
  cursor: pointer;
  line-height: 1;
}

.close-btn:hover {
  color: var(--text-color-white);
}

.modal-header h3 {
  color: var(--text-color-white);
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 24px 0;
}

.form-section-title {
  color: var(--second-accent-color);
  font-size: 14px;
  font-weight: 700;
  margin: 24px 0 14px 0;
}

.input-group {
  margin-bottom: 12px;
}

.input-group input {
  width: 100%;
  background-color: #0d2566;
  border: 1px solid #1e3a8a;
  border-radius: 6px;
  padding: 12px 16px;
  color: var(--text-color-white);
  font-size: 14px;
  box-sizing: border-box;
  outline: none;
}

.input-group input::placeholder {
  color: var(--neutral-300);
}

.submit-btn {
  width: 100%;
  background-color: var(--accent-color);
  color: var(--text-color-white);
  border: none;
  border-radius: 6px;
  padding: 16px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 20px;
}

.submit-btn:hover {
  background-color: #d62c26;
}

.footer-section {
  background-color: #f8fafc;
  padding: 60px 0;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .container {
    width: 100%;
    padding: 0 24px;
    box-sizing: border-box;
  }

  .hero-section {
    height: auto;
    padding: 60px 0;
  }

  .hero-section h1 {
    font-size: 36px;
  }

  .masonry-grid {
    grid-template-columns: 1fr;
  }

  .wide-card {
    grid-row: span 1;
  }

  .form-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .form-info h2 {
    font-size: 32px;
  }

  .modal-window {
    width: 90%;
    max-width: 500px;
    padding: 32px;
  }

  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .hero-section {
    padding: 40px 0;
  }

  .badge {
    font-size: 10px;
    margin-bottom: 16px;
  }

  .hero-section h1 {
    font-size: 28px;
    line-height: 1.2;
  }

  .hero-section p {
    font-size: 14px;
  }

  .info-grid-section {
    padding: 40px 0;
  }

  .masonry-grid {
    gap: 16px;
  }

  .info-card {
    padding: 24px;
  }

  .card-num {
    font-size: 11px;
    margin-bottom: 16px;
  }

  .info-card h3 {
    font-size: 16px;
  }

  .info-card p {
    font-size: 12px;
  }

  .card-link-btn {
    font-size: 11px;
    padding: 8px 12px;
  }

  .form-section {
    padding: 60px 0;
  }

  .form-layout {
    gap: 30px;
  }

  .form-badge {
    font-size: 10px;
    margin-bottom: 12px;
  }

  .form-info h2 {
    font-size: 24px;
  }

  .form-desc {
    font-size: 13px;
    margin-bottom: 20px;
  }

  .features-list li {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .open-modal-btn {
    padding: 16px 32px;
    font-size: 14px;
  }

  .modal-window {
    width: 95%;
    padding: 24px;
  }

  .modal-header h3 {
    font-size: 20px;
  }

  .close-btn {
    font-size: 28px;
    top: 16px;
    right: 16px;
  }

  .form-section-title {
    font-size: 13px;
    margin: 20px 0 12px 0;
  }

  .input-group {
    margin-bottom: 10px;
  }

  .input-group input {
    padding: 10px 14px;
    font-size: 13px;
  }

  .submit-btn {
    padding: 14px;
    font-size: 12px;
    margin-top: 16px;
  }

  .grid-3 {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }

  .hero-section {
    padding: 30px 0;
    height: auto;
  }

  .badge {
    font-size: 9px;
    margin-bottom: 12px;
  }

  .hero-section h1 {
    font-size: 22px;
    line-height: 1.2;
    margin-bottom: 16px;
  }

  .hero-section p {
    font-size: 13px;
    line-height: 1.4;
  }

  .info-grid-section {
    padding: 30px 0;
  }

  .masonry-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .info-card {
    padding: 20px;
  }

  .card-num {
    font-size: 10px;
  }

  .info-card h3 {
    font-size: 15px;
    margin-bottom: 12px;
  }

  .info-card p {
    font-size: 12px;
    line-height: 1.5;
  }

  .card-link-btn {
    font-size: 10px;
    padding: 7px 10px;
    margin-top: 16px;
  }

  .form-section {
    padding: 40px 0;
  }

  .form-layout {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .form-badge {
    font-size: 9px;
    margin-bottom: 10px;
  }

  .form-info h2 {
    font-size: 20px;
    margin-bottom: 16px;
  }

  .form-desc {
    font-size: 12px;
    margin-bottom: 16px;
  }

  .features-list li {
    font-size: 11px;
    margin-bottom: 8px;
    padding-left: 16px;
  }

  .action-container {
    justify-content: center;
  }

  .open-modal-btn {
    padding: 14px 24px;
    font-size: 12px;
    width: 100%;
  }

  .modal-window {
    width: 100%;
    max-height: 95vh;
    padding: 20px;
    border-radius: 12px 12px 0 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
  }

  .modal-overlay {
    padding: 0;
  }

  .modal-header h3 {
    font-size: 18px;
  }

  .close-btn {
    font-size: 24px;
    top: 12px;
    right: 12px;
  }

  .form-section-title {
    font-size: 12px;
    margin: 16px 0 10px 0;
  }

  .input-group {
    margin-bottom: 8px;
  }

  .input-group input {
    padding: 8px 12px;
    font-size: 12px;
  }

  .submit-btn {
    padding: 12px;
    font-size: 11px;
    margin-top: 12px;
  }

  .grid-3 {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .footer-section {
    padding: 40px 0;
  }
}
</style>
