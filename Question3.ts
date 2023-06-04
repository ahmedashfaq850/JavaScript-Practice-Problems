// Check if given object is an array or not

function CheckisArray(elem: any): boolean {
  return Array.isArray(elem);
}

console.log(CheckisArray([]));
console.log(CheckisArray({}));
