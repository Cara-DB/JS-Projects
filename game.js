const { Phaser } = require("./phaser");

class mainScene {
  preload() { // Load assets

  }
  create() {

  }
  update() {

  }
}
new Phaser.Game({
  width: 500,
  height: 500,
  backgroundColor: '#000000',
  scene: mainScene,
  physics: { default: 'arcade' },
  parent: 'game',
});