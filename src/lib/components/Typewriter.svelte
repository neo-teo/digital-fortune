<script lang="ts">
	import { onMount } from 'svelte';

	let {
		text,
		speed = 50,
		oncomplete = () => console.log('typewriter oncomplete ignored'),
		displayText = $bindable('')
	} = $props();

	onMount(() => {
		// TODO: start out at 0
		let currentIndex = text.length;

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

<div class="whitespace-pre-line" class:break-all={!text.includes(' ')}>{displayText}</div>

<style>
</style>
