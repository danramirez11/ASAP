import { useEffect } from "react"
import { Rounds, Status } from "../../types/types"
import './Intermision.css'

const Intermision = ({rounds, status, Onclick} : {rounds: Rounds; status: Status; Onclick: () => void}) => {
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
            <p className="vs-player">{rounds[status.round].games[status.game].players[0]}</p>
            <p className="vs-player">{rounds[status.round].games[status.game].players[1]}</p>
            </div>
        </div>
        </>
    )
    }
export default Intermision