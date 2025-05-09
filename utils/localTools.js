function getLocalTools() {
    const tools = localStorage.getItem('userSubmittedTools');
    return tools ? JSON.parse(tools) : [];
}

function addLocalTool(tool) {
    const tools = getLocalTools();
    tools.push(tool);
    localStorage.setItem('userSubmittedTools', JSON.stringify(tools));
}

// Exporting functions for use in other scripts, if using modules or for clarity
// If not using ES6 modules in simple HTML/JS, these functions are globally available once the script is loaded.
// For this project structure (plain HTML/JS), direct script inclusion makes them global.
// No explicit export needed if script is directly included in HTML.