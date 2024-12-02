<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const { misc_data, nyc_data, love_data } = data;

	import FortuneCard from '$lib/components/FortuneCard.svelte';
	import FortuneRadio from '$lib/components/FortuneRadio.svelte';
	import StoryController from '$lib/components/StoryController.svelte';
</script>

<StoryController {misc_data} {nyc_data} {love_data} />

<FortuneRadio />
