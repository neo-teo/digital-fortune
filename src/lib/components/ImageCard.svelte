<script lang="ts">
	import Card from './Card.svelte';

	export let title: string;
	export let number: number;
	export let src: string;
</script>

<Card {title} {number}>
	<img {src} alt={`${title} ${number}`} />
</Card>

<style lang="postcss">
</style>
