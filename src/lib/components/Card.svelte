<script lang="ts">
	let { front, back, variant = 'square', onFlip = () => {} } = $props();

	const variants = $derived({
		shortsquare: { width: 256, height: 256 / 2 },
		square: { width: 256, height: 256 * 1.5 },
		icon: { width: 50, height: 50 }
	});

	let size = $derived(variants[variant as 'shortsquare' | 'square' | 'icon']);

	let hovered = $state(false);
	let flipped = $state(false);

	let randomX = $state(0);
	let randomY = $state(0);

	function flipCard() {
		if (!flipped) {
			onFlip();
		}
		randomX = (Math.random() - 0.5) * 10;
		randomY = (Math.random() - 0.5) * 10;
		flipped = true;
	}

	let sparkles: { x: number; y: number; id: number; c: string }[] = $state([]);
	let nextId = 0;

	function getRandomPosition(width: number, height: number) {
		let x = Math.random() * width;
		let y = Math.random() * height;
		return { x, y };
	}

	let sparkleInterval: NodeJS.Timeout;

	$effect(() => {
		if (hovered && !flipped) {
			sparkleInterval = setInterval(() => {
				const pos = getRandomPosition(size.width, size.height);
				sparkles = [
					...sparkles,
					{
						x: pos.x,
						y: pos.y,
						id: nextId++,
						c: '✨'
					}
				].slice(-20);
			}, 200); // Create new sparkle every 100ms
		} else {
			clearInterval(sparkleInterval);
			sparkles = [];
		}

		return () => clearInterval(sparkleInterval);
	});
</script>

<div
	class="card-container relative overflow-visible"
	class:pulse-scale={hovered && !flipped}
	style:transform={`scale(${!hovered || flipped ? 1 : ''})`}
	role="presentation"
>
	<button
		onmouseenter={() => (hovered = true)}
		onmouseleave={() => (hovered = false)}
		onclick={flipCard}
	>
		<div
			style:transform={flipped
				? `rotate3d(0, 1, 0, 180deg) rotate3d(1, 0, 0, ${randomX}deg) rotate3d(0, 0, 1, ${randomY}deg)`
				: `rotate3d(1, 0, 0, 20deg)`}
			style:width="{size.width}px"
			style:height="{size.height}px"
			class="card"
		>
			<div class="face front">
				{@render front()}
			</div>
			<div class="face back">
				{@render back()}
			</div>
			<div class="face top"></div>
			<div class="face bottom" style:transform="rotateX(-90deg)"></div>
			<div class="face left"></div>
			<div class="face right" style:transform="rotateY(90deg)"></div>
		</div>
	</button>

	{#each sparkles as sparkle (sparkle.id)}
		<div class="pointer-events-none absolute" style="left: {sparkle.x}px; top: {sparkle.y}px;">
			<span class="animate-sparkle text-xl">{sparkle.c}</span>
		</div>
	{/each}
</div>

<style lang="postcss">
	button {
		width: fit-content;
	}

	.card-container {
		display: flex;
		align-items: center;
		justify-content: center;
		perspective: 500px;
		transition: transform 0.7s;
	}

	.card {
		position: relative;
		transform-style: preserve-3d;
		transition: transform 1.5s;
		/* transform: rotate3d(0, 0, 0, 90deg); */
	}

	.face.front img {
		border-radius: 10px;
		height: 90%;
	}

	.face {
		position: absolute;
		width: 100%;
		height: 100%;

		border-radius: 10px;

		backface-visibility: hidden;

		color: black;

		opacity: 1;

		overflow: hidden;
	}

	.face.front {
		padding: 5px;
		image-rendering: pixelated;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.face.front,
	.face.back {
		display: flex;
		align-items: center;
		justify-content: center;

		border: 1px solid gray;

		background: rgb(252, 251, 239);
	}

	.face.top,
	.face.bottom {
		margin-left: 0.5%;
		width: 100%;
		height: 10px;
	}

	.face.left,
	.face.right {
		margin-top: 0.5%;
		width: 10px;
		height: 100%;
	}

	.card-container:hover {
		z-index: 1;
	}

	.back {
		/* translateZ(-5px) */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transform: rotateY(180deg);
	}

	.left {
		transform: translateX(-5px) rotateY(-90deg);
	}

	.top {
		transform: translateY(-5px) rotateX(90deg);
	}

	.animate-sparkle {
		display: inline-block;
		z-index: 10;
		animation: float-up 3000ms ease-out;
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

	.pulse-scale {
		animation: pulse 1.5s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1.02);
		}
		50% {
			transform: scale(1.04);
		}
	}
</style>
