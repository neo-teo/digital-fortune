<script lang="ts">
	import { onMount } from 'svelte';

	export let text: string;
	export let speed: number = 50; // milliseconds per character

	export let oncomplete: () => void = () => console.log('typewriter oncomplete ignored');

	let displayText = '';

	onMount(() => {
		let currentIndex = 0;

		const interval = setInterval(() => {
			if (currentIndex <= text.length) {
				displayText = text.slice(0, currentIndex);
				currentIndex++;
			} else {
				clearInterval(interval);
				oncomplete?.();
			}
		}, speed);

		return () => clearInterval(interval);
	});
</script>

<div class="whitespace-pre-wrap text-center">{displayText}</div>

<style>
</style>
