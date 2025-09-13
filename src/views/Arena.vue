<template>
  <section
    class="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white relative overflow-hidden"
  >
    <!-- Заголовок -->
    <div class="relative z-10 text-center py-12">
      <h1 class="text-5xl md:text-6xl font-extrabold neon-glow mb-4">
        ⚔ Арена Сражений
      </h1>
      <p class="text-gray-400 max-w-2xl mx-auto animate-fade-in">
        Выбирай свой меч и вступай в бой. Победитель получит славу и награды!
      </p>
    </div>

    <!-- Арена -->
    <div class="relative z-10 flex flex-col items-center justify-center mt-12">
      <div class="arena-container">
        <!-- Левый меч -->
        <div class="sword-left animate-sword-left">
          <img src="https://i.ibb.co/bsncmD5/sword1.png" alt="sword-left" />
          <h3 class="text-cyan-400 mt-2">Твой меч</h3>
        </div>

        <!-- Центр: вспышка -->
        <div class="flash animate-flash"></div>

        <!-- Правый меч -->
        <div class="sword-right animate-sword-right">
          <img src="https://i.ibb.co/fvyygXL/sword2.png" alt="sword-right" />
          <h3 class="text-pink-400 mt-2">Соперник</h3>
        </div>
      </div>

      <!-- Кнопка сразиться -->
      <button class="btn-neon mt-12">⚡ Сразиться ⚡</button>
    </div>

    <!-- Частицы -->
    <div class="absolute inset-0 z-0">
      <div
        v-for="n in 70"
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
  name: 'Arena',
  methods: {
    randomColor() {
      const colors = ['#00f7ff', '#ff00ff', '#ff0077', '#00ffcc', '#ffe600'];
      return colors[Math.floor(Math.random() * colors.length)];
    },
  },
};
</script>

<style scoped>
/* Неон */
.neon-glow {
  color: #fff;
  text-shadow: 0 0 8px #00f7ff, 0 0 25px #ff00ff, 0 0 50px #00f7ff;
  animation: flicker 3s infinite alternate;
}

/* Контейнер арены */
.arena-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1000px;
  position: relative;
  background: radial-gradient(circle, rgba(0, 247, 255, 0.15), transparent);
  border-radius: 50%;
  padding: 40px;
}

/* Мечи */
.sword-left img,
.sword-right img {
  width: 220px;
  filter: drop-shadow(0 0 15px #00f7ff);
  transition: transform 0.3s;
}
.sword-left img:hover {
  transform: rotate(-5deg) scale(1.1);
}
.sword-right img:hover {
  transform: rotate(5deg) scale(1.1);
}

/* Вспышка в центре */
.flash {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff, transparent);
  box-shadow: 0 0 30px #ff00e6, 0 0 80px #ff00e6, 0 0 120px #ff00e6;
  opacity: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* Анимации движения мечей */
@keyframes swordLeft {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(120px) rotate(3deg);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes swordRight {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-120px) rotate(-3deg);
  }
  100% {
    transform: translateX(0);
  }
}
.animate-sword-left {
  animation: swordLeft 4s infinite ease-in-out;
}
.animate-sword-right {
  animation: swordRight 4s infinite ease-in-out;
}

/* Вспышка */
@keyframes flashPulse {
  0%,
  100% {
    opacity: 0;
    transform: scale(0.6);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}
.animate-flash {
  animation: flashPulse 4s infinite;
}

/* Кнопка */
.btn-neon {
  padding: 12px 30px;
  font-size: 1.3rem;
  font-weight: bold;
  border-radius: 12px;
  background: linear-gradient(90deg, #00f7ff, #ff00ff);
  color: #000;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 15px #00f7ff, 0 0 35px #ff00ff;
  animation: pulse 2s infinite;
}
.btn-neon:hover {
  transform: scale(1.1);
  box-shadow: 0 0 25px #00f7ff, 0 0 50px #ff00ff;
}
@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 15px #00f7ff, 0 0 35px #ff00ff;
  }
  50% {
    box-shadow: 0 0 25px #ff00ff, 0 0 60px #00f7ff;
  }
}

/* Частицы */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
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

/* Мерцание текста */
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
</style>
