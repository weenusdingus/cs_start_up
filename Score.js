function getPlayerName() {
  return localStorage.getItem('userName') ?? 'Mystery player';
}

const playerNameEl = document.querySelector('.player-name');

playerNameEl.textContent = getPlayerName();

export default class Score {
    score = 0;
    HIGH_SCORE_KEY = "highScore";
  
    constructor(ctx, scaleRatio) {
      this.ctx = ctx;
      this.canvas = ctx.canvas;
      this.scaleRatio = scaleRatio;
    }
  
    update(frameTimeDelta) {
      this.score += frameTimeDelta * 0.01;
    }
  
    reset() {
      this.score = 0;
    }
  
    setHighScore() {
      const highScore = Number(localStorage.getItem(this.HIGH_SCORE_KEY));
      if (this.score > highScore) {
        localStorage.setItem(this.HIGH_SCORE_KEY, Math.floor(this.score));
      }
    }

    async saveScore() {
      const userName = getPlayerName();
      const date = new Date().toLocaleDateString();
      const newScore = {name: userName, score: this.score, date: date};
      console.log(newScore);
      try {
        const response = await fetch('/api/score', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(newScore),
        });
  
        // Store what the service gave us as the high scores
        const scores = await response.json();
        localStorage.setItem('scores', JSON.stringify(scores));
      } catch {
        // If there was an error then just track scores locally
        this.updateScoresLocal(newScore);
      }
    }

    updateScoresLocal(newScore) {
      let scores = [];
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        scores = JSON.parse(scoresText);
      }
  
      let found = false;
      for (const [i, prevScore] of scores.entries()) {
        if (newScore > prevScore.score) {
          scores.splice(i, 0, newScore);
          found = true;
          break;
        }
      }
  
      if (!found) {
        scores.push(newScore);
      }
  
      if (scores.length > 10) {
        scores.length = 10;
      }
  
      localStorage.setItem('scores', JSON.stringify(scores));
    }
  
  
    draw() {
      const highScore = Number(localStorage.getItem(this.HIGH_SCORE_KEY));
      const y = 20 * this.scaleRatio;
  
      const fontSize = 20 * this.scaleRatio;
      this.ctx.font = `${fontSize}px "Pixeltype"`;
      this.ctx.fillStyle = "#3e3f22";
      const scoreX = this.canvas.width - 75 * this.scaleRatio;
      const highScoreX = scoreX - 125 * this.scaleRatio;
  
      const scorePadded = Math.floor(this.score).toString().padStart(6, 0);
      const highScorePadded = highScore.toString().padStart(6, 0);
  
      this.ctx.fillText(scorePadded, scoreX, y);
      this.ctx.fillText(`HI ${highScorePadded}`, highScoreX, y);
    }
  }