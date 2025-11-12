
class Codec {
    serialize(root: Node | null): string {
        if (!root) return '';
        
        const result: string[] = [];
        
        const dfs = (node: Node | null) => {
            if (!node) {
                result.push('null');
                return;
            }
            
            result.push(String(node.val));
            result.push(String(node.children.length));
            
            for (const child of node.children) {
                dfs(child);
            }
        };
        
        dfs(root);
        return result.join(',');
    }

    deserialize(data: string): Node | null {
        if (!data) return null;
        
        const values = data.split(',');
        let index = 0;
        
        const dfs = (): Node | null => {
            if (index >= values.length || values[index] === 'null') {
                index++;
                return null;
            }
            
            const val = parseInt(values[index++]);
            const childCount = parseInt(values[index++]);
            const node = new Node(val);
            
            for (let i = 0; i < childCount; i++) {
                const child = dfs();
                if (child) {
                    node.children.push(child);
                }
            }
            
            return node;
        };
        
        return dfs();
    }
}