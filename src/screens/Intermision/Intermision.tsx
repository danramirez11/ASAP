import { useEffect } from "react"
import { Rounds, Status, Teams } from "../../types/types"
import './Intermision.css'


const Intermision = ({rounds, status, Onclick,teams} : {rounds: Rounds; status: Status; Onclick: () => void; teams: Teams}) => {
    const handle = () => {
        Onclick()
        console.log(rounds)
    }

    useEffect(() => {
        setTimeout(() => {
            handle()
        }
        , 5000)
        console.log(rounds)
    }, [])

    return (
        <>
        <div className="intermisionBackground">

            <h1>{rounds[status.round].games[status.game].type === 'comp' ? 'Es hora de un VS' : '¡A trabajar en equipo!'}</h1>

            <p>¿Quien se lleva la gloria?</p>
            <div className="versus">
                <div className="points-container">

            <p className="vs-player">{rounds[status.round].games[status.game].players[0]}</p>
            <p className="points">{teams.team1.score}</p>
                </div>
            <div className="points-container">

            <p className="vs-player">{rounds[status.round].games[status.game].players[1]}</p>
            <p className="points">{teams.team2.score}</p>
            </div>
            </div>

        </div>
        </>
    )
    }
export default Intermision