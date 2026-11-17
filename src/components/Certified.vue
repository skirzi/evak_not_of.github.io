<template>
  <section :class="['section', { shifted: isShifted }]">
    <h2 class="section-title">{{ $t('centers.title') }}</h2>
    <table class="centers-table">
      <thead>
        <tr>
          <th>{{ $t('centers.table.name') }}</th>
          <th>{{ $t('centers.table.address') }}</th>
          <th>{{ $t('centers.table.contacts') }}</th>
          <th>{{ $t('centers.table.schedule') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="center in localizedCenters" :key="center.id">
          <td>{{ center.name }}</td>
          <td>{{ center.location }}</td>
          <td>{{ center.contact }}</td>
          <td>{{ center.schedule }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm, rt } = useI18n()

const isShifted = ref(false)

interface LocalizedCenter {
  id: string
  name: string
  location: string
  contact: string
  schedule: string
}

const localizedCenters = computed(() => {
  const listMessage = tm('centers.list') as Record<
    string,
    {
      name: string
      location: string
      contact: string
      schedule: string
    }
  >

  if (!listMessage) return []

  return Object.entries(listMessage).map(([key, rawCenter]): LocalizedCenter => {
    return {
      id: key,
      name: rawCenter.name ? rt(rawCenter.name) : '',
      location: rawCenter.location ? rt(rawCenter.location) : '',
      contact: rawCenter.contact ? rt(rawCenter.contact) : '',
      schedule: rawCenter.schedule ? rt(rawCenter.schedule) : '',
    }
  })
})
</script>

<style scoped>
.section {
  width: 91%;
  margin: 5%;
  font-family: Arial, sans-serif;
  color: var(--text-strong);
  transition: transform 0.3s ease;
  background-color: var(--color-background-secondary);
  border-radius: 20px;
  padding: 20px 40px;
}

.section.shifted {
  transform: translateX(150px);
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-background-third);
  margin-bottom: 12px;
}

.centers-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
}

.centers-table th,
.centers-table td {
  border: 1px solid var(--neutral-300);
  padding: 8px;
  font-size: 0.95rem;
  color: var(--text-strong);
}

.centers-table th {
  background: var(--color-background-third);
  color: var(--text-color-white);
  font-weight: 600;
  text-align: left;
}

.centers-table td {
  background: var(--surface);
}

@media (max-width: 1024px) {
  .section {
    padding: 20px 30px;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .centers-table th,
  .centers-table td {
    padding: 6px;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .section {
    width: 95%;
    margin: 2.5%;
    padding: 16px 20px;
    border-radius: 12px;
  }

  .section.shifted {
    transform: translateX(0);
  }

  .section-title {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }

  .centers-table {
    font-size: 0.85rem;
  }

  .centers-table th,
  .centers-table td {
    padding: 6px 4px;
    font-size: 0.8rem;
  }

  .centers-table th {
    font-weight: 600;
  }
}

@media (max-width: 480px) {
  .section {
    width: 100%;
    margin: 0;
    padding: 12px 12px;
    border-radius: 8px;
  }

  .section-title {
    font-size: 0.95rem;
    margin-bottom: 10px;
  }

  .centers-table {
    font-size: 0.7rem;
    margin-top: 10px;
  }

  .centers-table th,
  .centers-table td {
    padding: 4px 2px;
    font-size: 0.7rem;
    border: 1px solid var(--neutral-300);
  }

  .centers-table th {
    word-break: break-word;
  }

  .centers-table td {
    word-break: break-word;
    white-space: normal;
  }
}
</style>
