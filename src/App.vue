<script setup>
import Index from './pages/Index.vue';
import Cards from './pages/Cards.vue';
import { ref } from 'vue';

const renderIndex = ref(true);
const renderCards = ref(false);
const renderPreset = ref(false);

function changePage(newPage) {
	renderIndex.value = false;
	renderCards.value = false;
	renderPreset.value = false;

	if (newPage === 'index') {
		renderIndex.value = true;
	} else if (newPage === 'cards') {
		renderCards.value = true;
	} else if (newPage === 'preset') {
		renderPreset.value = true;
	}
}
</script>

<template>
	<div class="background-container"></div>
	<Index v-if="renderIndex" @cards="changePage('cards')" @preset="changePage('preset')" />
	<Cards v-if="renderCards" />
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