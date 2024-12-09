<script lang="ts">
	import Typewriter from './Typewriter.svelte';
	import FortuneCards from './FortuneCards.svelte';
	import StarryButton from './StarryButton.svelte';

	let { fortune } = $props();

	function generateThinkingPattern(length = 120) {
		return Array.from({ length }, () => (Math.random() < 0.66 ? '~' : '*')).join('');
	}

	const PHASES = {
		IDLE: -1,
		INTRO: 0,
		THINKING: 1,
		CARDS: 2,
		OUTRO: 3,
		CONTINUE: 4
	} as const;

	let chapterIndex = $state(0);

	let phase = $state<number>(PHASES.IDLE);

	let currentChapter = $derived(fortune[chapterIndex]);

	$effect(() => {
		if (phase === PHASES.IDLE) {
			requestAnimationFrame(() => (phase = PHASES.INTRO));
		}
	});
</script>

<div class="flex flex-col gap-20">
	<div class="flex flex-col gap-10">
		{#if phase === PHASES.IDLE}
			<div>Starting...</div>
		{/if}

		{#if phase >= PHASES.INTRO}
			<Typewriter text={currentChapter.introText} oncomplete={() => (phase = PHASES.THINKING)} />
		{/if}

		{#if phase >= PHASES.THINKING}
			<Typewriter text={generateThinkingPattern()} oncomplete={() => (phase = PHASES.CARDS)} />
		{/if}

		{#if phase >= PHASES.CARDS}
			<FortuneCards cards={currentChapter.cards} onRevealed={() => (phase = PHASES.OUTRO)} />
		{/if}

		{#if phase >= PHASES.OUTRO}
			<Typewriter text={currentChapter.outroText} oncomplete={() => (phase = PHASES.CONTINUE)} />
		{/if}
	</div>

	{#if phase >= PHASES.CONTINUE && chapterIndex < fortune.length - 1}
		<StarryButton
			label="Continue"
			onclick={() => {
				chapterIndex++;
				phase = PHASES.IDLE;
			}}
		/>
	{/if}
</div>
