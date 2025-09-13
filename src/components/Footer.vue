<template>
  <footer class="footer-container">
    <div class="footer-content">
      <!-- Лого -->
      <h2 class="logo">⚔ ImPass</h2>

      <!-- Навигация -->
      <nav class="footer-nav">
        <router-link to="/" class="footer-link">Главная</router-link>
        <router-link to="/marketplace" class="footer-link"
          >Маркетплейс</router-link
        >
        <router-link to="/arena" class="footer-link">Арена</router-link>
        <router-link to="/mint" class="footer-link">Mint</router-link>
        <router-link to="/dao" class="footer-link">DAO</router-link>
        <router-link to="/profile" class="footer-link">Профиль</router-link>
        <router-link to="/about" class="footer-link">О проекте</router-link>
        <router-link to="/contacts" class="footer-link">Контакты</router-link>
      </nav>

      <!-- Соцсети -->
      <div class="socials">
        <a href="https://t.me/your_telegram" target="_blank" class="social-link"
          >Telegram</a
        >
        <a
          href="https://twitter.com/your_twitter"
          target="_blank"
          class="social-link"
          >Twitter</a
        >
        <a
          href="https://github.com/your_github"
          target="_blank"
          class="social-link"
          >GitHub</a
        >
      </div>
    </div>

    <!-- Копирайт -->
    <div class="footer-bottom">
      <p>© 2025 ImPass. Все права защищены ⚡</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer-container {
  background: #000;
  border-top: 2px solid #00f7ff;
  padding: 2rem 1rem;
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.logo {
  font-size: 2rem;
  font-weight: 900;
  color: #00f7ff;
  text-shadow: 0 0 10px #00f7ff, 0 0 20px #ff00ff;
  animation: flicker 2s infinite alternate;
}

.footer-nav {
  margin: 1.5rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.footer-link {
  color: #00f7ff;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
}
.footer-link::after {
  content: '';
  display: block;
  height: 2px;
  width: 0;
  background: #ff00ff;
  transition: width 0.3s;
  margin-top: 4px;
}
.footer-link:hover {
  color: #ff00ff;
  text-shadow: 0 0 8px #ff00ff;
}
.footer-link:hover::after {
  width: 100%;
}

.socials {
  margin-top: 1rem;
}
.social-link {
  margin: 0 0.8rem;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}
.social-link:hover {
  color: #00f7ff;
  text-shadow: 0 0 8px #00f7ff;
}

.footer-bottom {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #888;
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
