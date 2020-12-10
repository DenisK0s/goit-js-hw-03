// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = (string) => {
  const stringItems = string.split(' ');

  let longestWord = stringItems[0];

  const stringItemsLength = stringItems.length;
  const longestWordLength = longestWord.length;
  
  for (let i = 1; i < stringItemsLength; i += 1) {
    if (stringItems[i].length > longestWordLength) {
      longestWord = stringItems[i];
    }
  }
   
  return longestWord;
};


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
