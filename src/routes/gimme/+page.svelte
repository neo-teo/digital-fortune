<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { pieces } from '$lib/data/data';
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	const CARD_SIZE = 300;
	const CELL_SIZE = 300;
	const MAX_OFFSET = CELL_SIZE - CARD_SIZE;

	let items: Array<(typeof pieces)[0] & { offsetX: number; offsetY: number }> = [];
	let containerEl: HTMLDivElement;

	function getRandomOffset() {
		return (Math.random() - 0.5) * MAX_OFFSET;
	}

	function layoutItems() {
		if (!containerEl) return;

		items = pieces.map((piece) => ({
			...piece,
			offsetX: getRandomOffset(),
			offsetY: getRandomOffset()
		}));
	}

	onMount(() => {
		layoutItems();
		window.addEventListener('resize', layoutItems);
		return () => window.removeEventListener('resize', layoutItems);
	});
</script>

<div
	bind:this={containerEl}
	class="grid min-h-screen w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
>
	{#each items as piece}
		<div
			in:scale={{ duration: 400, easing: cubicOut }}
			out:fade={{ duration: 200 }}
			class="flex items-center justify-center transition-all duration-300"
			style="
					margin-left: {piece.offsetX}px; 
					margin-top: {piece.offsetY}px;
				"
		>
			<Card {piece} />
		</div>
	{/each}
</div>

<style lang="postcss">
	* {
		font-family: Bianzhidai;
	}
</style>
