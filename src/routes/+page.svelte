<h1>My QS</h1>

<script lang="ts">
	import type { Diet } from '../utils/interfaces';
	import composeUserDiet from '../utils/diets';
	import diets from '../lib/stores/diets';

	function submit(event) {
		const formData = new FormData(event.target);

		const diet: Diet = {} as Diet;
		for (let field of formData) {
			const [key, value] = field;
			diet[key] = value;
		}

		diets.set(composeUserDiet(diet, $diets));
	}
</script>

<form on:submit|preventDefault={submit}>
	<label>
		Date du repas
		<input type='date' name='date'>
	</label>

	<hr>

	<label>
		<input type='radio' name="meal" value='breakfast'>
		Matin
	</label>
	<label>
		<input type='radio' name="meal" value='lunch'>
		Midi
	</label>
	<label>
		<input type='radio' name="meal" value='snack'>
		Goûter
	</label>
	<label>
		<input type='radio' name="meal" value='dinner'>
		Soir
	</label>

	<hr>

	<label>
		<input type='radio' name="diet" value='vegetarian'>
		Végétarien
	</label>
	<label>
		<input type='radio' name="diet" value='vegan'>
		Végan
	</label>
	<label>
		<input type='radio' name="diet" value='omnivore'>
		Omnivore
	</label>

	<hr>

	<button type='submit'>Search</button>
</form>