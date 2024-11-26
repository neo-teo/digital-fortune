<script lang="ts">
	import '../app.css';
	let { children } = $props();

	let sparkles: { x: number; y: number; id: number; c: string }[] = $state([]);
	let nextId = 0;
	let lastSparkleTime = 0;
	const SPARKLE_INTERVAL = 20; // ms between sparkles
	const SPARKLE_EMOJIS = ['✨', '🎲', '🎰', '🍀', '🎴', '🔮', '🎋', '🪬', '🧧', '🪙', '🎊']; // Fortune-themed emojis

	function getRandomEmoji() {
		return '✨';
		return SPARKLE_EMOJIS[Math.floor(Math.random() * SPARKLE_EMOJIS.length)];
	}

	function handleMouseMove(event: MouseEvent) {
		const currentTime = Date.now();
		if (currentTime - lastSparkleTime < SPARKLE_INTERVAL) {
			return;
		}

		const { pageX, pageY } = event;
		sparkles = [...sparkles, { x: pageX, y: pageY, id: nextId++, c: getRandomEmoji() }].slice(-100);
		lastSparkleTime = currentTime;
	}
</script>

<div
	class="relative min-h-screen bg-gradient-to-b from-orange-400 to-orange-300 py-10"
	onmousemove={handleMouseMove}
	role="presentation"
>
	{@render children()}

	{#each sparkles as sparkle (sparkle.id)}
		<div class="pointer-events-none absolute" style="left: {sparkle.x}px; top: {sparkle.y}px;">
			<span class="animate-sparkle">{sparkle.c}</span>
		</div>
	{/each}
</div>

<style lang="postcss">
	@font-face {
		font-family: 'Bianzhidai';
		src: url('/fonts/bianzhidai_stitches.otf');
		src:
			local(''),
			url('/fonts/bianzhidai_stitches.eot?#iefix') format('embedded-opentype') /* IE6-IE8 */,
			url('/fonts/bianzhidai_stitches.woff2') format('woff2') /* Super Modern Browsers */,
			url('/fonts/bianzhidai_stitches.woff') format('woff') /* Modern Browsers */,
			url('/fonts/bianzhidai_stitches.otf') format('opentype') /* Safari, Android, iOS */,
			url('/fonts/bianzhidai_stitches.svg#Bianzhidai') format('svg'); /* Legacy iOS */
	}
	.animate-sparkle {
		display: inline-block;
		z-index: 10;
		animation: sparkle 1000ms ease-out forwards;
	}

	@keyframes sparkle {
		0% {
			transform: scale(1.2);
		}
		30% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(0);
		}
	}
</style>
