import { mergeRanges } from './merging_meeting.js';
import { reverseString, reverseWords } from './reverse_string_in_place.js';
import { mergeArrays } from  './merging_arrays.js';
import { isFirstComeFirstServed } from './order_checker.js'


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
const alicesArray = [];

// console.log(mergeArrays(myArray, alicesArray));



const takeOutOrders = [1, 3, 5];
const dineInOrders = [2, 4, 6];
const servedOrders = [1, 2, 4, 6, 5, 3];

console.log(isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders))
