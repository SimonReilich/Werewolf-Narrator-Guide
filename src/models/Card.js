import { ref } from 'vue';

export class Card {
	constructor(name, min, max, img) {
		this.name = name;
		this.amount = ref(min);
		this.min = min;
		this.max = max;
		if (img === '') {
			this.img = 'public/icon.png';
		} else {
			this.img = img;
		}
	}

	add() {
		if (this.amount.value < this.max) {
			this.amount.value += 1;
			return true;
		}
		return false;
	}

	remove() {
		if (this.amount.value > this.min) {
			this.amount.value -= 1;
			return true;
		}
		return false;
	}

	static initial() {
		return [
			new Card('Villager', 1, Infinity, ''),
			new Card('Witch', 0, 1, ''),
			new Card('Seer', 0, 1, ''),
			new Card('Hunter', 0, Infinity, ''),
			new Card('Thief', 0, 1, ''),
			new Card('Cupid', 0, 1, ''),
			new Card('Guard', 0, 1, ''),
			new Card('Backpacker', 0, 1, ''),
			new Card('Child', 0, 1, ''),
			new Card('Judge', 0, 1, ''),
			new Card('Wildkeeper', 0, 1, ''),
			new Card('Priest', 0, 1, ''),
			new Card('Black Crow', 0, 1, ''),
			new Card('Detective', 0, 1, ''),
			new Card('Three Brothers', 0, 3, ''),
			new Card('Two Sisters', 0, 2, ''),
			new Card('Cursed One', 0, Infinity, ''),
			new Card('Tough Guy', 0, Infinity, ''),
			new Card('Fair Maiden', 0, 1, ''),
			new Card('Shapeshifter', 0, Infinity, ''),

			new Card('Werewolf', 1, Infinity, ''),
			new Card('Wolf Cub', 0, Infinity, ''),
			new Card('Big Bad Wolf', 0, 1, ''),
			new Card('Lone Wolf', 0, 1, ''),

			new Card('Fool', 0, 1, ''),
			new Card('White Wolf', 0, 1, ''),
			new Card('Arsonist', 0, 1, ''),
		];
	}
}