import { useState, useRef } from "react";
import { Teams } from "../../types/types";
import "./InputTeams.css";

const InputTeams = ({Onclick, changeTeamName, addPlayerToTeam, teams}: {Onclick: () => void; changeTeamName: (team: 'team1' | 'team2', name: string) => void; addPlayerToTeam: (team: 'team1' | 'team2', player: string) => void;
  teams: Teams;
}) => {
  const [indexteam, setindexteam] = useState(0);
  const [teamName, setTeamName] = useState<string>("");
  const [teamMembers, setTeamMembers] = useState<string[]>([]);
  const [secondTeamName, setSecondTeamName] = useState<string>("");
  const [secondTeamMembers, setSecondTeamMembers] = useState<string[]>([]);

  const team1Ref = useRef<HTMLInputElement>(null);
  const team2Ref = useRef<HTMLInputElement>(null);
  const memberRef = useRef<HTMLInputElement>(null);

  const handleTeamNameChange = (team: number) => {
    if (team === 1) {
      const name = team1Ref.current?.value || "";
      setTeamName(name);
      changeTeamName("team1", name);
    } else {
        const secondName = team2Ref.current?.value || "";
      setSecondTeamName(team2Ref.current?.value || "");
      changeTeamName("team2", secondName);
    }
  };

  const handleAddMember = (team: number) => {
    if (team === 1) {
      const member = memberRef.current?.value || "";
      setTeamMembers([...teamMembers, member]);
      addPlayerToTeam("team1", member);
      if(teamMembers.length === 2){
        setindexteam(2);
      }
    } else {
        const member = memberRef.current?.value || "";
        setSecondTeamMembers([...secondTeamMembers, member]);
        addPlayerToTeam("team2", member);
        if(secondTeamMembers.length === 2){

        Onclick();

        }
    }
    memberRef.current!.value = "";
  };

  const handleSubmitTeam = (team: number) => {
    if (team === 1) {
      console.log("Team 1:", teamName, teamMembers);
      setindexteam(1);
    } else {
      setindexteam(3)
      console.log("Team 2:", secondTeamName, secondTeamMembers);
    }
  };

  return (
    <div className="screeninputbody">
      {indexteam === 0 ? (
        <>
        <h1>¿Cómo se llama tu team?</h1>
          <div className="card-input">
            <h2>Team 1: <span>{teams.team1.name}</span></h2>
            <p className="text-team">¡Dale un nombre a tu <b>Team!</b></p>
            <div className="placeholder-button">
            <input className="placeholder-team" type="text" placeholder="" ref={team1Ref}
            onChange={() => handleTeamNameChange(1)}
            />
            <button onClick={() => handleSubmitTeam(1)}>Aceptar</button>
            </div>
          </div>
        </>
      ) : indexteam === 1 ? (
        <>
          <h1>¿Apodos épicos o qué?</h1>
          <div className="card-input">
            <h2>{teams.team1.name}</h2>
            <p className="text-team">Pon los apodos de tu <b>Team</b></p>
            { teams.team1.players.map((player) => (<p className="text-team" key={player.name}>{player.name}</p>))}
            <div className="placeholder-button">
            <input className="placeholder-team" type="text" placeholder="" ref={memberRef} />
            <button onClick={() => handleAddMember(1)}>{teamMembers.length < 2 ? 'Agregar' : 'Siguiente'}</button>
            </div>
          </div>
        </>
      ) : indexteam === 2 ? (
        <>
          <h1>¿Como se llama tu team?</h1>
          <div className="card-input">
            <h2>Team 2: <span>{teams.team2.name}</span></h2>
            <p className="text-team">¡Dale un nombre a tu <b>Team!</b></p>
            <div className="placeholder-button">
            <input className="placeholder-team"
              type="text"
              placeholder=""
              ref={team2Ref}
              onChange={() => handleTeamNameChange(2)}
            />
            <button onClick={() => handleSubmitTeam(2)}>Aceptar</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>¿Apodos épicos o qué?</h1>
          <div className="card-input">
            <h2>{teams.team2.name}</h2>
            <p className="text-team">Pon los apodos de tu <b>Team</b></p>
            { teams.team2.players.map((player) => (<p className="text-team" key={player.name}>{player.name}</p>))}
            <div className="placeholder-button">
            <input className="placeholder-team" type="text" placeholder="" ref={memberRef} />
            <button onClick={() => handleAddMember(2)}>{secondTeamMembers.length < 2 ? 'Agregar' : '¡A jugar!'}</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InputTeams;