<script lang="ts">
	import { chapters } from '$lib/data/story_chapters';
	import Typewriter from './Typewriter.svelte';
	import FortuneCards from './FortuneCards.svelte';

	let { misc_data, nyc_data, love_data } = $props();

	function generateThinkingPattern(length = 60) {
		return Array.from({ length }, () => (Math.random() < 0.66 ? '~' : '*')).join('');
	}

	const PHASES = {
		IDLE: -1,
		INTRO: 0,
		CARDS: 1,
		OUTRO: 2,
		CONTINUE: 3
	} as const;

	let chapterIndex = $state(0);
	let phase = $state<number>(PHASES.IDLE);

	let currentChapter = $derived(chapters[chapterIndex]);

	let introText = $derived(
		currentChapter.id === 'intro'
			? currentChapter.introText
			: currentChapter.introText + '\n\n' + generateThinkingPattern()
	);

	let card_data = $derived(
		currentChapter.id === 'nyc' ? nyc_data : currentChapter.id === 'love' ? love_data : misc_data
	);
</script>

<div class="flex justify-center">
	<div class="flex max-w-[1024px] flex-col items-center justify-center gap-4 text-2xl">
		{#if phase === PHASES.IDLE}
			{@const _ = setTimeout(() => (phase = PHASES.INTRO), 0)}
		{/if}

		{#if phase >= PHASES.INTRO}
			<Typewriter
				text={introText}
				oncomplete={() => (phase = currentChapter.id === 'intro' ? PHASES.OUTRO : PHASES.CARDS)}
			/>
		{/if}

		{#if phase >= PHASES.CARDS && currentChapter.id !== 'intro'}
			<FortuneCards cards={card_data} onAllFlipped={() => (phase = PHASES.OUTRO)} />
		{/if}

		{#if phase >= PHASES.OUTRO}
			<Typewriter text={currentChapter.outroText} oncomplete={() => (phase = PHASES.CONTINUE)} />
		{/if}

		{#if phase >= PHASES.CONTINUE && chapterIndex < chapters.length - 1}
			<button
				class="continue-button"
				onclick={() => {
					chapterIndex++;
					phase = PHASES.IDLE;
				}}
			>
				Continue?
			</button>
		{/if}
	</div>
</div>

<style>
	.continue-button {
		padding: 0.5rem 1rem;
		cursor: pointer;
		border-radius: 0.25rem;
		border: 1px solid black;
	}

	.continue-button:hover {
		font-style: italic;
		background-color: black;
		color: white;
	}
</style>
