<template>
  <main class="container py-5" style="max-width: 600px">
    <h1 class="mb-4 text-center">Свяжитесь с нами</h1>
    <p class="text-center mb-4">
      Если у вас есть вопросы или предложения, напишите нам!
    </p>

    <form @submit.prevent="handleSubmit" novalidate>
      <div class="mb-3">
        <label for="name" class="form-label">Имя</label>
        <input
          v-model="form.name"
          type="text"
          class="form-control"
          id="name"
          required
          placeholder="Ваше имя"
        />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="form-control"
          id="email"
          required
          placeholder="example@mail.com"
        />
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">Сообщение</label>
        <textarea
          v-model="form.message"
          class="form-control"
          id="message"
          rows="5"
          required
          placeholder="Введите ваше сообщение"
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary w-100" :disabled="loading">
        {{ loading ? "Отправка..." : "Отправить" }}
      </button>
    </form>

    <div v-if="successMessage" class="alert alert-success mt-4" role="alert">
      {{ successMessage }}
    </div>

    <div v-if="errorMessage" class="alert alert-danger mt-4" role="alert">
      {{ errorMessage }}
    </div>
  </main>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      loading: false,
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    async handleSubmit() {
      this.successMessage = "";
      this.errorMessage = "";

      if (!this.form.name.trim()) {
        this.errorMessage = "Пожалуйста, введите имя.";
        return;
      }
      if (!this.validateEmail(this.form.email)) {
        this.errorMessage = "Пожалуйста, введите корректный email.";
        return;
      }
      if (!this.form.message.trim()) {
        this.errorMessage = "Пожалуйста, введите сообщение.";
        return;
      }

      this.loading = true;

      try {
        // Симуляция успешной отправки (здесь можно добавить реальный запрос)
        await new Promise((resolve) => setTimeout(resolve, 1500));

        this.successMessage = "Спасибо! Ваше сообщение отправлено.";

        // Очистка формы
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
      } catch (error) {
        this.errorMessage = "Произошла ошибка при отправке. Попробуйте позже.";
        console.error("Contact form error:", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
main {
  min-height: 70vh;
}
</style>
