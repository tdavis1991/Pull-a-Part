import React from 'react';
import Logo from './pull-a-part.png'
import { useHistory } from 'react-router-dom';



function HomePage() {
    const history = useHistory();

    function handleClick() {
        history.push('/shop')
    }
    return (
        <div>
           <img src={Logo}></img>
            <button type='button' onClick={handleClick}>Shop</button>
        </div>
    )
}

export default HomePage;