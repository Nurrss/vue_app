<template>
  <section
    class="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white relative overflow-hidden"
  >
    <!-- Заголовок -->
    <div class="relative z-10 text-center py-16">
      <h1
        class="text-5xl md:text-6xl font-extrabold neon-glow mb-6 animate-fade-in"
      >
        ⚡ О проекте ImPass
      </h1>
      <p class="text-gray-400 max-w-2xl mx-auto text-lg animate-fade-in-delay">
        ImPass — это мир, где легендарные мечи из разных вселенных оживают в
        виде NFT на Solana. Каждый может владеть, коллекционировать и даже
        сражаться своими клинками на арене.
      </p>
    </div>

    <!-- Карточки особенностей -->
    <div
      class="relative z-10 container mx-auto px-6 grid gap-10 md:grid-cols-3 mt-12"
    >
      <div
        class="feature-card border border-cyan-400 p-8 rounded-2xl backdrop-blur-lg text-center"
      >
        <h2 class="text-2xl font-bold text-cyan-300 mb-4">🌌 Коллекция</h2>
        <p class="text-gray-300">
          Легендарные мечи из аниме, игр и мифов. Каждый клинок уникален и
          хранит свою историю.
        </p>
      </div>
      <div
        class="feature-card border border-purple-400 p-8 rounded-2xl backdrop-blur-lg text-center"
      >
        <h2 class="text-2xl font-bold text-purple-300 mb-4">⚔ Арена</h2>
        <p class="text-gray-300">
          Система PvP-баттлов. Сражайся с другими коллекционерами и получай
          награды.
        </p>
      </div>
      <div
        class="feature-card border border-pink-400 p-8 rounded-2xl backdrop-blur-lg text-center"
      >
        <h2 class="text-2xl font-bold text-pink-300 mb-4">🏛 DAO</h2>
        <p class="text-gray-300">
          Будущее проекта решает сообщество. Голосуй за новые клинки, механики и
          турниры.
        </p>
      </div>
    </div>

    <!-- История -->
    <div class="relative z-10 container mx-auto px-6 mt-20 text-center">
      <h2 class="text-4xl font-bold neon-glow mb-6">📖 Легенда</h2>
      <p
        class="text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in"
      >
        В древние времена клинки были утеряны в разных мирах. Сегодня, благодаря
        силе блокчейна Solana, мы собираем их воедино. Эти мечи — не просто
        пиксели, они частицы историй, которые принадлежат тебе.
      </p>
    </div>

    <!-- Фоновые частицы -->
    <div class="absolute inset-0 z-0">
      <div
        v-for="n in 100"
        :key="n"
        class="particle"
        :style="{
          left: `${Math.random() * 100}%`,
          animationDuration: `${10 + Math.random() * 20}s`,
          background: randomColor(),
        }"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  methods: {
    randomColor() {
      const colors = ['#00f7ff', '#ff00ff', '#ff0077', '#00ffcc'];
      return colors[Math.floor(Math.random() * colors.length)];
    },
  },
};
</script>

<style scoped>
/* Неоновый текст */
.neon-glow {
  text-shadow: 0 0 8px #00f7ff, 0 0 20px #ff00ff, 0 0 40px #00f7ff;
  animation: flicker 3s infinite alternate;
}

/* Мерцание */
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

/* Карточки */
.feature-card {
  background: rgba(0, 0, 0, 0.45);
  box-shadow: 0 0 25px rgba(0, 247, 255, 0.25);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.feature-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 0 40px rgba(255, 0, 200, 0.7);
}

/* Анимации */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
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
    transform: translateY(-10vh);
  }
}
</style>
