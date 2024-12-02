<script lang="ts">
	export let onclick: () => void;
	export let label: string;
</script>

<button class="continue-button" {onclick}> {label} </button>

<style lang="postcss">
	.continue-button {
		width: fit-content;
		padding: 0.5rem 1rem;
		cursor: pointer;
		border-radius: 0.25rem;
		border: 1px solid black;
	}

	.continue-button:hover {
		font-style: italic;
		background-color: black;
		color: white;
	}
</style>
