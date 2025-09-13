<template>
  <div class="sword-card" @mouseover="hover = true" @mouseleave="hover = false">
    <!-- Картинка меча -->
    <div class="sword-image">
      <img :src="sword.image" :alt="sword.name" />
    </div>

    <!-- Инфо-блок -->
    <div class="sword-info">
      <h3 class="sword-name">{{ sword.name }}</h3>
      <p class="sword-desc">{{ sword.description }}</p>

      <!-- Редкость -->
      <span :class="['rarity-badge', sword.rarity.toLowerCase()]">
        {{ sword.rarity }}
      </span>

      <!-- Цена -->
      <div class="sword-price">💰 {{ sword.price }} SOL</div>

      <!-- Кнопки -->
      <div class="sword-actions">
        <button class="btn btn-buy" @click="$emit('buy', sword)">
          ⚔️ Купить
        </button>
        <button class="btn btn-fraction" @click="$emit('fraction', sword)">
          🔗 Доля
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwordCard',
  props: {
    sword: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style scoped>
.sword-card {
  background: linear-gradient(145deg, #0a0f1e, #1a1f35);
  border: 2px solid #6f42c1;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(111, 66, 193, 0.4);
  overflow: hidden;
  transition: all 0.4s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.sword-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.9);
}

/* Изображение */
.sword-image {
  position: relative;
  background: radial-gradient(circle at center, #1f1f35, #0a0f1e);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sword-image img {
  max-width: 100%;
  max-height: 220px;
  transition: transform 0.3s ease;
}
.sword-card:hover .sword-image img {
  transform: scale(1.1) rotate(-2deg);
}

/* Информация */
.sword-info {
  padding: 16px;
  text-align: center;
}
.sword-name {
  font-family: 'Cinzel', serif;
  font-size: 1.4rem;
  color: #f8f9fa;
  text-shadow: 0 0 6px #9333ea;
  margin-bottom: 8px;
}
.sword-desc {
  font-size: 0.9rem;
  color: #cbd5e1;
  min-height: 40px;
  margin-bottom: 12px;
}

/* Редкость */
.rarity-badge {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
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

/* Цена */
.sword-price {
  font-weight: bold;
  color: #a855f7;
  text-shadow: 0 0 8px #a855f7;
  margin-bottom: 16px;
}

/* Кнопки */
.sword-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
}
.btn {
  padding: 8px 14px;
  border-radius: 10px;
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
</style>
