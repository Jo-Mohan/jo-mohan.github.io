import os
import re
import json
import sys
from pathlib import Path

def generate_graph_data(vault_path):
    """
    Scans an Obsidian vault, finds all notes and links, and generates
    a JSON file for graph visualization.
    """
    print(f"Scanning Obsidian vault at: {vault_path}")

    image_extensions = {'.png', '.jpg', '.jpeg', '.gif', '.bmp', '.svg'}
    
    link_pattern = re.compile(r'\[\[(.*?)\]\]')
    
    all_notes = []
    all_links = []
    
    markdown_files = []
    for root, _, files in os.walk(vault_path):
        for file in files:
            if file.endswith('.md'):
                full_path = Path(os.path.join(root, file))
                relative_path = full_path.relative_to(vault_path)
                markdown_files.append(str(relative_path).replace('\\', '/'))
    
    all_notes = [{"id": md_file} for md_file in markdown_files]
    print(f"Found {len(all_notes)} notes.")

    markdown_files_set = set(markdown_files)

    for source_file_relative in markdown_files:
        source_file_full = Path(vault_path) / source_file_relative
        
        try:
            with open(source_file_full, 'r', encoding='utf-8') as f:
                content = f.read()
            
            matches = link_pattern.findall(content)
            
            for match in matches:
                target_note_name = match.split('|')[0].split('#')[0].strip()
                
                if any(target_note_name.lower().endswith(ext) for ext in image_extensions):
                    continue
                
                potential_target = f"{target_note_name}.md"
                
                found_target = None
                for md_file in markdown_files_set:
                    if md_file.endswith(potential_target):
                        found_target = md_file
                        break
                
                if found_target:
                    all_links.append({
                        "source": source_file_relative,
                        "target": found_target
                    })

        except Exception as e:
            print(f"  - Could not read {source_file_relative}: {e}")

    print(f"Found {len(all_links)} valid links (image links ignored).")

    graph_data = {
        "nodes": all_notes,
        "links": all_links
    }
    
    output_folder = Path('.')
    output_file = output_folder / 'graph-data.json'
    
    output_folder.mkdir(parents=True, exist_ok=True)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(graph_data, f, indent=2)
        
    print(f"Graph data saved to: {output_file}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("You must provide the path to your Obsidian vault.")
        print("Usage: python generate_json.py \"/path/to/your/vault\"")
    else:
        vault_path_arg = sys.argv[1]
        if not os.path.isdir(vault_path_arg):
            print(f"The provided path is not a valid directory: {vault_path_arg}")
        else:
            generate_graph_data(vault_path_arg)
