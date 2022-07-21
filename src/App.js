import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.scss';
import { HomePage } from './components/HomePage';

function App() {
  
  return (
    <Router>
      <main>
        <HomePage />
      </main>
    </Router>
  );
}

export default App;
