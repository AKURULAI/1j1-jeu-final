let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");
let nHauteur = oCanvasHTML.height;
let nLargeur = oCanvasHTML.width;

let sEtat = "intro";

let oImageIntro = new Image();
let oImageJeu = new Image();

let sonIntro = new Audio();




let nPosX = 0;
let nPosY = 0;
let nVitesse = 2;

function initialiser() {
    setInterval(boucleJeu, 1000 / 60);

    oCanvasHTML.addEventListener("click", clicCanvas);
    
    
}

function remiseAZero() {
    nMinuterie = 10;
    nTempsPasse = 0;
}

function clicCanvas() {
    if (sEtat == "intro") {
        sEtat = "jeu";
    } else if (sEtat == "jeu") {
        sEtat = "fin";
    } else {
        sEtat = "intro";
    }
}

function boucleJeu() {

    oContexte.clearRect(0, 0, nLargeur, nHauteur);

    sonIntro.src = "audio/inn_music.mp3"

    if (sEtat == "intro") {
        afficherIntro();
        sonIntro.play();
    } else if (sEtat == "jeu") {
        afficherJeu();
    } else {
        afficherFin();
    }
}


function afficherIntro() {
    oImageIntro.src = "assets/imges/fondDebut.jpg";
    
    ;

    nPosX += nVitesse;

    if (nPosX > nLargeur) {
        nPosX = 0;
    }
    oContexte.drawImage(oImageIntro, nPosX,  0, nLargeur, nHauteur);
    oContexte.drawImage(oImageIntro, nPosX - nLargeur,  0, nLargeur, nHauteur);


    oContexte.font = "80px dum";
    oContexte.fillStyle = "turquoise";
    oContexte.textAlign = "center";
    oContexte.fillText(`La Vérité`, 550, 230);

    oContexte.font = "35px dum";
    oContexte.fillStyle = "black";
    oContexte.textAlign = "center";
    oContexte.fillText(`Appuyer si vous l'osez`, 550, 360);

    

}

function afficherJeu() {
    oImageJeu.src = "assets/imges/GrotteChemin.jpg";

    oContexte.drawImage(oImageJeu, 0,  0, nLargeur, nHauteur);


    oContexte.font = "80px dum";
    oContexte.fillStyle = "green";
    oContexte.textAlign = "center";
    oContexte.fillText(`${sEtat}`, 550, 230);
}

function afficherFin() {

    oContexte.fillStyle = "grey";
    oContexte.fillRect(0, 0, nLargeur, nHauteur);

    oContexte.font = "80px dum";
    oContexte.fillStyle = "Black";
    oContexte.textAlign = "center";
    oContexte.fillText(`${sEtat}`, 550, 230);
}




window.addEventListener("load", initialiser);
