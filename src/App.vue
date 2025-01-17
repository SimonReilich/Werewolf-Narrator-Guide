<script setup lang="ts">
import Index from './pages/Index.vue';
import Preset from './pages/Presets.vue';
import Cards from './pages/Cards.vue';
import Overview from './pages/Overview.vue';
import { ref } from 'vue';
import { Card } from './models/Card.js';

const renderIndex = ref(true);
const renderCards = ref(false);
const renderPreset = ref(false);
const renderOverview = ref(false);
const renderGame = ref(false);

const last = ref<string>('index');

const cards = ref<Card[]>([]);

function changePage(newPage: string) {

  if(renderIndex.value) {
    last.value = 'index';
    renderIndex.value = false;
  } else if(renderCards.value) {
    last.value = 'cards';
    renderCards.value = false;
  } else if(renderPreset.value) {
    last.value = 'preset';
    renderPreset.value = false;
  } else if(renderOverview.value) {
    last.value = 'overview';
    renderOverview.value = false;
  } else if(renderGame.value) {
    last.value = 'game';
    renderGame.value = false;
  }

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

const go_back = function() {
  changePage(last.value);
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
  <Preset v-if="renderPreset" @overview="overview"/>
  <Cards v-if="renderCards" @overview="overview"/>
  <Overview v-if="renderOverview" :cards="cards" @start="changePage('game')" @back="go_back"/>
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