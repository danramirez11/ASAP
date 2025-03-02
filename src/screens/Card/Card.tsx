import { useEffect, useState } from "react";
import useGame from "../../hooks/useGame";
import { Teams } from "../../types/types";

const Card = ({ teams }: { teams: Teams }) => {
  const [Card, setCard] = useState({nombre: "",reto: "",categoria: "",puntos: 0,grupal: false});

  const { selectRandomCard, selectGameWinner} = useGame();


  const handleCard = () => {
    const card = selectRandomCard();
    setCard(card);
    console.log(card);
  };

  const handleWinnerSelection = (team: 'team1' | 'team2') => {
    console.log(`Winner: ${teams[team].name}`);
    handleCard();
  };

  useEffect(() => {
    handleCard();
  }, []);

  return (
    <div>
      <h1>{Card.nombre}</h1>
      <h4>{Card.reto}</h4>
      <h2>{Card.categoria}</h2>
      {Card.grupal ? <h3>Grupal</h3> : <h3>Individual</h3>}
      <button onClick={() => handleWinnerSelection('team1')}>{teams.team1.name}</button>
      <button onClick={() => handleWinnerSelection('team2')}>{teams.team2.name}</button>
    </div>
  );
};

export default Card;