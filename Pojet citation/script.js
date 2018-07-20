
// Custom function
function generateur() {

    // Store the data of inputs
    var phrase1 = ["j'ai assassiné", "J'ai pété sur", "Je me suis marrié avec", "J'ai masturbé", "J'ai couché avec", "J'ai fait caca sur",
    "J'ai craché sur", "J'ai collé mes popotin sur", "J'ai avalé", "J'ai tapé", "J'ai violé", "J'ai mangé"];
    var phrase2 = ["Un lama", "mon voisin", "ma mère", "un passant", "un gorille", "un cactus", "un caca géant", "une mouche", "une pucelle",
     "un anus", "papa noel", "un kiwi", "une vache", "une moche", "le facteur", "ma peluche", "un clown", "le pape", "mon zizi", "une inconnue"];
    var phrase3 = ["pour de l'argent", "dans une baignoire", "qui puait", "devant mon père", "dans la rue", "avant le petit dèj", "et une poule",
    "pour un bonbon", "en chantant", "au pôle nord", "mais j'ai regretté", "par erreur", "et j'ai adoré", "sans mes habits", "sans le savoir", "les yeux bandés"];

    // Quick validation
    function aleatoire(tab){
	     return tab [Math.floor(Math.random() * tab.length)];
     }
    // Do some math!
    var citation = aleatoire(phrase1) + " " + aleatoire(phrase2) + " " + aleatoire(phrase3) + " !";


    // Display the tip!
    document.getElementById("citation").innerHTML = citation;

}

// Clicking the button calls our custom function
document.getElementById("generer").onclick = function() { generateur(); };
