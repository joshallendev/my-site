<script context="module">
    export const prerender = true;
</script>

<script lang=ts>
  import About from '../components/sections/About.svelte';
  import Skills from '../components/sections/Skills.svelte';
  import Projects from '../components/sections/Projects.svelte';
  import Contact from '../components/sections/Contact.svelte';
  import Header from '../components/Header.svelte';
  import { onMount } from 'svelte';

  const words = ["developer","problem solver","music lover","programmer","coder","outdoor enthusiast","tech nerd"];
  let currentWordIndex: number = 0;
  $: currentWord = words[0];

  function wordplay(): void {
    const span: HTMLElement = document.getElementById('word-span');
    if (currentWordIndex === words.length) {
      currentWordIndex = 0;
    }
    currentWord = words[currentWordIndex];
    currentWordIndex++;
  }

  onMount(() => {
    setInterval(() => wordplay(), 3000)
  });

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
        <p id="word-span" class="test-class word text-cyan inline">{currentWord} <span class="blink text-white">|</span></p>
        <!-- <span class="word text-cyan">problem solver</span>.
        <span class="word text-cyan">music lover</span>.
        <span class="word text-cyan">coder</span>.
        <span class="word text-cyan">nature enthusiast</span>.
        <span class="word text-cyan">constant learner</span>.
        <span class="word text-cyan">tech nerd</span>. -->
      </div>
    </div>
  </div>
</section>

<About />
<Skills />
<Projects />
<Contact />

<style>
img:hover {
  animation: rotation 2s infinite forwards;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.blink {
  animation: blink 1s linear infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>