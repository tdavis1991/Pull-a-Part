import React from 'react';
import Logo from './pull-a-part.png';
import { useHistory } from 'react-router-dom';



function ThanksPage() {
    const history = useHistory();

    function handleClick() {
        history.push('/')
    }
    return (
        <div>
              <h1>Thank you for your purchase!</h1>
    <img src={Logo}></img>
           <button id='shop-button' type='button' onClick={handleClick}>Return to home</button>
        </div>
    )
}

export default ThanksPage;