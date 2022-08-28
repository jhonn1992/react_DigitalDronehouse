import React from 'react';
import ChartRow from './ChartRow';
import { useState, useEffect } from 'react';

function Chart (){
    const [products, setProducts] = useState([]);
    let tableRowsData = products;

    useEffect(() => {
        fetch('http://localhost:5000/api/products/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.products.forEach(product => {
                setProducts(currentProduct => currentProduct.concat(
                    {
                        Name: product.product_name,
                        Price: product.price, 
                        Category: product.category_id == 1 ? "Drone" : "Accesory",
                        Feature1: product.features1,
                        Feature2: product.features2,
                    }
                ))               
            });

        }).catch(error => console.log(error));
    }, []);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Feature One</th>
                                <th>Feature Two</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Feature One</th>
                                <th>Feature Two</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;