<script setup>
</script>

<template>
	<div class="background-container"></div>
	<div class="header">
		<h1>Werewolf</h1>
		<h3>Narrator Guide</h3>
	</div>
	<div class="content">
		<p>The physical game is still required, this website is just a tool which might be helpful to the narrator,
			especially in larger groups. <br> <br> You can either choose the roles to play with by hand or enter
			the
			number of players you want to play with and pick a automatically generated preset. <br> <br> If you
			have any
			feedback, please reach out to me. Have fun playing!</p>
	</div>
	<div class="button-container">
		<button>Choose Cards</button>
		<button>Pick Preset</button>
	</div>
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
	justify-content: center;
	align-items: center;
	height: 60vh;
	width: 100%;
	max-width: 40rem;
	position: relative;
	text-align: center;
	margin: auto;
}

.button-container {
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	width: 100%;
	height: calc(20vh - 1rem);
}

h1 {
	margin-top: 4rem;
	margin-bottom: 0rem;
}
</style>