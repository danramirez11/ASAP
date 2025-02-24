export type Teams = {
    team1: {
        name: string,
        score: number,
        players: Player[]
    },
    team2: {
        name: string,
        score: number,
        players: Player[]
    }
}

type Player = {
    name: string,
    score: number
}

export type Rounds = [ 
    {games: Game[], winner: string, finished: boolean},
    {games: Game[], winner: string, finished: boolean},
    {games: Game[], winner: string, finished: boolean},
]


type Game = {
    type: 'coop' | 'comp',
    card: string,
    cathegory: string,
    players: string[],
    winner: string,
    finished: boolean
}

export type Status = {
    page: 'home' | 'card' | 'stats' | 'finish',
    round: number,
    game: number,
    winnerTeam: string,
    winnerPlayer: string[],
    gameFinished: boolean
}
