<script lang=ts>
import { onMount } from "svelte/internal";


     function spinText(elemID: string): void {
        const elem = document.getElementById(elemID);
        console.log('spinning?');
        setInterval(() => {
            elem.style.transform += 'rotate(1deg)';
        }, 1);
     }

</script>
<div class="h-screen bg-electricindigo">
    <div class="flex flex-wrap -m-4">
        <div id="game" class="m-16 p-14 md:w-1/3 md: h-1/2 border border-black rounded bg-platinum">
            <div class="h-full flex flex-col items-center text-center">
              <div class="w-full">
                <p class="title-font font-medium text-lg border-b-4 border-pink border-solid mb-4">ROCK, PAPER, SCISSORS</p>
                <p class="mb-4">The classic hand game. Maybe you know it by rochambeau? Roshambo? Rock paper stone?.</p>
                <p>
                    <a class="hover:underline text-black font-bold" href="/games/rockpaperscissors">* Play Now *</a>
                </p>
              </div>
            </div>
        </div>
        <div id="game" class="m-16 p-14 md:w-1/3 md: h-1/2 border border-black rounded bg-platinum">
            <div class="h-full flex flex-col items-center text-center">
              <div class="w-full">
                <p class="title-font font-medium text-lg border-b-4 border-pink border-solid mb-4">SPINNER</p>
                <p class="mb-4">Need help making a decision? The wheel is here to help.</p>
                <p>
                    <a class="hover:underline text-black font-bold" href="/games/rockpaperscissors">* Play Now *</a>
                </p>
              </div>
            </div>
        </div>
        <div id="game" class="m-16 p-14 md:w-1/3 md: h-1/2 border border-black rounded bg-platinum">
            <div class="h-full flex flex-col items-center text-center">
              <div class="w-full">
                <p class="title-font font-medium text-lg border-b-4 border-pink border-solid mb-4">FLUTTERY FISH</p>
                <p class="mb-4">An absolutely original game that no one else has ever thought of and not a knock off of that one popular iOS game from a few years back.</p>
                <p>
                    <a class="hover:underline text-black font-bold" href="/games/rockpaperscissors">* Play Now *</a>
                </p>
              </div>
            </div>
        </div>
        <div id="game" class="m-16 p-14 md:w-1/3 md: h-1/2 border border-black rounded bg-platinum">
            <div class="h-full flex flex-col items-center text-center">
              <div class="w-full">
                <p class="title-font font-medium text-lg border-b-4 border-pink border-solid mb-4">HIGHER LOWER WEATHER</p>
                <p class="mb-4">Can you guess whether the temperature is higher or lower than where you are right now?</p>
                <p>
                    <a class="hover:underline text-black font-bold" href="/games/rockpaperscissors">* Play Now *</a>
                </p>
              </div>
            </div>
        </div>
    </div>
</div>
<style>

</style>