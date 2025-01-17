<script setup>
import { ref } from 'vue';
import { Card } from '../models/Card.js';

const emit = defineEmits(['start', 'back']);
const props = defineProps({
	cards: {
		type: Array,
		required: true
	}
});
</script>

<template>
	<div class="header">
		<h1>Overview</h1>
		<h3>Selected Cards</h3>
	</div>
		<div class="content scroll">
			<table>
				<tr v-for="card in cards">
					<td><img :src="card.img" alt="Card Image" /></td>
					<td>{{ card.name }}</td>
					<td>x{{ card.amount }}</td>
				</tr>
			</table>
		</div>
	<div class="button-container">
		<button @click="emit('start')">Start Game</button>
		<button @click="emit('back')">Back</button>
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
	position: absolute;
	top: 0rem;
	left: 0rem;
}

.content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: calc(50vh - 2rem);
	width: 100%;
	max-width: 30rem;
	position: relative;
	text-align: center;
	margin: auto;
	padding: 0rem;
	position: absolute;
	top: calc(20vh + 2rem);
	left: calc(50% - 15rem);
	overflow-y: scroll;
}

.button-container {
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	width: 100%;
	height: calc(30vh - 2rem);
	margin-bottom: 2rem;
}

/* width */
.scroll::-webkit-scrollbar {
	width: 0rem;
}

/* Track */
.scroll::-webkit-scrollbar-track {
	background-color: #0D0D0D00;
}

/* Handle */
.scroll::-webkit-scrollbar-thumb {
	background-color: #0D0D0D;
	border-radius: 0.5rem;
	outline: 2px solid transparent;
	outline-offset: -6px;
	cursor: pointer;
	transition: all 0.25s;
}

/* Handle on hover */
.scroll::-webkit-scrollbar-thumb:hover {
	outline-color: #FBFBFB;
}

table {
	position: absolute;
	width: 95%;
	top: 0rem;
	left: 0rem;
	margin: 0rem;
	padding: 0rem;
}

.button-container {
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	width: 100%;
	height: calc(30vh - 2rem);
	position: absolute;
	bottom: 0rem;
	left: 0rem;
}

h1 {
	margin-top: 4rem;
	margin-bottom: 0rem;
}

td {
	padding: 1rem;
}

img {
	width: 7rem;
	height: 7rem;
	border-radius: 0.5rem;
	background-color: #ffffff;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
}
</style>