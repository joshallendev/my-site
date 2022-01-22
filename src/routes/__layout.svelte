<script>
	import { page } from "$app/stores";
	import '../app.css';
	import Footer from '../components/Footer.svelte';

	$: pageTitle = $page.url.pathname.substring(1);
</script>
<svelte:head>
	<title>Josh Allen | {!pageTitle ? 'Sofware Developer' : pageTitle[0].toUpperCase() + pageTitle.substring(1)}</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>
	<slot></slot>
<Footer />


