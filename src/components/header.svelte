<script lang="ts">
    import { page } from "$app/stores";
    import { onDestroy } from "svelte";

    const navLinks: {
        name: string,
        path: string
    } [] = [
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
            name: 'PROJECTS',
            path: '#projects'
        },
        {
            name: 'CONTACT',
            path: '#contact'
        }
    ]
    $: activePath = $page.url.pathname;
    const nonActiveLinkSyles:string = "ml-5";
    const activeLinkSyles:string = "ml-5 text-electricindigo font-semibold";

</script>

<header class="body-font fixed bg-platinum top-0 w-full">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center mb-4 md:mb-0" href="/">
            <span class="ml-3 text-xl">JOSH ALLEN</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {#each navLinks as navLink}
                {#if navLink.path === activePath}
                    <a href={navLink.path} class={activeLinkSyles}>{navLink.name}</a>
                {:else}
                    <a href={navLink.path} class={nonActiveLinkSyles}>{navLink.name}</a>
                {/if}
            {/each}
        </nav>
    </div>
</header>