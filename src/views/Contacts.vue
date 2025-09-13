<template>
  <section
    class="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white relative overflow-hidden flex flex-col items-center justify-center"
  >
    <!-- Заголовок -->
    <div class="relative z-10 text-center mb-12">
      <h1
        class="text-5xl md:text-6xl font-extrabold neon-text mb-4 animate-fade-in"
      >
        📡 Контакты
      </h1>
      <p class="text-gray-400 max-w-xl mx-auto animate-fade-in-delay">
        Свяжись с нашей командой. Мы всегда открыты для идей, партнёрств и
        общения с сообществом.
      </p>
    </div>

    <!-- Соцсети -->
    <div class="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <a
        href="https://t.me/yourproject"
        target="_blank"
        class="contact-card border-cyan-400"
      >
        <span class="icon">💬</span>
        <h2 class="contact-title">Telegram</h2>
        <p class="contact-sub">Чат сообщества</p>
      </a>

      <a
        href="https://discord.gg/yourproject"
        target="_blank"
        class="contact-card border-purple-400"
      >
        <span class="icon">🎧</span>
        <h2 class="contact-title">Discord</h2>
        <p class="contact-sub">Голосовые каналы и анонсы</p>
      </a>

      <a
        href="https://github.com/yourproject"
        target="_blank"
        class="contact-card border-pink-400"
      >
        <span class="icon">💻</span>
        <h2 class="contact-title">GitHub</h2>
        <p class="contact-sub">Код проекта</p>
      </a>

      <a
        href="mailto:team@yourproject.com"
        class="contact-card border-green-400"
      >
        <span class="icon">✉️</span>
        <h2 class="contact-title">Email</h2>
        <p class="contact-sub">team@yourproject.com</p>
      </a>
    </div>

    <!-- Фоновые частицы -->
    <div class="absolute inset-0 z-0">
      <div
        v-for="n in 80"
        :key="n"
        class="particle"
        :style="{
          left: `${Math.random() * 100}%`,
          animationDuration: `${10 + Math.random() * 15}s`,
          background: randomColor(),
        }"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contacts',
  methods: {
    randomColor() {
      const colors = ['#00f7ff', '#ff00ff', '#ff0077', '#00ffcc', '#ffe600'];
      return colors[Math.floor(Math.random() * colors.length)];
    },
  },
};
</script>

<style scoped>
/* Неоновые заголовки */
.neon-text {
  color: #fff;
  text-shadow: 0 0 10px #00f7ff, 0 0 30px #ff00ff, 0 0 60px #00f7ff;
  animation: flicker 3s infinite alternate;
}

/* Карточки контактов */
.contact-card {
  background: rgba(0, 0, 0, 0.45);
  border-width: 2px;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  backdrop-filter: blur(10px);
  color: white;
  box-shadow: 0 0 20px rgba(0, 247, 255, 0.15);
  animation: pulse 4s infinite;
}
.contact-card:hover {
  transform: translateY(-12px) scale(1.07);
  box-shadow: 0 0 35px rgba(255, 0, 200, 0.6);
}

/* Текст */
.contact-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  text-shadow: 0 0 10px #fff;
}
.contact-sub {
  font-size: 0.9rem;
  color: #aaa;
  margin-top: 0.3rem;
}

/* Иконки */
.icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 15px #00f7ff;
  transition: transform 0.3s ease;
}
.contact-card:hover .icon {
  transform: scale(1.2) rotate(5deg);
  text-shadow: 0 0 25px #ff00ff;
}

/* Анимации появления */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 1.5s ease forwards;
}
.animate-fade-in-delay {
  animation: fadeIn 2s ease forwards;
  opacity: 0;
}

/* Частицы */
.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  animation: float linear infinite;
  opacity: 0.7;
}
@keyframes float {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(-10vh) translateX(200px);
  }
}

/* Пульсация карточек */
@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 15px rgba(0, 247, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 0, 200, 0.6);
  }
}

/* Эффект неона (мерцание заголовка) */
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
    opacity: 0.6;
  }
}
</style>
