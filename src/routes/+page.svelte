<script>
	let gifSrc = '/logos/loading_noloop.gif';
</script>

<div class="flex min-h-screen flex-col items-center justify-center pt-10">
	<div class="logo">
		<img class="left-transparent min-w-screen translate-x-1/4" src={gifSrc} alt="logo" />
		<img class="right-transparent min-w-screen mt-[-5%] -translate-x-1/4" src={gifSrc} alt="logo" />
	</div>
	<a href="/gimme" class="orb absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
		<img class="max-w-[400px]" src="/crystal_ball/body.gif" alt="logo" />
		<img class="max-w-[400px] -translate-y-2" src="/crystal_ball/base.png" alt="logo" />
	</a>
</div>

<style lang="postcss">
	@keyframes fadein {
		0% {
			opacity: 0;
		}
		90% {
			opacity: 0;
		}
		100% {
			opacity: 100%;
		}
	}

	.orb {
		animation: fadein 7s ease-in-out;
	}

	@keyframes moveup {
		0% {
			scale: 1;
			top: 25%;
		}
		75% {
			scale: 1;
			top: 25%;
		}
		100% {
			scale: 0.5;
			top: -15%;
		}
	}

	.logo {
		position: absolute;
		animation: moveup 7s ease-in-out forwards;
	}

	.left-transparent {
		-webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 0) 45%);
		mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 0) 45%);
	}
	.right-transparent {
		-webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 50%);
		mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 50%);
	}
</style>
