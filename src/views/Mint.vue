<template>
  <section class="mint-container">
    <!-- Заголовок -->
    <div class="header">
      <h1 class="neon-title">🔥 Создай свой меч</h1>
      <p class="subtitle">
        Закали легендарный клинок и запечатай его в блокчейне как NFT.
      </p>
    </div>

    <!-- Форма минта -->
    <div class="mint-wrapper">
      <div class="mint-card">
        <!-- Светящийся круг -->
        <div class="circle-glow"></div>

        <form @submit.prevent="mintSword">
          <div class="form-group">
            <label>Название меча</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Введите название"
              class="input-neon"
              required
            />
          </div>

          <div class="form-group">
            <label>Редкость</label>
            <select v-model="form.rarity" class="input-neon">
              <option>Обычный</option>
              <option>Редкий</option>
              <option>Эпический</option>
              <option>Легендарный</option>
            </select>
          </div>

          <div class="form-group">
            <label>Изображение</label>
            <input
              type="file"
              @change="handleFileUpload"
              class="input-neon"
              accept="image/*"
            />
          </div>

          <button type="submit" class="btn-neon">⚔ Закалить меч</button>
        </form>
      </div>
    </div>

    <!-- Частицы -->
    <div class="particles">
      <div v-for="n in 40" :key="n" class="particle"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Mint',
  data() {
    return {
      form: {
        name: '',
        rarity: 'Обычный',
        image: null,
      },
    };
  },
  methods: {
    handleFileUpload(event) {
      this.form.image = event.target.files[0];
    },
    mintSword() {
      alert(
        `Меч "${this.form.name}" (${this.form.rarity}) успешно закален как NFT!`
      );
      // Здесь можно добавить вызов смарт-контракта Solana (Anchor или Metaplex SDK)
    },
  },
};
</script>

<style scoped>
/* Контейнер */
.mint-container {
  position: relative;
  min-height: 100vh;
  background: #000;
  color: #fff;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

/* Заголовок */
.header {
  text-align: center;
  margin-bottom: 2rem;
}
.neon-title {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  color: #00f7ff;
  text-shadow: 0 0 10px #00f7ff, 0 0 30px #00f7ff, 0 0 60px #ff00e6;
  animation: flicker 2s infinite alternate;
}
.subtitle {
  font-size: 1.2rem;
  color: #cbd5e1;
  animation: fadeIn 2s ease-in-out;
}

/* Форма минта */
.mint-wrapper {
  width: 100%;
  max-width: 500px;
  z-index: 10;
}
.mint-card {
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid #00f7ff;
  border-radius: 2rem;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(15px);
  box-shadow: 0 0 20px rgba(0, 247, 255, 0.3);
  animation: fadeInUp 1.5s ease-in-out;
  position: relative;
}

/* Светящийся круг */
.circle-glow {
  width: 140px;
  height: 140px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  background: radial-gradient(circle, #00f7ff, transparent 70%);
  box-shadow: 0 0 40px #00f7ff, 0 0 80px #00f7ff;
  animation: pulse 3s infinite ease-in-out;
}

/* Группы формы */
.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #00f7ff;
}
.input-neon {
  width: 100%;
  padding: 0.6rem 1rem;
  border-radius: 0.75rem;
  border: 2px solid #00f7ff;
  background: transparent;
  color: #fff;
  box-shadow: 0 0 10px #00f7ff inset;
  font-size: 1rem;
  transition: all 0.3s;
}
.input-neon:focus {
  outline: none;
  box-shadow: 0 0 20px #00f7ff inset;
}

/* Кнопка */
.btn-neon {
  width: 100%;
  padding: 0.8rem 0;
  border-radius: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
  background: #00f7ff;
  color: #000;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 15px #00f7ff, 0 0 30px #00f7ff, 0 0 60px #ff00e6;
  transition: all 0.3s;
}
.btn-neon:hover {
  transform: scale(1.1);
  box-shadow: 0 0 25px #00f7ff, 0 0 50px #00f7ff, 0 0 80px #ff00e6;
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
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #ff00e6;
  opacity: 0.6;
  animation: float 12s infinite linear;
}
.particle:nth-child(odd) {
  background: #00f7ff;
}

/* Анимации */
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
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}
@keyframes float {
  from {
    transform: translateY(110vh) translateX(0);
  }
  to {
    transform: translateY(-10vh) translateX(100px);
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
  .circle-glow {
    width: 120px;
    height: 120px;
  }
}
</style>
