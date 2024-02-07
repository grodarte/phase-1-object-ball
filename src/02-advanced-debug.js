console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}

// then, call the function so it runs!
goodPractices()

function numPointsScored(playerName){
  const homePlayers = gameObject().home.players;
  for(let player in homePlayers){
    if (player === playerName) {
      return homePlayers[playerName].points
    }
  }
  debugger
  const awayPlayers = gameObject().away.players;
  for(let player in awayPlayers){
    if (player === playerName) {
      return awayPlayers[playerName].points
    }
  }
  debugger
  return `Player not found`;
}