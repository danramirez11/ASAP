import { useState } from 'react'
import './App.css'
import StartMenu from './screens/StartMenu/StartMenu'
import InputTeams from './screens/InputTeams/InputTeams'
import Card from './screens/Card/Card'
import { Teams } from './types/types'

import useGame from './hooks/useGame'

function App() {

  const { teams, changeTeamName, addPlayerToTeam  } = useGame()
  const [indexscreen, setindexscreen] = useState(0)
  

 

  const screens = indexscreen === 0 ? (
    <StartMenu Onclick={() => setindexscreen(1)} />
  ) : indexscreen === 1 ? (
    <InputTeams
      Onclick={() => setindexscreen(2)}
      changeTeamName={changeTeamName}
      addPlayerToTeam={addPlayerToTeam}
      teams={teams}
    />
  ) : indexscreen === 2 ? (
    <Card teams={teams} />
  ) : null

  return <div className="App">{screens}</div>
}

export default App