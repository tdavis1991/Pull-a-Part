import './App.css';
import SearchBar from './Components/SearchBar';
import DropDown from './Components/DropDown';
import HomePage from './Components/HomePage'


function App() {
  return (
    <div className="App">
      <section >
        
        <SearchBar />
        <DropDown />
        <HomePage />
      </section>
    </div>
  );
}

export default App;
