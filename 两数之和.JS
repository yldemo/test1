function twoSum(array, target) {
    for (let index = 0; index < array.length; index++) { 
         let diff = target - array[index];
         let diffIndex = array.indexOf(diff);
         if (diffIndex !== -1 && diffIndex!= index) {
            return [index, diffIndex];
        }
    }
            return []
}
const array1 = [2, 3, 7, 11, 15];
const target1 = 10;
const result1 = twoSum(array1, target1);
console.log(result1);

function twoSum2(array, target) {
    const map = new Map();
    for (let index = 0; index < array.length; index++) { 
          const diff = target - array[index];
         if (!map.has(diff)) {
            map.set(array[index], index);
         } else {
            return [map.get(diff), index];
         }
    }
            return []
}
const array2 = [2, 3, 7, 11, 15];
const target2 = 10;
const result2 = twoSum2(array2, target2);
console.log(result2);
         