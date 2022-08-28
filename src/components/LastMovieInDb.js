import React from 'react';
import { useState, useEffect } from 'react';

function LastMovieInDb(){
    const [lastProduct, setLastProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/lastProduct')
        .then(response => response.json())
        .then(data => {
            setLastProduct(data)
        }).catch(error => console.log(error));
    }, []);    

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src= { lastProduct.imageUrl } alt=" Star Wars - Mandalorian "/>
                    </div>
                    <h4> {lastProduct.product_name} </h4>
                    <h5> - Features </h5>
                    <p> {lastProduct.features1} </p>
                    <p> {lastProduct.features2} </p>
                    <p> {lastProduct.features3} </p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
