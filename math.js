
//Exercice 1

//A


let chiffre = [ 7, 5, -12, 6, 32, 18, 14, -2];

let min = chiffre.reduce(function(a, b){
    return Math.min(a, b); });

console.log(min);


//B


let chiffreA = [-3, 9, 21, 36, 27, 54, 17, 35];

let max = chiffreA.reduce(function(a, b) {
    return Math.max(a, b);});

    console.log(max);



//C    

let result = min + max;

console.log(result); 


//Exercice 2

let floatBoat = 10.4;

let couleBoat = Math.ceil(floatBoat);

let voleBoat = Math.floor(floatBoat);

console.log(couleBoat, voleBoat);


//Exercice 3

//A 

let chiffre = Math.floor(Math.random(50) * 101);

console.log(chiffre);

//B

let chiffreA = (Math.random()>0.5)? 1 : 0;



//Exercice 4

//A

let personnage = ["Gore", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];

//B

let choix = personnage[(Math.random() * personnage.length) | 0];






