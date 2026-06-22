
'use strict';

// 1. task
let value = 10;
alert("Записал число " + value);
value = 20;
alert("Перезаписал новое число " + value);

//2. task
let author = "Брендан Айк";
alert("Name = " + author);

//3. task
let a = 10;
let b = 2;

alert("Сумма = " + (a + b));
alert("Разность = " + (a - b));
alert("Произведение = " + (a * b));
if(b != Number(0))  
    alert("Частное = " + (a / b));


//4. task
function pow(base, exp) {
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

alert("Два в пятой степени = " + pow(2, 5));

//5. task
let aa = 9;
let bb = 2;
alert("Остаток от деления 9 на 2 = " + aa % bb);

//6. task
let num = 1;
num += 5;
alert(`num +=5 равно ${num}`);
 num -= 3;
 alert(`num -=3 равно ${num}`);
 num *= 7;
alert(`num *=7 равно ${num}`);
num /= 3;
alert(`num /=3 равно ${num}`);
 num += 1;
 alert(`num +=1 равно ${num}`);
 num -=1;
alert(`num -=1 равно ${num}`);

//7. task
const age = prompt('Сколько Вам лет: ');
alert(`Мне  ${age}  лет`);


//8. task

const Person = {
  name: "Michael",
  age: 56,
  isAdmin: false,
};

function dataPerson(str_name, n_age, b_prof) {
  this.name = str_name;
  this.age = n_age;
  this.isAdmin = b_prof;
}

const myData = new dataPerson(String('Michael'), Number(56), Boolean(false));
alert(`My name ${myData.name}, I am ${myData.age} years old,  I'm ${myData.isAdmin} an admin.`)

//9. task
const name = prompt('Как Вас зовут: ');
alert(`Привет  ${name}!`);