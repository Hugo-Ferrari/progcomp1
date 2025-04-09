function calcular(){ 
    //vamos criar duas variaveis 
    //JS as variaveis nn possuem tipo

    let mascote, homenagem , leite, kit, suplemento, sangue,pacote5kg,pacotedearroz1kg,PacotedeFeijão02Kg,PacotedeFeijão01Kg,PacotedeMacarrãode400,Óleo900ml , soma, equipe 
    mascote = Number(document.getElementById("mascote").value )
    // recupera a quantidade de litros de leite
    homenagem = Number(document.getElementById("homenagem").value)
    // recupera o valor da homenagem digitada pelo usuario 
    leite = Number(document.getElementById("leite").value)
    // recupera a quantidade de litros de leite
    kit = Number(document.getElementById("kit").value)
    // recupera a quantidade de kit
    suplemento = Number(document.getElementById("suplemento").value)

    sangue = Number (document.getElementById ("sangue").value)

    pacote5kg = Number(document.getElementById("pacote5kg").value)

    pacotedearroz1kg = Number(document.getElementById("pacotedearroz1kg").value)

    PacotedeFeijão02Kg = Number(document.getElementById("PacotedeFeijão02Kg").value)

    PacotedeFeijão01Kg = Number(document.getElementById("PacotedeFeijão01Kg").value)

    PacotedeMacarrãode400 = Number(document.getElementById("PacotedeMacarrãode400").value)

    Óleo900ml = Number(document.getElementById("Óleo900ml").value)

    
     // vamos calcular a pontuação considerando metas de kitssuplemntos 
     equipe =document.getElementById("equipe").value
     if(equipe =="Laranja"){
        // verifica kit e suplemento

        if (kit>= 97 && suplemento >= 49){
            soma=soma + 5000 + ((kit-97) * 30) +((suplemento -49 ) *15)
        }
        else if( kit >=78 && suplemento >=35){
            soma = soma + 4000 + ((kit-78) * 30) +((suplemento -35) *15)
        }
        else if (kit >= 49 && suplemento >= 25){
            soma = soma + 2500 + ((kit-49) *30) + ((suplemento - 25)*15)
        }
        else if (kit >= 19 && suplemento >= 10){
            soma = soma + 1000 + ((kit -19) *30) + ((suplemento - 10) *15)
        }
        if(sangue>= 49 ){
            soma = soma+ 2500 + ((sangue -49) *20)
            }
            else {
                soma = soma + (sangue * 20 )
            }
     }
     else if(equipe =="Preta"){

        if (kit>= 103 && suplemento >= 52){
            soma=soma + 5000 + ((kit-103) * 30) +((suplemento -52) *15)
        }
        else if( kit >=82 && suplemento >=42){
            soma = soma + 4000 + ((kit-82) * 30) +((suplemento -42) *15)
        }
        else if (kit >= 52 && suplemento >= 26){
            soma = soma + 2500 + ((kit-52) *30) + ((suplemento - 26)*15)
        }
        else if (kit >= 21 && suplemento >= 10){
            soma = soma + 1000 + ((kit -21) *30) + ((suplemento - 10) *15)
        }
        if(sangue>= 52 ){
            soma = soma+ 2500 + ((sangue -52) *20)
            }
            else {
                soma = soma + (sangue * 20 )
            }
     }
     else if(equipe =="Roxa"){

        if (kit>= 102 && suplemento >= 51){
            soma=soma + 5000 + ((kit-102) * 30) +((suplemento -51) *15)
        }
        else if( kit >=82 && suplemento >=41){
            soma = soma + 4000 + ((kit-82) * 30) +((suplemento -41) *15)
        }
        else if (kit >= 51 && suplemento >= 26){
            soma = soma + 2500 + ((kit-51) *30) + ((suplemento - 26)*15)
        }
        else if (kit >= 20 && suplemento >= 10){
            soma = soma + 1000 + ((kit -20) *30) + ((suplemento - 10) *15)
        }
        if(sangue>= 51 ){
            soma = soma+ 2500 + ((sangue -51) *20)
            }
            else {
                soma = soma + (sangue * 20 )
            }
     }
     else if(equipe =="Verde"){

        if (kit>= 88 && suplemento >= 44){
            soma=soma + 5000 + ((kit-88) * 30) +((suplemento -44) *15)
        }
        else if( kit >=70 && suplemento >=35){
            soma = soma + 4000 + ((kit-70) * 30) +((suplemento -35) *15)
        }
        else if (kit >= 44 && suplemento >= 22){
            soma = soma + 2500 + ((kit-44) *30) + ((suplemento - 22)*15)
        }
        else if (kit >= 18 && suplemento >= 9){
            soma = soma + 1000 + ((kit -18) *30) + ((suplemento - 9) *15)
        }
        if(sangue>= 44 ){
            soma = soma+ 2500 + ((sangue -44) *20)
            }
            else {
                soma = soma + (sangue * 20 )
            }
     }
     else{

        if (kit>= 97 && suplemento >= 47){
            soma=soma + 5000 + ((kit-97) * 30) +((suplemento -47) *15)
        }
        else if( kit >=74 && suplemento >=38){
            soma = soma + 4000 + ((kit-74) * 30) +((suplemento -38) *15)
        }
        else if (kit >= 47 && suplemento >= 24){
            soma = soma + 2500 + ((kit-47) *30) + ((suplemento - 24)*15)
        }
        else if (kit >= 19 && suplemento >= 9){
            soma = soma + 1000 + ((kit -19) *30) + ((suplemento - 9) *15)
        }
        if(sangue>= 47 ){
            soma = soma+ 2500 + ((sangue -47) *20)
            }
            else {
                soma = soma + (sangue * 20 )
            }
     }
    }
    
     // calcular a soma 
     
    soma =soma+  mascote + homenagem + (2*leite) + (20*sangue) +(5* pacote5kg) + pacotedearroz1kg + (2*(PacotedeFeijão02Kg)) + PacotedeFeijão01Kg + (0.5*(PacotedeMacarrãode400)) + Óleo900ml

    document.getElementById("soma").innerHTML = `A soma é ${soma}`
