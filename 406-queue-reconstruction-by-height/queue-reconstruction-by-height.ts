const reconstructQueue = (people) => {
    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    
    const result = [];
    
    for (const person of people) {
        result.splice(person[1], 0, person);
    }
    
    return result;
};

const reconstructQueueOptimized = (people) => {
    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    
    const result = [];
    
    for (let i = 0; i < people.length; i++) {
        const [height, k] = people[i];
        result.splice(k, 0, people[i]);
    }
    
    return result;
};