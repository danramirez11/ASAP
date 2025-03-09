import './StartMenu.css';

interface startmenutypes {
    Onclick: () => void
}

function StartMenu({ Onclick }: startmenutypes){


    return(
        <>
        <h1>ASAP</h1>
        <p>El juego para terminarlo ¡Lo más pronto posible!</p>
        <button onClick={Onclick}>Tap to start</button>
        </>
    )
}
export default StartMenu


