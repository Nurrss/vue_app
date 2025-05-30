<template>
  <main>
    <!-- Hero -->
    <section class="py-5 text-center bg-light">
      <div class="container">
        <h1 class="display-4 fw-bold mb-3">Найди свой путь с Tanu AI</h1>
        <p class="lead text-muted mb-4">
          От теста в Telegram — до работы или учёбы мечты.
        </p>
        <div>
          <a
            href="https://t.me/tanuAhacki_bot"
            target="_blank"
            class="btn btn-primary btn-lg mx-2 btn-hover"
            >Начать в Telegram</a
          >
          <router-link
            to="/courses"
            class="btn btn-outline-primary btn-lg mx-2 btn-hover"
            >Курсы</router-link
          >
        </div>
      </div>
    </section>

    <!-- Advantages -->
    <section class="py-4 text-center container">
      <div class="row">
        <div class="col-md-4 mb-4">
          <i class="bi bi-check2-circle display-4 text-primary"></i>
          <h5 class="mt-3">Простой тест</h5>
          <p>Пойми свои сильные стороны и интересы</p>
        </div>
        <div class="col-md-4 mb-4">
          <i class="bi bi-book display-4 text-primary"></i>
          <h5 class="mt-3">Полезные курсы</h5>
          <p>Учись у лучших и получай знания</p>
        </div>
        <div class="col-md-4 mb-4">
          <i class="bi bi-briefcase display-4 text-primary"></i>
          <h5 class="mt-3">Вакансии и поддержка</h5>
          <p>Поможем устроиться на работу</p>
        </div>
      </div>
    </section>
    <section class="py-5 bg-light text-center">
      <div class="container">
        <blockquote class="blockquote fs-5 fst-italic">
          «Tanu помог мне понять, что мне подходит — и я поступил в университет
          мечты!»
        </blockquote>
        <footer class="blockquote-footer mt-3">Успешный студент</footer>
      </div>
    </section>
    <!-- Footer -->
    <footer class="text-center py-5 bg-dark text-light">
      © 2025 Tanu AI. Все права защищены.
    </footer>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.btn-hover:hover {
  transform: scale(1.05);
  transition: 0.3s ease;
  text-decoration: none;
}
</style>
