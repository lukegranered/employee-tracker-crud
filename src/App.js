import './styles.scss';
import { HomePage } from './components/HomePage/HomePage';
import { AddEmployee } from './components/AddEmployee/AddEmployee';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <main>
      <GlobalProvider>
        <HomePage />
        <AddEmployee />
      </GlobalProvider>
    </main>
  );
}

export default App;
