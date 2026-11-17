<template>
  <div class="chat-wrapper" v-click-outside="closeChat">
    <button
      class="chat-trigger-btn"
      :class="{ hidden: isOpen && isMobile }"
      @click.stop="toggleChat"
    >
      <span v-if="!isOpen" class="icon-chat">{{ $t('chat.trigger.open') }}</span>
      <span v-else class="icon-close">{{ $t('chat.trigger.close') }}</span>
    </button>

    <div v-if="isOpen" class="chat-window" @click.stop>
      <div class="chat-header">
        <div class="header-info">
          <div class="avatar">Э</div>
          <div class="title-block">
            <h3>{{ $t('chat.header.title') }}</h3>
            <span class="status">
              <span class="status-dot" :class="{ typing: isTyping }"></span>
              {{ isTyping ? $t('chat.header.status_typing') : $t('chat.header.status_online') }}
            </span>
          </div>
        </div>
        <button class="close-btn" @click.stop="closeChat">✕</button>
      </div>

      <div class="chat-body" ref="chatBodyRef">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          class="message-bubble"
          :class="msg.sender === 'bot' ? 'bot-message' : 'user-message'"
        >
          <p>{{ msg.key ? $t(msg.key) : msg.text }}</p>
          <span class="message-time">{{ msg.time }}</span>
        </div>

        <div v-if="showHints && !isTyping" class="hints-container">
          <button class="hint-btn" @click.stop="sendHint('chat.hints.installation')">
            {{ $t('chat.hints.installation') }}
          </button>
          <button class="hint-btn" @click.stop="sendHint('chat.hints.nearest_center')">
            {{ $t('chat.hints.nearest_center') }}
          </button>
          <button class="hint-btn" @click.stop="sendHint('chat.hints.cost')">
            {{ $t('chat.hints.cost') }}
          </button>
        </div>
      </div>

      <div class="chat-footer">
        <input
          type="text"
          v-model="userInput"
          @keydown.enter.stop="sendMessage"
          :placeholder="$t('chat.placeholders.input')"
          class="chat-input"
        />
        <button class="send-btn" @click.stop="sendMessage" :disabled="!userInput.trim()">
          <svg viewBox="0 0 24 24" class="send-icon">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Message {
  text?: string // Для кастомного ввода пользователя
  key?: string // Для динамического i18n перевода системных сообщений
  sender: 'bot' | 'user'
  time: string
}

const isOpen = ref(false)
const userInput = ref('')
const isTyping = ref(false)
const showHints = ref(true)
const isMobile = ref(false)
const chatBodyRef = ref<HTMLElement | null>(null)

const messages = ref<Message[]>([
  {
    key: 'chat.responses.welcome',
    sender: 'bot',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
])

const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 576
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

const toggleChat = () => {
  isOpen.value = !isOpen.value
}

const closeChat = () => {
  isOpen.value = false
}

const getCurrentTime = (): string => {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const scrollToBottom = async () => {
  await nextTick()
  if (chatBodyRef.value) {
    chatBodyRef.value.scrollTop = chatBodyRef.value.scrollHeight
  }
}

const sendMessage = async () => {
  const text = userInput.value.trim()
  if (!text) return

  showHints.value = false

  messages.value.push({
    text,
    sender: 'user',
    time: getCurrentTime(),
  })

  userInput.value = ''
  scrollToBottom()

  await simulateBotResponse(text, false)
}

const sendHint = async (hintKey: string) => {
  showHints.value = false

  messages.value.push({
    key: hintKey,
    sender: 'user',
    time: getCurrentTime(),
  })
  scrollToBottom()

  await simulateBotResponse(t(hintKey), true, hintKey)
}

const simulateBotResponse = async (userText: string, isFromHint: boolean, hintKey?: string) => {
  isTyping.value = true

  await new Promise((resolve) => setTimeout(resolve, 1500))

  let botResponseKey = 'chat.responses.fallback'
  const lowerText = userText.toLowerCase()

  if (isFromHint && hintKey) {
    if (hintKey === 'chat.hints.installation') {
      botResponseKey = 'chat.responses.installation'
    } else if (hintKey === 'chat.hints.nearest_center') {
      botResponseKey = 'chat.responses.nearest_center'
    } else if (hintKey === 'chat.hints.cost') {
      botResponseKey = 'chat.responses.cost'
    }
  } else {
    if (
      lowerText.includes('установить') ||
      lowerText.includes('установка') ||
      lowerText.includes('у(с)вэос') ||
      lowerText.includes('орнату') ||
      lowerText.includes('орнатқызу') ||
      lowerText.includes('install') ||
      lowerText.includes('setup')
    ) {
      botResponseKey = 'chat.responses.installation'
    } else if (
      lowerText.includes('центр') ||
      lowerText.includes('где') ||
      lowerText.includes('адрес') ||
      lowerText.includes('орталық') ||
      lowerText.includes('қайда') ||
      lowerText.includes('мекенжай') ||
      lowerText.includes('center') ||
      lowerText.includes('where') ||
      lowerText.includes('address')
    ) {
      botResponseKey = 'chat.responses.nearest_center'
    } else if (
      lowerText.includes('стоимость') ||
      lowerText.includes('стоит') ||
      lowerText.includes('цена') ||
      lowerText.includes('обслуживание') ||
      lowerText.includes('құны') ||
      lowerText.includes('бағасы') ||
      lowerText.includes('қанша') ||
      lowerText.includes('cost') ||
      lowerText.includes('price') ||
      lowerText.includes('fee')
    ) {
      botResponseKey = 'chat.responses.cost'
    }
  }

  messages.value.push({
    key: botResponseKey,
    sender: 'bot',
    time: getCurrentTime(),
  })

  isTyping.value = false

  if (isFromHint) {
    showHints.value = true
  }

  scrollToBottom()
}

watch(isOpen, (newVal) => {
  if (newVal) {
    scrollToBottom()
  }
})

const vClickOutside = {
  mounted(el: any, binding: any) {
    el.clickOutsideEvent = (event: Event) => {
      if (
        !(el === event.target || el.contains(event.target) || el.contains(document.activeElement))
      ) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: any) {
    document.removeEventListener('click', el.clickOutsideEvent)
  },
}
</script>

<style scoped>
.chat-wrapper {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 2000;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    sans-serif;
}

.chat-trigger-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ee362f;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(238, 54, 47, 0.3);
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

.chat-trigger-btn:hover {
  transform: scale(1.05);
  background-color: #d62e28;
}

.chat-trigger-btn.hidden {
  display: none;
}

.chat-window {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 400px;
  height: 600px;
  max-height: calc(100vh - 120px);
  background-color: #f7fafc;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(2, 13, 52, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(2, 13, 52, 0.08);
}

.chat-header {
  background-color: #0c2356;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  flex-shrink: 0;
}

.header-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: #ee362f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
}

.title-block h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 2px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: #00e676;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.status-dot.typing {
  background-color: #ffb300;
  animation: pulse 1s infinite alternate;
}

@keyframes pulse {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

.close-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
  transition: color 0.2s;
}

.close-btn:hover {
  color: white;
}

.chat-body {
  flex: 1;
  padding: 24px 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scroll-behavior: smooth;
}

.message-bubble {
  max-width: 85%;
  padding: 14px 16px;
  border-radius: 14px;
  font-size: 14px;
  line-height: 1.4;
  position: relative;
  word-break: break-word;
}

.bot-message {
  background-color: #e8f0fe;
  color: #0c2356;
  align-self: flex-start;
  border-top-left-radius: 2px;
}

.user-message {
  background-color: #ee362f;
  color: white;
  align-self: flex-end;
  border-top-right-radius: 2px;
}

.user-message .message-time {
  color: rgba(255, 255, 255, 0.7);
}

.message-time {
  display: block;
  font-size: 11px;
  color: rgba(12, 35, 86, 0.5);
  margin-top: 6px;
  text-align: right;
}

.hints-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 8px;
}

.hint-btn {
  background-color: #e8f0fe;
  color: #0c2356;
  border: none;
  padding: 12px 18px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition:
    background-color 0.2s,
    transform 0.1s;
}

.hint-btn:hover {
  background-color: #d2e3fc;
}

.hint-btn:active {
  transform: scale(0.98);
}

.chat-footer {
  background-color: white;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px solid rgba(2, 13, 52, 0.06);
  flex-shrink: 0;
}

.chat-input {
  flex: 1;
  border: none;
  background-color: #e8f0fe;
  padding: 14px 20px;
  border-radius: 24px;
  font-size: 14px;
  color: #0c2356;
  outline: none;
}

.chat-input::placeholder {
  color: rgba(12, 35, 86, 0.4);
}

.send-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #ee362f;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background-color 0.2s,
    opacity 0.2s;
  flex-shrink: 0;
}

.send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.send-btn:not(:disabled):hover {
  background-color: #d62e28;
}

.send-icon {
  width: 18px;
  height: 18px;
  fill: white;
}

@media (max-width: 576px) {
  .chat-wrapper {
    bottom: 16px;
    right: 16px;
  }

  .chat-window {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    border-radius: 0;
    border: none;
  }
}

@media (min-width: 1200px) {
  .chat-wrapper {
    bottom: 32px;
    right: 32px;
  }

  .chat-trigger-btn {
    width: 68px;
    height: 68px;
    font-size: 28px;
  }

  .chat-window {
    bottom: 88px;
    width: 460px;
    height: 680px;
    max-height: calc(100vh - 140px);
    border-radius: 20px;
  }

  .chat-header {
    padding: 20px 24px;
  }

  .avatar {
    width: 46px;
    height: 46px;
    font-size: 20px;
  }

  .title-block h3 {
    font-size: 18px;
  }

  .status {
    font-size: 13px;
  }

  .chat-body {
    padding: 28px 24px;
    gap: 20px;
  }

  .message-bubble {
    font-size: 15px;
    padding: 16px 18px;
  }

  .hint-btn {
    font-size: 15px;
    padding: 14px 20px;
  }

  .chat-footer {
    padding: 20px 24px;
    gap: 16px;
  }

  .chat-input {
    font-size: 15px;
    padding: 16px 24px;
  }

  .send-btn {
    width: 48px;
    height: 48px;
  }

  .send-icon {
    width: 20px;
    height: 20px;
  }
}

@media (min-width: 1920px) {
  .chat-window {
    width: 520px;
    height: 760px;
    max-height: calc(100vh - 160px);
  }

  .message-bubble {
    max-width: 80%;
  }
}
</style>
