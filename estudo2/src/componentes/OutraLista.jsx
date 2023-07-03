function OutrasListas({itens}) {
    return(
        <>
        <h3>Lista de Coisas:</h3>
        {itens.length > 0 ? (
            itens.map((item, index) => (
                <p key={index}>  {item}  </p>
            ))
            ) : (
                <p>A lista está vazia</p>
            )
        }
        </>
    )
}

export default OutrasListas