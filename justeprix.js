let toGuess = Math.floor(Math.random() * 60) + 20;
let i=0;
let guessprice = () => 
{
    let price = prompt("Entrez un chiffre entre 20 et 80");
    console.log(price)

    if(price >= 20 && price <= 80)i++;
    {
        if(toGuess < price) 
        {
        console.log("C'est moins que", price, "-",  i,"tentatives")
        guessprice()
        }
        else if(toGuess > price) 
        {
        console.log("C'est plus que", price, "-",  i,"tentatives")
        guessprice()
        }
        else if (toGuess == price)
        {
            console.log("Vous avez gagnez", "-",  i,"tentatives")
        }
    }   
}
guessprice()