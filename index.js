//write your code here
//decalre a function named stripUpperCase that takes a string argument
const stripUpperCase = (string) => {
    //declare a varibale to hold the value of what needs to be returned and initialize it to empty string
    let result = "";
    //iterate the string with a for loop
    for (let i = 0; i < string.length; i++){
        //check if the letter is lowercase or any special characters
        if (string[i] === string[i].toLowerCase()){
            //if it is, then add that letter to the variable created in step 2.
            result += string[i];
        }
    }
    return result;
}

console.log(stripUpperCase("Hello!"));