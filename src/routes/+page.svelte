<script lang="ts">
	import IntroScreen from '$lib/components/IntroScreen.svelte';
	import FortuneTeller from '$lib/components/FortuneTeller.svelte';
	import Blurb from '$lib/components/Blurb.svelte';

	let { data } = $props();
	const { fortune } = data;

	let completedChapters = $state<number[]>([]);
	let introCompleted = $state(false);

	function handleIntroComplete() {
		introCompleted = true;
	}

	function handleChapterComplete(index: number) {
		completedChapters = [...completedChapters, index];
	}
</script>

<div class="flex justify-center">
	<div class="flex max-w-[1000px] flex-col gap-20">
		<IntroScreen onStart={handleIntroComplete} disabled={introCompleted} />

		{#if introCompleted}
			<FortuneTeller {fortune} {completedChapters} onChapterComplete={handleChapterComplete} />
		{/if}

		<!-- <Blurb /> -->
	</div>
</div>
