type F = (...args: any[]) => void;

function throttle(fn: F, t: number): F {
  let nextCallTime = 0;
  let pendingArgs: any[] | null = null;
  let timeoutId: NodeJS.Timeout | null = null;

  return function(...args: any[]) {
    const now = Date.now();

    if (now >= nextCallTime) {
      fn(...args);
      nextCallTime = now + t;
      
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    } else {
      pendingArgs = args;
      
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          if (pendingArgs) {
            fn(...pendingArgs);
            nextCallTime = Date.now() + t;
            pendingArgs = null;
          }
          timeoutId = null;
        }, nextCallTime - now);
      }
    }
  };
}