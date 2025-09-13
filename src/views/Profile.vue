<template>
  <section class="min-h-screen bg-black text-white relative overflow-hidden">
    <!-- Заголовок -->
    <div class="relative z-10 text-center py-12">
      <h1 class="text-5xl md:text-6xl font-extrabold neon-text mb-4">
        ⚔ Твой Профиль
      </h1>
      <p class="text-gray-400 max-w-2xl mx-auto animate-fade-in">
        Здесь хранится твоя коллекция мечей, боевые достижения и NFT-награды.
      </p>
    </div>

    <!-- Информация о пользователе -->
    <div class="relative z-10 container mx-auto px-6 grid gap-8 md:grid-cols-3">
      <div
        class="user-card col-span-1 p-6 rounded-2xl bg-opacity-10 border border-cyan-400 backdrop-blur-lg text-center"
      >
        <img
          src="https://api.dicebear.com/6.x/bottts/svg?seed=profile"
          alt="avatar"
          class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-cyan-400 shadow-lg"
        />
        <h2 class="text-2xl font-bold text-cyan-300 mb-2">0xA12...3F9C</h2>
        <p class="text-gray-400 mb-4">Коллекционер NFT мечей</p>
        <button class="btn-neon">🔗 Подключить кошелёк</button>
      </div>

      <!-- Статистика -->
      <div
        class="stats-card col-span-2 p-6 rounded-2xl bg-opacity-10 border border-purple-400 backdrop-blur-lg"
      >
        <h3 class="text-3xl font-bold text-purple-300 mb-6">📊 Статистика</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="stat-box">
            <span class="stat-value">12</span>
            <span class="stat-label">NFT мечей</span>
          </div>
          <div class="stat-box">
            <span class="stat-value">34</span>
            <span class="stat-label">Побед</span>
          </div>
          <div class="stat-box">
            <span class="stat-value">7</span>
            <span class="stat-label">Редкие клинки</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Коллекция мечей -->
    <div class="relative z-10 container mx-auto px-6 mt-16">
      <h2 class="text-4xl font-bold neon-text mb-8">🗡 Коллекция</h2>
      <div class="grid gap-8 md:grid-cols-3">
        <div
          v-for="(sword, index) in swords"
          :key="index"
          class="sword-card p-6 rounded-2xl bg-opacity-10 border border-cyan-400 backdrop-blur-lg hover:scale-105 transition transform"
        >
          <img
            :src="sword.image"
            :alt="sword.name"
            class="w-full h-48 object-contain mb-4 drop-shadow-lg"
          />
          <h3 class="text-xl font-bold text-cyan-300">{{ sword.name }}</h3>
          <p class="text-gray-400">Редкость: {{ sword.rarity }}</p>
        </div>
      </div>
    </div>

    <!-- Фоновые частицы -->
    <div class="absolute inset-0 z-0">
      <div v-for="n in 60" :key="n" class="particle"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      swords: [
        {
          name: 'Клинок Михаука',
          rarity: 'Легендарный',
          image: 'https://i.ibb.co/qymtgTy/sword1.png',
        },
        {
          name: 'Клинок Зоро',
          rarity: 'Редкий',
          image: 'https://i.ibb.co/cY12rTc/sword2.png',
        },
        {
          name: 'Клинок Гатс (Берсерк)',
          rarity: 'Мифический',
          image: 'https://i.ibb.co/9cpLpyD/sword3.png',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Неоновые эффекты */
.neon-text {
  color: #fff;
  text-shadow: 0 0 10px #00f7ff, 0 0 30px #00f7ff, 0 0 60px #00f7ff;
}

.user-card,
.stats-card,
.sword-card {
  box-shadow: 0 0 20px rgba(0, 247, 255, 0.2);
  animation: fadeInUp 1.5s ease-in-out;
}

/* Статистика */
.stat-box {
  text-align: center;
}
.stat-value {
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 10px #b400ff, 0 0 30px #b400ff;
}
.stat-label {
  font-size: 1rem;
  color: #bbb;
}

/* Кнопка */
.btn-neon {
  @apply px-4 py-2 rounded-lg font-bold bg-cyan-500 text-black transition;
  box-shadow: 0 0 10px #00f7ff, 0 0 20px #00f7ff;
}
.btn-neon:hover {
  transform: scale(1.1);
}

/* Анимации */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Частицы */
.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #00f7ff;
  border-radius: 50%;
  animation: float 15s infinite linear;
  opacity: 0.6;
}
@keyframes float {
  from {
    transform: translateY(110vh) translateX(0);
  }
  to {
    transform: translateY(-10vh) translateX(150px);
  }
}
</style>
