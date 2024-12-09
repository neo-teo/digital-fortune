<script lang="ts">
	// Generate random positions for the animation
	let positions = $state({
		below0: 85,
		above1: Math.random() * 20 + -5, // 0-20vh
		below1: Math.random() * 20 + 70, // 70-90
		above2: Math.random() * 20 + 0 // 10-30vh
	});
</script>

<img
	class="pip fixed right-[50px] w-[50px]"
	style=" --above1: {positions.above1}vh; 
			--below1: {positions.below1}vh;
			--above2: {positions.above2}vh;
			--below0: {positions.below0}vh;"
	src="pip.gif"
	alt="pip the duck doing his signature dance"
/>

<style>
	.pip {
		animation: yoyo 150s cubic-bezier(0.45, 0, 0.55, 1) infinite;
	}

	@keyframes yoyo {
		0% {
			transform: translateY(var(--below0));
		}
		25% {
			transform: translateY(var(--above1));
		}
		50% {
			transform: translateY(var(--below1));
		}
		75% {
			transform: translateY(var(--above2));
		}
		100% {
			transform: translateY(var(--below0));
		}
	}
</style>
