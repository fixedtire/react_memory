import './App.scss'
import MemoryCard from './MemoryCard'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {

  const [cards, turnCard] = useState([
    { id: 1, isHidden: true}, 
    { id: 2, isHidden: true},
    { id: 3, isHidden: true}, 
    { id: 4, isHidden: true}, 
    { id: 5, isHidden: true}, 
    { id: 6, isHidden: true}, 
    { id: 7, isHidden: true}, 
    { id: 8, isHidden: true}, 
    { id: 9, isHidden: true}, 
    { id: 10, isHidden: true}, 
    { id: 11, isHidden: true}, 
    { id: 12, isHidden: true}, 
  ]);

  // toggles the state of a memory card and flips it

  const flipCard = (index: number): void => {
    turnCard((prevState) => prevState.map((card) => 
      card.id === index ?
      {...card, isHidden: !card.isHidden} : card
    )
    )
};


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
}, [cards]);

  
  const cardsOnTable = cards.map((card) => (
    <MemoryCard
      key={card.id}
      id={card.id}
      isHidden={card.isHidden}
      onClick={() => flipCard(card.id)}
    />
  ));

  return (
    <div className='memory-grid-container'>
    {cardsOnTable}
    </div>
  )
}

export default App

