<script lang="ts">
	type Weapon = 'rock' | 'paper' | 'scissors';
	type Result = 'tie' | 'computer wins' | 'user wins';

	const choices: Weapon[] = ['rock', 'paper', 'scissors'];
	let userWeapon: Weapon = 'rock';
	let computerWeapon: Weapon | null = null;
	let result: Result | null = null;

	function handleGame(): void {
		computerWeapon = getComputerWeapon();
		result = getResult(userWeapon, computerWeapon);
	}

	function getComputerWeapon(): Weapon {
		const randomSelection = Math.floor(Math.random() * choices.length);
		return choices[randomSelection];
	}

	function getResult(userChoice: Weapon, computerChoice: Weapon): Result {
		if (userChoice === computerChoice) {
			return 'tie';
		}

		if (
			(userChoice === 'rock' && computerChoice === 'scissors') ||
			(userChoice === 'paper' && computerChoice === 'rock') ||
			(userChoice === 'scissors' && computerChoice === 'paper')
		) {
			return 'user wins';
		}

		return 'computer wins';
	}
</script>

<h1>ROCK PAPER SCISSORS</h1>

<p>Choose Your Weapon:</p>
{#each choices as choice (choice)}
	<input type="radio" id={choice} name="weapon" value={choice} bind:group={userWeapon} />
	<label for={choice}>{choice.toUpperCase()}</label><br />
{/each}

<button class="bg-pink" on:click={handleGame}>PLAY</button>

{#if computerWeapon && result}
	<h1>You chose: {userWeapon}</h1>
	<h1>Computer chose: {computerWeapon}</h1>
	<h1>{result}</h1>
{/if}
