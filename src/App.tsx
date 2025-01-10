import './App.scss'
import MemoryCard from './MemoryCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <div className='memory-grid-container'>
    <h1>Memory Quiz</h1>
    <MemoryCard title="Cat1"/>
    </div>
  )
}

export default App
