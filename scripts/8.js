function triplicador (numbers) {
    
    // const numerosTriplicados = []
    // numbers.forEach(function(number){
    // 
    //     numerosTriplicados.push(number*3)
    // });

           return numbers.map(function(number){
            return number*3
        })
}   

// cria variavel com numeros a serem multiplicados
const numerosParaTriplicar = [3,-5,1,0,10]

// cria variavel com numeros multiplicados pelo triplicador
const numerosTriplicados = triplicador(numerosParaTriplicar)

// mostra numeros triplicados no console
console.log(numerosTriplicados)