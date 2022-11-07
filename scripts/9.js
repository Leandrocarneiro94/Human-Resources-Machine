function preservadorDeZeros (numbers) {
    
    return numbers.filter(function(number){
        return number === 0
    })
}

const numerosParaSalvarZero = [1,4,6,0,3,4,0,5,6,0,1,1]
const numerosSóZero = preservadorDeZeros(numerosParaSalvarZero)
console.log(numerosSóZero)