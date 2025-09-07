
//problem 04:

function isBestFriend(f1, f2) {
  
  if (typeof f1 !== 'object' || f1 === null || typeof f2 !== 'object' || f2 === null) {
    return "Invalid";
  }

  
  const isF1BestFriendOfF2 = f1.bestFriend === f2.roll;

  
  const isF2BestFriendOfF1 = f2.bestFriend === f1.roll;

  
  if (isF1BestFriendOfF2 && isF2BestFriendOfF1) {
    return true;
  } else {
    return false;
  }
}


// console.log(`Input: { name: "hashem", roll: 1, bestFriend: 2 }, { name: "kashem", roll: 2, bestFriend: 1 }, Output: ${isBestFriend({ name: "hashem", roll: 1, bestFriend: 2 }, { name: "kashem", roll: 2, bestFriend: 1 })}`);

// console.log(`Input: { name: "hashem", roll: 21, bestFriend: 1 }, { name: "kashem", roll: 1, bestFriend: 2 }, Output: ${isBestFriend({ name: "hashem", roll: 21, bestFriend: 1 }, { name: "kashem", roll: 1, bestFriend: 2 })}`);

// console.log(`Input: "kashem", { name:"kashem", roll: 2, bestFriend: 1 }, Output: ${isBestFriend("kashem", { name:"kashem", roll: 2, bestFriend: 1 })}`);

// console.log(`Input: "hashem", { name:"kashem", roll: 2, bestFriend: 1 }, Output: ${isBestFriend("hashem", { name:"kashem", roll: 2, bestFriend: 1 })}`);

// console.log(`Input: { name: "hashem", roll: 1, bestFriend: 1 }, { name: "kashem", roll: 1, bestFriend: 1 }, Output: ${isBestFriend({ name: "hashem", roll: 1, bestFriend: 1 }, { name: "kashem", roll: 1, bestFriend: 1 })}`);