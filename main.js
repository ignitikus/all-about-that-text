const biggify = function(num) {
  return num += 9000
}

const nasafy = function(num) {
  const arr = [];
  while (num>0){
    arr.push(num)
    num--
  }
  arr.push('Blast off!')
  return arr
}


const reversify = function(str) {
  return str.split('').reverse().join('')
}

const titleify = function(str) {
  let answer = []
  let arr = str.split(' ');
  for(const word of arr){
  answer.push((word.split('')[0].toUpperCase()) + word.split('').slice(1).join('').toLowerCase())
    
  }
  return answer.join(' ')
}

const crazify = function(str) {
  let count = 0;
  let newStr = ''
  for(let i = 0; i<str.length; i++){
    if (str[i]!==' '){
      if(count%2===0){
        newStr += str[i].toLowerCase()
        count++
      }else {
        newStr += str[i].toUpperCase()
        count++
      }
    } else{
      newStr += str[i]
    }
  }
  return newStr
}
