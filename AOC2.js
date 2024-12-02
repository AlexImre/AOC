// fetch data frm https://adventofcode.com/2024/day/1/input

import fs from "fs"
fs.readFile("TEXT2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const lines = data.split("\n").map((line) => line.trim())
  const linesSplit = lines.map((line) => {
    return line.split(" ")
  })

  // const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12]

  // const testIsDecreasing = isDecreasing(testArray)
  // console.log("🚀 ~ testIsDecreasing ~ testIsDecreasing:", testIsDecreasing)
  // const testIsIncreasing = isIncreasing(testArray)
  // console.log("🚀 ~ testIsIncreasing ~ testIsIncreasing:", testIsIncreasing)
  // const testLevelDiff = levelDiff(testArray)
  // console.log("🚀 ~ testLevelDiff ~ testLevelDiff:", testLevelDiff)

  let safeReports = 0
  linesSplit.forEach((line, idx) => {
    // const isDecreasingRes = isDecreasing(line)
    // const isIncreasingRes = isIncreasing(line)
    // const getDiff = levelDiff(line)

    if (isDecreasingOrIncreasing(line) && levelDiff(line)) {
      safeReports += 1
    }
  })
  console.log("🚀 ~ fs.readFile ~ safeReports:", safeReports)
})

// The levels are either all increasing or all decreasing.
// Any two adjacent levels differ by at least one and at most three.
const isDecreasing = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) < Number(array[i + 1])) {
      return false
    }
  }
  return true
}

const isIncreasing = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) > Number(array[i + 1])) {
      return false
    }
  }
  return true
}

const isDecreasingOrIncreasing = (array) => {
  const isDecreasingRes = isDecreasing(array)
  const isIncreasingRes = isIncreasing(array)
  if (isDecreasingRes || isIncreasingRes) {
    return true
  }
  return false
}

const levelDiff = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    const diff = Math.abs(Number(array[i]) - Number(array[i + 1]))
    if (diff < 1 || diff > 3) {
      return false
    }
  }
  return true
}
