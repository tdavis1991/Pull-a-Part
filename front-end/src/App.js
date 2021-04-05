import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';

function App() {
  return (
    <div className="App">
      <section >
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </section>
    </div>
  );
}

export default App;
