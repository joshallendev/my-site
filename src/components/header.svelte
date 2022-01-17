<script lang="ts">
    import { page } from "$app/stores";

    const navLinks: {
        name: string,
        path: string
    } [] = [
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Projects',
            path: '/projects'
        },
        {
            name: 'Contact',
            path: '/contact'
        }
    ]
    const activePath:string = $page.url.pathname;
    const nonActiveLinkSyles:string = "mr-5 hover:text-jblue hover:font-bold";
    const activeLinkSyles:string = "mr-5 text-jblue font-bold";
</script>

<header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
            <span class="ml-3 text-xl text-jblue">Josh Allen</span>
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