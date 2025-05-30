<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { Collapse } from "bootstrap"; // ✅ Импортируем Collapse из bootstrap

export default {
  components: {
    Navbar,
  },
  setup() {
    const router = useRouter();

    onMounted(() => {
      router.afterEach(() => {
        const navbarCollapse = document.getElementById("navbarNav");
        if (navbarCollapse?.classList.contains("show")) {
          const collapse = Collapse.getInstance(navbarCollapse);
          if (collapse) {
            collapse.hide();
          }
        }
      });
    });
  },
};
</script>
