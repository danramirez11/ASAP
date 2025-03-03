import { useState } from 'react'
import './App.css'
import StartMenu from './screens/StartMenu/StartMenu'
import InputTeams from './screens/InputTeams/InputTeams'
import Card from './screens/Card/Card'
import { Teams } from './types/types'

import useGame from './hooks/useGame'
import WinnersScreen from './screens/Winners/Winners'

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
    <Card teams={teams} OnNext={() => setindexscreen(3)} />
  ) : indexscreen === 3 ? (
    <WinnersScreen teams={teams} />
  ) : <h1>loco que putas haces</h1>

  return <div className="App">{screens}</div>
}

export default App