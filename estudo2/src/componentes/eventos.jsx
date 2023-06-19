import Button from "./button";

function Eventos() {

    function meuEvento() {
        console.log("Ativando Primeiro Evento");
    }
    function segundoEvent() {
        console.log("Ativando o segundo evento");
    }

    return(
            <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvent} text="Segundo Evento"/>
            </div>
    )
}

export default Eventos