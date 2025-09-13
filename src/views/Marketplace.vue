<template>
  <section class="marketplace-container">
    <!-- Заголовок -->
    <div class="header">
      <h1 class="neon-title">🛒 Marketplace Мечей</h1>
      <p class="subtitle">
        Выбирай, коллекционируй и властвуй. Каждый меч — уникальный
        NFT-артефакт.
      </p>
    </div>

    <!-- Сетка мечей -->
    <div class="swords-grid">
      <div v-for="(sword, index) in swords" :key="index" class="sword-card">
        <div class="sword-img-wrapper">
          <img :src="sword.image" :alt="sword.name" class="sword-img" />
        </div>
        <div class="sword-info">
          <h3 class="sword-name">{{ sword.name }}</h3>
          <p class="sword-rarity">
            Редкость: <span>{{ sword.rarity }}</span>
          </p>
          <button class="btn-neon">Купить ⚡</button>
        </div>
      </div>
    </div>

    <!-- Анимированные частицы -->
    <div class="particles">
      <div v-for="n in 40" :key="n" class="particle"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Marketplace',
  data() {
    return {
      swords: [
        {
          name: 'Клинок Хаоса',
          rarity: 'Легендарный',
          image: 'https://i.ibb.co/bsncmD5/sword1.png',
        },
        {
          name: 'Тень Самурая',
          rarity: 'Эпический',
          image: 'https://i.ibb.co/fvyygXL/sword2.png',
        },
        {
          name: 'Коса Бездны',
          rarity: 'Редкий',
          image: 'https://i.ibb.co/gjMwR7Y/sword3.png',
        },
        {
          name: 'Огненный Клык',
          rarity: 'Уникальный',
          image: 'https://i.ibb.co/tcr7k4Q/sword4.png',
        },
      ],
    };
  },
};
</script>

<style scoped>
.marketplace-container {
  position: relative;
  min-height: 100vh;
  background: #000;
  color: #fff;
  padding: 4rem 2rem;
  overflow: hidden;
}

/* Заголовок */
.header {
  text-align: center;
  margin-bottom: 3rem;
}
.neon-title {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  color: #00f7ff;
  text-shadow: 0 0 5px #00f7ff, 0 0 20px #00f7ff, 0 0 40px #ff00e6;
  animation: flicker 2s infinite alternate;
}
.subtitle {
  font-size: 1.2rem;
  color: #cbd5e1;
  animation: fadeIn 2s ease-in-out;
}

/* Сетка мечей */
.swords-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  z-index: 10;
  position: relative;
}

/* Карта меча */
.sword-card {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(0, 247, 255, 0.2);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  transition: transform 0.4s, box-shadow 0.4s;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.sword-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 0 20px #00f7ff, 0 0 40px #00f7ff;
}

.sword-img-wrapper {
  overflow: hidden;
}
.sword-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
}
.sword-card:hover .sword-img {
  transform: scale(1.1) rotate(-2deg);
}

.sword-info {
  padding: 1rem;
  text-align: center;
}
.sword-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #00f7ff;
  margin-bottom: 0.5rem;
}
.sword-rarity {
  font-size: 0.9rem;
  color: #cbd5e1;
  margin-bottom: 1rem;
}
.sword-rarity span {
  color: #ff00e6;
  font-weight: 600;
}

/* Кнопка */
.btn-neon {
  width: 100%;
  padding: 0.6rem 0;
  border-radius: 0.75rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  background: #00f7ff;
  color: #000;
  box-shadow: 0 0 10px #00f7ff, 0 0 20px #00f7ff, 0 0 40px #ff00e6;
  transition: all 0.3s ease;
}
.btn-neon:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #00f7ff, 0 0 40px #00f7ff, 0 0 60px #ff00e6;
}

/* Анимации текста */
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
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Частицы */
.particles {
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
}
.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #ff00e6;
  border-radius: 50%;
  opacity: 0.6;
  animation: float 10s infinite linear;
}
.particle:nth-child(odd) {
  background: #00f7ff;
}
@keyframes float {
  from {
    transform: translateY(110vh) translateX(0);
  }
  to {
    transform: translateY(-10vh) translateX(80px);
  }
}

/* Адаптив */
@media (max-width: 768px) {
  .neon-title {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1rem;
  }
  .sword-img {
    height: 180px;
  }
}
</style>
