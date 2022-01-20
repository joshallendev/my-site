<script lang=ts>

    function handleGame(): void {
        const userWeapon: string = getUserWeapon();
        const computerWeapon: string = getComputerWeapon();
        let result: string;
        if (userWeapon === computerWeapon) {
            result = 'tie';
        } else if (userWeapon === 'rock') {
            switch (computerWeapon) {
                case 'paper':
                    result = 'computer wins'
                    break;
                case 'scissors':
                    result = 'user wins'
                    break;            
                default:
                    break;
            }
        } else if (userWeapon === 'paper') {
            switch (computerWeapon) {
                case 'scissors':
                    result = 'computer wins'
                    break;
                case 'rock':
                    result = 'user wins'
                    break;            
                default:
                    break;
            }
        } else if (userWeapon === 'scissors') {
            switch (computerWeapon) {
                case 'rock':
                    result = 'computer wins'
                    break;
                case 'paper':
                    result = 'user wins'
                    break;            
                default:
                    break;
            }
        }
        document.getElementById('user-choice').innerText = 'You chose: ' + userWeapon;
        document.getElementById('computer-choice').innerText = 'Computer chose: ' + computerWeapon;
        document.getElementById('result').innerText = result;
    }
    function getUserWeapon(): string {
        const elems: any = document.getElementsByName('weapon');
        for (let i = 0; i < elems.length; i++) {
            const element:HTMLInputElement = elems[i];
            if (element.checked) {
                return element.value;
            }
            
        }
    }

    function getComputerWeapon(): string {
        const randomSelection: number = Math.ceil(Math.random() * 3);
        let weapon: string;
        switch (randomSelection) {
            case 1:
                weapon = 'rock';
                break;
            case 2:
                weapon = 'paper';
                break;
            case 3:
                weapon = 'scissors';
                break;
            default:
                break;
        }
        return weapon;

    }
</script>

<h1>ROCK PAPER SCISSORS</h1>

<p>Choose Your Weapon:</p>
<input type="radio" id="option1" name="weapon" value="rock">
<label for="html">ROCK</label><br>
<input type="radio" id="option2" name="weapon" value="paper">
<label for="css">PAPER</label><br>
<input type="radio" id="option3" name="weapon" value="scissors">
<label for="javascript">SCISSORS</label><br>

<button class="bg-pink" on:click="{handleGame}">PLAY</button>

<h1 id="user-choice"> </h1>
<h1 id="computer-choice"> </h1>
<h1 id="result"> </h1>