//                                      Game crown anchored


//  возвращает  случайное  целое  число  в  диапазоне  [т,  п]  (включительно)
function  rand (m,  n) {
  return  m  +  Math.floor(( n - m + 1)*Math.random());
}
  //  случайный выбор  одной  из  шести граней  Короны  и  Якоря

function  randFace () {
  return  [ "crown", "anchor", "heart", "spade", "club", "diamond"]
          [rand(0, 5)];
}

  //  Начальные  условия
let  funds =  50; // начальная сумма денег
let  round = 0; // количество туров

while (funds > 1 && funds < 100 ) {
  round++;
  console.log(`round: ${round}`);
  console.log(`\tstarting funds: ${funds} p`);

// Этап 1: Размещение  ставок
  let bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 }; // ставки
  let totalBet = rand(1, funds); // поведенчиский фактор игрока
  if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
    } else {
//  Распределение  всех  ставок
    let remaining = totalBet; // распологаемые деньги
    do {   //цыкл ставок
      let bet = rand(1, remaining); // случайная ставка
      let face = randFace(); // выбор масти ставки
      bets[face] = bets[face] + bet; //обьект описывающий ставки раунда
      remaining = remaining - bet; // вычитание суммы ставки из всех распологаемых денег
      } while ( remaining  >  0 ) // условие цыкла, пока дентги не закончатся
    }

  funds = funds - totalBet; // подсчет остатка после раунда
  console.log('\tbets: ' + Object.keys(bets).map( face => `${face} : ${bets[face]} pence`).join(', ') +
  `(total: ${totalBet} pence)`);

// Этап 2: Бросок  костей
  const  hand  = [];
  for (let roll = 0; roll < 3; roll++) {
    hand.push(randFace());
    console.log( `\thand: ${hand.join(', ' )}`);

// Этап 3: Получение выиграша
    let winnings = 0;
    for ( let die = 0; die < hand.length; die++) {
      let face = hand[die];
      if (bets[face] > 0 ) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
     console.log(`\twinnings:  ${winnings}`);
  }

console.log(`\tending funds: ${funds}`);
}


const someString = '5';
const resSome = someString + 3;
console.log(resSome, typeof (resSome));


// Фільтрація масиву на унікальні значення
const arr = ["Гривна", "Рубыль", "Dollar", "Euro", "Funt", "Dollar"];

const strExmpl = "Some text";

let uniqueValues = arr.filter((value, index, self) => {
  return self.indexOf(value) === index;
})
console.log(uniqueValues);

//___________________________________________________________________________________

let uniqueValues2 = [...new Set(arr)];
console.log(uniqueValues2);

function unique1(arr) {
  let resArr = [],
    o = {},
    n = arr.length;
  for (let i = 0; i < n; ++i) {
    o[arr[i]] = arr[i];
  }
  console.log(o);
  for (let i in o) {
    resArr.push(o[i]);
  }
  return resArr;
};

console.log(unique1(arr));

console.log('Result: ', strExmpl.substr(4));
console.log(typeof NaN);

//      Валидатор дан больщие и малые буквы англ, знаки и цыфры макс 6 знаков

let str7 = 'zxcbvnb756453';
let str8 = 'zxcBvnb75$6453'

  function checkString(str) {
    return str.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}$/g)
  }

console.log(checkString(str8));

//Оператор кома

{
  let x = 0, y = 10, z;
  z = (x++, y++);
  console.log(x, y, z);
}


// Проверка слова на паллиндром

const palindrome = str => {
  str = str.toLowercase();
  return str === str.split('').reverse().join();
}

//                   Функция вывода и замены чисел (четных 3 и 5)

const fizzBuzz = number => {
  for( let i = 1; i <= number; i++) {
    if(!(i % 15)) {
      console.log("Ділиться і на 3 і на 5");
    } else if(i % 3 === 0) {
      console.log('Ділиться на 3');
    } else if(i % 5 === 0) {
      console.log('Ділиться на 5');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(46);

const fizzBuzz2 = number => {
  for( let i = 1; i <= number; i++) {
    switch (0) {
      case i % 15: console.log('Ділиться на 3 і 5');
      break
      case i % 3: console.log('Ділиться на 3');
      break
      case i % 5: console.log('Ділиться на 5');
      break
      default: console.log(i);
    }
  }
}

fizzBuzz2(46);

//               Анаграма перевірка рядків на анаграмність
// 1. Виключаємо всі символи через додаткову функцію, створюємо об'єкт
// та підраховуємо знаки

const buildCharObject = str => {
  const charObj = {};
  for (let char of str.replace(/[^\w]/g).toLowerCase()) {
    charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
}

// 2. Основна функція
const anagram = (str1, str2) => {
  const firstCharObject = buildCharObject(str1);

  const secondCharObject = buildCharObject(str2);

  if (Object.keys(firstCharObject).length !== Object.keys(secondCharObject).length) {
    return false;
  }
  // Object.keys - повертає масив ключів об'єкту у суворому порядку
  for(let char in firstCharObject) {
    if (firstCharObject[char] !== secondCharObject[char]) {
      return false;
    }
    return true;
  }
}

console.log(anagram('some', 'omes'));

//                        Пошук голосних букв у строці
const findVowels = str => {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++
    }
  }
  return count;
}

const findVowels2 = str => {
  const matched = str.match(/[aeiouy]/gi);
  return matched ? matched.length : 0;
}

console.log(findVowels('Sombody'), findVowels2('Sombody'));

// Послідовність Фібоначі

function madeFibonacci(n) {
  let fArr = [];
  for (let i = 0; i < n; i++) {
    fArr[i] = (fArr[i-1] + fArr[i-2]) || fArr[i-1] + 1 || 0;
  }
  return fArr[n-1];
}
console.log(madeFibonacci);
console.log(madeFibonacci(10));


function madeFibonacci2(n) {
  const fArr = [0, 1];

  for (let i = 2; i < n; i++) {
    const prevNumber1 = fArr[i-1];
    const prevNumber2 = fArr[i-2];
    fArr.push(prevNumber1 + prevNumber2);
  }
  return fArr[n-1];
}

console.log(madeFibonacci2(10));

// Пеервірка роботи логічних операторів з нелогічними операндами
function chackOr() {
  const obj = {
    a1: "some",
    a0: '',
    b1: 5,
    b0: NaN,
    c1: [],
    co: undefined
  }
  const ttt = obj.a1 || obj.b1 || obj.c1;
  const ttf = obj.a1 || obj.b1 || obj.c0;
  const tft = obj.a1 || obj.b0 || obj.c1;
  const tff = obj.a1 || obj.b0 || obj.c0;
  const fff = obj.a0 || obj.b0 || obj.c0;
  const fft = obj.a0 || obj.b0 || obj.c1;
  const ftt = obj.a0 || obj.b1 || obj.c1;
  const ftf = obj.a0 || obj.b1 || obj.c0;

  return [ttt, ttf, tft, tff, fff, fft, ftt, ftf]
}

console.log(chackOr());

function chackAnd() {
  const obj = {
    a1: "some",
    a0: '',
    b1: 5,
    b0: NaN,
    c1: [],
    co: undefined
  }
  const ttt = obj.a1 && obj.b1 && obj.c1;
  const ttf = obj.a1 && obj.b1 && obj.c0;
  const tft = obj.a1 && obj.b0 && obj.c1;
  const tff = obj.a1 && obj.b0 && obj.c0;
  const fff = obj.a0 && obj.b0 && obj.c0;
  const fft = obj.a0 && obj.b0 && obj.c1;
  const ftt = obj.a0 && obj.b1 && obj.c1;
  const ftf = obj.a0 && obj.b1 && obj.c0;

  return [ttt, ttf, tft, tff, fff, fft, ftt, ftf]
}

console.log(chackAnd());

// Області видимості та посилання на об'єкт

{
  let objA = {color: "blue"}, y = objA, z = 3;
  {
    let objA = 5;
    console.log(objA);
    console.log(y.color);

    y.color = 'red'
    console.log(z);
  }
  console.log(objA.color);
  console.log(y.color);
  console.log(z);
}

let age44 = prompt("Сколько Вам лет?", 18);

if (age44 < 18) {

  function welcome() {
    alert("Привет!");
  }

} else {

  function welcome() {
    alert("Здравствуйте!");
  }
}

welcome();

// Створення нови властивостей глобальних об'єктів через прототип
Array.prototype.doit = function() {
  return "Go";
}

const exp = [];

console.log(exp.doit());

// Втрата контексту , збереження проміжного this

const  оmn  =  {
  name: 'Julie',
  greetBackwards: function() {
    const self = this;
    function  getReverseName ( ) {
      let nameBackwards = '';
      for (let i = self.name.length - 1; i>= 0; i--) {
        nameBackwards += self.name[i];
      }
      return  nameBackwards ;
    }
  return  `${getReverseName( )}  si  eman  ym  , olleH `;
  }
}

console.log(оmn.greetBackwards());


// Прив'язка через  Call

let worker = {
  someMethod() {
    return 1;
  },
  slow(x) {
    console.log("Called with " + x, this);
    return x * this.someMethod();
  }
  // this   посидається на об'єкт в якому викликається метод
};

function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    console.log(this);
    let result = func.call(this, x);
    cache.set(x, result);
    return result;
  };
}
// Здійснюється перепризначення методу з додаванням декоратору кешування данних,
//саме через func задається this ф cachingDecorator в якості worker
worker.slow = cachingDecorator(worker.slow); // декорація: додавання хешування

console.log( worker.slow(2) );
console.log( worker.slow(2) );

// 1 після декорації worker.slow  стає обгорткою для внутр функції return function(x) {...}
// 2 При виконанні worker.slow(x) обгортка отримує 'x' у якості аргумента внутр функії
// та this === worker (об'єкт перед крапкою що передається через ReferenseType.base)
// всередині обгортки якщо результат не кешований, запускаэться оригынальна функція що передана через
//func (worker.slow) з привёязкою до контексту func.call(this, x) початкового об'єкта через this та "x"

//                          Сувора прив'язка через bind

let someInfo = {
  name: "John",
  age: 25,
  getUserInfo() {
    console.log(this.name, this.age);
  }
}

// setTimeout(someInfo.getUserInfo, 1000);
// Втрата контексту this = window / (undefined)

someInfo.getUserInfo = someInfo.getUserInfo.bind(someInfo);
// суть методу функції перезаписана на вконання з суровою прив'язкою

setTimeout(someInfo.getUserInfo, 1000);


//                            Задачі
// 1  Генератор
//створ ф створення генератору sequence(start, step) При виклику вона викликає другу
//ф геренратор котра при кожному виклику робе число на 1 більшим донескінченності. Початкові
//значення та інтервал визначаються при створені геренратору якщо крок не вказаний === 1.
// початкове значення дефолтно 0

let sequence = function(start = 0, step = 1) {
  let i = 0;

  return () => {
    if (step === 1) {
      return start + (i++);
    } else if (step === 0) {
      return start;
    } else {
      if (i === 0) {
        return start + (i++);
      } else {
        return start + (step * i++)
      }
    }
  }
}

let generator = sequence(10, 3);
let generator2 = sequence(7, 1);


console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8

// Створити функцію що рахує кількість раз її виклику

let count = function () {
  let n = 0;
  return function() {
    return n++;
  } ;
}();


console.log(count(), count());