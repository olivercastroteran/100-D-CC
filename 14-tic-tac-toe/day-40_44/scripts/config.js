function openPlayerConfig(e) {
  editedPlayer = +e.target.dataset.playerid;
  playerConfigOverlay.style.display = 'block';
  backdrop.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = 'none';
  backdrop.style.display = 'none';
  form.firstElementChild.classList.remove('error');
  errorsOutput.textContent = '';
  form.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const playerName = formData.get('playername').trim();

  if (!playerName) {
    e.target.firstElementChild.classList.add('error');
    errorsOutput.textContent = 'Please enter a valid name!';
    return;
  }

  const updatedPlayerData = document.getElementById(
    `player-${editedPlayer}-data`
  );
  updatedPlayerData.children[1].textContent = playerName;

  players[editedPlayer - 1].name = playerName;

  closePlayerConfig();
}
