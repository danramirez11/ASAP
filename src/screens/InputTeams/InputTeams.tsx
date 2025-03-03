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
    } else {
        const member = memberRef.current?.value || "";
        setSecondTeamMembers([...secondTeamMembers, member]);
        addPlayerToTeam("team2", member);
      
    }
    memberRef.current!.value = "";
  };

  const handleSubmitTeam = (team: number) => {
    if (team === 1) {
      console.log("Team 1:", teamName, teamMembers);
    } else {
      console.log("Team 2:", secondTeamName, secondTeamMembers);
    }
  };

  const handlenext = () => {
    setindexteam(1);
    console.log(teamMembers, secondTeamMembers);
    console.log(teams);
  };

  return indexteam === 0 ? (
    <div>
      <h1>Enter your Team names and members</h1>
      <div>
        <h2>Team 1</h2>
        <input type="text" placeholder="Team 1 Name" ref={team1Ref}
          onChange={() => handleTeamNameChange(1)}
        />
        <button onClick={() => handleSubmitTeam(1)}>Submit Team 1</button>
        <h2>Add Members to Team 1</h2>
        <input type="text" placeholder="Member Name" ref={memberRef} />
        <button onClick={() => handleAddMember(1)}>Add Member</button>
        <button onClick={() => handlenext()}>next</button>
      </div>
    </div>
  ) : (
    <div>
      <div>
        <h2>Team 2</h2>
        <input
          type="text"
          placeholder="Team 2 Name"
          ref={team2Ref}
          onChange={() => handleTeamNameChange(2)}
        />
        <button onClick={() => handleSubmitTeam(2)}>Submit Team 2</button>
        <h2>Add Members to Team 2</h2>
        <input type="text" placeholder="Member Name" ref={memberRef} />
        <button onClick={() => handleAddMember(2)}>Add Member</button>
        <button onClick={Onclick}>Lets play</button>
      </div>
    </div>
  );
};

export default InputTeams;