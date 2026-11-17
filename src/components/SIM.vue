<script lang="ts" setup></script>

<template>
  <div class="container">
    <div class="title-dark">{{ $t('procurement.title') }}</div>
    <div class="timeline">
      <div class="timeline-item"><span>01</span> {{ $t('procurement.steps.step01') }}</div>
      <div class="timeline-item"><span>02</span> {{ $t('procurement.steps.step02') }}</div>
      <div class="timeline-item"><span>03</span> {{ $t('procurement.steps.step03') }}</div>
      <div class="timeline-item"><span>04</span> {{ $t('procurement.steps.step04') }}</div>
      <div class="timeline-item"><span>05</span> {{ $t('procurement.steps.step05') }}</div>
      <div class="timeline-item"><span>06</span> {{ $t('procurement.steps.step06') }}</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--text-color-second-white);
  height: 90vh;
}
.timeline {
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 2%;
}

.timeline-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px;
  border-radius: 12px;
  display: flex;
  gap: 16px;
}

.timeline-item span {
  color: #ff6728;
  font-weight: 700;
  width: 30px;
}
.title-dark {
  font-size: 40px;
  font-weight: 700;
  margin-top: 2%;
  color: var(--text-color-white);
}

@media (max-width: 1024px) {
  .container {
    height: auto;
  }
  .title-dark {
    font-size: 32px;
    margin-top: 20px;
  }
  .timeline {
    margin-top: 20px;
  }
  .timeline-item {
    padding: 14px;
    gap: 14px;
  }
}

@media (max-width: 768px) {
  .container {
    height: auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .title-dark {
    font-size: 24px;
    margin-top: 16px;
  }
  .timeline {
    margin-top: 16px;
    gap: 10px;
    margin-bottom: 16px;
  }
  .timeline-item {
    padding: 12px;
    gap: 12px;
    font-size: 14px;
    border-radius: 8px;
  }
  .timeline-item span {
    width: 28px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .container {
    height: auto;
    padding: 0 16px;
    box-sizing: border-box;
  }
  .title-dark {
    font-size: 20px;
    margin-top: 12px;
  }
  .timeline {
    margin-top: 12px;
    gap: 8px;
    margin-bottom: 12px;
  }
  .timeline-item {
    padding: 10px;
    gap: 10px;
    font-size: 12px;
    flex-direction: column;
    border-radius: 6px;
  }
  .timeline-item span {
    width: auto;
    font-size: 12px;
  }
}
</style>
