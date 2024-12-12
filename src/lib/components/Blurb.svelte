<script lang="ts">
	import FortuneButton from './FortuneButton.svelte';

	let isOpen = $state(false);

	function closeBlurb() {
		isOpen = false;
	}
</script>

<FortuneButton
	label="?"
	onclick={() => (isOpen = true)}
	class="fixed bottom-20 right-8 items-center justify-center"
/>

{#if isOpen}
	<div role="dialog" class="fixed inset-0 flex items-center justify-center bg-black p-4 text-white">
		<div class="relative w-full max-w-4xl p-8">
			<div class="flex flex-col gap-4 text-center text-xl">
				<p>TLDR; bring back the old internet ¯\_(ツ)_/¯</p>
				<p></p>
				<p></p>
				<p>
					I’m currently on the M train heading to work. The signal is bouncing in and out of my
					phone making it tough to send an email (or particularly attach something to it) to a
					recruiter I’ve been speaking with.
				</p>
				<p>
					We just stopped on the tracks between Broadway Lafayette and W4. As I look around me see a
					lot of people on the train are not on their phone. I see some books, some closed eyes,
					some conversations.
				</p>
				<p>
					This felt unlike the New York subway I've experienced. I often think about what the subway
					used to be like before smart phones. Come to think of it usage might be low at this
					particular moment because we have no signal…
				</p>
				<p>
					Digital experiences have been made to keep our attention “infinitely”. The web, and
					everything else I suppose should have a specific time frame and use case.
				</p>
				<p>
					How do we recreate spontaneity on the web ? How do we recreate serendipity ? What are the
					digital spaces that we choose to participate in ?
				</p>
				<p></p>
				<p></p>
				<p>
					Pip the Duck is a web exploration tool by <a
						class="text-blue-500 underline decoration-wavy"
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.teo.fyi">Teo</a
					> as a little experiment in the process of answering some of the questions above.
				</p>
			</div>

			<FortuneButton
				label="?"
				onclick={() => (isOpen = false)}
				class="fixed bottom-20 right-8 items-center justify-center bg-white text-black"
			/>
		</div>
	</div>
{/if}
