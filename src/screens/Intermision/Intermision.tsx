import { useEffect } from "react"
import { Rounds, Status } from "../../types/types"

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
            <h1>{rounds[status.round].games[status.game].type === 'comp' ? 'Es hora de un VS' : '¡A trabajar en equipo!'}</h1>
            <p>¿Quien se lleva la gloria?</p>
            <p className="vs-player">{rounds[status.round].games[status.game].players[0]}</p>
            <h3>vs</h3>
            <p className="vs-player">{rounds[status.round].games[status.game].players[1]}</p>
        </>
    )
    }
export default Intermision