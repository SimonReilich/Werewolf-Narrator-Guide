<script setup>
import { ref } from 'vue';
import { Card } from '../models/Card.js';

const emit = defineEmits(['overview']);

const selected = ref(0);
const card_sets = Card.presets();

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    prev();
  } else if (event.key === 'ArrowRight') {
    next();
  }
});

const prev = function () {
  if (selected.value > 0) {
    selected.value--;
  } else {
    selected.value = card_sets.length - 1;
  }
};

const next = function () {
  if (selected.value < card_sets.length - 1) {
    selected.value++;
  } else {
    selected.value = 0;
  }
};

const get_cards = function () {
  const result = [];
  for (const card of card_sets[selected.value]) {
    if (card.amount.value > 0) {
      result.push(card);
    }
  }
  return result;
};
</script>

<template>
  <div class="header">
    <h1>Werewolf</h1>
    <h3>Narrator Guide</h3>
  </div>
  <div class="content">
    <h2>Set {{ selected }}</h2>

    <div>
      <img class="img1" :src="card_sets[selected][0].img" alt="Card Image" />
      <img class="img2" :src="card_sets[selected][1].img" alt="Card Image" />
      <img class="img3" :src="card_sets[selected][2].img" alt="Card Image" />
    </div>

    <button class="prev small_btn" @click="prev">←</button>
    <button class="next small_btn" @click="next">→</button>
  </div>
  <div class="button-container">
    <button @click="emit('overview', get_cards())">Overview</button>
    <h3>{{ card_sets[selected].length }} Players</h3>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 20vh;
  position: relative;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  max-width: 60rem;
  position: relative;
  text-align: center;
  margin: auto;
}

.button-container {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  height: calc(30vh - 2rem);
}

h1 {
  margin-top: 4rem;
  margin-bottom: 0rem;
}

img {
  width: 14rem;
  height: 14rem;
  margin: 1rem;
  border-radius: 1rem;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
}

.img1 {
  position: absolute;
  left: calc(50% - 1rem);
  top: calc(50%);
  transform: translate(-50%, -50%);
  z-index: 10;
}

.img2 {
  position: absolute;
  left: calc(50% + 2rem);
  top: calc(50% + 1rem);
  transform: translate(-50%, -50%) rotate(10deg);
  z-index: 9;
}

.img3 {
  position: absolute;
  left: calc(50% - 4rem);
  top: calc(50% + 1rem);
  transform: translate(-50%, -50%) rotate(-10deg);
  z-index: 8;
}

.prev {
  position: absolute;
  left: 0;
}

.next {
  position: absolute;
  right: 0;
}
</style>