function createHelloWorld(): (...args: any[]) => string {
   return function(...args: any[]): string {
       return "Hello World";
   };
}