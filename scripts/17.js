function exclusiver (numbers) {
    const resultado = []
    let counter = 0

    while (counter <= numbers.length - 1){
        if ((numbers[counter] > 0 && numbers[counter+1] > 0)
        || (numbers[counter] < 0 && numbers[counter+1] < 0)){
            resultado.push(0)
        } else {
            resultado.push(1)
        }
        counter = counter + 2
    }

    return resultado

}

const aSerExclusiver = [7,-2,4,-3,-7,-5,5,5]
const exclusived = exclusiver(aSerExclusiver)
console.log(exclusived)