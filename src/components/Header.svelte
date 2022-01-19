<script lang="ts">
    import { page } from "$app/stores";
    import { onDestroy } from "svelte";
import Footer from "./Footer.svelte";

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
    $: activeAnchor = 'HOME';
    const nonActiveLinkSyles:string = "nav-link mx-2";
    const activeLinkSyles:string = "nav-link mx-2 font-semibold border-b-4 border-cyan border-solid";

    function handleScroll(): void {
        const headerHeight:number = document.getElementById('header').getBoundingClientRect().height;
        const footerHeight:number = document.getElementById('footer').getBoundingClientRect().height;;
        const scrollPosition:number = scrollY + headerHeight;

        const allSections:HTMLCollectionOf<HTMLElement> = document.getElementsByTagName('section');
        for (let i = 0; i < allSections.length; i++) {
            const element:HTMLElement = allSections[i];
            const elementID = element.id;
            const elementOffsetTop:number = element.offsetTop - 100;
            const elementHeight:number = element.getBoundingClientRect().height;
            const elementOffsetBottom:number = element.offsetTop + elementHeight + footerHeight;

            if (scrollPosition > elementOffsetTop && scrollPosition < elementOffsetBottom) {
                activeAnchor = elementID.toUpperCase();
                console.log(elementID);
            } 
            console.log({
                elementID, scrollPosition, elementOffsetTop, elementOffsetBottom
            })
        }

        


    }

</script>
<svelte:window on:scroll={handleScroll}/>
<header id="header" class="body-font fixed bg-platinum w-full">
    <div class="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center mb-4 md:mb-0" href="/">
            <span class="ml-3 text-xl border-b-4 border-cyan border-solid">JOSH ALLEN</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {#each navLinks as navLink}
                <a href={navLink.path} class={navLink.name === activeAnchor ? activeLinkSyles : nonActiveLinkSyles}>{navLink.name}</a>
            {/each}
        </nav>
    </div>
</header>