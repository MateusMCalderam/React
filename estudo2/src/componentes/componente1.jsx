

function Pessoa(props) {
    return(
        <div>
            <h2>Adicionado via Props</h2>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Profissão {props.profissão}</p>
        </div>
    )
}

export default Pessoa 