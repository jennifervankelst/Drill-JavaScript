

//Exercice 1


for (let chiffre = 0; chiffre <= 20; chiffre++) {
    if (chiffre % 2 === 0) {
        console.log(chiffre + ' est pair');
    } else {
        console.log(chiffre + ' est impair');
    }
}


//Exercice 2



let multiplier = prompt("veuillez entrez un chiffre");
console.log(multiplier)
for (let chiffre = 0; chiffre <= 10; chiffre++) {
    let result = multiplier * chiffre;
    console.log(multiplier + ' * ' + chiffre + ' = ' + result);
}



//Exercice 3


function grades(score) {
    if (score > 90) {
        return 'Grade A';
    } else if (score > 80) {
        return 'Grade B';
    } else if (score > 70) {
        return 'Grade C';
    } else if (score > 65) {
        return 'Grade D';
    } else {
        return 'Grade F';
    }
}

for (let score = 80; score <= 100; score++) {
    console.log("For " + score + ", vous avez le " + grades(score));
  }

//--------------------------------------------------------------------------

let score = prompt("veuillez entrez votre score");
console.log(score)

if (score > 90) {
    console.log("Vous avez atteint le grade A")
} else if (score > 80) {
    console.log("Vous avez atteint le grade B")
} else if (score > 70) {
    console.log("Vous avez atteint le grade C")
} else if (score > 65) {
    console.log("Vous avez atteint le grade D")
} else {
    console.log("Vous avez atteint le grade E")
}

for (let score = 80; score <= 100; score++) {
    console.log("Vous avez un score de " + score);
  }



//Exercice 4   

    
function pyramide(etoile) {
  let nombre = '';
  for (let i = 1; i <= etoile; i++) {
  console.log(nombre += '*'); }}
  pyramide(5);
  