class Codec {
    serialize(root: Node | null): TreeNode | null {
        if (!root) {
            return null;
        }
        
        const binaryNode = new TreeNode(root.val);
        
        if (root.children.length > 0) {
            binaryNode.left = this.serialize(root.children[0]);
            
            let current = binaryNode.left;
            for (let i = 1; i < root.children.length; i++) {
                current!.right = this.serialize(root.children[i]);
                current = current!.right;
            }
        }
        
        return binaryNode;
    }
    
    deserialize(root: TreeNode | null): Node | null {
        if (!root) {
            return null;
        }
        
        const naryNode = new Node(root.val);
        
        let current = root.left;
        while (current) {
            const child = this.deserialize(current);
            if (child) {
                naryNode.children.push(child);
            }
            current = current.right;
        }
        
        return naryNode;
    }
}