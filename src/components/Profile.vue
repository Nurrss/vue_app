<template>
  <div class="profile-container">
    <div class="profile-card">
      <!-- Аватар -->
      <div class="avatar-wrapper">
        <img :src="avatarUrl" alt="User Avatar" class="avatar" />
      </div>

      <!-- Информация -->
      <h2 class="wallet-address">{{ shortAddress }}</h2>
      <p class="wallet-desc">Ваш личный профиль в SwordDAO ⚔️</p>

      <!-- Статистика -->
      <div class="stats">
        <div class="stat-item">
          <span class="stat-value">{{ swords }}</span>
          <span class="stat-label">Мечей</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ victories }}</span>
          <span class="stat-label">Побед</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ tokens }}</span>
          <span class="stat-label">Токенов</span>
        </div>
      </div>

      <!-- Действия -->
      <div class="actions">
        <router-link to="/swords" class="btn action-btn"
          >🗡️ Моя коллекция</router-link
        >
        <router-link to="/dao" class="btn action-btn"
          >🏛 Участие в DAO</router-link
        >
        <button class="btn logout-btn" @click="logout">❌ Выйти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    walletAddress: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      swords: 3, // пример, позже заменим на API
      victories: 7,
      tokens: 120,
    };
  },
  computed: {
    shortAddress() {
      if (!this.walletAddress) return 'Не подключено';
      return (
        this.walletAddress.slice(0, 4) + '...' + this.walletAddress.slice(-4)
      );
    },
    avatarUrl() {
      if (!this.walletAddress) {
        return 'https://api.dicebear.com/7.x/shapes/svg?seed=guest';
      }
      return `https://api.dicebear.com/7.x/shapes/svg?seed=${this.walletAddress}`;
    },
  },
  methods: {
    logout() {
      this.$emit('logout');
    },
  },
};
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  padding: 40px;
}

.profile-card {
  background: linear-gradient(160deg, #0a0f1e, #1a1f35);
  border: 2px solid #6f42c1;
  border-radius: 20px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.5);
  color: #f8f9fa;
  animation: fadeIn 0.8s ease;
}

/* Аватар */
.avatar-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #a855f7;
  box-shadow: 0 0 15px rgba(168, 85, 247, 0.6);
}

/* Адрес */
.wallet-address {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 5px;
  text-shadow: 0 0 8px #9333ea;
}
.wallet-desc {
  font-size: 1rem;
  color: #cbd5e1;
  margin-bottom: 25px;
}

/* Статистика */
.stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
}
.stat-item {
  text-align: center;
}
.stat-value {
  font-size: 1.4rem;
  font-weight: bold;
  color: #a855f7;
  text-shadow: 0 0 6px #a855f7;
}
.stat-label {
  display: block;
  font-size: 0.9rem;
  color: #94a3b8;
}

/* Кнопки */
.actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.btn {
  padding: 10px 16px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}
.action-btn {
  background: linear-gradient(135deg, #6f42c1, #a855f7);
  color: white;
}
.action-btn:hover {
  background: linear-gradient(135deg, #9333ea, #c084fc);
  box-shadow: 0 0 15px rgba(192, 132, 252, 0.9);
  transform: scale(1.05);
}
.logout-btn {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
}
.logout-btn:hover {
  background: linear-gradient(135deg, #f87171, #b91c1c);
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.9);
  transform: scale(1.05);
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
