let numbers = process.argv.slice(2)
let sum = 0

numbers.forEach((number) => sum += Number(number))

console.log(sum)
