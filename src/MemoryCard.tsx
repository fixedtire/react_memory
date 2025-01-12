import './App.scss'
import catLogo from './assets/images/cat_icon.png'; 

// types of MemoryCards' props (origin: App/CatImages Component)
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
            {/* catLogo, see imports*/}
            <img src={catLogo} alt="click" />
            </div>
            <div className="flip-card-back">
            <img src={url} alt="cat-image" />
            </div>
        </div>
      </div>
    )
}

export default MemoryCard