<script lang="ts">
	const currentYear: number = new Date().getFullYear();

	const links = [
		{
			name: 'GitHub',
			url: 'https://github.com/joshallendev'
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/joshallendev'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/joshallendev/'
		}
	];
</script>

<footer id="footer">
	<div class="content-frame footer-inner">
		<p>© {currentYear} Josh Allen</p>
		<nav aria-label="Social links">
			{#each links as link}
				<a href={link.url}>{link.name}</a>
			{/each}
		</nav>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--border);
		color: var(--muted);
	}

	.footer-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.5rem 0;
	}

	p {
		margin: 0;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	a {
		color: var(--muted);
		font-weight: 700;
		text-decoration: none;
		transition: color 160ms ease;
	}

	a:hover {
		color: var(--text);
	}

	@media (max-width: 560px) {
		.footer-inner {
			align-items: flex-start;
			flex-direction: column;
		}
	}
</style>
