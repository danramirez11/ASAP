import { useEffect, useState } from 'react'
import './App.css'
import StartMenu from './screens/StartMenu/StartMenu'
import InputTeams from './screens/InputTeams/InputTeams'
import Card from './screens/Card/Card'
import useGame from './hooks/useGame'
import WinnersScreen from './screens/Winners/Winners'
import Intermision from './screens/Intermision/Intermision'

function App() {

  const { teams, changeTeamName, addPlayerToTeam, manageRounds, rounds, status, selectGameWinner, startGame } = useGame()
  const [indexscreen, setindexscreen] = useState(0)

  const handleStartGame = () => {
    startGame()
    setindexscreen(2)
  }

  useEffect(() => {
    if (status.page === 'stats') {
      setindexscreen(2)
    }
  }, [status.page])
  
  const screens = 
    status.page === 'finish' ? 
    (<WinnersScreen status={status}/>) : 
    
    indexscreen === 0 ? 
    ( <StartMenu Onclick={() => setindexscreen(1)} />) : 
    
    indexscreen === 1 ? (
    <InputTeams
      Onclick={ () => handleStartGame()} changeTeamName={changeTeamName} addPlayerToTeam={addPlayerToTeam} teams={teams}/>
    ) : 
    
    indexscreen === 2 ? (
      <Intermision rounds={rounds} status={status} teams={teams} Onclick={() => setindexscreen(3)} />
    ) :
    
    indexscreen === 3 ? (
    <Card teams={teams} onRounds = {() => manageRounds()} rounds = {rounds} status = {status} selectWinner = {(type, winner) => selectGameWinner(type, winner)}/> ) : 
    
    <h1>no</h1>

  return <div className="App">{screens}</div>
}

export default App