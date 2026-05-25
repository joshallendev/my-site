<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title>Josh Allen | Software Developer</title>
</svelte:head>

<div class="site-shell">
	<slot></slot>
	<Footer />
</div>
