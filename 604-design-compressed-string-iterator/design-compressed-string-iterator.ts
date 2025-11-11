function StringIterator(compressedString) {
    this.tokens = [];
    let i = 0;
    
    while (i < compressedString.length) {
        const char = compressedString[i];
        i++;
        let num = 0;
        
        while (i < compressedString.length && compressedString[i] >= '0' && compressedString[i] <= '9') {
            num = num * 10 + parseInt(compressedString[i]);
            i++;
        }
        
        this.tokens.push([char, num]);
    }
    
    this.index = 0;
    this.count = this.tokens.length > 0 ? this.tokens[0][1] : 0;
}

StringIterator.prototype.next = function() {
    if (!this.hasNext()) {
        return ' ';
    }
    
    const char = this.tokens[this.index][0];
    this.count--;
    
    if (this.count === 0 && this.index + 1 < this.tokens.length) {
        this.index++;
        this.count = this.tokens[this.index][1];
    }
    
    return char;
};

StringIterator.prototype.hasNext = function() {
    return this.index < this.tokens.length && this.count > 0;
};