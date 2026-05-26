<script lang="ts">
	import About from '../components/sections/About.svelte';
	import Skills from '../components/sections/Skills.svelte';
	import Contact from '../components/sections/Contact.svelte';
	import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<title>Josh Allen | Software Engineer</title>
	<meta
		name="description"
		content="Josh Allen's software development portfolio, skills, and contact information."
	/>
</svelte:head>

<Header />
<section id="home" class="hero section">
	<div class="content-frame hero-grid">
		<div class="hero-copy">
			<p class="eyebrow">Software Engineer</p>
			<h1>Building useful software for real-world work.</h1>
			<p class="body-copy">
				I'm Josh, an engineer focused on clean interfaces, practical problem solving, and
				maintainable systems.
			</p>
			<div class="hero-actions" aria-label="Primary actions">
				<a class="primary-action" href="#contact">Contact me</a>
				<a class="secondary-action" href="#about">More about me</a>
			</div>
		</div>
		<div class="portrait-wrap">
			<img
				class="portrait"
				width="400"
				height="400"
				alt="Josh Allen"
				src="/joshallenprofile.png"
			/>
		</div>
	</div>
</section>

<About />
<Skills />
<Contact />

<style>
	.hero {
		display: flex;
		align-items: center;
		min-height: calc(100vh - 72px);
		padding-top: 6rem;
	}

	.hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 320px;
		align-items: center;
		gap: clamp(3rem, 8vw, 7rem);
	}

	.hero-copy {
		max-width: 720px;
	}

	h1 {
		max-width: 780px;
		margin: 0 0 1.4rem;
		color: var(--text);
		font-size: clamp(3rem, 7vw, 5.8rem);
		font-weight: 800;
		letter-spacing: 0;
		line-height: 0.98;
	}

	.hero-copy .body-copy {
		max-width: 590px;
		font-size: 1.22rem;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.85rem;
		margin-top: 2.2rem;
	}

	.primary-action,
	.secondary-action {
		border-radius: 999px;
		font-weight: 800;
		text-decoration: none;
		transition:
			background-color 160ms ease,
			border-color 160ms ease,
			color 160ms ease,
			transform 160ms ease;
	}

	.primary-action {
		background: var(--text);
		color: var(--bg);
		padding: 0.9rem 1.25rem;
	}

	.secondary-action {
		border: 1px solid var(--border);
		color: var(--text);
		padding: calc(0.9rem - 1px) 1.25rem;
	}

	.primary-action:hover,
	.secondary-action:hover {
		transform: translateY(-1px);
	}

	.secondary-action:hover {
		border-color: var(--accent);
		color: var(--accent-strong);
	}

	.portrait-wrap {
		justify-self: end;
	}

	.portrait {
		display: block;
		width: min(320px, 100%);
		aspect-ratio: 1;
		border: 1px solid var(--border);
		border-radius: 50%;
		box-shadow: var(--shadow);
		object-fit: cover;
		object-position: center;
	}

	@media (max-width: 820px) {
		.hero {
			min-height: auto;
			padding-top: 4rem;
		}

		.hero-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.portrait-wrap {
			justify-self: start;
			order: -1;
		}

		.portrait {
			width: 180px;
		}
	}
</style>
