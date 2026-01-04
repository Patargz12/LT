function uniqueMorseRepresentations(words: string[]): number {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const transformations = new Set<string>();
    
    for (const word of words) {
        let code = "";
        for (const char of word) {
            code += morse[char.charCodeAt(0) - 97];
        }
        transformations.add(code);
    }
    
    return transformations.size;
}