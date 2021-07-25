import { mergeRanges } from './merging_meeting.js';
import { reverseString, reverseWords } from './reverse_string_in_place.js';
import { mergeArrays } from  './merging_arrays.js';


const testArr = [
    { startTime: 0,  endTime: 1 }, //9:00 - 9:30
    { startTime: 3,  endTime: 5 }, //10:30 - 11:30
    { startTime: 4,  endTime: 8 }, //11:00 - 1:00
    { startTime: 10, endTime: 12 }, //2:00 - 3:00
    { startTime: 9,  endTime: 10 }, //1:30 - 2:00
];
// mergeRanges(testArr);

const stringArr = ['H', 'E', 'L', 'L', 'O;'];
const message = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];


// console.log(reverseWords(message));

// console.log('Outcome: steal pound cake');


const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));

