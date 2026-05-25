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
					I'm Josh Allen, a Software Engineer and life-long learner. I started my career in
					development by teaching myself the basics using informal online courses and videos in
					order to solve a problem at my then-current job.
				</p>
				<p>
					This project helped to spark my interest in web development and programming. My employer
					selected me to take part in a formal coding bootcamp in early 2021, and have been working
					in development ever since.
				</p>
				<p>
					When I'm not coding, you can probably find me either listening to music, playing video
					games, or on the side of a mountain somewhere.
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
