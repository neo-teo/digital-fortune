<script lang="ts">
	let { onclick, label } = $props();

	let hovered = $state(false);
	let sparkles: { x: number; y: number; id: number; c: string }[] = $state([]);
	let nextId = 0;

	function getRandomPosition(element: HTMLElement) {
		const rect = element.getBoundingClientRect();
		let x = Math.random() * rect.width;
		let y = Math.random() * rect.height;
		return { x, y };
	}

	let sparkleInterval: NodeJS.Timeout;
	let buttonElement: HTMLElement;

	$effect(() => {
		if (hovered) {
			sparkleInterval = setInterval(() => {
				const pos = getRandomPosition(buttonElement);
				sparkles = [
					...sparkles,
					{
						x: pos.x,
						y: pos.y,
						id: nextId++,
						c: '✨'
					}
				].slice(-20);
			}, 200);
		} else {
			clearInterval(sparkleInterval);
			sparkles = [];
		}

		return () => clearInterval(sparkleInterval);
	});
</script>

<div class="relative">
	<button
		bind:this={buttonElement}
		class="continue-button"
		{onclick}
		onmouseenter={() => (hovered = true)}
		onmouseleave={() => (hovered = false)}
	>
		{label}
	</button>

	{#each sparkles as sparkle (sparkle.id)}
		<div class="pointer-events-none absolute" style="left: {sparkle.x}px; top: {sparkle.y}px;">
			<span class="animate-sparkle text-xl">{sparkle.c}</span>
		</div>
	{/each}
</div>

<style lang="postcss">
	.continue-button {
		width: fit-content;
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

	.animate-sparkle {
		display: inline-block;
		z-index: 10;
		animation: float-up 3000ms ease-out forwards;
	}

	@keyframes float-up {
		0% {
			transform: translate(0, 0) scale(1);
			opacity: 1;
		}
		100% {
			transform: translate(0, -20px) scale(0.8);
			opacity: 0;
		}
	}
</style>
