import './App.scss'
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface MemoryCardProps {
  title: string;
}

const MemoryCard: React.FC<MemoryCardProps> = ({title}) => {

  // State of one memory card, if false, memory card is hidden

  const [cardHidden, turnCard] = useState(true);

  // toggles the state of this memory card and flips it

  const flipCard = () => {
    turnCard(!cardHidden);
  };

  useEffect(() => {
    const cardElement = document.getElementById('card');
    if (cardElement) {
      cardHidden
        ? cardElement.classList.add('flipped')
        : cardElement.classList.remove('flipped');
    }
  }, [cardHidden]);

        
    return (
      <div className="flip-card" id="card" onClick={flipCard}>

  <div className="flip-card-inner">

    <div className="flip-card-front">

      <h1>{title}</h1>

    </div>

    <div className="flip-card-back">

      <h1>Back</h1>

    </div>

  </div>

</div>
    )
            
              {/* Bootstrap Style Card for one Memory Card

              
              */}
}

export default MemoryCard