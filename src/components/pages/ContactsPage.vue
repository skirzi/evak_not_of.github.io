<template>
  <section class="hero">
    <div class="container">
      <span class="hero-label">КОНТАКТЫ</span>
      <h1>Свяжитесь с <span>оператором</span> ГАИС ЭВАК</h1>
      <p>Институт Космической Техники и Технологий — национальный оператор системы.</p>
    </div>
  </section>

  <section class="contacts-section">
    <div class="container contacts-grid">
      <div class="contact-info">
        <div class="info-card">
          <span class="card-label">АДРЕС</span>
          <h3>ул. Кисловодская, 34</h3>
          <p>Алматы, 050060, Республика Казахстан</p>
        </div>

        <div class="info-card">
          <span class="card-label">ТЕЛЕФОН</span>
          <h3>+7 (727) 221-77-95</h3>
        </div>

        <div class="info-card">
          <span class="card-label">ЭКСТРЕННАЯ ЛИНИЯ</span>
          <h3 class="red">112</h3>
        </div>

        <div class="info-card">
          <span class="card-label">EMAIL</span>
          <h3>info@evak.online</h3>
        </div>

        <div class="info-card">
          <span class="card-label">РЕЖИМ РАБОТЫ</span>
          <h3>ПН–ПТ · 09:00–18:00</h3>
          <p>Экстренная линия — круглосуточно</p>
        </div>
      </div>

      <div class="contact-form">
        <h2>Напишите нам</h2>
        <span class="subtitle">Ответим в течение рабочего дня.</span>

        <form>
          <div class="row">
            <input
              type="text"
              pattern="[A-Za-zА-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі\s]+"
              placeholder="Имя"
              required
            />
            <input type="email" placeholder="Email" required />
          </div>

          <div class="custom-select" ref="selectRef">
            <div
              class="select-trigger"
              :class="{ placeholder: !selectedTheme, 'is-open': isSelectOpen }"
              @click="isSelectOpen = !isSelectOpen"
            >
              {{ selectedThemeText }}
            </div>

            <ul class="select-options" v-if="isSelectOpen">
              <li
                v-for="option in themes"
                :key="option.value"
                @click="selectOption(option.value, option.text)"
                :class="{ 'is-selected': selectedTheme === option.value }"
              >
                {{ option.text }}
              </li>
            </ul>

            <select name="theme" :value="selectedTheme" required style="display: none">
              <option value=""></option>
              <option v-for="opt in themes" :key="opt.value" :value="opt.value">
                {{ opt.text }}
              </option>
            </select>
          </div>

          <textarea placeholder="Сообщение" required></textarea>

          <label class="checkbox">
            <input type="checkbox" required />
            <span>Я согласен с обработкой персональных данных согласно законодательству РК</span>
          </label>

          <button type="submit">ОТПРАВИТЬ ОБРАЩЕНИЕ</button>
        </form>
      </div>
    </div>
  </section>

  <section class="office-section">
    <div class="container">
      <span class="office-label">КАК НАС НАЙТИ</span>
      <div class="office-header">
        <h2>Офис в Алматы</h2>
        <a
          href="https://2gis.kz/search/43.254935438467605,76.85675102356848"
          target="_blank"
          class="open-map-link"
        >
          Открыть карту <span class="arrow">→</span>
        </a>
      </div>

      <div class="office-grid">
        <div class="office-map-container">
          <Map />
        </div>

        <div class="office-card">
          <div class="office-card-content">
            <span class="office-card-subtitle">ОФИС ОПЕРАТОРА</span>
            <h3>ТОО «ИКТТ»</h3>
            <p class="office-address">
              ул. Кисловодская, 34<br />
              Алматы, 050061<br />
              Республика Казахстан
            </p>

            <div class="office-hours">
              <div class="hours-row">
                <span class="days">Пн–Пт</span>
                <span class="time">09:00 — 18:00</span>
              </div>
              <div class="hours-row">
                <span class="days">Сб–Вс</span>
                <span class="time">Выходной</span>
              </div>
            </div>

            <div class="office-emergency">
              <span class="emergency-title">Экстр. линия</span>
              <span class="emergency-value">24/7</span>
            </div>
          </div>

          <button class="route-button" @click="handleRouteClick">ПОСТРОИТЬ МАРШРУТ →</button>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container footer-grid">
      <a href="https://www.gov.kz/memleket/entities/maidd?lang=ru">
        <div class="footer-card">
          <span>МИНИСТЕРСТВО</span>
          <h4>МИИЦР РК</h4>
        </div>
      </a>
      <a href="https://www.gov.kz/memleket/entities/kazcosmos?lang=ru">
        <div class="footer-card">
          <span>КОМИТЕТ</span>
          <h4>Аэрокосмический комитет</h4>
        </div>
      </a>
      <a href="https://istt.kz/">
        <div class="footer-card">
          <span>ОПЕРАТОР</span>
          <h4>ТОО «ИКТТ»</h4>
        </div>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Map from '../Map.vue'

const isSelectOpen = ref(false)
const selectedTheme = ref('')
const selectRef = ref<HTMLElement | null>(null)

const themes = [
  { value: 'owners', text: 'Вопрос автовладельца' },
  { value: 'manufacturers', text: 'Сотрудничество (производитель)' },
  { value: 'installers', text: 'Сотрудничество (уст. центр)' },
  { value: 'import', text: 'Импорт авто и СБКТС' },
  { value: 'media', text: 'Пресса и СМИ' },
]

const selectedThemeText = computed(() => {
  const found = themes.find((t) => t.value === selectedTheme.value)
  return found ? found.text : 'Выберите тему'
})

const selectOption = (value: string, text: string) => {
  selectedTheme.value = value
  isSelectOpen.value = false
}

const closeCustomSelect = (e: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(e.target as Node)) {
    isSelectOpen.value = false
  }
}

const handleRouteClick = () => {
  const lat = 43.254935438467605
  const lng = 76.85675102356848

  const google = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
  const apple = `http://maps.apple.com/?q=${lat},${lng}`
  const yandex = `https://yandex.com/maps/?ll=${lng},${lat}&z=16`
  const twogis = `https://2gis.kz/search/${lat},${lng}`

  if (/iPhone|iPad|Mac/i.test(navigator.userAgent)) {
    window.open(apple, '_blank')
  } else if (/Android/i.test(navigator.userAgent)) {
    window.open(google, '_blank')
  } else if (/YaBrowser/i.test(navigator.userAgent)) {
    window.open(yandex, '_blank')
  } else {
    window.open(twogis, '_blank')
  }
}

onMounted(() => {
  document.addEventListener('click', closeCustomSelect)
})
onUnmounted(() => {
  document.removeEventListener('click', closeCustomSelect)
})
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box;
}

.hero {
  height: 420px;
  display: flex;
  align-items: center;
  background:
    radial-gradient(circle at top right, #1c235f 0%, transparent 35%),
    linear-gradient(90deg, #3a1033 0%, #22134a 100%);
}

.hero-label {
  display: block;
  color: #ff5c24;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 18px;
}

.hero h1 {
  color: #fff;
  font-size: 60px;
  font-weight: 800;
  line-height: 1.05;
  max-width: 900px;
  margin-bottom: 22px;
}

.hero h1 span {
  color: #ff5c24;
}

.hero p {
  color: #d7dced;
  font-size: 18px;
  line-height: 1.7;
  max-width: 700px;
}

.contacts-section {
  padding: 80px 0 40px 0;
}

.contacts-grid {
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 40px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.info-card {
  background: #fff;
  border: 1px solid #cfd8e6;
  border-radius: 10px;
  padding: 28px;
}

.card-label {
  display: block;
  color: #7f8ca4;
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 12px;
}

.info-card h3 {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
  color: #00134f;
}

.info-card p {
  margin-top: 8px;
  color: #6d7992;
  font-size: 14px;
  line-height: 1.6;
}

.red {
  color: #ff412f;
}

.contact-form {
  background: #dfe7f4;
  border: 1px solid #c8d1df;
  border-radius: 12px;
  padding: 36px;
}

.contact-form h2 {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 10px;
}

.subtitle {
  display: block;
  color: #66748f;
  margin-bottom: 30px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

input,
textarea {
  width: 100%;
  border: 1px solid #c7d0df;
  background: #fff;
  border-radius: 6px;
  padding: 16px 18px;
  font-family: inherit;
  font-size: 15px;
  color: #00134f;
  box-sizing: border-box;
}

.custom-select {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin-bottom: 16px;
  user-select: none;
}

.select-trigger {
  width: 100%;
  border: 1px solid #c7d0df;
  background: #fff;
  border-radius: 6px;
  padding: 16px 45px 16px 18px;
  font-size: 15px;
  color: #00134f;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.select-trigger.placeholder {
  color: #7f8ca4;
}

.select-trigger::after {
  content: '';
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #00134f;
  transition: transform 0.2s ease;
}

.select-trigger.is-open::after {
  transform: translateY(-50%) rotate(180deg);
}

.select-options {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-width: 100%;
  background: #fff;
  border: 1px solid #c7d0df;
  border-radius: 6px;
  margin: 4px 0 0 0;
  padding: 0;
  list-style: none;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 19, 79, 0.08);
  box-sizing: border-box;
}

.select-options li {
  padding: 14px 18px;
  font-size: 15px;
  color: #00134f;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
}

.select-options li:hover {
  background: #dfe7f4;
}

.select-options li.is-selected {
  background: #00134f;
  color: #fff;
}

textarea {
  resize: none;
  height: 180px;
  margin-bottom: 18px;
}

.checkbox {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 24px;
  font-size: 13px;
  color: #66748f;
}

.checkbox input {
  width: 16px;
  height: 16px;
  margin-top: 2px;
  flex-shrink: 0;
}

button {
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 6px;
  background: #ff392f;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #f22d24;
}

.office-section {
  padding: 60px 0 80px 0;
  background-color: #eef3fb;
}

.office-label {
  display: block;
  color: #ff392f;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.office-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 32px;
}

.office-header h2 {
  font-size: 48px;
  font-weight: 800;
  color: #00134f;
  margin: 0;
}

.open-map-link {
  color: #00134f;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s ease;
}

.open-map-link:hover {
  color: #ff392f;
}

.office-grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 32px;
  align-items: stretch;
}

.office-map-container {
  width: 100%;
  height: 480px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 19, 79, 0.05);
}

.office-map-container :deep(.map-wrapper) {
  max-width: 100% !important;
  height: 100% !important;
  border-radius: 12px !important;
}

.office-card {
  background-color: #000c36;
  border-radius: 14px;
  padding: 40px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 12, 54, 0.15);
  box-sizing: border-box;
}

.office-card-subtitle {
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: #7d92c8;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.office-card h3 {
  font-size: 28px;
  font-weight: 800;
  margin: 0 0 20px 0;
  color: #ffffff;
}

.office-address {
  font-size: 15px;
  line-height: 1.6;
  color: #b0c2f0;
  margin: 0 0 32px 0;
}

.office-hours {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 16px;
  margin-bottom: 20px;
}

.hours-row {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  margin-bottom: 12px;
}

.hours-row:last-child {
  margin-bottom: 0;
}

.hours-row .days {
  color: #b0c2f0;
}

.hours-row .time {
  font-weight: 600;
  color: #ffffff;
}

.office-emergency {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  margin-bottom: 40px;
}

.emergency-title {
  color: #b0c2f0;
}

.emergency-value {
  font-weight: 700;
  color: #ff5c24;
}

.route-button {
  width: 100%;
  height: 56px;
  background-color: #ff392f;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.1s ease;
}

.route-button:hover {
  background-color: #f22d24;
}

.route-button:active {
  transform: scale(0.99);
}

.footer {
  background: #00185f;
  padding: 40px 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.footer a {
  text-decoration: none;
}

.footer-card {
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 24px;
  height: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.footer-card:hover {
  border-color: #ff5c24;
}

.footer-card span {
  display: block;
  color: #7d92c8;
  font-size: 11px;
  margin-bottom: 10px;
}

.footer-card h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
}

@media (max-width: 1200px) {
  .container {
    padding: 0 32px;
  }

  .hero h1 {
    font-size: 48px;
  }

  .contacts-grid {
    grid-template-columns: 360px 1fr;
    gap: 32px;
  }

  .info-card h3 {
    font-size: 24px;
  }

  .contact-form h2 {
    font-size: 36px;
  }

  .office-grid {
    grid-template-columns: 1fr 340px;
    gap: 24px;
  }

  .office-header h2 {
    font-size: 38px;
  }

  .office-card {
    padding: 32px 24px 24px 24px;
  }
}

@media (max-width: 992px) {
  .hero {
    height: auto;
    padding: 60px 0;
  }

  .contacts-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .info-card:nth-child(1) {
    grid-column: span 2;
  }

  .office-grid {
    grid-template-columns: 1fr;
  }

  .office-map-container {
    height: 400px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 16px;
  }

  .contacts-section {
    padding: 40px 0;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }

  .info-card:nth-child(1) {
    grid-column: span 1;
  }

  .contact-form {
    padding: 24px;
  }

  .contact-form h2 {
    font-size: 30px;
  }

  .row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .custom-select {
    max-width: 100%;
  }

  .office-header h2 {
    font-size: 32px;
  }

  .office-section {
    padding: 40px 0 60px 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }

  .hero h1 {
    font-size: 28px;
  }

  .info-card {
    padding: 20px;
  }

  .info-card h3 {
    font-size: 20px;
  }

  .contact-form h2 {
    font-size: 24px;
  }

  .office-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .office-header h2 {
    font-size: 26px;
  }
}
</style>
