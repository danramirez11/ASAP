import { useState } from "react";
import { Game, Rounds, Status, Teams } from "../../types/types";

type CardType = {
  teams: Teams;
  rounds: Rounds;
  onRounds: () => Game[];
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
        <>
        <button id="team1" onClick={() => handleWinnerSelection('team1')}>{teams.team1.name}</button>
        <button id="team2" onClick={() => handleWinnerSelection('team2')}>{teams.team2.name}</button>
        </>
        :
        <>
        <h1>{rounds[status.round].games[status.game].players[0]} vs {rounds[status.round].games[status.game].players[1]}</h1>
        <h1>{rounds[status.round].games[status.game].name}</h1>
        <h4>{rounds[status.round].games[status.game].card}</h4>
        <h2>{rounds[status.round].games[status.game].cathegory}</h2>
        {rounds[status.round].games[status.game].type === 'coop' ? <h3>Grupal</h3> : <h3>Individual</h3>}
        <button onClick={() => setClicked(true)}>Siguiente</button>
        </>
      }
      <p>Ronda {status.round + 1}</p>
      <p>{teams.team1.name}: {teams.team1.score}</p>
      <p>{teams.team2.name}: {teams.team2.score}</p>
    </div>
  );
};

export default Card;