function jsonStringify(object: any): string {
  if (object === null) return 'null';
  
  if (typeof object === 'string') return `"${object}"`;
  
  if (typeof object === 'number' || typeof object === 'boolean') {
    return String(object);
  }
  
  if (Array.isArray(object)) {
    const elements = object.map(item => jsonStringify(item));
    return `[${elements.join(',')}]`;
  }
  
  if (typeof object === 'object') {
    const keys = Object.keys(object);
    const pairs = keys.map(key => `"${key}":${jsonStringify(object[key])}`);
    return `{${pairs.join(',')}}`;
  }
  
  return '';
}