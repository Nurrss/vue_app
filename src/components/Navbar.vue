<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">ProfAI</router-link>
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

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/professions"
              >Профессии</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/courses">Курсы</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/education"
              >Поступить</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/jobs">Вакансии</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">О проекте</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacts">Контакты</router-link>
          </li>
        </ul>
        <div class="d-flex">
          <a
            href="https://t.me/your_bot"
            target="_blank"
            class="btn btn-outline-light"
          >
            Начать в Telegram
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
