<script lang="ts">
    import SectionHeader from './SectionHeader.svelte';
</script>

<section class="p-20 w-full">
    <SectionHeader id={"about"} title={"ABOUT"} />
    <div class="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center ">
      <div class="mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/200x200">
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <p class="mb-4 leading-relaxed">I'm Josh Allen, a Software Developer and Programmer living in Upstate NY. I started my career in development by teaching myself the basics using informal online courses and videos in order to solve a problem at my then-current job.</p>
        <p class="mb-4 leading-relaxed">This project helped to spark my interest in web development and programming. I was lucky enough to be invited by my employer to take part in a formal coding bootcamp in early 2021, and have been working in development ever since.</p>
      </div>
    </div>
  </section>