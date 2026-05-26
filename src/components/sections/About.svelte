<script lang="ts">
	import SectionHeader from '../SectionHeader.svelte';
</script>

<section id="about" class="section">
	<div class="content-frame">
		<SectionHeader title="ABOUT" />
		<div class="about-grid">
			<div>
				<h2>A practical path into software, shaped by real problems.</h2>
			</div>
			<div class="about-copy body-copy">
				<p>
					I'm Josh — a backend software engineer who builds payments infrastructure for a living.
					I work mostly in Python and AWS, and I have a soft spot for serverless architectures and
					the kind of automation that quietly saves people hours every week.
				</p>
				<p>
					I didn't start out in software. I taught myself the basics through online courses and
					tutorials to solve a problem at work, got hooked, and in early 2021 my employer sent me
					through a formal coding bootcamp. I've been building ever since.
				</p>
				<p>
					Outside of work, you can find me listening to music, playing some video games with
					friends, or hiking somewhere in the Adirondacks.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.about-grid {
		display: grid;
		grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
		gap: clamp(2rem, 6vw, 5rem);
	}

	h2 {
		margin: 0;
		color: var(--text);
		font-size: clamp(2rem, 4vw, 3.6rem);
		font-weight: 800;
		letter-spacing: 0;
		line-height: 1.05;
	}

	.about-copy {
		display: grid;
		gap: 1.1rem;
	}

	.about-copy p {
		margin: 0;
	}

	@media (max-width: 780px) {
		.about-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
