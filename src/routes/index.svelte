<script context="module">
    export const prerender = true;
</script>

<script lang=ts>
  import About from '../components/sections/About.svelte';
  import Skills from '../components/sections/Skills.svelte';
  import Projects from '../components/sections/Projects.svelte';
  import Contact from '../components/sections/Contact.svelte';
  import Header from '../components/Header.svelte';
  import ScrollNotify from '../components/ScrollNotify.svelte';
  import { onMount } from 'svelte';

  const words = ["developer","problem solver","music lover","programmer","coder","outdoor enthusiast","tech nerd"];
  let currentWord: number = 0;

  // function typeWriter () {
  //   const iAmSpan = document.getElementById('i-am');

  //   // move from last word to front of array again 
  //   if (currentWord === words.length ) {
  //     currentWord = 0;
  //   }

  //   const wordToType = words[currentWord];

  //   iAmSpan.innerText = wordToType;
  //   setTimeout(typeWriter, 2500);

  //   currentWord++;

  // }

  // onMount(() =>  {
  //   typeWriter();
  // })
</script>

<Header />
<section id="home" class="px-10 py-10 pt-10 h-screen flex justify-center items-center bg-richblackfogra w-full">
  <div class="container mx-auto flex md:flex-row flex-col items-center">
    <div class="md:mb-0">
    <img class="mt-20 object-cover object-center rounded border border-pink border-solid" width="400" height="400" alt="Josh Allen" src=".//joshallenprofile.jpeg">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <p class="mb-4 leading-relaxed text-4xl text-platinum">Hey there, I'm <span class="text-pink">Josh.</span></p>
      <div id="roller" class="text-3xl text-platinum">I'm a
        <span class="word text-cyan">developer</span>.
        <span class="word text-cyan">problem solver</span>.
        <span class="word text-cyan">music lover</span>.
        <span class="word text-cyan">coder</span>.
        <span class="word text-cyan">nature enthusiast</span>.
        <span class="word text-cyan">tech nerd</span>.
      </div>
    </div>
  </div>
</section>

<About />
<Skills />
<Projects />
<Contact />
<ScrollNotify />
<style>

</style>