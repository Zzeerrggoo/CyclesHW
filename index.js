'use strict';

// Для вывода данных используйте alert() или document.
//     write() . Для ввода данных используйте prompt() и confirm() .
//  ■■ Задания, в которых необходимо использовать WHILE.
// 1. Вывести # столько раз, сколько указал пользователь.
// 2. Пользователь ввел число, а на экран вывелись все числа
// от введенного до 0.
// 3. Запросить число и степень. Возвести число в указанную
// степень и вывести результат.
// 4. Запросить 2 числа и найти все общие делители.
// 5. Посчитать факториал введенного пользователем числа.
//  ■■ Задания, в которых необходимо использовать DO WHILE.
// 1. Предлагать пользователю решить пример 2 + 2 * 2 до тех
// пор, пока он не решит его правильно.
// 2. Делить число 1000 на 2 до тех пор, пока не получится число
// меньше 50. Вывести это число и сколько делений произвели.
//  ■■ Задания, в которых необходимо использовать FOR.
// 3. Вывести все числа от 1 до 100, которые кратные указанному
// пользователем числу.
//

const num1 = Number(prompt('Enter the first number'));
const num2 = Number(prompt('Enter the second number'));

const gcd = euclid(num1, num2);
const arr = eratosthenesSieve(1000);

alert(gcd);

alert(factorize(gcd, arr));





function eratosthenesSieve(n) {

  const arr = new Array(n);
  arr.fill(true, 0, n);

  let i = 2;
  while (i * i < n) {
    if (arr[i]) {
      let j = i * i;

      while (j <= n) {
        arr[j] = false;
        j += i;
      }
    }
    ++i;
  }
  return arr;
}

function euclid(a, b) {

  if (a > b) {
    [a, b] = [b, a];
  }

  while (a !== 0) {
    b %= a;
    [a, b] = [b, a];
  }

  return b;
}

function factorize(n, divisors) {

  let i = 2;
  const res = [];

  while (Math.pow(i, 2) <= n) {

    if (divisors[i]) {
      if (n % i === 0) {
        res.push(i);
        n /= i;
      } else
        i++;
    }
  }

  if (n !== 1)
    res.push(n);

  return res;

}




