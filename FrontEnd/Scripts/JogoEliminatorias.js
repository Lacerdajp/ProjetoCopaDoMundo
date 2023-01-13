import { Jogo } from "./Jogo.js";

export class JogoEliminatorias extends Jogo{

    constructor(nome=null,time1=null,time2=null){
        super(nome,time1,time2)
        this.penalti1=0
        this.penalti2=0
    }
    simularResultado(){
        this.golsTime1=Math.floor(Math.random()*7)
        this.golsTime2=Math.floor(Math.random()*7)
        this.time1.gols= this.time1.gols+this.golsTime1
        this.time2.gols= this.time2.gols+this.golsTime2
        if(this.golsTime1>this.golsTime2){
            return this.time1
        }else if (this.golsTime1<this.golsTime2) {
            return this.time2
        }else{
            for (let i = 0; i < 5; i++) {
                if ((this.penalti1>this.penalti2 && this.penalti2+5-i<this.penalti1)||
                (this.penalti1<this.penalti2 && this.penalti1+5-i<this.penalti2)
                ) {
                    break
                }
                Math.floor(Math.random()*2) ==1 ? this.penalti1=this.penalti1+1:null;
                Math.floor(Math.random()*2) ==1 ? this.penalti2=this.penalti2+1:null;
            }
            while(this.penalti1==this.penalti2){
                Math.floor(Math.random()*2) ==1 ? this.penalti1=this.penalti1+1:null;
                Math.floor(Math.random()*2) ==1 ? this.penalti2=this.penalti2+1:null;
            }
            return this.penalti1>this.penalti2? this.time1:this.time2
        }
    }
}