let AUDIO_JUMP = new Audio('audio_jump.mp3');
AUDIO_JUMP.volume = 0.05;
export default class Player {
    WALK_ANIMATION_TIMER = 200;
    walkAnimationTimer = this.WALK_ANIMATION_TIMER;
    cowboyRunImages = [];
  
    jumpPressed = false;
    jumpInProgress = false;
    falling = false;
    JUMP_SPEED = 0.6;
    GRAVITY = 0.4;
  
    constructor(ctx, width, height, minJumpHeight, maxJumpHeight, scaleRatio) {
      this.ctx = ctx;
      this.canvas = ctx.canvas;
      this.width = width;
      this.height = height;
      this.minJumpHeight = minJumpHeight;
      this.maxJumpHeight = maxJumpHeight;
      this.scaleRatio = scaleRatio;
  
      this.x = 10 * scaleRatio;
      this.y = this.canvas.height - this.height - 1.5 * scaleRatio;
      this.yStandingPosition = this.y;
  
      this.standingStillImage = new Image();
      this.standingStillImage.src = "images/cowboystationary.png";
      this.image = this.standingStillImage;
  
      const cowboyRunImage1 = new Image();
      cowboyRunImage1.src = "images/cowboy_run1.png";
  
      const cowboyRunImage2 = new Image();
      cowboyRunImage2.src = "images/cowboy_run2.png";
  
      this.cowboyRunImages.push(cowboyRunImage1);
      this.cowboyRunImages.push(cowboyRunImage2);
  
      //keyboard
      window.removeEventListener("keydown", this.keydown);
      window.removeEventListener("keyup", this.keyup);
  
      window.addEventListener("keydown", this.keydown);
      window.addEventListener("keyup", this.keyup);
  
      //touch
      window.removeEventListener("touchstart", this.touchstart);
      window.removeEventListener("touchend", this.touchend);
  
      window.addEventListener("touchstart", this.touchstart);
      window.addEventListener("touchend", this.touchend);
    }
  
    touchstart = () => {
      this.jumpPressed = true;
    };
  
    touchend = () => {
      this.jumpPressed = false;
    };
  
    keydown = (event) => {
      if (event.code === "Space") {
        this.jumpPressed = true;
      }
    };
  
    keyup = (event) => {
      if (event.code === "Space") {
        this.jumpPressed = false;
      }
    };
  
    update(gameSpeed, frameTimeDelta) {
      this.run(gameSpeed, frameTimeDelta);
  
      if (this.jumpInProgress) {
        this.image = this.standingStillImage;
      }
  
      this.jump(frameTimeDelta);
    }
  
    jump(frameTimeDelta) {
      if (this.jumpPressed) {
        this.jumpInProgress = true;
        AUDIO_JUMP.play();
      }
  
      if (this.jumpInProgress && !this.falling) {
        if (
          this.y > this.canvas.height - this.minJumpHeight ||
          (this.y > this.canvas.height - this.maxJumpHeight && this.jumpPressed)
        ) {
          this.y -= this.JUMP_SPEED * frameTimeDelta * this.scaleRatio;
        } else {
          this.falling = true;
        }
      } else {
        if (this.y < this.yStandingPosition) {
          this.y += this.GRAVITY * frameTimeDelta * this.scaleRatio;
          if (this.y + this.height > this.canvas.height) {
            this.y = this.yStandingPosition;
          }
        } else {
          this.falling = false;
          this.jumpInProgress = false;
        }
      }
    }
  
    run(gameSpeed, frameTimeDelta) {
      if (this.walkAnimationTimer <= 0) {
        if (this.image === this.cowboyRunImages[0]) {
          this.image = this.cowboyRunImages[1];
        } else {
          this.image = this.cowboyRunImages[0];
        }
        this.walkAnimationTimer = this.WALK_ANIMATION_TIMER;
      }
      this.walkAnimationTimer -= frameTimeDelta * gameSpeed;
    }
  
    draw() {
      this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }