function octuplicador (numbers) {
    return numbers.map(function(number){
        return number*8
    })
}
const numerosParaOctuplicar = [3,-5,1,0,10]
const numerosOctuplicados = octuplicador(numerosParaOctuplicar)
console.log(numerosOctuplicados)