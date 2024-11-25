<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-gradient-to-b from-orange-400 to-orange-100 py-10">
	{@render children()}
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
</style>
