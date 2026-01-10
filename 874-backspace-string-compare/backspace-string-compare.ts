function backspaceCompare(s: string, t: string): boolean {
    const process = (str: string): string => {
        const stack: string[] = [];
        for (const char of str) {
            if (char === '#') {
                stack.pop();
            } else {
                stack.push(char);
            }
        }
        return stack.join('');
    };
    
    return process(s) === process(t);
}

function backspaceCompareOptimal(s: string, t: string): boolean {
    let i = s.length - 1;
    let j = t.length - 1;
    
    while (i >= 0 || j >= 0) {
        i = getNextValidChar(s, i);
        j = getNextValidChar(t, j);
        
        if (i >= 0 && j >= 0 && s[i] !== t[j]) {
            return false;
        }
        
        if ((i >= 0) !== (j >= 0)) {
            return false;
        }
        
        i--;
        j--;
    }
    
    return true;
}

function getNextValidChar(str: string, index: number): number {
    let backspaces = 0;
    
    while (index >= 0) {
        if (str[index] === '#') {
            backspaces++;
            index--;
        } else if (backspaces > 0) {
            backspaces--;
            index--;
        } else {
            break;
        }
    }
    
    return index;
}