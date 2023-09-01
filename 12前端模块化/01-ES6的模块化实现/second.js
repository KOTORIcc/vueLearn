import {name,sum} from './Frist.js'

console.log(name);
console.log(sum(10, 20));

export function secondfunc(a,b){
    return a+b+'second'
}
export class Person{
    run(){
        console.log('a person is running');
    }
}
