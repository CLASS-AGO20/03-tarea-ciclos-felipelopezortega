export default class App {

    sumatoriaSerieUno(numero){

        let suma = 1

        for(let i=2; i<=numero ; i = i + 1){

            suma = suma + 1/i
        }
         return suma

    }

    sumatoriaSerieDos(numero){

        let i=2
        let suma=1
    
        while(i<=numero){

            if(i%2!==0){

                suma = suma -1/i
            }else{

                suma = suma + 1/i
            }
            
            i++
        }
         
        return suma

    }
    
    esPrimo(numero){
       
        let i=1
        let contador=0

        do{
            if(numero%i==0){

                contador++

            }else{
                
                
            }

            i++
            
        }while(i<=numero);

        if(contador>2){

            return false

        }else{

            return true
        }
    }

    obtenerMultiplos(inicio, fin){

        let multres=""
        let i=inicio
        do{

            if(i%3==0){

                multres = multres + String(i)

            }else{


            }

            i++

        }while(i<=fin);

        return multres
    }

    obtenerImpares(numero1, numero2){

        
        if(numero1>numero2){

            let newNumero1 = numero1
            numero1 = numero2
            numero2 = newNumero1

        }else{
        
        }

        let i = numero1

        let impares = ""
        do{

            if(i%2!==0){

                impares = String(i) +  "," + impares 
            }else{

            }

            i++

        }while(i<=numero2);

        
        return impares
    }







}

let app = new App();

//Función que reciba como parámetro un número y calcule la suma de la siguiente serie: 1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/numero
console.log(app.sumatoriaSerieUno(6))

//Función dos
console.log(app.sumatoriaSerieDos(7))

//Función número primo
console.log(app.esPrimo(88))
console.log(app.esPrimo(87))
console.log(app.esPrimo(77))
console.log(app.esPrimo(7))
console.log(app.esPrimo(1))
console.log(app.esPrimo(2))
console.log(app.esPrimo(3))

//Función números dividos entre 3
console.log(app.obtenerMultiplos(10,25))

//Función regresa impares
console.log(app.obtenerImpares(5,10))
console.log(app.obtenerImpares(10,5))