<script context="module">
    export const prerender = true;
</script>

<script lang=ts>
  import About from '../components/About.svelte';
  import Skills from '../components/Skills.svelte';
  import Projects from '../components/Projects.svelte';
  import Contact from '../components/Contact.svelte';
  import { onMount } from 'svelte';

  function typeText(text: string, elemID: string): void {

    const elem: HTMLElement = document.getElementById(elemID);
    elem.innerHTML = '';
    const stringToType: string = text;
    let i: number = 0;

    function typewriter() {
      if (i < stringToType.length) {
        document.getElementById('hello').innerHTML += stringToType.charAt(i);
        i++;
        setTimeout(typewriter, 150);
      }
    }

    typewriter();

    
  }


  onMount(() => {
    typeText(`Hey, I'm Josh!`, 'hello');
  });
</script>

<section id="home" class="px-10 py-20 h-screen flex justify-center items-center bg-platinum w-full">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded border border-cyan border-solid" width="300" height="300" alt="Josh Allen Profile" src="%svelte.assets%/joshallenprofile.jpeg">
    </div>
    <div class="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 id="hello" class="title-font sm:text-4xl text-3xl mb-4 font-medium bg-richblackfogra text-pink p-5 rounded"> </h1>
      <p class="mb-8 leading-relaxed">I'm a developer, problem solver, and eager learner.</p>
    </div>
  </div>
</section>

<About />
<Skills />
<Projects />
<Contact />
<style>
  
</style>