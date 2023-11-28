export default class Sky {
    constructor(ctx, width, height, speed, scaleRatio) {
      this.ctx = ctx;
      this.canvas = ctx.canvas;
      this.width = width;
      this.height = height;
      this.speed = speed;
      this.scaleRatio = scaleRatio;
  
      this.x = 0;
      this.y = this.canvas.height - this.height;
  
      this.skyImage = new Image();
      this.skyImage.src = "images/sky.png";
    }
  
    update(gameSpeed, frameTimeDelta) {
      this.x -= gameSpeed * frameTimeDelta * this.speed * this.scaleRatio;
    }
  
    draw() {
      this.ctx.drawImage(
        this.skyImage,
        this.x,
        this.y,
        this.width,
        this.height
      );
  
      this.ctx.drawImage(
        this.skyImage,
        this.x + this.width,
        this.y,
        this.width,
        this.height
      );
  
      if (this.x < -this.width) {
        this.x = 0;
      }
    }
  
    reset() {
      this.x = 0;
    }
  }