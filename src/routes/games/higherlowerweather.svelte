<script lang=ts>
import { onMount } from "svelte";
import Particles from '../../components/Particles.svelte';
const WEATHER_API_KEY: string = 'f4c1ec3679afbe574f2fce7d1b767ddf';

let zipData;
$: userZip = '';
$: userZipData = null;
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
            console.log(data);
            zipData = data;
            // set the initial random zip
            currentZip = getRandomZip();
            randConditions = 'checking.....';
            fetchWeatherData(currentZip.zip);
        });
        return response;
}



function padZip(zip: string) {
    let stringZip: string = zip;
    while (stringZip.length < 5) {
        stringZip = '0' + stringZip;
    }
    return stringZip;
}

function updateWeatherData(weatherData: any): [string, string, string, string] {
  console.log(weatherData);
  const temp: string = Math.ceil(weatherData.main.temp).toString();
  const conditions: string = weatherData.weather[0].main;
  const conditionsDesc = weatherData.weather[0].description;
  const descIcon = weatherData.weather[0].icon;
  return [temp, conditions, conditionsDesc, descIcon];
}


async function fetchWeatherData(zipcode: string): any {
    let parsedData;
    const weatherURL: string = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${WEATHER_API_KEY}`;
    console.log(weatherURL);
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
  handleInput();
}

function handleInput(): void {
  if (userZip.length < 5) { return }
  console.log(Object.keys(zipData).filter(zip => zipData['zip'] === '12845'));
  const foundZip = zipData.find(item => padZip(item.zip) === userZip);
  console.log(foundZip);

  fetchWeatherData(userZip).then((data) => {
      userCity = data.name; 
      [userTemp, userConditions, userConditionsDesc, userIcon] = updateWeatherData(data);
  })
  .catch(error => {
    [userTemp, userConditions, userConditionsDesc, userIcon] = ['', '', '', ''];
    userCity = "We couldn't find that zip code. Try again?";
    userZip = '';
    console.log('Weather call failed' + error);
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



<div id="weather-game" class="h-screen bg-electricindigo">

  <div class="pt-90 container mx-auto">
    {#if !gameOver }
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col md:flex-row flex-wrap text-center w-full">
          <div class="xl:w-1/2 md:w-1/2 p-4">
            <div class="p-6 rounded-lg bg-platinum">
              <h2 class="text-lg  font-medium font-bold mb-4">Pick Your Zip Code</h2>
              <h1 class="title-font sm:text-2xl text-xl font-medium  mb-3">{userCity.length > 0 ? userCity : 'No Zip Data Yet...'}</h1>
              <p>
                <input type="search" class="text-center mb-3" maxlength="5" on:keyup="{handleInput}" bind:value={userZip} placeholder="Pick a zip code...">
              </p>
              <button 
                class="bg-electricindigo text-platinum py-1 hover:font-bold px-4 outline-black rounded p-2" 
                on:click="{handlePickForUser}">Pick a Zip For Me</button>
            </div>
          </div>
          <div class="xl:w-1/2 md:w-1/2 p-4">
            <div class="p-6 rounded-lg bg-platinum">
              <h2 class="text-lg  font-medium font-bold mb-4">Random Zip Code</h2>
              
              <h1 class="title-font sm:text-2xl text-xl font-medium  mb-3">{currentZip.city && currentZip.state_name ? currentZip.city + ', ' + currentZip.state_name : 'No Random Zip Data Yet...'}</h1>

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

    <h1 class="bg-platinum rounded fixed bottom-20 text-center">Featuring ZIP Code data provided by <a class="underline" 
      href="https://simplemaps.com/data/us-zips">https://simplemaps.com/data/us-zips</a></h1>
  </div>
</div>

<style>
#weather-game {
    background-image: url("..//thunderstorm.jpg");
    background-size: cover;
}
</style>