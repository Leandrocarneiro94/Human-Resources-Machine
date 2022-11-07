function subProcedure (numbers) {
    const resultado = []
    let counter = 0
    while (counter <= numbers.length - 1){
        resultado.push(numbers[counter +1] - numbers[counter])
        resultado.push(numbers[counter] - numbers[counter +1])
        counter = counter + 2
    }
    return resultado
}

const numerosParaSubProcedure = [4,9,6,4,-8,-8,4,-1]
const subProcedurado = subProcedure(numerosParaSubProcedure)
console.log(subProcedurado)
