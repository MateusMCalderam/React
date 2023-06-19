import { useState } from "react"

function Condicional() {

    const [email, setEmail]= useState()
    const [user, setUser] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUser(email)
    }

    function limparEmail(e) {
        e.preventDefault()
        setUser('')
    }
    return(
        <div>
            <h2>Cadastre Seu Email</h2>
            <form>
                <input type="text" name="user" id="user" placeholder="Digite seu email:" onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={enviarEmail}>Enviar Email</button>
                {user &&(
                    <div>
                        <h2>O email do usuário é {user}</h2>
                        <button onClick={limparEmail}>Limpar o email</button>
                    </div>
                ) }
            </form>
        </div>
    )
}
export default Condicional