// write a function that takes the input string and reverses it
function reverseThisString(string){
    return string.split("").reverse().join("");
    // the way this works is it splits the string in to chars sets up a array flips it then joins it
}



// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {
    let test = ""
    for(let i = 0; i<string.length; i++){
        if(string[i] === string[i].toLowerCase()){
            test += string[i].toUpperCase();
        }else {
            test += string[i].toLowerCase();
        }
    }
    return test;
}

//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array){
    return array.map(x => ((x-32) * (5/9)))
    // .toPrecision(3) you could also add toprecision to keep two decimals places
}

//write a function that takes an input array an returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array){
    
    return array.map( m => {
        if(m < 75)
         return "false"
        else
         return "true"
    })
}

//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    
    let final = cardinalNumbers.map(x => x.toString());
   
    final = final.map(x =>  x + ' is ')
    
    for(let i = 0; i < germanNumbers.length; i++)
    {
        final[i] = final[i] + germanNumbers[i];
    }

    return final

}


// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; 
   
    primenum = numbers.filter(num => {
        for (let i = 2; num > i; i++) {
            if (num % i === 0) {
              return false;
            }
          }
          return num > 1;
        }
          )
          return primenum
    }

   
console.log(returnPrimeNumbers())


//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:
function checkifmulti3and5(int){
    if(int % 3 === 0 && int % 5 === 0 )
    {return true}
    return false
    
}

function multiplesfunc(){
  for(let i = 1; i <= 100; i++)
  {
    if(checkifmulti3and5(i) === true)
    {
        console.log("CSC225 RULES I LOVE JAVASCRIPT")
    }
    else if(i % 3 === 0 )
    {
        console.log("CSC225 RULES")
    }
    else if(i % 5 === 0 )
    {
        console.log("I LOVE JAVASCRIPT")
    }
    else
    {console.log(i)}
}
  
};
