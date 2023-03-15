// exo 1
function mylength(x){
    let total = 0;
    for (i in x);
    total++
    console.log(total);
}
mylength("1234") 

// exo1bis
function main(){
    let nbre;
    let numberUser = parsetInt(prompt("Saisir un nombre entre 1 et 3:"));
    while ((numberUser > 3)  || (numberUser < 1)){
        alert("reponse erronee!retaper un nombre entre 1 et 3 svp");
    }
    alert("Bravo vous avez gagne");
}
main()

function minMax(min, max) {
    return Math.max(Math.round(Math.random()*max), min)
}

// exo2 bis
function number(){
    const C1 = 10;
    const C2 = 20;
    let reponse;
    solution = minMax(C1, C2)
   while (reponse !== solution){
    reponse = parseInt(prompt("donnez un  nombre:"))
    if (reponse >= C1 && reponse <= C2 ){
        alert("bravo vous avez gagné");
        break;
    }
    else if (reponse < C1){
        alert("plus grand");
    }
    else if (reponse > C2 ){
        alert("plus petit")
    }
   }
   
}
number()

// exo3
function algodixnbressuivant(){
    let numberUser = parseInt(prompt("donnez un nombre et obtenir les 10 aotres nombres"));
    let dixnumber = [];
    //let addition = numberUser + 10;
    let counter = 0;
    let countermax = counter + 10;
    while (counter <= countermax){
        ++counter
        console.log(i);
        dixnumber.push(i);
    }
    console.log(dixnumber);
    return algodixnbressuivant;

}

// exo4
function algodixnbressuivant(){
    let numberUser = parseInt(prompt("donnez un nombre et obtenir les 10 aotres nombres"));
    let dixnumber = [];
    let addition = numberUser + 10;
    for (let i = numberUser + 1; i <= addition; ++i){
        console.log(i);
        dixnumber.push(i);
    }
    console.log(dixnumber);
    return algodixnbressuivant;
    }
    
    




