// Helper function to capitalize the first letter of a word
function capitalize(word) {
    if (word && typeof word === 'string') {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return '';
  }
  
  // Helper function to add a word to an array
  function addWord(array, word) {
    if (array && Array.isArray(array) && word) {
      array.push(word);
      return array;
    }
    return array;
  }
  
  // Helper function to find a word in an array
  function findWord(array, word) {
    if (array && Array.isArray(array) && word) {
      return array.includes(word);
    }
    return false;
  }
  
  // Example usage:
  let words = ['javascript', 'coding', 'practice'];
  
  // Adding a word
  words = addWord(words, 'fun');
  console.log('After adding a word:', words);
  
  // Finding a word
  const hasCoding = findWord(words, 'coding');
  console.log('Contains "coding"?', hasCoding);
  
  // Capitalizing words
  const capitalizedWords = words.map(word => capitalize(word));
  console.log('Capitalized Words:', capitalizedWords);
