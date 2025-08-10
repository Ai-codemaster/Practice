let x = 'Heisenberg'

let a = 0
for (let e of x){
    if (e.toLowerCase() === 'e'){
        a++;
    }
}

console.log(a + 1);