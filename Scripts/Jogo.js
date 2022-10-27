export class Jogo{
    constructor(nome,time1,time2){
        this.nome=nome
        this.time1=time1
        this.time2=time2
        this.golsTime1=0
        this.golsTime2=0

    }
    simularResultado(){
         this.golsTime1=Math.floor(Math.random()*7)
        this.golsTime2=Math.floor(Math.random()*7)
        this.time1.gols= this.time1.gols+this.golsTime1
        this.time2.gols= this.time2.gols+this.golsTime2
        if(this.golsTime1>this.golsTime2){
            this.time1.pontos=this.time1.pontos+3
        }else if (this.golsTime1<this.golsTime2) {
            this.time2.pontos=this.time2.pontos+3
        }else{
            this.time2.pontos=this.time2.pontos+1
            this.time1.pontos=this.time1.pontos+1
        }
    }
    

}