<script lang=ts>
  import About from '../components/about.svelte';
</script>

<section class="h-screen flex justify-center items-center">
  <div class="my-10 flex justify-center items-center">
      <img class="mb-10 object-cover object-center rounded" width="400" height="400" alt="hero" src="https://dummyimage.com/200x200">
      <div>
        <h3 class="text-3xl font-bold ml-10">Hey, I'm Josh.</h3>
        <h3 class="text-xl ml-10">I'm a developer and problem solver.</h3>
      </div>
  </div>
</section>

<About />