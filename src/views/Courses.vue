<template>
  <main class="container py-5">
    <h1 class="mb-4 text-center">Курсы</h1>
    <p class="lead text-center mb-5">
      Ознакомьтесь с доступными курсами и изучайте уроки в удобном формате.
    </p>

    <div v-if="loading" class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Загрузка...</span>
      </div>
    </div>

    <div v-else>
      <div v-if="courses.length === 0" class="alert alert-warning text-center">
        Курсы пока не доступны.
      </div>

      <div class="accordion" id="coursesAccordion">
        <div
          v-for="(course, index) in courses"
          :key="course._id"
          class="accordion-item"
        >
          <h2 class="accordion-header" :id="'heading' + index">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse' + index"
              aria-expanded="false"
              :aria-controls="'collapse' + index"
            >
              {{ course.title }} — {{ course.durability }}
            </button>
          </h2>
          <div
            :id="'collapse' + index"
            class="accordion-collapse collapse"
            :aria-labelledby="'heading' + index"
            data-bs-parent="#coursesAccordion"
          >
            <div class="accordion-body">
              <p>{{ course.description }}</p>
              <h6>Уроки:</h6>
              <ul class="list-group list-group-flush">
                <li
                  v-for="lesson in course.lessons"
                  :key="lesson._id"
                  class="list-group-item"
                >
                  <a :href="lesson.link" target="_blank" rel="noopener">{{
                    lesson.title
                  }}</a>
                </li>
              </ul>
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
  name: "Courses",
  data() {
    return {
      courses: [],
      loading: false,
    };
  },
  async created() {
    this.loading = true;
    try {
      // Замени URL на свой backend API, который возвращает курсы с вложенными уроками
      const response = await axios.get(
        "https://helpai-server.vercel.app/api/courses"
      );
      this.courses = response.data;
    } catch (error) {
      console.error("Ошибка загрузки курсов:", error);
      this.courses = [];
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.accordion-button {
  font-weight: 600;
}
</style>
