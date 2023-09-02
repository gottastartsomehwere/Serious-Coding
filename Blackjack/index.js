let firstcard=getrandomcard()
let secondcard=getrandomcard()
let cards=[]
let sum=0;
let isalive=false
let isblackjack=false
let message=""
let player= {
    name:"Per",
    Chips:150
}

let messageEl=document.getElementById("message-el")
console.log(messageEl)
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")



let playerEl=document.getElementById("player-el")
playerEl.textContent = player.name + ": $ "+ player.Chips



function getrandomcard(){
    console.log("Drawing a card from the deck")
    let card=Math.floor(Math.random()*13)+1
    if(card==1){
        return 11;
    }
    else if(card>10){
        return 10;
    }
    else{
        return card;
    }

   
}



function startGame(){
    isalive=true;
    let firstcard=getrandomcard()
    let secondcard=getrandomcard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard;
    
    
    message=""
    rendergame()
}


function rendergame(){
    cardEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+ " "
    }
    sumEl.textContent="Sum: "+ sum
    if(sum<=20){
       message="Do you want to draw a card next?"
    }
    else if(sum==21){
        message="You've got blackjack"
        isblackjack=true
    }
    else{
        message="BUSTED"
        isalive=false
       

}
messageEl.textContent=message
}
function newcard(){
    if(isalive==true && isblackjack==false){
    let boom=getrandomcard()
    sum+=boom;
    cards.push(boom)
    rendergame()
    }
 
 }