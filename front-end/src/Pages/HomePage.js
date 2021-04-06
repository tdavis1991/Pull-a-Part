import React from 'react';
import Logo from './pull-a-part.png'
import { useHistory } from 'react-router-dom';



function HomePage() {
    const history = useHistory();

    function handleClick() {
        history.push('/shop')
    }
    return (
        <div id='home-page'>
           <img src={Logo}></img>
           <button id='shop-button' type='button' onClick={handleClick}>Shop</button>
        </div>
    )
}

export default HomePage;