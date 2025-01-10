import './App.scss'
import MemoryCard from './MemoryCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  const numbersOfCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const cardsOnTable = numbersOfCards.map((number) => (
  <MemoryCard key={number} />));
  return (
    <div className='memory-grid-container'>
    {cardsOnTable}
    </div>
  )
}

export default App
