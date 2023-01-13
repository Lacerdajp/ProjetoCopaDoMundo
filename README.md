# ProjetoCopaDoMundo
<p>
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

O principio era desenvolver uma copa do mundo para a vaga de estágio GeoPost, depois foi melhorado o projeto afim de se tornar um portifolio

## Objetivo:

  Simular uma copa do mundo, com resultados randomicos.

## Para os avaliadores:

   A proposta do exercicio acabou caindo na caixa de Promoções do meu e-mail, infelizmente só consegui ver faltando 3 dias para o prazo estimado. Sendo assim não consegui implementar um bom visual de CSS para ficar mais fácil ao usuário, além não implementar a aplicação com códigos mais limpos, pela urgência a qual foi passada.
   
## Observações:

   O Projeto foi atualizado e agora foi criado uma API e alguns Scripts de Banco de Dados, pois a API e o Banco da empresa foram Desativados.

## Tecnologias:

   - [``JS``](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
   - [``CSS``](https://developer.mozilla.org/en-US/docs/Web/CSS)
   - [``HTML``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)
   - [``.Net Entity Fremwork``](https://learn.microsoft.com/en-us/ef/core/get-started/overview/first-app?tabs=netcore-cli)
   - [``SQL SERVER``](https://learn.microsoft.com/pt-br/sql/sql-server/?view=sql-server-2017)
   
## Processo de instalação:

Para a criação de um Banco de Dados [SQL SERVER](https://learn.microsoft.com/pt-br/sql/sql-server/?view=sql-server-2017) é [disponibilizado Scripts em ordem  Númerica na pasta](https://github.com/Lacerdajp/ProjetoCopaDoMundo/tree/main/DataBase), basta executar no Software [SQLServer MAgement Studio](https://learn.microsoft.com/pt-br/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16), cada um em ordem.

Para a execução do BackEnd deve-se baixar o [Visual Studio](https://visualstudio.microsoft.com/pt-br/downloads/), após isso  [abra o arquivo ".sln"](https://github.com/Lacerdajp/ProjetoCopaDoMundo/tree/main/BackEnd/APIProjetoCopaDoMundo).Depois basta [alterar para a sua senha de Banco de Dados no arquivo "AppSettings.json" na parte de SQLConnection](https://github.com/Lacerdajp/ProjetoCopaDoMundo/tree/main/BackEnd/APIProjetoCopaDoMundo/APIProjetoCopaDoMundo):
   ~~~Json
   {
  "ConnectionString": {
    "SQLConnection": "Data Source=localhost;Initial Catalog=COPA;User ID=sa;Password=yourPassword;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False;"

  },
  ~~~
Após isso basta rodar o Projeto em BackEnd.

Para a Execução do FrontEnd,utilizando o [VsCode](https://code.visualstudio.com/docs) Basta [alterar no arquivo Function.js na pasta Scripts](https://github.com/Lacerdajp/ProjetoCopaDoMundo/tree/main/FrontEnd/Scripts), Trocar o "getEnv()" pelo que é solicitado:
~~~javascript
export async function enviandoResult(final){
    console.log(JSON.stringify(final))
    const post="https://localhost:"+"yourPort"+"/api/Finals"
    fetch(post,{
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'git-user': "yourUser"
        }),
~~~
~~~javascript
export async function participantes() {
    const get='https://localhost:'+"yourPort"+'/api/Selecaos';
    let  selecoes=[];
    await fetch(get,
        {
            
        method: 'GET',
        headers: new Headers({
            'git-user': "youUser"
        })
    }
~~~



## Dicas:
   Para uma experiencia melhor caso as tabelas estejam desalinhadas, afaste o zoom apertando `Ctrl-` até que o grupo E fique alinhado.
    (recomenda-se utilizar como minimo tamanho `1680px x 834px`)

## O que o programa Faz: 

  <p>  1- Obtém todas as Seleções que estão disputando a Competição,através de uma API</p>
   <p> 2-Separa de forma randômica em 8 grupos (do grupo A ao H) de 4 seleções cada um .</p>
   <p> 3-Cada grupo tem três rodadas de partidas. Em cada rodada dois jogos são realizados, fazendo com
    que ao final das três rodadas todas as equipes do grupo tenham se enfrentado. </p>
    <p>4-Simula Resultados das partidas(Valor máximo de Gols 6).</p>
   <p> 5-Contabiliza a pontuação de cada equipe:</p>
         <p>Vitória - 3 pontos para o vencedor do confronto  </p>
        <p> Empate - 1 ponto para cada equipe  </p>
   <p> 6-Os dois primeiros de cada grupo se classificam para as oitavas de final. </p>
        <p> -Critérios de desempate (seguindo essa ordem) </p>
           <p>   Numero de pontos  </p>
             <p> Saldo de gols </p>
              <p>Sorteio (escolha randémica) </p>
  <p>  7—A partir das oitavas de final, É SIMULADO OS RESULTADOS DOS QUE SE CLASSIFICARAM.  </p>
        <p> - Oitavas de finais — 16 equipes - 8 partidas </p>
         <p>- Quartas de finais — 8 equipes — 4 partidas </p>
         <p>- Semifinal — 4 equipes - 2 partidas  </p>
         <p>- Final - 2 equipes — 1 partida </p>
    <p>8-Em caso de empate, é simulado os penaltis de acordo com a regra do futebol. </p>
    <p>9-Verifica quanto foi o jogo de cada rodada </p>
    
## Funcionalidade:

   -A funcionalidade é bem simples basta clicar em `"proxima etapa"` que vai avançando as etapas. 
   
   -Caso queira conferir os resultadaos das rodadas da fase de grupos basta clicar no simbolo  ao lado do botão de `"proxima etapa"`:
   <p>
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JjWtRloJW8YeQWPtKfeC74q1yeOcYxOTPQ&usqp=CAU"/>
   </p>
  
   
   -Caso queira reiniciar a simulação basta  clicar no botão de `refresh` ao lado dos demais botões





