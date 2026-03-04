function reformatNumber(number: string): string {
    const digits: string[] = []; 
    for (const ch of number) {
        if (ch >= '0' && ch<= '9') digits.push(ch); 
    }

    const res: string[] = []; 

    let i = 0; 
    const n = digits.length; 

    while (n - i > 4) {
        res.push(digits.slice(i,i+3).join("")); 
        i+= 3; 
    }

    const remaining = n - i; 
    if(remaining === 4) {
        res.push(digits.slice(i,i+2).join('')); 
        res.push(digits.slice(i + 2, i + 4).join('')); 
    }  else if (remaining > 0) {
        res.push(digits.slice(i).join('')) 
    }

    return res.join('-')
} 


