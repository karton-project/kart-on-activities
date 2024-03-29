class Floor {
    constructor(p5, spriteImage) {
        this.p5 = p5;
        this.image = spriteImage;
        this.startX = 0;
    }
    draw() {
        for (var i = 0; i <= CANVAS_WIDTH/30; i++)
            this.p5.image(this.image, this.startX + i*30, CANVAS_HEIGHT - FLOOROFFSET, 30, 150, 200, 60, 30, 150);
    }
    update() {
        for (var i = 0; i <= CANVAS_WIDTH/30; i++)
            this.p5.image(this.image,this.startX + i*30, CANVAS_HEIGHT - FLOOROFFSET, 30, 150, 200, 60, 30, 150);
         this.startX -= 2;
         if(this.startX <= -59)
            this.startX =0;
    }
}