
// TP3 — Partie 6 : vérification du formulaire d'inscription
// Compléter chaque étape en suivant l'énoncé du TP.

// Étape 1 : sélectionner les éléments (formulaire, champs, case à cocher, résultat)
const formulaire = document.querySelector("#inscription");
const champnom=document.querySelector("#nom");
const champemail=document.querySelector("#email");
const champAge=document.querySelector("#age");
const champatelier=document.querySelector("#atelier");
const champreglement=document.querySelector("#reglement");
const resultatt=document.querySelector("#resltat");






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
    
    afficherErreur(champnom, "#erreur-nom", "Au moins 3 caractères.");
    valide = false;
}
else {
    

    effacerErreur(champNom, "#erreur-nom");
}
if (!email.includes("@")||!email.includes(".")){

    afficherErreur(champemail, "#erreur-email", "email non valide.");
    valide=false;
    
}
else{
    effacerErreur(champemail, "#erreur-email");
}
if(!Number.isInteger(age) || age < 17 || age> 30){
    afficherErreur(champAge, "#erreur-Age", "Âge entier entre 17 et 30 ans..");
    valide=false;


}
else{
    effacerErreur(champAge, "#erreur-Age");
}
if(atelier == ""){
    afficherErreur(champatelier, "#erreur-atelier", "Choisir un atelier.");
    valide=false;


}
else{
    effacerErreur(champatelier, "#erreur-atelier");
}
if(!champreglement.checked){
    afficherErreur(champreglement, "#erreur-reglement", "Accepter le règlement..")
    valide=false;

}
else{
     effacerErreur(champreglement, "#erreur-reglement");
}




  // Étape 5 : afficher le résultat ou le vider
  if(valide==true){
    resultatt.textContent='inscription terminer avec succées';
    formulaire.reset()

  }
  else{
    resultatt.textContent = ""
  }

