/*
서로 다른 자연수들로 이루어진 배열 arr 에 있는 서로 다른 2개의 자연수 합이 n이면 ture, 불가능하면 false
*/

// function solution(arr, n) {
//   var answer = false;

//   arr.sort((a, b) => a - b);
//   const validArr = arr.filter((a) => a < n);
//   const length = validArr.length;
//   if (length < 2) {
//     return false;
//   }

//   for (let i = 0; i < length - 1; i++) {
//     for (let j = i + 1; j < length; j++) {
//       if (arr[i] + arr[j] === n) {
//         return true;
//       }
//     }
//   }

//   return answer;
// }

function solution(arr, n) {
  var answer = false;

  arr.sort((a, b) => a - b);
  const validArr = arr.filter((a) => a < n);
  const length = validArr.length;
  if (length < 2) {
    return false;
  }

  for (let i = 0; i < length - 1; i++) {
    const x = n - validArr[i];
    const clone = [...validArr];
    clone.splice(i, 1);
    if (clone.includes(x)) {
      return true;
    }
  }

  return answer;
}

// function combination(arr, num) {
//   let result = [];
//   if (num == 1) return arr.map((e) => [e]);

//   arr.forEach((e, i, array) => {
//     let rest = array.slice(i + 1);
//     let combinations = combination(rest, num - 1);
//     let combiArr = combinations.map((x) => [e, ...x]);
//     result.push(...combiArr);
//   });

//   return result;
// }

// function solution(arr, n) {
//   var answer = false;

//   const length = arr.length;
//   if (length < 2) {
//     return false;
//   }

//   const combinationMap = combination(arr, 2);

//   for (let i = 0; i < combinationMap.length; i++) {
//     if (
//       n ===
//       combinationMap[i].reduce(
//         (accumulator, currentValue) => accumulator + currentValue,
//         0
//       )
//     ) {
//       return true;
//     }
//   }

//   return answer;
// }

console.log(solution([5, 3, 9, 13], 8));

console.log(solution([5, 3, 9, 13], 7));
