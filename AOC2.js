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

  const testArrays = [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9],
  ]

  // const testIsDecreasing = isDecreasing(testArray)
  // console.log("🚀 ~ testIsDecreasing ~ testIsDecreasing:", testIsDecreasing)
  // const testIsIncreasing = isIncreasing(testArray)
  // console.log("🚀 ~ testIsIncreasing ~ testIsIncreasing:", testIsIncreasing)
  // const testLevelDiff = levelDiff(testArray)
  // console.log("🚀 ~ testLevelDiff ~ testLevelDiff:", testLevelDiff)

  let safeReports = 0
  testArrays.forEach((line) => {
    let itemDetails = {
      increasing: 0,
      decreasing: 0,
      diff: 0,
    }
    for (let i = 0; i < line.length - 1; i++) {
      const currItem = Number(line[i])
      const nextItem = Number(line[i + 1])
      if (isDecreasingLevel(currItem, nextItem)) {
        itemDetails.decreasing += 1
      }
      if (isIncreasingLevel(currItem, nextItem)) {
        itemDetails.increasing += 1
      }
      if (isLevelDiff(currItem, nextItem)) {
        itemDetails.diff += 1
      }
    }
    // console.log("🚀 ~ linesSplit.forEach ~ line:", line)

    const comparisons = line.length - 1
    console.log("🚀 ~ linesSplit.forEach ~ comparisons:", comparisons)
    console.log(line)
    console.log(itemDetails)

    if (
      (itemDetails.increasing === comparisons ||
        itemDetails.decreasing === comparisons) &&
      itemDetails.diff === comparisons
    ) {
      console.log("-------- line is valid ---------\n")
      safeReports += 1
    }

    if (
      (itemDetails.increasing === comparisons - 1 ||
        itemDetails.decreasing === comparisons - 1) &&
      itemDetails.diff === comparisons
    ) {
      console.log("-------- line is valid ---------\n")
      safeReports += 1
    }

    if (
      (itemDetails.increasing === comparisons ||
        itemDetails.decreasing === comparisons) &&
      itemDetails.diff === comparisons - 1
    ) {
      console.log("-------- line is valid ---------\n")
      safeReports += 1
    }

    // if (
    //   Math.abs(itemDetails.increasing - itemDetails.decreasing) >=
    //     comparisons - 1 &&
    //   itemDetails.diff >= comparisons - 1
    // ) {
    //   console.log(line)
    //   safeReports += 1
    // }

    // if (
    //   comparisons === 4 &&
    //   itemDetails.diff === 3 &&
    //   itemDetails.increasing === 3
    // ) {
    //   console.log("🚀 ~ linesSplit.forEach ~ line:", line)
    //   console.log("🚀 ~ linesSplit.forEach ~ itemDetails:", itemDetails)
    //   if (
    //     (itemDetails.increasing === comparisons ||
    //       itemDetails.decreasing === comparisons) &&
    //     itemDetails.diff === comparisons
    //   ) {
    //     console.log("-------- line is valid ---------")
    //     safeReports += 1
    //   }

    //   if (
    //     (itemDetails.increasing === comparisons - 1 ||
    //       itemDetails.decreasing === comparisons - 1) &&
    //     itemDetails.diff === comparisons
    //   ) {
    //     console.log("-------- line is valid ---------")
    //     safeReports += 1
    //   }

    //   if (
    //     (itemDetails.increasing === comparisons ||
    //       itemDetails.decreasing === comparisons) &&
    //     itemDetails.diff === comparisons - 1
    //   ) {
    //     console.log("-------- line is valid ---------")
    //     safeReports += 1
    //   }
    // }
  })
  console.log("🚀 ~ fs.readFile ~ safeReports:", safeReports)
})

const isDecreasingLevel = (currLevel, nextLevel) => {
  if (currLevel > nextLevel) {
    return true
  }
  return false
}

const isIncreasingLevel = (currLevel, nextLevel) => {
  if (currLevel < nextLevel) {
    return true
  }
  return false
}

const isLevelDiff = (currLevel, nextLevel) => {
  const diff = Math.abs(currLevel - nextLevel)
  if (diff >= 1 && diff <= 3) {
    return true
  }
  return false
}
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
