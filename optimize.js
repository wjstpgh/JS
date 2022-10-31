//inline caching
function findUser(user) {
  return `${user.firstName} ${user.lastName}씨를 찾았습니다.`;
}

const userData = {
  firstName: '길동',
  lastName: '홍',
}

findUser(userData);//같은 결과에 대해 캐싱

//hidden classes
function Num(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Num(1, 2);
const obj2 = new Num(3, 4);
//나쁜 코드
obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj2.a = 100;
//좋은 코드
obj1.x = 30;
obj1.y = 100;
obj2.x = 30;
obj2.y = 100;