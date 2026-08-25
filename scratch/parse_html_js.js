const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'src', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Simple regex to extract script tags
const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let count = 0;

while ((match = scriptRegex.exec(html)) !== null) {
    count++;
    const js = match[1];
    // Check if it's external script or inline
    if (match[0].includes('src=')) {
        console.log(`Script ${count}: External script: ${match[0].trim()}`);
        continue;
    }
    console.log(`Script ${count}: Inline script of length ${js.length}`);
    try {
        // Use Function to test syntax
        new Function(js);
        console.log(`Script ${count}: Syntax OK`);
    } catch (e) {
        console.error(`Script ${count}: Syntax Error!`);
        console.error(e);
        
        // Let's print the line numbers in the original HTML file
        const htmlBefore = html.substring(0, match.index);
        const startLine = htmlBefore.split('\n').length;
        console.log(`Script starts around HTML line: ${startLine}`);
        
        // Print context of the error
        if (e.message.includes('Unexpected token') || e.message.includes('Unexpected end of input')) {
            // Find lines with error or print ending
            const lines = js.split('\n');
            console.log("Last 20 lines of JS script block:");
            for (let i = Math.max(0, lines.length - 30); i < lines.length; i++) {
                console.log(`${startLine + i}: ${lines[i]}`);
            }
        }
    }
}
