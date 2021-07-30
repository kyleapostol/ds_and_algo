function mergeArrays(myArray, alicesArray) {
  
  const mergedArray = [];

  let currentIndexAlices = 0;
  let currentIndexMine = 0;
  let currentIndexMerged = 0;

  while (currentIndexMerged < (myArray.length + alicesArray.length)) {
    const isMyArrayexhausted = currentIndexMine >= myArray.length;
    const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

    // Case: next comes from my array
    // My array must not be exhausted, and EITHER:
    // 1) Alice's array IS exhausted, or
    // 2) The current element in my array is less
    //    than the current element in Alice's array
    if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
      (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {

      mergedArray[currentIndexMerged] = myArray[currentIndexMine];
      currentIndexMine++;

      // Case: next comes from Alice's array
    } else {
      mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
      currentIndexAlices++;
    }

    currentIndexMerged++;
  }

  return mergedArray;
}

export { mergeArrays };


const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [];

/*
Complexity
O(n)O(n) time and O(n)O(n) additional space, where nn is the number of items in the merged array.

The added space comes from allocating the mergedArray. There's no way to do this " in place" ↴ because neither of our input arrays are necessarily big enough to hold the merged array.

But if our inputs were linked lists, we could avoid allocating a new structure and do the merge by simply adjusting the next pointers in the list nodes!

In our implementation above, we could avoid tracking currentIndexMerged and just compute it on the fly by adding currentIndexMine and currentIndexAlices.
This would only save us one integer of space though, which is hardly anything.
It's probably not worth the added code complexity. */