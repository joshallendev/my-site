<script lang="ts">
    import SectionHeader from '../SectionHeader.svelte';
    import Project from '../Project.svelte';
</script>

<section id="projects" class="px-10 py-10 w-full scroll-mt-20 bg-richblackfogra text-platinum">
    <SectionHeader title={"PROJECTS"} borderColor="pink"/>
      <div class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap">
          <Project 
            projectName={"WORDLOL"} 
            projectDescription={"WORDLOL is a League of Legends theme clone of the popular daily word game Wordle. It was created using Tailwind CSS and SvelteKit"}
            projectImgURL={".//weathergame.png"}
            projectURL={"playwordlol.com"} />

          <Project 
            projectName={"Weather Higher/Lower Game"} 
            projectDescription={"The user is presented with a random USA Zip Code and can enter their own, or choose a random one. They then have to guess whether the weather in their ZIP Code is warmer or colder than the challenge ZIP Code. The weather data is provided by the OpenWeather API, and ZIP data is provided by a static file available from https://simplemaps.com/data/us-zips."}
            projectImgURL={".//weathergame.png"}
            projectURL={"/games/higherlowerweather"} />

          <Project 
            projectName={"SharePoint Communication Site"} 
            projectDescription={"During my time with Travelers Insurance, I created a custom internal communications site for Personal Insurance Customer Sales & Service, using Microsoft SharePoint as the foundation. This site was built using vanilla JavaScript, HTML, and CSS. The backend data and images were housed within SharePoint lists, and accessed using the SharePoint JavaScript Object Model APIs."}
            projectImgURL={null} 
            projectURL={null}/>

          <Project 
            projectName={"joshallendev.com"} 
            projectDescription={"Yes, this very site! This is my personal developer portfolio. I built it using SvelteKit, and it is deployed/hosted on Netlify."}
            projectImgURL={".//thissite.png"}
            projectURL={"/"} />
        </div>
      </div>
  </section>