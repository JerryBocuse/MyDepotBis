// État du jeu

let dilithium = 100;

let crewTrust = {

	engineer: 100,

	science: 100

};

// Dialogue IA simulé (remplacer par une vraie API)

function generateAIDialogue(role, problem) {

const dialogues = {

		engineer: [

	`Captain, the warp core cannae take much more! We need ${Math.floor (Math.random()*20)+5} dilithium NOW!`,

	"I'm givin' her all she's got! ...But it's not enough.",

	"The plasma conduits are gonna blow! *panicked Scottish noises*"

	],

		science: [

	"Fascinating. The anomaly appears to be... *illogical*.",

	"Probability of survival: 32.7%. Suggestion: retreat.",

	"The aliens appear to be... * checks tricorder*... hungry?"

	]

};

return dialogues[role][Math.floor (Math.random()*dialogues[role].length)];

}

// Fonctions d'interaction

function askEngineer() {

const problem = "warp core breach";

const response = generateAIDialogue ('engineer', problem);

document.getElementById ('dialogue-text').innerText = `CHIEF ENGINEER: "${response}"`;

document.getElementById ('crew-face').innerHTML = '<img src ="assets/images/scotty.png" alt ="Engineer">';

	playSound('blip.wav');

}

function askScience() {

const response = generateAIDialogue ('science', "unknown anomaly");

document.getElementById ('dialogue-text').innerText = `SCIENCE OFFICER: "${response}"`;

document.getElementById ('crew-face').innerHTML = '<img src ="assets/images/spock.png" alt ="Science">';

	playSound('blip.wav');

}

function warp() {

if (dilithium >= 30) {

	dilithium -= 30;

		updateDilithium();

	document.getElementById ('dialogue-text').innerText = "WARP ENGAGE! *whoosh*";

	document.getElementById ('crew-face').innerHTML = '<img src ="assets/images/sulu.png" alt ="Navigator">';

		playSound('warp.wav');

	document.getElementById ('alert').style.display = 'none';

	} else {

	document.getElementById ('dialogue-text').innerText = "INSUFFICIENT DILITHIUM!";

	document.getElementById ('alert').style.display = 'block';

		playSound('alert.wav');

	}

}

// Fonctions utilitaires

function updateDilithium() {

document.getElementById ('dilithium').innerText = dilithium;

}

function playSound(sound) {

new Audio(`assets/sounds/$ {sound}`).play().catch(e => console.log(e));

}