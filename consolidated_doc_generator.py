import os
import pathlib
import requests
import re
import json
import argparse
import importlib.util
from typing import List, Dict, Optional, Tuple, Set, Any
from datetime import datetime

# --- Configuration ---
# Configure Ollama settings
OLLAMA_API_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "gemma3:1b"  # Default model, can be changed via command line

# Add or remove file extensions as needed
SUPPORTED_EXTENSIONS = {
    ".py", ".js", ".ts", ".tsx", ".java", ".cs", ".go", ".php", ".rb", ".rs", ".c", ".cpp", ".h", ".hpp",
    ".html", ".css", ".scss", ".sql", ".sh", ".kt", ".swift"
}

# Add or remove directories to ignore
IGNORED_DIRECTORIES = {
    "node_modules", ".git", ".vscode", "__pycache__", "dist", "build", "target",
    "out", "bin", "obj", "vendor", "tmp", "temp", ".next", "docs"
}

# Priority files that should be analyzed first for context
PRIORITY_FILES = {
    "package.json", "README.md", "index.html", "App.tsx", "main.tsx", "vite.config.ts", "tailwind.config.ts"
}

# --- Utility Functions ---

def find_code_files(start_path: str, max_files: int = 50) -> List[str]:
    """Finds all supported code files in a directory, prioritizing important files."""
    code_files = []
    priority_files = []
    
    for root, dirs, files in os.walk(start_path):
        # Remove ignored directories
        dirs[:] = [d for d in dirs if d not in IGNORED_DIRECTORIES]

        for file in files:
            if any(file.endswith(ext) for ext in SUPPORTED_EXTENSIONS):
                file_path = os.path.join(root, file)
                if os.path.basename(file) in PRIORITY_FILES:
                    priority_files.append(file_path)
                else:
                    code_files.append(file_path)
    
    # Return priority files first, then others, limited to max_files
    return priority_files + code_files[:max(0, max_files - len(priority_files))]

def read_file_content(file_path: str) -> Optional[str]:
    """Reads the content of a file."""
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            return f.read()
    except Exception as e:
        print(f"Error reading file {file_path}: {e}")
        return None

def extract_docstrings(content: str) -> Dict[str, str]:
    """Extract docstrings from Python code."""
    docstrings = {}
    
    # Simple regex pattern to find function/class definitions with docstrings
    pattern = r'(def|class)\s+([^\s\(]+).*?:\s*\n\s*"""(.*?)"""'
    matches = re.finditer(pattern, content, re.DOTALL)
    
    for match in matches:
        entity_type = match.group(1)  # 'def' or 'class'
        entity_name = match.group(2)  # function or class name
        docstring = match.group(3).strip()  # the docstring content
        
        key = f"{entity_type} {entity_name}"
        docstrings[key] = docstring
    
    return docstrings

def extract_jsdoc(content: str) -> Dict[str, str]:
    """Extract JSDoc comments from JavaScript/TypeScript code."""
    jsdocs = {}
    
    # Pattern to match JSDoc comments and the following function/class/etc.
    pattern = r'/\*\*(.*?)\*/\s*(?:export\s+)?(?:function|class|const|let|var)\s+([^\s\(=]+)'
    matches = re.finditer(pattern, content, re.DOTALL)
    
    for match in matches:
        doc_comment = match.group(1).strip()
        entity_name = match.group(2)
        
        # Clean up the JSDoc comment
        doc_lines = [line.strip().lstrip('*') for line in doc_comment.split('\n')]
        cleaned_doc = '\n'.join(line for line in doc_lines if line)
        
        jsdocs[entity_name] = cleaned_doc
    
    return jsdocs

def check_ollama_connection() -> bool:
    """Check if Ollama is running and accessible."""
    try:
        health_response = requests.get("http://localhost:11434/", timeout=5)
        return health_response.status_code == 200
    except requests.exceptions.RequestException:
        return False

def generate_documentation_with_ollama(file_contents: List[Dict[str, str]], 
                                      output_format: str = "markdown",
                                      model: str = MODEL_NAME) -> Optional[str]:
    """Generates documentation using Ollama API with proper context and structure."""
    if not file_contents:
        print("No code found to generate documentation.")
        return None

    # Prepare file information with context
    file_summaries = []
    docstring_info = []
    
    for file_info in file_contents:
        # Extract path and content
        path = file_info['path']
        content = file_info['content']
        
        # Limit content to avoid overwhelming the model
        content_preview = content[:2000] + ("..." if len(content) > 2000 else "")
        file_summaries.append(f"--- File: {path} ---\n{content_preview}")
        
        # Extract documentation comments based on file type
        if path.endswith('.py'):
            docstrings = extract_docstrings(content)
            if docstrings:
                docstring_info.append(f"--- Docstrings from {path} ---")
                for entity, doc in docstrings.items():
                    docstring_info.append(f"{entity}: {doc}")
        
        elif path.endswith(('.js', '.ts', '.tsx')):
            jsdocs = extract_jsdoc(content)
            if jsdocs:
                docstring_info.append(f"--- JSDoc from {path} ---")
                for entity, doc in jsdocs.items():
                    docstring_info.append(f"{entity}: {doc}")

    # Determine output format instructions
    format_instructions = ""
    if output_format.lower() == "html":
        format_instructions = "Generate documentation in HTML format with proper HTML5 structure."
    elif output_format.lower() == "pdf":
        format_instructions = "Generate documentation in Markdown format that will be converted to PDF."
    else:  # Default to markdown
        format_instructions = "Generate documentation in well-structured Markdown format."

    prompt = f"""
    You are a senior technical documentation writer. Analyze the following codebase for a React/TypeScript portfolio website 
    and generate comprehensive technical documentation.
    
    Project Overview:
    This is a professional portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui components.
    It showcases a developer's skills, experience, projects, and contact information with a responsive, accessible UI.
    
    {format_instructions}
    
    Structure your documentation with these exact sections:
    
    # Project Documentation
    
    ## 1. Project Overview
    - High-level description of the project's purpose and functionality
    - Primary technologies and frameworks used
    - Target audience and use cases
    
    ## 2. Architecture and Design
    - Overall architecture and component structure
    - Key design patterns and principles
    - Folder organization and code structure
    - State management approach
    - Performance optimization strategies
    
    ## 3. Key Components and Modules
    For each major component/module:
    - Purpose and functionality
    - Key features and capabilities
    - Dependencies and relationships
    - Implementation details
    
    ## 4. Development Setup
    - Prerequisites and system requirements
    - Installation instructions
    - Environment configuration
    - Available scripts and commands
    
    ## 5. Deployment
    - Build process
    - Deployment options
    - Hosting considerations
    
    ## 6. File Documentation
    For each significant file (prioritize important files):
    - File path and purpose
    - Key functions/classes/methods with parameters and return values
    - Usage examples where applicable
    
    ## 7. Best Practices and Guidelines
    - Coding standards
    - Performance considerations
    - Accessibility features
    - Security considerations
    
    Here are the code files to analyze:
    
    {"".join(file_summaries)}
    
    Here are extracted documentation comments:
    
    {"".join(docstring_info)}
    
    IMPORTANT: 
    - Provide specific, actionable information
    - Use proper formatting with headers, lists, and code blocks
    - Focus on the most important files first (package.json, README.md, App.tsx, etc.)
    - Be concise but comprehensive
    - Do not include any backticks or code block markers in your response
    - Do not use phrases like "This is a placeholder" or "This is a sample"
    """.strip()

    print("Sending request to Ollama API...")
    print(f"Using model: {model}")
    prompt_chars = len(prompt)
    # Estimate tokens by dividing by 4 (a common approximation)
    estimated_tokens = prompt_chars // 4
    print(f"Prompt length: {prompt_chars} characters (Context Length)")
    print(f"Estimated token count: ~{estimated_tokens} tokens")
    
    try:
        # Make request to Ollama API
        response = requests.post(
            OLLAMA_API_URL,
            json={
                "model": model,
                "prompt": prompt,
                "stream": False,
                "options": {
                    "temperature": 0.7,
                    "top_p": 0.9
                }
            },
            timeout=300  # 5 minute timeout for larger projects
        )
        response.raise_for_status()
        print("Received response from Ollama API")
        
        # Extract response and sanitize any problematic content
        resp_json = response.json()
        doc = resp_json.get("response") if isinstance(resp_json, dict) else None
        if not doc:
            # Fallback to raw text if key is different
            doc = resp_json.get("text") if isinstance(resp_json, dict) else None
        if not doc and isinstance(resp_json, str):
            doc = resp_json

        if not doc:
            print("Warning: Ollama response did not contain expected 'response' field.")
            return None

        # Clean up the response
        # Remove any remaining code block markers
        doc = re.sub(r"```.*?```", "", doc, flags=re.DOTALL)
        # Remove any think tags
        doc = re.sub(r"<think>.*?</think>", "", doc, flags=re.DOTALL)
        return doc
    except requests.exceptions.RequestException as e:
        print(f"Error connecting to Ollama API: {e}")
        print("Make sure Ollama is running and the model is downloaded.")
        print(f"You can download the model by running: ollama pull {model}")
        return None
    except Exception as e:
        print(f"Error generating documentation: {e}")
        return None

def convert_to_html(markdown_content: str) -> str:
    """
    Convert markdown content to HTML.
    This is a simple implementation. For production use, consider using a proper
    markdown to HTML converter library like markdown2 or python-markdown.
    """
    # Simple conversion of headers
    html = re.sub(r'^# (.*?)$', r'<h1>\1</h1>', markdown_content, flags=re.MULTILINE)
    html = re.sub(r'^## (.*?)$', r'<h2>\1</h2>', html, flags=re.MULTILINE)
    html = re.sub(r'^### (.*?)$', r'<h3>\1</h3>', html, flags=re.MULTILINE)
    
    # Convert lists
    html = re.sub(r'^- (.*?)$', r'<li>\1</li>', html, flags=re.MULTILINE)
    html = re.sub(r'(<li>.*?</li>\n)+', r'<ul>\n\g<0></ul>', html, flags=re.DOTALL)
    
    # Convert paragraphs
    html = re.sub(r'(?<!\n)\n(?!\n)(?!<[uo]l|<li|<h[1-6])', r'<br>', html)
    html = re.sub(r'(?<!\n)\n\n(?!<[uo]l|<li|<h[1-6])', r'</p>\n\n<p>', html)
    
    # Wrap in basic HTML structure
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Documentation</title>
    <style>
        body {{ font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }}
        h1, h2, h3 {{ color: #333; }}
        h1 {{ border-bottom: 2px solid #eee; padding-bottom: 10px; }}
        h2 {{ border-bottom: 1px solid #eee; padding-bottom: 5px; }}
        code {{ background-color: #f5f5f5; padding: 2px 4px; border-radius: 4px; }}
        pre {{ background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto; }}
        ul {{ padding-left: 20px; }}
    </style>
</head>
<body>
    <p>{html}</p>
</body>
</html>
"""
    return html

def save_documentation(content: str, output_format: str, output_file: Optional[str] = None) -> str:
    """Save documentation in the specified format."""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    
    if not output_file:
        output_file = f"documentation_{timestamp}"
    
    # Remove extension if provided
    if "." in output_file:
        output_file = output_file.split(".")[0]
    
    if output_format.lower() == "html":
        html_content = convert_to_html(content)
        final_filename = f"{output_file}.html"
        with open(final_filename, "w", encoding="utf-8") as f:
            f.write(html_content)
    elif output_format.lower() == "pdf":
        # For PDF, we save as markdown first
        # In a real implementation, you would use a library like weasyprint or reportlab
        # to convert markdown to PDF
        final_filename = f"{output_file}.md"
        with open(final_filename, "w", encoding="utf-8") as f:
            f.write(content)
        print("Note: PDF conversion requires additional libraries.")
        print("The content has been saved as Markdown. To convert to PDF, you can use:")
        print("- pandoc: 'pandoc -o output.pdf input.md'")
        print("- Or install the 'weasyprint' Python library and convert HTML to PDF")
    else:  # Default to markdown
        final_filename = f"{output_file}.md"
        with open(final_filename, "w", encoding="utf-8") as f:
            f.write(content)
    
    return final_filename

def main():
    """Main function to run the documentation generator."""
    parser = argparse.ArgumentParser(description="Generate comprehensive documentation for a codebase")
    parser.add_argument("--model", type=str, default=MODEL_NAME, help=f"Ollama model to use (default: {MODEL_NAME})")
    parser.add_argument("--format", type=str, default="markdown", choices=["markdown", "html", "pdf"], 
                        help="Output format (default: markdown)")
    parser.add_argument("--output", type=str, help="Output file name (without extension)")
    parser.add_argument("--max-files", type=int, default=30, help="Maximum number of files to analyze (default: 30)")
    parser.add_argument("--directory", type=str, help="Directory to analyze (default: current directory)")
    args = parser.parse_args()
    
    print("Consolidated Documentation Generator")
    print("===================================")
    
    # Check if Ollama is running
    if not check_ollama_connection():
        print("Error: Cannot connect to Ollama. Make sure Ollama is running.")
        print("You can start Ollama by running the 'ollama serve' command.")
        return
    
    # Set the directory to analyze
    directory = args.directory if args.directory else str(pathlib.Path(__file__).parent.resolve())
    print(f"Analyzing directory: {directory}")
    
    # Find code files
    code_files = find_code_files(directory, args.max_files)
    
    if not code_files:
        print("No code files found in the project.")
        return
    
    print(f"Found {len(code_files)} code files to analyze.")
    
    # Read file contents
    all_file_contents = []
    for file_path in code_files:
        print(f"Reading file: {os.path.relpath(file_path, directory)}")
        content = read_file_content(file_path)
        if content:
            all_file_contents.append({
                "path": os.path.relpath(file_path, directory),
                "content": content
            })
        else:
            print(f"Skipping file (could not read): {file_path}")
    
    if not all_file_contents:
        print("No files could be read successfully.")
        return
    
    print(f"Successfully read {len(all_file_contents)} files.")
    print(f"Generating documentation in {args.format.upper()} format...")
    print("This may take a while for large projects...")
    
    # Generate documentation
    documentation = generate_documentation_with_ollama(
        all_file_contents, 
        output_format=args.format,
        model=args.model
    )
    
    if documentation:
        # Save documentation in the specified format
        output_file = save_documentation(documentation, args.format, args.output)
        print(f"\nDocumentation successfully generated and saved to {output_file}")
        print(f"Documentation length: {len(documentation)} characters")
    else:
        print("Failed to generate documentation.")

if __name__ == "__main__":
    main()