<script lang="ts">
	import Typewriter from './Typewriter.svelte';
	import FortuneCards from './FortuneCards.svelte';
	import FortuneButton from './FortuneButton.svelte';

	let { fortune, completedChapters = [], onChapterComplete = (i: number) => {} } = $props();

	function generateThinkingPattern(length = 120) {
		const patterns = [
			{ char: '~', probability: 0.2 },
			{ char: '*', probability: 0.1 },
			{ char: 'o', probability: 0.3 },
			{ char: '_', probability: 0.4 }
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

	const PHASES = ['INTRO', 'THINKING', 'CARDS', 'OUTRO', 'CONTINUE'] as const;
	type Phase = (typeof PHASES)[number];

	let activeChapterIndex = $state(0);
	let phases = $state<Record<number, Phase>>({});

	function advancePhase(chapterIndex: number) {
		if (completedChapters.includes(chapterIndex)) return;

		const currentPhase = phases[chapterIndex];
		const nextPhaseIndex = PHASES.indexOf(currentPhase) + 1;

		if (nextPhaseIndex < PHASES.length) {
			phases = { ...phases, [chapterIndex]: PHASES[nextPhaseIndex] };
		}
	}

	// Initialize new chapters
	$effect(() => {
		if (!phases[activeChapterIndex]) {
			phases = { ...phases, [activeChapterIndex]: PHASES[0] };
		}
	});
</script>

<div class="flex flex-col gap-10">
	{#each fortune as chapter, i}
		{#if i <= activeChapterIndex}
			<div class="pip-talk flex flex-col gap-10">
				<Typewriter text={chapter.introText} oncomplete={() => advancePhase(i)} />

				{#if phases[i] && PHASES.indexOf(phases[i]) >= PHASES.indexOf('THINKING')}
					<Typewriter text={generateThinkingPattern()} oncomplete={() => advancePhase(i)} />
				{/if}

				{#if phases[i] && PHASES.indexOf(phases[i]) >= PHASES.indexOf('CARDS')}
					<FortuneCards cards={chapter.cards} onRevealed={() => advancePhase(i)} />
				{/if}

				{#if phases[i] && PHASES.indexOf(phases[i]) >= PHASES.indexOf('OUTRO')}
					<Typewriter text={chapter.outroText} oncomplete={() => advancePhase(i)} />
				{/if}

				{#if phases[i] === 'CONTINUE' && i < fortune.length - 1}
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

<style lang="postcss">
	.pip-talk :global(#typewriter) {
		font-family: 'Hershey', 'Times New Roman', serif;
		@apply text-2xl;
	}
</style>
