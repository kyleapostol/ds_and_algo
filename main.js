import { mergeRanges } from './1.Array_and_string_manipulation/merging_meeting.js';
import { reverseString, reverseWords } from './1.Array_and_string_manipulation/reverse_string_in_place.js';
import { mergeArrays } from  './1.Array_and_string_manipulation/merging_arrays.js';
import { isFirstComeFirstServed } from './1.Array_and_string_manipulation/order_checker.js'
import { hasPalindromePermutation } from './2.Hashing_and_hash_tables/permutation_palindrome.js';
import  WorldCloudData  from './2.Hashing_and_hash_tables/word_cloud_data.js';

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

// console.log(isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders))


// console.log(hasPalindromePermutation("aabcbcd"));
let sentence = 'Chocolate cake for dinner and pound cake for dessert';

console.log(new WorldCloudData(sentence).wordsToCounts);