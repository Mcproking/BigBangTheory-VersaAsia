import * as fs from "node:fs";

function novaExplosion(primeStar:number):string{
    let divideBy3:boolean = primeStar % 3 === 0;
    let divideBy5:boolean = primeStar % 5 === 0;

    if(!divideBy3 && !divideBy5){ return primeStar.toString()}
    if(!divideBy3 && divideBy5){return "BANG"}
    if(divideBy3 && !divideBy5){return "BIG"}
    if(divideBy3 && divideBy5){return "BIGBANG"}
    return "IMPOSSIBLE SPACE?";
}

const blackHole:string[] = [];

for (let i = 1; i <=100; i++) {
    blackHole.push(novaExplosion(i));
}

console.log(blackHole);

fs.writeFile("output.json", JSON.stringify(blackHole),(err) =>{ if(err) throw err;})