// Results screen: a good place for the "why it matters" message and a real health fact
class EndScene extends Phaser.Scene {
  constructor() { super('End'); }

  init(data) { this.results = data; }

  create() {
    const { treated, lost } = this.results;

    this.add.text(400, 160, 'SHIFT OVER', { fontSize: '48px', color: '#ffffff', fontStyle: 'bold' }).setOrigin(0.5);
    this.add.text(400, 240, `Patients treated: ${treated}\nPatients lost: ${lost}`, {
      fontSize: '26px', color: '#cceeff', align: 'center'
    }).setOrigin(0.5);

    // TODO: replace with a real, sourced fact about your healthcare topic
    this.add.text(400, 340, 'Did you know? [Put a real healthcare fact here]', {
      fontSize: '20px', color: '#ffdd88', wordWrap: { width: 650 }, align: 'center'
    }).setOrigin(0.5);

    const btn = this.add.text(400, 450, '[ PLAY AGAIN ]', {
      fontSize: '30px', color: '#77ff77', backgroundColor: '#223344', padding: { x: 16, y: 8 }
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });

    btn.on('pointerdown', () => this.scene.start('Game'));
  }
}
