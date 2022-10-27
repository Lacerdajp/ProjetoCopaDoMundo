import{Selecao} from './Selecao.js'
import {Grupos} from './Grupos.js'
import{Jogo} from './Jogo.js'
import{participantes,gerarGrupos}from'./functions.js'
let selecoes=await participantes().then(p=>{return p});
let grupos=[]
let clicks=0
document.querySelector('#btn').addEventListener('click',async () =>{
    switch (clicks) {
        case 0:
            grupos=await gerarGrupos(selecoes)
            grupos.forEach(element => {
                element.imprimirGrupo()
                element.gerarRodadas()
                element.imprimirRodadas()
            });
            clicks++
            break;
        case 1:
            
            grupos.forEach(element => {
                element.jogandoRodada(0);
                element.imprimirRodadas(0)
                element.imprimirGrupo()
            });
            console.log(grupos)
            clicks++;
            break;
        case 2:
            grupos.forEach(element => {
                element.jogandoRodada(1);
                element.imprimirRodadas(1)
                element.imprimirGrupo()
            });
            console.log(grupos)
            clicks++
            break;
        case 3:
            grupos.forEach(element => {
                element.jogandoRodada(2);
                element.imprimirRodadas(2)
                element.imprimirGrupo()
            });
            console.log(grupos)
            clicks++
            break;
        default:
            break;
    }
    console.log (clicks)
    })



