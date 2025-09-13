<template>
  <section class="terms-container">
    <div class="terms-header">
      <h1 class="neon-title">📜 Условия использования</h1>
      <p class="neon-subtitle">
        Прежде чем пользоваться ImPass, ознакомьтесь с правилами ⚡
      </p>
    </div>

    <div class="terms-content">
      <div
        class="terms-block"
        v-for="(section, index) in sections"
        :key="index"
      >
        <h2 class="block-title">{{ section.title }}</h2>
        <p class="block-text">{{ section.text }}</p>
      </div>
    </div>

    <div class="terms-footer">
      <router-link to="/" class="neon-button"
        >🏠 Вернуться на главную</router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'Terms',
  data() {
    return {
      sections: [
        {
          title: '1. Общие положения',
          text: 'ImPass — это децентрализованная игровая платформа на Solana. Используя сайт, вы подтверждаете, что понимаете риски, связанные с NFT и DeFi.',
        },
        {
          title: '2. NFT и владение',
          text: 'Все NFT мечей уникальны и хранятся в вашем кошельке. Вы полностью управляете ими, включая торговлю и участие в арене.',
        },
        {
          title: '3. Боевые механики',
          text: 'Система боёв в арене основана на смарт-контрактах. Победа и награды определяются алгоритмами, и мы не можем изменить результаты.',
        },
        {
          title: '4. DAO и голосование',
          text: 'DAO управляет развитием проекта. Участие в голосовании осуществляется через токены управления.',
        },
        {
          title: '5. Ответственность',
          text: 'Команда не несёт ответственности за потери средств из-за ошибок пользователей, уязвимостей в смарт-контрактах или нестабильности рынка.',
        },
        {
          title: '6. Изменения правил',
          text: 'Правила могут обновляться. Продолжая пользоваться ImPass, вы соглашаетесь с изменёнными условиями.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.terms-container {
  min-height: 100vh;
  background: #000;
  color: #fff;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.terms-header {
  text-align: center;
  margin-bottom: 3rem;
}

.neon-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #00f7ff;
  text-shadow: 0 0 10px #00f7ff, 0 0 20px #ff00ff;
  animation: flicker 2s infinite alternate;
}

.neon-subtitle {
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: #bbb;
  text-shadow: 0 0 6px #00f7ff;
}

.terms-content {
  max-width: 800px;
  width: 100%;
}

.terms-block {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-left: 4px solid #00f7ff;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 15px rgba(0, 247, 255, 0.4);
  border-radius: 0.5rem;
  transition: transform 0.3s ease;
}
.terms-block:hover {
  transform: scale(1.02);
  box-shadow: 0 0 20px #ff00ff;
}

.block-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff00ff;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 6px #ff00ff;
}

.block-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #ccc;
}

.terms-footer {
  margin-top: 3rem;
}

.neon-button {
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 0.8rem;
  border: 2px solid #00f7ff;
  background: transparent;
  color: #00f7ff;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 0 0 8px #00f7ff;
  transition: all 0.3s ease;
}
.neon-button:hover {
  background: #00f7ff;
  color: black;
  box-shadow: 0 0 15px #00f7ff, 0 0 30px #00f7ff;
}

/* Неоновое мерцание */
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
</style>
