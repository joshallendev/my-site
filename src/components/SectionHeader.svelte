<script lang=ts>
    export let title:string;
    export let borderColor: string;
</script>

<h2 class={"text-2xl font-bold border-l-4 border-t-4 border-solid p-4 border-" + borderColor}>{title}</h2>

<style>
    h2 {
        scroll-margin-top: 80px;
        
    }
</style>