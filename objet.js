
//Exercice 1

let nom ="";
let caractere = {
    name : "Blondi",
    age : 25, 
    items: ["chevaux", "voiture", "sac", "vetements", "bague", "fleurs", "jeux", "ordinateur"]};

        for (let affiche in caractere){
            nom = nom + caractere[affiche];
    }

let items = ["chevaux", "voiture", "sac", "vetements", "bague", "fleurs", "jeux", "ordinateur"];

        function giveltem(tableau) {
            return tableau[Math.floor(Math.random() * tableau.length)];
        }

console.log(nom);
console.log(giveltem(items));


// Exercice 2

armeA = {
    title: "Épée",
    physic: 150,
    magic: 30,
    minLevel: 40,
    available: true
}
armeB = {
    title: "Hache",
    physic: 300,
    magic: 10,
    minLevel: 20,
    available: false
}
armeC = {
    title: "Sceptre",
    physic: 25,
    magic: 250,
    minLevel: 16,
    available: true
}
armeD = {
    title: "Arc",
    physic: 90,
    magic: 40,
    minLevel: 10,
    available: false
}

    let arme = [{armeA}, {armeB}, {armeC}, {armeD}]

    let affiche = () => {

        for(let A in arme){
            console.log("Arme disponible", arme[A])
        }
    }
    affiche()


    let B
    let affiche2 = () => {

        while(arme.minLevel >= 10 & B < arme.length, B++)
        {
            console.log(arme[A])
        }
    }
    affiche2()


    //Exercice 3

    let personnage = {
        nom: "Blondi",
        niveau: 400,
        vie: 50000,
    }

    let arme = {
        degat: 500,
    }
        attack () 
        
        {

            console.log(personnage.nom, "attaque avec l'arme", personnage.arme,". les dégâts sont de", 

        }

    let degatAtak = (personnage.niveau * arme.degat);
        