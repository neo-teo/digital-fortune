<script lang="ts">
	import { radio_data } from '$lib/data/radio_data';
	import { text_data } from '$lib/data/text_data';
	import { image_data } from '$lib/data/image_data';

	import ImageCard from '$lib/components/ImageCard.svelte';
	import RadioCard from '$lib/components/RadioCard.svelte';
	import TextCard from '$lib/components/TextCard.svelte';
</script>

{#each radio_data as radio}
	<RadioCard number={radio.id} url={radio.url} />
{/each}

<div class="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
	{#each image_data as image}
		<ImageCard title={image.title} number={image.number} src={image.src} />
	{/each}
	{#each text_data as text}
		<TextCard title={text.title} number={text.number} value={text.value} />
	{/each}
</div>

<style lang="postcss">
</style>
