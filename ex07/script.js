let valor0 = document.getElementById("val0")
let valor1 = document.getElementById("val1")
let valor2 = document.getElementById("val2")
let valor3 = document.getElementById("val3")
let valor4 = document.getElementById("val4")
let valor5 = document.getElementById("val5")
let valor6 = document.getElementById("val6")
let valor7 = document.getElementById("val7")

let resposta = document.getElementById("resp")
let tabResp = document.getElementById("respTabela")
let detecerro = 0

function Converter() {
    let soma = ( valor0.value * (2**0) + valor1.value * (2**1) + valor2.value * (2**2) + valor3.value * (2**3) + valor4.value * (2**4) + valor5.value * (2**5) + valor6.value * (2**6) + valor7.value * (2**7) )
    resposta.innerHTML = `Convertido para decimal: ${soma}`

}

function Limpar() {
    valor0.value = ``
    valor1.value = ``
    valor2.value = ``
    valor3.value = ``
    valor4.value = ``
    valor5.value = ``
    valor6.value = ``
    valor7.value = ``

    resposta.innerHTML = `<strong>=> </strong>`
}