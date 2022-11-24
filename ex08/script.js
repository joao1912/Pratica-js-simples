let area = document.getElementById("quadrado")

document.getElementById("mais").addEventListener("click", function aumentar() {
    area.style.width = "300px"
    area.style.height = "300px"
})

document.getElementById("menos").addEventListener("click", function diminuir() {
    area.style.width = "100px"
    area.style.height = "100px"
})

document.getElementById("manter").addEventListener("click", function manter() {
    area.style.width = "200px"
    area.style.height = "200px"
})





