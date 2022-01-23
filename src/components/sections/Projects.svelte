<script lang="ts">
    import SectionHeader from '../SectionHeader.svelte';
    import Project, { projectDescription, projectImgURL, projectName, projectURL } from '../Project.svelte';
</script>

<section id="projects" class="px-10 py-10 w-full scroll-mt-20 bg-richblackfogra text-platinum">
    <SectionHeader title={"PROJECTS"} borderColor="pink"/>
      <div class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap">
          <Project 
            projectName={"Weather Higher/Lower Game"} 
            projectDescription={"The user is presented with a random USA Zip Code and can enter their own, or choose a random one. They then have to guess whether the weather in their ZIP Code is warmer or colder than the challenge ZIP Code. The weather data is provided by the OpenWeather API, and ZIP data is provided by a static file available from https://simplemaps.com/data/us-zips."}
            projectImgURL={"https://dummyimage.com/200x200"}
            projectURL={"/games/higherlowerweather"} />

          <Project 
            projectName={"SharePoint Communication Site"} 
            projectDescription={"As part of my work with Travelers Insurance, I created a custom communications site for Personal Insurance Customer Sales & Service. This site was built using vanilla JavaScript, HTML, and CSS. The backend data and images were housed within SharePoint lists, and accessed using the SharePoint JavaScript Object Model APIs."}
            projectImgURL={"https://dummyimage.com/200x200"} />
        </div>
      </div>
  </section>