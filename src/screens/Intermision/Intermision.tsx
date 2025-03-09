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
            <h2>{rounds[status.round].games[status.game].type === 'comp' ? 'Es hora de un VS' : '¡A trabajar en equipo!'}</h2>
            <h3>¿Quien se lleva la gloria?</h3>
            <h3 className="vs-player">{rounds[status.round].games[status.game].players[0]}</h3>
            <h1>vs</h1>
            <h3 className="vs-player">{rounds[status.round].games[status.game].players[1]}</h3>
        </>
    )
    }
export default Intermision