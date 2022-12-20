var stringHandsOn = function () {
  var str = "     Hey you are doing good, keep it up     ";
  console.log(`1) The given sring is:- ${str}`);
  var beforeLength = str.Length;
  console.log(`2 The Length of given string is:- ${beforeLength} `);
  var trim = str.trim();
  console.log(`3) After removing extra spaces:- ${trim}`);
  var afterLength = trim.Length;
  console.log(
    `4) Count of extra spaces that removed is:- ${beforeLength - afterLength} `
  );
  console.log(
    `5) The first character of string is ${trim.charAt(
      0
    )} and the last character is ${trim.charAt(trim.length - 1)}`
  );
  var wordsInsentence = trim.split(" ");
  console.log(`6) Total words in the string are:- ${wordsInsentence.length}`);
  console.log(`7) Index of word "good" is ${trim.indexOf("good")}`);
  console.log(
    `8) using substr- Substring starting from index 22 is:- ${trim.substr(
      22,
      trim.length - 1
    )}`
  );
  console.log(
    `8) using slice- Substring starting from index 22 is:- ${trim.slice(
      22,
      trim.length - 1
    )}`
  );
  console.log(`9) Is string ending up with "up":- ${str.endsWith("up")}`);
  console.log(
    `10) Is string starting up with "Hey":- ${str.startsWith("Hey")}`
  );
};
stringHandsOn();
