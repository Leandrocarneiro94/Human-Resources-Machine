function triplicador (numbers) {
    // cria um novo array
    // const numerosTriplicados = []
    
    // mapeia array
    // numbers.forEach(function(number){
    //     // multiplica por 3
    //     numerosTriplicados.push(number*3)
    // });

    // retorna numeros multiplicados
        return numbers.map(function(number){
            return number*3
        })
}   

// cria variavel com numeros a serem multiplicados
const numerosParaTRiplicar = [3,-5,1,0,10]

// cria variavel com numeros multiplicados pelo triplicador
const numerosTriplicados = triplicador(numerosParaTRiplicar)

// mostra numeros triplicados no console
console.log(numerosTriplicados)