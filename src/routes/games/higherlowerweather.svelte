<script lang=ts>
import { onMount } from "svelte";
const WEATHER_API_KEY: string = 'f4c1ec3679afbe574f2fce7d1b767ddf';

let zipData;

$: currentZip = {};
$: currentRandTemp = '';

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
            zipData = data;
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
        console.log(parsedData);
    }
    return parsedData;
}

function handleClick(e): void {
    e.preventDefault();
    getRandomZip();
    fetchWeatherData(currentZip.zip);
}



onMount(() => {
        fetchZipData();
})
</script>


<p id="randomZip">{currentZip.zip}</p>
<p id="randomCity">{currentZip.city + ', ' + currentZip.state_name}</p>
<button on:click="{handleClick}">New Zip Code</button>
<p>Featuring ZIP Code data provided by <a class="underline" href="https://simplemaps.com/data/us-zips">https://simplemaps.com/data/us-zips</a></p>
<style>

</style>