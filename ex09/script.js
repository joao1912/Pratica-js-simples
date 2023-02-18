(function(){
    
    let telaExibidora = document.querySelector("span#telaValores")
    let telaSinal = document.getElementById("sinalExibido")
    
    const areaBotoes = document.querySelector(".fundoTeclas")
    
    let valor = ""
    let valor2 = ""
    let sinal = ""
    let detector_sinal = "desativado"
    let detec_valor = 0

    areaBotoes.addEventListener('click',function(event){
        let botao = event.target.id
        
        switch(botao) {
            case "tec1":

                valor += "1"
                telaExibidora.innerHTML = ``
                telaExibidora.innerHTML = `${valor}`
                break

            case "tec2":

                valor += "2"
                telaExibidora.innerHTML = ``
                telaExibidora.innerHTML = `${valor}`
                break

            case "tec3":

                valor += "3"
                telaExibidora.innerHTML = ``
                telaExibidora.innerHTML = `${valor}`
                break

            case "tec4":

                valor += "4"
                telaExibidora.innerHTML = ``
                telaExibidora.innerHTML = `${valor}`
                break

            case "tec5":

                valor += "5"
                telaExibidora.innerHTML = ``
                telaExibidora.innerHTML = `${valor}`
                break

            case "tec6":

                valor += "6"
                telaExibidora.innerHTML = ``
                telaExibidora.innerHTML = `${valor}`
                break

            case "tec7":

                valor += "7"
                telaExibidora.innerHTML = ``
                telaExibidora.innerHTML = `${valor}`
                break

            case "tec8":

                valor += "8"
                telaExibidora.innerHTML = ``
                telaExibidora.innerHTML = `${valor}`
                break

            case "tec9":

                valor += "9"
                telaExibidora.innerHTML = ``
                telaExibidora.innerHTML = `${valor}`
                break

            case "tec0":

                valor += "0"
                telaExibidora.innerHTML = ``
                telaExibidora.innerHTML = `${valor}`
                break

            case "trocaSinal":

                telaExibidora.innerHTML = ""
                if(detec_valor == 0) {
                    valor = Number(valor) * -1
                    telaExibidora.innerHTML = valor
                } else {
                    valor2 = Number(valor2) * -1
                    telaExibidora.innerHTML = valor2
                }
                break

            case "tecponto":
                telaExibidora.innerHTML = ""
                let valorTemp = ""
                valorTemp = valor + "."
                valor = valorTemp
                telaExibidora.innerHTML = valor
                break

            case "tecsCalc_divisao":

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
                    break

            case "tecsCalc_soma":

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
                    break

            case "tecsCalc_subtracao":

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
                break

            case "tecsCalc_porcentagem":

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
                break

            case "tecigual":
                telaSinal.innerHTML = ""
                calculador()
                detec_valor = 1
                valor = ""
                sinal = ""
                break

            case "tecMultiplica":

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
                break

            case "reset":
                limpar()
                break

            default:
        }
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
    
    
})()

