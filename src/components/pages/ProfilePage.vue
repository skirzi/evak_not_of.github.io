<template>
  <div class="profile-container">
    <aside class="sidebar">
      <div class="user-avatar-block">
        <div class="avatar-circle">АН</div>
        <div class="user-meta">
          <h2 class="user-name">Айдар Нурланов</h2>
          <span class="user-id">{{ $t('profile.sidebar.id', { id: '00482931' }) }}</span>
        </div>
      </div>
      <nav class="menu">
        <a href="#" class="menu-item active">{{ $t('profile.menu.personal_data') }}</a>
        <a href="#" class="menu-item">
          <span class="menu-text">{{ $t('profile.menu.my_cars') }}</span>
        </a>
        <a href="#" class="menu-item">
          <span class="menu-text">{{ $t('profile.menu.history') }}</span>
        </a>
        <a href="#" class="menu-item">
          <span class="menu-text">{{ $t('profile.menu.settings') }}</span>
        </a>
        <hr class="divider" />
        <a href="#" class="menu-item logout-btn">{{ $t('profile.menu.logout') }}</a>
      </nav>
    </aside>

    <main class="main-content">
      <h1 class="section-title">{{ $t('profile.content.title') }}</h1>
      <div class="data-grid">
        <div class="data-field">
          <label>{{ $t('profile.content.fields.name') }}</label>
          <p>Айдар Нурланов</p>
        </div>
        <div class="data-field">
          <label>{{ $t('profile.content.fields.iin') }}</label>
          <p>920304300123</p>
        </div>
        <div class="data-field">
          <label>{{ $t('profile.content.fields.birthday') }}</label>
          <p>04.03.1992</p>
        </div>
        <div class="data-field">
          <label>{{ $t('profile.content.fields.phone') }}</label>
          <p>+7 (701) 234-56-78</p>
        </div>
        <div class="data-field">
          <label>{{ $t('profile.content.fields.email') }}</label>
          <p>aidar@example.kz</p>
        </div>
        <div class="data-field">
          <label>{{ $t('profile.content.fields.city') }}</label>
          <p>Алматы</p>
        </div>
      </div>
      <button class="edit-btn">{{ $t('profile.content.edit_btn') }}</button>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.profile-container {
  display: flex;
  gap: 24px;
  padding: 24px;
  background-color: #f4f6f9;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  min-height: 100vh;
  box-sizing: border-box;
}

.sidebar {
  width: 280px;
  flex-shrink: 0;
  background: #ffffff;
  border-radius: 16px;
  padding: 24px 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  height: fit-content;
}

.user-avatar-block {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  padding: 0 8px;
}

.avatar-circle {
  width: 48px;
  height: 48px;
  background-color: #0b2265;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  flex-shrink: 0;
}

.user-meta {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.user-name {
  font-size: 16px;
  font-weight: 700;
  color: #0c1a30;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-id {
  font-size: 12px;
  color: #8a94a6;
  margin-top: 2px;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.menu-item {
  display: block;
  padding: 12px 16px;
  color: #5c687e;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.menu-item:hover {
  background-color: #f4f6f9;
}

.menu-item.active {
  background-color: #0b2265;
  color: #ffffff;
  font-weight: 600;
}

.divider {
  border: none;
  border-top: 1px solid #eef0f4;
  margin: 16px 0;
}

.menu-item.logout-btn {
  color: #ff3b30;
}

.menu-item.logout-btn:hover {
  background-color: #fff1f0;
}

.main-content {
  flex: 1;
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #0c1a30;
  margin: 0 0 32px 0;
}

.data-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 40px;
  margin-bottom: 40px;
}

.data-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.data-field label {
  font-size: 11px;
  font-weight: 600;
  color: #8a94a6;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.data-field p {
  font-size: 15px;
  font-weight: 500;
  color: #0c1a30;
  margin: 0;
  word-break: break-word;
}

.edit-btn {
  background-color: #0b2265;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 14px 28px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: fit-content;
}

.edit-btn:hover {
  background-color: #071643;
}

@media (max-width: 992px) {
  .profile-container {
    gap: 20px;
    padding: 20px;
  }

  .main-content {
    padding: 24px;
  }

  .data-grid {
    gap: 20px 24px;
  }
}

@media (max-width: 768px) {
  .profile-container {
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }

  .sidebar {
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
  }

  .menu {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 8px;
    gap: 8px;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }

  .menu::-webkit-scrollbar {
    display: none;
  }

  .menu-item {
    padding: 8px 16px;
    flex-shrink: 0;
    border: 1px solid #eef0f4;
  }

  .menu-item.active {
    border-color: #0b2265;
  }

  .divider {
    display: none;
  }

  .menu-item.logout-btn {
    border-color: #fff1f0;
    background-color: #fff1f0;
  }

  .main-content {
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
  }

  .section-title {
    font-size: 22px;
    margin-bottom: 24px;
  }

  .data-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 32px;
  }

  .edit-btn {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .profile-container {
    padding: 12px;
    gap: 12px;
  }

  .main-content {
    padding: 16px;
  }

  .user-avatar-block {
    margin-bottom: 16px;
  }
}
</style>
