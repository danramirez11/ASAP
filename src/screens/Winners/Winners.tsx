import { useEffect, useState } from "react";
import { Status } from "../../types/types";
import "./ScreenStop.css";

type winnerType = {
    status: Status;
}


const WinnersScreen = ({status} : winnerType) => {
    const [pause, setPause] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPause(false)
        }, 5000)
    })

    const phrasesTruce = [
        '¡Oh no! Hubo un empate',
        '¡Vaya! No hay ganador',
        '¡Que sorpresa! Nadie gana',
        '¡Que emocionante! Nadie gana',
        'La batalla estuvo reñida',
    ]

    const phrasesWin = [
        '¡Aplausos, gritos y mucha envidia!',
        'Y los mejores son...',
        '¡Los reyes del juego!',
        '¡Los mejores de los mejores!',
    ]

    const random = [
        'Esto fue legendario',
        '¡Que emocionante!',
        '¡Que batalla!',
        '¡Que juego!',

    ]

    return (
        <>
        {
            pause ? 

            <>
            <div className="screenstop-body">
            <h1>¡Stop! Todo ha sido decidio</h1>
            </div>
            </>
            
            :

            <>
            <h2>{status.winnerTeam === 'Empate' ? phrasesTruce[Math.floor(Math.random() * phrasesTruce.length)] : phrasesWin[Math.floor(Math.random() * phrasesWin.length)]}</h2>

            <h1>{status.winnerTeam}</h1>
            <h1>{status.winnerPlayer.map((p) => p)}</h1>

            <p>{random[Math.floor(Math.random() * random.length)]}</p>
            </>

        }
        </>
    );
    }


export default WinnersScreen;