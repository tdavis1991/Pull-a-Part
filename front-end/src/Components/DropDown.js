import { Select } from '@material-ui/core';
import React, {useState, useEffect} from 'react';

function DropDown() {
    const [car, setCar] = useState({
        make: '',
        model: '',
        year: '',
        engine: ''
    })

    const handleChange = e => {
        console.log(car)
        setCar({
            ...car,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form>
                <select name='make' value={car.make} onChange={handleChange} placeholder='Make'>
                    <option value='honda'>Honda</option>
                    <option value='ford'>Ford</option>
                    <option value='chevy'>Chevy</option>
                    <option value='kia'>Kia</option>
                    <option value='toyota'>Toyota</option>
                    <option value='nissan'>Nissan</option>
                </select>
                <select name='model' value={car.model} onChange={handleChange} placeholder='Model'>
                    <option value='civic'>Civic</option>
                    <option value='accord'>Accord</option>
                    <option value='odyssey'>Odyssey</option>
                    <option value='cr-v'>CR-V</option>
                    <option value='fit'>Fit</option>
                    <option value='pilot'>Pilot</option>
                </select>
                <select name='year' value={car.year} onChange={handleChange} placeholder='Year'>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    <option value='2017'>2017</option>
                    <option value='2016'>2016</option>
                </select>
                <select name='engine' value={car.engine} onChange={handleChange} placeholder='Engine'>
                    <option value='4 cylinder'>4 cylinder</option>
                    <option value='6 cylinder'>6 Cylinder</option>
                    <option value='8 cylinder'>8 Cylinder</option>
                </select>
            </form>
            
        </div>
    )

}

export default DropDown;