<script lang="ts">
	import Card from './Card.svelte';

	export let piece: {
		title: string;
		number: number;
		src?: string;
		value?: string;
	};
</script>

<Card title={piece.title} number={piece.number}>
	{#if piece.src}
		<img class="image" src={piece.src} alt="piece src" />
	{:else if piece.value}
		<p>{piece.value}</p>
	{/if}
</Card>

<style lang="postcss">
</style>
