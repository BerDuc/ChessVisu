let score; 
let reponses = 0;
let caseEnCours; 

window.onload = initialisation

function initialisation(){
    nouvelleCase();
    score = 0;  
    document.getElementById("score").innerHTML = "Score: 0";
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