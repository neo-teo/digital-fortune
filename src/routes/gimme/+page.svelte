<script lang="ts">
	import { pieces } from '$lib/data/data';
	import { radio_data } from '$lib/data/radio_data';

	import ImageCard from '$lib/components/ImageCard.svelte';
	import RadioCard from '$lib/components/RadioCard.svelte';
</script>

{#each radio_data as radio}
	<RadioCard number={radio.id} url={radio.url} />
{/each}

<div class="grid min-h-screen w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	{#each pieces as piece}
		<ImageCard {piece} />
	{/each}
</div>

<style lang="postcss">
</style>
