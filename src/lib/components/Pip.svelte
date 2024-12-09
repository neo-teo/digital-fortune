<script>
	const verticalOffset = Math.floor(Math.random() * 401) - 200;
</script>

<img
	class="pip-entrance fixed top-1/2 w-[50px] -translate-y-1/2"
	style="--initial-offset: {verticalOffset}px"
	src="pip.gif"
	alt="pip the duck doing his signature dance"
/>

<style>
	.pip-entrance {
		animation: slide-in 20s ease-out forwards;
	}

	@keyframes slide-in {
		from {
			right: -50px;
			transform: translateY(calc(-50% + var(--initial-offset)));
		}
		to {
			right: 300px;
			transform: translateY(-50%);
		}
	}
</style>
