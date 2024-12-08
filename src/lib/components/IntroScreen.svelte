<script lang="ts">
	import Typewriter from './Typewriter.svelte';
	import StarryButton from './StarryButton.svelte';

	let { onStart = () => console.log('onStart ignored') } = $props();

	let phase = $state(0);

	const PHASES = {
		WELCOME: 0,
		INTRO: 1,
		OUTRO: 2,
		CONTINUE: 3
	} as const;

	function getDayMessage(): string {
		const day = new Date().getDay();
		return (
			{
				0: "Sunday's digital energies are especially strong.",
				1: "Monday's digital stars are in perfect harmony.",
				2: "Tuesday's binary streams are particularly clear.",
				3: "Wednesday's binary streams are particularly clear.",
				4: "Thursday's digital stars are especially bright.",
				5: "Friday's digital stars are especially bright.",
				6: "Saturday's virtual forces are in perfect harmony."
			}[day] || ''
		);
	}

	const today = new Date().toLocaleDateString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	const introChapter = {
		id: 'intro',
		introText: `Today is ${today}. ${getDayMessage()}`,
		outroText:
			'Would you like to do a lucky web surf? Follow your instincts and happy surfing ! :~)'
	};
</script>

<div class="flex justify-center text-xl">
	<div class="flex min-h-[80vh] max-w-[1024px] flex-col items-center justify-between gap-14">
		<div class="flex flex-col gap-10">
			<!-- <img src="goodluckspa.png" class="w-3/4" alt="good luck spa !! :-)" /> -->

			{#if phase >= PHASES.WELCOME}
				<Typewriter text="Ah ... welcome !" oncomplete={() => (phase = PHASES.INTRO)} />
			{/if}

			{#if phase >= PHASES.INTRO}
				<Typewriter text={introChapter.introText} oncomplete={() => (phase = PHASES.OUTRO)} />
			{/if}

			{#if phase >= PHASES.OUTRO}
				<Typewriter text={introChapter.outroText} oncomplete={() => (phase = PHASES.CONTINUE)} />
			{/if}
		</div>

		{#if phase >= PHASES.CONTINUE}
			<StarryButton label="Continue" onclick={onStart} />
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
