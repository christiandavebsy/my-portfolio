const agents = [
  {
    "agent": "Jett",
    "image": "jett1.png",
    "clues": [
    ]
  },
  {
    "agent": "Jett",
    "image": "jett2.png",
    "clues": [
    ]
  },
  {
    "agent": "Jett",
    "image": "jett3.png",
    "clues": [
    ]
  },
  {
    "agent": "Jett",
    "image": "jett4.png",
    "clues": [
    ]
  },
  {
    "agent": "Sova",
    "image": "sova1.png",
    "clues": [
    ]
  },
  {
    "agent": "Sova",
    "image": "sova2.png",
    "clues": [
    ]
  },
  {
    "agent": "Sova",
    "image": "sova3.png",
    "clues": [
    ]
  },
  {
    "agent": "Sova",
    "image": "sova4.png",
    "clues": [
    ]
  },
  {
    "agent": "Cypher",
    "image": "cypher1.png",
    "clues": [
    ]
  },
  {
    "agent": "Cypher",
    "image": "cypher2.png",
    "clues": [
    ]
  },
  {
    "agent": "Cypher",
    "image": "cypher3.png",
    "clues": [
    ]
  },
  {
    "agent": "Cypher",
    "image": "cypher4.png",
    "clues": [
    ]
  },
  {
    "agent": "Raze",
    "image": "raze1.png",
    "clues": [
    ]
  },
  {
    "agent": "Raze",
    "image": "raze2.png",
    "clues": [
    ]
  },
  {
    "agent": "Raze",
    "image": "raze3.png",
    "clues": [
    ]
  },
  {
    "agent": "Raze",
    "image": "raze4.png",
    "clues": [
    ]
  },
  {
    "agent": "Omen",
    "image": "omen1.png",
    "clues": [
    ]
  },
  {
    "agent": "Omen",
    "image": "omen2.png",
    "clues": [
    ]
  },
  {
    "agent": "Omen",
    "image": "omen3.png",
    "clues": [
    ]
  },
  {
    "agent": "Omen",
    "image": "omen4.png",
    "clues": [
    ]
  },

];

let currentAgent;
let attemptsLeft = 3;

function startGame() {

  currentAgent = agents[Math.floor(Math.random() * agents.length)];
  attemptsLeft = 3;

  document.getElementById('attempts').innerText = `You have ${attemptsLeft} attempts remaining.`;
  displayClues();
  displayAgentImage();
}

function displayAgentImage() {
  ` <img src="${currentAgent.image}" alt="${currentAgent.agent}">`;
}

function displayClues() {
  const cluesContainer = document.getElementById('clues-container');
  cluesContainer.innerHTML = `<h1>Agent Clues:</h1> \n <img src="${currentAgent.image}" alt="${currentAgent.agent}">`;

  currentAgent.clues.forEach(clue => {
    const clueElement = document.createElement('p');
    clueElement.innerText = clue;
    cluesContainer.appendChild(clueElement);
  });
}

function checkGuess() {
  const userGuess = document.getElementById('guess').value.toLowerCase();

  if (userGuess === currentAgent.agent.toLowerCase()) {
    alert(`Congratulations! You guessed the agent correctly (${currentAgent.agent})!`);
    startGame();
  } else {
    attemptsLeft--;

    if (attemptsLeft > 0) {
      alert(`Incorrect guess. ${attemptsLeft} attempts remaining.`);
      displayClues();
    } else {
      alert(`Out of attempts. The correct agent was ${currentAgent.agent}.`);
      startGame();
    }
  }


  document.getElementById('guess').value = "";
}


startGame();