import{Jogo} from './Jogo.js'
export class Grupos{
    constructor(nome,id,integrantes=[]){
       this.nome=nome;
       this.id=id
       this.integrantes=[];
       this.rodadas=[[],[],[]]
       
    }
    imprimirGrupo(){
        
        if( document.getElementById("tb"+this.id).getAttribute("hidden")){
        document.getElementById("tb"+this.id).removeAttribute("hidden")
        }
        for (let i = 0; i < 4; i++) {
            document.querySelector('#tb'+this.id).
            querySelector('#time'+i).textContent= 
            this.integrantes[i].nome.toUpperCase()
            document.querySelector('#tb'+this.id).
            querySelector('#pont'+i).textContent= 
            this.integrantes[i].pontos
            document.querySelector('#tb'+this.id).
            querySelector('#sg'+i).textContent= 
            this.integrantes[i].gols
        }
    }
    imprimirRodadas(rodada=null){
        
        for (let j = 0; j < 3; j++) 
        {
        if( document.getElementById("TabelaResultado"+j).getAttribute("hidden")){
        document.getElementById("TabelaResultado"+j).removeAttribute("hidden")
        }
           for (let i = 0; i < 2; i++) {
           
            if (rodada<=j) {
           document.querySelector('#TabelaResultado'+j).
           querySelector('#jogo'+this.id+j+i).textContent= 
            this.rodadas[j].flatMap(
                (item,x)=>{
                    if(x===i){
                        let name
                    return item.nome
                    }
                }) 
            }
            if (rodada!=null) {
                document.querySelector('#TabelaResultado'+rodada).
                querySelector('#jogo'+this.id+rodada+i).textContent= 
                this.rodadas[rodada].flatMap(
                (item,x) =>{
                    if(x===i){
                    return item.golsTime1+"  "+item.nome+"  "+item.golsTime2
            }})
            }
            
            }   
            
        }
        
    }
    jogandoRodada(rodada){
        this.rodadas[rodada].flatMap(item=>{
            item.simularResultado()
        })
        this.integrantes.sort((a,b)=>{
            if(a.gols>b.gols){
                return -1
            }
            else if(b.gols>a.gols){
                return 1
            }
            return 0
        }).sort((a,b)=>{
            if(a.pontos>b.pontos){
                return -1
            }
            else if(b.pontos>a.pontos){
                return 1
            }
            return 0
        
        })
        
        
    }
    gerarRodadas(){
        for (let j = 0; j < 3; j++) {
            let i=[]
            this.integrantes.forEach(element => {
                i.push(element)
            });
            let rand=Math.floor(Math.random()*i.length)
            let time1=i[rand];
            i.splice(rand, 1);
            
            if (j>0) {
                let existe=false
                let time2
                do {
                    existe=false
                    rand=Math.floor(Math.random()*i.length)
                    time2=i[rand];
                   
                    this.rodadas.flat(1).forEach(async element => {
                        if ((element.time1==time1 && element.time2==time2)||
                        (element.time1==time2 && element.time2==time1)) {
                            existe=true
                        }
                    });
                    
                } while (existe==true);
                i.splice(rand, 1)
                let partida=new Jogo(time1.nome.toUpperCase()+" x "+time2.nome.toUpperCase(),time1,time2)
                this.rodadas[j].push(partida)
            }
            else{
                rand=Math.floor(Math.random()*i.length)
                let time2=i[rand];
                i.splice(rand, 1);
                let partida=new Jogo(time1.nome.toUpperCase()+" x "+time2.nome.toUpperCase(),time1,time2)
                this.rodadas[j].push(partida)
            }
            let time3=i.pop()
            let time4=i.pop()
            let partida=new Jogo(time3.nome.toUpperCase()+" x "+time4.nome.toUpperCase(),time3,time4)
            this.rodadas[j].push(partida)
            
            // let time2=integrantes[Math.floor(Math.random()*integrantes.length)];
            
        }
    }

    addIntegrantes(integrante) {
        if (this.integrantes.length<=4) {
            this.integrantes.push(integrante);
        }
        
    }
}