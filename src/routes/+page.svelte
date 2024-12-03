<script lang="ts">
	let data = $props();

	console.log('Page mounting with data', data);

	const { misc_data, nyc_data, love_data } = data;

	import FortuneRadio from '$lib/components/FortuneRadio.svelte';
	import FortuneTeller from '$lib/components/FortuneTeller.svelte';
	import Blurb from '$lib/components/Blurb.svelte';
</script>

<FortuneTeller {misc_data} {nyc_data} {love_data} />

<!-- <FortuneRadio /> -->

<Blurb />
