// Title screen
class MenuScene extends Phaser.Scene {
  constructor() { super('Menu'); }

  create() {
    this.add.text(400, 200, 'VITAL QUEST', { fontSize: '56px', color: '#ffffff', fontStyle: 'bold' }).setOrigin(0.5);
    this.add.text(400, 280, 'Click patients before their health runs out!', { fontSize: '22px', color: '#cceeff' }).setOrigin(0.5);

    const btn = this.add.text(400, 400, '[ START ]', {
      fontSize: '32px', color: '#77ff77', backgroundColor: '#223344', padding: { x: 16, y: 8 }
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });

    btn.on('pointerover', () => btn.setColor('#ffffff'));
    btn.on('pointerout', () => btn.setColor('#77ff77'));
    btn.on('pointerdown', () => this.scene.start('Game'));
  }
}
