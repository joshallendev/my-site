<script lang=ts>
	export let projectName: string;
	export let projectDescription: string;
	export let projectURL: string;
	export let projectImgURL: string;
</script>

<div class="p-4 md:w-1/2">
	<div class="h-full flex flex-col items-center text-center">
		<img 
			alt={projectImgURL ? "Project Image" : "No Image Available"} 
			class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" 
			src={ projectImgURL ? projectImgURL : "https://dummyimage.com/200x200" }>
		<div class="w-full">
			{#if projectURL }
					<a class="hover:font-bold text-cyan rounded" href="{projectURL}">
						<span class="title-font font-medium text-lg border-b-4 border-pink border-solid">{projectName}</span>
					</a>
			{:else}
				<span class="title-font font-medium text-lg border-b-4 border-pink border-solid">{projectName}</span>			
			{/if}
			<p class="mb-4 mt-4">{projectDescription}</p>
			{#if projectURL }
					<a class="hover:font-bold text-cyan rounded" href="{projectURL}">Check This Project Out</a>
			{/if}
		</div>
	</div>
</div>