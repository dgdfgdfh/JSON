// JSON.parse() - принимает строку JSON в качестве параметра и возвращает соответствующую структуру данных JavaScript
// JSON.stringify() - принимает объект в качестве параметра и возвращает эквивалентную строковую JSON строку.

// Сохранение данных в LS
localStorage.setItem('key', [100, 200, 300]);

// Получить данные из LS
let str = localStorage.getItem('key');
console.log(str);

// Напишите скрипт, который сохранит в локальном хранилище три числа под тремя разными ключами.
// Запустите этот скрипт, чтобы данные сохранились.
// Затем напишите скрипт, который получит ваши три числа из локального хранилища и найдет их сумму.
// Запустите второй скрипт и убедитесь в его работоспособности.

localStorage.setItem('a', 100);
localStorage.setItem('b', 200);
localStorage.setItem('c', 300);

let a = Number(localStorage.getItem('a'));
let b = Number(localStorage.getItem('b'));
let c = Number(localStorage.getItem('c'));

let sum = a + b + c;
console.log(sum);

// Однократное сохранение в LS
let time = localStorage.getItem('time');
console.log(time)

if (time === null) {
    let now = Date.now();
    localStorage.setItem('time', now);
} else {

    let count = Date.now() - time;
    console.log(`С предыдущего обновления ${Math.round(count / 60000)} минут`)
}

// По заходу пользователя на сайт запишите в локальное хранилище текущий момент времени.
// Затем по повторному заходу выведите, сколько прошло времени с предыдущего захода пользователя на сайт.


//перезапись данных LocalStorage
localStorage.setItem('key', 1);
let value1 = localStorage.getItem('key');

console.log('Данные из LS', value1);

localStorage.setItem('key', 2);
value1 = localStorage.getItem('key');
console.log('Данные из LS', value1);

//удаление из LS
// localStorage.removeItem('key');
// console.log(localStorage.getItem('key'));

// let clearBtn = document.getElementById('clear');

// clearBtn.addEventListener('click', () => {
//     localStorage.clear();
// })
//очистка хранилища LS

console.log(localStorage.length);

let key = localStorage.key(1);

console.log(key);

console.log(localStorage.getItem(key));

//перебор хранилища по индексам

for (i = 0; i < localStorage; i++) {
    let key = localStorage.key(i);
    let val = localStorage.getItem(key)
    console.log(`$(key):{val}`)
}

//массивы ключей и значениия хранилища в localStorage
//массивы
let values = Object.values(localStorage);
console.log(values);


let arr = [1, 2, 3, 4, 5]
localStorage.setItem('arr', JSON.stringify(arr));

let str1 = localStorage.getItem('arr');
let result = JSON.parse(str1);
console.log(`${result} типа ${Array.isArray(result)}`);

result.push(6);

console.log(result)
localStorage.setItem('arr', JSON.stringify(result));