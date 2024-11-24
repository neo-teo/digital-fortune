<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { pieces } from '$lib/data/data';
</script>

<div class="grid grid-cols-1 gap-10 bg-orange-200 p-10 text-2xl sm:grid-cols-2">
	{#each pieces as piece, index}
		<Card {piece} />
	{/each}
</div>

<style lang="postcss">
	* {
		font-family: Bianzhidai;
	}
</style>
