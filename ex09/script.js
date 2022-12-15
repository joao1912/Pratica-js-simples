let telaExibidora = document.querySelector("span#telaValores")
let telaSinal = document.getElementById("sinalExibido")

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
const ponto = document.querySelector("div#tecponto")

const dividir = document.getElementById("tecsCalc_divisao")
const soma = document.getElementById("tecsCalc_soma")
const subtracao = document.getElementById("tecsCalc_subtracao")
const porcento = document.getElementById("tecsCalc_porcentagem")
const igual = document.getElementById("tecigual")
const multiplicacao = document.getElementById("tecMultiplica")

let valor = ""
let valor2 = ""
let sinal = ""
let detector_sinal = "desativado"
let detec_valor = 0

um.addEventListener("click", function(){
    valor += "1"
    telaExibidora.innerHTML = ``
    telaExibidora.innerHTML = `${valor}`
})

dois.addEventListener("click", function(){
    valor += "2"
    telaExibidora.innerHTML = ``
    telaExibidora.innerHTML = `${valor}`
})

tres.addEventListener("click", function(){
    valor += "3"
    telaExibidora.innerHTML = ``
    telaExibidora.innerHTML = `${valor}`
})

quatro.addEventListener("click", function(){
    valor += "4"
    telaExibidora.innerHTML = ``
    telaExibidora.innerHTML = `${valor}`
})

cinco.addEventListener("click", function(){
    valor += "5"
    telaExibidora.innerHTML = ``
    telaExibidora.innerHTML = `${valor}`
})

seis.addEventListener("click", function(){
    valor += "6"
    telaExibidora.innerHTML = ``
    telaExibidora.innerHTML = `${valor}`
})

sete.addEventListener("click", function(){
    valor += "7"
    telaExibidora.innerHTML = ``
    telaExibidora.innerHTML = `${valor}`
})

oito.addEventListener("click", function(){
    valor += "8"
    telaExibidora.innerHTML = ``
    telaExibidora.innerHTML = `${valor}`
})

nove.addEventListener("click", function(){
    valor += "9"
    telaExibidora.innerHTML = ``
    telaExibidora.innerHTML = `${valor}`
})

zero.addEventListener("click", function(){
    valor += "0"
    telaExibidora.innerHTML = ``
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
        } 
    } else {
        if(valor != "") {
            calculador()
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
        } 
    } else {
        if(valor != "") {
            calculador()
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
        } 
    } else {
        if(valor != "") {
            calculador()
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
        } 
    } else {
        if(valor != "") {
            calculador()
            valor = ""
        }
        sinal = "porcentagem"
        valor = ""
    }
})

multiplicacao.addEventListener("click", function(){
    telaExibidora.innerHTML = `` 
    telaSinal.innerHTML = "X"
    if(detector_sinal == "desativado") {
        if (sinal == "multiplicacao") {         
            detector_sinal = "ativado"
            valor = ""
        } else {
            sinal = "multiplicacao"
            detector_sinal = "ativado"
            valor2 = valor
            valor = ""
            telaExibidora.innerHTML = ``
        } 
    } else {
        if(valor != "") {
            calculador()
            valor = ""
        }
        sinal = "multiplicacao"
        valor = ""
    }
})

maisMenos.addEventListener("click", function(){
    telaExibidora.innerHTML = ""
    if(detec_valor == 0) {
        valor = Number(valor) * -1
        telaExibidora.innerHTML = valor
    } else {
        valor2 = Number(valor2) * -1
        telaExibidora.innerHTML = valor2
    }
})


ponto.addEventListener("click", function(){
    telaExibidora.innerHTML = ""
    let valorTemp = ""
    valorTemp = valor + "."
    valor = valorTemp
    telaExibidora.innerHTML = valor
})


igual.addEventListener("click", function(){
    telaSinal.innerHTML = ""
    calculador()
    detec_valor = 1
    valor = ""
    sinal = ""
})



function calculador() {
    let resultado = 0
    if (sinal == "dividir") {
        resultado = (Number(valor2) / Number(valor))
    }
    if(sinal == "soma") {
        resultado = (Number(valor2) + Number(valor))
    }
    if(sinal == "subtracao") {
        resultado = (Number(valor2) - Number(valor))
    }
    if(sinal == "porcentagem") {
        resultado = (Number(valor2) * Number(valor)) / 100
    }
    if(sinal == "multiplicacao") {
        resultado = (Number(valor2) * Number(valor))
    }
    
    telaExibidora.innerHTML = `${resultado}`
    valor2 = String(resultado) 
    
}

function limpar(){

    telaSinal.innerHTML = ""
    telaExibidora.innerHTML = ""
    telaSinal.innerHTML = ""
    valor = ""
    valor2 = ""
    sinal = ""
    detector_sinal = "desativado"
}

