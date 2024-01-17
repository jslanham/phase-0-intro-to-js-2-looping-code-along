// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
const cards = []
function wrapGifts(gift) {
    for (let i = 0; i < gifts.length; i++){
    console.log(`Wrapped ${gift} and added a bow!`);
    }
    return gifts;
}
function writeCards(people, occasion){
    const writtenCards = [];
    for (let i = 0; i < people.length; i++){
        writtenCards.push(`Thank you, ${people[i]}, for the wonderful ${occasion} gift!`);
    }
    return writtenCards;
}
function countDown(x){
    while(x >= 0){
        console.log(x--);
    }
}
