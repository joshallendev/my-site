<script lang=ts context=module>
   
</script>

<script lang=ts>
import { onMount } from "svelte";
import Particles from '../../components/Particles.svelte';
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

let zipData;
$: userZip = '';
$: userZipData = {};
$: userCity = "";
$: userTemp = '';
$: userIcon = '';
$: userConditions = '';
$: userConditionsDesc = '';
$: currentZip = {};
$: randConditions = '';
$: randConditionsDesc = '';
$: randIcon = '';
$: randTemp = '';
$: gameOver = false;
$: userWon = false;
$: userGuess = '';
$: tempCompare = 'false';

function getRandomZip(): any {
    let data;
    const randomValue: number = Math.floor(Math.random() * zipData.length);
    data = zipData[randomValue];
    data.zip = data.zip.toString();
    data.zip = padZip(data.zip);
    return data;
}


async function fetchZipData() {
    const response = await fetch('..//data/zipcodes.json')
        .then(response => response.json())
        .then(data => {
            zipData = data;
            // set the initial random zip
            currentZip = getRandomZip();
            randConditions = 'checking.....';
            fetchWeatherData(currentZip.zip);
        });
        return response;
}

function findZipAndState(zipCode: string) {
  const foundItem = zipData.find(element => {
    const paddedZip = padZip(element.zip);
    if (paddedZip === zipCode) {
      return element;
    }
  });
  return foundItem;
}


function padZip(zip: string) {
    let stringZip: string = zip;
    while (stringZip.length < 5) {
        stringZip = '0' + stringZip;
    }
    return stringZip;
}

function updateWeatherData(weatherData: any): [string, string, string, string] {
  const temp: string = Math.ceil(weatherData.main.temp).toString();
  const conditions: string = weatherData.weather[0].main;
  const conditionsDesc = weatherData.weather[0].description;
  const descIcon = weatherData.weather[0].icon;
  return [temp, conditions, conditionsDesc, descIcon];
}


async function fetchWeatherData(zipcode: string): any {
    let parsedData;
    const weatherURL: string = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${WEATHER_API_KEY}`;
    let data: any = await fetch(weatherURL);
    if (!data.ok) {
        console.error('Request error: ' + data.status);
    } else {
        parsedData = await data.json();
    }
    return parsedData;
}

function handleRandomZip(e): void {
    e.preventDefault();
    currentZip = getRandomZip();
    fetchWeatherData(currentZip.zip)
      .then(data => {
        [randTemp, randConditions, randConditionsDesc, randIcon] = updateWeatherData(data);
      });
    
}

function handlePickForUser(e): void {
  e.preventDefault();
  userZip = getRandomZip().zip;
  userZipData = findZipAndState(userZip);
  handleInput();
}

function handleInput(): void {
  if (userZip.length < 5) { return }

  fetchWeatherData(userZip).then((data) => {
      userCity = data.name; 
      userZipData = findZipAndState(userZip);
      [userTemp, userConditions, userConditionsDesc, userIcon] = updateWeatherData(data);
  })
  .catch(error => {
    [userTemp, userConditions, userConditionsDesc, userIcon] = ['', '', '', ''];
    userCity = "We couldn't find that zip code. Try again?";
    userZip = '';
    console.error('Weather call failed' + error);
  });
}

function handleWarmerThan(e) {
  e.preventDefault();
  gameOver = true;
  userGuess = 'warmer';
  if (parseInt(userTemp) > parseInt(randTemp)) {
    userWon = true;
    tempCompare = 'warmer';    
  } else {
    tempCompare = 'colder';
  }
}

function handleColderThan(e) {
  e.preventDefault();
  gameOver = true;
  userGuess = 'colder';
  if (parseInt(userTemp) < parseInt(randTemp)) {
    userWon = true; 
    tempCompare = 'colder';
  } else {
    tempCompare = 'warmer';
  }
}

function handlePlayAgain() {
  userWon = false;
  tempCompare = '';
  gameOver = false;
  getRandomZip();
    fetchWeatherData(currentZip.zip)
      .then(data => {
        [randTemp, randConditions, randConditionsDesc, randIcon] = updateWeatherData(data);
      });
  
}



onMount(() => {
  fetchZipData()
    .then(data => {
      fetchWeatherData(currentZip.zip)
        .then(data => {
          [randTemp, randConditions, randConditionsDesc, randIcon] = updateWeatherData(data);
        });
    });
  
});
</script>
{#if userWon }
  <Particles particlesUrl="..//particles/confetti.json" />  
{/if}



<div id="weather-game" class="">

  <div class="pt-90 container mx-auto mb-20">
    {#if !gameOver }
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col md:flex-row flex-wrap text-center w-full">
          <div class="xl:w-1/2 md:w-1/2 p-4">
            <div class="p-6 rounded-lg bg-platinum">
              <h2 class="text-lg  font-medium font-bold mb-4">Pick Your Zip Code</h2>
              <h1 class="title-font sm:text-2xl text-xl font-medium  mb-3">{userZipData.city ? userZipData.zip + ': ' + userZipData.city + ', ' + userZipData.state_name : 'No Zip Data Yet...'}</h1>
              <p class="leading-relaxed mb-3">{userConditions ? 'Current conditions: ' + userConditions : 'Current conditions: '}</p>
              <p>
                <input type="search" class="text-center mb-3" maxlength="5" on:keyup="{handleInput}" bind:value={userZip} placeholder="Enter a zip code...">
                <button 
                class="bg-electricindigo text-platinum py-1 hover:font-bold px-4 outline-black rounded p-2" 
                on:click="{handlePickForUser}">Pick a Zip For Me</button>
              </p>
              
            </div>
          </div>
          <div class="xl:w-1/2 md:w-1/2 p-4">
            <div class="p-6 rounded-lg bg-platinum">
              <h2 class="text-lg  font-medium font-bold mb-4">Random Zip Code</h2>
              
              <h1 class="title-font sm:text-2xl text-xl font-medium  mb-3">{currentZip.city && currentZip.state_name ? currentZip.zip + ': ' + currentZip.city + ', ' + currentZip.state_name : 'No Random Zip Data Yet...'}</h1>

              <p class="leading-relaxed mb-3">{randConditions ? 'Current conditions: ' + randConditions : ''}</p>

              <button 
                class="bg-electricindigo text-platinum py-1 hover:font-bold px-4 roundedoutline outline-black rounded p-2"  
                on:click="{handleRandomZip}">New Random Zip Code</button>

            </div>
          </div>
          {#if userZip.length > 0 && userCity && currentZip.city && !gameOver }
          <div class="flex flex-col mx-auto bg-platinum p-5 rounded">
            <h1 class="text-4xl w-full">Make Your Guess!</h1>
            <button 
              class="bg-orangeyellow rounded m-2 w-full" 
              on:click="{handleWarmerThan}">{userCity + ' is WARMER than ' + currentZip.city}</button>
            <button 
              class="bg-skyblue rounded m-2 w-full"
              on:click="{handleColderThan}">{userCity + ' is COLDER than ' + currentZip.city}</button>          
          </div>
          {/if}
        </div>
      </div>
    {/if}

    
    {#if gameOver}
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap text-center">
          <div class="w-full p-4 bg-platinum">
            <h1 class="m-5 title-font text-xl">{userWon ? 'Congratulations! You guessed correctly.' : 'Sorry.. your guess was wrong. Better luck next time!'}</h1>
            <p>{`You guessed that ${userCity} was ${userGuess} than ${currentZip.city}.`}</p>
            <p class="m-5">{'It is currently '} 
              <span><b>{`${userTemp} degrees`}</b></span>
              {`in ${userCity} and `}
              <span><b>{`${randTemp} degrees`}</b></span>
              {` in ${currentZip.city}`}</p>
            <p class="m-5">{`${userCity} is `}
              <span class={tempCompare === 'warmer' ? "bg-orangeyellow rounded font-bold" : "bg-skyblue rounded font-bold"}>{tempCompare}</span>
              {`than ${currentZip.city}!`}</p>
            <button class="bg-lemonmeringue outline-1 outline-black rounded p-2" on:click="{handlePlayAgain}">Play Again?</button>
          </div>
        </div>
      </div>
    {/if}  
  </div>
  <div class="container items-center mb-25">
    <h1 class="bg-platinum rounded p-2 text-center w-3/4 mx-auto">Featuring ZIP Code data provided by 
      <a class="underline" href="https://simplemaps.com/data/us-zips">https://simplemaps.com/data/us-zips</a>
      as well as particles from 
      <a class="underline" href="https://www.npmjs.com/package/svelte-particles?activeTab=readme">svelte-particles</a>
      & 
      <a class="underline" href="https://github.com/matteobruni/tsparticles">tsParticles</a>
    </h1>
  </div>
</div>

<style>
#weather-game {
    background-image: linear-gradient(to right top, #e79ac6, #fe9ca7, #ffa888, #eebb74, #cbd076, #a6d987, #7cdfa3, #47e2c5, #00dcdc, #00d4ee, #2acaf9, #5fbefb);
}
</style>