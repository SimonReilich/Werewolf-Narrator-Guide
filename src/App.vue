<script setup lang="ts">
import Index from './pages/Index.vue';
import Cards from './pages/Cards.vue';
import Overview from './pages/Overview.vue';
import { ref } from 'vue';
import { Card } from './models/Card.js';

const renderIndex = ref(true);
const renderCards = ref(false);
const renderPreset = ref(false);
const renderOverview = ref(false);
const renderGame = ref(false);

const cards = ref<Card[]>([]);

function changePage(newPage: string) {
  renderIndex.value = false;
  renderCards.value = false;
  renderPreset.value = false;
  renderOverview.value = false;
  renderGame.value = false;

  if (newPage === 'index') {
    renderIndex.value = true;
  } else if (newPage === 'cards') {
    renderCards.value = true;
  } else if (newPage === 'preset') {
    renderPreset.value = true;
  } else if (newPage === 'overview') {
    renderOverview.value = true;
  } else if (newPage === 'game') {
    renderGame.value = true;
  }
}

function overview(parsed_cards: Card[]) {
  cards.value = parsed_cards;
  for (const card of cards.value) {
    console.log(card.name);
  }
  changePage('overview');
}
</script>

<template>
  <div class="background-container"></div>
  <Index v-if="renderIndex" @cards="changePage('cards')" @preset="changePage('preset')" />
  <Cards v-if="renderCards" @overview="overview"/>
  <Overview v-if="renderOverview" :cards="cards" @start="changePage('game')" @back="changePage('cards')"/>
</template>

<style scoped>
.background-container {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/noise.png');
  pointer-events: none;
  z-index: -1;
}
</style>