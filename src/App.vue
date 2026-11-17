<script setup lang="ts">
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import HelpChat from './components/HelpChat.vue'
</script>

<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
  <HelpChat />
</template>

<style>
:root {
  --color-background: #020d34;
  --color-background-secondary: #d8dfe8;
  --color-background-third: #071d58;
  --main-text-color: #000000;
  --text-color-white: #ffffff;
  --text-color-second-white: rgba(255, 255, 255, 0.7);
  --accent-color: #ee362f;
  --second-accent-color: #e15d2b;
  --muted-text: #6b7280;
  --muted-text-2: #4b5563;
  --neutral-300: #8a9bb8;
  --surface: #ffffff;
  --text-strong: #0f1f3d;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
  background-color: var(--color-background);
  font-family: 'Gilroy Medium', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Gilroy Bold', sans-serif;
}

a {
  text-decoration: none;
}

.hero-bg {
  pointer-events: none;
  z-index: 0;
}

.hero-container {
  position: relative;
  z-index: 1;
}

.page-wrapper {
  position: relative;
  z-index: 1;
}
</style>
