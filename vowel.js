const sentense = 'My name is Md Ashraful Islam';

const vowel = 'aeiouAEIOU'
const result = [];

for (let str of sentense) {
  if( vowel.includes(str)){
    result.push(str.toLowerCase());
  }else{
    result.push(str.toUpperCase());
  }
}
console.log(result.join(''));