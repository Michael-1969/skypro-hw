'use strict';

function fibonacci()
{
    const fibonacci = [1, 1, 2, 3, 5, 8];
    const multipleByTwoFib = fibonacci.map((number) => number * 2);
    const plusTenFib = fibonacci.map((number) => number + 10);
    const onlyBigFib = fibonacci.filter((number) => number > 3);

    console.log(multipleByTwoFib); // [2, 2, 4, 6, 10, 16]
    console.log(plusTenFib); // [11, 11, 12, 13, 15, 18]
    console.log(onlyBigFib); // [5, 8]
}

function arr_task_1(){

}

export {arr_task_1};