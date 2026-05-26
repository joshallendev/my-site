<script lang="ts">
	import { onMount } from 'svelte';

	const navLinks: {
		name: string;
		path: string;
	}[] = [
		{
			name: 'HOME',
			path: '#'
		},
		{
			name: 'ABOUT',
			path: '#about'
		},
		{
			name: 'SKILLS',
			path: '#skills'
		},
		{
			name: 'CONTACT',
			path: '#contact'
		}
	];
	let header: HTMLElement;
	let activeAnchor = 'HOME';
	let theme: 'light' | 'dark' = 'light';
	const themeColors: Record<'light' | 'dark', string> = {
		light: '#f7f5f0',
		dark: '#111315'
	};
	type VisibleSection = {
		elementID: string;
		pctVisible: number;
	};

	function updateThemeColor(nextTheme: typeof theme): void {
		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute('content', themeColors[nextTheme]);
	}

	onMount(() => {
		theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
		document.documentElement.dataset.theme = theme;
		updateThemeColor(theme);
	});

	function toggleTheme(): void {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.classList.add('theme-transition');
		document.documentElement.dataset.theme = theme;
		updateThemeColor(theme);
		localStorage.setItem('theme', theme);
		window.setTimeout(() => {
			document.documentElement.classList.remove('theme-transition');
		}, 260);
	}

	function handleScroll(): void {
		const headerHeight: number = header?.getBoundingClientRect().height ?? 0;
		const vh: number = innerHeight;
		const scrollTop: number = scrollY + headerHeight;
		const scrollBottom = scrollTop + vh;

		const allSections: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName('section');
		let currentElementPctVisible: VisibleSection = { elementID: '', pctVisible: 0 };

		for (let i = 0; i < allSections.length; i++) {
			const element: HTMLElement = allSections[i];
			const elementID: string = element.id.toUpperCase();
			const elementHeight: number = element.getBoundingClientRect().height;
			const elementOffsetTop: number = element.offsetTop;
			const elementOffsetBottom: number = element.offsetTop + elementHeight;

			let pctVisible: number = 0;

			// if not visible at all set pct to zero
			if (scrollTop > elementOffsetBottom || elementOffsetTop > scrollBottom) {
				pctVisible = 0;
			} else if (elementOffsetTop > scrollTop) {
				// fully visible
				if (elementOffsetBottom < scrollBottom) {
					pctVisible = 100;
					// partial bottom visibility
				} else if (elementOffsetTop < scrollBottom) {
					pctVisible = Math.round(((scrollBottom - elementOffsetTop) / elementHeight) * 100);
				}
			} else if (elementOffsetBottom > scrollTop) {
				// partial top visibility
				pctVisible = Math.round(((elementOffsetBottom - scrollTop) / elementHeight) * 100);
			}
			// replace previously added element only if more pct is visible
			if (pctVisible > currentElementPctVisible.pctVisible) {
				currentElementPctVisible = { elementID, pctVisible };
			}
		}
		activeAnchor = currentElementPctVisible.elementID;
	}
</script>

<svelte:window on:scroll={handleScroll} />
<header bind:this={header} id="header" class="site-header">
	<div class="content-frame header-inner">
		<a class="brand" href="/">
			<span>Josh Allen</span>
		</a>
		<nav aria-label="Primary navigation" class="nav-links">
			{#each navLinks as navLink (navLink.path)}
				<a
					href={navLink.path}
					class:active={navLink.name === activeAnchor}
					aria-current={navLink.name === activeAnchor ? 'page' : undefined}
				>
					{navLink.name}
				</a>
			{/each}
		</nav>
		<button
			class="theme-toggle"
			type="button"
			on:click={toggleTheme}
			aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
		>
			<svg
				aria-hidden="true"
				class:visible={theme === 'dark'}
				class="theme-icon sun-icon"
				viewBox="0 0 24 24"
			>
				<circle cx="12" cy="12" r="4"></circle>
				<path d="M12 2v2"></path>
				<path d="M12 20v2"></path>
				<path d="m4.93 4.93 1.41 1.41"></path>
				<path d="m17.66 17.66 1.41 1.41"></path>
				<path d="M2 12h2"></path>
				<path d="M20 12h2"></path>
				<path d="m6.34 17.66-1.41 1.41"></path>
				<path d="m19.07 4.93-1.41 1.41"></path>
			</svg>
			<svg
				aria-hidden="true"
				class:visible={theme === 'light'}
				class="theme-icon moon-icon"
				viewBox="0 0 24 24"
			>
				<path d="M12 3a6 6 0 0 0 9 7.2A9 9 0 1 1 12 3Z"></path>
			</svg>
		</button>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 20;
		border-bottom: 1px solid color-mix(in srgb, var(--border) 78%, transparent);
		background: var(--bg);
	}

	.header-inner {
		display: grid;
		grid-template-columns: 1fr auto auto;
		align-items: center;
		gap: 1.25rem;
		min-height: 72px;
	}

	.brand {
		color: var(--text);
		font-size: 1.05rem;
		font-weight: 800;
		text-decoration: none;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 1rem;
		color: var(--muted);
		font-size: 0.82rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	.nav-links a {
		position: relative;
		text-decoration: none;
		transition: color 160ms ease;
	}

	.nav-links a:hover,
	.nav-links a.active {
		color: var(--text);
	}

	.nav-links a.active::after {
		position: absolute;
		right: 0;
		bottom: -0.42rem;
		left: 0;
		height: 2px;
		background: var(--accent);
		content: '';
	}

	.theme-toggle {
		position: relative;
		justify-self: end;
		display: grid;
		place-items: center;
		width: 2.35rem;
		height: 2.35rem;
		border: 1px solid var(--border);
		border-radius: 999px;
		background: var(--surface);
		color: var(--text);
		cursor: pointer;
		font: inherit;
		padding: 0;
		transition:
			border-color 160ms ease,
			background-color 160ms ease,
			color 160ms ease;
	}

	.theme-toggle:hover {
		border-color: var(--accent);
		color: var(--accent-strong);
	}

	.theme-toggle svg {
		position: absolute;
		width: 1.05rem;
		height: 1.05rem;
		fill: none;
		opacity: 0;
		stroke: currentColor;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 2;
		transform: scale(0.72) rotate(-28deg);
		transition:
			opacity 180ms ease,
			transform 220ms ease;
	}

	.theme-toggle svg.visible {
		opacity: 1;
		transform: scale(1) rotate(0deg);
	}

	.sun-icon {
		transform: scale(0.72) rotate(28deg);
	}

	@media (max-width: 720px) {
		.header-inner {
			grid-template-columns: 1fr auto;
			gap: 0.8rem;
			padding: 0.8rem 0;
		}

		.nav-links {
			grid-column: 1 / -1;
			grid-row: 2;
			justify-content: space-between;
			width: 100%;
			gap: 0.75rem;
			font-size: 0.78rem;
		}

		.theme-toggle {
			grid-column: 2;
			grid-row: 1;
		}
	}
</style>
