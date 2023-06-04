// find characters occurance in a given string

function OccuranceCount(str: string) {
  const tem = str.split("");
  var obj: any = {};
  for (let i of tem) {
    if (obj.hasOwnProperty(i) === true) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  }
  return obj;
}

console.log(OccuranceCount("applie"));
