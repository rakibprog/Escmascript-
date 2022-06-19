//arrow function 
const add = (num1,num2) => num1+num2;
const totalNumber = add(10,15);
console.log(totalNumber);

// one parameter
const getName = () => "rakib Hossain";
const name = getName();
console.log(name);

// big arrow function

const doMath = (x,y) => {
    multi = x * y;
    multiAdd = multi + 50;
    return multiAdd;
}

const totalMath = doMath(5,2);
console.log(totalMath);