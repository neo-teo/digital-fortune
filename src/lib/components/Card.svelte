<script lang="ts">
	import { onMount } from 'svelte';
	let { title, number, children, variant = 'square' } = $props();

	let windowWidth = $state(1000);

	onMount(() => {
		windowWidth = window.innerWidth;
		const handleResize = () => {
			windowWidth = window.innerWidth;
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	let gridElWidth = $derived(
		windowWidth >= 1024
			? 1024 / 3 // lg breakpoint (3 cols)
			: windowWidth / 2 // mobile (1 col)
	);

	const variants = $derived({
		shortsquare: { width: gridElWidth, height: gridElWidth / 2 },
		square: { width: gridElWidth, height: gridElWidth },
		long: { width: windowWidth > 1024 ? 1024 : windowWidth, height: 130 },
		icon: { width: 50, height: 50 }
	});

	let size = $derived(variants[variant as 'shortsquare' | 'square' | 'long' | 'icon']);

	let edgePosition = $derived({
		x: size.width - 5,
		y: size.height - 5
	});

	function padToThreeDigits(num: number): string {
		return num.toString().padStart(3, '0');
	}

	let flipped = $state(false);

	function toggleCard() {
		flipped = !flipped;
	}
</script>

<div class="card-container">
	<button onclick={() => toggleCard()}>
		<div
			style:transform={flipped ? 'rotate3d(1, 0, 0, 180deg)' : ''}
			style:width="{size.width}px"
			style:height="{size.height}px"
			class="card"
		>
			<div class="face front">
				<h2>{title} {padToThreeDigits(number)}</h2>
			</div>
			<div class="face back">
				{@render children()}
			</div>
			<div class="face top"></div>
			<div
				class="face bottom"
				style:transform="translateY({edgePosition.y}px) rotateX(-90deg)"
			></div>
			<div class="face left"></div>
			<div class="face right" style:transform="translateX({edgePosition.x}px) rotateY(90deg)"></div>
		</div>
	</button>
</div>

<style lang="postcss">
	* {
		font-family: Bianzhidai;
	}

	h2 {
		font-size: xx-large;
	}

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

	.face {
		position: absolute;
		width: 100%;
		height: 100%;
		background: blue;

		backface-visibility: hidden;

		color: black;

		opacity: 1;
		border: 1px solid black;

		overflow: hidden;
	}

	/* .face.front {
		background-image: url('/cards/1.png');
		background-size: cover;
	} */

	.face.front,
	.face.back {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;

		background: rgb(255, 255, 255, 1);
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
		transform: scale(1.05);
	}

	/* .card-container .card:hover {
		transform: scale(1.05);
	} */

	.front {
		transform: translateZ(5px);
	}

	.back {
		transform: translateZ(-5px) rotateZ(180deg) rotateY(180deg);
	}

	.left {
		transform: translateX(-5px) rotateY(-90deg);
	}

	.top {
		transform: translateY(-5px) rotateX(90deg);
	}
</style>
