import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { Diet } from '../../utils/interfaces';

const dietsFromLocalStorage = browser ? JSON.parse(window.localStorage.getItem('diets')) : null;
const initialValue = dietsFromLocalStorage ?? [];

const diets = writable<Diet[]>(initialValue);

diets.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('diets', JSON.stringify(value));
	}
});

export default diets;
