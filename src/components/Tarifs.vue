<script lang="ts" setup></script>

<template>
  <section class="tariffs-section">
    <div class="tariff-card">
      <h2>{{ $t('tariffs.sim.title') }}</h2>
      <p v-html="$t('tariffs.sim.description')"></p>
      <p>{{ $t('tariffs.sim.coverage') }}</p>
      <p>{{ $t('tariffs.sim.requirement') }}</p>
    </div>

    <div class="tariff-card">
      <h2>{{ $t('tariffs.registration.title') }}</h2>
      <ul>
        <li v-html="$t('tariffs.registration.item1')"></li>
        <li v-html="$t('tariffs.registration.item2')"></li>
      </ul>
      <p>{{ $t('tariffs.registration.dataRequirement') }}</p>
      <p>{{ $t('tariffs.registration.timing') }}</p>
      <p>{{ $t('tariffs.registration.automaticRegistration') }}</p>
      <p>{{ $t('tariffs.registration.warning') }}</p>
    </div>
  </section>
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
@media (max-width: 1024px) {
  .tariffs-section {
    flex-direction: column;
    padding: 30px;
  }
  .tariff-card h2 {
    font-size: 24px;
  }
  .tariff-card p,
  .tariff-card li {
    font-size: 14px;
  }
}
@media (max-width: 768px) {
  .tariffs-section {
    flex-direction: column;
    padding: 20px;
    gap: 16px;
  }
  .tariff-card {
    padding: 24px;
    border-radius: 12px;
  }
  .tariff-card h2 {
    font-size: 20px;
    margin-bottom: 16px;
  }
  .tariff-card p,
  .tariff-card li {
    font-size: 13px;
    line-height: 1.5;
    margin-bottom: 12px;
  }
  .tariff-card ul {
    padding-left: 16px;
    margin-bottom: 12px;
  }
}
@media (max-width: 480px) {
  .tariffs-section {
    padding: 16px;
    gap: 12px;
  }
  .tariff-card {
    padding: 16px;
  }
  .tariff-card h2 {
    font-size: 18px;
    margin-bottom: 12px;
  }
  .tariff-card p,
  .tariff-card li {
    font-size: 12px;
    margin-bottom: 10px;
  }
  .tariff-card ul {
    padding-left: 16px;
  }
}
</style>
