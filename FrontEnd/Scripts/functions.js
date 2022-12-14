import{Selecao} from './Selecao.js'
import {Grupos} from './Grupos.js'
import{Jogo} from './Jogo.js'
import { JogoEliminatorias } from './JogoEliminatorias.js';
//Buscando seleções participantes
export async function enviandoResult(final){
    console.log(JSON.stringify(final))
    const post="https://localhost:"+getenv(YOUR_SERVER)+"/api/Finals"
    fetch(post,{
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'git-user': getenv(YOUR_USER_GITHUB)
        }),
        body:JSON.stringify(final)
    }).then((response) => response.json())
    .then((final) => {
      console.log("Success:", final);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
export async function participantes() {
    const get='https://localhost:'+getenv(YOUR_SERVER)+'/api/Selecaos';
    let  selecoes=[];
    await fetch(get,
        {
            
        method: 'GET',
        headers: new Headers({
            'git-user': getenv(YOUR_USER_GITHUB)
        })
    }
    )
    .then(response=>
        response.json()
        )
    .then(dados=>{
        dados.forEach(element => {
            
            let selecao=new Selecao(dados.indexOf(element),element.token,element.nome);
            selecoes.push(selecao);
        });
    }
    )
    .catch(erro=>console.log(erro));
   return selecoes

}
//Gerando Grupos de forma randomica e rodadas
 export async function gerarGrupos(selecoes=[]){
    let grupos=[]
    for (let i = 0; i < 8; i++) {
        grupos.push(new Grupos(String.fromCharCode(65+i),i))
        for (let j = 0; j < 4; j++) {
            let rand=0
            do {
                rand=Math.floor(Math.random()*selecoes.length)
            } while (selecoes[rand].grupo==true);
            
            grupos[grupos.length-1].addIntegrantes(selecoes[rand])
            selecoes[rand].grupo=true;
        }
        
    }
    return grupos;
}
//adicionanando os times da proxima fase
export  function proximaFase(grupos=null,jogosRecebidos=null){
    
    let times=[]
    let jogos=[]
    if (Array.isArray(grupos)) {
    for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 8; i++) {
        if(j===0){
        if (i%2===1 ){
        times.push(grupos[i].integrantes.splice(j,1))
        }
        else{
        times.push(grupos[i].integrantes.splice(j+1,1))
        }
        }else{
            if (i%2===0 ){
                times.push(grupos[i].integrantes.splice(j-1,1))
                }
                else{
                times.push(grupos[i].integrantes.splice(j-1,1))
                }
        }
        
    }
    }
    
    }
    else if(Array.isArray(jogosRecebidos)){
        jogosRecebidos.forEach(element => {
            let time=element.simularResultado()
            times.push([time])
       });
       
    }
    times=times.flat(1)
    let tam=times.length/2
    for (let i = 0; i <  tam;i++) {
        let time1=times.pop()
        let time2=times.pop()
        jogos.push(new JogoEliminatorias(time1.nome.toUpperCase()+" x "+time2.nome.toUpperCase(),time1,time2)) 
    }
    
    return jogos
}
export function acordeao(acc){
    let i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
}
export function imprimirFase(jogos){
    let nPart=jogos.length
    for (let i = 0; i < nPart; i++) {
        
           document.querySelector('#tabela'+nPart+i).
           querySelector('#time1').textContent=jogos[i].time1.nome
           document.querySelector('#tabela'+nPart+i).
           querySelector('#time2').textContent=jogos[i].time2.nome
           document.querySelector('#tabela'+nPart+i).
           querySelector('#gols1').textContent=jogos[i].golsTime1
           document.querySelector('#tabela'+nPart+i).
           querySelector('#gols2').textContent=jogos[i].golsTime2
           document.querySelector('#tabela'+nPart+i).
           querySelector('#penalti1').textContent=jogos[i].penalti1
           document.querySelector('#tabela'+nPart+i).
           querySelector('#penalti2').textContent=jogos[i].penalti2
        
        
    }
}