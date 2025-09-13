<template>
  <div class="mint-container">
    <h1 class="mint-title">🪄 Сминтить новый меч</h1>
    <p class="mint-subtitle">
      Создайте уникальный NFT-меч и добавьте его в коллекцию
    </p>

    <!-- Форма -->
    <form class="mint-form" @submit.prevent="mintSword">
      <input
        type="text"
        v-model="form.name"
        placeholder="Название меча"
        class="input"
        required
      />

      <input type="file" @change="handleFileUpload" class="input file-input" />

      <select v-model="form.rarity" class="input">
        <option disabled value="">Выберите редкость</option>
        <option>Обычный</option>
        <option>Редкий</option>
        <option>Эпический</option>
        <option>Легендарный</option>
      </select>

      <input
        type="number"
        v-model="form.power"
        placeholder="Сила меча (1-100)"
        class="input"
        min="1"
        max="100"
      />

      <button type="submit" class="btn mint-btn">⚡ Сминтить</button>
    </form>

    <!-- Превью -->
    <div v-if="preview" class="preview-card">
      <h2>🔮 Превью меча</h2>
      <img :src="preview" alt="Sword Preview" class="preview-img" />
      <p>
        <strong>{{ form.name }}</strong> ({{ form.rarity }})
      </p>
      <p>Сила: {{ form.power }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MintForm',
  data() {
    return {
      form: {
        name: '',
        rarity: '',
        power: 50,
        image: null,
      },
      preview: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.form.image = file;
        this.preview = URL.createObjectURL(file);
      }
    },
    mintSword() {
      if (!this.form.name || !this.form.rarity || !this.form.image) {
        alert('Заполните все поля!');
        return;
      }

      // Здесь потом будет вызов смарт-контракта Anchor
      console.log('Минтим NFT:', this.form);

      alert(`Меч "${this.form.name}" успешно сминчен!`);
      this.resetForm();
    },
    resetForm() {
      this.form = { name: '', rarity: '', power: 50, image: null };
      this.preview = null;
    },
  },
};
</script>

<style scoped>
.mint-container {
  padding: 40px;
  text-align: center;
  color: #f8f9fa;
  animation: fadeIn 1s ease;
}
.mint-title {
  font-size: 2.2rem;
  text-shadow: 0 0 12px #9333ea;
}
.mint-subtitle {
  font-size: 1rem;
  color: #cbd5e1;
  margin-bottom: 30px;
}

/* Форма */
.mint-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto 40px;
}
.input {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #6f42c1;
  background: #0a0f1e;
  color: white;
  font-size: 1rem;
}
.file-input {
  padding: 8px;
}
.mint-btn {
  background: linear-gradient(135deg, #6f42c1, #a855f7);
  color: white;
  padding: 12px;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}
.mint-btn:hover {
  background: linear-gradient(135deg, #9333ea, #c084fc);
  box-shadow: 0 0 15px rgba(192, 132, 252, 0.8);
  transform: scale(1.05);
}

/* Превью */
.preview-card {
  background: linear-gradient(160deg, #1a1f35, #2a2f45);
  border: 2px solid #6f42c1;
  border-radius: 16px;
  padding: 20px;
  max-width: 350px;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
}
.preview-img {
  max-width: 180px;
  margin: 15px 0;
  border-radius: 12px;
  border: 2px solid #a855f7;
}

/* Анимация */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
