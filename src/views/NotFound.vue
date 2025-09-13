<template>
  <section
    class="min-h-screen bg-black flex flex-col items-center justify-center text-center relative overflow-hidden"
  >
    <!-- Глитч-404 -->
    <h1 class="glitch-text" data-text="404">404</h1>

    <!-- Подпись -->
    <p class="text-gray-400 text-lg md:text-xl mb-8 animate-fade-in">
      Похоже, вы открыли портал в несуществующую страницу...
    </p>

    <!-- Кнопка -->
    <router-link to="/" class="neon-button"> 🔮 Вернуться домой </router-link>

    <!-- Фоновые частицы -->
    <div class="absolute inset-0 z-0">
      <div v-for="n in 60" :key="n" class="particle"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
/* Глитч эффект */
.glitch-text {
  font-size: 8rem;
  font-weight: 900;
  color: #fff;
  position: relative;
  text-shadow: 0 0 15px #00f7ff, 0 0 30px #ff00ff;
  animation: flicker 2s infinite;
}
.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: #00f7ff;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: glitch 3s infinite linear alternate-reverse;
}
.glitch-text::after {
  color: #ff00ff;
  animation: glitch 2s infinite linear alternate-reverse;
}
@keyframes glitch {
  0% {
    clip: rect(20px, 9999px, 80px, 0);
    transform: translate(-5px, -5px);
  }
  20% {
    clip: rect(60px, 9999px, 120px, 0);
    transform: translate(5px, 5px);
  }
  40% {
    clip: rect(10px, 9999px, 100px, 0);
    transform: translate(-3px, 3px);
  }
  60% {
    clip: rect(40px, 9999px, 80px, 0);
    transform: translate(3px, -3px);
  }
  80% {
    clip: rect(70px, 9999px, 130px, 0);
    transform: translate(-5px, -1px);
  }
  100% {
    clip: rect(30px, 9999px, 90px, 0);
    transform: translate(1px, 1px);
  }
}
@keyframes flicker {
  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    opacity: 1;
  }
  20%,
  24%,
  55% {
    opacity: 0.5;
  }
}

/* Кнопка */
.neon-button {
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 0.8rem;
  background: transparent;
  border: 2px solid #00f7ff;
  color: #00f7ff;
  font-weight: bold;
  text-shadow: 0 0 8px #00f7ff;
  transition: all 0.3s ease;
  backdrop-filter: blur(6px);
}
.neon-button:hover {
  background: #00f7ff;
  color: black;
  box-shadow: 0 0 15px #00f7ff, 0 0 30px #00f7ff;
  transform: scale(1.05);
}

/* Анимация появления текста */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 1.5s ease forwards;
}

/* Частицы */
.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #00f7ff;
  border-radius: 50%;
  animation: float 12s infinite linear;
  opacity: 0.5;
}
@keyframes float {
  from {
    transform: translateY(110vh) translateX(0);
  }
  to {
    transform: translateY(-10vh) translateX(200px);
  }
}
</style>
