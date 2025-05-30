<template>
  <main class="container py-5">
    <h1 class="mb-4 text-center">Вакансии в Казахстане</h1>

    <!-- Форма фильтров -->
    <form @submit.prevent="onSearch" class="mb-4">
      <div class="row g-3">
        <div class="col-md-4">
          <input
            v-model="filters.what"
            type="text"
            class="form-control"
            placeholder="Ключевые слова (название работы)"
          />
        </div>

        <div class="col-md-3">
          <input
            v-model.number="filters.salary_min"
            type="number"
            min="0"
            class="form-control"
            placeholder="Минимальная зарплата"
          />
        </div>

        <div class="col-md-3">
          <input
            v-model.number="filters.salary_max"
            type="number"
            min="0"
            class="form-control"
            placeholder="Максимальная зарплата"
          />
        </div>

        <div class="col-md-2 d-grid">
          <button type="submit" class="btn btn-primary">Поиск</button>
        </div>
      </div>
    </form>

    <!-- Загрузка -->
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Загрузка...</span>
      </div>
    </div>

    <!-- Ошибка -->
    <div v-if="error" class="alert alert-danger text-center" role="alert">
      Ошибка загрузки вакансий: {{ error }}
    </div>

    <!-- Список вакансий -->
    <ul v-if="jobs.length" class="list-group mb-4">
      <li
        v-for="job in jobs"
        :key="job.id"
        class="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">
            <a
              :href="job.redirect_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ job.title }}
            </a>
          </div>
          Компания: {{ job.company.display_name }} <br />
          Местоположение: {{ job.location.display_name }} <br />
          Зарплата:
          <span v-if="job.salary_min || job.salary_max">
            от {{ job.salary_min || "—" }} до {{ job.salary_max || "—" }}
            {{ job.salary_currency }}
          </span>
          <span v-else>Не указана</span>
        </div>
        <small class="text-muted">{{ formatDate(job.created) }}</small>
      </li>
    </ul>

    <!-- Пагинация -->
    <nav v-if="jobs.length" aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li
          :class="['page-item', { disabled: page === 1 }]"
          @click="changePage(page - 1)"
        >
          <a class="page-link" href="#">Назад</a>
        </li>
        <li class="page-item disabled">
          <a class="page-link" href="#">{{ page }}</a>
        </li>
        <li
          :class="['page-item', { disabled: !hasMore }]"
          @click="changePage(page + 1)"
        >
          <a class="page-link" href="#">Вперёд</a>
        </li>
      </ul>
    </nav>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "Jobs",
  data() {
    return {
      jobs: [],
      loading: false,
      error: "",
      page: 1,
      resultsPerPage: 10,
      hasMore: true,
      filters: {
        what: "",
        salary_min: null,
        salary_max: null,
      },
    };
  },
  methods: {
    formatDate(value) {
      if (!value) return "";
      const date = new Date(value);
      return date.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },
    async fetchJobs() {
      this.loading = true;
      this.error = "";

      try {
        const app_id = "e7eb3fe0";
        const app_key = "2b94f7d41ff869f1ab08ba357c6ffb2f";

        // Базовый URL с Казахстаном и текущей страницей
        let baseUrl = `https://api.adzuna.com/v1/api/jobs/gb/search/${this.page}`;

        // Параметры запроса
        const params = {
          app_id,
          app_key,
          results_per_page: this.resultsPerPage,
          what: this.filters.what || undefined,
          salary_min: this.filters.salary_min || undefined,
          salary_max: this.filters.salary_max || undefined,
        };

        // Удаляем параметры с undefined
        Object.keys(params).forEach(
          (key) => params[key] === undefined && delete params[key]
        );

        // Формируем query string
        const queryString = new URLSearchParams(params).toString();

        // Полный URL с параметрами
        const url = `${baseUrl}?${queryString}`;
        console.log(url);
        const response = await axios.get(url);

        this.jobs = response.data.results;
        this.hasMore = this.jobs.length === this.resultsPerPage;
      } catch (err) {
        this.error =
          err.response?.data?.error || err.message || "Неизвестная ошибка";
      } finally {
        this.loading = false;
      }
    },
    changePage(newPage) {
      if (newPage < 1 || (newPage > this.page && !this.hasMore)) return;
      this.page = newPage;
      this.fetchJobs();
    },
    onSearch() {
      this.page = 1; // Сбрасываем страницу при новом поиске
      this.fetchJobs();
    },
  },
  mounted() {
    this.fetchJobs();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
