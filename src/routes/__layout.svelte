<script>
	import { page } from "$app/stores";
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	$: pageTitle = $page.url.pathname.substring(1);
</script>
<svelte:head>
	<title>Josh Allen | {!pageTitle ? 'Sofware Developer' : pageTitle[0].toUpperCase() + pageTitle.substring(1)}</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<Header />
<div class="flex flex-wrap flex-col md:flex-row items-center">
	<slot />
</div>
<Footer />


