import{Selecao} from './Selecao.js'
import {Grupos} from './Grupos.js'
import{Jogo} from './Jogo.js'
import { JogoEliminatorias } from './JogoEliminatorias.js'
import{participantes,gerarGrupos,proximaFase,acordeao, imprimirFase, enviandoResult}from'./functions.js'
let selecoes=await participantes().then(p=>{return p});
let grupos=[]
let final;
let resposta
let eliminatorias=[[],[],[],[]]
let clicks=0
let acc = document.getElementsByClassName("accordion")
acordeao(acc)

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
            clicks++;
            break;
        case 2:
            grupos.forEach(element => {
                element.jogandoRodada(1);
                element.imprimirRodadas(1)
                element.imprimirGrupo()
            });
            clicks++
            break;
        case 3:
            grupos.forEach(element => {
                element.jogandoRodada(2);
                element.imprimirRodadas(2)
                element.imprimirGrupo()

            });
            eliminatorias[0]= proximaFase(grupos)
            eliminatorias.forEach(element => {
                if (element!=[]) {
                    imprimirFase(element)
                    
                }
            });
            clicks++
            break;
        case 4:
            
            eliminatorias[1]=proximaFase(null,eliminatorias[0])
            eliminatorias.forEach(element => {
                if (element!=[]) {
                    imprimirFase(element)
                }
            });
            clicks++
            break;
        case 5:
            eliminatorias[2]=proximaFase(null,eliminatorias[1])
            eliminatorias.forEach(element => {
                if (element!=[]) {
                    imprimirFase(element)
                }
            });
            clicks++
            break;
        case 6:
            eliminatorias[3]=proximaFase(null,eliminatorias[2])
            eliminatorias.forEach(element => {
                if (element!=[]) {
                    imprimirFase(element)
                }
            });
            clicks++
            break;
        case 7:
            eliminatorias[3].forEach(element => {
                element.simularResultado()
                final={
                    "equipeA":element.time1.token,
                    "equipeB":element.time2.token,
                    "golsEquipeA":element.golsTime1,
                    "golsEquipeB":element.golsTime2,
                    "golsPenaltyEquipeA":element.penalti1,
                    "golsPenaltyEquipeB":element.penalti2

                }
            });
            eliminatorias.forEach(element => {
                if (element!=[]) {
                    imprimirFase(element)
                }
            });
            
            resposta= await enviandoResult(final)
            clicks++
            break
        default:
            break;
    }
    })
    document.querySelector('#refresh').addEventListener('click', async()=>{  window.location.reload()})



