<script lang=ts>
  import About from '../components/About.svelte';
  import Skills from '../components/Skills.svelte';
  import Projects from '../components/Projects.svelte';
  import Contact from '../components/Contact.svelte';
</script>

<section id="home" class="p-20 h-screen flex justify-center items-center bg-platinum w-full">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hey, I'm <span class="text-pink">Josh</span></h1>
      <p class="mb-8 leading-relaxed">I'm a developer, problem solver, and eager learner.</p>
    </div>
  </div>
</section>

<About />
<Skills />
<Projects />
<Contact />