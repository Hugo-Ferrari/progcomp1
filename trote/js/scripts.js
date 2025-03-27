function calcular(){ 
    //vamos criar duas variaveis 
    //JS as variaveis nn possuem tipo

    let mascote, homenagem , leite, kitAvulso, suplementoAvulso
    mascote = document.getElementById("mascote").value 
    homenagem = document.getElementById("homenagem").value
    leite = document.getElementById("leite").value
    kitAvulso = document.getElementById("kitAvulso").value
    suplementoAvulso = document.getElementById("suplementoAvulso").value
    // calcular a soma 
    // recupera a quantidade de litros de leite 
    let soma =  Number(mascote) +  Number(homenagem) + (2*Number(leite)) + (30*Number(kitAvulso)) + (15*Number(suplementoAvulso))
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}