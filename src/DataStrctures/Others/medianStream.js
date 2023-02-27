class medianFinder {
  constructor() {
    this.numbers = [];
  }
  addNum(num) {
    let left = 0;
    let right = this.numbers.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.numbers[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    this.numbers.splice(left, 0, num);
  }
  findMedian() {
    let n = this.numbers.length;
    if (n % 2 === 0) {
      return (this.numbers[n / 2 - 1] + this.numbers[n / 2]) / 2;
    } else {
      return this.numbers[Math.floor(n / 2)];
    }
  }
}
const median = new medianFinder();
median.addNum(1);
console.log(median.findMedian());
median.addNum(2);
console.log(median.findMedian());
