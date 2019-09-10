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
