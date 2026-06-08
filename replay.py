import json
import os

target_files = [
    "/Users/admin/Desktop/Introvera/introvera/src/app/services/page.tsx",
    "/Users/admin/Desktop/Introvera/introvera/src/app/projects/page.tsx",
    "/Users/admin/Desktop/Introvera/introvera/src/app/about/page.tsx",
    "/Users/admin/Desktop/Introvera/introvera/src/app/contact/page.tsx",
    "/Users/admin/Desktop/Introvera/introvera/src/app/layout.tsx",
    "/Users/admin/Desktop/Introvera/introvera/src/app/projects/[slug]/page.tsx",
    "/Users/admin/Desktop/Introvera/introvera/src/components/Services/Services.tsx"
]

transcript_path = "/Users/admin/.gemini/antigravity-ide/brain/1fdd940c-e7aa-4aea-a53b-30d17eda1d89/.system_generated/logs/transcript.jsonl"

def apply_replacement(content, start_line, end_line, new_content):
    lines = content.split('\n')
    # start_line and end_line are 1-indexed
    # lines array is 0-indexed
    before = lines[:start_line - 1]
    after = lines[end_line:]
    
    # Check if we need to append a newline to new_content if it's replacing whole lines
    # Actually just split new_content by \n and insert it
    new_lines = new_content.split('\n')
    
    return '\n'.join(before + new_lines + after)

file_contents = {}
for file in target_files:
    if os.path.exists(file):
        with open(file, 'r') as f:
            file_contents[file] = f.read()

with open(transcript_path, 'r') as f:
    for line in f:
        try:
            step = json.loads(line)
            if 'tool_calls' in step:
                for call in step['tool_calls']:
                    if call['tool_name'] == 'default_api:replace_file_content':
                        args = call['tool_arguments']
                        tgt = args.get('TargetFile')
                        if tgt in file_contents:
                            file_contents[tgt] = apply_replacement(
                                file_contents[tgt], 
                                args['StartLine'], 
                                args['EndLine'], 
                                args['ReplacementContent']
                            )
                    elif call['tool_name'] == 'default_api:multi_replace_file_content':
                        args = call['tool_arguments']
                        tgt = args.get('TargetFile')
                        if tgt in file_contents:
                            # Apply chunks in reverse order so line numbers don't shift
                            chunks = sorted(args['ReplacementChunks'], key=lambda x: x['StartLine'], reverse=True)
                            for chunk in chunks:
                                file_contents[tgt] = apply_replacement(
                                    file_contents[tgt],
                                    chunk['StartLine'],
                                    chunk['EndLine'],
                                    chunk['ReplacementContent']
                                )
        except Exception as e:
            pass

for file in target_files:
    if os.path.exists(file):
        with open(file, 'w') as f:
            f.write(file_contents[file])

print("Replayed file changes successfully!")
