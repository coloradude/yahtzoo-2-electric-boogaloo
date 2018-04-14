export const genericNumsScore = (dice, num) => {
  return dice.reduce((curr, next) => next.value === num ? curr + next.value : curr, 0)
}

export const threeOrFourOfAKindScore = (dice, num) => {
  const reduced = dice.reduce((curr, next) => {
    curr[next.value] = curr[next.value] + 1 || 1
    return curr
  }, {})

  let finalScore = 0

  for (let item in reduced) {
    
    if (Number(reduced[item]) >= num) {
      finalScore = dice.reduce((curr, next) => curr + next.value, 0)
    }
  }
  return finalScore
}

export const fullHouseScore = dice => {
  const scores = dice.reduce((curr, next) => {
    curr[next.value] = curr[next.value] + 1 || 1
    return curr
  }, {})

  const propertyNames = Object.getOwnPropertyNames(scores)
  return propertyNames.length === 2 && (scores[propertyNames[0]] === 3 || scores[propertyNames[1]] === 3) ? 25 : 0
}

export const hasStraightScore = (dice, smallOrLarge) => {

  dice = [...dice]
  // Sets score depending on being called for small straight of large straight
  const potentialScore = smallOrLarge === 4 ? 30 : 40
  // Sorts the dice based on value
  const sorted = dice.sort((a, b) => a.value - b.value)
  
  // For first 4 die, pulls out die that arent 1 smaller than next die.
  // Pulls out last die if it isnt 1 more than previous
  const filtered = sorted.filter((die, i) => {
    return i < 4 ?
      sorted[i].value + 1 === sorted[i + 1].value :
      sorted[i].value - 1 === sorted[i - 1].value
    }
  )

  // Compares length of sorted/filtered array to expected length
  // of array if a straight is present
  return filtered.length >= smallOrLarge ? potentialScore : 0

}


export const yahtzooScore = dice => {
  const scores = dice.reduce((curr, next) => {
    curr[next.value] = curr[next.value] + 1 || 1
    return curr
  }, {})
   return Object.getOwnPropertyNames(scores).length === 1 ? 50 : 0
}

export const chanceScore = dice => {
    return dice.reduce((curr, next) => curr + next.value, 0)
}
