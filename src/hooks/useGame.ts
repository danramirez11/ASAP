import { useState } from "react"
import { Rounds, Status, Teams } from "../types/types"

import Cards from "../data/cards"

const emptyTeams: Teams = {
    team1: {
        name: '',
        score: 0,
        players: []
    },
    team2: {
        name: '',
        score: 0,
        players: []
    }
}

const emptyRounds: Rounds = [
    {games: [], winner: '', finished: false},
    {games: [], winner: '', finished: false},
    {games: [], winner: '', finished: false},
]

const emptyStatus: Status = {
    page: 'home',
    round: 0,
    game: 0,
    winnerTeam: '',
    winnerPlayer: [],
    gameFinished: false
}

const useGame = () => {
    const [teams, setTeams] = useState<Teams>(emptyTeams)
    const [rounds, setRounds] = useState<Rounds>(emptyRounds)
    const [status, setStatus] = useState<Status>(emptyStatus)

    const selectRandomCard = (grupaltype: boolean) => {

        if(grupaltype === false){
            const onlyIndividualCards = Cards.filter(card => card.grupal === false)
            const randomCard = onlyIndividualCards[Math.floor(Math.random() * onlyIndividualCards.length)]
            return randomCard
        
    }else{
        const onlygrupalCards = Cards.filter(card => card.grupal === true)
        const randomCard = onlygrupalCards[Math.floor(Math.random() * onlygrupalCards.length)] 
        return randomCard
    }
    }

    const manageFinishRound = () => {
        const newRound: Rounds = {...rounds}
        newRound[status.round].finished = true
        newRound[status.round].winner = teams.team1.score === teams.team2.score ? 'Empate' : teams.team1.score > teams.team2.score ? teams.team1.name : teams.team2.name
        setRounds(newRound)
    }

    const manageFinalStats = () => {
        setRounds((p) => {
            setTeams((prevTeams) => {
                setStatus((prevStatus) => {
                const pRounds = {...p}

                let team1Wins = 0;
                let team2Wins = 0;

                for (let i = 0; i < 3; i++) {
                    if (pRounds[i].winner === teams.team1.name) {
                        team1Wins++;
                    } else if (pRounds[i].winner === teams.team2.name) {
                        team2Wins++;
                    }
                }

                const winnerTeam = team1Wins > team2Wins ? teams.team1.name : team1Wins < team2Wins ? teams.team2.name : 'Empate';

                const pTeams = {...prevTeams}

                let maxScore = 0;
                let topPlayers: string[] = [];

                [...pTeams.team1.players, ...pTeams.team2.players].forEach(player => {
                    if (player.score > maxScore) {
                        maxScore = player.score;
                        topPlayers = [player.name];
                    } else if (player.score === maxScore) {
                        topPlayers.push(player.name);
                    }
                });

                return {
                    ...prevStatus,
                    winnerTeam,
                    winnerPlayer: topPlayers                
                }

                })

            return prevTeams

            })

            return p

        })
    }

    const manageNextGame = () => {
        setStatus((p) => {
            return {
                ...p,
                page: 'stats'
            }
        })

        setTimeout(() => {
            setStatus((p) => {
                return {
                    ...p,
                    page: 'card'
                }
            })
        }, 7000)

        if (status.game === 3) {
            manageFinishRound()

            if (status.round === 2) {
                manageFinalStats()

                setStatus((p) => {
                    return {
                        ...p,
                        gameFinished: true,
                        page: 'finish'
                    }
                })

            } else {

                setStatus((p) => {
                    return {
                        ...p,
                        round: p.round + 1,
                        game: 0
                    }
                })
                
                selectRandomCard(false)

            }
        } else {
            setStatus((p) => {
                return {
                    ...p,
                    game: p.game + 1
                }
            })
            selectRandomCard(false)
        }

    }

    const selectGameWinner = (type: string, winner: string) => {

        const newTeams: Teams = {...teams}

        if (type === 'coop'){
            if (newTeams.team1.name === winner) {
                newTeams.team1.score += 1
                newTeams.team1.players.forEach(player => player.score += 1)
            } else if (newTeams.team2.name === winner) {
                newTeams.team2.score += 1
                newTeams.team2.players.forEach(player => player.score += 1)
            }
        } else if (type === 'comp') {
            if (newTeams.team1.players.find(player => player.name === winner)) {
                newTeams.team1.score += 1
                const player = newTeams.team1.players.find(player => player.name === winner);
                if (player) {
                    player.score += 1;
                }
            } else if (newTeams.team2.players.find(player => player.name === winner)) {
                newTeams.team2.score += 1
                const player = newTeams.team2.players.find(player => player.name === winner);
                if (player) {
                    player.score += 1;
                }
            }
        }

        setTeams(newTeams)

        

        manageNextGame()
    }

    const changeTeamName = (team: 'team1' | 'team2', name: string) => {
        setTeams((p) => {
            return {
                ...p,
                [team]: {
                    ...p[team],
                    name
                }
            }
        })
    }

    const addPlayerToTeam = (team: 'team1' | 'team2', player: string) => {
        setTeams((p) => {
            return {
                ...p,
                [team]: {
                    ...p[team],
                    players: [...p[team].players, {name: player, score: 0}]
                }
            }
        })
    }

    const startGame = () => {
        selectRandomCard(false)

        setStatus((p) => {
            return {
                ...p,
                page: 'card'
            }
        })
    }

    return {
        teams,
        setTeams,
        rounds,
        status,
        selectGameWinner,
        changeTeamName,
        addPlayerToTeam,
        startGame,
        selectRandomCard
    }
}

export default useGame