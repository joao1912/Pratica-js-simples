let telaExibidora = document.querySelector("div#tela")

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

const dividir = document.getElementById("tecsCalc_divisao")
const soma = document.getElementById("tecsCalc_soma")
const subtracao = document.getElementById("tecsCalc_subtracao")
const porcento = document.getElementById("tecsCalc_porcentagem")
const igual = document.getElementById("tecigual")

let valortot = 0
let valor = ""
let sinal = ""

um.addEventListener("click", function(){
    valor += "1"
    calculador()
})

dois.addEventListener("click", function(){
    valor += "2"
    calculador()
})

tres.addEventListener("click", function(){
    valor += "3"
    calculador()
})

quatro.addEventListener("click", function(){
    valor += "4"
    calculador()
})

cinco.addEventListener("click", function(){
    valor += "5"
    calculador()
})

seis.addEventListener("click", function(){
    valor += "6"
    calculador()
})

sete.addEventListener("click", function(){
    valor += "7"
    calculador()
})

oito.addEventListener("click", function(){
    valor += "8"
    calculador()
})

nove.addEventListener("click", function(){
    valor += "9"
    calculador()
})

zero.addEventListener("click", function(){
    valor += "0"
    calculador()
})



dividir.addEventListener("click", function(){
    sinal = "divisao"
    valorSecundario = valor
    valor = "0"
    calculador()
})

soma.addEventListener("click", function(){
    sinal = "soma"
    valor = "0"
    calculador()
})

subtracao.addEventListener("click", function(){
    sinal = "subtracao"
    valor = "0"
    calculador()
})

porcento.addEventListener("click", function(){
    sinal = "porcentagem"
    valor = "0"
    calculador()
})

igual.addEventListener("click", function(){
    calculador()
})



function calculador() {
    if (sinal == "divisao") {
        valor = Number(valorSecundario) / Number(valor)
    }

    alert(valor)

}

function limpar(){

    telaExibidora.innerHTML = ""
    valor = ""
    sinal = ""
}

