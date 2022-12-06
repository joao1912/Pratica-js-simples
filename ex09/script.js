let telaExibidora = document.querySelector("div#tela")
let telaSinal = document.getElementById("")/**/ 

const um = document.querySelector("div#tec1")
const dois = document.querySelector("div#tec2")
const tres = document.querySelector("div#tec3")
const quatro = document.querySelector("div#tec4")
const cinco = document.querySelector("div#tec5")
const seis  = document.querySelector("div#tec6")
const sete = document.querySelector("div#tec7")
const oito = document.querySelector("div#tec8")
const nove = document.querySelector("div#tec9")
const zero  = document.querySelector("div#tec0")
const maisMenos = document.querySelector("div#trocaSinal")
const ponto = document.querySelector("div#ponto")

const dividir = document.getElementById("tecsCalc_divisao")
const soma = document.getElementById("tecsCalc_soma")
const subtracao = document.getElementById("tecsCalc_subtracao")
const porcento = document.getElementById("tecsCalc_porcentagem")
const igual = document.getElementById("tecigual")

let valor = ""
let valor2 = ""
let sinal = ""
let detector_sinal = "desativado"

um.addEventListener("click", function(){
    valor += "1"
    telaExibidora.innerHTML = ``
    telaExibidora.innerHTML = `${valor}`
})

dois.addEventListener("click", function(){
    valor += "2"
})

tres.addEventListener("click", function(){
    valor += "3"
})

quatro.addEventListener("click", function(){
    valor += "4"
    numero = 4
    telaExibidora.innerHTML = `${valor}`
})

cinco.addEventListener("click", function(){
    valor += "5"
    numero = 5
    telaExibidora.innerHTML = `${valor}`
})

seis.addEventListener("click", function(){
    valor += "6"
    numero = 6
    telaExibidora.innerHTML = `${valor}`
})

sete.addEventListener("click", function(){
    valor += "7"
    numero = 7
    telaExibidora.innerHTML = `${valor}`
})

oito.addEventListener("click", function(){
    valor += "8"
    numero = 8
    telaExibidora.innerHTML = `${valor}`
})

nove.addEventListener("click", function(){
    valor += "9"
    numero = 9
    telaExibidora.innerHTML = `${valor}`
})

zero.addEventListener("click", function(){
    valor += "1"
    numero = 0
    telaExibidora.innerHTML = `${valor}`
})



dividir.addEventListener("click", function(){
    telaExibidora.innerHTML = `` 
    telaSinal.innerHTML = "÷"
    if(detector_sinal == "desativado") {
        if (sinal == "dividir") {         
            detector_sinal = "ativado"
            valor = ""
        } else {
            sinal = "dividir"
            detector_sinal = "ativado"
            valor2 = valor
            valor = ""
            telaExibidora.innerHTML = ``
            telaExibidora.innerHTML = `${valor2}`
        } 
    } else {
        if(valor != "") {
            calculador()
            detector_sinal = "desativado"
            valor = ""
        }
        sinal = "dividir"
        valor = ""
    }
})

soma.addEventListener("click", function(){
    telaExibidora.innerHTML = `` 
    telaSinal.innerHTML = "+"
    if(detector_sinal == "desativado") {
        if (sinal == "soma") {         
            detector_sinal = "ativado"
            valor = ""
        } else {
            sinal = "soma"
            detector_sinal = "ativado"
            valor2 = valor
            valor = ""
            telaExibidora.innerHTML = ``
            telaExibidora.innerHTML = `${valor2}`
        } 
    } else {
        if(valor != "") {
            calculador()
            detector_sinal = "desativado"
            valor = ""
        }
        sinal = "soma"
        valor = ""
    }
})

subtracao.addEventListener("click", function(){
    telaExibidora.innerHTML = `` 
    telaSinal.innerHTML = "-"
    if(detector_sinal == "desativado") {
        if (sinal == "subtracao") {         
            detector_sinal = "ativado"
            valor = ""
        } else {
            sinal = "subtracao"
            detector_sinal = "ativado"
            valor2 = valor
            valor = ""
            telaExibidora.innerHTML = ``
            telaExibidora.innerHTML = `${valor2}`
        } 
    } else {
        if(valor != "") {
            calculador()
            detector_sinal = "desativado"
            valor = ""
        }
        sinal = "subtracao"
        valor = ""
    }
})

porcento.addEventListener("click", function(){
    telaExibidora.innerHTML = `` 
    telaSinal.innerHTML = "%"
    if(detector_sinal == "desativado") {
        if (sinal == "porcentagem") {         
            detector_sinal = "ativado"
            valor = ""
        } else {
            sinal = "porcentagem"
            detector_sinal = "ativado"
            valor2 = valor
            valor = ""
            telaExibidora.innerHTML = ``
            telaExibidora.innerHTML = `${valor2}`
        } 
    } else {
        if(valor != "") {
            calculador()
            detector_sinal = "desativado"
            valor = ""
        }
        sinal = "porcentagem"
        valor = ""
    }
})

porcento.addEventListener("click", function(){
    telaExibidora.innerHTML = `` 
    telaSinal.innerHTML = "%"
    if(detector_sinal == "desativado") {
        if (sinal == "porcentagem") {         
            detector_sinal = "ativado"
            valor = ""
        } else {
            sinal = "porcentagem"
            detector_sinal = "ativado"
            valor2 = valor
            valor = ""
            telaExibidora.innerHTML = ``
            telaExibidora.innerHTML = `${valor2}`
        } 
    } else {
        if(valor != "") {
            calculador()
            detector_sinal = "desativado"
            valor = ""
        }
        sinal = "porcentagem"
        valor = ""
    }
})



igual.addEventListener("click", function(){
    calculador()
})



function calculador() {
    let resultado = 0
    if (sinal == "dividir") {
        resultado = (Number(valor2) / Number(valor))
    }
    if(calc.sinal_amz == "soma") {
        resultado = (calc.valor_amz + numero)
    }
    if(calc.sinal_amz == "subtracao") {
        resultado = (calc.valor_amz - numero)
    }
    if(calc.sinal_amz == "porcentagem") {
        resultado = ((calc.valor_amz * numero) / 100)
    }
    if(calc.sinal_amz == "multiplicacao") {
        resultado = (calc.valor_amz * numero)
    }
    detec_tela = 1
    telaExibidora.innerHTML = `${resultado}`
    valor2 = resultado /* talvez tenha que mudar de Number para String aqui */
}

function limpar(){

    telaExibidora.innerHTML = ""
    valor = ""
    numero = 0
    sinal = ""
    calc.valor_amz = 0
    calc.sinal_amz = undefined
}

