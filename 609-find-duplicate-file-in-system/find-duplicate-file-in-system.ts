function findDuplicate(paths: string[]): string[][] {
    const contentMap = new Map<string, string[]>();
    
    for (const path of paths) {
        const parts = path.split(' ');
        const directory = parts[0];
        
        for (let i = 1; i < parts.length; i++) {
            const file = parts[i];
            const openParen = file.indexOf('(');
            const closeParen = file.indexOf(')', openParen);
            
            const fileName = file.substring(0, openParen);
            const content = file.substring(openParen + 1, closeParen);
            const fullPath = `${directory}/${fileName}`;
            
            if (!contentMap.has(content)) {
                contentMap.set(content, []);
            }
            contentMap.get(content)!.push(fullPath);
        }
    }
    
    const result: string[][] = [];
    for (const filePaths of contentMap.values()) {
        if (filePaths.length > 1) {
            result.push(filePaths);
        }
    }
    
    return result;
}