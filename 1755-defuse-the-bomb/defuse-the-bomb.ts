function decrypt(code: number[], k: number): number[] {
    const n = code.length; 
    const res = new Array<number>(n).fill(0)

    if (k === 0) return res; 

    const step = Math.abs(k) 

    const ext = code.concat(code); 

    let start: number, end: number; 

    if(k > 0) {
        start = 1; 
        end = step; 
    } else {
        start = n - step; 
        end = n - 1; 
    }

    let windowSum = 0; 

    for(let i= start; i <= end; i++) {
         windowSum += ext[i]; 
    }

    for(let i=0; i< n; i++) {
        res[i] = windowSum; 

        windowSum -= ext[start]; 
        start++
        end++; 
        windowSum += ext[end]; 
    }

    return res;

};