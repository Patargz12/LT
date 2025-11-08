function crawl(startUrl: string, htmlParser: HtmlParser): string[] {
    const hostname = new URL(startUrl).hostname;
    const visited = new Set<string>();
    const result: string[] = [];
    
    function dfs(url: string): void {
        if (visited.has(url)) return;
        
        const urlHostname = new URL(url).hostname;
        if (urlHostname !== hostname) return;
        
        visited.add(url);
        result.push(url);
        
        const urls = htmlParser.getUrls(url);
        for (const nextUrl of urls) {
            dfs(nextUrl);
        }
    }
    
    dfs(startUrl);
    return result;
}