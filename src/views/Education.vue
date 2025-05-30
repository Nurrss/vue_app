<template>
  <main class="container py-5">
    <h1 class="mb-4 text-center">Профессии</h1>
    <p class="lead text-center mb-5">
      Выберите профессию, которая вам интересна, и получите полезную информацию
      о ней.
    </p>

    <!-- Спиннер загрузки -->
    <div v-if="loading" class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Загрузка...</span>
      </div>
    </div>

    <!-- Содержимое -->
    <div v-else>
      <!-- Нет профессий -->
      <div
        v-if="professions.length === 0"
        class="alert alert-warning text-center"
      >
        Пока нет доступных профессий.
      </div>

      <!-- Список профессий -->
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div
          v-for="profession in professions"
          :key="profession._id"
          class="col"
        >
          <div class="card shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ profession.name }}</h5>

              <p class="card-text flex-grow-1" v-if="profession.course.length">
                {{ profession.course[0].description }}
              </p>
              <p v-else class="card-text flex-grow-1">
                Описание курса пока отсутствует.
              </p>

              <!-- Кнопка раскрытия roadmap -->
              <button
                v-if="profession.roadmap && profession.roadmap.length"
                @click="toggleRoadmap(profession._id)"
                class="btn btn-outline-secondary btn-sm mb-2"
              >
                {{
                  isExpanded(profession._id)
                    ? "Скрыть план"
                    : "Показать план развития"
                }}
              </button>

              <!-- Roadmap -->
              <ul
                v-if="
                  profession.roadmap &&
                  profession.roadmap.length &&
                  isExpanded(profession._id)
                "
                class="list-group list-group-flush mb-2"
              >
                <li
                  v-for="(step, index) in profession.roadmap"
                  :key="index"
                  class="list-group-item"
                >
                  {{ step }}
                </li>
              </ul>

              <!-- Ссылка на курс -->
              <a
                v-if="profession.course[0]?.link"
                :href="profession.course[0].link"
                class="btn btn-primary mt-auto"
                target="_blank"
                rel="noopener"
              >
                Подробнее
              </a>
              <span v-else class="text-muted mt-auto"
                >Информация скоро появится</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "Education",
  data() {
    return {
      professions: [],
      loading: false,
      expanded: null, // ID раскрытой карточки
    };
  },
  methods: {
    toggleRoadmap(id) {
      this.expanded = this.expanded === id ? null : id;
    },
    isExpanded(id) {
      return this.expanded === id;
    },
  },
  async created() {
    this.loading = true;
    try {
      const response = await axios.get(
        "https://helpai-server.vercel.app/api/professions"
      );
      this.professions = response.data;
    } catch (error) {
      console.error("Ошибка загрузки профессий:", error);
      this.professions = [];
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.card-text {
  min-height: 60px;
}

.card {
  transition: all 0.3s ease;
}

.list-group-item {
  background-color: #f8f9fa;
}
</style>
