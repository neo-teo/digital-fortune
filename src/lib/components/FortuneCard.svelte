<script lang="ts">
	import Card from './Card.svelte';

	let { title, src, label, cover } = $props();
</script>

{#snippet front()}
	<div class="flex h-full flex-col items-center justify-between">
		{#if cover}
			<img src={cover} alt={`${title}`} />
		{/if}
		<h2>{title}</h2>
	</div>
{/snippet}

{#snippet back()}
	<div class="flex h-full flex-col justify-between py-5">
		<h2>{title}</h2>

		<div class="flex flex-col items-center gap-2">
			<img {src} alt={`${title}`} />
			{#if label}
				<p>{label}</p>
			{/if}
		</div>
	</div>
{/snippet}

<Card {front} {back} />

<style>
</style>
