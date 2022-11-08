function maximizer (numbers) {
    const resultado = []
    let counter = 0

    while (counter <= numbers.length - 1){
        if (numbers[counter] > numbers[counter+1]){
            resultado.push(numbers[counter])
        } else {resultado.push(numbers[counter+1])

        }
        counter = counter + 2
    }
    
    return resultado

}

const aSerMaximized = [7,5,4,4,-7,-5,5,5]
const maximized = maximizer(aSerMaximized)
console.log(maximized)