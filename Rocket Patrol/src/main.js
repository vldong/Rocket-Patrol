let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
    //configs allow physics configurations, 
    //web browser scaling, size, etc.
};

let game = new Phaser.Game(config);