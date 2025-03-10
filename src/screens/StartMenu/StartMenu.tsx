import './StartMenu.css';

interface startmenutypes {
    Onclick: () => void
}

function StartMenu({ Onclick }: startmenutypes) {
    return (
        <div className='startmenu-body'>
            <div className='screeninicio'>
                <p>EL JUEGO PARA TERMINARLO</p>
                <p>¡LO MÁS PRONTO POSIBLE!</p>
                <button onClick={Onclick}>¡ Comenzar !</button>
            </div>
        </div>
    );
}

export default StartMenu;