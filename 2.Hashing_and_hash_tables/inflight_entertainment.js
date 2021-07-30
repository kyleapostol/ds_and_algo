/*
You've built an inflight entertainment system with on-demand movie streaming.

Users on longer flights like to start a second movie right when their first one ends, 
but they complain that the plane usually lands before they can see the ending. 
So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) 
and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.
*/

// let movieLengths = [2,4];
// let flightLength = 0


const canTwoMoviesFillFlight = (movieLengths, flightLength) => {

  // Movie lengths we've seen so far
  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];

    const matchingSecondMovieLength = flightLength - firstMovieLength;
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true;
    }

    movieLengthsSeen.add(firstMovieLength);
  }

  // We never found a match, so return false
  return false;
};

export{ canTwoMoviesFillFlight };