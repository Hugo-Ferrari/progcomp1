function calcular(){ 
    //vamos criar duas variaveis 
    //JS as variaveis nn possuem tipo

    let mascote, homenagem , leite, kit, suplemento, sangue, soma, equipe 
    mascote = Number(document.getElementById("mascote").value )
    // recupera a quantidade de litros de leite
    homenagem = Number(document.getElementById("homenagem").value)
    // recupera o valor da homenagem digitada pelo usuario 
    leite = Number(document.getElementById("leite").value)
    // recupera a quantidade de litros de leite
    kit = Number(document.getElementById("kit").value)
    // recupera a quantidade de kit
    suplemento = Number(document.getElementById("suplemento").value)

    sangue= Number(document.getElementById("sangue").value)
    // calcular a soma 
     
    soma = mascote + homenagem + (2*(leite)) 
     // vamos calcular a pontuação considerando metas de kitssuplemntos 
     equipe =document.getElementById("equipe").value
     if(equipe =="Laranja"){

        if (kit>= 97 && suplemento >= 49){
            soma=soma + 5000 + ((kit-97) * 30) +((suplemento -49 ) *15)
        }
        else if( kit >=78 && suplemento >=35){
            soma = soma + 4000 + ((kit-49) * 30) +((suplemento -39) *15)
        }
        else if (kit >= 49 && suplemento >= 25){
            soma = soma + 2500 + ((kit-19) *30) + ((suplemento - 25)*15)
        }
        else if (kit >= 19 && suplemento >= 19){
            soma = soma + 1000 + ((kit -19) *30) + ((suplemento - 10) *15)
        }
     }

    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}