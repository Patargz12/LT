class FileSystem {
    private root: Directory;

    constructor() {
        this.root = new Directory();
    }

    ls(path: string): string[] {
        const node = this.traverse(path);
        if (node instanceof File) {
            return [path.split('/').pop()!];
        }
        return Array.from(node.children.keys()).sort();
    }

    mkdir(path: string): void {
        this.traverse(path, true);
    }

    addContentToFile(filePath: string, content: string): void {
        const parts = filePath.split('/').filter(p => p);
        const fileName = parts.pop()!;
        const dirPath = '/' + parts.join('/');
        
        const dir = this.traverse(dirPath, true) as Directory;
        
        if (!dir.children.has(fileName)) {
            dir.children.set(fileName, new File());
        }
        
        const file = dir.children.get(fileName) as File;
        file.content += content;
    }

    readContentFromFile(filePath: string): string {
        const node = this.traverse(filePath);
        return (node as File).content;
    }

    private traverse(path: string, create: boolean = false): Directory | File {
        if (path === '/') return this.root;
        
        const parts = path.split('/').filter(p => p);
        let current: Directory = this.root;
        
        for (const part of parts) {
            if (!current.children.has(part)) {
                if (create) {
                    current.children.set(part, new Directory());
                } else {
                    throw new Error('Path not found');
                }
            }
            current = current.children.get(part) as Directory;
        }
        
        return current;
    }
}

class Directory {
    children: Map<string, Directory | File>;
    
    constructor() {
        this.children = new Map();
    }
}

class File {
    content: string;
    
    constructor() {
        this.content = '';
    }
}