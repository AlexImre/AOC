// fetch data frm https://adventofcode.com/2024/day/1/input

import fs from "fs"
fs.readFile("TEXT3.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const lines = data
    .split("\n")
    .map((line) => line.trim())
    .join("")

  const subString = /mul\(\d{1,3},\d{1,3}\)/g
  const numbers = /\d{1,3}(?=,|\))/g

  // everything on left is do, and right is dont?
  const split = lines.split("do()")
  const splitAgain = split.map((line) => line.split("don't()"))

  // const testString =
  //   "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"
  // const split2 = testString.split("do()")
  // const splitAgain2 = split2.map((line) => line.split("don't()"))

  let TOTAL = 0
  splitAgain.forEach(([good, bad]) => {
    const matches = good.match(subString)
    const numbersRes = matches.map((match) => match.match(numbers))

    const total = numbersRes.reduce((acc, curr) => {
      const [num1, num2] = curr
      return acc + Number(num1) * Number(num2)
    }, 0)

    TOTAL += total
  })

  console.log("🚀 ~ total ~ total:", TOTAL)
})

// wrong guess 192767529
