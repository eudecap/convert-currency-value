const convertButton = document.getElementById('convertButton')
const converterDe = document.getElementById('converterDe')
const converterPara = document.getElementById('converterPara')

sistemImgOne = () => {
const converterDe = document.getElementById('converterDe').value
const converterPara = document.getElementById('converterPara').value
const imgOne = document.getElementById('imgOne')
const imgTwo = document.getElementById('imgTwo')

    if( converterDe === "BRL" ){
        imgOne.src = "./assets/brasil 2.svg"
    }
    if( converterDe === "US$" ){
        imgOne.src = "./assets/estados-unidos (1) 1.svg"
    }
    if( converterDe === "€" ){
        imgOne.src = "./assets/euro.svg"
    }

// ==================================================== //

    if( converterPara === "US$" ){
        imgTwo.src = "./assets/estados-unidos (1) 1.svg"
    }
    if( converterPara === "€" ){
        imgTwo.src = "./assets/euro.svg"
    }
    if( converterPara === "BRL" ){
        imgTwo.src = "./assets/brasil 2.svg"
    }
}

sistemConvert = () => {
    const converterDe = document.getElementById('converterDe').value
    const converterPara = document.getElementById('converterPara').value
    const meuValor = document.getElementById('myValue').value

    const realDolar = 0.20 // BRL
    const realEuro = 0.19 // BRL
    const dolarReal = 4.94 // US$
    const dolarEuro = 0.92 // US$
    const euroReal = 5.40 // €
    const euroDolar = 1.09 // €

    const valor = document.getElementById('inputValue')

    if( converterDe === "BRL"){
        valor.value = (meuValor * realDolar).toFixed(2)
    }
    if( converterDe === "BRL" && converterPara === "€" ){
        valor.value = (meuValor * realEuro).toFixed(2)
    }
    if( converterDe === "BRL" && converterPara === "BRL" ){
        valor.value = (meuValor * 1).toFixed(2)
    }
    if( converterDe === "US$" && converterPara === "BRL" ){
        valor.value = (meuValor * dolarReal).toFixed(2)
    }
    if( converterDe === "US$" && converterPara === "€" ){
        valor.value = (meuValor * dolarEuro).toFixed(2)
    }
    if( converterDe === "US$" && converterPara === "US$" ){
        valor.value = (meuValor * 1).toFixed(2)
    }
    if( converterDe === "€" && converterPara === "BRL" ){
        valor.value = (meuValor * euroReal).toFixed(2)
    }
    if( converterDe === "€" && converterPara === "US$" ){
        valor.value = (meuValor * euroDolar).toFixed(2)
    }
    if( converterDe === "€" && converterPara === "€" ){
        valor.value = (meuValor * 1).toFixed(2)
    }
}

converterPara.addEventListener('change', sistemImgOne)
converterDe.addEventListener('change', sistemImgOne)
convertButton.addEventListener('click', sistemConvert)