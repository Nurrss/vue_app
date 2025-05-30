<template>
  <main class="container py-5">
    <h1 class="mb-4 text-center">О проекте Tanu AI</h1>
    <p class="lead">
      Tanu AI — это инновационная платформа, которая помогает пользователям выбрать подходящую профессию и построить карьеру.
    </p>
    <p>
      Мы объединяем:
      <ul>
        <li>Интерактивные тесты в Telegram-боте, которые выявляют ваши сильные стороны.</li>
        <li>Мини-приложения с роадмапами и курсами для углубленного изучения.</li>
        <li>Информацию о вузах, предметах и вакансиях для успешного старта.</li>
      </ul>
    </p>
    <p>
      Наша миссия — помочь каждому найти свой уникальный путь в жизни, от учебы до работы мечты.
    </p>
    <hr />
    <h2 class="mt-4">Почему Tanu AI?</h2>
    <div class="row text-center mt-3">
      <div class="col-md-4 mb-3">
        <i class="bi bi-lightning-charge-fill display-4 text-primary"></i>
        <h5 class="mt-2">Быстро и удобно</h5>
        <p>Все шаги от теста до работы в одном месте.</p>
      </div>
      <div class="col-md-4 mb-3">
        <i class="bi bi-people-fill display-4 text-primary"></i>
        <h5 class="mt-2">Поддержка сообщества</h5>
        <p>Эксперты и наставники помогут вам на каждом этапе.</p>
      </div>
      <div class="col-md-4 mb-3">
        <i class="bi bi-graph-up-arrow display-4 text-primary"></i>
        <h5 class="mt-2">Рост и развитие</h5>
        <p>Обучение и вакансии для вашего профессионального успеха.</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
ul {
  list-style-type: disc;
  margin-left: 1.5rem;
}
</style>
