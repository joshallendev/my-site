<script lang=ts>
	export let projectName: string;
	export let projectDescription: string;
	export let projectURL: string | null;
	export let projectImgURL: string | null;
</script>

<div class="p-4 md:w-1/2">
	<div class="h-full flex flex-col items-center text-center">
		{#if projectImgURL }
			<img 
				alt={"Project Image"} 
				class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 border border-cyan border-solid" 
				src={ projectImgURL}>
		{:else}
			<div class="bg-platinum w-full h-56 rounded-lg mb-4 text-richblackfogra flex items-center border border-cyan border-solid">
				<span class="mx-auto">No Image Available</span>
			</div>
		{/if}
		
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