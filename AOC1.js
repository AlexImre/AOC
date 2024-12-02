// fetch data frm https://adventofcode.com/2024/day/1/input

import fs from "fs"
fs.readFile("TEXT.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const lines = data.split("\n")

  let diff = 0
  const linesSplit = lines.map((line) => {
    return line.split(" ")
  })

  const array1 = linesSplit.map((line) => {
    return line[0]
  })

  const array2 = linesSplit.map((line) => {
    return line[3]
  })

  const array1Sorted = array1.sort((a, b) => a - b)
  const array2Sorted = array2.sort((a, b) => a - b)

  for (let i = 0; i < array1Sorted.length; i++) {
    diff += Math.abs(array1Sorted[i] - array2Sorted[i])
  }

  const countDict = {}
  for (let i = 0; i < array2Sorted.length; i++) {
    const list2Num = Number(array2Sorted[i])

    if (countDict[list2Num]) {
      countDict[list2Num] += 1
    } else {
      countDict[list2Num] = 1
    }
  }

  let total = 0
  for (let i = 0; i < array1Sorted.length; i++) {
    const list1Num = array1Sorted[i]
    const list2Item = countDict[list1Num]
    if (countDict[list1Num]) {
      total += list1Num * list2Item
    }
  }
  console.log(total)
})
