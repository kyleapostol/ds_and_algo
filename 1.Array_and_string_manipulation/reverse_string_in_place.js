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

    reverseCharacters(message, 0, message.length-1);

    let currentWordStartIndex = 0;
    for(let i = 0; i <= message.length; i++){

        //Found the end of the current word!
        if(message[i] === ' ' || i === message.length){
            reverseCharacters(message, currentWordStartIndex, i - 1);
            currentWordStartIndex = i + 1;
        }
    }


    //reverse all the characters
    function reverseCharacters(message, leftIndex, rightIndex){
        while(leftIndex < rightIndex){
            let temp = message[leftIndex];
            message[leftIndex] = message[rightIndex];
            message[rightIndex] = temp;
        
            leftIndex++;
            rightIndex--;
        };
    }

    return message;
}

export { reverseString, reverseWords };