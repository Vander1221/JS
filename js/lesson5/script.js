// Операторы. "Унарный, бинарный, опернад"

// Операнд - это то к чему применяется оператор, их еще называют аргументами.

// let userAge = 30 - 6; // числа 30 и 6 - это операнды

// let userHeight = h - yield; // переменные h и y - это операнды

// // бинарными операторами называются операторы которые применяются к двум операндам. В нашем примере вычитание -, это бинарный оператор
// let userAge = 30 - 6;

// // унарным считается оператор, кторой применен только к одному операнду, например:
// let userCash = -800;



// let resultTro = "Фрилансер" + 58;
// console.log(resultTro);
// console.log(typeof resultTro);


// let result = "2" + 2;
// console.log(result);
// console.log(typeof result);



// let resultOne = "25" - 5;
// console.log(resultOne);
// console.log(typeof resultOne);


// let resultTwo = 10 * "80";
// console.log(resultTwo);
// console.log(typeof resultTwo);

// унарный оператор сложения +

// со строками

// let resultOne = +"25";
// console.log(resultOne);
// console.log(typeof resultOne);

// // с числами
// let resultTwo = +10;
// console.log(resultTwo);
// console.log(typeof resultTwo);


// let users = "25";
// let admins = "10";
// let info = users + admins;
// console.log(info);
// console.log(typeof info);

// let info_1 = (+users + +admins);
// console.log(+users + +admins);
// console.log(typeof info_1);


// // более длинная запись
// console.log(Number(users) + Number(admins));



// оператор присвоения

// let a = 1 + 2;
// let b = 2;

// let result = 8 - (a = b + 3);
// console.log(result);
//не рекомендуется изза низкой читабельности кода

// присвоение по цепочке
// let resultOne = resultTwo = resultTrhee = 1 + 2;
// console.log(resultOne);
// console.log(resultTwo);
// console.log(resultTrhee);



// let users = 5; // users = 5
// users = users + 3; // users = 5 + 3
// users = users * 2; // users = (5 + 3) * 2 
// console.log(users); // users = 16


// Инкремент/декремент

// Инкремент ++
// let addUser = 2;
// addUser++; // addUser + 1
// console.log(addUser); // addUser = 3


//Декремент --
// let removeUser = 2;
// removeUser--; // removeUser - 1
// console.log(removeUser); // removeUser = 1



// постфиксная форма
// let userCounter = 0;
// let newUsers = usersCounter++;
// console.log(newUsers); // newUsers = 0

// префиксная форма
// let userCounter = 0;
// let newUsers = ++userCounter;
// console.log(newUsers); // newUsers = 1



// побитовые операторы

/*
And (и) ( & )
OR(или) ( | )
XOR(побитовое исключающее или) ( ^ )
NOT(не) ( ~ )
LEFT SHIFT(левый сдвиг) ( << )
RIGHT SHIFT(правый сдвиг) ( >> )
ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )
*/


// операторы сравнения
// сравнение разных типов
// пробразование в число
// console.log('58' > 10);
// console.log('007' == 7);
// логическое значение true
//становится 1, а false - 0
// console.log(true == 1);
// console.log(false == 0);



// let itemA = 0;
// let itemB = "0";
// console.log(Boolean(itemA));
// console.log(Boolean(itemB));

// console.log(itemA == itemB);


// console.log(0 === false);
// console.log('007' === 7);
// console.log('58' !== 58);


//сравнение с null и undefiend
// строгое равенство
// console.log(null === undefined); // false

//не строгое равенство
// console.log(null == undefined); // true


//сравнение c null и undefiend
// сравнение null и 0
// console.log(null > 0); // false
// console.log(null == 0);// false
// console.log(null >= 0);// true


// булевые значения
// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);


// console.log(1 || 0);
// console.log(true || 'Фрилансер');
// console.log(null || 58);
// console.log(null || 'Фрилансер' || 0);
// console.log(undefined || '' || null || 0);



// let userName = '';
// let userNickName = 'фрилансер';
// let user = userName || userNickName || "Без имени";
// console.log(user);



// let admins = 10;
// let users = 5;
// admins > users || users ++;
// console.log(users);


// Амперсанд

// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);



// console.log('Фрилансер' && 0 && 2 && 3);
// console.log(1 && 2 && null && 3);
// console.log('15' && '42');


// приоритет && больше чем ||
// console.log(1 && 0 || 2 && 1);


// подобие условия
// let users = 0;
// (users > 0) && console.log(`Пользователей ${users}`);


// console.log(!true); // ! = НЕ
// выведет false


// разные типы
// console.log(!null);
// console.log(!1);
// console.log(!'');
// console.log(!'Фрилансер');


// оператор ! является наивысшим из всех логических операторов
// console.log(!true && 58 || 18 && !1);


// оператор обьединения с null (??)

// let name = "фрилансер";
// console.log(name ?? "без имени");

