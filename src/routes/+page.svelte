<script>
	import { onMount } from 'svelte';

	let gifSrc = '/logos/loading.gif';
	let baseGif = 'logos/loop.gif';

	onMount(() => {
		setTimeout(() => (gifSrc = baseGif), 5000);
	});

	$: isHovering = gifSrc === 'logos/hovera.gif';
	// on:mouseenter={() => (gifSrc = 'logos/hovera.gif')}
	// on:mouseleave={() => (gifSrc = baseGif)}
</script>

<div class="flex h-screen flex-col items-center justify-between bg-white">
	<div>
		<img
			class="left-transparent min-w-[1000px] translate-x-1/4 {isHovering ? '-translate-y-3' : ''}"
			src={gifSrc}
			alt="logo"
			on:mouseenter={() => (gifSrc = 'logos/hover.gif')}
			on:mouseleave={() => (gifSrc = baseGif)}
		/>
		<img
			class="right-transparent mt-[-5%] min-w-[1000px] -translate-x-1/4 {isHovering
				? '-translate-y-3'
				: ''}"
			src={gifSrc}
			alt="logo"
			on:mouseenter={() => (gifSrc = 'logos/hover.gif')}
			on:mouseleave={() => (gifSrc = baseGif)}
		/>
	</div>

	<div class="">
		<img class="max-w-[400px]" src="/crystal_ball/body.gif" alt="logo" />
		<img class="max-w-[400px] -translate-y-2" src="/crystal_ball/base.png" alt="logo" />
	</div>
</div>

<style lang="postcss">
	.left-transparent {
		-webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 0) 45%);
		mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 0) 45%);
	}
	.right-transparent {
		-webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 50%);
		mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 50%);
	}
</style>
