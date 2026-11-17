<template>
  <div class="map-wrapper">
    <div id="map"></div>
  </div>
</template>

<style scoped>
.map-wrapper {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 220px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

#map {
  width: 100%;
  height: 100%;
  background-color: #00031c;
  filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
}

:deep(.leaflet-popup-content-wrapper) {
  background: #0d1130;
  color: rgba(255, 255, 255, 0.9);
  border-radius: 6px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.leaflet-popup-tip) {
  background: #0d1130;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const lat = 43.254935438467605
const lng = 76.85675102356848

onMounted(() => {
  const map = L.map('map', {
    attributionControl: false,
    zoomControl: false,
  }).setView([lat, lng], 15)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map)

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup('ТОО "Институт Космической Техники и Технологий"')
    .openPopup()
})

function onButtonClick() {
  const google = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
  const apple = `http://maps.apple.com/?q=${lat},${lng}`
  const yandex = `https://yandex.com/maps/?ll=${lat},${lng}&z=16`
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
</script>
