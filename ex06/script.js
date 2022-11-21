let bolas = document.getElementById("bolasForm")
let casquinha = document.getElementById("casquinhaForm")
let cobertura = document.getElementById("coberturaForm")
let valor = document.getElementById("valorForm")
let botao_pronto = document.getElementById("bot_pronto")
let botao_add = document.getElementById("bot_add")
let botao_apagar = document.getElementById("bot_apagar")
let quantBolas = document.getElementById("bolaSabor")
let Totvalores = 0

const produtos = {
    bolasSabor: ["Chocolate","Morango","Limão","Flocos","Avelã"] ,
    casquinha: ["Cesta","Cone","Mega Cone"] ,
    cobertura: ["Chocolate","Morango","Maracuja"] ,
    preços_bolas: [5,6,7,8,9] ,
    preços_casquinhas: [9,5,13] ,
    preços_coberturas: [4,4,5]
}

let bolasResp = [] 
let casquinhaResp = []
let coberturaResp = []

let tipoSabor = {
    tipo: [document.querySelector("input#chocolate") , document.querySelector("input#morango") , document.querySelector("input#limao") , document.querySelector("input#flocos") , document.querySelector("input#avela")]
}
let tipoCasquinha = {
    tipo: [document.querySelector("input#cesta"),document.querySelector("input#cone"),document.querySelector("input#megacone")]
}
let tipoCobertura = {
    tipo: [document.querySelector("input#cobChocolate") , document.querySelector("input#cobMorango") , document.querySelector("input#cobMaracuja")]
    
}


let detectorADD = 1

function addBola() {
    if (detectorADD != 5){
        detectorADD += 1
    }
    if (detectorADD <= 3) {
        quantBolas.innerHTML = `Qual o sabor da <strong>${detectorADD}o</strong> bola que deseja adicionar.`
    }
    if (detectorADD >= 4) {
        botao_pronto.removeAttribute("disabled")
        for (let c = 0 ; c < 5 ; c++) {
            botao_add.setAttribute("disabled","disabled")
            tipoSabor.tipo[c].setAttribute("disabled","disabled")
            if (c <= 2){
                tipoCobertura.tipo[c].removeAttribute("disabled")
                tipoCasquinha.tipo[c].removeAttribute("disabled","disabled")
            }
        }
    }
    
    for(let c = 0 ; c < 5 ; c++) {
        if(tipoSabor.tipo[c].checked) {
            bolasResp.push(produtos.bolasSabor[c])
            Totvalores += produtos.preços_bolas[c]
        }
    }
}


function Montar() {
    botao_apagar.removeAttribute("disabled","disabled")
    botao_pronto.setAttribute("disabled","disabled")
    for (let c = 0 ; c < 3 ; c++) {
        if (tipoCasquinha.tipo[c].checked) {
            casquinhaResp.push(produtos.casquinha[c])
            Totvalores += produtos.preços_casquinhas[c]
        }
        if(tipoCobertura.tipo[c].checked) {
            coberturaResp.push(produtos.cobertura[c])
            Totvalores += produtos.preços_coberturas[c]
        }
    }

    bolas.innerHTML = `Bolas: ${bolasResp[0]} / ${bolasResp[1]} / ${bolasResp[2]} `
        
    casquinha.innerHTML = `Casquinha: ${casquinhaResp}`
         
    cobertura.innerHTML = `Cobertura: ${coberturaResp}`

    valor.innerHTML = `Valor a ser pago: R$ ${Totvalores}`
        
}

function apagarT() {
    botao_apagar.setAttribute("disabled","disabled")
    bolasResp = [] 
    casquinhaResp = []
    coberturaResp = []

    quantBolas.innerHTML = `Qual o sabor da <strong>1o</strong> bola que deseja adicionar.`

    bolas.innerHTML = `Bolas: `
        
    casquinha.innerHTML = `Casquinha:`
         
    cobertura.innerHTML = `Cobertura: `

    valor.innerHTML = `Valor a ser pago:`

    Totvalores = 0

    detectorADD = 1

    botao_add.removeAttribute("disabled","disabled")

    for (let c = 0 ; c < 5 ; c++) {
        tipoSabor.tipo[c].removeAttribute("disabled","disabled")
        if (c <= 2){
            tipoCobertura.tipo[c].setAttribute("disabled","disabled")
            tipoCasquinha.tipo[c].setAttribute("disabled","disabled")
        }
    }

}