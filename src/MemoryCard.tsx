import './App.scss'
import catLogo from './assets/images/cat_icon.png'; 

interface MemoryCardProps {
  onClick: () => void;
  id: number;
  isHidden: boolean;
  url: string;
  isMatched: boolean;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ onClick, id, url }) => {

        
    return (
      <div id={`card-${id}`} className="flip-card" onClick={onClick}>

  <div className="flip-card-inner">

    <div className="flip-card-front">

    <img src={catLogo} alt="click" />

    </div>

    <div className="flip-card-back">

    <img src={url} alt="random cat" />

    </div>

  </div>

</div>
    )
}

export default MemoryCard