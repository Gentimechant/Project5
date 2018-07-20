// script.js

var generateur = {
  phrase1: [],
  phrase2: [],
  phrase3: [],
};

var generateur1 = Object.create(generateur);
generateur1.phrase1 = ["Où que nous mène", "Eu égard à", "Dans le cas particulier de"];
generateur1.phrase2 = ["cette inflexion", "la baisse de confiance", "la dualité de la situation"];
generateur1.phrase3 = ["de ces derniers temps", "de l'époque actuelle", "que nous constatons"];

var generateur2 = Object.create(generateur);
generateur2.phrase1 = ["j'ai assassiné", "J'ai pété sur", "Je me suis marrié avec", "J'ai masturbé", "J'ai couché avec", "J'ai fait caca sur",
    "J'ai craché sur", "J'ai collé mes popotin sur", "J'ai avalé", "J'ai tapé", "J'ai violé", "J'ai mangé"];
generateur2.phrase2 = ["un lama", "mon voisin", "ma mère", "un passant", "un gorille", "un cactus", "un caca géant", "une mouche", "une pucelle",
     "un anus", "papa noel", "un kiwi", "une vache", "une moche", "le facteur", "ma peluche", "un clown", "le pape", "mon zizi", "une inconnue"];
generateur2.phrase3 = ["pour de l'argent", "dans une baignoire", "qui puait", "devant mon père", "dans la rue", "avant le petit dèj", "et une poule",
    "pour un bonbon", "en chantant", "au pôle nord", "mais j'ai regretté", "par erreur", "et j'ai adoré", "sans mes habits", "sans le savoir", "les yeux bandés"];


function aleatoire(tab){
   return tab [Math.floor(Math.random() * tab.length)];
 }


function calculateTip() {
    // Store the data of inputs
    var numQuotes = parseInt(document.getElementById("numQuotes").value);
    var typeQuotes = parseInt(document.getElementById("typeQuotes").value);
     var total = [];
     var i=0;

     // Application
     if (Number.isInteger(numQuotes) === true && numQuotes <= 5 && numQuotes >= 1) {
       if (typeQuotes === 1) {
                 while (i < numQuotes){
                   var citation1 = (aleatoire(generateur1.phrase1) + " " + aleatoire(generateur1.phrase2) + " " + aleatoire(generateur1.phrase3) + " !</br>" );
                   total.push("<li>" + citation1 + "</li>");
                   i++;
                 }
                 document.getElementById("showQuotes").innerHTML = "<ul>" + total.join(" ") + "</ul>";
             } else if (typeQuotes === 2) {
               while (i < numQuotes){
                 var citation2 = (aleatoire(generateur2.phrase1) + " " + aleatoire(generateur2.phrase2) + " " + aleatoire(generateur2.phrase3) + " !</br>" );
                 total.push("<li>" + citation2 + "</li>");
                 i++;
               }
               document.getElementById("showQuotes").innerHTML = "<ul>" + total.join(" ") + "</ul>";
             } else {
               total = "Vérifiez que vous avez séléctionner le type de citation !";
               document.getElementById("showQuotes").innerHTML = total;
              }
      } else {
        total = "Entrez une valeur comprise entre 1 à 5";
       document.getElementById("showQuotes").innerHTML = total;
     }

}
// Clicking the button calls our custom function
document.getElementById("customQuotes").onclick = function() { calculateTip(); };
