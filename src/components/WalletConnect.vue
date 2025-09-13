<template>
  <div class="wallet-connect text-center">
    <h2 class="wallet-title">🔗 Подключение кошелька</h2>

    <!-- Если кошелёк не подключён -->
    <div v-if="!walletConnected">
      <p class="wallet-desc">
        Для покупки мечей и участия в DAO подключите Solana-кошелёк.
      </p>
      <button class="btn wallet-btn" @click="connectWallet">
        🪙 Подключить Phantom Wallet
      </button>
    </div>

    <!-- Если кошелёк подключён -->
    <div v-else>
      <p class="wallet-status">
        ✅ Подключено: <span class="address">{{ shortAddress }}</span>
      </p>
      <button class="btn disconnect-btn" @click="disconnectWallet">
        ❌ Отключить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WalletConnect',
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
          alert('Установите Phantom Wallet для подключения!');
          window.open('https://phantom.app/', '_blank');
        }
      } catch (err) {
        console.error('Ошибка подключения кошелька:', err);
      }
    },
    disconnectWallet() {
      if (window.solana && this.walletConnected) {
        window.solana.disconnect();
      }
      this.walletConnected = false;
      this.walletAddress = '';
    },
  },
};
</script>

<style scoped>
.wallet-connect {
  background: radial-gradient(circle at center, #0a0f1e, #1a1f35);
  border: 2px solid #6f42c1;
  border-radius: 18px;
  padding: 30px;
  max-width: 400px;
  margin: 40px auto;
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.6);
  animation: fadeIn 0.8s ease;
  color: #f8f9fa;
}

.wallet-title {
  font-family: 'Cinzel', serif;
  font-size: 1.6rem;
  text-shadow: 0 0 12px #9333ea;
  margin-bottom: 15px;
}

.wallet-desc {
  font-size: 1rem;
  color: #cbd5e1;
  margin-bottom: 20px;
}

.wallet-status {
  font-size: 1rem;
  color: #a855f7;
  text-shadow: 0 0 6px #a855f7;
  margin-bottom: 15px;
}

.address {
  font-weight: bold;
  background: rgba(168, 85, 247, 0.2);
  padding: 4px 10px;
  border-radius: 8px;
}

.btn {
  padding: 10px 16px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.wallet-btn {
  background: linear-gradient(135deg, #6f42c1, #a855f7);
  color: white;
}
.wallet-btn:hover {
  background: linear-gradient(135deg, #9333ea, #c084fc);
  box-shadow: 0 0 15px rgba(192, 132, 252, 0.9);
  transform: scale(1.05);
}

.disconnect-btn {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
}
.disconnect-btn:hover {
  background: linear-gradient(135deg, #f87171, #b91c1c);
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.9);
  transform: scale(1.05);
}

/* Анимация появления */
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
