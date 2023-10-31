
function getPlayerName() {
  return localStorage.getItem('userName') ?? 'Mystery player';
}

const playerNameEl = document.querySelector('.player-name');

playerNameEl.textContent = getPlayerName();

setInterval(() => {
  const score = Math.floor(Math.random() * 100);
  const chatText = document.querySelector('#player-messages');
  chatText.innerHTML =
    `<div class="event"><span class="player-event">poop</span> scored ${score}</div>` + chatText.innerHTML;
  chatText.removeChild(chatText.childNodes[chatText.childNodes.length -1]);
}, 2000);
