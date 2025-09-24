function replaceWords(dictionary: string[], sentence: string): string {
    const set = new Set(dictionary)
    const words = sentence.split(" ")

    return words.map(word => {
        for (let i = 1; i <= word.length; i++) {
            const prefix = word.substring(0, i)
            if (set.has(prefix)) return prefix
        }
        return word
    }).join(" ")
}
