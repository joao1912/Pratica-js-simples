let resp_estoque = document.getElementById("estoque")
let inpuTfile = document.getElementById("filé")
let inpuTemposta = document.getElementById("emposta")
let resp_file = document.getElementById("quantFile")
let resp_emposta = document.getElementById("quantEmposta")

let estoque = {
file: ["Peixe-Espada","Anchova"],
quant_file: [4,2], //quantidaade hipotética, pode ser alterada.

empostas: ["Anchova"],
quant_emposta: [5] //quantidaade hipotética, pode ser alterada.

}

function Verificar() {
   resp_file.innerHTML = ""
   resp_emposta.innerHTML = ""
   resp_estoque.style.background = "rgb(106, 106, 238)"
   resp_estoque.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.336)"

   if(inpuTfile.checked) {
    resp_file.innerHTML = "cabo filé"
   } else if(inpuTemposta.checked) {
    resp_emposta.innerHTML = "cabo emposta"
   }


}