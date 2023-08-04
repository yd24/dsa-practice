const hashStringToInt = (string: string, size: number): number => {
  let hash = 17;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % size;
}

class HashTable {
  size: number;
  table: Array<any>;
  loadFactor: number;

  constructor(size) {
    this.size = 0;
    this.table = new Array(size);
  }

  get = (key: string) => {
    const idx = hashStringToInt(key, this.table.length);
    if (!this.table[idx]) {
      return null;
    }
    return this.table[idx].find((entry) => entry[0] === key);
  }

  set = (key: string, value) => {
    const loadFactor = this.size / this.table.length;
    if (loadFactor > 0.8) {
      this.table = this.resize();
    }
    if (!this.has(key)) {
      const idx = hashStringToInt(key, this.table.length);
      if (this.table[idx]) {
        this.table[idx].push([key, value]);
      } else {
        this.table[idx] = [[key, value]];
      }
      this.size++;
    }
  }

  has = (key: string) => {
    const idx = hashStringToInt(key, this.table.length);
    if (!this.table[idx]) {
      return false;
    }
    return this.table[idx].find((entry) => entry[0] === key) ? true : false;
  }

  resize = (): Array<any> => {
    let resized = new Array(this.table.length * 2);
    this.table.forEach((ele) => {
      if (ele) {
        let key = resized[0][0];
        let idx = hashStringToInt(key, resized.length);
        resized[idx] = ele;
      }
    });
    return resized;
  }
}

export default HashTable;