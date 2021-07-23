import { mergeRanges } from './array_and_string_manipulation.js'

const testArr = [
    { startTime: 0,  endTime: 1 }, //9:00 - 9:30
    { startTime: 3,  endTime: 5 }, //10:30 - 11:30
    { startTime: 4,  endTime: 8 }, //11:00 - 1:00
    { startTime: 10, endTime: 12 }, //2:00 - 3:00
    { startTime: 9,  endTime: 10 }, //1:30 - 2:00
];

// const testArr =  [{ startTime: 2, endTime: 4 }, { startTime: 1, endTime: 3 },];


mergeRanges(testArr);