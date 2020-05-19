'use strict'
//                                      Game crown anchored


//  возвращает  случайное  целое  число  в  диапазоне  [т,  п]  (включительно)
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}
//  случайный выбор  одной  из  шести граней  Короны  и  Якоря

function randFace() {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"]
  [rand(0, 5)];
}

//  Начальные  условия
let funds = 50; // начальная сумма денег
let round = 0; // количество туров

while (funds > 1 && funds < 100) {
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
    } while (remaining > 0) // условие цыкла, пока дентги не закончатся
  }

  funds = funds - totalBet; // подсчет остатка после раунда
  console.log('\tbets: ' + Object.keys(bets).map(face => `${face} : ${bets[face]} pence`).join(', ') +
    `(total: ${totalBet} pence)`);

  // Этап 2: Бросок  костей
  const hand = [];
  for (let roll = 0; roll < 3; roll++) {
    hand.push(randFace());
    console.log(`\thand: ${hand.join(', ')}`);

    // Этап 3: Получение выиграша
    let winnings = 0;
    for (let die = 0; die < hand.length; die++) {
      let face = hand[die];
      if (bets[face] > 0) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    console.log(`\twinnings:  ${winnings}`);
  }

  console.log(`\tending funds: ${funds}`);
}


//---------------------------------------------
// Фільтрація масиву на унікальні значення
const arr = ["Гривна", "Рубыль", "Dollar", "Euro", "Funt", "Dollar"];

const strExmpl = "Some text";

let uniqueValues = arr.filter((value, index, self) => {
  return self.indexOf(value) === index;
})
console.log("Test on unic values 1", uniqueValues);
// Основано на алгоритмі робот функції indexOf, котра шукає індек значення з початку масиву,
// в наслідок чого всі дублікати після першого співпадіння відсіюються
//___________________________________________________________________________________

let uniqueValues2 = [...new Set(arr)];
console.log("Test on unic values 2", uniqueValues2);

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

//               Обчислення дисперсії
const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];

const stats = data.reduce((a, x) => {
  a.N++;
  let delta = x - a.mean;
  a.mean += delta / a.N;
  a.M2 += delta * (x - a.mean);
  return a;
}, { N: 0, mean: 0, M2: 0 });

if (stats.N > 2) {
  stats.variance = stats.M2 / (stats.N - 1);
  stats.stdev = Math.sqrt(stats.variance);
}


console.log(stats);

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
  console.log('Роота оператору кома:', x, y, z);
}
// оператори rest spread

function useSpread(a, b, c, d) {
  console.log(a, b, c, d, arguments);
}

useSpread(...data);

let [...el] = document.querySelectorAll('div')
console.log(el);



// Проверка слова на паллиндром

const palindrome = str => {
  str = str.toLowercase();
  return str === str.split('').reverse().join();
}

//             Функция вывода и замены чисел (четных 3 и 5)

const fizzBuzz = number => {
  for (let i = 1; i <= number; i++) {
    if (!(i % 15)) {
      console.log("Ділиться і на 3 і на 5");
    } else if (i % 3 === 0) {
      console.log('Ділиться на 3');
    } else if (i % 5 === 0) {
      console.log('Ділиться на 5');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(23);

const fizzBuzz2 = number => {
  for (let i = 1; i <= number; i++) {
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

fizzBuzz2(23);

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
  for (let char in firstCharObject) {
    if (firstCharObject[char] !== secondCharObject[char]) {
      return false;
    }
    return true;
  }
}

console.log('Перевірка на анаграму:', anagram('some', 'omes'));

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
    fArr[i] = (fArr[i - 1] + fArr[i - 2]) || fArr[i - 1] + 1 || 0;
  }
  return fArr[n - 1];
}
console.log('Десятий знак послідосності Фібоначі через ф1:', madeFibonacci(10));


function madeFibonacci2(n) {
  const fArr = [0, 1];

  for (let i = 2; i < n; i++) {
    const prevNumber1 = fArr[i - 1];
    const prevNumber2 = fArr[i - 2];
    fArr.push(prevNumber1 + prevNumber2);
  }
  return fArr[n - 1];
}

console.log('Десятий знак послідосності Фібоначі через ф2:', madeFibonacci2(10));

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
  let objA = { color: "blue" }, y = objA, z = 3;
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

// блочна область видимості
let age44 = prompt("Сколько Вам лет?", 18);

if (age44 < 18) {

  (function welcome() {
    console.log("Привет!");
  })();

} else {

  (function welcome() {
    console.log("Здравствуйте!");
  })();
}

//!! welcome(); =>// не спрацює оскільки функція оголошена у блоці з if

//* Замикання з присвоєною властивістю функції, доступ у замикання
function makeCounter() {
  function counter() {
    return counter.count++;
  }
  counter.count = 1;
  return counter;
}

const counter1 = makeCounter();
console.log(counter1(), counter1(), counter1(), counter1());

counter1.count = 2;

console.log(counter1(), counter1(), counter1(), counter1());

//     Задача на замикання поліфіл на bind
function personInfo() {
  console.log(this.name, this.age);
}

const person1 = {
  name: "John",
  age: 25
};

const person2 = {
  name: "Eugene",
  age: 33
};

function bindAnalog(thisArg, callback) {
  const propName = `${callback.name}`;
  console.log(propName);
  Object.defineProperty(thisArg, propName, {
    value: callback,
    writable: true
  });
  console.log(thisArg);
  thisArg[propName]();
  //!! if(thisArg[propName]) {
  //!!    delete thisArg[`${propName}`];
  //!! } - виводить помилку що неможливо видалити значення з об'єкту
};

bindAnalog(person1, personInfo);

// Варіант 2 з apply
function bind1(func, context) {

  return function (...args) {
    return func.apply(
      context,
      args
    );
  }
}

const a = function () {
  return this;
}
const b = bind1(a, { foo: 'var' });
const c = bind1(b, null);
const d = bind1(c, { g: '1' });
console.log(c())

// задача
//* var add = function(a,b) { return a+b;}
//* var add2 = bindFunc(add, 2);
//* add2(6)  => outputs 8
//* add2(10) => outputs 12
// через замикання
const add = function (a, b) {
  return a + b;
};

function bindFunc(callback, arg1) {
  return function (arg2) {
    return callback(arg1, arg2);
  }
}

const add2 = bindFunc(add, 2);

console.log(add2(10));

//через apply & karryng
const bindFuncApply = (callback, ...params) => {
  return callback.bind(null, ...params);
}

const add5 = bindFuncApply(add, 5);

console.log(add5(10));

// Перевірка коду статті
function bind3(callcback, context) {
  return function () {
    return callcback.apply(context, arguments);
  }
}

function test1() {
  console.log(this);
}

const g = bind3(test1, 'Context');
g();
// Створення нових властивостей глобальних об'єктів через прототип
Array.prototype.doit = function () {
  return "Go";
}

const exp = [];

console.log(exp.doit());

// Втрата контексту , збереження проміжного this

const оmn = {
  name: 'Julie',
  greetBackwards: function () {
    const self = this;
    function getReverseName() {
      let nameBackwards = '';
      for (let i = self.name.length - 1; i >= 0; i--) {
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()}  si  eman  ym  , olleH `;
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
  return function (x) {
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

console.log(worker.slow(2));
console.log(worker.slow(2));

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
    console.warn("Відтерміновані дії")
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
//ф геренратор котра при кожному виклику робе число на 1 більшим до нескінченності. Початкові
//значення та інтервал визначаються при створені геренратору якщо крок не вказаний === 1.
// початкове значення дефолтно 0

let sequence = function (start = 0, step = 1) {
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
  return function () {
    return n++;
  };
}();

console.log(count(), count());


// Області видимості та Hoisting
const x = 3;

function f() {
  console.log(x);
  console.log(y);
  return [x, y];
}
//* Функція f підіймається в початок своєї області видимості перед
//* виконанням коду

const y = 5;
console.log(f());


function hoist() {
  // **abatractVariable = 20;
  var betaVariable = 100;
}

hoist();

// ** console.log(abatractVariable);  не спрацює через use strict в ES5 було доступним
/*
Доступ как к глобальной переменной вне функции hoist()
Выводит: 20
*/
// console.log(betaVariable);

let array1a = ['a', 'b', 'c', 'd', 'e'];
console.log(array1a.copyWithin(1, 3))

//       Прототипне спадкування та властивості-акцессори
let userA1 = {
  name: "John",

  set fullName(value) {
    this.name = value;
  },

  get fullName() {
    return this.name;
  }
};

let admin = {
  __proto__: userA1,
  isAdmin: true
};

console.log(admin.fullName); // John

// срабатывает сеттер!
admin.fullName = "Alice Cooper"; // (**)
console.log(admin.name); // Alice
console.log(userA1.name);


// ___________________________Міксини в JS
/**
 * Vehicle -  клас ранспортного засобу (клас вищого порядку)
 */
class Vehicle {
  constructor() {
    this.passengers = [];
    console.log("Транспорт создан");
  }
  addPassengers(p) {
    this.passengers.push(p);
  }
}
/**
 * Car- клас простого авто
 */
class Car extends Vehicle {
  constructor(model, color) {
    super();
    this.model = model;
    this.color = color;
    console.log("Автомобиль создан");
  }
}
console.log("Прототип та __proto__ класу", Car.prototype, Car.__proto__);

/**
 * InsurancePolicy- клас що описує тип страхування
 */
class InsurancePolicy {
  constructor(serial, type) {
    this.serial = serial;
    this.type = type;
  }
}

/**
 * функція міксин, що додає методи до прототипу класу -> в клас вищого порядку
 * @param {*} prototypeOfClass
 */
function mixinCarInsurence(prototypeOfClass) {

  prototypeOfClass.addInsuransePolicy = function (policy) { this.insurancePolicy = policy; }

  prototypeOfClass.getInsuransePolicy = function () { return this.insurancePolicy; }

  prototypeOfClass.isInsured = function () {
    return !!this.insurancePolicy;
  }
}

/**
 * застосування міксину
 */
mixinCarInsurence(Car.prototype);
/**
 * створення екземпляру класу з модифікованим прототипом
 */
const car1 = new Car("Tesla", "white");
console.log("Прототип та __proto__ об'єкту екз класу", car1.prototype, car1.__proto__);
/**
 * виклик додаткового методу з прототипу
 */
car1.addInsuransePolicy(new InsurancePolicy(1001, "simple"));

console.log(Object.keys(car1), car1);

//                       Map and Set
const
  u1 = { name: "Chrysta" },
  u2 = { name: "Jacob" },
  u3 = { name: "Olivia" },
  u4 = { name: "James" }

const userRolesCrastion1 = new Map([
  [u1, "junior"],
  [u2, "midle"],
  [u3, "midle+"]
]);

console.log(userRolesCrastion1);
//створення відображення та його методи
const userRoles = new Map();
userRoles
  .set(u1, "jedai")
  .set(u2, "Yoda")
  .set(u3, "kid")
  .set(u4, "Fits")

console.log(userRoles);

let user1Role = userRoles.get(u1);
console.log(user1Role);
let user4FirstRole = userRolesCrastion1.get(u4);
console.log("User - 4 First Role is:", user4FirstRole);

userRoles.delete(u2);
console.log(userRoles);
console.log(userRoles.keys());
console.log(userRoles.values());
console.log(userRoles.entries());

// специфічне використання .forEach для вдображень
userRoles.forEach((value, key, map) => {
  console.log({
    value: value,
    key: key,
    map: map
  })
})

let entries = Object.entries(car1);
console.log(entries);

const derivativeMap = new Map(entries);

console.log(derivativeMap);

// Створення об'єкту на основі відображення
const objFromMap = Object.fromEntries(derivativeMap);
console.log(objFromMap);


//      Set
const setExample = new Set();

setExample.add("A");
setExample.add("B");
setExample.add("C");
setExample.add("D");

console.log(setExample);
console.log(setExample.keys());
console.log(setExample.values());
console.log(setExample.entries());

//WeakMap

let userArr = [
  { n: "John" },
  { n: "Olga" },
  { n: "Serge" }
]

const weakMapEx1 = new WeakMap();
// const weakMapEx2 = new WeakMap();

userArr.forEach((el, index) => {
  weakMapEx1.set(el, (index + 1));
})
//**Якщо залишити перебір forEach як є то до відображення в консолі покаже об'єкти не послідовно */

// for(let i = 0; i < userArr.length; i++) {
//   weakMapEx2.set(userArr[i], (i + 1));
// }
console.log(weakMapEx1);
// console.log(weakMapEx2);
let deleted;
setTimeout(() => {
  deleted = userArr.splice(0, 1);
  console.log(deleted, userArr);
  console.log(weakMapEx1, weakMapEx1.has(deleted[0]), weakMapEx1.has(userArr[1]));
}, 3000)

// Доцільність використання не зрозуміла, як перевірити наявність об'єкту в weakMap через
// метод .has() якщо на нього не повинно залишатись посилань


//-------------------------Exeption handling(Обробка помилок та виключення)---------------------------------------

let serverResponse = { "age": 30 };
try {
  let user = JSON.parse(serverResponse);
  if (!user.age) {
    throw new SyntaxError('В отриманних данних ве вказано вік!');
  }
  console.log(user.age);
} catch (e) {
  console.error(`Отакої ${e.name} ${e.message} ${e.fileName} `);
}

function errorStateA() {
  console.log("a calls b");
  errorStateB();
  console.log("a: finished");
}

function errorStateB() {
  console.log("b calls c");
  errorStateC();
  console.log("b: finished");
}

function errorStateC() {
  console.log("c: error generator");
  throw new Error("Error in c function")
  console.log("c: finished");
}

function errorStateD() {
  console.log("d calls c");
  errorStateC();
  console.log("d: finished");
}

try {
  errorStateA();
} catch (err) {
  console.log(err.stack)
}

try {
  errorStateD();
} catch (err) {
  console.log(err.stack)
}


// * try - catch - finally
try {
  console.log("Start try - catch - finally");
  throw new Error("Error emited");
  //неактивний код
} catch (err) {
  console.log("обробка помилки");
} finally {
  console.log("Finally block for unsubscribing");
}

//------------------------Object.assign(obj1, obj2, obj3)
const obj991 = {
  name: "John",
  age: 28
}

const obj991Role = {
  post: "M",
  role: "midle"
}

const obj991t = Object.assign({}, obj991);

obj991t.name = "Mary";

const objresult = Object.assign(obj991t, obj991Role);

console.log(obj991t, obj991, objresult)

let [Aaa, Bbb, Ccc] = "ghj"

console.log(Aaa, Bbb, Ccc);

[objresult.name, objresult.age] = ["Elice", 40];
console.log(objresult);

const objSpesial = {
  feature: "Main",
  publisher: true
}
let id = 123;
const employee = { ...objresult, ...objSpesial, id };

console.log(employee);

//Object creation with prototipe using pseudo constructor function
function CreateObjWithPrototipe(name, func) {
  this.name = name;
  this.func = func;
}

CreateObjWithPrototipe.prototype.doSmth = function () { console.log(this.name, this.func) };

const testObjCreation = new CreateObjWithPrototipe("John", "I`m working");
testObjCreation.doSmth();

// Object creation with inheritance

class SuperObj {
  constructor() {
    this.id = Math.round(Math.random() * 10);
  }

  doSmth() {
    console.log(this.name, this.func, this.id);
  }
};

class CreateObjWithInheritancePrototipe extends SuperObj {
  constructor(name, func) {
    super();
    this.name = name;
    this.func = func;
  }
}

const testObjCreation2 = new CreateObjWithInheritancePrototipe("Olivia", "Good day");
testObjCreation2.doSmth();

//---------------------Array creation method
const expArr = Array(5); // - створення пустого масиву довжиною в 5 значень
console.log(expArr);
expArr.fill(0); // -заповнення значеннями
console.log(expArr);

// Local time
const today = new Date();
const milliseconds = today.getUTCMilliseconds();
const millisecondsUTC = today.getTime() + today.getTimezoneOffset() * 60000;
console.log(milliseconds, millisecondsUTC);



//             Iterators and generators
/**
 * Колекція для обробки ітератором
 */
const book = [
  'Twinkle, twinkle, little bat!',
  'How I wonder what you`re at!',
  'Up above the world you fly,',
  'Like а tea tray in the sky.',
  'Twinkle, twinkle, little bat!',
  'How I wonder what you`re at!'
];

/**
 * створення двох окремих зразків ітераторів для відокремленних викликів
 */
const it1 = book.values();
const it2 = book.values();
/**
 * присвоєння рузільтату виклику ітератора до змінної
 */
let current = it1.next();
let bookmark = it2.next();
/**
 * перебір колекції з виводом результату роботи першого ітератора
 */
for (let i = 0; i <= book.length; i++) {
  console.log(current = it1.next());
}

/**
 * використання іншого циклу перебору колекції для отримання лище ключових значень через ітератор
 */
for (const value of it2) {
  console.log(value);
}
/**
 * аналог перебору через while
 */
while (!bookmark.done) {
  console.log(bookmark.value);
  bookmark = it2.next();
}

/**
 * використання протоколу ітератора для екземплярів класу
 * перший - створенно метод ітерації в переадресвцією ітератора внутрішньої колекції
 * другий - з повноцінним методом рукописного ітератору
 */
class Log {
  constructor() {
    this.messages = [];
  }
  add(message) {
    this.messages.unshift({ message, timeStamp: Date.now() });
  }

  [Symbol.iterator]() {
    return this.messages.values();
  }
}

class Log1 {
  constructor() {
    this.messages = [];
  }
  add(message) {
    this.messages.unshift({ message, timeStamp: Date.now() });
  }

  [Symbol.iterator]() {
    let i = 0;
    const messsages = this.messages;
    return {
      next() {
        if (i >= messsages.length) return { value: undefined, done: true };
        return { value: messadges[i++], done: false };
      }
    };
  }
}

/**
 * перевірка функціоналу першого класу по протоколу ітератора
 */
const log = new Log();
log.add('One');
log.add('Two');
log.add('Three');
log.add('Four');

for (let entry of log) {
  console.log(`${entry.message} @ ${entry.timeStamp}`);
}
/**
 * клас для створення послідовності Фібоначі
 */
// !!Обережно клас генерує нескінчену кількість чисел фібоначі
class FibonacciSequence {
  [Symbol.iterator]() {
    let a = 0, b = 1;
    return {
      next() {
        let rval = { value: b, done: false };
        b += a;
        a = rval.value;
        return rval;
      }
    };
  }
}

//Продвинута генерація послідовності Фібонічі
let fib = new FibonacciSequence();
let cycles = 0;
for (let n of fib) {
  console.log(n);
  if (++cycles > 10) break;
}

//                     Генератори

/**
 * стандартний синтаксис функції генератору
 */
function* colors() {
  yield 'red';
  yield 'orange';
  yield 'yellow';
  yield 'green';
  yield 'blue';
  yield 'violet';
  return 'Finish'
}

/**
 * генерація ітератора з генератору
 */
const it3 = colors();

/**
 * методи перебору ітератору
 */

// for (let i = 1; i <= 7; i++) {
//   console.log(it3.next());
// }

for (let color of colors()) {
  console.log(color);
}

//Двосторонній звязок генератору з простором виклику через механізм роботи yield

//Послідовність викликів з пердачою значення на проміжному єтапі
function* interrogate() {
  const name = yield 'Your name?';
  const color = yield 'Your favorite color?';
  console.log(`${name}, your color is ${color}.`);
  return `${name}, your color is ${color}.`;
}

const it4 = interrogate();

console.log(it4.next());
console.log(it4.next('John'));
console.log(it4.next('Green'));