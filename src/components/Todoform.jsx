import React, { useState } from "react";
import "./Todoform.css"

const  Todoform=( {addTodo}) => {

    const[Id, setId] = useState("")
    const [Nome, setNome] = useState("")
    const [Desc, setDesc] = useState("")
    const [Valor, setValor] = useState("")
    const [DispVenda, setDispVenda] = useState("")


        const Submit = (e) =>{
            e.preventDefault();
            if(!Nome || !Desc || !Valor || !DispVenda) return;
            addTodo(Nome, Desc, Valor, DispVenda)
            setNome = ("");
            setDesc = ("")
            setValor = ("");
            setDispVenda = ("")
        }
    return(
        <>
        <section>
        <h1>Criar Produtos</h1>

        <form onSubmit={Submit}>
            <input type="text" placeholder="Digite o nome" onChange={(e) => setNome(e.target.value)} />
            <input type="text" placeholder="Digite a descrição" onChange={(e) => setDesc(e.target.value)}/>
            <input type="number" placeholder="Digite o valor" onChange={(e) => setValor(e.target.value)} />
            <label htmlFor="">Está disponível?</label>
            <select onChange={(e) => setDispVenda(e.target.value)} className="select">
                <option value="nao" className="op">Não</option>
                <option value="sim" className="op">Sim</option>
            </select>
            <button>Enviar</button>
        </form>
        </section>
        </>
    )

}

export default Todoform