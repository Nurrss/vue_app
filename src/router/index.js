import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Professions from "../views/Professions.vue";
import Courses from "../views/Courses.vue";
import Education from "../views/Education.vue";
import Jobs from "../views/Jobs.vue";
import About from "../views/About.vue";
import Contacts from "../views/Contacts.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/professions", name: "Professions", component: Professions },
  { path: "/courses", name: "Courses", component: Courses },
  { path: "/education", name: "Education", component: Education },
  { path: "/jobs", name: "Jobs", component: Jobs },
  { path: "/about", name: "About", component: About },
  { path: "/contacts", name: "Contacts", component: Contacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
