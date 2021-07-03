/*
정규식 사용하지 않고 해시태그 찾는 알고리즘
*/

const text = `
  Today, #Java#script is nearly ubiquitous. Enterprises have been able to greatly reduce training costs and increase #developer productivity because #frontend #Java#script developers can work on the server side, and #vice-versa, eliminating the context switches and enabling all developers to pull from the same #knowledge base and vast module ecosystem.
`;

function solution(text) {
  var tags = [];

  const textList = text.split("#");
  textList.shift();

  if (!textList) {
    return [];
  }

  textList.map((text) => {
    if (text) {
      const hash = text
        .split("")
        .reduce((accumulator, currentValue, currentIndex, array) => {
          const code = currentValue.charCodeAt(0);
          if (
            (code >= 65 && code <= 90) ||
            (code >= 97 && code <= 122) ||
            (code >= 48 && code <= 57)
          ) {
            return accumulator + currentValue;
          }
          array.splice(1);
          return accumulator;
        }, "");

      if (hash && !tags.includes(hash)) {
        tags.push(hash);
      }
    }
  });

  return tags;
}

console.log(solution(text));
