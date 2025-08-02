const rand10 = () => {
    while (true) {
        const row = rand7();
        const col = rand7();
        const idx = (row - 1) * 7 + col;
        
        if (idx <= 40) {
            return (idx - 1) % 10 + 1;
        }
    }
};

const rand10Optimized = () => {
    while (true) {
        const a = rand7();
        const b = rand7();
        const idx = (a - 1) * 7 + b;
        
        if (idx <= 40) {
            return (idx - 1) % 10 + 1;
        }
        
        const c = rand7();
        const idx2 = (idx - 41) * 7 + c;
        
        if (idx2 <= 60) {
            return (idx2 - 1) % 10 + 1;
        }
        
        const d = rand7();
        const idx3 = (idx2 - 61) * 7 + d;
        
        if (idx3 <= 20) {
            return (idx3 - 1) % 10 + 1;
        }
    }
};