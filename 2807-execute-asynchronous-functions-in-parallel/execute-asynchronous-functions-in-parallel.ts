type Fn = () => Promise<any>;

function promiseAll<T>(functions: Fn[]): Promise<T[]> {
   return new Promise((resolve, reject) => {
       const results: T[] = new Array(functions.length);
       let completedCount = 0;
       
       functions.forEach((fn, index) => {
           fn()
               .then((value) => {
                   results[index] = value;
                   completedCount++;
                   
                   if (completedCount === functions.length) {
                       resolve(results);
                   }
               })
               .catch((error) => {
                   reject(error);
               });
       });
   });
}