import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = false;

export const GET: RequestHandler = async ({ fetch, url }) => {
	const zip = url.searchParams.get('zip');

	if (!zip || !/^\d{5}$/.test(zip)) {
		return json({ message: 'A five-digit ZIP code is required.' }, { status: 400 });
	}

	if (!env.WEATHER_API_KEY) {
		return json({ message: 'Weather API key is not configured.' }, { status: 500 });
	}

	const weatherUrl = new URL('https://api.openweathermap.org/data/2.5/weather');
	weatherUrl.searchParams.set('zip', zip);
	weatherUrl.searchParams.set('units', 'imperial');
	weatherUrl.searchParams.set('appid', env.WEATHER_API_KEY);

	const response = await fetch(weatherUrl);

	if (!response.ok) {
		return json({ message: 'Unable to fetch weather data.' }, { status: response.status });
	}

	return json(await response.json());
};
