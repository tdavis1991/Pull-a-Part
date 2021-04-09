import React from 'react';
import SearchBar from '../Components/SearchBar'
import DropDown from '../Components/DropDown';
import Category from '../Components/Categories'


function ShopPage() {
    return (
        <div>
            <SearchBar />
            <h2>Please Select Vehicle Make/Model/Year/Engine size through the drop down below</h2>
            <DropDown />
            <Category />
        </div>
        
    ) 

}


export default ShopPage;