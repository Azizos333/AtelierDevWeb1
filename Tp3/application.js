
// TP3 — Partie 6 : vérification du formulaire d'inscription
// Compléter chaque étape en suivant l'énoncé du TP.

// Étape 1 : sélectionner les éléments (formulaire, champs, case à cocher, résultat)
const formulaire = document.querySelector("#inscription");
const champnom=document.querySelector("#nom");
const champemail=document.querySelector("#email");
const champAge=document.querySelector("#age");
const champatelier=document.querySelector("#atelier")
const champreglement=document.querySelector("#reglement")







// Étape 2 : fonctions afficherErreur(champ, idErreur, message) et effacerErreur(champ, idErreur)
function afficherErreur(champ, idErreur, message) {
document.querySelector(idErreur).textContent = message;
champ.classList.add("invalide");
}
function effacerErreur(champ, idErreur){
    document.querySelector(idErreur).textContent = "";
champ.classList.add("invalide");

}


// Étape 3 : écouter l'envoi du formulaire et lire les saisies
formulaire.addEventListener("submit", function (event) {
    event.preventDefault();
    const nom=champnom.value.trim();
    const email = champemail.value.trim();
    const age = Number(champAge.value);
    const atelier = champatelier.value;
    let valide=true;


});


// Étape 4 : vérifier chaque champ (nom, email, age, atelier, reglement)
if (nom.length < 3) {
afficherErreur(champNom, "#erreur-nom", "Au moins 3 caractères.");
valide = false;
} else {
effacerErreur(champNom, "#erreur-nom");
}
if (!email.includes("@")||!email.includes(".")){
    
}


  // Étape 5 : afficher le résultat ou le vider

