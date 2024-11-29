<script lang="ts">
	export let url: string;

	// You can switch between different NYC radio station streams
	// export let url: string = 'https://stream.wqxr.org/wqxr-web'; // WQXR Classical
	// Alternative URLs:
	// WNYC: https://stream.wnyc.org/wnycfm-web
	// Hot 97: https://player.listenlive.co/22151
</script>

<div class="fixed bottom-0 left-0 right-0 z-50 bg-white opacity-95">
	<p class="text-center text-xl">fortune radio</p>
	<iframe
		title="soundcloud-player"
		width="100%"
		height="100"
		scrolling="no"
		frameborder="no"
		allow="autoplay"
		src={url}
	>
	</iframe>
</div>

<style lang="postcss">
</style>
