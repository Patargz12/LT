async function promisePool(functions: Function[], n: number): Promise<any> {
  let index = 0;
  
  async function executeNext(): Promise<void> {
    if (index >= functions.length) return;
    
    const currentIndex = index++;
    await functions[currentIndex]();
    await executeNext();
  }
  
  const workers = Array(Math.min(n, functions.length))
    .fill(null)
    .map(() => executeNext());
  
  await Promise.all(workers);
}