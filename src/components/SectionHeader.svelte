<script lang=ts>
    export let title;
    export let id;
</script>

<h2 id={id} class="text-2xl font-bold border-l-4 border-electricindigo border-solid p-4">{title}</h2>

<style>
    h2 {
        scroll-margin-top: 40px;
    }
</style>