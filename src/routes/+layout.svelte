<script lang="ts">
	import '../app.css';
	let { children } = $props();

	// Add scroll to bottom functionality
	import { onMount } from 'svelte';

	onMount(() => {
		const observer = new ResizeObserver(() => {
			window.scrollTo({
				top: document.body.scrollHeight,
				behavior: 'smooth'
			});
		});

		observer.observe(document.body);

		return () => observer.disconnect();
	});
</script>

<div
	class="relative min-h-screen px-5 py-20"
	style="background: linear-gradient(to bottom, 
		white 0%,
		rgb(200 210 215) 50px,
		rgb(200 210 215) calc(100% - 50px),
		white 100%
	)"
>
	{@render children()}
</div>

<style lang="postcss">
	:global(body) {
		font-family: 'Terminal Grotesque', 'Times New Roman', serif;
		@apply text-3xl;
	}

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

	@font-face {
		font-family: 'Hershey';
		src: url('/fonts/hershey_italic2.ttf');
	}

	@font-face {
		font-family: 'Terminal Grotesque';
		src: url('/fonts/terminal-grotesque.ttf');
	}
</style>
