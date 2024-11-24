<script lang="ts">
	export let piece: {
		title: string;
		number: number;
		src?: string;
		value?: string;
	};

	function padToThreeDigits(num: number): string {
		return num.toString().padStart(3, '0');
	}

	let flipped = false;

	function toggleCard() {
		flipped = !flipped;
	}
</script>

<div class="card-container">
	<button on:click={() => toggleCard()}>
		<div style:transform={flipped ? 'rotate3d(0, 1, 0, 180deg)' : ''} class="card">
			<div class="face front">
				<div class="flex flex-col items-start p-5">
					<h2>{piece.title.toUpperCase()}:</h2>
					<h2>{piece.title}:</h2>
					<br />
					<p>#{padToThreeDigits(piece.number)}</p>
				</div>
			</div>
			<div class="face back">
				<div class="flex flex-col items-start p-5">
					<!-- <h2>{piece.title.toUpperCase()} #{padToThreeDigits(piece.number)}</h2> -->
					{#if piece.src}
						<img class="image" src={piece.src} alt="piece src" />
					{:else if piece.value}
						<p>{piece.value}</p>
					{/if}
				</div>
			</div>
			<div class="face top"></div>
			<div class="face bottom"></div>
			<div class="face left"></div>
			<div class="face right"></div>
		</div>
	</button>
</div>

<style lang="postcss">
	button {
		width: fit-content;
	}

	.card-container {
		display: flex;
		align-items: center;
		justify-content: center;
		perspective: 3000px;
	}

	.card {
		width: 300px;
		height: 300px;

		position: relative;
		transform-style: preserve-3d;
		transition: transform 0.7s;
		transform: rotate3d(0, 0, 0, 90deg);
	}

	.face {
		position: absolute;
		width: 300px;
		height: 300px;
		background: rgb(2, 222, 9);
		color: black;

		opacity: 0.95;
		border-radius: 5px;

		overflow: hidden;
	}

	.face.front,
	.face.back {
		background: white;
	}

	.face.front {
		text-align: left;
	}

	.face.back {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.face.top,
	.face.bottom {
		margin-left: 0.5%;
		width: 99%;
		height: 10px;
	}

	.face.left,
	.face.right {
		margin-top: 0.5%;
		width: 10px;
		height: 99%;
	}

	.card-container .card:hover {
		transform: rotate3d(1, 1, 0, 20deg);
	}

	.front {
		transform: translateZ(5px);
	}

	.back {
		transform: translateZ(-5px) rotateY(180deg);
	}

	.left {
		transform: translateX(-5px) rotateY(-90deg);
	}

	.right {
		transform: translateX(295px) rotateY(90deg);
	}

	.top {
		transform: translateY(-5px) rotateX(90deg);
	}

	.bottom {
		transform: translateY(295px) rotateX(-90deg);
	}
</style>
