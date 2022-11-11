function regressiva (number) {
    let counter = number
    
    while (counter !== 0){
        
            console.log (counter)
            if (number > 0){
              
                counter --  
            } else { 
                counter ++
            }
    
    }
    
}

const numerosParaRegredir = [10,-13,5,0]
numerosParaRegredir.forEach(regressiva)
