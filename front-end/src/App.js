import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import CheckoutPage from './Pages/CheckoutPage';
import ThanksPage from './Pages/ThanksPage';

function App() {
  return (
    <div className="App">
      <section >
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route path='/thanks' component={ThanksPage} />
      </section>
    </div>
  );
}

export default App;
