
//prroblem 05:
function calculateWatchTime(times) {
  
  if (!Array.isArray(times)) {
    return "Invalid";
  }

  
  for (const time of times) {
    if (typeof time !== 'number') {
      return "Invalid";
    }
  }

  
  const totalSeconds = times.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  
  return {
    hour: hours,
    minute: minutes,
    second: seconds
  };
}


// console.log(`Input: [100, 99, 119, 300], Output: `, calculateWatchTime([100, 99, 119, 300]));
// console.log(`Input: [1000, 2000, 725], Output: `, calculateWatchTime([1000, 2000, 725]));
// console.log(`Input: [100, 3800], Output: `, calculateWatchTime([100, 3800]));
// console.log(`Input: [], Output: `, calculateWatchTime([]));
// console.log(`Input: [5600], Output: `, calculateWatchTime([5600]));
// console.log(`Input: [100, 3800, "90"], Output: ${calculateWatchTime([100, 3800, "90"])}`);