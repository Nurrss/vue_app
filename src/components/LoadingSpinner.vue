<template>
  <div class="spinner-overlay" v-if="visible">
    <div class="spinner"></div>
    <p class="loading-text">Загрузка...</p>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
/* Оверлей */
.spinner-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

/* Спиннер */
.spinner {
  width: 80px;
  height: 80px;
  border: 6px solid rgba(0, 247, 255, 0.3);
  border-top: 6px solid #00f7ff;
  border-radius: 50%;
  animation: spin 1.2s linear infinite,
    neonGlow 2s ease-in-out infinite alternate;
  box-shadow: 0 0 20px #00f7ff;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes neonGlow {
  0% {
    box-shadow: 0 0 10px #00f7ff, 0 0 20px #ff00ff;
  }
  100% {
    box-shadow: 0 0 20px #00f7ff, 0 0 40px #ff00ff;
  }
}

/* Текст */
.loading-text {
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #00f7ff;
  text-shadow: 0 0 8px #00f7ff, 0 0 15px #ff00ff;
  animation: flicker 2s infinite alternate;
}

@keyframes flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    opacity: 1;
  }
  20%,
  24%,
  55% {
    opacity: 0.6;
  }
}
</style>
