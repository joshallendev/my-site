<script context="module">
    export const prerender = true;
</script>

<script lang=ts>
  import About from '../components/About.svelte';
  import Skills from '../components/Skills.svelte';
  import Projects from '../components/Projects.svelte';
  import Contact from '../components/Contact.svelte';
  import { onMount } from 'svelte';
  import Header from '../components/Header.svelte';
  
  

</script>

<Header />
<section id="home" class="px-10 py-20 h-screen flex justify-center items-center bg-richblackfogra w-full">
  <div class="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center ">
    <div class="mb-10 md:mb-0">
    <img class="object-cover object-center rounded border border-pink border-solid" width="400" height="400" alt="Josh Allen" src=".//joshallenprofile.jpeg">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <p class="mb-4 leading-relaxed text-6xl text-platinum">Hey there, I'm <span class="text-pink">Josh.</span></p>
      <p class="mb-4 leading-relaxed text-3xl text-platinum">A developer and
        <span class="underline decoration-cyan"> problem solver</span> that is passionate about creating clean, usable, 
        <span class="underline decoration-cyan">efficient solutions</span>.</p>
    </div>
  </div>
</section>

<About />
<Skills />
<Projects />
<Contact />
<style>
  
</style>