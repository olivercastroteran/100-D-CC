const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');

const edtitPlayer1Btn = document.getElementById('edit-player-1-btn');
const edtitPlayer2Btn = document.getElementById('edit-player-2-btn');
const cancelConfigBtn = document.getElementById('cancel-config-btn');

edtitPlayer1Btn.addEventListener('click', openPlayeConfig);
edtitPlayer2Btn.addEventListener('click', openPlayeConfig);

cancelConfigBtn.addEventListener('click', closePlayeConfig);
backdrop.addEventListener('click', closePlayeConfig);
