import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect } from 'react';

function ContentRowMovies(){
    const [cantProducts, setCantProducts] = useState([]);
    let cartProps = cantProducts;

    useEffect(() => {
        fetch('http://localhost:5000/api/products/')
        .then(response => response.json())
        .then(data => {
            setCantProducts([
                {
                    title: 'Products in Data Base',
                    color: 'primary', 
                    cuantity: data.stock,
                    icon: 'fas fa-clipboard-list'
                }, 
                {
                    title:'Total products in the Drones category', 
                    color:'success', 
                    cuantity: data.countByCategory.drone,
                    icon:'fas fa-helicopter'
                },
                {
                    title:'Total products in the Accesories category' ,
                    color:'warning',
                    cuantity:data.countByCategory.accesory,
                    icon:'fas fa-gamepad'
                }
            ])
        }).catch(error => console.log(error));
    }, []);

    return (
    
        <div className="row">
            
            {cartProps.map( (prop, i) => {

                return <SmallCard {...prop} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;