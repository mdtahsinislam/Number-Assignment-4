//Problem 01 :  


function cashOut(money) {
    if (typeof money !== 'number' || money < 0) {
    return "Invalid";
  }
  if (money === 0) {
    return 0;
  }
  
  const charge = (money * 1.75) / 100;
  
  return charge;
}
// console.log(`Input: 2000, Charge: ${cashOut(2000)}`);//Charge: 35
// console.log(`Input: 100, charge: ${cashOut(100)}`);//Charge: 1.75
// console.log(`Input: 999, charge: ${cashOut(999)}`);//Charge: 17.4825
// console.log(`Input: -350, charge: ${cashOut(-350)}`);//Charge:Invalid
// console.log(`Input: 0, charge: ${cashOut(0)}`);//charge:0
// console.log(`Input: "101", charge: ${cashOut("101")}`);//charge: Invalid
// console.log(`Input: "mewauu", charge: ${cashOut("mewauu")}`);//charge:Invalid




//problem 02 : 

function validEmail(email) {
  
  if (typeof email !== 'string') {
    return "Invalid";
  }

  if (email.includes(" ")) {
    return false;
  }

  if (!email.includes("@")) {
    return false;
  }

  const parts = email.split("@");
  const localPart = parts[0];
  const domainPart = parts[1];

  if (!email.endsWith(".com")) {
    return false;
  }

  const invalidStartChars = ['.', '-', '_', '+', '@'];
  if (invalidStartChars.includes(localPart.charAt(0))) {
    return false;
  }
  return true;
}


// console.log(`Input: "ferdous@gmail.com", Output: ${validEmail("ferdous@gmail.com")}`); // true
// console.log(`Input: "izihad@gmail.com", Output: ${validEmail("izihad@gmail.com")}`);   // true
// console.log(`Input: "-king@yahoo.com", Output: ${validEmail("-king@yahoo.com")}`);     // false (starts with -)
// console.log(`Input: ["jhankar@hero.com"], Output: ${validEmail(["jhankar@hero.com"])}`); // "Invalid" (not a string)
// console.log(`Input: "Mewo@cat.com", Output: ${validEmail("Mewo@cat.com")}`);       // true
// console.log(`Input: "programming-hero.com", Output: ${validEmail("programming-hero.com")}`); // false (no @)
// console.log(`Input: "chat420@gpt.net", Output: ${validEmail("chat420@gpt.net")}`);  // false (doesn't end with .com)
// console.log(`Input: true, Output: ${validEmail(true)}`);                            // "Invalid" (not a string)
// console.log(`Input: "he ro@alom.com", Output: ${validEmail("he ro@alom.com")}`);     // false (contains a space)



//problem 03 :


function electionResult(votes) {
  
  if (!Array.isArray(votes)) {
    return "Invalid";
  }

  
  let mangoCount = 0;
  let bananaCount = 0;

  
  for (const vote of votes) {
    
    const lowerCaseVote = vote.toLowerCase();

    if (lowerCaseVote === "mango") {
      mangoCount++;
    } else if (lowerCaseVote === "banana") {
      bananaCount++;
    }
    
  }

  
  if (mangoCount > bananaCount) {
    return "Mango";
  } else if (bananaCount > mangoCount) {
    return "Banana";
  } else {
    
    return "Draw";
  }
}


// console.log(`Input: ["mango", "banana", "mango", "banana", "mango"], Output: ${electionResult(["mango", "banana", "mango", "banana", "mango"])}`);
// console.log(`Input: [], Output: ${electionResult([])}`);
// console.log(`Input: ["mango", "banana", "jaker party", "no"], Output: ${electionResult(["mango", "banana", "jaker party", "no"])}`);
// console.log(`Input: ["mango"], Output: ${electionResult(["mango"])}`);
// console.log(`Input: ["banana", "banana", "age e valo chilam", "no"], Output: ${electionResult(["banana", "banana", "age e valo chilam", "no"])}`);


// console.log(`Input: {result: "mango", a: "banana", b: "mango"}, Output: ${electionResult({result: "mango", a: "banana", b: "mango"})}`);

// console.log(`Input: "mango , banana", Output: ${electionResult("mango , banana")}`);
// console.log(`Input: ["mango", "BananA", "na vote", "na vote"], Output: ${electionResult(["mango", "BananA", "na vote", "na vote"])}`);





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
