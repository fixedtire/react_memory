import './App.scss'
import catPics from './CatImages';
import MemoryCard from './MemoryCard'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {

// useState -> state of cards (id, isHidden, isMatched) 
  const [cards, turnCard] = useState([
    { id: 1, isHidden: true, url: catPics[0], isMatched: false}, 
    { id: 2, isHidden: true, url: catPics[1], isMatched: false},
    { id: 3, isHidden: true, url: catPics[2], isMatched: false}, 
    { id: 4, isHidden: true, url: catPics[5], isMatched: false}, 
    { id: 5, isHidden: true, url: catPics[3], isMatched: false}, 
    { id: 6, isHidden: true, url: catPics[1], isMatched: false}, 
    { id: 7, isHidden: true, url: catPics[4], isMatched: false}, 
    { id: 8, isHidden: true, url: catPics[2], isMatched: false}, 
    { id: 9, isHidden: true, url: catPics[0], isMatched: false}, 
    { id: 10, isHidden: true, url: catPics[5], isMatched: false}, 
    { id: 11, isHidden: true, url: catPics[4], isMatched: false}, 
    { id: 12, isHidden: true, url: catPics[3], isMatched: false},
  ]);

  // Setfunction -> toggles state of memory cards
  const flipCard = (index: number): void => {
    // array of all cards that are visible
    let openCards = cards.filter(obj => obj.isHidden === false);
    /* 
    * if less than two cards are visible, onClick isHidden -> true
    * to allow only two visible cards on table
    */
    if (openCards.length < 2) {
    turnCard((prevState) => prevState.map((card) => 
      card.id === index ?
      {...card, isHidden: !card.isHidden} : card
    )
    )};
    // if two cards are visible, check if they have the same picture
    if (openCards.length === 2 && openCards[0].url === openCards[1].url) {
      const openCard1 = document.getElementById(`card-${openCards[0].id}`);
      const openCard2 = document.getElementById(`card-${openCards[1].id}`);
      // if the two cards match, let them fade and set isMatched -> true
      if (openCard1 && openCard2){
      openCard1.classList.add('fade');
      openCard2.classList.add('fade');}
      turnCard((prevState) => prevState.map((card) => 
        card.isHidden === false ?
        {...card, isHidden: !card.isHidden, isMatched: true} : card
      )
      ); 
    // if two cards are visible, flip back and change back state isHidden -> true
    } else if (openCards.length === 2) {
      
      turnCard((prevState) => prevState.map((card) => 
      card.isHidden === false ?
      {...card, isHidden: !card.isHidden} : card
    ));
      const openCard1 = document.getElementById(`card-${openCards[0].id}`);
      const openCard2 = document.getElementById(`card-${openCards[1].id}`);
      if (openCard1 && openCard2){
      openCard1.classList.add('flipped');
      openCard2.classList.add('flipped');
    }
    };
};

/*
* we change state of 'cards' with onClick-function
* if state 'cards' change, flip card when its state got changed
* if all cards are matched, show win-message
*/
useEffect(() => {
  cards.forEach((card) => {
    const cardElement = document.getElementById(`card-${card.id}`);
    if (cardElement) {
      if (!card.isHidden) {
        cardElement.classList.add('flipped');
      } else {
        cardElement.classList.remove('flipped');
      }
    }
  });

  const allMatched = cards.every(obj => obj.isMatched === true);
  if (allMatched) {
    setTimeout(() => {
      alert('😻 yippie!!! found all cats');
  }, 1000);
  }
}, [cards]);

// creates array (cardsOnTable) of MemoryCard-components with attributes (key,id,isHidden,url etc.)
  const cardsOnTable = cards.map((card) => (
    <MemoryCard
      key={card.id}
      id={card.id}
      isHidden={card.isHidden}
      url={card.url}
      isMatched={card.isMatched}
      onClick={() => flipCard(card.id)}
    />
  ));
// renders the components that are in the cardsOnTable-array 
  return (
    <div className='memory-grid-container'>
    {cardsOnTable}
    </div>
  )
}

export default App

