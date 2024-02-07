const gameObject = function(){
    return {
        home: {
            teamName: `Brooklyn Nets`,
            colors: [`Black`, `White`],
            players: {
                "Alan Anderson": {
                    number: 4,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }

        },
        away: {
            teamName: `Charlotte Hornets`,
            colors: [`Turquoise`, `Purple`],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

function numPointsScored(playerName){
    const homePlayers = gameObject().home.players;
    for(const player in homePlayers){
      if (player === playerName) {
        return homePlayers[playerName].points
      }
    }

    const awayPlayers = gameObject().away.players;
    for(const player in awayPlayers){
      if (player === playerName) {
        return awayPlayers[playerName].points
      }
    }

    return `Player not found`;
  }

function shoeSize(playerName){
    const homePlayers = gameObject().home.players;
    for(const player in homePlayers){
        if (player === playerName) {
            return homePlayers[playerName].shoe
        }
    }

    const awayPlayers = gameObject().away.players;
    for(let player in awayPlayers){
        if (player === playerName) {
            return awayPlayers[playerName].shoe
        }
    }

    return `Player not found`
}

function teamColors(teamName){
    const homeTeamName = gameObject().home.teamName
    if (teamName === homeTeamName) {
        return gameObject().home.colors
    }
    const awayTeamName = gameObject().away.teamName
    if (teamName === awayTeamName){
        return gameObject().away.colors
    }

    return `Team not found`
}

function teamNames(){
    return [gameObject().home.teamName, gameObject().away.teamName]
}

function playerNumbers(teamName){
    const homeTeamName = gameObject().home.teamName
    const jerseyNumbers = []
    if (teamName === homeTeamName){
        const playerNames = gameObject().home.players
        for (const player in playerNames) {
            jerseyNumbers.push(playerNames[player].number)
        }
        return jerseyNumbers
    }

    const awayTeamName = gameObject().away.teamName
    if (teamName === awayTeamName){
        const playerNames = gameObject().away.players
        for (const player in playerNames) {
            jerseyNumbers.push(playerNames[player].number)
        }
        return jerseyNumbers
    }
    return 'Team not found'
}

function playerStats(playerName){
    const homePlayers = gameObject().home.players
    for (const player in homePlayers) {
        if (player === playerName){
            return gameObject().home.players[player]
        }
    }
    const awayPlayers = gameObject().away.players
    for (const player in awayPlayers) {
        if (player === playerName) {
            return gameObject().away.players[player]
        }
    }
    return `Player not found`
}

function bigShoeRebounds() {
    let largestShoeSize = 0
    let rebound = 0
    const allPlayers = {...gameObject().home.players, ...gameObject().away.players }
    for(const player in allPlayers){
        if(allPlayers[player].shoe > largestShoeSize){
            largestShoeSize = allPlayers[player].shoe
            rebound = allPlayers[player].rebounds
        } 
        return rebound
    }
    return rebound

}

function mostPointsScored(){
    let playerWithMostPoints
    let pointsScored = 0
    const allPlayers = {...gameObject().home.players, ...gameObject().away.players}
    for(const player in allPlayers){
        if(allPlayers[player].points > pointsScored){
            playerWithMostPoints = player
            pointsScored = allPlayers[player].points
        }
    }
    return playerWithMostPoints
}

function winningTeam(){
    let homePoints = 0
    let awayPoints = 0
    const homePlayers = gameObject().home.players
    const awayPlayers = gameObject().away.players

    for(const player in homePlayers){
        homePoints += homePlayers[player].points
    }
    for(const player in awayPlayers){
        awayPoints += awayPlayers[player].points
    }

    return homePoints > awayPoints ? `${gameObject().home.teamName} win ${homePoints}-${awayPoints}` : `${gameObject().away.teamName} win ${awayPoints}-${homePoints}`
}

function playerWithLongestName(){
    let mostChar = 0
    let longestName
    const allPlayers = {...gameObject().home.players, ...gameObject().away.players}
    for (const player in allPlayers){
        if(player.length > mostChar){
            mostChar = player.length
            longestName = player
        }
    }
    return longestName
}

function doesLongNameStealATon(){
    let mostSteals = 0
    const allPlayers = {...gameObject().home.players, ...gameObject().away.players}
    const longNameSteals = allPlayers[playerWithLongestName()].steals
    for (const player in allPlayers){
        if(allPlayers[player].steals > mostSteals){
            mostSteals = allPlayers[player].steals
        }
    }
    return (longNameSteals >= mostSteals)
}