<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const { misc_data, nyc_data, love_data } = data;

	import FortuneRadio from '$lib/components/FortuneRadio.svelte';
	import FortuneTeller from '$lib/components/FortuneTeller.svelte';
</script>

<FortuneTeller {misc_data} {nyc_data} {love_data} />

<!-- <FortuneRadio /> -->
