function exterminadorDeZeros (numbers) {
    // const numeroSemZero = []
    
    // while (counter <= numbers.length - 1){
    //     if(numbers[counter] !== 0) {
    //         numeroSemZero.push(numbers[counter])
    //     }
    //     counter++
    // }

    // numbers.forEach(function(number){
    //         if(number !== 0) {
    //         numeroSemZero.push(number)
    //     }
    // })
        
        return numbers.filter(function(number){
            return number !== 0
        })
}
// console.log(exterminadorDeZeros([1,6,3,8,3,0,7,0,4,3,2,0]))
    

const numerosParaTirarZero = [1,6,3,8,3,0,7,0,4,3,2,0]
const numeroSemZero = exterminadorDeZeros(numerosParaTirarZero)
console.log(numeroSemZero)