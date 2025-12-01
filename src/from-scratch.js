/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  if (!petBreed || !petName) {
    console.log("Missing information. Please provide a valid pet.");
  } else if (petBreed === 'dog') {
    console.log(`I love dogs! ${petName} is so cute!`);
  } else if (petBreed === 'cat') {
    console.log(`I love cats! ${petName} is so cute!`);
  } else if (petBreed === 'turtle') {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`);
  } else if (petBreed === 'snake') {
    console.log(`Not a fan, please take ${petName} and leave.`);
  } else {
    console.log("What an...interesting pet.");
  }
};

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  // Your code here
  for ( let i = firstNum; i < secondNum; i++ ){
      
      if (firstNum < secondNum) {
          console.log(i)
      } 
      else if ( firstNum === secondNum || firstNum > secondNum){
          console.log('Prints Nothing');
      }      
  }
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  // Your code here
  for (let i = 0; i < str.length; i++){
      console.log(str[i].toUpperCase()+ '!');
  }
};

// ============================================
// Question 4: letterCaseCounts
// ============================================

function letterCaseCounts(str) {
  let result = { lowercase: 0, uppercase: 0, neither: 0 }
  for (let char of str) {
    if (char >= 'a' && char <= 'z') result.lowercase++
    else if (char >= 'A' && char <= 'Z') result.uppercase++
    else result.neither++
  }
  return result
};


// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

function getNamesOfGreedyGnomes(gnomes) {
  if (gnomes.length === 0) {
    return [];
  }

  return gnomes
    .filter(gnome => gnome.stolenDecorations.length > 1)
    .map(gnome => gnome.name);
}


// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
