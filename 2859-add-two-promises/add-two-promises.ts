async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
   const [value1, value2] = await Promise.all([promise1, promise2]);
   return value1 + value2;
}