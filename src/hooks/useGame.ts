import { useState } from "react"
import { Game, Rounds, Status, Teams } from "../types/types"

import {cards, subCatgories} from "../data/cards"

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
    page: 'finish',
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

    const manageRounds = () => {
        setTeams((prevTeams) => {
            const team1players = prevTeams.team1.players.map(player => player.name)
            const team2players = prevTeams.team2.players.map(player => player.name)

            console.log('jugadores iniciales: ', team1players, team2players)

            const games: Game[] = []

            for (let i = 0; i < 3; i++) {
                const game: Game = {
                    type: 'comp',
                    card: '',
                    name: '',
                    cathegory: '',
                    players: [],
                    winner: '',
                    finished: false,
                    subCathegory: 'none'
                }

                const player1 = team1players[Math.floor(Math.random() * team1players.length)]
                const player2 = team2players[Math.floor(Math.random() * team2players.length)]
                game.players = [player1, player2]

                console.log('jugadores seleccionados: ', player1, player2)

                team1players.splice(team1players.indexOf(player1), 1)
                team2players.splice(team2players.indexOf(player2), 1)

                console.log('jugadores restantes: ', team1players, team2players)

                const card = selectRandomCard(false)
                game.card = card.reto.replace('PLAYER1', player1).replace('PLAYER2', player2) + ' ' + card.condicion_victoria.replace('PLAYER1', player1).replace('PLAYER2', player2)
                game.name = card.nombre
                game.cathegory = card.categoria

                if (card.subcategoria) {
                    const subCat: string[] = subCatgories[card.categoria as keyof typeof subCatgories]
                    game.subCathegory = subCat[Math.floor(Math.random() * subCat.length)]
                }

                games.push(game)
            }

            const grupalCard = selectRandomCard(true)

            const grupalGame: Game = {
                type: 'coop',
                card: grupalCard.reto.replace('PLAYER1', teams.team1.name).replace('PLAYER2', teams.team2.name) + ' ' + grupalCard.condicion_victoria.replace('PLAYER1', teams.team1.name).replace('PLAYER2', teams.team2.name),
                name: grupalCard.nombre,
                cathegory: grupalCard.categoria,
                players: [teams.team1.name, teams.team2.name],
                winner: '',
                finished: false,
                subCathegory: 'none'
            }

            if (grupalCard.subcategoria) {
                const subCat: string[] = subCatgories[grupalCard.categoria as keyof typeof subCatgories]
                grupalGame.subCathegory = subCat[Math.floor(Math.random() * subCat.length)]
            }

            games.push(grupalGame)

            const shuffledGames: Game[] = games.sort(() => Math.random() - 0.5);
            console.log(shuffledGames)

            setStatus((p) => {
                setRounds((prevRounds: Rounds) => {
                    console.log(prevRounds)
                    const pRounds: Rounds = [...prevRounds]
                    console.log(p.round)
                    pRounds[p.round].games = shuffledGames
                    return pRounds
                })

                return p
            })

                return prevTeams
            })
    }

    const selectRandomCard = (grupaltype: boolean) => {
        if(grupaltype === false){
            const onlyIndividualCards = cards.filter(card => card.grupal === false)
            const randomCard = onlyIndividualCards[Math.floor(Math.random() * onlyIndividualCards.length)]
            return randomCard
        }else{
            const onlygrupalCards = cards.filter(card => card.grupal === true)
            const randomCard = onlygrupalCards[Math.floor(Math.random() * onlygrupalCards.length)] 
            return randomCard
        }
    }

    const manageFinishRound = () => {
        const newRound: Rounds = [...rounds]
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
        /*setStatus((p) => {
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
        }, 7000)*/

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
                
                manageRounds()

                setTimeout(() => {
                    setStatus((p) => {
                        return {
                            ...p,
                            page: 'stats'
                        }
                    })
                }, 1000);

                setTimeout(() => {
                    setStatus((p) => {
                        return {
                            ...p,
                            page: 'card'
                        }
                    })
                }, 5000)
            }
        } else {
            setStatus((p) => {
                return {
                    ...p,
                    game: p.game + 1,
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
            }, 5000)
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
        manageRounds();

        setStatus((p) => {
            return {
                ...p,
                page: 'card'
            }
        })
    }

    return {
        teams,
        rounds,
        status,
        setTeams,
        selectGameWinner,
        changeTeamName,
        addPlayerToTeam,
        startGame,
        selectRandomCard,
        manageRounds
    }
}

export default useGame