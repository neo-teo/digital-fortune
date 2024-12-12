<script lang="ts">
	let { onclick, label, disabled = false, class: className = '' } = $props();

	let hovered = $state(false);
	let randomColor = $state('');
	let randomRotation = $state(0);

	let buttonElement: HTMLElement;

	function getRandomColor() {
		const primaryColors = [
			'#FF0000', // Red
			'#00FF00', // Green
			'#0000FF', // Blue
			'#FF00FF', // Magenta
			'#00FFFF' // Cyan
		];
		return primaryColors[Math.floor(Math.random() * primaryColors.length)];
	}

	function getRandomRotation() {
		return Math.random() * 20 - 10;
	}

	$effect(() => {
		if (hovered || disabled) {
			randomColor = getRandomColor();
			randomRotation = getRandomRotation();
		} else {
			randomColor = '';
			randomRotation = 0;
		}
	});
</script>

<div class={`${className} ${className.includes('fixed') ? '' : 'relative'}`}>
	<button
		bind:this={buttonElement}
		class="continue-button"
		style="background-color: {randomColor}; transform: rotate({randomRotation}deg);"
		onclick={disabled ? undefined : onclick}
		onmouseenter={() => (hovered = true)}
		onmouseleave={() => !disabled && (hovered = false)}
		{disabled}
	>
		{label}
	</button>
</div>

<style lang="postcss">
	.continue-button {
		width: fit-content;
		padding: 0.5rem 1rem;
		cursor: pointer;
		border: 1px solid black;
		transition: all 0.3s ease;
	}

	.continue-button:hover:not([disabled]),
	.continue-button[disabled] {
		color: white;
	}

	.continue-button[disabled] {
		cursor: default;
	}
</style>
