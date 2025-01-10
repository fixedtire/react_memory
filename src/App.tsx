import './App.scss'
import catPics from './CatImages';
import MemoryCard from './MemoryCard'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {

// fetch data from cat API

let fetchedCats:[];

const url = 'https://cataas.com/api/cats';

async function fetchData() {
  try {
    const response = await fetch(url); 
    fetchedCats = await response.json(); 
    console.log("Data fetched and stored:", fetchedCats);

  } catch (error) {
    console.error('Error fetching data:', error); 
  }
}

fetchData();

  const [cards, turnCard] = useState([
    { id: 1, isHidden: true, url: catPics[0]}, 
    { id: 2, isHidden: true, url: catPics[1]},
    { id: 3, isHidden: true, url: catPics[2]}, 
    { id: 4, isHidden: true, url: catPics[5]}, 
    { id: 5, isHidden: true, url: catPics[3]}, 
    { id: 6, isHidden: true, url: catPics[1]}, 
    { id: 7, isHidden: true, url: catPics[4]}, 
    { id: 8, isHidden: true, url: catPics[2]}, 
    { id: 9, isHidden: true, url: catPics[0]}, 
    { id: 10, isHidden: true, url: catPics[5]}, 
    { id: 11, isHidden: true, url: catPics[4]}, 
    { id: 12, isHidden: true, url: catPics[3]},
  ]);

  // toggles the state of a memory card and flips it

  const flipCard = (index: number): void => {

    const openCards = cards.filter(obj => obj.isHidden === false);

    if (openCards.length < 2) {
    turnCard((prevState) => prevState.map((card) => 
      card.id === index ?
      {...card, isHidden: !card.isHidden} : card
    )
    )};

    if (openCards.length === 2) {
      alert('hide cards first!');
      turnCard((prevState) => prevState.map((card) => 
      card.isHidden === false ?
      {...card, isHidden: !card.isHidden} : card
    ));
    
      const hideCard1 = document.getElementById(`card-${openCards[0].id}`);
      const hideCard2 = document.getElementById(`card-${openCards[1].id}`);
      hideCard1.classList.add('flipped');
      hideCard2.classList.add('flipped');
    };


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
      url={card.url}
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

