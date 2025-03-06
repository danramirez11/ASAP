import { Status } from "../../types/types";

type winnerType = {
    status: Status;
}


const WinnersScreen = ({status} : winnerType) => {

    return (
        <>
        <h1>{status.winnerTeam === 'Empate' ? 'Oh no! Hubo un empate' : status.winnerTeam + ' son los ganadores'}</h1>

        <h4>{status.winnerPlayer.length === 1 ? 'Mejor jugador' : 'Mejores jugadores'}</h4>
        <h2>{status.winnerPlayer.map((p) => p)}</h2>
        </>
    );
    }


export default WinnersScreen;