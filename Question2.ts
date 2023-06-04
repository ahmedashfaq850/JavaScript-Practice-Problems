// Given a string , reverse each word in the sentence
// --> input:  My name is Ahmed
// --> outout: ym eman si demha

let str = "my name is ahmed";

const newStr = str.split(" ").map((word: string) => {
  return word.split("").reverse().join("");
});

console.log(newStr.join(" "));
