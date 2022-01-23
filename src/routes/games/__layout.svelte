<script lang="ts">
import { goto } from "$app/navigation";

import { onMount } from "svelte";


    function handleClick() {
        goto('/');
    }

    onMount(() => console.log(history));
</script>

<header id="header" class="body-font fixed top-0 bg-richblackfogra w-full text-platinum">
    <div class="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
        <button 
            on:click="{handleClick}"
            class="flex title-font font-medium items-center">
            <span class="ml-3 text-xl border-b-4 border-cyan border-solid">back to main site</span>
        </button>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        </nav>
    </div>
</header>
<slot></slot>