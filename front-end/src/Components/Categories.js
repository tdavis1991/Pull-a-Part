import React from 'react';
import {useHistory} from 'react-router-dom';

function Category(){
    const categories=[
        "Healights",
        "Batteries",
        "Brakes",
        "Sparkplugs",
        "Altenators",
        "Shocks",
        "Rotors",
        "Oil-Filters",
        "Starters",
        "Fuel Pumps",
        "Air Filters",
        "Racing"
    ]

// const history = useHistory();

// function handleClick(route) {
//     history.push(`/shop/${route}`)
// }
    const categoryItem= categories.map((category) => 
    <button onClick={(category)}> {category} </button>
    )
    return(
        
        <div>
            <h2>Categories</h2>
            {categoryItem}
        </div>
    )

}



export default Category;