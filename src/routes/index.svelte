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
      <img class="object-cover object-center rounded border border-cyan border-solid" width="300" height="300" alt="Josh Allen Profile" src="../static/img/joshallenprofile.jpeg">
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
<form method="POST" data-netlify-recaptcha="true" data-netlify="true" class="flex flex-wrap -m-2" name="contact-form">
  <div class="p-2 w-full">
  <div>
      <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
      <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
  </div>
  </div>
  <div class="p-2 w-full">
  <div>
      <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
      <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
  </div>
  </div>
  <div class="p-2 w-full">
  <div>
      <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
      <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
  </div>
  </div>
  <div data-netlify-recaptcha="true"></div>
  <div class="p-2 w-full">
      <button class="flex mx-auto text-richblackfogra border-0 py-2 px-8 focus:outline-none bg-cyan rounded text-lg hover:scale-105" type="submit">Send Message</button>
  </div>
  <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
  
  </div>
  
</form>
<style>
  
</style>