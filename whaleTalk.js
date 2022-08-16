const input = "I have no ideauu what to write here";

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArr = [];

for(let i=0; i<input.length; i++){
    //console.log(i);
    for(let j=0; j<vowels.length; j++){
        //console.log(j);
        if(input[i] === vowels[j]){
            
        }
    }

    if(input[i] === 'e'){
        resultArr.push(input[i]);
    }
    if(input[i] === 'u'){
        resultArr.push(input[i]);
    }
}
console.log(resultArr.join('').toUpperCase());
