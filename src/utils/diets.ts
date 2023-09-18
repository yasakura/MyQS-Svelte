import { deepClone } from './helpers';
import type { Diet } from './interfaces';
import { writable } from 'svelte/store';

export default function composeUserDiet(userDiet: Diet, diets: writable<Diet[]>): Diet[] {
	const rawDiets = deepClone(diets);
	const dietFilter = (item) => userDiet.date === item.date && userDiet.meal === item.meal;
	const currentDietInSavedDiet = rawDiets.filter(dietFilter);
	const currentDietFirstIndexInSavedDiet = rawDiets.findIndex(dietFilter);
	const isCurrentDietInSavedDiet = currentDietInSavedDiet.length > 0;
	if (isCurrentDietInSavedDiet) {
		rawDiets.splice(currentDietFirstIndexInSavedDiet, currentDietInSavedDiet.length);
	}
	// console.log('composeUserDiet: rawDiets', rawDiets);
	// console.log('composeUserDiet: userDiet', userDiet);
	return [...rawDiets, userDiet];
}
