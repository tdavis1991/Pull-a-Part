import './App.css';
import { Route } from 'react-router-dom';
// import SearchBar from './Components/SearchBar';
// import DropDown from './Components/DropDown';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <section >
        <Route exact path='/' component={HomePage} />
      </section>
    </div>
  );
}

export default App;
