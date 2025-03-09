import { useState } from "react";
import { Rounds, Status, Teams } from "../../types/types";
import "./Card.css";

type CardType = {
  teams: Teams;
  rounds: Rounds;
  onRounds: () => void;
  status: Status;
  selectWinner: (type: string, winner: string) => void;
}

const Card = ({ teams, rounds, status, selectWinner }: CardType) => {

  const [clicked, setClicked] = useState(false);
  
  const handleWinnerSelection = (team: 'team1' | 'team2') => {
    console.log(`Winner: ${teams[team].name}`);
    const type = rounds[status.round].games[status.game].type;
    
    if (type === 'coop') {
      selectWinner(type, team === 'team1' ? teams.team1.name : teams.team2.name);
    } else {
      if (team === 'team1') {
        selectWinner(type, rounds[status.round].games[status.game].players[0])
      } else {
        selectWinner(type, rounds[status.round].games[status.game].players[1]);
      } 
    }

    setClicked(false);

} ;

  console.log(teams)
  console.log(rounds)
  console.log(status)

  console.log(rounds[status.round].games[status.game].players[0])
  if (rounds[status.round].games.length === 0) {
    return <h1>Cargando...</h1>;
  }
  
  return (
    <div>
      { clicked ? 
        <><div className="winner-selection-body">
          <div className="screenwinnerselection">
          <h1>¡Solo uno puede brillar!</h1>
          <p>¿Quien se lleva la gloria?</p>
          <button id="team1" onClick={() => handleWinnerSelection('team1')}>{teams.team1.name}</button>
          <button id="team2" onClick={() => handleWinnerSelection('team2')}>{teams.team2.name}</button>
          <p>Selecciona el equipo que ganó el reto</p>
          </div>
          </div>
        </>
        :
        <>
          <h1>{rounds[status.round].games[status.game].name}</h1>
          <p>{rounds[status.round].games[status.game].players[0]} vs {rounds[status.round].games[status.game].players[1]}</p>
          <p>{rounds[status.round].games[status.game].card}</p>
          { rounds[status.round].games[status.game].subCathegory !== 'none' &&
            <div className="card-cathegory">
              <h2>Categoría</h2>
              <h4>{rounds[status.round].games[status.game].subCathegory}</h4>
            </div>
          }
          <button onClick={() => setClicked(true)}>ASAP! ¿Quién fue el ganador?</button>
        </>
      }
    </div>
  );
};

export default Card;