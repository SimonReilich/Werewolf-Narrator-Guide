<script setup>
import { ref } from 'vue';

const emit = defineEmits(['start']);

function Card(name, amount, min, max, desc, img) {
        this.name = name;
        this.amount = ref(amount);
        this.min = min;
        this.max = max;
        this.desc = desc;
        this.img = img;
}

const selected = ref(0);
const amount = ref(0);
const cards = [
        {
                name: 'Vilager',
                amount: ref(1),
                min: 1,
                max: Infinity,
                desc: 'Lorem ipsum',
                img: ''
        },
        {
                name: 'Werewolf',
                amount: ref(1),
                min: 1,
                max: Infinity,
                desc: 'Lorem ipsum',
                img: ''
        },
        {
                name: 'Witch',
                amount: ref(0),
                min: 0,
                max: Infinity,
                desc: 'Lorem ipsum',
                img: ''
        }
];

const prev = function () {
        if (selected.value > 0) {
                selected.value--;
        } else {
                selected.value = cards.length - 1;
        }
};

const next = function () {
        if (selected.value < cards.length - 1) {
                selected.value++;
        } else {
                selected.value = 0;
        }
};

const add = function () {
        console.log('add');
        if (cards[selected].amount.value < cards[selected].max) {
                cards[selected].amount.value++;
                amount.value++;
        }
};

const remove = function () {
        console.log('remove');
        if (cards[selected].amount.value > cards[selected].min) {
                cards[selected].amount.value--;
                amount.value--;
        }
};
</script>

<template>
<div class="header">
        <h1>Werewolf</h1>
        <h3>Narrator Guide</h3>
</div>
<div class="content">
        <h2>{{ cards[selected].name }}</h2>
        <p>{{ cards[selected].desc }}</p>
        <h3>{{ cards[selected].amount }}</h3>
        
        <button @click="remove">-</button>
        <button @click="add">+</button>

        <button @click="prev"><-</button>
        <button @click="next">-></button>
</div>
<div class="button-container">
        <button @click="emit('cards')">Start Game</button>
        <h3>{{ amount }} Players</h3>
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
justify-content: center;
align-items: center;
height: 50vh;
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
height: calc(30vh - 2rem);
}

h1 {
margin-top: 4rem;
margin-bottom: 0rem;
}
</style>