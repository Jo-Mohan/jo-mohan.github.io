# Obsidian Knowledge Graph Visualizer

A lightweight tool to generate and visualize an interactive force-directed graph of your Obsidian vault's notes and links.

## Overview

This project consists of two components:
1. **Python script** (`generate_json.py`) - Scans your Obsidian vault and extracts all notes and their connections
2. **HTML visualizer** (`graph.html`) - Creates an interactive 3D force-directed graph visualization

## Requirements

- Python 3.6+
- A web browser (for viewing the graph)
- An Obsidian vault with markdown files

## Installation

1. Clone or download this repository
2. Ensure Python is installed on your system
3. No additional Python packages required (uses standard library only)

## Usage

### Step 1: Generate Graph Data

Run the Python script with your Obsidian vault path:

```bash
python generate_json.py "/path/to/your/obsidian/vault"
```

This will create a `graph-data.json` file in the current directory containing all your notes and their connections.

### Step 2: View the Graph

1. Place `graph.html` and `graph-data.json` in the same directory
2. Open `graph.html` in your web browser
3. The graph will automatically load and display your knowledge network

## Graph Features

### Interactions
- **Hover** over nodes to highlight connected notes
- **Click and drag** nodes to reposition them
- **Scroll** to zoom in and out
- **Click the expand button** (bottom right) to open in fullscreen

### Visual Elements
- **Gray nodes**: Regular notes
- **Purple nodes**: Currently hovered note
- **Purple links**: Connections to/from hovered note
- **Node labels**: Visible when zoomed in (shows note filename without .md extension)

## How It Works

### generate_json.py
1. Recursively scans your vault directory for `.md` files
2. Parses each file to find Obsidian wiki-links (`[[Note Name]]`)
3. Filters out image links (`.png`, `.jpg`, `.gif`, etc.)
4. Resolves link targets to actual note files
5. Outputs a JSON file with nodes (notes) and links (connections)

### graph.html
1. Loads the generated JSON data
2. Uses `force-graph` library to create an interactive visualization
3. Applies physics simulation to arrange nodes
4. Provides interactive hover effects and highlighting

## File Structure

```
.
├── generate_json.py     # Vault scanner and data extractor
├── graph.html           # Interactive visualization
└── graph-data.json      # Generated graph data (created by script)
```

## Customization

### Adjust Graph Physics

In `graph.html`, modify these D3 force parameters:

```javascript
.d3Force('charge', d3.forceManyBody().strength(-50))    // Node repulsion
.d3Force('link', d3.forceLink().distance(60))           // Link length
.d3Force('collide', d3.forceCollide(10))                // Node collision
```

### Change Colors

Update these constants in `graph.html`:

```javascript
const DEFAULT_NODE_COLOR = '#cccccc';      // Regular node color
const HIGHLIGHT_NODE_COLOR = '#8a5cec';    // Hovered node color
const DEFAULT_LINK_COLOR = '#444444';      // Regular link color
const HIGHLIGHT_LINK_COLOR = '#8a5cec';    // Highlighted link color
```

## Notes

- The script ignores broken links (links to notes that don't exist)
- Subdirectories are fully supported
- The graph automatically fits to screen size on load
- Image embeds are filtered out to show only note-to-note connections

## Troubleshooting

**"The provided path is not a valid directory"**
- Ensure you're using the correct path to your vault
- Use quotes around paths with spaces

**Graph doesn't display**
- Check browser console for errors
- Ensure `graph-data.json` exists in the same directory as `graph.html`
- Verify your browser supports modern JavaScript (most browsers from 2020+ work)

**No links showing**
- Ensure your notes use Obsidian's wiki-link format: `[[Note Name]]`
- Check that linked notes actually exist in your vault

## License

This project is provided as-is for personal use with your Obsidian vaults.

## Credits

- Visualization powered by [force-graph](https://github.com/vasturiano/force-graph)
- Physics simulation by [D3.js](https://d3js.org/)