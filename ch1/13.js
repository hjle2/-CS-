const list = [1, 2, 3, 4, 5, 11, 12]
// reduce의 두번째 인자는 max의 초기값을 의미한다.
const ret = list.reduce((max, num) => num > max ? num : max, 0)
console.log(ret) // 12 
