<template>
  <div class="faq-container">
    <h1 class="faq-main-title">{{ faqData?.title || 'FAQ' }}</h1>

    <div class="faq-sections">
      <div
        v-for="(section, sectionKey) in normalizedSections"
        :key="sectionKey"
        class="faq-section"
      >
        <h2 class="faq-section-title">{{ section.title }}</h2>

        <div class="faq-accordion">
          <div
            v-for="(item, index) in section.items"
            :key="index"
            class="faq-item"
            :class="{ 'faq-item--active': isOpen(`${String(sectionKey)}-${index}`) }"
          >
            <button class="faq-trigger" @click="toggleItem(`${String(sectionKey)}-${index}`)">
              <span class="faq-question">{{ item.question }}</span>
              <span class="faq-icon"></span>
            </button>

            <div v-if="isOpen(`${String(sectionKey)}-${index}`)" class="faq-content">
              <p class="faq-answer">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface FaqItem {
  question: string
  answer: string
}

interface NormalizedSection {
  title: string
  items: FaqItem[]
}

const { tm } = useI18n()

const faqData = computed(() => tm('faq') as any)

const normalizedSections = computed<Record<string, NormalizedSection>>(() => {
  const sections: Record<string, NormalizedSection> = {}
  const rawSections = faqData.value?.sections

  if (!rawSections) return sections

  for (const [key, sectionValue] of Object.entries(rawSections)) {
    if (!sectionValue || typeof sectionValue !== 'object') continue

    const section = sectionValue as Record<string, any>
    const items: FaqItem[] = []

    for (const [subKey, subValue] of Object.entries(section)) {
      if (subKey.startsWith('items[') && subValue && typeof subValue === 'object') {
        items.push(subValue as FaqItem)
      }
    }

    if (items.length === 0 && section.items) {
      if (Array.isArray(section.items)) {
        items.push(...section.items)
      } else if (typeof section.items === 'object') {
        items.push(...(Object.values(section.items) as FaqItem[]))
      }
    }

    sections[key] = {
      title: section.title || '',
      items: items.filter((item) => item && item.question && item.answer),
    }
  }

  return sections
})

const activeItems = ref<string[]>([])

const toggleItem = (id: string) => {
  const index = activeItems.value.indexOf(id)
  if (index > -1) {
    activeItems.value.splice(index, 1)
  } else {
    activeItems.value.push(id)
  }
}

const isOpen = (id: string) => activeItems.value.includes(id)
</script>

<style scoped>
.faq-container {
  background-color: var(--color-background);
  min-height: 100vh;
  padding: 60px 20px;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}

.faq-main-title {
  color: var(--text-color-white);
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  font-weight: 700;
}

.faq-sections {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.faq-section-title {
  color: var(--text-color-white);
  font-size: 1.6rem;
  margin-bottom: 25px;
  border-left: 4px solid var(--accent-color);
  padding-left: 15px;
  font-weight: 600;
}

.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background-color: var(--color-background-third);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.faq-item--active {
  border-color: var(--second-accent-color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.faq-trigger {
  width: 100%;
  background: none;
  border: none;
  padding: 24px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: var(--text-color-white);
  font-size: 1.1rem;
  font-weight: 600;
  gap: 24px;
}

.faq-trigger:hover .faq-question {
  color: var(--second-accent-color);
}

.faq-question {
  flex: 1;
  line-height: 1.5;
  transition: color 0.2s;
}

.faq-icon {
  position: relative;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.faq-icon::before,
.faq-icon::after {
  content: '';
  position: absolute;
  background-color: var(--neutral-300);
  transition:
    transform 0.3s,
    background-color 0.3s;
}

.faq-icon::before {
  top: 6px;
  left: 0;
  width: 14px;
  height: 2px;
}

.faq-icon::after {
  top: 0;
  left: 6px;
  width: 2px;
  height: 14px;
}

.faq-item--active .faq-icon::after {
  transform: scaleY(0);
}

.faq-item--active .faq-icon::before {
  background-color: var(--second-accent-color);
}

.faq-content {
  padding: 0 24px 24px 24px;
}

.faq-answer {
  color: var(--text-color-second-white);
  line-height: 1.6;
  font-size: 1rem;
  white-space: pre-line;
  margin: 0;
}
</style>
