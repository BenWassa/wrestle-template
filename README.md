# MatMind - LocalStorage Version

A wrestling training log PWA that stores data locally in the browser using localStorage. No Firebase required - perfect for portfolio deployment.

## Features

- Log wrestling practice sessions with duration, intensity, and notes
- Track progress with gamification (ranks, badges)
- View analytics and insights
- Import/export data as JSON
- **Demo Mode**: Click the "Demo Mode" button in the top-right to load sample data for a Team Captain level wrestler (350+ hours)
- Works offline as a PWA

## Demo Mode

The demo mode populates the app with realistic training data including:
- Various session types: Practice, Live Wrestling, Drilling, Conditioning
- Sessions spanning the past year
- Total hours reaching Team Captain level
- Sample notes for each session type

Click the "Demo Mode" button in the header to load the demo data. This will replace any existing data.

Once demo data is loaded, the button changes to "Exit Demo" - click it to clear all data and return to an empty state.

## Deployment

This version is designed for static hosting like GitHub Pages. Simply upload all files to your docs/ folder or static server.

## Data Storage

All data is stored locally in the browser's localStorage. Data persists between sessions but is not synced across devices.

## Differences from Firebase Version

- ✅ **No Firebase dependency** - pure localStorage
- ✅ **No authentication** required
- ✅ **Static hosting ready** - deploy to GitHub Pages/docs
- ✅ **Demo mode** for showcasing functionality
- ❌ **No cloud sync** - data stays local to the browser
- ❌ **No cross-device sync**

## Usage

Open `index.html` in a modern browser. The app will work offline once installed as a PWA.