<script lang=ts>
    import SectionHeader from './SectionHeader.svelte';
</script>

<section id="contact" class="px-20 pt-10 pb-20 bg-platinum w-full scroll-mt-20">
    <SectionHeader title={"CONTACT"} />
    <div class="container px-5 py-8 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Let's chat!</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">I'd love to help you build something great.</p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <form method="POST" data-netlify-recaptcha="true" netlify class="flex flex-wrap -m-2" name="contact-form">
            <div class="p-2 w-full">
            <div>
                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            </div>
            <div class="p-2 w-full">
            <div>
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            </div>
            <div class="p-2 w-full">
            <div>
                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <div class="p-2 w-full">
                <button class="flex mx-auto text-richblackfogra border-0 py-2 px-8 focus:outline-none bg-cyan rounded text-lg hover:scale-105" type="submit">Send Message</button>
            </div>
            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            
            </div>
            
        </form>
        </div>
    </div>
    <form netlify method="POST" data-netlify-recaptcha="true">
        <input type="text" name="test"/>
        <div data-netlify-recaptcha="true"></div>
        <button type="submit">Submit</button>
    </form>
</section>
