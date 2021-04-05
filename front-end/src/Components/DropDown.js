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
                <select name='model' value={car.make} onChange={handleChange} placeholder='Model'>
                    <option value='honda'>Honda</option>
                    <option value='ford'>Ford</option>
                    <option value='chevy'>Chevy</option>
                    <option value='kia'>Kia</option>
                    <option value='toyota'>Toyota</option>
                    <option value='nissan'>Nissan</option>
                </select>
                <select name='year' value={car.make} onChange={handleChange} placeholder='Year'>
                    <option value='honda'>Honda</option>
                    <option value='ford'>Ford</option>
                    <option value='chevy'>Chevy</option>
                    <option value='kia'>Kia</option>
                    <option value='toyota'>Toyota</option>
                    <option value='nissan'>Nissan</option>
                </select>
                <select name='engine' value={car.make} onChange={handleChange} placeholder='Engine'>
                    <option value='honda'>Honda</option>
                    <option value='ford'>Ford</option>
                    <option value='chevy'>Chevy</option>
                    <option value='kia'>Kia</option>
                    <option value='toyota'>Toyota</option>
                    <option value='nissan'>Nissan</option>
                </select>
            </form>
            
        </div>
    )

}

export default DropDown;