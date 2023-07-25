const obj = { name: "some", age: 1 };
console.log(obj.address);

// 객체에 해당 속성이 존재하지 않는 경우

let val;
console.log(val);

// 변수를 초기화 하지않고 사용했을때

const arr = [1, 2, 3];
console.log(arr[3]); // 인덱스가 3인 요소가 존재하지 않음

// 배열에서 존재하지 않는 원소에 접근할 경우

function func() {
  // 반환문이 없으므로 undefined를 반환합니다.
}
console.log(func());

// 함수에서 아무것도 반환하지 않을경우

function func2(parameter) {
  console.log(parameter);
}
func2();

// 함수에 인자를 넘기지 않았을때

console.log(wwww);

// 존재하지않는 변수를 참조할경우

function sum(a, b) {
  console.log(a + b);
}
console.log(sum(5));

// 함수의 인자 개수보다 적게 전달 했을때

const element = document.getElementById("nonExistentElement");

console.log(element); // null

// DOM 요소를 찾을때 요소를 찾지 못하면 null을 반환해 할당합니다.
