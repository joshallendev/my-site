<script lang=ts>
import { onMount } from "svelte";
const WEATHER_API_KEY: string = 'f4c1ec3679afbe574f2fce7d1b767ddf';

let zipData;
let userZip = '';


$: userZipData = null;
$: userCity = "";
$: userTemp = '';
$: userIcon = '';
$: userConditions = '';
$: userConditionsDesc = '';
$: currentZip = {};
$: randConditions = '';
$: randTemp = '';

function getRandomZip(): any {
    let data;
    const randomValue: number = Math.floor(Math.random() * zipData.length);
    data = zipData[randomValue];
    data.zip = data.zip.toString();
    data.zip = padZip(data.zip);
    currentZip = data;
}


async function fetchZipData() {
    const response = fetch('..//data/zipcodes.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            zipData = data;
            // set the initial random zip
            getRandomZip();
        });
}

function padZip(zip: string) {
    let stringZip: string = zip;
    while (stringZip.length < 5) {
        stringZip = '0' + stringZip;
    }
    return stringZip;
}


async function fetchWeatherData(zipcode: string): any {
    let parsedData;
    const weatherURL: string = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${WEATHER_API_KEY}`;
    console.log(weatherURL);
    let data: any = await fetch(weatherURL);
    console.log(data);
    if (!data.ok) {
        console.error('Request error: ' + data.status);
    } else {
        parsedData = await data.json();
    }
    return parsedData;
}

function handleClick(e): void {
    e.preventDefault();
    getRandomZip();
    fetchWeatherData(currentZip.zip)
      .then(data => {
        randTemp = Math.ceil(data.main.temp).toString();
        randConditions = data.weather[0].main;
      });
    
}

function handleInput(): void {
  if (userZip.length < 5) { return }

  fetchWeatherData(userZip)
    .then((data) => {
      userCity = data.name; 
      userTemp = Math.ceil(data.main.temp).toString();
      userConditions = data.weather[0].main;
      userConditionsDesc = data.weather[0].description;
      userIcon = data.weather[0].icon;
      console.log(data)});
}



onMount(() => {
        fetchZipData();
})
</script>

<div id="weather-game" class="w-full h-screen flex flex-col">
  <div class="flex">
    <div class="p-4 w-1/3">
      <div class="h-full bg-platinum px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">YOUR ZIP CHOICE</h2>
        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{userCity.length > 0 ? userCity : 'No Zip Data Yet...'}</h1>
        <input type="text" maxlength="5" on:blur="{handleInput}" bind:value={userZip} placeholder="Pick a zip code...">
        <p class="leading-relaxed mb-3">{userTemp ? 'It is currently ' + userTemp + ' degrees.': ''}</p>
        <p class="leading-relaxed mb-3">{userConditions ? 'Current conditions: ' + userConditions : ''}</p>
        <!-- {#if userIcon.length > 0 }
          <p>
            <img src={'http://openweathermap.org/img/wn/' + userIcon + '@2x.png'} alt="{userConditionsDesc}">{userConditionsDesc}
          </p>
        {/if} -->
        <p id="user-status-msg" class="leading-relaxed mb-3"></p>
      </div>
    </div>
    <div class="p-4 w-1/3">
      <div class="h-full bg-platinum px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">RANDOM CHOICE</h2>
        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{currentZip.city + ', ' + currentZip.state_name}</h1>
        <p class="leading-relaxed mb-3">{randConditions ? 'Current conditions: ' + randConditions : ''}</p>
        <button class="bg-pink rounded p-2" on:click="{handleClick}">New Zip Code</button>
      </div>
    </div>
  </div>
    <p class="bg-platinum rounded">Featuring ZIP Code data provided by <a class="underline" 
        href="https://simplemaps.com/data/us-zips">https://simplemaps.com/data/us-zips</a></p>
</div>


 
<style>
#weather-game {
    background-image: url("..//thunderstorm.jpg");
    background-size: cover;
}
</style>