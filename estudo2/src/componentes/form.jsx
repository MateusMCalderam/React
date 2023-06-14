import {useState} from 'react'


function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('Cadastrou o usuario');
        console.log(nome);
        console.log(senha);
    }

    const [nome,SetNome] = useState()
    const [senha,SetSenha] = useState()
    return (
        <div>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome do Usuário: </label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome" onChange={(e) => SetNome(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="senha">Senha do Usuário: </label>
                    <input type="password" id="senha" name="senha" placeholder="Digite o seu nome" onChange={(e) => SetSenha(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form