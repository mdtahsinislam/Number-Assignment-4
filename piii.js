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