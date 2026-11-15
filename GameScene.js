// Main gameplay: patients appear with draining health bars. Click to treat them.
// Swap this logic out for your real game idea (triage, interpreter dialogue, etc.).
class GameScene extends Phaser.Scene {
  constructor() { super('Game'); }

  create() {
    this.treated = 0;
    this.lost = 0;
    this.timeLeft = 45;      // seconds per round
    this.patients = [];
    this.over = false;

    this.hud = this.add.text(16, 16, '', { fontSize: '22px', color: '#ffffff' });
    this.updateHud();

    // Spawn a patient every 1.2 seconds
    this.time.addEvent({ delay: 1200, loop: true, callback: () => this.spawnPatient() });

    // Countdown clock
    this.time.addEvent({
      delay: 1000, loop: true, callback: () => {
        this.timeLeft--;
        this.updateHud();
        if (this.timeLeft <= 0) this.endGame();
      }
    });
  }

  spawnPatient() {
    const x = Phaser.Math.Between(60, 740);
    const y = Phaser.Math.Between(100, 560);

    // Placeholder art: a circle for the patient, a rectangle for the health bar
    const body = this.add.circle(x, y, 28, 0xffcc66).setInteractive({ useHandCursor: true });
    const bar = this.add.rectangle(x - 30, y - 42, 60, 8, 0x44dd44).setOrigin(0, 0.5);

    const patient = { body, bar, health: 100, drainPerSec: Phaser.Math.Between(15, 35) };

    body.on('pointerdown', () => {
      this.treated++;
      this.removePatient(patient);
      this.updateHud();
    });

    this.patients.push(patient);
  }

  removePatient(p) {
    p.body.destroy();
    p.bar.destroy();
    this.patients = this.patients.filter(q => q !== p);
  }

  // Runs every frame; delta = milliseconds since last frame
  update(time, delta) {
    for (const p of [...this.patients]) {
      p.health -= p.drainPerSec * (delta / 1000);
      p.bar.scaleX = Math.max(0, p.health / 100);
      if (p.health < 35) p.bar.fillColor = 0xdd4444;   // turns red when critical
      if (p.health <= 0) {
        this.lost++;
        this.removePatient(p);
        this.updateHud();
      }
    }
  }

  updateHud() {
    this.hud.setText(`Treated: ${this.treated}    Lost: ${this.lost}    Time: ${this.timeLeft}`);
  }

  endGame() {
    if (this.over) return;
    this.over = true;
    this.scene.start('End', { treated: this.treated, lost: this.lost });
  }
}
