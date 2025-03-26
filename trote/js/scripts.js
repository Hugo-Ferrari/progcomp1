function calcular(){ 
    //vamos criar duas variaveis 
    //JS as variaveis nn possuem tipo

    let mascote, homenagem
    mascote = document.getElementById("mascote").value
    alert(mascote)
    homenagem = document.getElementById("homenagem").value
    alert(homenagem)
    // calcular a soma 

    let soma =  Number(mascote) +  Number(homenagem)
    alert(soma)
}