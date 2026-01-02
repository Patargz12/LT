class Trie {
    children: Map<string, Trie>;
    isEnd: boolean;
    
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }

    insert(word: string): void {
        let node: Trie = this;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new Trie());
            }
            node = node.children.get(char)!;
        }
        node.isEnd = true;
    }

    search(word: string): boolean {
        let node: Trie = this;
        for (const char of word) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char)!;
        }
        return node.isEnd;
    }

    startsWith(prefix: string): boolean {
        let node: Trie = this;
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char)!;
        }
        return true;
    }
}