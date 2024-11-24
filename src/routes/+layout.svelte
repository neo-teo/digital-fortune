<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

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
