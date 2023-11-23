import React from 'react'
import data from '../data';
import Articolo from "./Articolo";
const Cartelle = () => {
    return (

        <div class="container-fliud">
            <div class="row row-cols-1 row-cols-md-3 
                    row-cols-lg-4 ms-2">
                {data.map((el) => (
                    <Articolo key={el.id} {...el} />
                ))}
            </div>
        </div>

    )
}

export default Cartelle