<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-column footer-brand">
          <div class="footer-logo">
            <img src="../assets/imgs/logo.png" alt="Logo" />
          </div>

          <div class="footer-description">
            {{ $t('footer.description') }}
          </div>
        </div>

        <div class="footer-column">
          <div class="footer-title">{{ $t('footer.services.title') }}</div>

          <div class="footer-links">
            <router-link to="/owners">{{ $t('footer.services.owners') }}</router-link>
            <router-link to="/manufacturers">{{ $t('footer.services.manufacturers') }}</router-link>
            <router-link to="/installation-centers">{{
              $t('footer.services.installationCenters')
            }}</router-link>
            <router-link to="/importers">{{ $t('footer.services.importers') }}</router-link>
          </div>
        </div>

        <div class="footer-column">
          <div class="footer-title">{{ $t('footer.information.title') }}</div>

          <div class="footer-links">
            <router-link to="/about">{{ $t('footer.information.about') }}</router-link>
            <router-link to="/news">{{ $t('footer.information.news') }}</router-link>
            <router-link to="/contacts">{{ $t('footer.information.contacts') }}</router-link>
          </div>
        </div>

        <div class="footer-column">
          <div class="footer-title">{{ $t('footer.contacts.title') }}</div>

          <div class="footer-links">
            <a href="tel:+77272217795">+7 (727) 221-77-95</a>
            <a href="mailto:info@evak.online">info@evak.online</a>
            <span>{{ $t('footer.contacts.address') }}</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>{{ $t('footer.bottom.copyright') }}</div>
        <div>{{ $t('footer.bottom.allRightsReserved') }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* (Стили остались прежними) */
.footer {
  width: 100%;
  padding: 56px 120px;
  background: #00031c;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
  flex-wrap: wrap;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 180px;
}

.footer-brand {
  max-width: 320px;
}

.footer-logo img {
  width: 157px;
  height: 53px;
  object-fit: contain;
}

.footer-description {
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 600;
  line-height: 19.5px;
}

.footer-title {
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  line-height: 16px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-links a,
.footer-links span {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
  transition: 0.2s;
}

.footer-links a:hover {
  color: #ffffff;
}

.footer-links .active {
  color: #ffffff;
}

.footer-bottom {
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-bottom div {
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 600;
  line-height: 16px;
}

@media (max-width: 1024px) {
  .footer {
    padding: 40px 60px;
  }
  .footer-container {
    padding: 0 20px;
  }
  .footer-top {
    gap: 40px;
  }
  .footer-column {
    min-width: 160px;
  }
  .footer-brand {
    max-width: 280px;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 30px 20px;
  }
  .footer-container {
    padding: 0;
  }
  .footer-top {
    flex-direction: column;
    gap: 30px;
  }
  .footer-column {
    min-width: auto;
  }
  .footer-brand {
    max-width: 100%;
  }
  .footer-logo img {
    width: 140px;
    height: 47px;
  }
  .footer-description {
    font-size: 11px;
  }
  .footer-title {
    font-size: 11px;
  }
  .footer-links a,
  .footer-links span {
    font-size: 13px;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding-top: 20px;
  }
  .footer-bottom div {
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 20px 16px;
  }
  .footer-container {
    padding: 0;
    gap: 24px;
  }
  .footer-top {
    flex-direction: column;
    gap: 20px;
  }
  .footer-column {
    gap: 12px;
  }
  .footer-brand {
    max-width: 100%;
  }
  .footer-logo img {
    width: 120px;
    height: 40px;
  }
  .footer-description {
    font-size: 10px;
    line-height: 1.4;
  }
  .footer-title {
    font-size: 10px;
  }
  .footer-links {
    gap: 6px;
  }
  .footer-links a,
  .footer-links span {
    font-size: 12px;
    line-height: 18px;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding-top: 16px;
  }
  .footer-bottom div {
    font-size: 10px;
  }
}
</style>
