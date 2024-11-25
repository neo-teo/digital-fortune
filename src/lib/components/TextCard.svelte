<script lang="ts">
	import Card from './Card.svelte';

	export let title: string;
	export let number: number;
	export let value: string;
</script>

<Card {title} {number} variant="shortsquare">
	<p>{value}</p>
</Card>

<style lang="postcss">
	p {
		font-size: x-large;
	}
</style>
