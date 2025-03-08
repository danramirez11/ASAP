import { useState, useRef } from "react";
import { Teams } from "../../types/types";

const InputTeams = ({
  Onclick,
  changeTeamName,
  addPlayerToTeam,
  teams
}: {
  Onclick: () => void;
  changeTeamName: (team: 'team1' | 'team2', name: string) => void;
  addPlayerToTeam: (team: 'team1' | 'team2', player: string) => void;
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

  

  return indexteam === 0 ? (
    <>
      <h1>Enter your Team names and members</h1>
      
        <h2>Team 1</h2>
        <input type="text" placeholder="Team 1 Name" ref={team1Ref}
          onChange={() => handleTeamNameChange(1)}
          />
        <button onClick={() => handleSubmitTeam(1)}>Submit Team 1</button>
          </>
  ) : indexteam === 1 ? (
        <>
        <h2>Add Members to Team 1</h2>
        { teams.team1.players.map((player) => (<p>{player.name}</p>))}
        <input type="text" placeholder="Member Name" ref={memberRef} />
        <button onClick={() => handleAddMember(1)}>Add Member</button>
        </>
   
  ) : indexteam === 2 ? (
    
      <div>
        <h2>Team 2</h2>
        <input
          type="text"
          placeholder="Team 2 Name"
          ref={team2Ref}
          onChange={() => handleTeamNameChange(2)}
        />
        <button onClick={() => handleSubmitTeam(2)}>Submit Team 2</button>
      </div>
  ) : (
      <>
        <h2>Add Members to Team 2</h2>
        { teams.team2.players.map((player) => (<p>{player.name}</p>))}
        <input type="text" placeholder="Member Name" ref={memberRef} />
        <button onClick={() => handleAddMember(2)}>Add Member</button>
        <button onClick={Onclick}>Lets play</button>
      </>
    
  );
};

export default InputTeams;