<template>
  <section class="hero">
    <div class="hero-content">
      <span class="hero-label">{{ $t('newsMain.hero.label') }}</span>

      <h1 v-html="$t('newsMain.hero.title')"></h1>

      <p>{{ $t('newsMain.hero.description') }}</p>
    </div>
  </section>

  <section class="news">
    <div class="container">
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab.value || 'all'"
          class="tab"
          :class="{ active: activeTab === tab.value }"
          @click="setTab(tab.value)"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="news-grid">
        <article class="card" v-for="item in filteredNews" :key="item.id">
          <div class="card-image">
            <img :src="item.img || ''" :alt="item.title" />
            <span class="badge">{{ item.badge }}</span>
          </div>

          <div class="card-body">
            <span class="date">{{ item.date }}</span>

            <h3>{{ item.title }}</h3>

            <p>{{ item.excerpt }}</p>

            <a :href="item.link || '#'">{{ $t('newsMain.read_more') }} &rarr;</a>
          </div>
        </article>

        <p v-if="filteredNews.length === 0">{{ $t('newsMain.empty') }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface NewsItem {
  id: number
  categoryValue: string
  badge: string
  date: string
  title: string
  excerpt: string
  img?: string
  link?: string
}

const tabs = computed(() => [
  { label: t('newsMain.tabs.all'), value: '' },
  { label: t('newsMain.tabs.rescue'), value: 'rescue' },
  { label: t('newsMain.tabs.regulation'), value: 'regulation' },
  { label: t('newsMain.tabs.technology'), value: 'technology' },
  { label: t('newsMain.tabs.partners'), value: 'partners' },
])

const activeTab = ref('')

const news = computed<NewsItem[]>(() => [
  {
    id: 1,
    categoryValue: 'rescue',
    badge: t('newsMain.tabs.rescue'),
    date: '30.10.2025',
    title: t('newsMain.items.1.title'),
    excerpt: t('newsMain.items.1.excerpt'),
  },
  {
    id: 2,
    categoryValue: 'regulation',
    badge: t('newsMain.tabs.regulation'),
    date: '05.02.2025',
    title: t('newsMain.items.2.title'),
    excerpt: t('newsMain.items.2.excerpt'),
  },
  {
    id: 3,
    categoryValue: 'technology',
    badge: t('newsMain.tabs.technology'),
    date: '12.12.2024',
    title: t('newsMain.items.3.title'),
    excerpt: t('newsMain.items.3.excerpt'),
  },
  {
    id: 4,
    categoryValue: 'rescue',
    badge: t('newsMain.tabs.rescue'),
    date: '18.09.2024',
    title: t('newsMain.items.4.title'),
    excerpt: t('newsMain.items.4.excerpt'),
  },
  {
    id: 5,
    categoryValue: 'partners',
    badge: t('newsMain.tabs.partners'),
    date: '02.07.2024',
    title: t('newsMain.items.5.title'),
    excerpt: t('newsMain.items.5.excerpt'),
  },
  {
    id: 6,
    categoryValue: 'technology',
    badge: t('newsMain.tabs.technology'),
    date: '15.05.2024',
    title: t('newsMain.items.6.title'),
    excerpt: t('newsMain.items.6.excerpt'),
  },
])

const filteredNews = computed(() => {
  if (!activeTab.value) return news.value
  return news.value.filter((n) => n.categoryValue === activeTab.value)
})

function setTab(value: string) {
  activeTab.value = value
}
</script>

<style scoped>
.container {
  width: 1440px;
  margin: 0 auto;
}

.hero {
  height: 420px;
  background:
    radial-gradient(circle at top right, #1d235f 0%, transparent 35%),
    linear-gradient(90deg, #3f1133 0%, #23144c 100%);
  display: flex;
  align-items: center;
}

.hero-content {
  width: 1440px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10%;
}

.hero-label {
  color: #ff6a1a;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 18px;
}

.hero h1 {
  color: #fff;
  font-size: 60px;
  line-height: 1.05;
  font-weight: 800;
  margin-bottom: 24px;
}

.hero h1 br {
  display: block;
}

.hero h1::after {
  content: '';
}

.hero h1 span {
  color: #ff5a1f;
}

.hero p {
  color: #d4d8e5;
  font-size: 18px;
  line-height: 1.7;
  max-width: 700px;
}

.news {
  padding: 70px 0 90px;
}

.tabs {
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
}

.tab {
  border: none;
  background: #dce5f3;
  color: #061d61;
  font-size: 14px;
  font-weight: 600;
  border-radius: 40px;
  padding: 15px 24px;
  cursor: pointer;
}

.tab.active {
  background: #071d67;
  color: #fff;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.card {
  background: #fff;
  border: 1px solid #d8dee7;
  border-radius: 8px;
  overflow: hidden;
}

.card-image {
  position: relative;
  height: 270px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: #081f61;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: 20px;
}

.card-body {
  padding: 24px;
}

.date {
  display: block;
  color: #ff5b31;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 18px;
}

.card h3 {
  color: #00195a;
  font-size: 28px;
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 18px;
}

.card p {
  color: #58657c;
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 28px;
}

.card a {
  text-decoration: none;
  color: #00195a;
  font-weight: 700;
  font-size: 15px;
}

.card:hover {
  transform: translateY(-5px);
  transition: 0.3s;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
}

@media (max-width: 1024px) {
  .container {
    width: 100%;
    padding: 0 24px;
    box-sizing: border-box;
  }

  .hero {
    height: auto;
    padding: 60px 0;
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 16px;
  }

  .news-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }

  .tabs {
    gap: 12px;
  }

  .tab {
    padding: 12px 20px;
    font-size: 13px;
  }

  .card h3 {
    font-size: 22px;
  }

  .card p {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .hero {
    height: auto;
    padding: 40px 0;
  }

  .hero-label {
    font-size: 11px;
    margin-bottom: 16px;
  }

  .hero h1 {
    font-size: 28px;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  .hero h1 br {
    display: block;
  }

  .hero p {
    font-size: 14px;
    line-height: 1.6;
  }

  .news {
    padding: 40px 0 60px;
  }

  .tabs {
    gap: 10px;
    margin-bottom: 30px;
    flex-wrap: wrap;
  }

  .tab {
    padding: 10px 16px;
    font-size: 12px;
  }

  .news-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .card-image {
    height: 240px;
  }

  .card-body {
    padding: 20px;
  }

  .date {
    font-size: 11px;
    margin-bottom: 14px;
  }

  .card h3 {
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 14px;
  }

  .card p {
    font-size: 13px;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .card a {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .container {
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
  }

  .hero {
    height: auto;
    padding: 30px 0;
  }

  .hero-label {
    font-size: 10px;
    margin-bottom: 12px;
  }

  .hero h1 {
    font-size: 22px;
    line-height: 1.2;
    margin-bottom: 16px;
  }

  .hero p {
    font-size: 13px;
    line-height: 1.5;
  }

  .news {
    padding: 30px 0 40px;
  }

  .tabs {
    gap: 8px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .tab {
    padding: 8px 12px;
    font-size: 11px;
  }

  .news-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .card {
    border-radius: 6px;
  }

  .card-image {
    height: 200px;
  }

  .badge {
    top: 10px;
    left: 10px;
    font-size: 10px;
    padding: 6px 10px;
  }

  .card-body {
    padding: 16px;
  }

  .date {
    font-size: 10px;
    margin-bottom: 10px;
  }

  .card h3 {
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 12px;
  }

  .card p {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .card a {
    font-size: 12px;
  }

  .card:hover {
    transform: translateY(-2px);
  }
}
</style>
