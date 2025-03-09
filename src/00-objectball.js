function gameObject(home, away, teamName, colors, players) {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Torquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

console.log(gameObject());

//Building Functions
function homeTeamName() {
  let object = gameObject();

  return object["home"]["teamName"];
  // return gameObject().home.teamName;
}

//debugging in JS

console.log(homeTeamName());

/*

//Accessing key Values and Iterating Through Objects
let oo = {
  foo: 42,
  bar: 83,
  "key w/ spaces": true,
};
console.log(oo["foo"]);
console.log(oo["bar"]);
console.log(oo["key w/ spaces"]);

console.log(oo.foo);
console.log(oo.bar);

for (let key in oo) {
  let value = oo[key];
  console.log("Key:", key, "value:", value);
}

console.log(Object.keys(oo));
console.log(Object.values(oo));
console.log(Object.entries(oo));
console.log("Aquila Jedidiah");

//Iterating through Deeply nested Objects
console.log("**********");
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    debugger;
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      debugger;
      let data = teamObj.player;
      for (let key in data) {
        debugger;
      }
      console.log(data);
    }
  }
}

console.log(goodPractices());
*/

function numPointsScored(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    let team = game[teamKey];
    if (team.players[playerName]) {
      return team.players[playerName].points;
    }
  }
  return "Player Unavailable";
}
console.log("Aquila Jedidiah");
console.log(numPointsScored("Brendan Haywood"));

function shoeSize(playerName) {
  const game = gameObject();

  for (let teamKey in game) {
    let team = game[teamKey];
    if (team.players[playerName]) {
      return team.players[playerName].shoe;
    }
  }
  return "Player unavailable";
}

console.log(shoeSize("Brook Lopez"));

// Retreive team colors
function teamColors(teamName) {
  const game = gameObject();
  for (let teamKey in game) {
    let team = game[teamKey];
    if (team.teamName === teamName) {
      return team.colors;
    }
  }
  return "Team unavailable";
}

console.log(teamColors("Brooklyn Nets"));

//List of all teamNames

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
  debugger;
}
console.log(teamNames());

//Player Numbers

function playerNumbers(teamName) {
  const game = gameObject();

  for (let teamKey in game) {
    let team = game[teamKey];
    if (team.teamName === teamName) {
      return Object.values(team.players).map((player) => player.number);
    }
  }
  return "Team Unavailable";
}

console.log(playerNumbers("Brooklyn Nets"));

function playerStats(playerName) {
  const game = gameObject();

  for (let teamKey in game) {
    let team = game[teamKey];
    if (team.players[playerName]) {
      debugger;
      return team.players[playerName];
    }
  }
  return "Player unavailable";
}

console.log(playerStats("Mason Plumlee"));

//big shoes rebounds

function bigShoeRebounds() {
  const game = gameObject();
  let maxShoeSize = 0;
  let playerRebounds = 0;

  for (let teamKey in game) {
    let team = game[teamKey];
    for (let player in team.players) {
      if (team.players[player].shoe > maxShoeSize) {
        maxShoeSize = team.players[player].shoe;
        playerRebounds = team.players[player].rebounds;
      }
    }
  }
  return playerRebounds;
}

console.log(bigShoeRebounds());
console.log(bigShoeRebounds());

//Most points scored
function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let topPlayer = "";

  for (let teamKey in game) {
    let team = game[teamKey];
    for (let player in team.players) {
      if (team.players[player].points > maxPoints) {
        maxPoints = team.players[player].points;
        topPlayer = player;
      }
    }
  }
  return topPlayer;
}

console.log(mostPointsScored());

//Winning Team
function winningTeam() {
  const game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;

  for (let player in game.home.players) {
    homePoints += game.home.players[player].points;
  }

  for (let player in game.away.players) {
    awayPoints += game.away.players[player].points;
  }

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

console.log(winningTeam());

//player with longest Name

function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";

  for (let teamKey in game) {
    let team = game[teamKey];
    for (let player in team.players) {
      if (player.length > longestName.length) {
        debugger;
        longestName = player;
      }
    }
  }
  return longestName;
}

console.log(playerWithLongestName());

//doesLongNameStealATon function

function doesLongNameStealATon() {
  const game = gameObject();
  let longestNamePlayer = playerWithLongestName();
  let maxSteals = 0;
  let topStealer = "";

  for (let teamKey in game) {
    let team = game[teamKey];
    for (let player in team.players) {
      if (team.players[player].steals > maxSteals) {
        maxSteals = team.players[player].steals;
        debugger;
        topStealer = player;
      }
    }
  }

  return longestNamePlayer === topStealer;
}

console.log(doesLongNameStealATon());
