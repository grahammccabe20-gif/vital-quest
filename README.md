# Vital Quest – OSU Hackathon Healthcare Game

Built with Phaser 3 (loaded from CDN), hosted on GitHub Pages.

## Run locally
Phaser needs a local server (opening index.html directly can break asset loading):
- VS Code: install the "Live Server" extension, right-click index.html → "Open with Live Server", or
- Terminal: `python -m http.server 8000` then open http://localhost:8000

## Files
- `index.html` – loads Phaser and the scripts
- `src/main.js` – game config and scene list
- `src/scenes/` – one file per screen (Menu, Game, End)

## Controls
Click patients to treat them before their health bar empties.
