class LRUcache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      let oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
  }
}
//Driver code
let cacheObj = new LRUcache(3);
cacheObj.put("A", 5);
cacheObj.put("B", 5);
cacheObj.put("C", 5);
//console.log(cacheObj)
cacheObj.put("D", 5);
cacheObj.get("B");
cacheObj.put("E", 6);
console.log(cacheObj);
