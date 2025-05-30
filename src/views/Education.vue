<template>
  <main class="container py-5">
    <h1 class="mb-4 text-center">Образование по городам</h1>

    <!-- Город -->
    <div class="mb-4">
      <h4>Выберите город:</h4>
      <div class="row">
        <div
          class="col-6 col-md-4 col-lg-3 mb-3"
          v-for="city in cities"
          :key="city.id"
        >
          <button
            class="btn btn-outline-primary w-100"
            @click="selectCity(city.id)"
          >
            {{ city.name }}
          </button>
        </div>
      </div>
    </div>

    <!-- Университеты -->
    <div v-if="selectedCity" class="mb-4">
      <h4>Университеты в {{ getCityName(selectedCity) }}</h4>
      <ul class="list-group">
        <li
          v-for="univ in filteredUniversities"
          :key="univ.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          {{ univ.name }}
          <button
            class="btn btn-sm btn-secondary"
            @click="selectUniversity(univ.id)"
          >
            Специальности
          </button>
        </li>
      </ul>
    </div>

    <!-- Специальности -->
    <div v-if="selectedUniversity" class="mb-4">
      <h4>Специальности — {{ getUniversityName(selectedUniversity) }}</h4>
      <ul class="list-group">
        <li
          v-for="spec in filteredSpecialties"
          :key="spec.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          {{ spec.name }}
          <button
            class="btn btn-sm btn-outline-info"
            @click="selectSpecialty(spec.id)"
          >
            Экзамены
          </button>
        </li>
      </ul>
    </div>

    <!-- Экзамены -->
    <div v-if="selectedSpecialty" class="mb-4">
      <h4>
        Экзамены для поступления — {{ getSpecialtyName(selectedSpecialty) }}
      </h4>
      <ul class="list-group">
        <li
          v-for="exam in filteredExams"
          :key="exam.id"
          class="list-group-item"
        >
          {{ exam.name }}
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      selectedCity: null,
      selectedUniversity: null,
      selectedSpecialty: null,

      // Статичные данные
      cities: [
        { id: "1", name: "Алматы" },
        { id: "2", name: "Астана" },
        { id: "3", name: "Шымкент" },
        { id: "4", name: "Караганда" },
        { id: "5", name: "Актобе" },
      ],
      universities: [
        { id: "u1", name: "КазНУ", cityId: "1" },
        { id: "u2", name: "КБТУ", cityId: "1" },
        { id: "u3", name: "ENU", cityId: "2" },
        { id: "u4", name: "ЮКГУ", cityId: "3" },
        { id: "u5", name: "КарГУ", cityId: "4" },
      ],
      specialties: [
        { id: "s1", name: "Программирование", universityId: "u1" },
        { id: "s2", name: "Экономика", universityId: "u1" },
        { id: "s3", name: "Механика", universityId: "u2" },
        { id: "s4", name: "Юриспруденция", universityId: "u3" },
        { id: "s5", name: "Архитектура", universityId: "u4" },
      ],
      exams: [
        { id: "e1", name: "Математика", specialtyId: "s1" },
        { id: "e2", name: "Физика", specialtyId: "s1" },
        { id: "e3", name: "История", specialtyId: "s2" },
        { id: "e4", name: "Обществознание", specialtyId: "s4" },
        { id: "e5", name: "Черчение", specialtyId: "s5" },
      ],
    };
  },
  computed: {
    filteredUniversities() {
      return this.universities.filter((u) => u.cityId === this.selectedCity);
    },
    filteredSpecialties() {
      return this.specialties.filter(
        (s) => s.universityId === this.selectedUniversity
      );
    },
    filteredExams() {
      return this.exams.filter((e) => e.specialtyId === this.selectedSpecialty);
    },
  },
  methods: {
    selectCity(id) {
      this.selectedCity = id;
      this.selectedUniversity = null;
      this.selectedSpecialty = null;
    },
    selectUniversity(id) {
      this.selectedUniversity = id;
      this.selectedSpecialty = null;
    },
    selectSpecialty(id) {
      this.selectedSpecialty = id;
    },
    getCityName(id) {
      const city = this.cities.find((c) => c.id === id);
      return city?.name || "";
    },
    getUniversityName(id) {
      const univ = this.universities.find((u) => u.id === id);
      return univ?.name || "";
    },
    getSpecialtyName(id) {
      const spec = this.specialties.find((s) => s.id === id);
      return spec?.name || "";
    },
  },
};
</script>

<style scoped>
h4 {
  margin-top: 1.5rem;
}
</style>
