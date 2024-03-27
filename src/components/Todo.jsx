import React from "react";
import { useState } from "react";
import "./todo.css"


function todo({ todo }){
  
    return(
        <>
        <div className="todo">
                <table>
                    <tr>
                        <th>Nome</th>
                        <th>Valor</th>
                    </tr>
                    <tr>
                        <td>{todo.Nome}</td>
                        <td>{todo.Valor}</td>
                    </tr>

                </table>
            </div>    
       
        </>
    )
}

export default todo