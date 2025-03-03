import { useEffect, useState } from "react";
import useGame from "../../hooks/useGame";
import { Teams } from "../../types/types";

const Card = ({ teams, OnNext }: { teams: Teams, OnNext: ()=> void }) => {

  const [indexgame, setindexgame] = useState(0);
  const [indexround, setindexround] = useState(0);
  const [player, setPlayer] = useState("");
  const [Card, setCard] = useState({nombre: "",reto: "",categoria: "",puntos: 0,grupal: false});

  const { selectRandomCard, selectGameWinner} = useGame();


  const handleCard = () => {
    if (indexgame < 3) {
      const random = Math.floor(Math.random() * teams.team1.players.length);
      
      
      const playerRandom = teams.team1.players[random].name;
      setPlayer(playerRandom);
      console.log(playerRandom);
      
      const card = selectRandomCard(false);
      setCard(card);
    }else if (indexgame === 3) {
        const card = selectRandomCard(true);
        setCard(card);
  }else{
    OnNext()
  }
};
  
  const handleWinnerSelection = (team: 'team1' | 'team2') => {
    console.log(`Winner: ${teams[team].name}`);
    const type = Card.grupal ? 'coop' : 'individual';
    selectGameWinner(team, type);
    handleCard();
    setindexgame(indexgame + 1);
    console.log(indexgame);
    teams[team].score += 1;
    console.log(teams);
    
    if (indexgame === 3) {
        console.log('round finished');
        setindexround(indexround + 1);
        

  }} ;

  

  useEffect(() => {
    handleCard();
  }, []);
console.log();

  
  return (
    <div>
        <h1>Your turn {player}</h1>
      <h1>{Card.nombre}</h1>
      <h4>{Card.reto}</h4>
      <h2>{Card.categoria}</h2>
      {Card.grupal ? <h3>Grupal</h3> : <h3>Individual</h3>}
      <button id="team1" onClick={() => handleWinnerSelection('team1')}>{teams.team1.name}</button>
      <button id="team2" onClick={() => handleWinnerSelection('team2')}>{teams.team2.name}</button>
    </div>
  );
};

export default Card;