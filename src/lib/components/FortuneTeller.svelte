<script lang="ts">
	import Typewriter from './Typewriter.svelte';
	import FortuneCards from './FortuneCards.svelte';
	import FortuneButton from './FortuneButton.svelte';

	let { fortune, completedChapters = [], onChapterComplete = (i: number) => {} } = $props();

	function generateThinkingPattern(length = 120) {
		const patterns = [
			{ char: '~', probability: 0.4 },
			{ char: '*', probability: 0.2 },
			{ char: 'o', probability: 0.3 },
			{ char: '_', probability: 0.1 }
		];

		return Array.from({ length }, () => {
			const rand = Math.random();
			let cumulative = 0;

			for (const pattern of patterns) {
				cumulative += pattern.probability;
				if (rand < cumulative) return pattern.char;
			}

			return patterns[0].char;
		}).join('');
	}

	const PHASES = {
		IDLE: -1,
		INTRO: 0,
		THINKING: 1,
		CARDS: 2,
		OUTRO: 3,
		CONTINUE: 4
	} as const;

	let activeChapterIndex = $state(0);
	let phases = $state<Record<number, number>>({});

	$effect(() => {
		// Initialize new chapter phases
		if (phases[activeChapterIndex] === undefined) {
			phases = { ...phases, [activeChapterIndex]: PHASES.IDLE };
		}
	});

	$effect(() => {
		// Handle IDLE phase transitions
		for (const [index, phase] of Object.entries(phases)) {
			if (phase === PHASES.IDLE) {
				requestAnimationFrame(() => {
					phases = { ...phases, [index]: PHASES.INTRO };
				});
			}
		}
	});
</script>

<div class="flex flex-col gap-10">
	{#each fortune as chapter, i}
		{#if i <= activeChapterIndex}
			<div class="flex flex-col gap-10">
				{#if phases[i] >= PHASES.INTRO}
					<Typewriter
						text={chapter.introText}
						oncomplete={() => {
							if (!completedChapters.includes(i)) {
								phases = { ...phases, [i]: PHASES.THINKING };
							}
						}}
					/>
				{/if}

				{#if phases[i] >= PHASES.THINKING}
					<Typewriter
						text={generateThinkingPattern()}
						oncomplete={() => {
							if (!completedChapters.includes(i)) {
								phases = { ...phases, [i]: PHASES.CARDS };
							}
						}}
					/>
				{/if}

				{#if phases[i] >= PHASES.CARDS}
					<FortuneCards
						cards={chapter.cards}
						onRevealed={() => {
							if (!completedChapters.includes(i)) {
								phases = { ...phases, [i]: PHASES.OUTRO };
							}
						}}
					/>
				{/if}

				{#if phases[i] >= PHASES.OUTRO}
					<Typewriter
						text={chapter.outroText}
						oncomplete={() => {
							if (!completedChapters.includes(i)) {
								phases = { ...phases, [i]: PHASES.CONTINUE };
							}
						}}
					/>
				{/if}

				{#if phases[i] >= PHASES.CONTINUE && i < fortune.length - 1}
					<FortuneButton
						label="Continue"
						onclick={() => {
							onChapterComplete(i);
							activeChapterIndex++;
						}}
						disabled={completedChapters.includes(i)}
					/>
				{/if}
			</div>
		{/if}
	{/each}
</div>
