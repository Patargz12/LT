type Callback = (...args: any[]) => any;
type Subscription = {
   unsubscribe: () => void;
};

class EventEmitter {
   private events: Map<string, Callback[]> = new Map();
   
   subscribe(eventName: string, callback: Callback): Subscription {
       if (!this.events.has(eventName)) {
           this.events.set(eventName, []);
       }
       
       const callbacks = this.events.get(eventName)!;
       callbacks.push(callback);
       
       return {
           unsubscribe: () => {
               const index = callbacks.indexOf(callback);
               if (index !== -1) {
                   callbacks.splice(index, 1);
               }
           }
       };
   }
   
   emit(eventName: string, args: any[] = []): any[] {
       if (!this.events.has(eventName)) {
           return [];
       }
       
       const callbacks = this.events.get(eventName)!;
       return callbacks.map(callback => callback(...args));
   }
}