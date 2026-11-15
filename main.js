// Game setup. The scene list order matters: the first scene starts automatically.
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#1d2b3a',
  scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
  scene: [MenuScene, GameScene, EndScene]
};

new Phaser.Game(config);
