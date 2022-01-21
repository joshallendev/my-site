<script type="ts">
    import Particles from "svelte-particles";
    export let particlesUrl: string;
  
    let onParticlesLoaded = (event) => {
      const particlesContainer = event.detail.particles;
  
      // you can use particlesContainer to call all the Container class
      // (from the core library) methods like play, pause, refresh, start, stop
    };
  
    let onParticlesInit = (main) => {
      // you can use main to customize the tsParticles instance adding presets or custom shapes
      
    };

  </script>
    
  <Particles
    id="tsparticles"
    url="{particlesUrl}"
    on:particlesLoaded="{onParticlesLoaded}"
    on:particlesInit="{onParticlesInit}"
  />