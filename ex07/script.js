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

    if (valor0.value > 1 || valor0.value < 0) {
        detecerro = 1
        alert("ba")
    } 
    
    if (valor1.value > 1 || valor1.value < 0) {
        detecerro = 1
    }  
    
    if (valor2.value > 1 || valor2.value < 0) {
        detecerro = 1
    } 

    if (valor3.value > 1 || valor3.value < 0) {
        detecerro = 1
    }  
    if (valor4.value > 1 || valor4.value < 0 ) {
        detecerro = 1
    } 

    if (valor5.value > 1 || valor5.value < 0) {
        detecerro = 1
    }  
    
    if (valor6.value > 1 || valor6.value < 0) {
        detecerro = 1
    }  
    
    if (valor7.value > 1 || valor7.value < 0) {
        detecerro = 1
    }
   

    if (detecerro == 0) {
        let soma = ( valor0.value * (2**0) + valor1.value * (2**1) + valor2.value * (2**2) + valor3.value * (2**3) + valor4.value * (2**4) + valor5.value * (2**5) + valor6.value * (2**6) + valor7.value * (2**7) )
        resposta.innerHTML = `Convertido para decimal: ${soma}`
    } else {
        detecerro = 0
        alert("[ERRO]: Use somente os valores '0' e '1' !!!")
    }
}

function Limpar() {
    if (valor0.value + valor1.value + valor2.value + valor3.value + valor4.value + valor5.value + valor6.value + valor7.value == 0 ) {
        alert("[ERRO]: insira valores antes de apagar.")
    } else {
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
    
    
    
}