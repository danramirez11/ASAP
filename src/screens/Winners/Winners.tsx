import { Teams } from "../../types/types";
import useGame from "../../hooks/useGame";


const WinnersScreen = ({teams} : any) => {


    const selectgamewinner = teams.team1.score > teams.team2.score ? teams.team1.name : teams.team2.name;

    return (
        <>
        <h1>Winner</h1>
        <h2>{selectgamewinner}</h2>
        </>

    );
    }


export default WinnersScreen;