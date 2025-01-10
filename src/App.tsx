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

  // toggles the state of a memory card and flips it

  const flipCard = (index: number): void => {

    let openCards = cards.filter(obj => obj.isHidden === false);

    if (openCards.length < 2) {
    turnCard((prevState) => prevState.map((card) => 
      card.id === index ?
      {...card, isHidden: !card.isHidden} : card
    )
    )};

    if (openCards.length === 2 && openCards[0].url === openCards[1].url) {
      const openCard1 = document.getElementById(`card-${openCards[0].id}`);
      const openCard2 = document.getElementById(`card-${openCards[1].id}`);
      openCard1.classList.add('fade');
      openCard2.classList.add('fade');
      turnCard((prevState) => prevState.map((card) => 
        card.isHidden === false ?
        {...card, isHidden: !card.isHidden, isMatched: true} : card
      )
      ); 
      if (cards.every(obj => obj.isMatched === true)) {
        alert('😻 yippie!!! found all cats');
      } else if (openCards.length === 2) {
      
      turnCard((prevState) => prevState.map((card) => 
      card.isHidden === false ?
      {...card, isHidden: !card.isHidden} : card
    ));
      const openCard1 = document.getElementById(`card-${openCards[0].id}`);
      const openCard2 = document.getElementById(`card-${openCards[1].id}`);
      openCard1.classList.add('flipped');
      openCard2.classList.add('flipped');
    }};

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
      isMatched={card.isMatched}
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

