<template>
  <transition name="slide-fade">
    <div v-if="visible" :class="['notification', type]">
      <p>{{ message }}</p>
      <button class="close-btn" @click="$emit('close')">✖</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    visible: { type: Boolean, default: false },
    message: { type: String, default: '' },
    type: { type: String, default: 'info' }, // success, error, info
  },
};
</script>

<style scoped>
/* Общий стиль */
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  min-width: 250px;
  max-width: 320px;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  font-weight: bold;
  color: #fff;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 0 6px #000;
  box-shadow: 0 0 15px rgba(0, 247, 255, 0.5);
  animation: glowPulse 2s infinite alternate;
  backdrop-filter: blur(6px);
}

/* Типы */
.notification.success {
  background: rgba(0, 255, 128, 0.2);
  border: 2px solid #00ff80;
  box-shadow: 0 0 15px #00ff80;
}
.notification.error {
  background: rgba(255, 0, 64, 0.2);
  border: 2px solid #ff0040;
  box-shadow: 0 0 15px #ff0040;
}
.notification.info {
  background: rgba(0, 247, 255, 0.2);
  border: 2px solid #00f7ff;
  box-shadow: 0 0 15px #00f7ff;
}

/* Кнопка закрытия */
.close-btn {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 1rem;
  transition: transform 0.2s ease, color 0.3s ease;
}
.close-btn:hover {
  transform: scale(1.2);
  color: #ff00ff;
}

/* Анимация появления */
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

/* Неоновое мерцание */
@keyframes glowPulse {
  from {
    box-shadow: 0 0 10px #00f7ff, 0 0 20px #ff00ff;
  }
  to {
    box-shadow: 0 0 20px #00f7ff, 0 0 40px #ff00ff;
  }
}
</style>
