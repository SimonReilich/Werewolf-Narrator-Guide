<script setup>
import { ref } from 'vue';

const emit = defineEmits(['start']);

class Card {
        constructor(name, amount, min, max, img) {
                this.name = name;
                this.amount = ref(amount);
                this.min = min;
                this.max = max;
                this.img = img;
        }

        add() {
                if (this.amount.value < this.max) {
                        this.amount.value += 1;
                        amount.value += 1;
                }
        }

        remove() {
                if (this.amount.value > this.min) {
                        this.amount.value -= 1;
                        amount.value -= 1;
                }
        }
}

const selected = ref(0);
const cards = [
        new Card('Vilager', 1, 1, Infinity, ''),
        new Card('Werewolf', 1, 1, Infinity, ''),
        new Card('Witch', 0, 0, Infinity, '')
];
const amount = ref(0);

for (const card of cards) {
        amount.value += card.min;
}

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
</script>

<template>
<div class="header">
        <h1>Werewolf</h1>
        <h3>Narrator Guide</h3>
</div>
<div class="content">
        <h2>{{ cards[selected].name }}</h2>
        
        <img :src="cards[selected].img" alt="Card Image" />

        <div>
                <button class="small_btn" @click="cards[selected].remove">-</button>
                <h3 class="amount">{{ cards[selected].amount }}</h3>
                <button class="small_btn" @click="cards[selected].add">+</button>
        </div>

        <button class="prev small_btn" @click="prev"><-</button>
        <button class="next small_btn" @click="next">-></button>
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
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.amount {
        display: inline-block;
        width: 4rem;
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