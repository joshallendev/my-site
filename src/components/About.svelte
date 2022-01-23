<script lang="ts">
    import SectionHeader from './SectionHeader.svelte';
</script>

<section id="about" class="px-10 py-10 w-full scroll-mt-20 bg-richblackfogra text-platinum">
    <SectionHeader title={"ABOUT"} borderColor="pink" />
    <div class="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center ">
        <div class="mb-10 md:mb-0">
        <img class="object-cover object-center rounded border border-pink border-solid" width="350" height="350" alt="Josh Allen" src=".//joshallennature.jpeg">
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <p class="mb-4 leading-relaxed">I'm Josh Allen, a Software Developer and Programmer. I started my career in development by teaching myself the basics using informal online courses and videos in order to solve a problem at my then-current job.</p>
        <p class="mb-4 leading-relaxed">This project helped to spark my interest in web development and programming. My employer selected me to take part in a formal coding bootcamp in early 2021, and have been working in development ever since.</p>
        <p class="mb-4 leading-relaxed">When I'm not coding, you can probably find me either listening to music, playing video games, or on the side of a mountain somewhere.</p>
        </div>
    </div>
</section>