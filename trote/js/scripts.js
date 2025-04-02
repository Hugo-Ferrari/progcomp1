function calcular(){ 
    //vamos criar duas variaveis 
    //JS as variaveis nn possuem tipo

    let mascote, homenagem , leite, kit, suplemento, soma, equipe 
    mascote = Number(document.getElementById("mascote").value )
    // recupera a quantidade de litros de leite
    homenagem = Number(document.getElementById("homenagem").value)
    // recupera o valor da homenagem digitada pelo usuario 
    leite = Number(document.getElementById("leite").value)
    // recupera a quantidade de litros de leite
    kit = Number(document.getElementById("kit").value)
    // recupera a quantidade de kit
    suplemento = Number(document.getElementById("suplemento").value)
    // calcular a soma 
     
    soma = mascote + homenagem + (2*(leite)) 
     // vamos calcular a pontuação considerando metas de kitssuplemntos 
     equipe =document.getElementById("equipe").value
     if(equipe =="Laranja"){
        if (kit>= 97){
            soma=soma + 5000 + ((kit-97) * 30)
        }
        else if( kit >=49){
            soma = soma + 2500 + ((kit-49) * 30)
        }
        else if (kit >= 19){
            soma = soma + 1000 + ((kit-19) *30)
        }
     }

    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}