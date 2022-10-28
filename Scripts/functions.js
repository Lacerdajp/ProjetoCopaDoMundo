import{Selecao} from './Selecao.js'
import {Grupos} from './Grupos.js'
import{Jogo} from './Jogo.js'
import { JogoEliminatorias } from './JogoEliminatorias.js';
//Buscando seleções participantes
export async function participantes() {
    const get='https://estagio.geopostenergy.com/WorldCup/GetAllTeams';
    let  selecoes=[];
    await fetch(get,{
            
        method: 'GET',
        headers: new Headers({
            'git-user': 'Lacerdajp'
        })
    })
    .then(response=>response.json())
    .then(dados=>{
        dados.Result.forEach(element => {
            let selecao=new Selecao(dados.Result.indexOf(element),element.Token,element.Name);
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
    times=times.flat(1)
    }
    else if(Array.isArray(jogosRecebidos)){
       times.push()
    }
    
    for (let i = 0; i < 8 ;i++) {
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
export function imprimirFase(tamanhoArray){
    
}