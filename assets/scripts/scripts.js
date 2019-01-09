// Fonction trouver Trouver nombre pair
function NbPair(Nb){
    if(Nb/2 == Math.round(Nb/2)) return true;
       else return false;
}
//fonction pour supprimer une div allumettes
function removediv(){
    var ediv = document.querySelector('.match'); 
    ediv.parentNode.removeChild(ediv); 
}
//fonction pour creer une div allumette
function add_div(){
    var newdiv = document.createElement('div'); 
    newdiv.setAttribute("class", "match"); 
    document.querySelector('.matches-wrapper').appendChild(newdiv);
}
//recuperation des variables necessaires
var $joueur_1 = document.querySelector('#player-1').value; 
var $joueur_2 = document.querySelector('#player-2').value; 
var $tour_de = document.querySelector('#tour-de').value;
var $nombre_allumette = document.querySelector('#matches-number'); 
var $changer_btn_onclick = document.querySelector("#btn1"); 
var allumettes_left = document.getElementById("allumettes-restantes").firstChild.data;
allumettes_left = document.getElementById("allumettes-restantes").firstChild.data = $nombre_allumette.value;
var tour_de = document.getElementById("tour-de").firstChild.data;
tour_de = document.getElementById("tour-de").firstChild.data = 'Joueur 1';
tab_des_tours = []; 

//Supprimer les 9 premieres allumettes avec la fonction removediv
//ajouter les 20 premieres allumettes
i=0;
do{
    i++;
    removediv();
} while (i<9); 

p=0;
do{
    p++;
    add_div();
} while (p < $nombre_allumette.value); 

//function CHANGER NOMBRE ALLUMETTES A TRAVAILLER
var allumette_actu =  50; 
function allumette(){
    if (allumette_actu>$nombre_allumette.value){
        removediv(); 
        allumette_actu = $nombre_allumette.value; 
        allumettes_left = document.getElementById("allumettes-restantes").firstChild.data = $nombre_allumette.value;
    }
    else if (allumette_actu < $nombre_allumette.value){
        add_div(); 
        allumette_actu = $nombre_allumette.value; 
        allumettes_left = document.getElementById("allumettes-restantes").firstChild.data = $nombre_allumette.value;
    }
}
//Recommencer la partie
function restart_game(){
    $nombre_allumette.value = 20; 
    allumettes_left = document.getElementById("allumettes-restantes").firstChild.data;
    i=0;
    do{
        i++;
        removediv();
    } while (i<allumettes_left); 

    p=0;
    do{
        p++;
        add_div();
    } while (p < $nombre_allumette.value); 

    allumettes_left = document.getElementById("allumettes-restantes").firstChild.data = $nombre_allumette.value; 
    tab_des_tours = []; 
    if ($joueur_1 === ''){
        tour_de = document.getElementById("tour-de").firstChild.data = 'Joueur 1'; 
    }
    else if ($joueur_1 !== ''){
        tour_de = document.getElementById("tour-de").firstChild.data = $joueur_1;
    }
    changer_btn_onclick = document.querySelector("#btn3"); 
    changer_btn_onclick.removeAttribute("disabled");
    changer_btn_onclick = document.querySelector("#btn2"); 
    changer_btn_onclick.removeAttribute("disabled");
    changer_btn_onclick = document.querySelector("#btn1"); 
    changer_btn_onclick.removeAttribute("disabled");
}

//Jeux
function button(valeur){
    $joueur_1 = document.querySelector('#player-1').value; 
    $joueur_2 = document.querySelector('#player-2').value; 
    if (valeur === 1){
        $nombre_allumette.value = $nombre_allumette.value - 1; 
        tab_des_tours.push(1); 
        removediv(); 
    }
    else if (valeur === 2){
        $nombre_allumette.value = $nombre_allumette.value - 2; 
        tab_des_tours.push(1);
        removediv();
        removediv();
    }
    else if (valeur === 3){
        $nombre_allumette.value = $nombre_allumette.value - 3; 
        tab_des_tours.push(1);
        removediv();
        removediv();
        removediv();
    }
    allumettes_left = document.getElementById("allumettes-restantes").firstChild.data = $nombre_allumette.value; 
    tour_de = document.getElementById("tour-de").firstChild.data;
    if (NbPair(tab_des_tours.length) === true){
        if ($joueur_1 === ''){
            tour_de = document.getElementById("tour-de").firstChild.data = 'Joueur 1'; 
        }
        else if ($joueur_1 !== ''){
            tour_de = document.getElementById("tour-de").firstChild.data = $joueur_1;
        }
    }
    else if (NbPair(tab_des_tours.length) === false){
        if ($joueur_2 === ''){
            tour_de = document.getElementById("tour-de").firstChild.data = 'Joueur 2';
        }    
        else if ($joueur_2 !== ''){
            tour_de = document.getElementById("tour-de").firstChild.data = $joueur_2; 
        } 
    }
    
    allumettes_left.value = $nombre_allumette.value;
    if ($nombre_allumette.value === '3'){
        changer_btn_onclick = document.querySelector("#btn3"); 
        changer_btn_onclick.setAttribute("disabled", "");
    }
    if ($nombre_allumette.value === '2'){
        changer_btn_onclick = document.querySelector("#btn3"); 
        changer_btn_onclick.setAttribute("disabled", "");
        changer_btn_onclick = document.querySelector("#btn2"); 
        changer_btn_onclick.setAttribute("disabled", "");
    }
    if ($nombre_allumette.value === '1'){
        changer_btn_onclick = document.querySelector("#btn3"); 
        changer_btn_onclick.setAttribute("disabled", "");
        changer_btn_onclick = document.querySelector("#btn2"); 
        changer_btn_onclick.setAttribute("disabled", "");
        changer_btn_onclick = document.querySelector("#btn1"); 
        changer_btn_onclick.setAttribute("disabled", "");
        if (NbPair(tab_des_tours.length) === true){
            if ($joueur_1 === ''){
                alert('Joueur 1 gagne!');
            }
            else if ($joueur_1 !== ''){
                alert($joueur_1 + ' gagne!')
            }
        }
        else if (NbPair(tab_des_tours.length) === false){
            if ($joueur_2 === ''){
                alert('Joueur 2 gagne!');
            }    
            else if ($joueur_2 !== ''){
                alert($joueur_2 + ' gagne!')
            } 
        }
    }
}


