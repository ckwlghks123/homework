var person = {
  name: "홍길동",
  birthday: "030219",
  age: 30,
  pId: "1234567",
  fullId: function () {
    return this.birthday + this.pId;
  },
};

// this.를 사용하지 않고 fullId 함수 내에서 birthday와
// pId 프로퍼티에 접근하려고 하면 "ReferenceError"가 발생하는 이유는
// JavaScript에서 스코프와 변수 접근 방식 때문입니다.
// fullId 함수를 person 객체 내부에 정의하면
// 함수는 객체의 메서드가 됩니다.
// 함수 내부에서 this를 사용하지 않고 birthday와 pId 프로퍼티에 접근하면
// JavaScript는 함수의 지역 스코프에서 이 변수들을 찾습니다.
// 함수의 지역 스코프에는 해당 이름의 변수가 없으므로 "ReferenceError"가 발생합니다.
// fullId 함수 내부에서 person 객체의 프로퍼티에 접근하려면 this.birthday와
// this.pId를 사용해야 합니다. this 키워드는
// 현재 객체의 인스턴스(person 객체)를 가리키며,
// 이를 통해 해당 객체의 프로퍼티와 메서드에 접근할 수 있게 됩니다.
