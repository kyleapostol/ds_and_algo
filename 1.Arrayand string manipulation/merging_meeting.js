const testArr = [
    { startTime: 0,  endTime: 1 }, //9:00 - 9:30
    { startTime: 3,  endTime: 5 }, //10:30 - 11:30
    { startTime: 4,  endTime: 8 }, //11:00 - 1:00
    { startTime: 10, endTime: 12 }, //2:00 - 3:00
    { startTime: 9,  endTime: 10 }, //1:30 - 2:00
];

//You want to add a feature to see the times in a day when everyone is available.

/* expected
[
    { startTime: 0, endTime: 1 }, // 9:00 - 9:30
    { startTime: 3, endTime: 8 }, // 10:30 -  1:00
    { startTime: 9, endTime: 12 }, // 1:30 - 3:00
]
*/

function mergeRanges(meetings) {

    // Create a deep copy of the meetings array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
    //For objects and arrays containing other objects or arrays, copying these objects requires a deep copy.
    //Otherwise, changes made to the nested references will change the data nested in the original object or array.
    const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  
    // Sort by start time
    const sortedMeetings = meetingsCopy.sort((a, b) => {
      return a.startTime - b.startTime;
    });
  
    // Initialize mergedMeetings with the earliest meeting
    const mergedMeetings = [sortedMeetings[0]];
  
    for (let i = 1; i < sortedMeetings.length; i++) {
      const currentMeeting    = sortedMeetings[i];
      const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
  
      // If the current meeting overlaps with the last merged meeting, use the
      // later end time of the two
      if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
        lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
      } else {
  
        // Add the current meeting since it doesn't overlap
        mergedMeetings.push(currentMeeting);
      }
    }
    console.log(mergedMeetings)
    return mergedMeetings;
  }
  

export { mergeRanges };

//Notes: Deep copy with or without still returns expected values

//Complexity: O(nlgn) time and O(n)O(n) space.