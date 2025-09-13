<template>
  <div class="dao-container">
    <h1 class="dao-title">🏛 SwordDAO</h1>
    <p class="dao-subtitle">
      Коллективное управление вселенной мечей. Участвуйте в принятии решений!
    </p>

    <!-- Активные предложения -->
    <div class="proposals">
      <h2>📋 Активные предложения</h2>
      <div
        v-for="(proposal, index) in proposals"
        :key="index"
        class="proposal-card"
      >
        <h3>{{ proposal.title }}</h3>
        <p>{{ proposal.description }}</p>
        <div class="vote-buttons">
          <button class="btn yes-btn" @click="vote(index, 'yes')">
            ✅ За ({{ proposal.votes.yes }})
          </button>
          <button class="btn no-btn" @click="vote(index, 'no')">
            ❌ Против ({{ proposal.votes.no }})
          </button>
        </div>
      </div>
    </div>

    <!-- Создать предложение -->
    <div class="new-proposal">
      <h2>➕ Создать предложение</h2>
      <input
        v-model="newProposal.title"
        type="text"
        placeholder="Заголовок предложения"
        class="input"
      />
      <textarea
        v-model="newProposal.description"
        placeholder="Описание предложения"
        class="input"
      ></textarea>
      <button class="btn create-btn" @click="createProposal">
        🚀 Опубликовать
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dao',
  data() {
    return {
      proposals: [
        {
          title: 'Добавить меч Клинок Михаука',
          description: 'Предлагаю ввести NFT легендарного меча Йору.',
          votes: { yes: 12, no: 3 },
        },
        {
          title: 'Изменить награды на арене',
          description: 'Увеличить токены за победу с 50 до 100.',
          votes: { yes: 20, no: 5 },
        },
      ],
      newProposal: {
        title: '',
        description: '',
      },
    };
  },
  methods: {
    vote(index, type) {
      if (type === 'yes') this.proposals[index].votes.yes++;
      else this.proposals[index].votes.no++;
    },
    createProposal() {
      if (!this.newProposal.title || !this.newProposal.description) return;

      this.proposals.push({
        title: this.newProposal.title,
        description: this.newProposal.description,
        votes: { yes: 0, no: 0 },
      });

      this.newProposal.title = '';
      this.newProposal.description = '';
    },
  },
};
</script>

<style scoped>
.dao-container {
  padding: 40px;
  color: #f8f9fa;
  text-align: center;
  animation: fadeIn 1s ease;
}

.dao-title {
  font-size: 2.5rem;
  text-shadow: 0 0 12px #9333ea;
}
.dao-subtitle {
  font-size: 1.1rem;
  color: #cbd5e1;
  margin-bottom: 40px;
}

/* Предложения */
.proposals {
  margin-bottom: 40px;
}
.proposal-card {
  background: linear-gradient(160deg, #0a0f1e, #1a1f35);
  border: 2px solid #6f42c1;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: left;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
}
.proposal-card h3 {
  color: #a855f7;
  margin-bottom: 10px;
}
.proposal-card p {
  color: #cbd5e1;
  margin-bottom: 15px;
}
.vote-buttons {
  display: flex;
  gap: 15px;
}
.yes-btn {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
}
.no-btn {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
}
.yes-btn:hover,
.no-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
}

/* Новое предложение */
.new-proposal {
  background: linear-gradient(160deg, #1a1f35, #2a2f45);
  border: 2px dashed #a855f7;
  border-radius: 16px;
  padding: 30px;
}
.input {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 12px;
  border: 1px solid #6f42c1;
  background: #0a0f1e;
  color: white;
}
.create-btn {
  background: linear-gradient(135deg, #6f42c1, #a855f7);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 12px;
  cursor: pointer;
}
.create-btn:hover {
  background: linear-gradient(135deg, #9333ea, #c084fc);
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(192, 132, 252, 0.8);
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
