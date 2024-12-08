<script lang="ts">
	import IntroScreen from '$lib/components/IntroScreen.svelte';
	import FortuneTeller from '$lib/components/FortuneTeller.svelte';
	import Blurb from '$lib/components/Blurb.svelte';

	let { data } = $props();
	const { fortune } = data;

	let showFortuneTeller = $state(false);
</script>

{#if !showFortuneTeller}
	<IntroScreen onStart={() => (showFortuneTeller = true)} />
{:else}
	<FortuneTeller {fortune} />
{/if}

<Blurb />
