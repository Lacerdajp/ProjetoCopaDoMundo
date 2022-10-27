import{Selecao} from './Selecao.js'
import {Grupos} from './Grupos.js'
import{Jogo} from './Jogo.js'
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
