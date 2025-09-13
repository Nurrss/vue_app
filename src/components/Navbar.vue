<template>
  <nav class="navbar navbar-expand-lg navbar-dark py-3 custom-navbar">
    <div class="container-fluid">
      <!-- Логотип / Название -->
      <router-link class="navbar-brand logo-text" to="/">
        ⚔️ SwordDAO
      </router-link>

      <!-- Кнопка для мобилки -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Навигация -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/swords"
              >🗡️ Коллекция</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/arena">⚔️ Арена</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dao">🏛 DAO</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/market">💱 Маркет</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">ℹ️ О проекте</router-link>
          </li>
        </ul>

        <!-- Кнопка кошелька -->
        <div class="d-flex">
          <button class="btn wallet-btn" @click="connectWallet">
            🔗 {{ walletConnected ? shortAddress : 'Подключить кошелёк' }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      walletConnected: false,
      walletAddress: '',
    };
  },
  computed: {
    shortAddress() {
      if (!this.walletAddress) return '';
      return (
        this.walletAddress.slice(0, 4) + '...' + this.walletAddress.slice(-4)
      );
    },
  },
  methods: {
    async connectWallet() {
      try {
        if (window.solana && window.solana.isPhantom) {
          const resp = await window.solana.connect();
          this.walletConnected = true;
          this.walletAddress = resp.publicKey.toString();
        } else {
          alert('Установите Phantom Wallet для подключения');
        }
      } catch (err) {
        console.error('Wallet connect error:', err);
      }
    },
  },
};
</script>

<style scoped>
/* Атмосфера */
.custom-navbar {
  background: linear-gradient(90deg, #0a0f1e, #1a1f35);
  border-bottom: 2px solid #6f42c1;
  box-shadow: 0 0 20px rgba(111, 66, 193, 0.5);
  animation: fadeInDown 0.8s ease;
}

/* Лого */
.logo-text {
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #f8f9fa;
  text-shadow: 0 0 8px #a855f7, 0 0 12px #6f42c1;
  transition: transform 0.3s ease;
}
.logo-text:hover {
  transform: scale(1.1) rotate(-2deg);
  text-shadow: 0 0 15px #e879f9, 0 0 25px #9333ea;
}

/* Линки */
.nav-link {
  font-weight: 500;
  margin: 0 8px;
  transition: all 0.3s ease;
}
.nav-link:hover {
  color: #a855f7 !important;
  text-shadow: 0 0 8px #a855f7;
  transform: translateY(-2px);
}

/* Кнопка кошелька */
.wallet-btn {
  background: linear-gradient(135deg, #6f42c1, #a855f7);
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 12px;
  padding: 8px 16px;
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.6);
  transition: all 0.3s ease;
}
.wallet-btn:hover {
  background: linear-gradient(135deg, #9333ea, #c084fc);
  box-shadow: 0 0 20px rgba(192, 132, 252, 0.9);
  transform: scale(1.05);
}

/* Анимация появления */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
