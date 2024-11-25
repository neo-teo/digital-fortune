<script lang="ts">
	import Card from './Card.svelte';

	export let number: number;
	export let url: string;
</script>

<Card variant="long" title={'radio'} {number}>
	<iframe
		title="soundcloud-player"
		width="100%"
		height="166"
		scrolling="no"
		frameborder="no"
		allow="autoplay"
		src={url}
	>
	</iframe>
</Card>

<style lang="postcss">
</style>
