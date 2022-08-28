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
                    icon: 'fa-clipboard-list'
                }, 
                {
                    title:'Total products in the Drones category', 
                    color:'success', 
                    cuantity: data.countByCategory.drone,
                    icon:'fa-award'
                },
                {
                    title:'Total products in the Accesories category' ,
                    color:'warning',
                    cuantity:data.countByCategory.accesory,
                    icon:'fa-user-check'
                }
            ])
        }).catch(error => console.log(error));
    }, []);

    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;