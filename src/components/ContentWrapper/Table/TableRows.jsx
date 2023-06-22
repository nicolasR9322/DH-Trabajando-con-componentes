import React from 'react';


export const TableRows = ({titulo,duracion,rating,genero,premios}) => {
    return(
        <tbody>
             <tr className="text-center">
                        
                        <td>{titulo}</td>
                        <td>{duracion}</td>
                        <td>{rating}</td>
                        <td>{genero}</td>
                        <td>{premios}</td>
                </tr>
        </tbody>
    )
}