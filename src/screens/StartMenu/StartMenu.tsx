import './StartMenu.css';

interface startmenutypes {
    Onclick: () => void
}

function StartMenu({ Onclick }: startmenutypes) {
    return (
        <div className='startmenu-body'>
            <div className='screeninicio'>
                <p>EL JUEGO PARA TERMINARLO
                ¡LO MÁS PRONTO POSIBLE!</p>
                <button onClick={Onclick}>Tap to start</button>
            </div>
        </div>
    );
}

export default StartMenu;


