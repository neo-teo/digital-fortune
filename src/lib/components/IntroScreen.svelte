<script lang="ts">
	import Typewriter from './Typewriter.svelte';
	import StarryButton from './StarryButton.svelte';

	let { onStart = () => console.log('onStart ignored') } = $props();

	let showContinue = $state(false);

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
		`${today} -- Today's binary streams are particularly clear.`,
		`Oh ... hey there ! Welcome guest #${generateGuestId()}`,
		'The internet is a vast digital wilderness, where hyperlink constellations light up the sky, underground pixel caves hide ancient forum treasures, and data streams flow through fiber-optic canyons.',
		'It can sometimes feel easy to get lost in it all.',
		'But not to worry! It seems like Pip the duck is here with us today to guide us through it!',
		'Would you like to follow Pip on a journey around the world wide web?',
		'Follow your instincts and happy surfing !'
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
