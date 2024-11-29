<script lang="ts">
	import { onMount } from 'svelte';

	export let text: string;
	export let speed: number = 50; // milliseconds per character
	export let delay: number = 0; // initial delay before starting

	let displayText = '';

	onMount(() => {
		setTimeout(() => {
			let currentIndex = 0;
			const interval = setInterval(() => {
				if (currentIndex <= text.length) {
					displayText = text.slice(0, currentIndex);
					currentIndex++;
				} else {
					clearInterval(interval);
				}
			}, speed);

			return () => clearInterval(interval);
		}, delay);
	});
</script>

<span class="typewriter">{displayText}</span>

<style>
</style>
