import { useEffect } from "react"
import { Teams } from "../../types/types"

const Intermision = ({teams,Onclick} : {teams: Teams; Onclick: () => void}) => {
    const handle = () => {
        Onclick()
        console.log(teams)
    }
    useEffect(() => {
        setTimeout(() => {
            handle()
        }
        , 5000)
        console.log(teams)
    }, [])

    return (
        <div>
          
            <h2>¡Es hora de un versus!</h2>
            <h3>Quien se lleva la gloria</h3>
            <h3>{teams.team1.name} vs {teams.team2.name}</h3>
        </div>
    )
    }
export default Intermision