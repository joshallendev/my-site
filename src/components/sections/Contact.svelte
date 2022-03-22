<script lang=ts>
    import SectionHeader from '../SectionHeader.svelte';
    

    const handleSubmit = (e) => {
        e.preventDefault();
        let myForm = document.getElementById("contact-form");
        let formData = new FormData(myForm);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
    };
</script>

<section id="contact" class="px-10 pt-10 pb-20 bg-richblackfogra text-platinum w-full scroll-mt-22">
    <SectionHeader title={"CONTACT"} borderColor="cyan"/>
    <div class="container px-5 py-8 mx-auto">
        <div class="flex flex-col text-center w-full mb-4">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Let's chat!</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">I'd love to help you build something great.</p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <form 
            method="POST" 
            data-netlify="true" 
            id="contact-form" 
            class="flex flex-wrap -m-2" 
            name="contact"
            netlify-honeypot="bot-field">
            <p class="invisible">
                <label>
                    Might be a trick who knows <input name="bot-field" />
                </label>
                </p>
            <div class="p-2 w-full">
            <div>
                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                <input required type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            </div>
            <div class="p-2 w-full">
            <div>
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input required type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            </div>
            <div class="p-2 w-full">
            <div>
                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                <textarea required id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            </div>
            <div class="p-2 w-full">
                <button on:submit={handleSubmit} class="flex mx-auto text-richblackfogra border-0 py-2 px-8 focus:outline-none bg-cyan rounded text-lg hover:scale-105" type="submit">Send Message</button>
            </div>
            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            
            </div>
            <input type="hidden" name="form-name" value="contact">
        </form>
        </div>
    </div>
</section>
