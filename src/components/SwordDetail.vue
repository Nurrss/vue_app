<template>
  <div class="sword-detail container py-5">
    <div class="row align-items-center">
      <!-- Картинка меча -->
      <div class="col-md-6 sword-image text-center">
        <img :src="sword.image" :alt="sword.name" />
      </div>

      <!-- Информация о мече -->
      <div class="col-md-6 sword-info">
        <h1 class="sword-name">{{ sword.name }}</h1>
        <span :class="['rarity-badge', sword.rarity.toLowerCase()]">
          {{ sword.rarity }}
        </span>

        <p class="sword-desc">{{ sword.description }}</p>

        <div class="sword-meta">
          <p><strong>Создатель:</strong> {{ sword.creator }}</p>
          <p><strong>Владелец:</strong> {{ sword.owner }}</p>
          <p><strong>Цена:</strong> 💰 {{ sword.price }} SOL</p>
        </div>

        <!-- Кнопки -->
        <div class="sword-actions">
          <button class="btn btn-buy" @click="$emit('buy', sword)">
            ⚔️ Купить
          </button>
          <button class="btn btn-fraction" @click="$emit('fraction', sword)">
            🔗 Взять долю
          </button>
          <button class="btn btn-arena" @click="$emit('arena', sword)">
            🏟 Сразиться
          </button>
        </div>
      </div>
    </div>

    <!-- История транзакций -->
    <div class="transaction-history mt-5">
      <h3>📜 История владения</h3>
      <ul>
        <li v-for="(tx, index) in sword.history" :key="index">
          {{ tx.date }} – {{ tx.user }} ({{ tx.action }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwordDetail',
  props: {
    sword: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.sword-detail {
  color: #f8f9fa;
  background: radial-gradient(circle at top left, #0a0f1e, #1a1f35);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.6);
  animation: fadeIn 0.8s ease;
}

/* Изображение */
.sword-image img {
  max-width: 100%;
  max-height: 400px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.7);
  transition: transform 0.4s ease;
}
.sword-image img:hover {
  transform: scale(1.05) rotate(-2deg);
}

/* Название */
.sword-name {
  font-family: 'Cinzel', serif;
  font-size: 2.2rem;
  font-weight: bold;
  text-shadow: 0 0 12px #9333ea;
  margin-bottom: 12px;
}

/* Описание */
.sword-desc {
  font-size: 1rem;
  color: #cbd5e1;
  margin: 12px 0 20px;
}

/* Метаданные */
.sword-meta {
  font-size: 0.95rem;
  color: #94a3b8;
  margin-bottom: 20px;
}

/* Редкость */
.rarity-badge {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 5px 12px;
  border-radius: 14px;
  margin-bottom: 16px;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
}
.rarity-badge.common {
  background: #64748b;
  color: #fff;
}
.rarity-badge.rare {
  background: #3b82f6;
  color: #fff;
}
.rarity-badge.epic {
  background: #9333ea;
  color: #fff;
}
.rarity-badge.legendary {
  background: #f59e0b;
  color: #fff;
}

/* Кнопки */
.sword-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 20px;
}
.btn {
  padding: 10px 18px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}
.btn-buy {
  background: linear-gradient(135deg, #6f42c1, #a855f7);
  color: white;
}
.btn-buy:hover {
  background: linear-gradient(135deg, #9333ea, #c084fc);
  box-shadow: 0 0 15px rgba(192, 132, 252, 0.9);
}
.btn-fraction {
  background: linear-gradient(135deg, #1d4ed8, #3b82f6);
  color: white;
}
.btn-fraction:hover {
  background: linear-gradient(135deg, #2563eb, #60a5fa);
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.9);
}
.btn-arena {
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  color: white;
}
.btn-arena:hover {
  background: linear-gradient(135deg, #d97706, #facc15);
  box-shadow: 0 0 15px rgba(251, 191, 36, 0.9);
}

/* История */
.transaction-history {
  margin-top: 40px;
  background: rgba(10, 15, 30, 0.6);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(111, 66, 193, 0.4);
}
.transaction-history h3 {
  font-family: 'Cinzel', serif;
  margin-bottom: 15px;
  text-shadow: 0 0 8px #a855f7;
}
.transaction-history ul {
  list-style: none;
  padding: 0;
}
.transaction-history li {
  padding: 6px 0;
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
  font-size: 0.9rem;
}
.transaction-history li:last-child {
  border-bottom: none;
}

/* Анимация */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
