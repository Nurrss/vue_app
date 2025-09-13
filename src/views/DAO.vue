<template>
  <section
    class="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white relative overflow-hidden"
  >
    <!-- Заголовок -->
    <div class="relative z-10 text-center py-12">
      <h1
        class="text-5xl md:text-6xl font-extrabold neon-text mb-4 animate-fade-in"
      >
        🏛 DAO Храм решений
      </h1>
      <p class="text-gray-400 max-w-2xl mx-auto animate-fade-in-delay">
        Здесь рождаются судьбы клинков. Голосуй за новые мечи, правила арены и
        развитие проекта.
      </p>
    </div>

    <!-- Список предложений -->
    <div class="relative z-10 container mx-auto px-6 grid gap-8 md:grid-cols-2">
      <div
        v-for="(proposal, index) in proposals"
        :key="index"
        class="proposal-card border border-cyan-400 rounded-2xl p-6 hover:scale-105 transition transform"
      >
        <h2 class="text-2xl font-bold text-cyan-300 mb-2">
          {{ proposal.title }}
        </h2>
        <p class="text-gray-300 mb-4">{{ proposal.description }}</p>

        <!-- Прогресс голосования -->
        <div class="mb-4">
          <div class="flex justify-between text-sm text-gray-400 mb-1">
            <span>✅ За: {{ proposal.votesYes }}</span>
            <span>❌ Против: {{ proposal.votesNo }}</span>
          </div>
          <div class="h-3 bg-gray-700 rounded-lg overflow-hidden">
            <div
              class="h-full progress-bar transition-all duration-700"
              :style="{ width: yesPercent(proposal) + '%' }"
            ></div>
          </div>
        </div>

        <!-- Кнопки -->
        <div class="flex gap-4">
          <button class="btn-neon flex-1" @click="voteYes(index)">✅ За</button>
          <button class="btn-red flex-1" @click="voteNo(index)">
            ❌ Против
          </button>
        </div>
      </div>
    </div>

    <!-- Фоновые частицы -->
    <div class="absolute inset-0 z-0">
      <div
        v-for="n in 60"
        :key="n"
        class="particle"
        :style="{
          left: `${Math.random() * 100}%`,
          animationDuration: `${10 + Math.random() * 10}s`,
          background: randomColor(),
        }"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DAO',
  data() {
    return {
      proposals: [
        {
          title: 'Добавить меч Зоро (One Piece)',
          description:
            'Предлагается включить в коллекцию легендарный клинок из мира One Piece.',
          votesYes: 120,
          votesNo: 30,
        },
        {
          title: 'Создать арену для турниров',
          description: 'Еженедельные PvP-сражения с NFT-наградами.',
          votesYes: 200,
          votesNo: 15,
        },
        {
          title: "Добавить редкость 'Божественный'",
          description: 'Новая категория сверхредких мечей.',
          votesYes: 90,
          votesNo: 40,
        },
      ],
    };
  },
  methods: {
    voteYes(index) {
      this.proposals[index].votesYes++;
    },
    voteNo(index) {
      this.proposals[index].votesNo++;
    },
    yesPercent(proposal) {
      const total = proposal.votesYes + proposal.votesNo;
      return total === 0 ? 0 : Math.round((proposal.votesYes / total) * 100);
    },
    randomColor() {
      const colors = ['#00f7ff', '#ff00ff', '#ff0077', '#00ffcc', '#ffe600'];
      return colors[Math.floor(Math.random() * colors.length)];
    },
  },
};
</script>

<style scoped>
/* Заголовки */
.neon-text {
  color: #fff;
  text-shadow: 0 0 10px #00f7ff, 0 0 30px #ff00ff, 0 0 60px #00f7ff;
  animation: flicker 3s infinite alternate;
}

/* Карточка предложения */
.proposal-card {
  background: rgba(0, 0, 0, 0.45);
  box-shadow: 0 0 25px rgba(0, 247, 255, 0.25);
  animation: fadeInUp 1.5s ease-in-out;
}

/* Прогресс-бар */
.progress-bar {
  background: linear-gradient(90deg, #00f7ff, #ff00e6, #00ffcc);
  background-size: 300% 300%;
  animation: gradientFlow 6s infinite linear;
}

/* Кнопки */
.btn-neon {
  @apply px-4 py-2 rounded-lg font-bold bg-cyan-500 text-black transition;
  box-shadow: 0 0 12px #00f7ff, 0 0 25px #00f7ff;
}
.btn-neon:hover {
  transform: scale(1.1);
}

.btn-red {
  @apply px-4 py-2 rounded-lg font-bold bg-red-500 text-black transition;
  box-shadow: 0 0 12px #ff004c, 0 0 25px #ff004c;
}
.btn-red:hover {
  transform: scale(1.1);
}

/* Частицы */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  animation: float linear infinite;
  opacity: 0.75;
}
@keyframes float {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(-10vh) translateX(200px);
  }
}

/* Эффекты */
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
@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
