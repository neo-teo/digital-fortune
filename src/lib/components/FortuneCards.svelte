<script lang="ts">
	import Card from './Card.svelte';

	const { cards, onRevealed } = $props();

	let anyCardFlipped = $state(false);

	function handleFlip() {
		anyCardFlipped = true;
		setTimeout(() => onRevealed(), 2500);
	}
</script>

<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
	{#each cards as { title, src, label, cover }}
		{#snippet front()}
			<div class="flex h-full flex-col items-center justify-between">
				{#if cover}
					<img src={cover} alt={title} />
				{/if}
				<h2>{title}</h2>
			</div>
		{/snippet}

		{#snippet back()}
			<div class="flex h-full flex-col justify-between py-5">
				<h2>{title}</h2>
				<div class="flex flex-col items-center gap-2">
					{#if src}
						<img {src} alt={title} />
					{/if}
					{#if label}
						<p>{label}</p>
					{/if}
				</div>
			</div>
		{/snippet}

		<Card {front} {back} onFlip={handleFlip} disabled={anyCardFlipped} />
	{/each}
</div>
