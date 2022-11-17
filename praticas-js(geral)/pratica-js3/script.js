let valores = []
let valorNu = document.getElementById("valor")
let somaTot = 0
let contagemValores = document.getElementById("contagem_valores")
let respValores = document.getElementById("resp_impares")
let respSoma = document.getElementById("resp_soma")
let contRepet = 5

function verificar() {
    if (valorNu.value.length == 0) {
        alert("[ERRO]: Valor ínvalido, revise e tente novamente. ")
    } else {
        contRepet -= 1
        contagemValores.innerHTML = `Digite ${contRepet} valores:`
        let valor = Number(valorNu.value)
        
        if (valor % 2 != 0) {
            
            valores.push(valor)
            somaTot += valor 
        } 
        
        
        if (contRepet == 0) {
            respValores.innerHTML = `<p><ins>Os valores ímpares digitados foram: <strong>${valores}</strong></ins></p>`
            respSoma.innerHTML = `<p><ins>A soma desses valores ímpares é <strong>${somaTot}</strong></ins></p>`
        }  
        valorNu.value = ""
        valorNu.focus()
    }
}

