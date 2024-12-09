<script lang="ts">
	import Typewriter from './Typewriter.svelte';
	import Pip from './Pip.svelte';
	import FortuneButton from './FortuneButton.svelte';

	let { onStart = () => console.log('onStart ignored'), disabled = false } = $props();

	let showContinue = $state(false);
	let showPip = $state(false);
	let currentDisplayText = $state('');

	const today = new Date().toLocaleDateString('en-US', {
		weekday: 'long'
		// year: 'numeric',
		// month: 'long',
		// day: 'numeric'
	});

	const generateGuestId = () => {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		return Array.from({ length: 6 }, () =>
			chars.charAt(Math.floor(Math.random() * chars.length))
		).join('');
	};

	const script = [
		`#${generateGuestId()} -- It seems like the binary streams are particularly clear this ${today}.`,
		`Oh ... hey there ! Welcome guest.`,
		'The internet is a vast digital wilderness, where hyperlink constellations light up the sky, underground pixel caves hide ancient treasures, and data streams flow through fiber-optic canyons.',
		'It can sometimes feel easy to get lost in it all.',
		'But today is a good day! It seems like Pip the duck is here to guide us through it! Pip is unmistakeable by his signature dance.',
		'Would you like to follow Pip on a journey around the world wide web?',
		'Just follow your instincts and happy surfing !'
	];

	$effect(() => {
		if (currentDisplayText.includes('Pip')) {
			showPip = true;
		}
	});
</script>

<div class="flex flex-col gap-20">
	<Typewriter
		text={script.join('\n\n')}
		oncomplete={() => (showContinue = true)}
		bind:displayText={currentDisplayText}
	/>

	{#if showContinue}
		<FortuneButton label="Continue" onclick={onStart} {disabled} />
	{/if}

	{#if showPip}
		<Pip />
	{/if}
</div>
