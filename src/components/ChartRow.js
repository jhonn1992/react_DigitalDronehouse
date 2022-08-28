import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.Name}</td>
                    <td>{props.Price}</td>
                    <td>{props.Category}</td>
                    <td>{props.Feature1}</td>
                    <td>{props.Feature2}</td>
                </tr>
            )
    }
    
        

export default ChartRow;