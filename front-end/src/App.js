import './App.css';
import SearchBar from './Components/SearchBar';
import DropDown from './Components/DropDown';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <section >
        <HomePage />
        <SearchBar />
        <DropDown />
      </section>
    </div>
  );
}

export default App;
