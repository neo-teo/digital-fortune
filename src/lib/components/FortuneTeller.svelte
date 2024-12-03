<script lang="ts">
	import { chapters } from '$lib/data/story_chapters';
	import Typewriter from './Typewriter.svelte';
	import FortuneCards from './FortuneCards.svelte';
	import StarryButton from './StarryButton.svelte';
	import { onMount } from 'svelte';

	let { misc_data, nyc_data, love_data } = $props();

	console.log('FortuneTeller mounting', { misc_data, nyc_data, love_data });

	function generateThinkingPattern(length = 60) {
		return Array.from({ length }, () => (Math.random() < 0.66 ? '~' : '*')).join('');
	}

	const PHASES = {
		IDLE: -1,
		THINKING: 0,
		INTRO: 1,
		CARDS: 2,
		OUTRO: 3,
		CONTINUE: 4
	} as const;

	let chapterIndex = $state(0);
	let phase = $state<number>(PHASES.IDLE);

	let currentChapter = $derived(chapters[chapterIndex]);
	console.log('Current phase:', phase, 'Current chapter:', currentChapter);

	let card_data = $derived(
		currentChapter.id === 'nyc' ? nyc_data : currentChapter.id === 'love' ? love_data : misc_data
	);

	onMount(() => {
		console.log('Component mounted, transitioning from IDLE');
		// Use requestAnimationFrame to ensure we're in a proper animation frame
		requestAnimationFrame(() => {
			phase = PHASES.THINKING;
			console.log('Transitioned to THINKING phase');
		});
	});
</script>

<div class="flex justify-center text-2xl">
	<div class="flex min-h-[80vh] max-w-[1024px] flex-col items-center justify-between gap-14">
		<div class="flex flex-col items-center justify-center gap-10">
			{#if phase === PHASES.IDLE}
				<div>Starting...</div>
			{/if}

			{#if currentChapter.id === 'intro'}
				<img src="goodluckspa.png" class="swingy w-3/4" alt="good luck spa !! :-)" />
			{/if}

			{#if phase >= PHASES.THINKING}
				<Typewriter
					text={currentChapter.id === 'intro' ? 'Ah ... welcome !' : generateThinkingPattern()}
					speed={100}
					oncomplete={() => (phase = PHASES.INTRO)}
				/>
			{/if}

			{#if phase >= PHASES.INTRO}
				<Typewriter
					text={currentChapter.introText}
					oncomplete={() => (phase = currentChapter.id === 'intro' ? PHASES.OUTRO : PHASES.CARDS)}
				/>
			{/if}

			{#if phase >= PHASES.CARDS}
				{#if currentChapter.id !== 'intro'}
					<FortuneCards cards={card_data} onAllFlipped={() => (phase = PHASES.OUTRO)} />
				{/if}
			{/if}

			{#if phase >= PHASES.OUTRO}
				<Typewriter text={currentChapter.outroText} oncomplete={() => (phase = PHASES.CONTINUE)} />
			{/if}
		</div>
		{#if phase >= PHASES.CONTINUE && chapterIndex < chapters.length - 1}
			{#if chapterIndex < chapters.length - 1}
				<StarryButton
					label="Continue"
					onclick={() => {
						chapterIndex++;
						phase = PHASES.IDLE;
					}}
				/>
			{:else}
				<Typewriter text={'Have a wonderful day !'} />
			{/if}
		{/if}
	</div>
</div>

<style>
	.swingy {
		transform-origin: top center;
		animation: swing 2s ease-in-out infinite alternate;
	}

	@keyframes swing {
		from {
			transform: rotate(-3deg);
		}
		to {
			transform: rotate(3deg);
		}
	}
</style>
