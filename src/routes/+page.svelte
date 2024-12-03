<script lang="ts">
	import FortuneRadio from '$lib/components/FortuneRadio.svelte';
	import FortuneTeller from '$lib/components/FortuneTeller.svelte';
	import Blurb from '$lib/components/Blurb.svelte';

	let { data } = $props();

	const { misc_data, nyc_data, love_data } = data;
</script>

<FortuneTeller {misc_data} {nyc_data} {love_data} />

<!-- <FortuneRadio /> -->

<Blurb />
