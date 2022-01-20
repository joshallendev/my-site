<script lang="ts">
    import SectionHeader from './SectionHeader.svelte';
</script>


<section id="skills" class="px-10 py-10 bg-platinum p-5 w-full scroll-mt-20">
    <SectionHeader title={"SKILLS"} borderColor="cyan"/>
    <div class="flex flex-wrap">
        <div class="lg:w-1/3 md:w-full px-8 py-6">
            <p class="font-medium">LANGUAGES</p>
            <ul class="sm:pl-8">
                <li class="my-4 title-font text-m">HTML</li>
                <li class="my-4 title-font text-m">JavaScript</li>
                <li class="my-4 title-font text-m">CSS</li>
                <li class="my-4 title-font text-m">Python</li>
            </ul>  
        </div>
        <div class="lg:w-1/3 md:w-full px-8 py-6">
            <p class="font-medium">FRAMEWORKS</p>
            <ul class="sm:pl-8">
                <li class="my-4 title-font text-m">Angular</li>
                <li class="my-4 title-font text-m">Svelte & SvelteKit</li>
                <li class="my-4 title-font text-m">React</li>
            </ul> 
        </div>
        <div class="lg:w-1/3 md:w-full px-8 py-6">
            <p class="font-medium">TOOLS</p>
            <ul class="sm:pl-8">
                <li class="my-4 title-font text-m">GIT / Github</li>
                <li class="my-4 title-font text-m">VS Code</li>
                <li class="my-4 title-font text-m">Postman</li>
                
            </ul> 
        </div>
        <div class="lg:w-1/2 md:w-full px-8 py-6">
            <p class="font-medium mb-4">PROFESSIONAL EXPERIENCE</p>
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font text-m">Software Programmer</h2>
            <h3 class="text-gray-500 mb-3">2021 - Present | The Travelers Companies</h3>
        </div>
        <div class="flex-grow sm:pl-8">
            <h2 class="title-font text-m">Business Analyst</h2>
            <h3 class="text-gray-500 mb-3">2017 - 2021 | The Travelers Companies</h3>
        </div>
        </div>
        <div class="lg:w-1/2 md:w-full px-8 py-6">
            <p class="font-medium mb-4">CERTIFICATIONS</p>
            <div class="flex-grow sm:pl-8">
                <h2 class="title-font text-m">CS50x - Introduction to Computer Science</h2>
                <h3 class="text-gray-500 mb-3">In Progress | HarvardX and edX</h3>
            </div>
            <div class="flex-grow sm:pl-8">
                <h2 class="title-font text-m">Full Stack JavaScript Techdegree</h2>
                <h3 class="text-gray-500 mb-3">May 2021 | Treehouse</h3>
            </div>  
        </div>
      </div>

</section>

<style>
    ul {
        list-style: none;
    }
    ul li::before,
    h2.title-font::before {
        content: "+ ";
        color: #ff33ee;
        font-weight: bold; 
        display: inline-block; 
        width: 1em; 
        margin-left: -1em; 
    }
</style>