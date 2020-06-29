'use strict';

//  ■■ Задания, в которых необходимо использовать FOR.
// 3. Вывести все числа от 1 до 100, которые кратные указанному
// пользователем числу.
//

const userNum = Number(prompt('Enter your number'));
const res = [];
const DELIMITER = 100;


//Use Math.abs(...) for negative numbers
for (let i = Math.abs(userNum); i <= DELIMITER; i += Math.abs(userNum)) {
  res.push(i);
}

alert(res);