class AutocompleteSystem {
    private trie: TrieNode;
    private currentInput: string;
    private sentenceCount: Map<string, number>;

    constructor(sentences: string[], times: number[]) {
        this.trie = new TrieNode();
        this.currentInput = '';
        this.sentenceCount = new Map();
        
        for (let i = 0; i < sentences.length; i++) {
            this.sentenceCount.set(sentences[i], times[i]);
            this.addToTrie(sentences[i]);
        }
    }

    input(c: string): string[] {
        if (c === '#') {
            const count = this.sentenceCount.get(this.currentInput) || 0;
            this.sentenceCount.set(this.currentInput, count + 1);
            this.addToTrie(this.currentInput);
            this.currentInput = '';
            return [];
        }
        
        this.currentInput += c;
        return this.getTop3(this.currentInput);
    }

    private addToTrie(sentence: string): void {
        let node = this.trie;
        for (const char of sentence) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
            node.sentences.add(sentence);
        }
    }

    private getTop3(prefix: string): string[] {
        let node = this.trie;
        
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return [];
            }
            node = node.children.get(char)!;
        }
        
        const candidates = Array.from(node.sentences).map(sentence => ({
            sentence,
            count: this.sentenceCount.get(sentence) || 0
        }));
        
        candidates.sort((a, b) => {
            if (a.count !== b.count) {
                return b.count - a.count;
            }
            return a.sentence.localeCompare(b.sentence);
        });
        
        return candidates.slice(0, 3).map(item => item.sentence);
    }
}

class TrieNode {
    children: Map<string, TrieNode>;
    sentences: Set<string>;
    
    constructor() {
        this.children = new Map();
        this.sentences = new Set();
    }
}