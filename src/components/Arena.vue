<template>
  <div class="arena-container">
    <h1 class="arena-title">⚔️ Арена Мечей ⚔️</h1>
    <p class="arena-subtitle">Выберите два меча и начните бой!</p>

    <!-- Выбор мечей -->
    <div class="sword-select">
      <div class="sword-slot" @click="pickSword(1)">
        <div v-if="sword1" class="sword-card">
          <img :src="sword1.image" alt="Sword 1" />
          <p>{{ sword1.name }}</p>
        </div>
        <div v-else class="empty-slot">Выберите меч 1</div>
      </div>

      <div class="vs">VS</div>

      <div class="sword-slot" @click="pickSword(2)">
        <div v-if="sword2" class="sword-card">
          <img :src="sword2.image" alt="Sword 2" />
          <p>{{ sword2.name }}</p>
        </div>
        <div v-else class="empty-slot">Выберите меч 2</div>
      </div>
    </div>

    <!-- Кнопка боя -->
    <div class="fight-controls">
      <button
        class="btn fight-btn"
        :disabled="!sword1 || !sword2"
        @click="fight"
      >
        ⚡ Сразиться
      </button>
    </div>

    <!-- Результат боя -->
    <div v-if="winner" class="result">
      <h2>🏆 Победитель: {{ winner.name }}</h2>
      <img :src="winner.image" alt="Winner Sword" class="winner-img" />
      <p class="reward">💎 Награда: +{{ reward }} токенов</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Arena',
  data() {
    return {
      sword1: null,
      sword2: null,
      winner: null,
      reward: 0,
    };
  },
  methods: {
    pickSword(slot) {
      // Пока имитация выбора меча (заменим на API/блокчейн)
      const swords = [
        { name: 'Меч Зоро', image: '/swords/zoro.png', power: 75 },
        { name: 'Клинок Ренгоку', image: '/swords/rengoku.png', power: 90 },
        { name: 'Тёмный Клинок', image: '/swords/berserk.png', power: 85 },
      ];
      const randomSword = swords[Math.floor(Math.random() * swords.length)];
      if (slot === 1) this.sword1 = randomSword;
      if (slot === 2) this.sword2 = randomSword;
    },
    fight() {
      if (!this.sword1 || !this.sword2) return;

      // Определяем победителя по power (псевдо-логика)
      const winner =
        this.sword1.power > this.sword2.power ? this.sword1 : this.sword2;

      this.winner = winner;
      this.reward = Math.floor(Math.random() * 50) + 10; // токены за бой
    },
  },
};
</script>

<style scoped>
.arena-container {
  text-align: center;
  padding: 40px;
  color: #f8f9fa;
  animation: fadeIn 1s ease;
}

.arena-title {
  font-size: 2.5rem;
  text-shadow: 0 0 10px #9333ea;
}
.arena-subtitle {
  font-size: 1.2rem;
  color: #cbd5e1;
  margin-bottom: 30px;
}

/* Выбор мечей */
.sword-select {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 30px;
}
.sword-slot {
  width: 180px;
  height: 220px;
  border: 2px dashed #6f42c1;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(26, 31, 53, 0.7);
  cursor: pointer;
  transition: 0.3s ease;
}
.sword-slot:hover {
  background: rgba(111, 66, 193, 0.3);
  transform: scale(1.05);
}
.empty-slot {
  color: #94a3b8;
  font-size: 1rem;
  font-weight: bold;
}
.sword-card {
  text-align: center;
}
.sword-card img {
  max-width: 120px;
  margin-bottom: 10px;
}
.vs {
  font-size: 2rem;
  font-weight: bold;
  color: #a855f7;
  text-shadow: 0 0 10px #a855f7;
}

/* Кнопка боя */
.fight-controls {
  margin-bottom: 30px;
}
.fight-btn {
  background: linear-gradient(135deg, #6f42c1, #a855f7);
  color: white;
  font-size: 1.2rem;
  padding: 12px 25px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}
.fight-btn:hover:enabled {
  background: linear-gradient(135deg, #9333ea, #c084fc);
  box-shadow: 0 0 20px rgba(192, 132, 252, 0.9);
  transform: scale(1.1);
}
.fight-btn:disabled {
  background: #4b5563;
  cursor: not-allowed;
}

/* Результат */
.result {
  margin-top: 30px;
  animation: fadeIn 0.8s ease;
}
.winner-img {
  max-width: 160px;
  margin: 15px 0;
}
.reward {
  font-size: 1.2rem;
  color: #22c55e;
  text-shadow: 0 0 8px #22c55e;
}

/* Анимация */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
