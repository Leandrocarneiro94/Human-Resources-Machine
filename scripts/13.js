function equalizer (numbers) {
    const resultado = []
    let counter = 0

    while (counter <= numbers.length - 1){
        if (numbers[counter] === numbers[counter+1]){
            resultado.push(numbers[counter])
        }
        counter = counter + 2
    }
    
    return resultado
}

const aSerEqualized = [7,5,4,4,-7,-5,5,5]
const equalized = equalizer(aSerEqualized)
console.log(equalized)
