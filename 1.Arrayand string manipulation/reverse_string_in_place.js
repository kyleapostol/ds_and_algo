//The goal of this question is to practice manipulating strings in place.
//Since we're modifying the input, we need a mutable ↴ type like an array,
//instead of JavaScript's immutable strings.

const reverseString = (arr) => {
    let left = 0;
    let right = arr.length-1;

    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}

const reverseWords = (message) => {
    return message.join('')
}

export { reverseString, reverseWords };