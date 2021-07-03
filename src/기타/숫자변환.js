/*
3자리마다 쉼표를 추가하기
*/

function solution(num) {
  var answer = num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  return answer;
}

console.log(solution(12344556));
