const urlMap = new Map();
let counter = 0;
const baseUrl = "http://tinyurl.com/";

function encode(longUrl) {
    const shortCode = counter.toString(36);
    const shortUrl = baseUrl + shortCode;
    urlMap.set(shortUrl, longUrl);
    counter++;
    return shortUrl;
}

function decode(shortUrl) {
    return urlMap.get(shortUrl);
}