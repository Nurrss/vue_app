<template>
  <section class="home-container">
    <!-- Фоновые неоновые мечи -->
    <div class="background-swords">
      <i class="fas fa-sword sword-icon" v-for="n in 3" :key="n"></i>
    </div>

    <!-- Центральный контент -->
    <div class="content-wrapper">
      <h1 class="neon-title">⚔ SwordVerse</h1>
      <p class="neon-subtitle">
        Коллекционируй легендарные мечи, участвуй в сражениях и стань частью
        децентрализованного клана!
      </p>
      <div class="buttons">
        <router-link to="/marketplace" class="btn btn-neon"
          >В коллекцию</router-link
        >
        <router-link to="/arena" class="btn btn-outline-neon"
          >На арену</router-link
        >
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
  name: 'Home',
};
</script>

<style scoped>
/* Основной контейнер */
.home-container {
  position: relative;
  min-height: 100vh;
  background: #000;
  color: #fff;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

/* Фоновые мечи */
.background-swords {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 0.05;
  z-index: 1;
}
.sword-icon {
  font-size: 20rem;
  color: #ff00e6;
  animation: pulse 4s infinite alternate;
}
@keyframes pulse {
  0% {
    transform: scale(0.9) rotate(0deg);
    opacity: 0.04;
  }
  50% {
    transform: scale(1) rotate(5deg);
    opacity: 0.07;
  }
  100% {
    transform: scale(0.9) rotate(-5deg);
    opacity: 0.04;
  }
}

/* Центральный контент */
.content-wrapper {
  position: relative;
  z-index: 10;
  max-width: 900px;
}
.neon-title {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: #00f7ff;
  text-shadow: 0 0 5px #00f7ff, 0 0 20px #00f7ff, 0 0 40px #ff00ff;
  animation: flicker 2s infinite alternate;
}
.neon-subtitle {
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 2rem;
  animation: fadeIn 2s ease-in-out;
}

/* Кнопки */
.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
.btn {
  padding: 0.8rem 2rem;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
}
.btn-neon {
  background: #00f7ff;
  color: #000;
  box-shadow: 0 0 10px #00f7ff, 0 0 20px #00f7ff, 0 0 40px #ff00ff;
}
.btn-neon:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px #00f7ff, 0 0 25px #00f7ff, 0 0 50px #ff00ff;
}
.btn-outline-neon {
  background: transparent;
  border: 2px solid #ff00e6;
  color: #ff00e6;
  box-shadow: 0 0 10px #ff00e6 inset;
}
.btn-outline-neon:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px #ff00e6, 0 0 25px #ff00e6 inset;
}

/* Частицы */
.particles {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
}
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #00f7ff;
  border-radius: 50%;
  opacity: 0.7;
  animation: float 8s infinite linear;
}
.particle:nth-child(odd) {
  background: #ff00e6;
}
@keyframes float {
  0% {
    transform: translateY(100vh) translateX(0);
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-10vh) translateX(50px);
    opacity: 0;
  }
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

/* Адаптив */
@media (max-width: 768px) {
  .neon-title {
    font-size: 2.8rem;
  }
  .neon-subtitle {
    font-size: 1rem;
  }
  .sword-icon {
    font-size: 12rem;
  }
}
</style>
