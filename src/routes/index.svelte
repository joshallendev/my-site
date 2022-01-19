<script lang=ts>
  import About from '../components/About.svelte';
  import Skills from '../components/Skills.svelte';
  import Projects from '../components/Projects.svelte';
</script>

<section class="p-20 h-screen flex justify-center items-center bg-platinum w-full">
  <div class="my-10 flex justify-center items-center">
      <img class="mb-10 object-cover object-center rounded" width="400" height="400" alt="hero" src="https://dummyimage.com/200x200">
      <div>
        <h3 class="text-3xl font-bold ml-10">Hey, I'm <span class="text-electricindigo">Josh</span>.</h3>
        <h3 class="text-xl ml-10">I'm a developer, problem solver, and eager learner.</h3>
      </div>
  </div>
</section>

<About />
<Skills />
<Projects />