let score; 
let reponses = 0;
let caseEnCours; 
let temps = 0; 
let chrono; 
let temps_debut = 10;

window.onload = initialisation

set_bulma_modal("modalFinPartie", [], ["modalFinPartie_btn_close", "modalFinPartie_background", "modalFinPartie_btn"])
set_bulma_modal("modalAccueil", [], ["modalAccueil_btn_close", "modalAccueil_background", "modalAccueil_btn_demarrer"])

function initialisation(){
    document.getElementById("modalAccueil").classList.add("is-active");
}

function demarrerPartie(){
    setChrono(temps_debut);
    nouvelleCase();
    score = 0;  
    document.getElementById("score").innerHTML = "Score: 0";
}

function setChrono(secondes){
    temps = secondes; 
    document.getElementById("chrono").innerHTML = temps; 
    chrono = window.setInterval(() =>{
        temps--; 
        document.getElementById("chrono").innerHTML = temps; 
        if (temps === 0){
            stopJeu();
            annoncerResutat();
            window.clearInterval(chrono); 
        }
    }, 1000)
}

function stopJeu(){}

function annoncerResutat(){
    document.getElementById("modalFinPartie").classList.add("is-active");
    document.getElementById("txt_score_final").innerHTML = "Score final: "+score; 
}

function corrigerCouleur(couleur){
    if(couleur === caseEnCours.couleur)
        ajusterScore();

    disableButtons("btnCouleur");
    nouvelleReponse();
} 

function corrigerLocal(localisation){
    if(localisation === caseEnCours.localisation)
        ajusterScore(); 

    disableButtons("btnLocal"); 
    nouvelleReponse();
}

function disableButtons(buttonName){
    let boutons = Array.from(document.getElementsByName(buttonName));
    boutons.forEach(element => element.disabled = true)
}

function enableButtons(buttonName){
    let boutons = Array.from(document.getElementsByName(buttonName));
    boutons.forEach(element => element.disabled = false)
}

function nouvelleReponse(){
    reponses++; 
    if(reponses==2){
        nouvelleCase();
        reponses = 0; 
    }
}

function ajusterScore(){
    score++;
    document.getElementById("score").innerHTML = "Score: "+score;
}

function nouvelleCase(){
    noCase = Math.floor(Math.random() * echiquier.length); 
    caseEnCours = echiquier[noCase];
    document.getElementById("laCase").innerHTML = caseEnCours.coord
    enableButtons("btnLocal");
    enableButtons("btnCouleur"); 
}

function set_bulma_modal(id_modal, openers_elements_ids, closers_elements_ids){
    let modal = document.getElementById(id_modal);
    openers_elements_ids.forEach(element =>
        document.getElementById(element).addEventListener('click', () => {
            modal.classList.add("is-active");
        })
    );
    
    closers_elements_ids.forEach(element =>
        document.getElementById(element).addEventListener('click', () => {
            modal.classList.remove("is-active");		
        })
    );
}