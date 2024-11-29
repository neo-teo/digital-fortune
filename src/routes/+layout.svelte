<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div
	class="relative min-h-screen py-20"
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
	* {
		font-family: Hershey;
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
		src: url('/fonts/hershey_italic.ttf');
	}
</style>
