<script lang="ts">
	import Typewriter from './Typewriter.svelte';
	import StarryButton from './StarryButton.svelte';

	let { onStart = () => console.log('onStart ignored') } = $props();

	let showContinue = $state(false);

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

	const generateGuestId = () => {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		return Array.from({ length: 6 }, () =>
			chars.charAt(Math.floor(Math.random() * chars.length))
		).join('');
	};

	const script = [
		`Welcome guest #${generateGuestId()}`,
		`Today is ${today}`,
		getDayMessage(),
		'hello',
		'Would you like to do a lucky web surf?',
		'Follow your instincts and happy surfing ! :~)'
	];
</script>

<div class="flex flex-col gap-20">
	<Typewriter text={script.join('\n\n')} oncomplete={() => (showContinue = true)} />

	{#if showContinue}
		<StarryButton label="Continue" onclick={onStart} />
	{/if}
</div>

<style>
</style>
