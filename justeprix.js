
//JUSTE DE PRIX

//Chiffre cacher
let cacher = (Math.floor(Math.random() * 60 )) + 20;
 console.log(cacher);

//Tentative et les ++ c'est quand on dit que c'est chaque fois +1
let incrementation = 0;

//Création fonction
function prix () {

    //Encadrer pour insèrer un chiffre
    //Mettre le prompt dans la fonction pour faire plusieurs tentatives
    let inserer = prompt("Vous devez insérer un chiffre entre 20 et 80");

    //Condition pour que le chiffre est supérieur a 20 et inférieur a 80
    if(inserer >= 20 && inserer <= 80) {
        console.log(inserer); incrementation ++ ;

        //Condition pour que le chiffre inserer est inférieur au mot caché
        if(inserer < cacher) {
            console.log("C'est plus grand, vous avez fait "+incrementation+" tentatives");

            //Appel de la fonction
            prix ();
        }   
        //Condition pour que le chiffre inserer soit supérieur au mot caché
        else if(inserer > cacher) {
            console.log("C'est plus petit, vous avez fait "+incrementation+" tentatives");

            //Appel de la fonction
            prix ();
        }
        //Condition pour dire que le chiffre est égale au mot cacher 
        else if(inserer == cacher) {
            console.log("C'est le bon chiffre, vous avez gagné après "+incrementation+" tentatives");
        }    
        
    }

}

//Appel de la fonction
prix ();



