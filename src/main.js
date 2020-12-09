export default class App {

    sumatoriaSerieUno(numero){

        let suma = 1

        for(let i=2; i<=numero ; i = i + 1){

            suma = suma + 1/i
        }
         return suma

    }

    sumatoriaSerieDos(numero2){

        let suma = 1
        let sumap
        let sumar
        let sumatotal 

        for(let i=2; i<=numero2 ; i = i + 1){

            if(i%2!=0){

                sumar = suma -1/i
            }else{

                sumap= suma + 1/i
            }
                
            sumatotal= sumap + sumar
        }
         return suma

    }








}

let app = new App();

//Función que reciba como parámetro un número y calcule la suma de la siguiente serie: 1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/numero
console.log(app.sumatoriaSerieUno(6))

//Función dos
console.log(app.sumatoriaSerieDos(6))
