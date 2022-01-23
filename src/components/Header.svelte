<script lang="ts">
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
        const vh:number = innerHeight;
        const scrollTop:number = scrollY + headerHeight;
        const scrollBottom = scrollTop + vh;

        const allSections:HTMLCollectionOf<HTMLElement> = document.getElementsByTagName('section');
        let currentElementPctVisible: any = {elementID: '', pctVisible: 0};

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
                    pctVisible = Math.round((scrollBottom - elementOffsetTop) / elementHeight * 100);
                }
            } else if (elementOffsetBottom > screenTop) {
                // partial top visibility 
                pctVisible = Math.round((elementOffsetBottom - scrollTop) / elementHeight * 100);
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
<header id="header" class="body-font fixed bg-richblackfogra w-full text-platinum">
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