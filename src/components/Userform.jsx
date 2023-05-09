import React from 'react'

function Userform({data, updateFieldHandler}) {
    
    return (
    <div>
        <div className="form-control">
            <label htmlFor="name">Nome:</label>
            <input type="text" name='text' id='name' placeholder='Digite seu nome'
            value={data.name || ""} //aqui ele recebe o valor que ficou gravado no form
            onChange={(e) => updateFieldHandler("name", e.target.value)}
            //aqui ele adiciona na funcao updateField o novo valor na posicao name atraves do target.value
            required />
        </div>
        <div className="form-control">
            <label htmlFor="email">E-mail:</label>
            <input type="email" name='email' id='email' placeholder='Digite seu email'
            value={data.email || ""} //aqui ele recebe o valor que ficou gravado no form
            onChange={(e) => updateFieldHandler("email", e.target.value)}
            //aqui ele adiciona na funcao updateField o novo valor na posicao email atraves do target.value
            required />
        </div>
        </div>
    )
}

export default Userform