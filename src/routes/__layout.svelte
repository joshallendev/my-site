<script>
	import { page } from "$app/stores";
	import '../app.css';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';

	$: pageTitle = $page.url.pathname.substring(1);
</script>
<svelte:head>
	<title>Josh Allen | {!pageTitle ? 'Sofware Developer' : pageTitle[0].toUpperCase() + pageTitle.substring(1)}</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<Header />
<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
	<slot />
</div>
<Footer />


