function fahrenheitCnvrt(){
    const celsius = +prompt("enter celsius")
    const fahrenheit = celsius*(9/5)+32
    return fahrenheit
}

console.log(fahrenheitCnvrt())