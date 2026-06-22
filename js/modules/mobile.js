'use strict'

function fn_greeting(){
     let count = Number(2);
     const strGreeting = "Greeting!";
     while(count > Number(0)){
        console.log(`${strGreeting}`);
        console.log("\n");
        count--;
     }
}

export {fn_greeting};