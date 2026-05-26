<script lang="ts">
	import SectionHeader from '../SectionHeader.svelte';

	const skillGroups = [
		{
			title: 'Languages',
			items: ['HTML', 'JavaScript', 'CSS', 'Python']
		},
		{
			title: 'Frameworks',
			items: ['Angular', 'Svelte & SvelteKit', 'React']
		},
		{
			title: 'Tools',
			items: ['Git / GitHub', 'VS Code', 'Postman']
		}
	];
</script>

<section id="skills" class="section">
	<div class="content-frame">
		<SectionHeader title="SKILLS" />
		<div class="skills-intro">
			<div>
				<h2>Tools I reach for often.</h2>
				<p class="body-copy">
					A compact snapshot of the languages, frameworks, and tooling I use to build maintainable
					web experiences.
				</p>
			</div>
		</div>
		<div class="skill-grid">
			{#each skillGroups as group}
				<div class="skill-group">
					<h3>{group.title}</h3>
					<ul>
						{#each group.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<div class="details-grid">
			<div>
				<h3>Experience</h3>
				<dl>
					<div>
						<dt>Software Programmer</dt>
						<dd>2021 - Present | The Travelers Companies</dd>
					</div>
					<div>
						<dt>Business Analyst</dt>
						<dd>2017 - 2021 | The Travelers Companies</dd>
					</div>
				</dl>
			</div>
			<div>
				<h3>Certifications</h3>
				<dl>
					<div>
						<dt>CS50x - Introduction to Computer Science</dt>
						<dd>In Progress | HarvardX and edX</dd>
					</div>
					<div>
						<dt>Full Stack JavaScript Techdegree</dt>
						<dd>May 2021 | Treehouse</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</section>

<style>
	.skills-intro {
		margin-bottom: 2.2rem;
		max-width: 660px;
	}

	h2 {
		margin: 0;
		color: var(--text);
		font-size: clamp(2rem, 4vw, 3.4rem);
		font-weight: 800;
		letter-spacing: 0;
		line-height: 1.05;
	}

	.skills-intro p {
		margin: 1rem 0 0;
	}

	.skill-grid,
	.details-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
	}

	.details-grid {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		margin-top: 1rem;
	}

	.skill-group,
	.details-grid > div {
		border: 1px solid var(--border);
		border-radius: 8px;
		background: color-mix(in srgb, var(--surface) 86%, transparent);
		padding: 1.25rem;
	}

	h3 {
		margin: 0 0 1rem;
		color: var(--text);
		font-size: 0.85rem;
		font-weight: 800;
		letter-spacing: 0.07em;
		text-transform: uppercase;
	}

	ul,
	dl {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li,
	dd {
		color: var(--muted);
	}

	li + li,
	dl div + div {
		margin-top: 0.7rem;
	}

	dt {
		color: var(--text);
		font-weight: 800;
	}

	dd {
		margin: 0.15rem 0 0;
	}

	@media (max-width: 840px) {
		.skill-grid,
		.details-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
