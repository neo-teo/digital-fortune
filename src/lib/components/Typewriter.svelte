<script lang="ts">
	import { onMount } from 'svelte';

	let {
		text,
		speed = 50,
		oncomplete = () => console.log('typewriter oncomplete ignored')
	} = $props();

	let displayText = $state('');

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

<div class:break-all={!text.includes(' ')}>{displayText}</div>

<style>
</style>
