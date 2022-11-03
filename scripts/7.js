function exterminadorDeZeros (numbers) {
    const numeroSemZero = []
    let counter = 0
    while (counter <= numbers.length - 1){
        if(numbers[counter] !== 0) {
            numeroSemZero.push(numbers[counter])
        }
        counter++
    }
    return numeroSemZero
}
console.log(exterminadorDeZeros([1,6,3,8,3,0,7,0,4,3,2,0]))
    