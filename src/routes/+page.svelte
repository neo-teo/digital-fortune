<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const { nyc_data } = data;

	import { radio_data } from '$lib/data/radio_data';
	import { onMount } from 'svelte';

	import Card from '$lib/components/Card.svelte';
	import FortuneRadio from '$lib/components/FortuneRadio.svelte';
	import Typewriter from '$lib/components/Typewriter.svelte';

	const fortune_radio_url = radio_data[0].url;
	let userAgent = '';

	onMount(() => {
		userAgent = window.navigator.userAgent;
	});

	const today = new Date().toLocaleDateString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

{#snippet cards()}
	{#each nyc_data as { title, src, label, cover }}
		{#snippet card_front()}
			<div class="flex h-full flex-col items-center justify-between">
				{#if cover}
					<img src={cover} alt={`${title}`} />
				{:else}
					<img src={'fruit/orange.png'} alt="orange lol" />
				{/if}
				<h2>{title}</h2>
			</div>
		{/snippet}

		{#snippet card_back()}
			<div class="flex h-full flex-col justify-between py-5">
				<h2>{title}</h2>

				<div class="flex flex-col items-center gap-2">
					<img {src} alt={`${title}`} />
					{#if label}
						<p>{label}</p>
					{/if}
				</div>
			</div>
		{/snippet}

		<Card front={card_front} back={card_back} />
	{/each}
{/snippet}

<div class="flex justify-center">
	<div class="flex max-w-[1024px] flex-col gap-5 px-20">
		<h1 class="h-[150px] text-4xl">
			<Typewriter text="Today is {today}" speed={100} />
			<br />
			<br />
			<Typewriter text="Have a nice day!" speed={100} delay={4000} />
		</h1>
		<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
			{@render cards()}
		</div>

		<FortuneRadio url={fortune_radio_url} />
	</div>
</div>

<style lang="postcss">
	/* h1 {
		text-align: center;
	} */
	h2 {
		font-size: large;
	}
</style>
