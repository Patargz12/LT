const validIPAddress = (queryIP) => {
    if (queryIP.includes('.')) {
        return isValidIPv4(queryIP) ? "IPv4" : "Neither";
    } else if (queryIP.includes(':')) {
        return isValidIPv6(queryIP) ? "IPv6" : "Neither";
    }
    return "Neither";
};

const isValidIPv4 = (ip) => {
    const parts = ip.split('.');
    if (parts.length !== 4) return false;
    
    for (const part of parts) {
        if (!part || part.length > 3) return false;
        if (part[0] === '0' && part.length > 1) return false;
        if (!/^\d+$/.test(part)) return false;
        
        const num = parseInt(part, 10);
        if (num > 255) return false;
    }
    return true;
};

const isValidIPv6 = (ip) => {
    const parts = ip.split(':');
    if (parts.length !== 8) return false;
    
    for (const part of parts) {
        if (!part || part.length > 4) return false;
        if (!/^[0-9a-fA-F]+$/.test(part)) return false;
    }
    return true;
};