const titleToNumber = (columnTitle) => {
    let result = 0;
    
    for (let i = 0; i < columnTitle.length; i++) {
        const charValue = columnTitle.charCodeAt(i) - 64;
        result = result * 26 + charValue;
    }
    
    return result;
};