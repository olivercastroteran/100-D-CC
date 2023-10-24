const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;

const players = [
  {
    name: '',
    symbol: 'X',
  },
  {
    name: '',
    symbol: 'O',
  },
];

const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const form = document.querySelector('form');
const errorsOutput = document.getElementById('config-errors');

const edtitPlayer1Btn = document.getElementById('edit-player-1-btn');
const edtitPlayer2Btn = document.getElementById('edit-player-2-btn');
const cancelConfigBtn = document.getElementById('cancel-config-btn');

const startNewGameBtn = document.getElementById('start-game-btn');
const gameArea = document.getElementById('active-game');
const gameFieldElmnts = document.querySelectorAll('#game-board li');
const activePlayerName = document.getElementById('active-player-name');

edtitPlayer1Btn.addEventListener('click', openPlayerConfig);
edtitPlayer2Btn.addEventListener('click', openPlayerConfig);

cancelConfigBtn.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);

form.addEventListener('submit', savePlayerConfig);

startNewGameBtn.addEventListener('click', startNewGame);

for (const gameField of gameFieldElmnts) {
  gameField.addEventListener('click', selectGameField);
}
