let prompt = require('prompt-sync')()

// Obtendo dados de entrada
nomeDoHeroi = prompt("Digite o nome do seu herói: ")
qtdExperiencia = parseInt(prompt("Digite a quantidade de experiência do seu herói: "))

if (qtdExperiencia <= 1000){     []
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de Ferro")
}else if ((qtdExperiencia > 1000) && (qtdExperiencia <= 2000)){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de Bronze")
}else if ((qtdExperiencia > 2000) && (qtdExperiencia <= 5000)){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de Prata")
}else if ((qtdExperiencia > 5000) && (qtdExperiencia <= 7000)){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de Ouro")
}else if ((qtdExperiencia > 7000) && (qtdExperiencia <= 8000)){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de Platina")
}else if ((qtdExperiencia > 8000) && (qtdExperiencia <= 9000)){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de Ouro")
}else if ((qtdExperiencia > 9000) && (qtdExperiencia <= 10000)){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de Ouro")
}else{
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de Radiante")
}




