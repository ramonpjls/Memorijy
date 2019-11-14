

const cards = document.querySelectorAll('.item_card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let pointCounter = 0;

//animation
function flipCard(){
    if (lockBoard) return;
    this.classList.toggle('flip');

    if(!hasFlippedCard){

        hasFlippedCard = true;
        firstCard = this;

        return;
    }
    hasFlippedCard = false;
    secondCard = this; 

    checkForMactch();
          
}

function checkForMactch(){
    //comparation 
     if(firstCard.dataset.framework === 
        secondCard.dataset.framework){
            disableCards();
    }else{
            unFlipCards();
    }
}

function disableCards(){
       //TODO: add color to selected pair
       //if the cards are same disable it
       firstCard.removeEventListener('click', flipCard);
       secondCard.removeEventListener('click', flipCard);
       //counter 

        if (disableCards){

            pointCounter = pointCounter + 1;
            //console.log(pointCounter);
            document.querySelector('[data-binding="point"]').innerHTML = pointCounter;
            
            if( pointCounter == 8 ){
                    //win mensaje!! 
                Swal.fire({
                    icon: 'success',
                    title:'YOU WIN',
                    text:'Congratulations!!',
                });
                
            }

            return;        
        } 
  
}

function unFlipCards(){
    lockBoard = true;
    //if its not the same cads 
    setTimeout( () => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
    }, 2000);
}


//arragement for ramdoms cards 
//(function mixed(){
  //  cards.forEach(card => {
    //    let randomPos = Math.floor(Math.random() * 16 );
      //  card.style.order = randomPos;
   // });
//})();

cards.forEach(card => card.addEventListener('click', flipCard));
document.querySelector('[data-binding="point"]').innerHTML = pointCounter;
