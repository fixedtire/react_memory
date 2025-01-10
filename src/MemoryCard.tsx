import './App.scss'
import catLogo from './assets/images/cat_icon.png'; 

interface MemoryCardProps {
  onClick: () => void;
  id: number;
  isHidden: boolean;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ onClick, id }) => {

        
    return (
      <div id={`card-${id}`} className="flip-card" onClick={onClick}>

  <div className="flip-card-inner">

    <div className="flip-card-front">

    <img src={catLogo} alt="click" />

    </div>

    <div className="flip-card-back">

    <img src="https://cataas.com/cat" alt="random cat" />

    </div>

  </div>

</div>
    )
            
              {/* Bootstrap Style Card for one Memory Card

              
              */}
}

export default MemoryCard