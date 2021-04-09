import React from 'react';
import SearchBar from '../Components/SearchBar'
import Logo from './pull-a-part.png'


function CheckoutPage() {

    // function handleClick() {
    //     history.push('/shop')
    // }
    return (
        <div>
            <SearchBar />
            <div>
            <img src={Logo}></img>
            <h2>Checkout</h2>

                <table >
                    <tr>
                        <th>Part</th>
                        <th>Price per unit</th>
                        <th>Quantity</th>
                    </tr>

                    <tr>
                        <th>Insert part here</th>
                        <th>Price per unit here</th>
                        <th>Drop down for Quantity here</th>
                    </tr>

                    <tr>
                        <th>Insert part here</th>
                        <th>Price per unit here</th>
                        <th>Drop down for Quantity here</th>
                    </tr>

                    
                    <tr>
                        <th>Insert part here</th>
                        <th>Price per unit here</th>
                        <th>Drop down for Quantity here</th>
                    </tr>
                </table>
            </div>
            <br></br>
            <button id='shop-button' type='button'>Checkout</button>

            <h2 className="subtotal">Subtotal</h2>
            <h3 className="subtotal"> $$$</h3>
        </div>
    )

}


export default CheckoutPage;