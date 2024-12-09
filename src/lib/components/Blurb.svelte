<script lang="ts">
	import FortuneButton from './FortuneButton.svelte';

	let isOpen = $state(false);

	function closeBlurb() {
		isOpen = false;
	}
</script>

<FortuneButton
	label="?"
	onclick={() => (isOpen = true)}
	class="fixed bottom-20 right-8 items-center justify-center rounded-full"
/>

{#if isOpen}
	<div role="dialog" class="fixed inset-0 flex items-center justify-center bg-white/90 p-4">
		<div class="relative w-full max-w-2xl rounded-lg p-8 [font-family:Times]">
			<div class="flex flex-col gap-4 text-center text-xl">
				<h2 class="text-4xl italic">A website that offers a daily fortune.</h2>
				<p>Digital fortune is meant to be consumed like a digital fortune cookie.</p>
				<p>
					It is an ode to a simpler internet. When Google encouraged users to "Feel Lucky", when the
					lovecalculator.com felt like magic, when "all your friends were on all at once".
				</p>
				<p>
					The flow and structure of our online experiences is increasingly the result of calculated,
					algorithmic readings on our data. We breathe in targeted advertising breathe out
					"algorithmic" feeds.
				</p>
				<p>
					Digital fortune is meant to make the world wide web a space with more chance occurences.
					It is a fortuitous reading of the user, with no intent of storing any data for future use,
					no AI, no tracking.
				</p>
				<p>Recommendations don't have to be perfect for them to be perfect.</p>
				<p>Digital fortune is an open source fortuitous recommendation tool.</p>
			</div>

			<button
				class="fixed inset-0 z-10 h-full w-full opacity-0"
				onclick={closeBlurb}
				aria-hidden="true"
			></button>
		</div>
	</div>
{/if}
