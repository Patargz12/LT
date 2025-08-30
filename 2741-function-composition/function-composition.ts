function compose(functions: Function[]): Function {
   return function(x: number): number {
       for (let i = functions.length - 1; i >= 0; i--) {
           x = functions[i](x);
       }
       return x;
   };
}