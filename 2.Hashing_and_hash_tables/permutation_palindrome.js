/*Write an efficient function that checks whether any permutation
 of an input string is a palindrome. */

const hasPalindromePermutation = (theString) => {


  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set();
  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;

}

export{ hasPalindromePermutation };

//A permutation is an ordering of a set of items.
//A palindrome is a string that's the same when read forward and backward.


//Let's try rephrasing the problem. How can we tell if any permutation of a string is a palindrome?
